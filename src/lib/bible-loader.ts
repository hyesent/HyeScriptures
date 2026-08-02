// ========== IMPORT XML FILES ==========
import enKjvXml from '../data/bibles/xml/en_kjv.xml?raw'  // OSIS format
import enBbeXml from '../data/bibles/xml/en_bbe.xml?raw'  // Legacy format
import frApeXml from '../data/bibles/xml/fr_ape.xml?raw'  // Legacy format
import eoEsperantoXml from '../data/bibles/xml/eo_esperanto.xml?raw'  // Legacy format
import elGreekXml from '../data/bibles/xml/el_greek.xml?raw'  // Legacy format

export interface BibleVerse {
  book: string
  bookId: string
  chapter: number
  verse: number
  text: string
}

export interface BibleTranslation {
  id: string
  name: string
  language: string
  languageCode: string
  verses: BibleVerse[]
}

// ========== TRANSLATION REGISTRY ==========
export const translations: Record<string, { id: string; name: string; language: string; languageCode: string; file: string; format: 'legacy' | 'osis' }> = {
  'en_kjv': { id: 'en_kjv', name: 'King James Version', language: 'English', languageCode: 'en', file: 'en_kjv.xml', format: 'osis' },
  'en_bbe': { id: 'en_bbe', name: 'Bible in Basic English', language: 'English', languageCode: 'en', file: 'en_bbe.xml', format: 'legacy' },
  'fr_ape': { id: 'fr_ape', name: 'La Bible en français courant', language: 'French', languageCode: 'fr', file: 'fr_ape.xml', format: 'legacy' },
  'eo_esperanto': { id: 'eo_esperanto', name: 'Esperanto Bible', language: 'Esperanto', languageCode: 'eo', file: 'eo_esperanto.xml', format: 'legacy' },
  'el_greek': { id: 'el_greek', name: 'Greek Bible', language: 'Greek', languageCode: 'el', file: 'el_greek.xml', format: 'legacy' }
}

export const getTranslationList = () => {
  return Object.values(translations).map(t => ({ id: t.id, name: t.name, language: t.language, languageCode: t.languageCode }))
}

// ========== XML MAPPING ==========
const xmlMap: Record<string, string> = {
  'en_kjv': enKjvXml, 'en_bbe': enBbeXml, 'fr_ape': frApeXml, 'eo_esperanto': eoEsperantoXml, 'el_greek': elGreekXml,
}

// ========== BOOK NAME MAP (for OSIS) ==========
const BOOK_NAMES: Record<string, string> = {
  'Gen': 'Genesis', 'Exod': 'Exodus', 'Lev': 'Leviticus', 'Num': 'Numbers',
  'Deut': 'Deuteronomy', 'Josh': 'Joshua', 'Judg': 'Judges', 'Ruth': 'Ruth',
  '1Sam': '1 Samuel', '2Sam': '2 Samuel', '1Kgs': '1 Kings', '2Kgs': '2 Kings',
  '1Chr': '1 Chronicles', '2Chr': '2 Chronicles', 'Ezra': 'Ezra', 'Neh': 'Nehemiah',
  'Esth': 'Esther', 'Job': 'Job', 'Ps': 'Psalms', 'Prov': 'Proverbs',
  'Eccl': 'Ecclesiastes', 'Song': 'Song of Solomon', 'Isa': 'Isaiah', 'Jer': 'Jeremiah',
  'Lam': 'Lamentations', 'Ezek': 'Ezekiel', 'Dan': 'Daniel', 'Hos': 'Hosea',
  'Joel': 'Joel', 'Amos': 'Amos', 'Obad': 'Obadiah', 'Jonah': 'Jonah',
  'Mic': 'Micah', 'Nah': 'Nahum', 'Hab': 'Habakkuk', 'Zeph': 'Zephaniah',
  'Hag': 'Haggai', 'Zech': 'Zechariah', 'Mal': 'Malachi',
  'Matt': 'Matthew', 'Mark': 'Mark', 'Luke': 'Luke', 'John': 'John',
  'Acts': 'Acts', 'Rom': 'Romans', '1Cor': '1 Corinthians', '2Cor': '2 Corinthians',
  'Gal': 'Galatians', 'Eph': 'Ephesians', 'Phil': 'Philippians', 'Col': 'Colossians',
  '1Thess': '1 Thessalonians', '2Thess': '2 Thessalonians', '1Tim': '1 Timothy',
  '2Tim': '2 Timothy', 'Titus': 'Titus', 'Phlm': 'Philemon', 'Heb': 'Hebrews',
  'Jas': 'James', '1Pet': '1 Peter', '2Pet': '2 Peter', '1John': '1 John',
  '2John': '2 John', '3John': '3 John', 'Jude': 'Jude', 'Rev': 'Revelation'
}

