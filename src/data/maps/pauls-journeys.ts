import type { BibleMapData } from '../../types/maps'

export const paulsJourneysMap: BibleMapData = {
  id: 'pauls-journeys',
  name: "Paul's Journeys",
  description: 'The missionary journeys of the Apostle Paul across the Roman Empire',
  icon: '🚶',
  backgroundColor: '#f8f6f2',
  landColor: '#e8e4dd',
  waterColor: '#bfdbfe',
  locations: [
    { id: 'jerusalem_paul', name: 'Jerusalem', description: 'Starting point of Paul\'s journeys. Where he was converted and began his ministry.', x: 52, y: 35, type: 'city', events: ['Paul\'s conversion (Acts 9)', 'Council of Jerusalem (Acts 15)'], references: ['Acts 9:1-19', 'Acts 15:1-35'], modernCountry: 'Israel' },
    { id: 'antioch', name: 'Antioch', description: 'The base for Paul\'s missionary journeys. Where believers were first called Christians.', x: 58, y: 30, type: 'city', events: ['First called Christians (Acts 11:26)', 'Launch of missionary journeys (Acts 13)'], references: ['Acts 11:19-26', 'Acts 13:1-3'], modernCountry: 'Turkey' },
    { id: 'cyprus', name: 'Cyprus', description: 'First missionary journey. Paul and Barnabas preached here.', x: 50, y: 50, type: 'region', events: ['Paul and Barnabas preach (Acts 13:4-12)'], references: ['Acts 13:4-12'] },
    { id: 'pisidia', name: 'Pisidian Antioch', description: 'Paul preached in the synagogue here and was rejected.', x: 55, y: 38, type: 'city', events: ['Paul preaches in synagogue (Acts 13:14-52)'], references: ['Acts 13:14-52'], modernCountry: 'Turkey' },
    { id: 'iconium', name: 'Iconium', description: 'Paul and Barnabas preached here and were persecuted.', x: 58, y: 38, type: 'city', events: ['Paul and Barnabas preach (Acts 14:1-7)'], references: ['Acts 14:1-7'], modernCountry: 'Turkey' },
    { id: 'lystra', name: 'Lystra', description: 'Paul healed a crippled man here. He was stoned and left for dead.', x: 57, y: 40, type: 'city', events: ['Healing of crippled man (Acts 14:8-20)', 'Timothy joins (Acts 16:1-3)'], references: ['Acts 14:8-20', 'Acts 16:1-3'], modernCountry: 'Turkey' },
    { id: 'derbe', name: 'Derbe', description: 'The last stop on the first journey. Many disciples were made here.', x: 60, y: 41, type: 'city', events: ['Many disciples made (Acts 14:20-21)'], references: ['Acts 14:20-21'], modernCountry: 'Turkey' },
    { id: 'philippi', name: 'Philippi', description: 'First European church. Paul imprisoned and the jailer converted.', x: 20, y: 35, type: 'city', events: ['Lydia converted (Acts 16:11-15)', 'Paul imprisoned (Acts 16:16-40)'], references: ['Acts 16:11-40', 'Philippians 1:1'], modernCountry: 'Greece' },
    { id: 'thessalonica', name: 'Thessalonica', description: 'Paul preached here and established a church. He wrote two letters to them.', x: 18, y: 32, type: 'city', events: ['Paul preaches (Acts 17:1-9)'], references: ['Acts 17:1-9', '1 Thessalonians 1:1'], modernCountry: 'Greece' },
    { id: 'berea', name: 'Berea', description: 'The Bereans were noble for searching the Scriptures daily.', x: 20, y: 31, type: 'city', events: ['Paul preaches (Acts 17:10-15)'], references: ['Acts 17:10-15'], modernCountry: 'Greece' },
    { id: 'athens', name: 'Athens', description: 'Paul preached on Mars Hill about the unknown god.', x: 23, y: 43, type: 'city', events: ['Paul preaches at Areopagus (Acts 17:16-34)'], references: ['Acts 17:16-34'], modernCountry: 'Greece' },
    { id: 'corinth', name: 'Corinth', description: 'Paul spent 18 months here. He wrote 1 & 2 Corinthians to this church.', x: 26, y: 44, type: 'city', events: ['Paul preaches (Acts 18:1-18)'], references: ['Acts 18:1-18', '1 Corinthians 1:1-2'], modernCountry: 'Greece' },
    { id: 'ephesus', name: 'Ephesus', description: 'Paul spent 3 years here. A major center for ministry and church planting.', x: 32, y: 42, type: 'city', events: ['Paul preaches (Acts 19:1-41)'], references: ['Acts 19:1-41', 'Ephesians 1:1', 'Revelation 2:1-7'], modernCountry: 'Turkey' },
    { id: 'miletus', name: 'Miletus', description: 'Paul met with the Ephesian elders here for a final farewell.', x: 34, y: 43, type: 'city', events: ['Paul\'s farewell to elders (Acts 20:17-38)'], references: ['Acts 20:17-38'], modernCountry: 'Turkey' },
    { id: 'rome_paul', name: 'Rome', description: 'Paul\'s final destination. He was imprisoned and wrote several epistles here.', x: 14, y: 42, type: 'city', events: ['Paul imprisoned (Acts 28:14-31)'], references: ['Acts 28:14-31', 'Romans 1:7', 'Philippians 1:13'], modernCountry: 'Italy' },
    { id: 'tarsus', name: 'Tarsus', description: 'Paul\'s birthplace. A major city in Cilicia.', x: 58, y: 32, type: 'city', events: ['Paul\'s birthplace (Acts 21:39)', 'Paul sent to Tarsus (Acts 9:30)'], references: ['Acts 9:30', 'Acts 21:39', 'Acts 22:3'], modernCountry: 'Turkey' }
  ],
  routes: [
    { points: [{ x: 52, y: 35 }, { x: 58, y: 30 }, { x: 50, y: 50 }, { x: 55, y: 38 }, { x: 58, y: 38 }, { x: 57, y: 40 }, { x: 60, y: 41 }, { x: 58, y: 30 }], color: '#ef4444', label: 'First Journey (AD 46-48)' },
    { points: [{ x: 52, y: 35 }, { x: 58, y: 30 }, { x: 57, y: 40 }, { x: 20, y: 35 }, { x: 18, y: 32 }, { x: 20, y: 31 }, { x: 23, y: 43 }, { x: 26, y: 44 }, { x: 58, y: 30 }], color: '#3b82f6', label: 'Second Journey (AD 49-52)' },
    { points: [{ x: 58, y: 30 }, { x: 57, y: 40 }, { x: 32, y: 42 }, { x: 34, y: 43 }, { x: 32, y: 42 }, { x: 52, y: 35 }], color: '#22c55e', label: 'Third Journey (AD 53-57)' },
    { points: [{ x: 52, y: 35 }, { x: 26, y: 44 }, { x: 14, y: 42 }], color: '#f59e0b', label: 'Journey to Rome (AD 59-60)' }
  ]
}