import type { BibleMapData } from '../../types/maps'

export const kingdomsMap: BibleMapData = {
  id: 'kingdoms',
  name: 'Kingdoms',
  description: 'The United and Divided Kingdoms of Israel and Judah',
  icon: '👑',
  backgroundColor: '#f8f6f2',
  landColor: '#e8e4dd',
  waterColor: '#bfdbfe',
  locations: [
    { id: 'jerusalem_kingdom', name: 'Jerusalem', description: 'Capital of the United Kingdom and the Kingdom of Judah.', x: 52, y: 35, type: 'city', events: ['David\'s capital (2 Samuel 5)', 'Temple built (1 Kings 6)'], references: ['2 Samuel 5:6-10', '1 Kings 6:1-38'], modernCountry: 'Israel' },
    { id: 'shechem_kingdom', name: 'Shechem', description: 'First capital of the Northern Kingdom of Israel.', x: 44, y: 30, type: 'city', events: ['Jeroboam\'s capital (1 Kings 12)'], references: ['1 Kings 12:25'], modernCountry: 'Palestine' },
    { id: 'samaria_kingdom', name: 'Samaria', description: 'Capital of the Northern Kingdom of Israel.', x: 45, y: 32, type: 'city', events: ['Omri\'s capital (1 Kings 16)', 'Fall of Israel (2 Kings 17)'], references: ['1 Kings 16:23-24', '2 Kings 17:1-6'], modernCountry: 'Palestine' },
    { id: 'bethel_kingdom', name: 'Bethel', description: 'Golden calf worship site in the Northern Kingdom.', x: 46, y: 32, type: 'city', events: ['Jeroboam\'s calf (1 Kings 12)'], references: ['1 Kings 12:25-33'], modernCountry: 'Palestine' },
    { id: 'dan_kingdom', name: 'Dan', description: 'Northern golden calf worship site.', x: 48, y: 12, type: 'city', events: ['Jeroboam\'s calf (1 Kings 12)'], references: ['1 Kings 12:25-33'] }
  ]
}