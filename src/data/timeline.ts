// src/data/games/timeline.ts

export interface TimelineEvent {
  id: string
  year: number
  label: string
  description: string
  reference: string
  category: 'creation' | 'patriarchs' | 'exodus' | 'conquest' | 'judges' | 'kingdom' | 'exile' | 'restoration' | 'intertestamental' | 'new-testament' | 'early-church' | 'revelation'
  color?: string
  people?: string[]
  location?: string
}

export const timelineEvents: TimelineEvent[] = [
  // ================================================================
  // CREATION & EARLY PATRIARCHS (4004 - 2000 BC) - 20 events
  // ================================================================
  {
    id: 't-001',
    year: -4004,
    label: 'Creation of the World',
    description: 'God creates the heavens and the earth in six days',
    reference: 'Genesis 1:1-31',
    category: 'creation',
    color: '#22c55e',
    people: ['God'],
    location: 'Heaven and Earth'
  },
  {
    id: 't-002',
    year: -4004,
    label: 'Adam and Eve',
    description: 'The first humans are created in God\'s image',
    reference: 'Genesis 1:26-27',
    category: 'creation',
    color: '#22c55e',
    people: ['Adam', 'Eve'],
    location: 'Garden of Eden'
  },
  {
    id: 't-003',
    year: -3900,
    label: 'The Fall of Man',
    description: 'Adam and Eve sin, bringing death into the world',
    reference: 'Genesis 3:1-24',
    category: 'creation',
    color: '#ef4444',
    people: ['Adam', 'Eve', 'Serpent'],
    location: 'Garden of Eden'
  },
  {
    id: 't-004',
    year: -3850,
    label: 'Cain and Abel',
    description: 'The first murder - Cain kills his brother Abel',
    reference: 'Genesis 4:1-16',
    category: 'creation',
    color: '#ef4444',
    people: ['Cain', 'Abel'],
    location: 'Outside Eden'
  },
  {
    id: 't-005',
    year: -3500,
    label: 'Birth of Seth',
    description: 'Seth is born to Adam and Eve as a replacement for Abel',
    reference: 'Genesis 4:25-26',
    category: 'creation',
    color: '#22c55e',
    people: ['Seth', 'Adam', 'Eve'],
    location: ''
  },
  {
    id: 't-006',
    year: -3380,
    label: 'Enoch',
    description: 'Enoch walks with God and is taken without dying',
    reference: 'Genesis 5:21-24',
    category: 'patriarchs',
    color: '#8b5cf6',
    people: ['Enoch'],
    location: ''
  },
  {
    id: 't-007',
    year: -3300,
    label: 'Noah',
    description: 'Noah builds the ark and the flood comes',
    reference: 'Genesis 6-9',
    category: 'patriarchs',
    color: '#3b82f6',
    people: ['Noah', 'Shem', 'Ham', 'Japheth'],
    location: 'Ark'
  },
  {
    id: 't-008',
    year: -3200,
    label: 'Tower of Babel',
    description: 'God confuses languages at Babel, scattering humanity',
    reference: 'Genesis 11:1-9',
    category: 'patriarchs',
    color: '#6b7280',
    people: ['Humanity'],
    location: 'Babel'
  },
  {
    id: 't-009',
    year: -2166,
    label: 'Birth of Abraham',
    description: 'Abraham is born in Ur of the Chaldeans',
    reference: 'Genesis 11:26',
    category: 'patriarchs',
    color: '#c9a84c',
    people: ['Abraham'],
    location: 'Ur'
  },
  {
    id: 't-010',
    year: -2100,
    label: 'Call of Abraham',
    description: 'God calls Abraham to leave Ur and go to Canaan',
    reference: 'Genesis 12:1-4',
    category: 'patriarchs',
    color: '#c9a84c',
    people: ['Abraham', 'Sarai', 'Lot'],
    location: 'Ur to Canaan'
  },
  {
    id: 't-011',
    year: -2090,
    label: 'Covenant with Abraham',
    description: 'God makes a covenant with Abraham, promising a son',
    reference: 'Genesis 15:1-21',
    category: 'patriarchs',
    color: '#c9a84c',
    people: ['Abraham'],
    location: 'Canaan'
  },
  {
    id: 't-012',
    year: -2080,
    label: 'Birth of Ishmael',
    description: 'Abraham fathers Ishmael through Hagar',
    reference: 'Genesis 16:1-16',
    category: 'patriarchs',
    color: '#c9a84c',
    people: ['Abraham', 'Hagar', 'Ishmael'],
    location: 'Canaan'
  },
  {
    id: 't-013',
    year: -2066,
    label: 'Birth of Isaac',
    description: 'Isaac is born to Abraham and Sarah in their old age',
    reference: 'Genesis 21:1-7',
    category: 'patriarchs',
    color: '#c9a84c',
    people: ['Abraham', 'Sarah', 'Isaac'],
    location: 'Canaan'
  },
  {
    id: 't-014',
    year: -2040,
    label: 'Sacrifice of Isaac',
    description: 'Abraham is tested by God to sacrifice Isaac',
    reference: 'Genesis 22:1-19',
    category: 'patriarchs',
    color: '#c9a84c',
    people: ['Abraham', 'Isaac'],
    location: 'Mount Moriah'
  },
  {
    id: 't-015',
    year: -2006,
    label: 'Birth of Jacob and Esau',
    description: 'Isaac and Rebekah have twin sons, Jacob and Esau',
    reference: 'Genesis 25:24-26',
    category: 'patriarchs',
    color: '#c9a84c',
    people: ['Isaac', 'Rebekah', 'Jacob', 'Esau'],
    location: 'Canaan'
  },
  {
    id: 't-016',
    year: -1970,
    label: 'Jacob\'s Ladder',
    description: 'Jacob has a vision of a ladder reaching to heaven',
    reference: 'Genesis 28:10-22',
    category: 'patriarchs',
    color: '#c9a84c',
    people: ['Jacob'],
    location: 'Bethel'
  },
  {
    id: 't-017',
    year: -1950,
    label: 'Joseph Sold into Slavery',
    description: 'Joseph is sold into slavery by his jealous brothers',
    reference: 'Genesis 37:25-28',
    category: 'patriarchs',
    color: '#c9a84c',
    people: ['Joseph', 'Reuben', 'Judah'],
    location: 'Dothan'
  },
  {
    id: 't-018',
    year: -1920,
    label: 'Joseph in Egypt',
    description: 'Joseph rises to power as Pharaoh\'s second-in-command',
    reference: 'Genesis 41:37-46',
    category: 'patriarchs',
    color: '#c9a84c',
    people: ['Joseph', 'Pharaoh'],
    location: 'Egypt'
  },
  {
    id: 't-019',
    year: -1900,
    label: 'Israel Moves to Egypt',
    description: 'Jacob and his family move to Egypt during the famine',
    reference: 'Genesis 46:1-27',
    category: 'patriarchs',
    color: '#c9a84c',
    people: ['Jacob', 'Joseph', 'Israelites'],
    location: 'Canaan to Egypt'
  },
  {
    id: 't-020',
    year: -1800,
    label: 'Death of Joseph',
    description: 'Joseph dies in Egypt, and the Israelites multiply',
    reference: 'Genesis 50:22-26',
    category: 'patriarchs',
    color: '#c9a84c',
    people: ['Joseph'],
    location: 'Egypt'
  },

  // ================================================================
  // EXODUS & CONQUEST (1500 - 1200 BC) - 25 events
  // ================================================================
  {
    id: 't-021',
    year: -1526,
    label: 'Birth of Moses',
    description: 'Moses is born and hidden in a basket on the Nile',
    reference: 'Exodus 1:1-2:10',
    category: 'exodus',
    color: '#ef4444',
    people: ['Moses', 'Jochebed', 'Miriam', 'Pharaoh\'s daughter'],
    location: 'Egypt'
  },
  {
    id: 't-022',
    year: -1486,
    label: 'Moses Flees to Midian',
    description: 'Moses flees Egypt after killing an Egyptian',
    reference: 'Exodus 2:11-22',
    category: 'exodus',
    color: '#ef4444',
    people: ['Moses'],
    location: 'Midian'
  },
  {
    id: 't-023',
    year: -1450,
    label: 'The Burning Bush',
    description: 'God appears to Moses in a burning bush',
    reference: 'Exodus 3:1-6',
    category: 'exodus',
    color: '#ef4444',
    people: ['Moses', 'God'],
    location: 'Mount Horeb'
  },
  {
    id: 't-024',
    year: -1450,
    label: 'The Exodus',
    description: 'God delivers Israel from Egypt through Moses',
    reference: 'Exodus 12:31-42',
    category: 'exodus',
    color: '#ef4444',
    people: ['Moses', 'Aaron', 'Israelites'],
    location: 'Egypt to Wilderness'
  },
  {
    id: 't-025',
    year: -1450,
    label: 'Crossing the Red Sea',
    description: 'The Red Sea is parted for Israel to cross',
    reference: 'Exodus 14:21-31',
    category: 'exodus',
    color: '#ef4444',
    people: ['Moses', 'Israelites'],
    location: 'Red Sea'
  },
  {
    id: 't-026',
    year: -1450,
    label: 'Ten Commandments',
    description: 'God gives the Law at Mount Sinai',
    reference: 'Exodus 20:1-17',
    category: 'exodus',
    color: '#ef4444',
    people: ['Moses'],
    location: 'Mount Sinai'
  },
  {
    id: 't-027',
    year: -1450,
    label: 'The Golden Calf',
    description: 'Israel worships a golden calf while Moses is on the mountain',
    reference: 'Exodus 32:1-35',
    category: 'exodus',
    color: '#ef4444',
    people: ['Aaron', 'Israelites'],
    location: 'Mount Sinai'
  },
  {
    id: 't-028',
    year: -1440,
    label: 'The Tabernacle',
    description: 'The Tabernacle is completed for worship',
    reference: 'Exodus 40:1-38',
    category: 'exodus',
    color: '#ef4444',
    people: ['Moses', 'Bezalel', 'Israelites'],
    location: 'Wilderness'
  },
  {
    id: 't-029',
    year: -1440,
    label: 'Spies Sent to Canaan',
    description: 'Twelve spies are sent to explore the Promised Land',
    reference: 'Numbers 13:1-33',
    category: 'exodus',
    color: '#ef4444',
    people: ['Joshua', 'Caleb', 'Israelites'],
    location: 'Canaan'
  },
  {
    id: 't-030',
    year: -1440,
    label: 'Wandering in the Wilderness',
    description: 'Israel wanders 40 years because of unbelief',
    reference: 'Numbers 14:26-35',
    category: 'exodus',
    color: '#6b7280',
    people: ['Moses', 'Israelites'],
    location: 'Wilderness'
  },
  {
    id: 't-031',
    year: -1406,
    label: 'Death of Moses',
    description: 'Moses dies on Mount Nebo, Joshua takes over',
    reference: 'Deuteronomy 34:1-12',
    category: 'exodus',
    color: '#ef4444',
    people: ['Moses', 'Joshua'],
    location: 'Mount Nebo'
  },
  {
    id: 't-032',
    year: -1406,
    label: 'Crossing the Jordan',
    description: 'Israel crosses the Jordan River into Canaan',
    reference: 'Joshua 3:14-17',
    category: 'conquest',
    color: '#f59e0b',
    people: ['Joshua', 'Israelites'],
    location: 'Jordan River'
  },
  {
    id: 't-033',
    year: -1406,
    label: 'Fall of Jericho',
    description: 'The walls of Jericho fall after seven days of marching',
    reference: 'Joshua 6:1-27',
    category: 'conquest',
    color: '#f59e0b',
    people: ['Joshua', 'Israelites'],
    location: 'Jericho'
  },
  {
    id: 't-034',
    year: -1400,
    label: 'Conquest of Canaan',
    description: 'Joshua leads Israel to conquer the Promised Land',
    reference: 'Joshua 1-12',
    category: 'conquest',
    color: '#f59e0b',
    people: ['Joshua', 'Israelites'],
    location: 'Canaan'
  },
  {
    id: 't-035',
    year: -1390,
    label: 'Joshua\'s Final Address',
    description: 'Joshua gives his farewell speech',
    reference: 'Joshua 24:1-28',
    category: 'conquest',
    color: '#f59e0b',
    people: ['Joshua', 'Israelites'],
    location: 'Shechem'
  },
  {
    id: 't-036',
    year: -1380,
    label: 'Death of Joshua',
    description: 'Joshua dies at age 110',
    reference: 'Joshua 24:29-31',
    category: 'conquest',
    color: '#f59e0b',
    people: ['Joshua'],
    location: 'Canaan'
  },

  // ================================================================
  // JUDGES (1200 - 1050 BC) - 20 events
  // ================================================================
  {
    id: 't-037',
    year: -1200,
    label: 'Period of Judges',
    description: 'Israel cycles through sin, oppression, and deliverance',
    reference: 'Judges 2:10-19',
    category: 'judges',
    color: '#ec4899',
    people: ['Israelites'],
    location: 'Canaan'
  },
  {
    id: 't-038',
    year: -1175,
    label: 'Othniel',
    description: 'Othniel is the first judge of Israel',
    reference: 'Judges 3:7-11',
    category: 'judges',
    color: '#ec4899',
    people: ['Othniel'],
    location: 'Canaan'
  },
  {
    id: 't-039',
    year: -1150,
    label: 'Ehud',
    description: 'Ehud assassinates the Moabite king and delivers Israel',
    reference: 'Judges 3:12-30',
    category: 'judges',
    color: '#ec4899',
    people: ['Ehud'],
    location: 'Canaan'
  },
  {
    id: 't-040',
    year: -1140,
    label: 'Shamgar',
    description: 'Shamgar kills 600 Philistines with an oxgoad',
    reference: 'Judges 3:31',
    category: 'judges',
    color: '#ec4899',
    people: ['Shamgar'],
    location: 'Canaan'
  },
  {
    id: 't-041',
    year: -1125,
    label: 'Deborah and Barak',
    description: 'Deborah and Barak defeat the Canaanite army',
    reference: 'Judges 4:1-24',
    category: 'judges',
    color: '#ec4899',
    people: ['Deborah', 'Barak'],
    location: 'Canaan'
  },
  {
    id: 't-042',
    year: -1125,
    label: 'Song of Deborah',
    description: 'Deborah and Barak sing a victory song',
    reference: 'Judges 5:1-31',
    category: 'judges',
    color: '#ec4899',
    people: ['Deborah', 'Barak'],
    location: 'Canaan'
  },
  {
    id: 't-043',
    year: -1100,
    label: 'Gideon',
    description: 'Gideon defeats the Midianites with 300 men',
    reference: 'Judges 6:11-7:25',
    category: 'judges',
    color: '#ec4899',
    people: ['Gideon'],
    location: 'Canaan'
  },
  {
    id: 't-044',
    year: -1090,
    label: 'Abimelech',
    description: 'Abimelech rules as king over Shechem for 3 years',
    reference: 'Judges 9:1-57',
    category: 'judges',
    color: '#ec4899',
    people: ['Abimelech'],
    location: 'Shechem'
  },
  {
    id: 't-045',
    year: -1080,
    label: 'Jephthah',
    description: 'Jephthah delivers Israel from the Ammonites',
    reference: 'Judges 11:1-12:7',
    category: 'judges',
    color: '#ec4899',
    people: ['Jephthah'],
    location: 'Canaan'
  },
  {
    id: 't-046',
    year: -1075,
    label: 'Samson',
    description: 'Samson judges Israel and defeats the Philistines',
    reference: 'Judges 13-16',
    category: 'judges',
    color: '#ec4899',
    people: ['Samson', 'Delilah'],
    location: 'Canaan'
  },
  {
    id: 't-047',
    year: -1050,
    label: 'Samson\'s Death',
    description: 'Samson destroys the Philistine temple in his final act',
    reference: 'Judges 16:28-31',
    category: 'judges',
    color: '#ec4899',
    people: ['Samson'],
    location: 'Gaza'
  },
  {
    id: 't-048',
    year: -1050,
    label: 'Ruth and Boaz',
    description: 'Ruth becomes the great-grandmother of David',
    reference: 'Ruth 1:1-4:22',
    category: 'judges',
    color: '#ec4899',
    people: ['Ruth', 'Naomi', 'Boaz'],
    location: 'Bethlehem'
  },
  {
    id: 't-049',
    year: -1040,
    label: 'Birth of Samuel',
    description: 'Samuel is born to Hannah after her prayer',
    reference: '1 Samuel 1:19-20',
    category: 'judges',
    color: '#ec4899',
    people: ['Samuel', 'Hannah', 'Elkanah'],
    location: 'Shiloh'
  },
  {
    id: 't-050',
    year: -1030,
    label: 'Samuel\'s Calling',
    description: 'Samuel hears the voice of God as a boy',
    reference: '1 Samuel 3:1-21',
    category: 'judges',
    color: '#ec4899',
    people: ['Samuel'],
    location: 'Shiloh'
  },
  {
    id: 't-051',
    year: -1025,
    label: 'Ark of the Covenant Lost',
    description: 'The Philistines capture the Ark of the Covenant',
    reference: '1 Samuel 4:1-11',
    category: 'judges',
    color: '#ec4899',
    people: ['Israelites', 'Philistines'],
    location: 'Aphek'
  },
  {
    id: 't-052',
    year: -1020,
    label: 'Ark Returned to Israel',
    description: 'The Philistines return the Ark after plagues',
    reference: '1 Samuel 6:1-21',
    category: 'judges',
    color: '#ec4899',
    people: ['Israelites', 'Philistines'],
    location: 'Beth Shemesh'
  },
  {
    id: 't-053',
    year: -1015,
    label: 'Israel Demands a King',
    description: 'Israel rejects God\'s rule and demands a king',
    reference: '1 Samuel 8:1-22',
    category: 'judges',
    color: '#ec4899',
    people: ['Samuel', 'Israelites'],
    location: 'Ramah'
  },

  // ================================================================
  // UNITED KINGDOM (1050 - 930 BC) - 25 events
  // ================================================================
  {
    id: 't-054',
    year: -1040,
    label: 'Saul Anointed King',
    description: 'Samuel anoints Saul as the first king of Israel',
    reference: '1 Samuel 10:1-27',
    category: 'kingdom',
    color: '#3b82f6',
    people: ['Samuel', 'Saul'],
    location: 'Gibeah'
  },
  {
    id: 't-055',
    year: -1025,
    label: 'David Anointed',
    description: 'Samuel anoints David as the future king',
    reference: '1 Samuel 16:11-13',
    category: 'kingdom',
    color: '#3b82f6',
    people: ['Samuel', 'David'],
    location: 'Bethlehem'
  },
  {
    id: 't-056',
    year: -1025,
    label: 'David and Goliath',
    description: 'David defeats Goliath with a sling and stone',
    reference: '1 Samuel 17:1-58',
    category: 'kingdom',
    color: '#3b82f6',
    people: ['David', 'Goliath'],
    location: 'Valley of Elah'
  },
  {
    id: 't-057',
    year: -1020,
    label: 'David and Jonathan',
    description: 'David and Jonathan become close friends',
    reference: '1 Samuel 18:1-4',
    category: 'kingdom',
    color: '#3b82f6',
    people: ['David', 'Jonathan'],
    location: 'Israel'
  },
  {
    id: 't-058',
    year: -1015,
    label: 'Saul\'s Jealousy',
    description: 'Saul becomes jealous of David and tries to kill him',
    reference: '1 Samuel 18:6-16',
    category: 'kingdom',
    color: '#3b82f6',
    people: ['Saul', 'David'],
    location: 'Israel'
  },
  {
    id: 't-059',
    year: -1010,
    label: 'Death of Saul and Jonathan',
    description: 'Saul and Jonathan are killed in battle',
    reference: '1 Samuel 31:1-6',
    category: 'kingdom',
    color: '#3b82f6',
    people: ['Saul', 'Jonathan'],
    location: 'Gilboa'
  },
  {
    id: 't-060',
    year: -1010,
    label: 'David Becomes King',
    description: 'David is crowned king over all Israel',
    reference: '2 Samuel 5:1-5',
    category: 'kingdom',
    color: '#3b82f6',
    people: ['David'],
    location: 'Hebron'
  },
  {
    id: 't-061',
    year: -1004,
    label: 'Jerusalem Conquered',
    description: 'David captures Jerusalem and makes it his capital',
    reference: '2 Samuel 5:6-10',
    category: 'kingdom',
    color: '#3b82f6',
    people: ['David'],
    location: 'Jerusalem'
  },
  {
    id: 't-062',
    year: -1000,
    label: 'Ark Brought to Jerusalem',
    description: 'David brings the Ark of the Covenant to Jerusalem',
    reference: '2 Samuel 6:1-19',
    category: 'kingdom',
    color: '#3b82f6',
    people: ['David'],
    location: 'Jerusalem'
  },
  {
    id: 't-063',
    year: -995,
    label: 'David\'s Covenant',
    description: 'God makes a covenant with David for an eternal kingdom',
    reference: '2 Samuel 7:1-17',
    category: 'kingdom',
    color: '#3b82f6',
    people: ['David', 'Nathan'],
    location: 'Jerusalem'
  },
  {
    id: 't-064',
    year: -990,
    label: 'David and Bathsheba',
    description: 'David commits adultery with Bathsheba',
    reference: '2 Samuel 11:1-27',
    category: 'kingdom',
    color: '#3b82f6',
    people: ['David', 'Bathsheba', 'Uriah'],
    location: 'Jerusalem'
  },
  {
    id: 't-065',
    year: -990,
    label: 'Nathan Confronts David',
    description: 'Nathan the prophet confronts David about his sin',
    reference: '2 Samuel 12:1-15',
    category: 'kingdom',
    color: '#3b82f6',
    people: ['Nathan', 'David'],
    location: 'Jerusalem'
  },
  {
    id: 't-066',
    year: -980,
    label: 'Absalom\'s Rebellion',
    description: 'David\'s son Absalom leads a rebellion against him',
    reference: '2 Samuel 15:1-37',
    category: 'kingdom',
    color: '#3b82f6',
    people: ['David', 'Absalom'],
    location: 'Jerusalem'
  },
  {
    id: 't-067',
    year: -979,
    label: 'Death of Absalom',
    description: 'Absalom is killed during the rebellion',
    reference: '2 Samuel 18:9-33',
    category: 'kingdom',
    color: '#3b82f6',
    people: ['Absalom', 'Joab', 'David'],
    location: 'Ephraim Forest'
  },
  {
    id: 't-068',
    year: -970,
    label: 'Solomon Anointed King',
    description: 'Solomon is anointed as king over Israel',
    reference: '1 Kings 1:28-40',
    category: 'kingdom',
    color: '#3b82f6',
    people: ['Solomon', 'David', 'Bathsheba', 'Nathan'],
    location: 'Jerusalem'
  },
  {
    id: 't-069',
    year: -970,
    label: 'Solomon\'s Wisdom',
    description: 'Solomon asks God for wisdom and receives it',
    reference: '1 Kings 3:5-14',
    category: 'kingdom',
    color: '#3b82f6',
    people: ['Solomon'],
    location: 'Gibeon'
  },
  {
    id: 't-070',
    year: -966,
    label: 'Temple Completed',
    description: 'Solomon\'s Temple is completed in Jerusalem',
    reference: '1 Kings 6:37-38',
    category: 'kingdom',
    color: '#3b82f6',
    people: ['Solomon'],
    location: 'Jerusalem'
  },
  {
    id: 't-071',
    year: -960,
    label: 'Dedication of the Temple',
    description: 'Solomon dedicates the Temple with a great prayer',
    reference: '1 Kings 8:1-66',
    category: 'kingdom',
    color: '#3b82f6',
    people: ['Solomon', 'Israelites'],
    location: 'Jerusalem'
  },
  {
    id: 't-072',
    year: -950,
    label: 'Queen of Sheba',
    description: 'The Queen of Sheba visits Solomon and is amazed',
    reference: '1 Kings 10:1-13',
    category: 'kingdom',
    color: '#3b82f6',
    people: ['Solomon', 'Queen of Sheba'],
    location: 'Jerusalem'
  },
  {
    id: 't-073',
    year: -930,
    label: 'Kingdom Divides',
    description: 'Israel splits into Judah (south) and Israel (north)',
    reference: '1 Kings 12:1-24',
    category: 'kingdom',
    color: '#ef4444',
    people: ['Rehoboam', 'Jeroboam'],
    location: 'Shechem'
  },

  // ================================================================
  // DIVIDED KINGDOM (930 - 586 BC) - 30 events
  // ================================================================
  {
    id: 't-074',
    year: -930,
    label: 'Jeroboam\'s Golden Calves',
    description: 'Jeroboam sets up golden calves in Bethel and Dan',
    reference: '1 Kings 12:25-33',
    category: 'kingdom',
    color: '#ef4444',
    people: ['Jeroboam'],
    location: 'Bethel, Dan'
  },
  {
    id: 't-075',
    year: -890,
    label: 'Elijah\'s Ministry',
    description: 'Elijah prophesies during the reign of Ahab',
    reference: '1 Kings 17:1-24',
    category: 'kingdom',
    color: '#ef4444',
    people: ['Elijah'],
    location: 'Israel'
  },
  {
    id: 't-076',
    year: -870,
    label: 'Elijah on Mount Carmel',
    description: 'Elijah confronts the prophets of Baal',
    reference: '1 Kings 18:16-45',
    category: 'kingdom',
    color: '#ef4444',
    people: ['Elijah', 'Ahab'],
    location: 'Mount Carmel'
  },
  {
    id: 't-077',
    year: -865,
    label: 'Elijah Flees to Horeb',
    description: 'Elijah flees from Jezebel and hears God\'s whisper',
    reference: '1 Kings 19:1-18',
    category: 'kingdom',
    color: '#ef4444',
    people: ['Elijah'],
    location: 'Mount Horeb'
  },
  {
    id: 't-078',
    year: -860,
    label: 'Elisha Called',
    description: 'Elisha is called to succeed Elijah',
    reference: '1 Kings 19:19-21',
    category: 'kingdom',
    color: '#ef4444',
    people: ['Elijah', 'Elisha'],
    location: 'Israel'
  },
  {
    id: 't-079',
    year: -848,
    label: 'Elijah Taken to Heaven',
    description: 'Elijah is taken up to heaven in a whirlwind',
    reference: '2 Kings 2:1-15',
    category: 'kingdom',
    color: '#ef4444',
    people: ['Elijah', 'Elisha'],
    location: 'Jordan River'
  },
  {
    id: 't-080',
    year: -845,
    label: 'Elisha\'s Miracles',
    description: 'Elisha performs many miracles, including healing Naaman',
    reference: '2 Kings 4-5',
    category: 'kingdom',
    color: '#ef4444',
    people: ['Elisha', 'Naaman'],
    location: 'Israel'
  },
  {
    id: 't-081',
    year: -835,
    label: 'Jehu\'s Revolt',
    description: 'Jehu destroys the house of Ahab and Baal worship',
    reference: '2 Kings 9-10',
    category: 'kingdom',
    color: '#ef4444',
    people: ['Jehu', 'Jezebel'],
    location: 'Israel'
  },
  {
    id: 't-082',
    year: -800,
    label: 'Jonah',
    description: 'Jonah is swallowed by a great fish and preaches to Nineveh',
    reference: 'Jonah 1-4',
    category: 'kingdom',
    color: '#ef4444',
    people: ['Jonah'],
    location: 'Nineveh'
  },
  {
    id: 't-083',
    year: -795,
    label: 'Amos',
    description: 'Amos prophesies about justice and righteousness',
    reference: 'Amos 1-9',
    category: 'kingdom',
    color: '#ef4444',
    people: ['Amos'],
    location: 'Israel'
  },
  {
    id: 't-084',
    year: -790,
    label: 'Hosea',
    description: 'Hosea\'s marriage symbolizes God\'s relationship with Israel',
    reference: 'Hosea 1-14',
    category: 'kingdom',
    color: '#ef4444',
    people: ['Hosea', 'Gomer'],
    location: 'Israel'
  },
  {
    id: 't-085',
    year: -740,
    label: 'Isaiah\'s Call',
    description: 'Isaiah sees the Lord in the temple and is called',
    reference: 'Isaiah 6:1-8',
    category: 'kingdom',
    color: '#ef4444',
    people: ['Isaiah'],
    location: 'Jerusalem'
  },
  {
    id: 't-086',
    year: -730,
    label: 'Micah',
    description: 'Micah prophesies the birthplace of the Messiah',
    reference: 'Micah 5:1-5',
    category: 'kingdom',
    color: '#ef4444',
    people: ['Micah'],
    location: 'Judah'
  },
  {
    id: 't-087',
    year: -722,
    label: 'Israel Exiled to Assyria',
    description: 'Assyria conquers Israel (Northern Kingdom)',
    reference: '2 Kings 17:1-23',
    category: 'exile',
    color: '#ef4444',
    people: ['Israelites', 'Assyrians'],
    location: 'Assyria'
  },
  {
    id: 't-088',
    year: -715,
    label: 'Hezekiah\'s Reign',
    description: 'Hezekiah becomes king of Judah and reforms',
    reference: '2 Kings 18:1-8',
    category: 'kingdom',
    color: '#ef4444',
    people: ['Hezekiah'],
    location: 'Jerusalem'
  },
  {
    id: 't-089',
    year: -700,
    label: 'Hezekiah\'s Illness',
    description: 'Hezekiah is healed and given 15 more years',
    reference: '2 Kings 20:1-11',
    category: 'kingdom',
    color: '#ef4444',
    people: ['Hezekiah', 'Isaiah'],
    location: 'Jerusalem'
  },
  {
    id: 't-090',
    year: -630,
    label: 'Josiah\'s Reform',
    description: 'King Josiah finds the Book of the Law and reforms Judah',
    reference: '2 Kings 22-23',
    category: 'kingdom',
    color: '#ef4444',
    people: ['Josiah', 'Hilkiah'],
    location: 'Jerusalem'
  },
  {
    id: 't-091',
    year: -626,
    label: 'Jeremiah\'s Call',
    description: 'Jeremiah is called as a prophet to the nations',
    reference: 'Jeremiah 1:1-10',
    category: 'exile',
    color: '#ef4444',
    people: ['Jeremiah'],
    location: 'Jerusalem'
  },
  {
    id: 't-092',
    year: -605,
    label: 'Daniel Taken to Babylon',
    description: 'Daniel and his friends are taken to Babylon',
    reference: 'Daniel 1:1-7',
    category: 'exile',
    color: '#ef4444',
    people: ['Daniel', 'Shadrach', 'Meshach', 'Abednego'],
    location: 'Babylon'
  },
  {
    id: 't-093',
    year: -603,
    label: 'Daniel Interprets Dream',
    description: 'Daniel interprets Nebuchadnezzar\'s dream of a statue',
    reference: 'Daniel 2:1-49',
    category: 'exile',
    color: '#ef4444',
    people: ['Daniel', 'Nebuchadnezzar'],
    location: 'Babylon'
  },
  {
    id: 't-094',
    year: -597,
    label: 'Ezekiel\'s Vision',
    description: 'Ezekiel sees a vision of God\'s glory',
    reference: 'Ezekiel 1:1-28',
    category: 'exile',
    color: '#ef4444',
    people: ['Ezekiel'],
    location: 'Babylon'
  },
  {
    id: 't-095',
    year: -586,
    label: 'Jerusalem Destroyed',
    description: 'Babylon destroys Jerusalem and the Temple',
    reference: '2 Kings 25:8-21',
    category: 'exile',
    color: '#ef4444',
    people: ['Nebuchadnezzar', 'Israelites'],
    location: 'Jerusalem'
  },
  {
    id: 't-096',
    year: -586,
    label: 'Exile in Babylon',
    description: 'Judah is exiled to Babylon for 70 years',
    reference: 'Jeremiah 29:10-14',
    category: 'exile',
    color: '#8b5cf6',
    people: ['Israelites'],
    location: 'Babylon'
  },
  {
    id: 't-097',
    year: -570,
    label: 'Ezekiel\'s Vision of Dry Bones',
    description: 'Ezekiel sees the valley of dry bones come to life',
    reference: 'Ezekiel 37:1-14',
    category: 'exile',
    color: '#8b5cf6',
    people: ['Ezekiel'],
    location: 'Babylon'
  },
  {
    id: 't-098',
    year: -560,
    label: 'Ezekiel\'s Temple Vision',
    description: 'Ezekiel sees a vision of a restored Temple',
    reference: 'Ezekiel 40-48',
    category: 'exile',
    color: '#8b5cf6',
    people: ['Ezekiel'],
    location: 'Babylon'
  },

  // ================================================================
  // EXILE & RESTORATION (586 - 400 BC) - 20 events
  // ================================================================
  {
    id: 't-099',
    year: -539,
    label: 'Babylon Falls to Persia',
    description: 'Cyrus the Great conquers Babylon',
    reference: 'Daniel 5:30-31',
    category: 'restoration',
    color: '#22c55e',
    people: ['Cyrus'],
    location: 'Babylon'
  },
  {
    id: 't-100',
    year: -538,
    label: 'Decree of Cyrus',
    description: 'Cyrus allows the Jews to return to Jerusalem',
    reference: 'Ezra 1:1-4',
    category: 'restoration',
    color: '#22c55e',
    people: ['Cyrus'],
    location: 'Persia'
  },
  {
    id: 't-101',
    year: -537,
    label: 'Return to Jerusalem',
    description: 'Zerubbabel leads the first group back to Jerusalem',
    reference: 'Ezra 2:1-70',
    category: 'restoration',
    color: '#22c55e',
    people: ['Zerubbabel', 'Jeshua'],
    location: 'Jerusalem'
  },
  {
    id: 't-102',
    year: -536,
    label: 'Temple Foundation Laid',
    description: 'The foundation of the Second Temple is laid',
    reference: 'Ezra 3:8-13',
    category: 'restoration',
    color: '#22c55e',
    people: ['Zerubbabel', 'Jeshua'],
    location: 'Jerusalem'
  },
  {
    id: 't-103',
    year: -515,
    label: 'Second Temple Completed',
    description: 'The Second Temple is completed and dedicated',
    reference: 'Ezra 6:13-18',
    category: 'restoration',
    color: '#22c55e',
    people: ['Zerubbabel', 'Jeshua'],
    location: 'Jerusalem'
  },
  {
    id: 't-104',
    year: -458,
    label: 'Ezra Returns to Jerusalem',
    description: 'Ezra leads a second group back to Jerusalem',
    reference: 'Ezra 7:1-10',
    category: 'restoration',
    color: '#22c55e',
    people: ['Ezra'],
    location: 'Jerusalem'
  },
  {
    id: 't-105',
    year: -450,
    label: 'Nehemiah\'s Commission',
    description: 'Nehemiah is commissioned to rebuild Jerusalem\'s walls',
    reference: 'Nehemiah 2:1-8',
    category: 'restoration',
    color: '#22c55e',
    people: ['Nehemiah'],
    location: 'Susa'
  },
  {
    id: 't-106',
    year: -445,
    label: 'Jerusalem\'s Walls Rebuilt',
    description: 'Nehemiah leads the rebuilding of Jerusalem\'s walls',
    reference: 'Nehemiah 2:17-20',
    category: 'restoration',
    color: '#22c55e',
    people: ['Nehemiah'],
    location: 'Jerusalem'
  },
  {
    id: 't-107',
    year: -444,
    label: 'Ezra Reads the Law',
    description: 'Ezra reads the Book of the Law to the people',
    reference: 'Nehemiah 8:1-12',
    category: 'restoration',
    color: '#22c55e',
    people: ['Ezra', 'Nehemiah'],
    location: 'Jerusalem'
  },
  {
    id: 't-108',
    year: -430,
    label: 'Malachi',
    description: 'Malachi is the last Old Testament prophet',
    reference: 'Malachi 1:1',
    category: 'restoration',
    color: '#22c55e',
    people: ['Malachi'],
    location: 'Jerusalem'
  },

  // ================================================================
  // INTERTESTAMENTAL (400 - 5 BC) - 15 events
  // ================================================================
  {
    id: 't-109',
    year: -333,
    label: 'Alexander the Great',
    description: 'Alexander the Great conquers the known world',
    reference: 'Daniel 8:21',
    category: 'intertestamental',
    color: '#6b7280',
    people: ['Alexander'],
    location: 'World'
  },
  {
    id: 't-110',
    year: -332,
    label: 'Alexander in Jerusalem',
    description: 'Alexander the Great visits Jerusalem',
    reference: '',
    category: 'intertestamental',
    color: '#6b7280',
    people: ['Alexander'],
    location: 'Jerusalem'
  },
  {
    id: 't-111',
    year: -320,
    label: 'Ptolemaic Rule',
    description: 'Egypt controls Israel under the Ptolemies',
    reference: '',
    category: 'intertestamental',
    color: '#6b7280',
    people: ['Ptolemies'],
    location: 'Egypt'
  },
  {
    id: 't-112',
    year: -250,
    label: 'Septuagint Translated',
    description: 'The Old Testament is translated into Greek',
    reference: '',
    category: 'intertestamental',
    color: '#6b7280',
    people: ['Jewish Scholars'],
    location: 'Alexandria'
  },
  {
    id: 't-113',
    year: -200,
    label: 'Seleucid Rule',
    description: 'The Seleucids take control of Israel',
    reference: '',
    category: 'intertestamental',
    color: '#6b7280',
    people: ['Seleucids'],
    location: 'Syria'
  },
  {
    id: 't-114',
    year: -167,
    label: 'Maccabean Revolt',
    description: 'The Maccabees revolt against Greek oppression',
    reference: '',
    category: 'intertestamental',
    color: '#6b7280',
    people: ['Judas Maccabeus'],
    location: 'Judea'
  },
  {
    id: 't-115',
    year: -164,
    label: 'Temple Rededicated',
    description: 'The Temple is cleansed and rededicated (Hanukkah)',
    reference: '',
    category: 'intertestamental',
    color: '#6b7280',
    people: ['Judas Maccabeus'],
    location: 'Jerusalem'
  },
  {
    id: 't-116',
    year: -100,
    label: 'Pharisees and Sadducees',
    description: 'The two main Jewish groups emerge',
    reference: '',
    category: 'intertestamental',
    color: '#6b7280',
    people: ['Pharisees', 'Sadducees'],
    location: 'Judea'
  },
  {
    id: 't-117',
    year: -63,
    label: 'Roman Conquest',
    description: 'Pompey conquers Judea, making it a Roman province',
    reference: '',
    category: 'intertestamental',
    color: '#6b7280',
    people: ['Pompey'],
    location: 'Judea'
  },
  {
    id: 't-118',
    year: -37,
    label: 'Herod the Great',
    description: 'Herod becomes king of Judea under Rome',
    reference: 'Matthew 2:1',
    category: 'intertestamental',
    color: '#6b7280',
    people: ['Herod'],
    location: 'Judea'
  },
  {
    id: 't-119',
    year: -20,
    label: 'Herod\'s Temple',
    description: 'Herod begins rebuilding the Temple in Jerusalem',
    reference: 'John 2:20',
    category: 'intertestamental',
    color: '#6b7280',
    people: ['Herod'],
    location: 'Jerusalem'
  },

  // ================================================================
  // NEW TESTAMENT (5 BC - 100 AD) - 35 events
  // ================================================================
  {
    id: 't-120',
    year: -5,
    label: 'Birth of John the Baptist',
    description: 'John the Baptist is born to Zechariah and Elizabeth',
    reference: 'Luke 1:57-66',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['John the Baptist', 'Zechariah', 'Elizabeth'],
    location: 'Judea'
  },
  {
    id: 't-121',
    year: -5,
    label: 'Birth of Jesus',
    description: 'Jesus Christ is born in Bethlehem',
    reference: 'Matthew 1:18-25',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Jesus', 'Mary', 'Joseph'],
    location: 'Bethlehem'
  },
  {
    id: 't-122',
    year: -4,
    label: 'Shepherds Visit',
    description: 'Shepherds visit the newborn Jesus',
    reference: 'Luke 2:8-20',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Jesus', 'Shepherds'],
    location: 'Bethlehem'
  },
  {
    id: 't-123',
    year: -4,
    label: 'Wise Men Visit',
    description: 'The Magi visit Jesus and bring gifts',
    reference: 'Matthew 2:1-12',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Jesus', 'Magi'],
    location: 'Bethlehem'
  },
  {
    id: 't-124',
    year: -4,
    label: 'Flight to Egypt',
    description: 'Joseph and Mary flee to Egypt with Jesus',
    reference: 'Matthew 2:13-15',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Jesus', 'Mary', 'Joseph'],
    location: 'Egypt'
  },
  {
    id: 't-125',
    year: 4,
    label: 'Jesus in the Temple',
    description: 'Jesus teaches in the Temple at age 12',
    reference: 'Luke 2:41-50',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Jesus'],
    location: 'Jerusalem'
  },
  {
    id: 't-126',
    year: 26,
    label: 'John the Baptist Begins Ministry',
    description: 'John the Baptist preaches in the wilderness',
    reference: 'Matthew 3:1-12',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['John the Baptist'],
    location: 'Jordan River'
  },
  {
    id: 't-127',
    year: 26,
    label: 'Baptism of Jesus',
    description: 'Jesus is baptized by John the Baptist',
    reference: 'Matthew 3:13-17',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Jesus', 'John the Baptist'],
    location: 'Jordan River'
  },
  {
    id: 't-128',
    year: 26,
    label: 'Temptation of Jesus',
    description: 'Jesus is tempted by Satan in the wilderness',
    reference: 'Matthew 4:1-11',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Jesus', 'Satan'],
    location: 'Wilderness'
  },
  {
    id: 't-129',
    year: 26,
    label: 'Calling of the Disciples',
    description: 'Jesus calls his first disciples',
    reference: 'Matthew 4:18-22',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Jesus', 'Peter', 'Andrew', 'James', 'John'],
    location: 'Sea of Galilee'
  },
  {
    id: 't-130',
    year: 27,
    label: 'Sermon on the Mount',
    description: 'Jesus preaches the Sermon on the Mount',
    reference: 'Matthew 5-7',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Jesus', 'Disciples'],
    location: 'Galilee'
  },
  {
    id: 't-131',
    year: 27,
    label: 'Jesus Calms the Storm',
    description: 'Jesus calms a storm on the Sea of Galilee',
    reference: 'Mark 4:35-41',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Jesus', 'Disciples'],
    location: 'Sea of Galilee'
  },
  {
    id: 't-132',
    year: 27,
    label: 'Transfiguration',
    description: 'Jesus is transfigured on the mountain',
    reference: 'Matthew 17:1-8',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Jesus', 'Peter', 'James', 'John', 'Moses', 'Elijah'],
    location: 'Mount Hermon'
  },
  {
    id: 't-133',
    year: 27,
    label: 'Raising of Lazarus',
    description: 'Jesus raises Lazarus from the dead',
    reference: 'John 11:38-44',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Jesus', 'Lazarus', 'Mary', 'Martha'],
    location: 'Bethany'
  },
  {
    id: 't-134',
    year: 28,
    label: 'Triumphal Entry',
    description: 'Jesus enters Jerusalem on a donkey',
    reference: 'Matthew 21:1-11',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Jesus', 'Disciples'],
    location: 'Jerusalem'
  },
  {
    id: 't-135',
    year: 28,
    label: 'Last Supper',
    description: 'Jesus shares the Last Supper with his disciples',
    reference: 'Matthew 26:17-30',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Jesus', 'Disciples'],
    location: 'Jerusalem'
  },
  {
    id: 't-136',
    year: 28,
    label: 'Betrayal and Arrest',
    description: 'Judas betrays Jesus, leading to his arrest',
    reference: 'Matthew 26:47-56',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Jesus', 'Judas'],
    location: 'Gethsemane'
  },
  {
    id: 't-137',
    year: 28,
    label: 'Peter\'s Denial',
    description: 'Peter denies Jesus three times',
    reference: 'Matthew 26:69-75',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Peter', 'Jesus'],
    location: 'Jerusalem'
  },
  {
    id: 't-138',
    year: 28,
    label: 'Crucifixion',
    description: 'Jesus is crucified on Golgotha',
    reference: 'Matthew 27:33-50',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Jesus'],
    location: 'Golgotha'
  },
  {
    id: 't-139',
    year: 28,
    label: 'Resurrection',
    description: 'Jesus rises from the dead on the third day',
    reference: 'Matthew 28:1-10',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Jesus'],
    location: 'Jerusalem'
  },
  {
    id: 't-140',
    year: 28,
    label: 'Appearances of Jesus',
    description: 'Jesus appears to his disciples and many others',
    reference: 'John 20-21',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Jesus', 'Disciples'],
    location: 'Jerusalem, Galilee'
  },
  {
    id: 't-141',
    year: 28,
    label: 'Ascension of Jesus',
    description: 'Jesus ascends to heaven from the Mount of Olives',
    reference: 'Acts 1:9-11',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Jesus', 'Disciples'],
    location: 'Mount of Olives'
  },
  {
    id: 't-142',
    year: 30,
    label: 'Pentecost',
    description: 'The Holy Spirit descends on the Day of Pentecost',
    reference: 'Acts 2:1-13',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Peter', 'Disciples', 'Holy Spirit'],
    location: 'Jerusalem'
  },
  {
    id: 't-143',
    year: 30,
    label: 'Peter\'s Sermon at Pentecost',
    description: 'Peter preaches and 3,000 are saved',
    reference: 'Acts 2:14-41',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Peter'],
    location: 'Jerusalem'
  },
  {
    id: 't-144',
    year: 34,
    label: 'Stephen\'s Martyrdom',
    description: 'Stephen becomes the first Christian martyr',
    reference: 'Acts 7:54-60',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Stephen', 'Saul'],
    location: 'Jerusalem'
  },
  {
    id: 't-145',
    year: 34,
    label: 'Saul\'s Conversion',
    description: 'Saul is converted on the road to Damascus',
    reference: 'Acts 9:1-19',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Paul', 'Ananias'],
    location: 'Damascus'
  },
  {
    id: 't-146',
    year: 46,
    label: 'Paul\'s First Missionary Journey',
    description: 'Paul and Barnabas begin their first missionary journey',
    reference: 'Acts 13:1-3',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Paul', 'Barnabas'],
    location: 'Antioch'
  },
  {
    id: 't-147',
    year: 49,
    label: 'Council of Jerusalem',
    description: 'The Jerusalem Council decides on Gentile inclusion',
    reference: 'Acts 15:1-35',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Paul', 'Peter', 'James'],
    location: 'Jerusalem'
  },
  {
    id: 't-148',
    year: 50,
    label: 'Paul\'s Second Journey',
    description: 'Paul travels through Greece and Asia Minor',
    reference: 'Acts 16-18',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Paul', 'Silas', 'Timothy'],
    location: 'Greece, Asia Minor'
  },
  {
    id: 't-149',
    year: 53,
    label: 'Paul\'s Third Journey',
    description: 'Paul travels to Ephesus and Macedonia',
    reference: 'Acts 18-21',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Paul'],
    location: 'Ephesus, Macedonia'
  },
  {
    id: 't-150',
    year: 59,
    label: 'Paul\'s Imprisonment in Rome',
    description: 'Paul is imprisoned in Rome',
    reference: 'Acts 28:14-31',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Paul'],
    location: 'Rome'
  },
  {
    id: 't-151',
    year: 60,
    label: 'Paul\'s Prison Letters',
    description: 'Paul writes Ephesians, Philippians, Colossians, and Philemon',
    reference: 'Ephesians, Philippians, Colossians, Philemon',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Paul'],
    location: 'Rome'
  },
  {
    id: 't-152',
    year: 64,
    label: 'Martyrdom of Peter and Paul',
    description: 'Peter and Paul are martyred in Rome under Nero',
    reference: '',
    category: 'new-testament',
    color: '#c9a84c',
    people: ['Peter', 'Paul'],
    location: 'Rome'
  },
  {
    id: 't-153',
    year: 70,
    label: 'Temple Destroyed',
    description: 'Rome destroys Jerusalem and the Temple',
    reference: 'Matthew 24:2',
    category: 'new-testament',
    color: '#ef4444',
    people: ['Romans'],
    location: 'Jerusalem'
  },
  {
    id: 't-154',
    year: 95,
    label: 'Book of Revelation',
    description: 'John writes the Book of Revelation on Patmos',
    reference: 'Revelation 1:1-3',
    category: 'revelation',
    color: '#c9a84c',
    people: ['John'],
    location: 'Patmos'
  },

  // ================================================================
  // EARLY CHURCH (100 - 400 AD) - 10 events
  // ================================================================
  {
    id: 't-155',
    year: 100,
    label: 'Age of the Apostles Ends',
    description: 'The last apostles die, ending the apostolic age',
    reference: '',
    category: 'early-church',
    color: '#3b82f6',
    people: ['Apostles'],
    location: 'Various'
  },
  {
    id: 't-156',
    year: 155,
    label: 'Justin Martyr',
    description: 'Justin Martyr defends Christianity before the emperor',
    reference: '',
    category: 'early-church',
    color: '#3b82f6',
    people: ['Justin Martyr'],
    location: 'Rome'
  },
  {
    id: 't-157',
    year: 200,
    label: 'Development of the Canon',
    description: 'The New Testament canon begins to take shape',
    reference: '',
    category: 'early-church',
    color: '#3b82f6',
    people: ['Church Fathers'],
    location: 'Various'
  },
  {
    id: 't-158',
    year: 250,
    label: 'Decian Persecution',
    description: 'Emperor Decius persecutes Christians',
    reference: '',
    category: 'early-church',
    color: '#3b82f6',
    people: ['Decius', 'Christians'],
    location: 'Roman Empire'
  },
  {
    id: 't-159',
    year: 312,
    label: 'Constantine\'s Conversion',
    description: 'Constantine converts to Christianity',
    reference: '',
    category: 'early-church',
    color: '#3b82f6',
    people: ['Constantine'],
    location: 'Rome'
  },
  {
    id: 't-160',
    year: 313,
    label: 'Edict of Milan',
    description: 'Constantine legalizes Christianity in the Roman Empire',
    reference: '',
    category: 'early-church',
    color: '#3b82f6',
    people: ['Constantine'],
    location: 'Milan'
  },
  {
    id: 't-161',
    year: 325,
    label: 'Council of Nicaea',
    description: 'The Council of Nicaea establishes the Nicene Creed',
    reference: '',
    category: 'early-church',
    color: '#3b82f6',
    people: ['Church Fathers'],
    location: 'Nicaea'
  },
  {
    id: 't-162',
    year: 367,
    label: 'Athanasius\' Canon',
    description: 'Athanasius lists the 27 New Testament books',
    reference: '',
    category: 'early-church',
    color: '#3b82f6',
    people: ['Athanasius'],
    location: 'Alexandria'
  },
  {
    id: 't-163',
    year: 381,
    label: 'Council of Constantinople',
    description: 'The Council confirms the Nicene Creed and the Trinity',
    reference: '',
    category: 'early-church',
    color: '#3b82f6',
    people: ['Church Fathers'],
    location: 'Constantinople'
  },
  {
    id: 't-164',
    year: 397,
    label: 'Council of Carthage',
    description: 'The Council officially recognizes the New Testament canon',
    reference: '',
    category: 'early-church',
    color: '#3b82f6',
    people: ['Church Fathers'],
    location: 'Carthage'
  }
]

