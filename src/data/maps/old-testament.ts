import type { BibleMapData } from '../../types/maps'

export const oldTestamentMap: BibleMapData = {
  id: 'old-testament',
  name: 'Old Testament',
  description: 'Key locations in the Old Testament - from Eden to Exile',
  icon: '📜',
  backgroundColor: '#f8f6f2',
  landColor: '#e8e4dd',
  waterColor: '#bfdbfe',
  locations: [
    { id: 'eden', name: 'Garden of Eden', description: 'The original paradise where God placed Adam and Eve. Traditionally located in Mesopotamia.', x: 72, y: 20, type: 'region', firstMention: 'Genesis 2:8', events: ['Creation of man (Genesis 2)', 'The Fall (Genesis 3)'], references: ['Genesis 2:8-17', 'Genesis 3:22-24'] },
    { id: 'ur', name: 'Ur of the Chaldeans', description: 'Birthplace of Abraham. A major city in ancient Mesopotamia.', x: 80, y: 36, type: 'city', firstMention: 'Genesis 11:28', events: ['Abraham\'s birth (Genesis 11)', 'Call of Abraham (Genesis 12)'], references: ['Genesis 11:28-32', 'Genesis 15:7', 'Nehemiah 9:7'], modernCountry: 'Iraq' },
    { id: 'haran', name: 'Haran', description: 'Where Abraham, Isaac, and Jacob lived. Where Jacob saw the ladder.', x: 72, y: 32, type: 'city', firstMention: 'Genesis 11:31', events: ['Abraham\'s stop (Genesis 11-12)', 'Jacob\'s dream (Genesis 28)'], references: ['Genesis 11:31-32', 'Genesis 12:4-5', 'Genesis 28:10-22'], modernCountry: 'Turkey' },
    { id: 'canaan', name: 'Canaan', description: 'The Promised Land, promised to Abraham and his descendants.', x: 48, y: 35, type: 'region', firstMention: 'Genesis 12:5', events: ['Abraham enters (Genesis 12)', 'Joshua conquers (Joshua 1-12)'], references: ['Genesis 12:5-7', 'Genesis 17:8', 'Joshua 1:1-6'] },
    { id: 'hebron_ot', name: 'Hebron', description: 'Where Abraham, Isaac, and Jacob are buried in the Cave of Machpelah.', x: 49, y: 40, type: 'city', firstMention: 'Genesis 13:18', events: ['Abraham settles (Genesis 13)', 'Sarah\'s burial (Genesis 23)'], references: ['Genesis 13:18', 'Genesis 23:19', 'Genesis 49:29-33'], modernCountry: 'Palestine' },
    { id: 'beersheba', name: 'Beersheba', description: 'The southern border of Israel. Where Abraham and Isaac dug wells.', x: 45, y: 48, type: 'city', firstMention: 'Genesis 21:14', events: ['Abraham\'s wells (Genesis 21)', 'Isaac\'s covenant (Genesis 26)'], references: ['Genesis 21:14-21', 'Genesis 26:23-33', '1 Samuel 3:20'], modernCountry: 'Israel' },
    { id: 'egypt_ot', name: 'Egypt', description: 'Land of the Exodus. Where Israel was enslaved and where Moses led them out.', x: 38, y: 70, type: 'region', firstMention: 'Genesis 12:10', events: ['Abraham in Egypt (Genesis 12)', 'Slavery (Exodus 1)', 'Exodus (Exodus 12)'], references: ['Genesis 12:10-20', 'Exodus 1-12', 'Exodus 12:31-42'], modernCountry: 'Egypt' },
    { id: 'babylon', name: 'Babylon', description: 'The great empire that conquered Judah and exiled the people.', x: 77, y: 34, type: 'city', firstMention: 'Genesis 10:10', events: ['Tower of Babel (Genesis 11)', 'Exile of Judah (2 Kings 25)'], references: ['Genesis 10:10', '2 Kings 25:1-21', 'Daniel 1:1-7', 'Revelation 17:1-5'], modernCountry: 'Iraq' },
    { id: 'nineveh', name: 'Nineveh', description: 'Capital of Assyria. The city Jonah was sent to preach repentance.', x: 70, y: 30, type: 'city', firstMention: 'Genesis 10:11', events: ['Jonah\'s mission (Jonah 1-4)', 'Fall of Nineveh (Nahum 1-3)'], references: ['Jonah 1:1-2', 'Jonah 3:1-10', 'Nahum 1:1'], modernCountry: 'Iraq' },
    { id: 'assyria', name: 'Assyria', description: 'The empire that conquered the northern kingdom of Israel.', x: 75, y: 28, type: 'region', firstMention: 'Genesis 2:14', events: ['Conquest of Israel (2 Kings 17)', 'Sennacherib\'s invasion (Isaiah 36-37)'], references: ['2 Kings 17:1-6', 'Isaiah 36-37'] },
    { id: 'persia', name: 'Persia', description: 'The empire that allowed the Jews to return to Jerusalem.', x: 90, y: 40, type: 'region', firstMention: '2 Chronicles 36:20', events: ['Cyrus\'s decree (Ezra 1)', 'Rebuilding the Temple (Ezra 3-6)'], references: ['Ezra 1:1-4', 'Nehemiah 1:1-2'] }
  ]
}