// ========== PARSER: LEGACY FORMAT (<b>, <c>, <v>) ==========
const parseLegacyXML = (xmlDoc: Document): BibleVerse[] => {
  const verses: BibleVerse[] = []
  const books = xmlDoc.querySelectorAll('b')
  books.forEach((book) => {
    const bookId = book.getAttribute('id') || ''
    const bookName = book.getAttribute('n') || ''
    const chapters = book.querySelectorAll('c')
    chapters.forEach((chapter) => {
      const chapterNum = parseInt(chapter.getAttribute('n') || '0')
      const verseElements = chapter.querySelectorAll('v')
      verseElements.forEach((verse) => {
        const verseNum = parseInt(verse.getAttribute('n') || '0')
        const text = (verse.textContent || '').replace(/\s+/g, ' ').trim()
        verses.push({ book: bookName, bookId, chapter: chapterNum, verse: verseNum, text })
      })
    })
  })
  return verses
}

// ========== PARSER: OSIS FORMAT (milestone tags) ==========
const cleanText = (text: string): string => {
  return text.replace(/\s+/g, ' ').replace(/\s+([.,;:!?)\]}"'])/g, '$1').replace(/([(\["'])\s+/g, '$1').trim()
}

const parseOSISXML = (xmlDoc: Document): BibleVerse[] => {
  const verses: BibleVerse[] = []
  const bookDivs = xmlDoc.querySelectorAll('div[type="book"]')
  
  bookDivs.forEach((bookDiv) => {
    const bookId = bookDiv.getAttribute('osisID') || ''
    const bookName = BOOK_NAMES[bookId] || bookId

    const walker = document.createTreeWalker(bookDiv, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => {
        if (node.nodeType === Node.TEXT_NODE) return NodeFilter.FILTER_ACCEPT
        if (node.nodeType === Node.ELEMENT_NODE) {
          const el = node as Element
          if (el.tagName === 'verse' && el.hasAttribute('sID')) return NodeFilter.FILTER_ACCEPT
          if (el.tagName === 'chapter' && el.hasAttribute('sID')) return NodeFilter.FILTER_ACCEPT
          return NodeFilter.FILTER_SKIP
        }
        return NodeFilter.FILTER_SKIP
      }
    })

    let currentChapter = 0, currentVerse = 0, currentText = ''
    let node = walker.nextNode()

    while (node) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as Element
        if (el.tagName === 'chapter' && el.hasAttribute('sID')) {
          if (currentVerse > 0 && currentText.trim()) {
            verses.push({ book: bookName, bookId, chapter: currentChapter, verse: currentVerse, text: cleanText(currentText) })
          }
          currentChapter = parseInt(el.getAttribute('n') || '0')
          currentVerse = 0
          currentText = ''
        }
        if (el.tagName === 'verse' && el.hasAttribute('sID')) {
          if (currentVerse > 0 && currentText.trim()) {
            verses.push({ book: bookName, bookId, chapter: currentChapter, verse: currentVerse, text: cleanText(currentText) })
          }
          currentVerse = parseInt(el.getAttribute('n') || '0')
          currentText = ''
        }
      } else if (node.nodeType === Node.TEXT_NODE) {
        currentText += node.textContent
      }
      node = walker.nextNode()
    }

    if (currentVerse > 0 && currentText.trim()) {
      verses.push({ book: bookName, bookId, chapter: currentChapter, verse: currentVerse, text: cleanText(currentText) })
    }
  })

  return verses
}

// ========== MAIN LOADER ==========
export const loadBibleXML = async (xmlString: string, translationId: string): Promise<BibleTranslation> => {
  const parser = new DOMParser()
  const xmlDoc = parser.parseFromString(xmlString, 'text/xml')
  const parserError = xmlDoc.querySelector('parsererror')
  if (parserError) throw new Error('Failed to parse XML: ' + parserError.textContent)
  
  const transInfo = translations[translationId] || translations['en_kjv']
  const verses = transInfo.format === 'osis' ? parseOSISXML(xmlDoc) : parseLegacyXML(xmlDoc)
  
  return { id: translationId, name: transInfo.name, language: transInfo.language, languageCode: transInfo.languageCode, verses }
}

