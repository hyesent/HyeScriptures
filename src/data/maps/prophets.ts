import type { BibleMapData } from '../../types/maps'

export const prophetsMap: BibleMapData = {
  id: 'prophets',
  name: 'Prophets',
  description: 'Where the prophets ministered in Israel and Judah',
  icon: '📢',
  backgroundColor: '#f8f6f2',
  landColor: '#e8e4dd',
  waterColor: '#bfdbfe',
  locations: [
    { id: 'isaiah', name: 'Isaiah', description: 'Ministered in Jerusalem during the reigns of Uzziah, Jotham, Ahaz, and Hezekiah.', x: 52, y: 35, type: 'city', prophet: 'Isaiah', references: ['Isaiah 1:1', 'Isaiah 6:1-8'] },
    { id: 'jeremiah', name: 'Jeremiah', description: 'Ministered in Jerusalem before and during the Babylonian exile.', x: 52, y: 35, type: 'city', prophet: 'Jeremiah', references: ['Jeremiah 1:1-10', 'Jeremiah 20:1-6'] },
    { id: 'ezekiel', name: 'Ezekiel', description: 'Ministered to the exiles in Babylon.', x: 77, y: 34, type: 'city', prophet: 'Ezekiel', references: ['Ezekiel 1:1-3', 'Ezekiel 3:15'] },
    { id: 'daniel', name: 'Daniel', description: 'Minister in Babylon and Persia.', x: 77, y: 34, type: 'city', prophet: 'Daniel', references: ['Daniel 1:1-7', 'Daniel 6:1-28'] },
    { id: 'jonah', name: 'Jonah', description: 'Called to preach to Nineveh in Assyria.', x: 70, y: 30, type: 'city', prophet: 'Jonah', references: ['Jonah 1:1-2', 'Jonah 3:1-4'] },
    { id: 'amos', name: 'Amos', description: 'A shepherd from Tekoa who prophesied in the Northern Kingdom.', x: 50, y: 42, type: 'city', prophet: 'Amos', references: ['Amos 1:1', 'Amos 7:10-17'] },
    { id: 'micah', name: 'Micah', description: 'Prophesied in Judah during the reigns of Jotham, Ahaz, and Hezekiah.', x: 52, y: 35, type: 'city', prophet: 'Micah', references: ['Micah 1:1', 'Jeremiah 26:18'] },
    { id: 'elijah', name: 'Elijah', description: 'Ministered in the Northern Kingdom, especially on Mount Carmel.', x: 38, y: 29, type: 'mountain', prophet: 'Elijah', references: ['1 Kings 17:1', '1 Kings 18:16-45'] },
    { id: 'elisha', name: 'Elisha', description: 'Elijah\'s successor, ministered in the Northern Kingdom.', x: 42, y: 30, type: 'region', prophet: 'Elisha', references: ['2 Kings 2:1-15', '2 Kings 6:1-23'] }
  ]
}