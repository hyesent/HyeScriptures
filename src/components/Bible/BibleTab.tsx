import React, { useState } from 'react'
import { useBible } from '../../hooks/useBible'
import { BookList } from '../BookList/BookList'
import { ChapterList } from '../ChapterList/ChapterList'
import { VerseView } from '../VerseView/VerseView'
import { Search } from '../Search/Search'
import { CrossReferences } from '../Study/CrossReferences'
import { ChevronLeft, Search as SearchIcon, Globe } from 'lucide-react'
import styles from './BibleTab.module.css'

type BibleView = 'books' | 'chapters' | 'verses' | 'search' | 'crossReferences'

export const BibleTab: React.FC = () => {
  const [view, setView] = useState<BibleView>('books')
  const [selectedVerseForCrossRef, setSelectedVerseForCrossRef] = useState<string>('')
  const [viewHistory, setViewHistory] = useState<BibleView[]>([])
  const [showTranslationMenu, setShowTranslationMenu] = useState(false)

  const {
    currentBook,
    currentChapter,
    verses,
    totalChapters,
    goToBook,
    goToChapter,
    nextChapter,
    prevChapter,
    availableTranslations,
    translationId,
    switchTranslation,
  } = useBible()

  const navigateTo = (newView: BibleView) => {
    setViewHistory(prev => [...prev, view])
    setView(newView)
  }

  const handleBack = () => {
    if (viewHistory.length > 0) {
      const prevView = viewHistory[viewHistory.length - 1]
      setViewHistory(prev => prev.slice(0, -1))
      setView(prevView)
    } else {
      setView('books')
    }
  }

  const handleSelectVerse = (reference: string) => {
    const parts = reference.split(' ')
    const book = parts.slice(0, -1).join(' ')
    const chapterVerse = parts[parts.length - 1].split(':')
    const chapter = parseInt(chapterVerse[0])
    goToChapter(book, chapter)
    setViewHistory([])
    setView('verses')
  }

  const showBackButton = view !== 'books'
  const showSearchButton = view !== 'search'

  const renderContent = () => {
    switch (view) {
      case 'books':
        return (
          <BookList 
            onSelectBook={(book) => {
              goToBook(book)
              navigateTo('chapters')
            }} 
          />
        )
      case 'chapters':
        return (
          <ChapterList 
            totalChapters={totalChapters} 
            onSelectChapter={(chapter) => {
              goToChapter(currentBook, chapter)
              navigateTo('verses')
            }} 
          />
        )
      case 'verses':
        return (
          <VerseView
            book={currentBook}
            chapter={currentChapter}
            verses={verses}
            translationId={translationId}
            onNext={nextChapter}
            onPrev={prevChapter}
            onSelectVerseForCrossRef={(ref) => {
              setSelectedVerseForCrossRef(ref)
              navigateTo('crossReferences')
            }}
          />
        )
      case 'search':
        return <Search onSelectVerse={handleSelectVerse} />
      case 'crossReferences':
        return (
          <CrossReferences
            verseReference={selectedVerseForCrossRef}
            onSelectVerse={handleSelectVerse}
            onBack={handleBack}
          />
        )
      default:
        return null
    }
  }

  const getTitle = () => {
    switch (view) {
      case 'books': return 'Books'
      case 'chapters': return currentBook
      case 'verses': return `${currentBook} ${currentChapter}`
      case 'search': return 'Search'
      case 'crossReferences': return 'Cross References'
      default: return 'Bible'
    }
  }

  const currentTranslation = availableTranslations.find(t => t.id === translationId)

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          {showBackButton && (
            <button className={styles.backBtn} onClick={handleBack}>
              <ChevronLeft size={20} />
            </button>
          )}
          <div>
            <h2 className={styles.title}>{getTitle()}</h2>
            <button 
              className={styles.translationBtn}
              onClick={() => setShowTranslationMenu(!showTranslationMenu)}
            >
              <Globe size={12} />
              <span>{currentTranslation?.name || 'KJV'}</span>
            </button>
          </div>
        </div>
        <div className={styles.headerRight}>
          {showSearchButton && (
            <button className={styles.searchBtn} onClick={() => navigateTo('search')}>
              <SearchIcon size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Translation Dropdown */}
      {showTranslationMenu && (
        <div className={styles.translationMenu}>
          <div className={styles.translationMenuHeader}>Select Translation</div>
          {availableTranslations.map(t => (
            <button
              key={t.id}
              className={`${styles.translationOption} ${t.id === translationId ? styles.active : ''}`}
              onClick={() => {
                switchTranslation(t.id)
                setShowTranslationMenu(false)
              }}
            >
              <span className={styles.translationName}>{t.name}</span>
              <span className={styles.translationLang}>{t.language}</span>
              {t.id === translationId && <span className={styles.checkmark}>✓</span>}
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      <div className={styles.content}>
        {renderContent()}
      </div>
    </div>
  )
}

export default BibleTab