export const loadBibleFromFile = async (translationId: string): Promise<BibleTranslation> => {
  const transInfo = translations[translationId]
  if (!transInfo) throw new Error(`Translation ${translationId} not found`)
  const xmlString = xmlMap[translationId]
  if (!xmlString) throw new Error(`No XML data found for ${translationId}`)
  return await loadBibleXML(xmlString, translationId)
}

// ========== CACHE ==========
let cachedBibles: Record<string, BibleTranslation> = {}

export const getBible = async (translationId: string = 'en_kjv'): Promise<BibleTranslation> => {
  if (cachedBibles[translationId]) return cachedBibles[translationId]
  const bible = await loadBibleFromFile(translationId)
  cachedBibles[translationId] = bible
  return bible
}

// ========== QUERY FUNCTIONS ==========
export const getVerses = (bible: BibleTranslation, book: string, chapter: number): string[] => {
  return bible.verses.filter(v => v.book === book && v.chapter === chapter).sort((a, b) => a.verse - b.verse).map(v => v.text)
}

export const getVerseText = (bible: BibleTranslation, book: string, chapter: number, verse: number): string | null => {
  const found = bible.verses.find(v => v.book === book && v.chapter === chapter && v.verse === verse)
  return found ? found.text : null
}

export const getBooks = (bible: BibleTranslation): string[] => {
  const bookSet = new Set<string>()
  bible.verses.forEach(v => bookSet.add(v.book))
  return Array.from(bookSet)
}

export const getChapterCount = (bible: BibleTranslation, book: string): number => {
  const chapterSet = new Set<number>()
  bible.verses.filter(v => v.book === book).forEach(v => chapterSet.add(v.chapter))
  return chapterSet.size
}

export const getBookId = (bible: BibleTranslation, bookName: string): string | null => {
  const found = bible.verses.find(v => v.book === bookName)
  return found ? found.bookId : null
}

export const searchBible = (bible: BibleTranslation, query: string): BibleVerse[] => {
  const lowerQuery = query.toLowerCase()
  return bible.verses.filter(v => v.text.toLowerCase().includes(lowerQuery))
}

export const getVersesByBook = (bible: BibleTranslation, book: string): BibleVerse[] => {
  return bible.verses.filter(v => v.book === book)
}

export const getRandomVerse = (bible: BibleTranslation): BibleVerse => {
  return bible.verses[Math.floor(Math.random() * bible.verses.length)]
}

export const getBooksBySection = (bible: BibleTranslation): { section: string; books: string[] }[] => {
  const allBooks = getBooks(bible)
  const otBooks = ['Genesis','Exodus','Leviticus','Numbers','Deuteronomy','Joshua','Judges','Ruth','1 Samuel','2 Samuel','1 Kings','2 Kings','1 Chronicles','2 Chronicles','Ezra','Nehemiah','Esther','Job','Psalms','Proverbs','Ecclesiastes','Song of Solomon','Isaiah','Jeremiah','Lamentations','Ezekiel','Daniel','Hosea','Joel','Amos','Obadiah','Jonah','Micah','Nahum','Habakkuk','Zephaniah','Haggai','Zechariah','Malachi']
  const ntBooks = ['Matthew','Mark','Luke','John','Acts','Romans','1 Corinthians','2 Corinthians','Galatians','Ephesians','Philippians','Colossians','1 Thessalonians','2 Thessalonians','1 Timothy','2 Timothy','Titus','Philemon','Hebrews','James','1 Peter','2 Peter','1 John','2 John','3 John','Jude','Revelation']
  
  const existingOT = otBooks.filter(b => allBooks.includes(b))
  const existingNT = ntBooks.filter(b => allBooks.includes(b))
  const sections: { section: string; books: string[] }[] = []
  if (existingOT.length) sections.push({ section: 'Old Testament', books: existingOT })
  if (existingNT.length) sections.push({ section: 'New Testament', books: existingNT })
  const other = allBooks.filter(b => !existingOT.includes(b) && !existingNT.includes(b))
  if (other.length) sections.push({ section: 'Other', books: other })
  return sections
}

export const preloadAllBibles = async (): Promise<void> => {
  await Promise.all(Object.keys(translations).map(id => getBible(id)))
}