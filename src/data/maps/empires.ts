import type { BibleMapData } from '../../types/maps'

export const empiresMap: BibleMapData = {
  id: 'empires',
  name: 'Bible Empires',
  description: 'The major empires that shaped biblical history',
  icon: '🌍',
  backgroundColor: '#f8f6f2',
  landColor: '#e8e4dd',
  waterColor: '#bfdbfe',
  locations: [
    { id: 'egypt_empire', name: 'Egypt', description: 'The empire that enslaved Israel and later became a refuge.', x: 38, y: 70, type: 'region', empire: 'Egypt', date: 'c. 3100-332 BC', references: ['Genesis 12:10', 'Exodus 1:8-14', 'Matthew 2:13-15'], modernCountry: 'Egypt' },
    { id: 'assyria_empire', name: 'Assyria', description: 'Conquered the Northern Kingdom of Israel in 722 BC.', x: 75, y: 28, type: 'region', empire: 'Assyria', date: 'c. 2500-612 BC', references: ['2 Kings 17:1-6', '2 Kings 18:9-12', 'Nahum 1:1'], modernCountry: 'Iraq' },
    { id: 'babylon_empire', name: 'Babylon', description: 'Conquered Judah and destroyed the Temple in 586 BC.', x: 77, y: 34, type: 'region', empire: 'Babylon', date: 'c. 1894-539 BC', references: ['2 Kings 24:1-25:21', 'Daniel 1:1-7', 'Jeremiah 39:1-10'], modernCountry: 'Iraq' },
    { id: 'persia_empire', name: 'Persia', description: 'Allowed the Jews to return to Jerusalem and rebuild the Temple.', x: 90, y: 40, type: 'region', empire: 'Persia', date: 'c. 550-330 BC', references: ['Ezra 1:1-4', 'Nehemiah 1:1-2', 'Esther 1:1-4'], modernCountry: 'Iran' },
    { id: 'greece_empire', name: 'Greece', description: 'Conquered the known world under Alexander the Great.', x: 20, y: 40, type: 'region', empire: 'Greece', date: 'c. 336-146 BC', references: ['Daniel 2:39', 'Daniel 8:21', 'Daniel 11:2-4'], modernCountry: 'Greece' },
    { id: 'rome_empire', name: 'Rome', description: 'The empire that ruled during the time of Jesus and the early church.', x: 14, y: 42, type: 'region', empire: 'Rome', date: 'c. 27 BC-476 AD', references: ['Luke 2:1', 'Acts 28:14-31', 'Romans 1:7'], modernCountry: 'Italy' }
  ]
}