// ================================================================
// HELPER FUNCTIONS
// ================================================================

export const getTimelineEvents = (): TimelineEvent[] => {
  return timelineEvents
}

export const getEventsByCategory = (category: TimelineEvent['category']): TimelineEvent[] => {
  return timelineEvents.filter(e => e.category === category)
}

export const getEventsInRange = (startYear: number, endYear: number): TimelineEvent[] => {
  return timelineEvents.filter(e => e.year >= startYear && e.year <= endYear)
}

export const getEventById = (id: string): TimelineEvent | undefined => {
  return timelineEvents.find(e => e.id === id)
}

export const searchTimelineEvents = (query: string): TimelineEvent[] => {
  const lowerQuery = query.toLowerCase()
  return timelineEvents.filter(e =>
    e.label.toLowerCase().includes(lowerQuery) ||
    e.description.toLowerCase().includes(lowerQuery) ||
    e.reference.toLowerCase().includes(lowerQuery) ||
    (e.people && e.people.some(p => p.toLowerCase().includes(lowerQuery))) ||
    (e.location && e.location.toLowerCase().includes(lowerQuery))
  )
}

export const getCategoryColors = (): Record<string, string> => {
  return {
    creation: '#22c55e',
    patriarchs: '#c9a84c',
    exodus: '#ef4444',
    conquest: '#f59e0b',
    judges: '#ec4899',
    kingdom: '#3b82f6',
    exile: '#8b5cf6',
    restoration: '#22c55e',
    intertestamental: '#6b7280',
    'new-testament': '#c9a84c',
    'early-church': '#3b82f6',
    'revelation': '#c9a84c'
  }
}

