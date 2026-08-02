// src/data/maps/conquest.ts
import type { BibleMapData } from '../../types/maps'

export const conquestMap: BibleMapData = {
  id: 'conquest',
  name: 'Conquest of Canaan',
  description: 'The conquest of the Promised Land under Joshua',
  icon: '⚔️',
  backgroundColor: '#f5f0e8',
  landColor: '#e8dfcc',
  waterColor: '#b8d4e8',
  locations: [
    { id: 'gilgal_conquest', name: 'Gilgal', description: 'First camp in the Promised Land. Base of operations for the conquest.', x: 58, y: 62, type: 'city', events: ['First camp (Joshua 4-5)', 'Headquarters (Joshua 10)'], references: ['Joshua 4:19-24', 'Joshua 5:2-12', 'Joshua 10:6-15'] },
    { id: 'jericho_conquest', name: 'Jericho', description: 'The first city conquered. The walls fell after Israel marched for seven days.', x: 56, y: 58, type: 'city', events: ['Walls fall (Joshua 6)'], references: ['Joshua 6:1-27'] },
    { id: 'ai', name: 'Ai', description: 'Second city conquered. First attempt failed due to sin; second succeeded.', x: 54, y: 54, type: 'city', events: ['First defeat (Joshua 7)', 'Second victory (Joshua 8)'], references: ['Joshua 7:1-8:29'] },
    { id: 'gibeon_conquest', name: 'Gibeon', description: 'The Gibeonites deceived Israel into making a covenant of peace.', x: 52, y: 52, type: 'city', events: ['Deception (Joshua 9)', 'Sun stands still (Joshua 10)'], references: ['Joshua 9:3-27', 'Joshua 10:12-14'] },
    { id: 'hazor', name: 'Hazor', description: 'The major Canaanite city in the north, head of the northern alliance.', x: 60, y: 28, type: 'city', events: ['Conquest of Hazor (Joshua 11)'], references: ['Joshua 11:1-15'] },
    { id: 'debir', name: 'Debir', description: 'A city in the southern hill country, conquered by Joshua and later by Othniel.', x: 48, y: 68, type: 'city', events: ['Conquest (Joshua 10:38-39)', 'Othniel conquers (Judges 1)'], references: ['Joshua 10:38-39', 'Joshua 15:15-19', 'Judges 1:11-15'] },
    { id: 'shechem', name: 'Shechem', description: 'Ancient city between Mount Gerizim and Mount Ebal. Place of covenant renewal.', x: 52, y: 44, type: 'city', events: ['Covenant renewal (Joshua 8:30-35)', 'Joshua\'s farewell (Joshua 24)'], references: ['Joshua 8:30-35', 'Joshua 24:1-28'] },
    { id: 'shiloh', name: 'Shiloh', description: 'Where the Tabernacle was set up after the conquest.', x: 50, y: 48, type: 'city', events: ['Tabernacle set up (Joshua 18:1)', 'Land distribution (Joshua 18-19)'], references: ['Joshua 18:1-10', 'Joshua 19:51'] },
    { id: 'jerusalem_conquest', name: 'Jerusalem', description: 'A Jebusite city during the conquest, later captured by David.', x: 48, y: 54, type: 'city', events: ['Jebusite city (Joshua 15:63)'], references: ['Joshua 15:63', 'Judges 1:21'] },
    { id: 'hebron', name: 'Hebron', description: 'City given to Caleb. City of refuge and priestly city.', x: 44, y: 62, type: 'city', events: ['Caleb\'s inheritance (Joshua 14)', 'City of refuge (Joshua 20:7)'], references: ['Joshua 14:6-15', 'Joshua 20:7'] },
    { id: 'beersheba', name: 'Beersheba', description: 'Southernmost city. "From Dan to Beersheba" marked the full extent of Israel.', x: 38, y: 70, type: 'city', events: ['Southern boundary (Joshua 15:28)'], references: ['Joshua 15:28', 'Joshua 19:2'] },
    { id: 'dan', name: 'Dan', description: 'Northernmost city. "From Dan to Beersheba" marked the full extent of Israel.', x: 62, y: 22, type: 'city', events: ['Northern boundary (Joshua 19:47)'], references: ['Joshua 19:47', 'Judges 18:27-29'] },
    { id: 'jordan_river', name: 'Jordan River', description: 'The river Israel crossed to enter the Promised Land. God parted the waters.', x: 62, y: 56, type: 'water', events: ['Crossing the Jordan (Joshua 3-4)'], references: ['Joshua 3:14-17', 'Joshua 4:1-24'] },
    { id: 'dead_sea', name: 'Dead Sea', description: 'Salt Sea. The lowest point on earth. Eastern boundary.', x: 64, y: 68, type: 'water', references: ['Joshua 3:16', 'Joshua 15:2'] },
    { id: 'sea_of_galilee', name: 'Sea of Galilee', description: 'Freshwater lake in the north. Also called Sea of Chinnereth.', x: 62, y: 32, type: 'water', references: ['Joshua 13:27'] },
    { id: 'mediterranean', name: 'Great Sea', description: 'The Mediterranean Sea. Western boundary of the Promised Land.', x: 15, y: 40, type: 'water', references: ['Joshua 1:4', 'Joshua 9:1'] },
    { id: 'mount_ebal', name: 'Mount Ebal', description: 'The mount of cursing. Altar built here.', x: 52, y: 42, type: 'mountain', events: ['Altar built (Joshua 8:30)'], references: ['Joshua 8:30-35'] },
    { id: 'mount_gerizim', name: 'Mount Gerizim', description: 'The mount of blessing opposite Mount Ebal.', x: 50, y: 42, type: 'mountain', references: ['Joshua 8:33'] },
  ],
  routes: [
    { 
      points: [
        { x: 62, y: 56 }, // Jordan crossing
        { x: 58, y: 62 }, // Gilgal
        { x: 56, y: 58 }, // Jericho
        { x: 54, y: 54 }, // Ai
        { x: 52, y: 52 }, // Gibeon
        { x: 48, y: 54 }, // Jerusalem
        { x: 44, y: 62 }, // Hebron
        { x: 48, y: 68 }, // Debir
      ], 
      color: '#dc2626', 
      label: 'Central Campaign' 
    },
    { 
      points: [
        { x: 58, y: 62 }, // Gilgal
        { x: 52, y: 44 }, // Shechem
        { x: 60, y: 28 }, // Hazor
        { x: 62, y: 22 }, // Dan
      ], 
      color: '#2563eb', 
      label: 'Northern Campaign' 
    },
    { 
      points: [
        { x: 58, y: 62 }, // Gilgal
        { x: 48, y: 54 }, // Jerusalem
        { x: 44, y: 62 }, // Hebron
        { x: 38, y: 70 }, // Beersheba
      ], 
      color: '#16a34a', 
      label: 'Southern Campaign' 
    },
  ]
}