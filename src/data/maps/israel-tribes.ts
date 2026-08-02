import type { BibleMapData } from '../../types/maps'

export const israelTribesMap: BibleMapData = {
  id: 'israel-tribes',
  name: 'Israel Tribes',
  description: 'The division of the Promised Land among the 12 tribes of Israel',
  icon: '🏘️',
  backgroundColor: '#f8f6f2',
  landColor: '#e8e4dd',
  waterColor: '#bfdbfe',
  locations: [
    { id: 'dan', name: 'Dan', description: 'The northernmost tribe. Territory near Mount Hermon.', x: 48, y: 12, type: 'region', tribe: 'Dan', references: ['Joshua 19:40-48'] },
    { id: 'naphtali', name: 'Naphtali', description: 'Territory in Galilee, west of the Sea of Galilee.', x: 54, y: 16, type: 'region', tribe: 'Naphtali', references: ['Joshua 19:32-39'] },
    { id: 'ashur', name: 'Asher', description: 'Territory along the Mediterranean coast north of Mount Carmel.', x: 44, y: 18, type: 'region', tribe: 'Asher', references: ['Joshua 19:24-31'] },
    { id: 'zebulun', name: 'Zebulun', description: 'Territory in lower Galilee, south of Naphtali.', x: 50, y: 20, type: 'region', tribe: 'Zebulun', references: ['Joshua 19:10-16'] },
    { id: 'issachar', name: 'Issachar', description: 'Territory southeast of the Sea of Galilee.', x: 56, y: 20, type: 'region', tribe: 'Issachar', references: ['Joshua 19:17-23'] },
    { id: 'manasseh', name: 'Manasseh', description: 'The largest tribe, split across the Jordan River.', x: 52, y: 26, type: 'region', tribe: 'Manasseh', references: ['Joshua 13:29-31', 'Joshua 17:1-13'] },
    { id: 'ephraim', name: 'Ephraim', description: 'Central hill country, including Shechem and Shiloh.', x: 46, y: 30, type: 'region', tribe: 'Ephraim', references: ['Joshua 16:5-10'] },
    { id: 'benjamin', name: 'Benjamin', description: 'Territory between Ephraim and Judah, including Jerusalem and Jericho.', x: 48, y: 34, type: 'region', tribe: 'Benjamin', references: ['Joshua 18:11-28'] },
    { id: 'judah', name: 'Judah', description: 'The largest tribe in the south. Includes Jerusalem, Bethlehem, and Hebron.', x: 50, y: 40, type: 'region', tribe: 'Judah', references: ['Joshua 15:1-63'] },
    { id: 'simeon', name: 'Simeon', description: 'Territory within Judah, in the southwest.', x: 46, y: 46, type: 'region', tribe: 'Simeon', references: ['Joshua 19:1-9'] },
    { id: 'gad', name: 'Gad', description: 'Territory east of the Jordan, south of Manasseh.', x: 56, y: 30, type: 'region', tribe: 'Gad', references: ['Joshua 13:24-28'] },
    { id: 'reuben', name: 'Reuben', description: 'Territory east of the Jordan, south of Gad.', x: 54, y: 36, type: 'region', tribe: 'Reuben', references: ['Joshua 13:15-23'] }
  ]
}