export const getCategoryEmoji = (category: TimelineEvent['category']): string => {
  const emojis: Record<string, string> = {
    creation: '🌍',
    patriarchs: '🧔',
    exodus: '🏃',
    conquest: '⚔️',
    judges: '🛡️',
    kingdom: '👑',
    exile: '😢',
    restoration: '🏗️',
    intertestamental: '📜',
    'new-testament': '✝️',
    'early-church': '🔥',
    'revelation': '📖'
  }
  return emojis[category] || '📖'
}

export const getCategoryLabel = (category: TimelineEvent['category']): string => {
  const labels: Record<string, string> = {
    creation: 'Creation',
    patriarchs: 'Patriarchs',
    exodus: 'Exodus',
    conquest: 'Conquest',
    judges: 'Judges',
    kingdom: 'Kingdom',
    exile: 'Exile',
    restoration: 'Restoration',
    intertestamental: 'Intertestamental',
    'new-testament': 'New Testament',
    'early-church': 'Early Church',
    'revelation': 'Revelation'
  }
  return labels[category] || category
}

export const getMinYear = (): number => {
  return Math.min(...timelineEvents.map(e => e.year))
}

export const getMaxYear = (): number => {
  return Math.max(...timelineEvents.map(e => e.year))
}

export const getEventsByPeople = (person: string): TimelineEvent[] => {
  return timelineEvents.filter(e => e.people && e.people.some(p => p.toLowerCase() === person.toLowerCase()))
}

export const getEventsByLocation = (location: string): TimelineEvent[] => {
  return timelineEvents.filter(e => e.location && e.location.toLowerCase().includes(location.toLowerCase()))
}

export const getEventCountByCategory = (): Record<string, number> => {
  const counts: Record<string, number> = {}
  const categories = ['creation', 'patriarchs', 'exodus', 'conquest', 'judges', 'kingdom', 'exile', 'restoration', 'intertestamental', 'new-testament', 'early-church', 'revelation']
  categories.forEach(cat => {
    counts[cat] = getEventsByCategory(cat as TimelineEvent['category']).length
  })
  return counts
}

export const getTimelineStats = () => ({
  totalEvents: timelineEvents.length,
  categories: getEventCountByCategory(),
  minYear: getMinYear(),
  maxYear: getMaxYear(),
  totalPeople: new Set(timelineEvents.flatMap(e => e.people || [])).size,
  totalLocations: new Set(timelineEvents.flatMap(e => e.location || [])).size,
})