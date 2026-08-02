// src/data/games/timeline.ts

export interface TimelineEvent {
  id: string;
  event: string;
  year: number;
  description: string;
  category: 'creation' | 'patriarchs' | 'exodus' | 'judges' | 'kings' | 'prophets' | 'exile' | 'new-testament' | 'intertestamental' | 'early-church';
  reference?: string;
  people?: string[];
}

export const timelineEvents: TimelineEvent[] = [
  // ================================================================
  // SECTION 1: CREATION & EARLY HISTORY (10+ events)
  // ================================================================
  {
    id: 't1',
    event: 'Creation of the world',
    year: -4004,
    description: 'God creates the heavens and the earth in six days',
    category: 'creation',
    reference: 'Genesis 1:1-31',
    people: ['God']
  },
  {
    id: 't2',
    event: 'Creation of Adam and Eve',
    year: -4004,
    description: 'God creates the first man and woman',
    category: 'creation',
    reference: 'Genesis 1:26-27',
    people: ['Adam', 'Eve']
  },
  {
    id: 't3',
    event: 'The Fall of Man',
    year: -3900,
    description: 'Adam and Eve sin against God by eating the forbidden fruit',
    category: 'creation',
    reference: 'Genesis 3:1-24',
    people: ['Adam', 'Eve', 'Serpent']
  },
  {
    id: 't4',
    event: 'Cain murders Abel',
    year: -3850,
    description: 'Cain kills his brother Abel out of jealousy',
    category: 'creation',
    reference: 'Genesis 4:1-16',
    people: ['Cain', 'Abel']
  },
  {
    id: 't5',
    event: 'Birth of Enoch',
    year: -3382,
    description: 'Enoch is born, who later walks with God',
    category: 'creation',
    reference: 'Genesis 5:18',
    people: ['Enoch']
  },
  {
    id: 't6',
    event: 'Enoch taken by God',
    year: -3017,
    description: 'Enoch walks with God and is taken to heaven',
    category: 'creation',
    reference: 'Genesis 5:24',
    people: ['Enoch']
  },
  {
    id: 't7',
    event: 'Birth of Noah',
    year: -2948,
    description: 'Noah is born, who will build the ark',
    category: 'creation',
    reference: 'Genesis 5:28-29',
    people: ['Noah']
  },
  {
    id: 't8',
    event: 'The Flood',
    year: -2348,
    description: 'God floods the earth, saving Noah and his family',
    category: 'creation',
    reference: 'Genesis 6:9-9:17',
    people: ['Noah', 'Shem', 'Ham', 'Japheth']
  },
  {
    id: 't9',
    event: 'The Tower of Babel',
    year: -2242,
    description: 'God confuses languages and scatters people across the earth',
    category: 'creation',
    reference: 'Genesis 11:1-9',
    people: ['Nimrod']
  },
  {
    id: 't10',
    event: 'Birth of Shem',
    year: -2448,
    description: 'Shem is born, ancestor of Abraham',
    category: 'creation',
    reference: 'Genesis 11:10',
    people: ['Shem']
  },

  // ================================================================
  // SECTION 2: PATRIARCHS (20+ events)
  // ================================================================
  {
    id: 't11',
    event: 'Birth of Abraham',
    year: -2166,
    description: 'Abram is born in Ur of the Chaldeans',
    category: 'patriarchs',
    reference: 'Genesis 11:26',
    people: ['Abraham']
  },
  {
    id: 't12',
    event: 'Call of Abraham',
    year: -2091,
    description: 'God calls Abraham to leave his homeland and go to Canaan',
    category: 'patriarchs',
    reference: 'Genesis 12:1-4',
    people: ['Abraham']
  },
  {
    id: 't13',
    event: 'God\'s covenant with Abraham',
    year: -2090,
    description: 'God promises to make Abraham a great nation',
    category: 'patriarchs',
    reference: 'Genesis 12:2-3',
    people: ['Abraham']
  },
  {
    id: 't14',
    event: 'Abraham in Egypt',
    year: -2086,
    description: 'Abraham goes to Egypt during a famine',
    category: 'patriarchs',
    reference: 'Genesis 12:10-20',
    people: ['Abraham', 'Sarah']
  },
  {
    id: 't15',
    event: 'Birth of Ishmael',
    year: -2080,
    description: 'Abraham and Hagar have a son, Ishmael',
    category: 'patriarchs',
    reference: 'Genesis 16:15',
    people: ['Abraham', 'Hagar', 'Ishmael']
  },
  {
    id: 't16',
    event: 'Birth of Isaac',
    year: -2066,
    description: 'Abraham and Sarah have their promised son, Isaac',
    category: 'patriarchs',
    reference: 'Genesis 21:1-5',
    people: ['Abraham', 'Sarah', 'Isaac']
  },
  {
    id: 't17',
    event: 'Abraham\'s test of faith',
    year: -2040,
    description: 'God tests Abraham by asking him to sacrifice Isaac',
    category: 'patriarchs',
    reference: 'Genesis 22:1-19',
    people: ['Abraham', 'Isaac']
  },
  {
    id: 't18',
    event: 'Death of Sarah',
    year: -2030,
    description: 'Sarah dies in Hebron at age 127',
    category: 'patriarchs',
    reference: 'Genesis 23:1-2',
    people: ['Sarah', 'Abraham']
  },
  {
    id: 't19',
    event: 'Isaac marries Rebekah',
    year: -2026,
    description: 'Isaac takes Rebekah as his wife',
    category: 'patriarchs',
    reference: 'Genesis 24:67',
    people: ['Isaac', 'Rebekah']
  },
  {
    id: 't20',
    event: 'Birth of Jacob and Esau',
    year: -2006,
    description: 'Rebekah gives birth to twin sons, Jacob and Esau',
    category: 'patriarchs',
    reference: 'Genesis 25:24-26',
    people: ['Isaac', 'Rebekah', 'Jacob', 'Esau']
  },
  {
    id: 't21',
    event: 'Death of Abraham',
    year: -1991,
    description: 'Abraham dies at age 175',
    category: 'patriarchs',
    reference: 'Genesis 25:7-8',
    people: ['Abraham']
  },
  {
    id: 't22',
    event: 'Jacob steals Esau\'s blessing',
    year: -1970,
    description: 'Jacob deceives Isaac to receive the blessing',
    category: 'patriarchs',
    reference: 'Genesis 27:1-29',
    people: ['Jacob', 'Esau', 'Isaac', 'Rebekah']
  },
  {
    id: 't23',
    event: 'Jacob\'s ladder vision',
    year: -1965,
    description: 'Jacob dreams of a ladder connecting heaven and earth',
    category: 'patriarchs',
    reference: 'Genesis 28:10-22',
    people: ['Jacob']
  },
  {
    id: 't24',
    event: 'Jacob marries Leah and Rachel',
    year: -1960,
    description: 'Jacob marries Laban\'s daughters, Leah and Rachel',
    category: 'patriarchs',
    reference: 'Genesis 29:21-30',
    people: ['Jacob', 'Leah', 'Rachel']
  },
  {
    id: 't25',
    event: 'Birth of Joseph',
    year: -1915,
    description: 'Rachel gives birth to Jacob\'s favorite son, Joseph',
    category: 'patriarchs',
    reference: 'Genesis 30:22-24',
    people: ['Jacob', 'Rachel', 'Joseph']
  },
  {
    id: 't26',
    event: 'Jacob wrestles with God',
    year: -1900,
    description: 'Jacob wrestles with a divine being and is renamed Israel',
    category: 'patriarchs',
    reference: 'Genesis 32:22-32',
    people: ['Jacob']
  },
  {
    id: 't27',
    event: 'Joseph sold into slavery',
    year: -1899,
    description: 'Joseph\'s brothers sell him to Midianite traders',
    category: 'patriarchs',
    reference: 'Genesis 37:28',
    people: ['Joseph', 'Reuben', 'Judah']
  },
  {
    id: 't28',
    event: 'Joseph in Egypt',
    year: -1898,
    description: 'Joseph becomes a slave in Egypt and later rises to power',
    category: 'patriarchs',
    reference: 'Genesis 39-41',
    people: ['Joseph', 'Potiphar', 'Pharaoh']
  },
  {
    id: 't29',
    event: 'Joseph interprets Pharaoh\'s dreams',
    year: -1885,
    description: 'Joseph interprets the dreams of Pharaoh and becomes governor',
    category: 'patriarchs',
    reference: 'Genesis 41:14-44',
    people: ['Joseph', 'Pharaoh']
  },
  {
    id: 't30',
    event: 'Jacob\'s family moves to Egypt',
    year: -1876,
    description: 'Jacob and his family move to Egypt during the famine',
    category: 'patriarchs',
    reference: 'Genesis 46:1-7',
    people: ['Jacob', 'Joseph']
  },
  {
    id: 't31',
    event: 'Death of Jacob',
    year: -1859,
    description: 'Jacob dies in Egypt at age 147',
    category: 'patriarchs',
    reference: 'Genesis 49:33',
    people: ['Jacob']
  },
  {
    id: 't32',
    event: 'Death of Joseph',
    year: -1805,
    description: 'Joseph dies in Egypt at age 110',
    category: 'patriarchs',
    reference: 'Genesis 50:26',
    people: ['Joseph']
  },

  // ================================================================
  // SECTION 3: EXODUS & WILDERNESS (15+ events)
  // ================================================================
  {
    id: 't33',
    event: 'Birth of Moses',
    year: -1526,
    description: 'Moses is born in Egypt during the Israelites\' slavery',
    category: 'exodus',
    reference: 'Exodus 2:1-2',
    people: ['Moses', 'Jochebed', 'Amram']
  },
  {
    id: 't34',
    event: 'Moses in Midian',
    year: -1486,
    description: 'Moses flees to Midian and marries Zipporah',
    category: 'exodus',
    reference: 'Exodus 2:11-22',
    people: ['Moses', 'Zipporah', 'Jethro']
  },
  {
    id: 't35',
    event: 'The Burning Bush',
    year: -1446,
    description: 'God appears to Moses in a burning bush',
    category: 'exodus',
    reference: 'Exodus 3:1-6',
    people: ['Moses', 'God']
  },
  {
    id: 't36',
    event: 'The Exodus from Egypt',
    year: -1446,
    description: 'Moses leads the Israelites out of Egypt after 10 plagues',
    category: 'exodus',
    reference: 'Exodus 12:31-42',
    people: ['Moses', 'Aaron', 'Pharaoh']
  },
  {
    id: 't37',
    event: 'Crossing of the Red Sea',
    year: -1446,
    description: 'God parts the Red Sea for the Israelites to cross',
    category: 'exodus',
    reference: 'Exodus 14:21-31',
    people: ['Moses']
  },
  {
    id: 't38',
    event: 'Manna from Heaven',
    year: -1446,
    description: 'God provides manna for the Israelites in the wilderness',
    category: 'exodus',
    reference: 'Exodus 16:14-15',
    people: ['Moses']
  },
  {
    id: 't39',
    event: 'Water from the Rock',
    year: -1446,
    description: 'Moses strikes the rock and water comes out',
    category: 'exodus',
    reference: 'Exodus 17:1-7',
    people: ['Moses']
  },
  {
    id: 't40',
    event: 'The Ten Commandments given',
    year: -1446,
    description: 'God gives Moses the Law on Mount Sinai',
    category: 'exodus',
    reference: 'Exodus 20:1-17',
    people: ['Moses']
  },
  {
    id: 't41',
    event: 'The Golden Calf',
    year: -1445,
    description: 'Israelites worship a golden calf while Moses is on the mountain',
    category: 'exodus',
    reference: 'Exodus 32:1-35',
    people: ['Moses', 'Aaron']
  },
  {
    id: 't42',
    event: 'The Tabernacle built',
    year: -1445,
    description: 'The Tabernacle is completed according to God\'s instructions',
    category: 'exodus',
    reference: 'Exodus 40:1-38',
    people: ['Moses']
  },
  {
    id: 't43',
    event: 'Sending of the 12 Spies',
    year: -1446,
    description: 'Twelve spies are sent to explore the Promised Land',
    category: 'exodus',
    reference: 'Numbers 13:1-33',
    people: ['Joshua', 'Caleb']
  },
  {
    id: 't44',
    event: 'Death of Miriam',
    year: -1406,
    description: 'Miriam dies and is buried in the wilderness',
    category: 'exodus',
    reference: 'Numbers 20:1',
    people: ['Miriam']
  },
  {
    id: 't45',
    event: 'Death of Aaron',
    year: -1406,
    description: 'Aaron dies on Mount Hor',
    category: 'exodus',
    reference: 'Numbers 20:22-29',
    people: ['Aaron', 'Moses']
  },
  {
    id: 't46',
    event: 'Moses\' final speeches',
    year: -1406,
    description: 'Moses delivers the book of Deuteronomy before his death',
    category: 'exodus',
    reference: 'Deuteronomy 1:1-5',
    people: ['Moses']
  },
  {
    id: 't47',
    event: 'Death of Moses',
    year: -1406,
    description: 'Moses dies on Mount Nebo at age 120',
    category: 'exodus',
    reference: 'Deuteronomy 34:1-8',
    people: ['Moses']
  },
  {
    id: 't48',
    event: 'Entering the Promised Land',
    year: -1406,
    description: 'Joshua leads the Israelites into Canaan',
    category: 'exodus',
    reference: 'Joshua 3:1-17',
    people: ['Joshua']
  },

  // ================================================================
  // SECTION 4: JUDGES (15+ events)
  // ================================================================
  {
    id: 't49',
    event: 'Fall of Jericho',
    year: -1406,
    description: 'Joshua leads the Israelites in conquering Jericho',
    category: 'judges',
    reference: 'Joshua 6:1-27',
    people: ['Joshua']
  },
  {
    id: 't50',
    event: 'Joshua\'s farewell address',
    year: -1375,
    description: 'Joshua gives his final speech to the Israelites',
    category: 'judges',
    reference: 'Joshua 24:1-28',
    people: ['Joshua']
  },
  {
    id: 't51',
    event: 'Death of Joshua',
    year: -1375,
    description: 'Joshua dies at age 110',
    category: 'judges',
    reference: 'Joshua 24:29-31',
    people: ['Joshua']
  },
  {
    id: 't52',
    event: 'Othniel becomes judge',
    year: -1350,
    description: 'Othniel, first judge of Israel, delivers Israel from Cushan',
    category: 'judges',
    reference: 'Judges 3:7-11',
    people: ['Othniel']
  },
  {
    id: 't53',
    event: 'Ehud kills the king of Moab',
    year: -1310,
    description: 'Ehud delivers Israel by assassinating King Eglon',
    category: 'judges',
    reference: 'Judges 3:12-30',
    people: ['Ehud']
  },
  {
    id: 't54',
    event: 'Deborah and Barak',
    year: -1209,
    description: 'Deborah and Barak defeat the Canaanites',
    category: 'judges',
    reference: 'Judges 4:1-24',
    people: ['Deborah', 'Barak']
  },
  {
    id: 't55',
    event: 'Gideon\'s calling',
    year: -1162,
    description: 'An angel calls Gideon to save Israel',
    category: 'judges',
    reference: 'Judges 6:11-24',
    people: ['Gideon']
  },
  {
    id: 't56',
    event: 'Gideon defeats Midianites',
    year: -1162,
    description: 'Gideon defeats the Midianites with 300 men',
    category: 'judges',
    reference: 'Judges 7:1-23',
    people: ['Gideon']
  },
  {
    id: 't57',
    event: 'Jephthah\'s vow',
    year: -1100,
    description: 'Jephthah makes a foolish vow that costs his daughter',
    category: 'judges',
    reference: 'Judges 11:29-40',
    people: ['Jephthah']
  },
  {
    id: 't58',
    event: 'Samson\'s birth',
    year: -1085,
    description: 'Samson is born to Manoah and his wife',
    category: 'judges',
    reference: 'Judges 13:2-25',
    people: ['Samson', 'Manoah']
  },
  {
    id: 't59',
    event: 'Samson defeats the Philistines',
    year: -1075,
    description: 'Samson judges Israel and defeats the Philistines',
    category: 'judges',
    reference: 'Judges 15:1-20',
    people: ['Samson']
  },
  {
    id: 't60',
    event: 'Samson and Delilah',
    year: -1065,
    description: 'Delilah betrays Samson, leading to his capture',
    category: 'judges',
    reference: 'Judges 16:4-21',
    people: ['Samson', 'Delilah']
  },
  {
    id: 't61',
    event: 'Samson\'s final victory',
    year: -1065,
    description: 'Samson destroys the Philistine temple, killing himself and his enemies',
    category: 'judges',
    reference: 'Judges 16:28-31',
    people: ['Samson']
  },
  {
    id: 't62',
    event: 'Ruth and Boaz',
    year: -1100,
    description: 'Ruth marries Boaz, becoming an ancestor of Jesus',
    category: 'judges',
    reference: 'Ruth 4:13-17',
    people: ['Ruth', 'Boaz', 'Naomi']
  },
  {
    id: 't63',
    event: 'Birth of Samuel',
    year: -1100,
    description: 'Samuel is born to Hannah after her prayer',
    category: 'judges',
    reference: '1 Samuel 1:19-20',
    people: ['Samuel', 'Hannah', 'Elkanah']
  },

  // ================================================================
  // SECTION 5: KINGS (25+ events)
  // ================================================================
  {
    id: 't64',
    event: 'Samuel becomes judge',
    year: -1095,
    description: 'Samuel becomes the last judge of Israel',
    category: 'kings',
    reference: '1 Samuel 3:19-21',
    people: ['Samuel']
  },
  {
    id: 't65',
    event: 'Saul becomes king',
    year: -1050,
    description: 'Samuel anoints Saul as the first king of Israel',
    category: 'kings',
    reference: '1 Samuel 10:1-25',
    people: ['Saul', 'Samuel']
  },
  {
    id: 't66',
    event: 'David anointed',
    year: -1025,
    description: 'Samuel anoints David as the future king',
    category: 'kings',
    reference: '1 Samuel 16:1-13',
    people: ['David', 'Samuel']
  },
  {
    id: 't67',
    event: 'David defeats Goliath',
    year: -1025,
    description: 'David kills the Philistine giant Goliath',
    category: 'kings',
    reference: '1 Samuel 17:1-58',
    people: ['David', 'Goliath']
  },
  {
    id: 't68',
    event: 'Saul\'s jealousy of David',
    year: -1024,
    description: 'Saul becomes jealous of David and tries to kill him',
    category: 'kings',
    reference: '1 Samuel 18:6-16',
    people: ['David', 'Saul']
  },
  {
    id: 't69',
    event: 'David and Jonathan\'s covenant',
    year: -1020,
    description: 'David and Jonathan make a covenant of friendship',
    category: 'kings',
    reference: '1 Samuel 18:1-4',
    people: ['David', 'Jonathan']
  },
  {
    id: 't70',
    event: 'Death of Saul',
    year: -1010,
    description: 'Saul dies in battle against the Philistines',
    category: 'kings',
    reference: '1 Samuel 31:1-6',
    people: ['Saul', 'Jonathan']
  },
  {
    id: 't71',
    event: 'David becomes king',
    year: -1010,
    description: 'David is crowned king over Judah, then all Israel',
    category: 'kings',
    reference: '2 Samuel 5:1-5',
    people: ['David']
  },
  {
    id: 't72',
    event: 'David conquers Jerusalem',
    year: -1004,
    description: 'David captures Jerusalem and makes it his capital',
    category: 'kings',
    reference: '2 Samuel 5:6-10',
    people: ['David']
  },
  {
    id: 't73',
    event: 'The Ark brought to Jerusalem',
    year: -1000,
    description: 'David brings the Ark of the Covenant to Jerusalem',
    category: 'kings',
    reference: '2 Samuel 6:1-19',
    people: ['David']
  },
  {
    id: 't74',
    event: 'God\'s covenant with David',
    year: -995,
    description: 'God promises David an eternal kingdom',
    category: 'kings',
    reference: '2 Samuel 7:1-17',
    people: ['David', 'Nathan']
  },
  {
    id: 't75',
    event: 'David and Bathsheba',
    year: -990,
    description: 'David commits adultery with Bathsheba and murders Uriah',
    category: 'kings',
    reference: '2 Samuel 11:1-27',
    people: ['David', 'Bathsheba', 'Uriah']
  },
  {
    id: 't76',
    event: 'Nathan confronts David',
    year: -990,
    description: 'Nathan the prophet confronts David about his sin',
    category: 'kings',
    reference: '2 Samuel 12:1-15',
    people: ['David', 'Nathan']
  },
  {
    id: 't77',
    event: 'Absalom\'s rebellion',
    year: -980,
    description: 'David\'s son Absalom leads a rebellion',
    category: 'kings',
    reference: '2 Samuel 15:1-37',
    people: ['David', 'Absalom']
  },
  {
    id: 't78',
    event: 'Death of Absalom',
    year: -979,
    description: 'Absalom is killed during the rebellion',
    category: 'kings',
    reference: '2 Samuel 18:9-33',
    people: ['David', 'Absalom', 'Joab']
  },
  {
    id: 't79',
    event: 'Solomon becomes king',
    year: -970,
    description: 'Solomon is anointed king before David\'s death',
    category: 'kings',
    reference: '1 Kings 1:32-40',
    people: ['Solomon', 'David', 'Bathsheba']
  },
  {
    id: 't80',
    event: 'Solomon\'s wisdom',
    year: -970,
    description: 'Solomon asks God for wisdom and receives it',
    category: 'kings',
    reference: '1 Kings 3:5-14',
    people: ['Solomon']
  },
  {
    id: 't81',
    event: 'Solomon builds the Temple',
    year: -966,
    description: 'The First Temple is completed in Jerusalem',
    category: 'kings',
    reference: '1 Kings 6:1-38',
    people: ['Solomon']
  },
  {
    id: 't82',
    event: 'Queen of Sheba visits Solomon',
    year: -950,
    description: 'The Queen of Sheba visits Solomon and is amazed by his wisdom',
    category: 'kings',
    reference: '1 Kings 10:1-13',
    people: ['Solomon', 'Queen of Sheba']
  },
  {
    id: 't83',
    event: 'Solomon\'s apostasy',
    year: -940,
    description: 'Solomon turns away from God and worships idols',
    category: 'kings',
    reference: '1 Kings 11:1-8',
    people: ['Solomon']
  },
  {
    id: 't84',
    event: 'Death of Solomon',
    year: -930,
    description: 'Solomon dies after 40 years as king',
    category: 'kings',
    reference: '1 Kings 11:41-43',
    people: ['Solomon']
  },
  {
    id: 't85',
    event: 'Kingdom divided',
    year: -930,
    description: 'Israel splits into the northern and southern kingdoms',
    category: 'kings',
    reference: '1 Kings 12:1-24',
    people: ['Rehoboam', 'Jeroboam']
  },
  {
    id: 't86',
    event: 'Jeroboam\'s golden calves',
    year: -930,
    description: 'King Jeroboam sets up golden calves in the north',
    category: 'kings',
    reference: '1 Kings 12:25-33',
    people: ['Jeroboam']
  },
  {
    id: 't87',
    event: 'King Asa reforms Judah',
    year: -911,
    description: 'Asa becomes king and removes idolatry in Judah',
    category: 'kings',
    reference: '2 Chronicles 14:1-5',
    people: ['Asa']
  },
  {
    id: 't88',
    event: 'Jehoshaphat becomes king',
    year: -873,
    description: 'Jehoshaphat becomes king of Judah and follows God',
    category: 'kings',
    reference: '2 Chronicles 17:1-6',
    people: ['Jehoshaphat']
  },
  {
    id: 't89',
    event: 'King Hezekiah reforms Judah',
    year: -726,
    description: 'Hezekiah becomes king and removes idolatry',
    category: 'kings',
    reference: '2 Kings 18:1-8',
    people: ['Hezekiah']
  },
  {
    id: 't90',
    event: 'King Josiah\'s reform',
    year: -621,
    description: 'Josiah discovers the Law and renews the covenant',
    category: 'kings',
    reference: '2 Kings 22:1-23:27',
    people: ['Josiah']
  },

  // ================================================================
  // SECTION 6: PROPHETS (20+ events)
  // ================================================================
  {
    id: 't91',
    event: 'Elijah\'s ministry begins',
    year: -870,
    description: 'Elijah begins his prophetic ministry against Baal',
    category: 'prophets',
    reference: '1 Kings 17:1-24',
    people: ['Elijah']
  },
  {
    id: 't92',
    event: 'Elijah and the prophets of Baal',
    year: -863,
    description: 'Elijah defeats the prophets of Baal on Mount Carmel',
    category: 'prophets',
    reference: '1 Kings 18:17-40',
    people: ['Elijah']
  },
  {
    id: 't93',
    event: 'Elijah hears God\'s whisper',
    year: -863,
    description: 'Elijah hears God\'s still, small voice on Mount Horeb',
    category: 'prophets',
    reference: '1 Kings 19:1-13',
    people: ['Elijah']
  },
  {
    id: 't94',
    event: 'Elijah calls Elisha',
    year: -862,
    description: 'Elijah calls Elisha to be his successor',
    category: 'prophets',
    reference: '1 Kings 19:19-21',
    people: ['Elijah', 'Elisha']
  },
  {
    id: 't95',
    event: 'Elijah taken to heaven',
    year: -848,
    description: 'Elijah is taken up to heaven in a whirlwind',
    category: 'prophets',
    reference: '2 Kings 2:1-12',
    people: ['Elijah', 'Elisha']
  },
  {
    id: 't96',
    event: 'Elisha\'s miracles',
    year: -848,
    description: 'Elisha performs many miracles, including raising the dead',
    category: 'prophets',
    reference: '2 Kings 4:1-37',
    people: ['Elisha']
  },
  {
    id: 't97',
    event: 'Naaman healed of leprosy',
    year: -840,
    description: 'Elisha heals Naaman of his leprosy',
    category: 'prophets',
    reference: '2 Kings 5:1-14',
    people: ['Elisha', 'Naaman']
  },
  {
    id: 't98',
    event: 'Elisha\'s final prophecy',
    year: -800,
    description: 'Elisha gives his final prophecy to King Joash',
    category: 'prophets',
    reference: '2 Kings 13:14-19',
    people: ['Elisha']
  },
  {
    id: 't99',
    event: 'Jonah and the great fish',
    year: -780,
    description: 'Jonah is swallowed by a great fish and delivered',
    category: 'prophets',
    reference: 'Jonah 1:1-17',
    people: ['Jonah']
  },
  {
    id: 't100',
    event: 'Jonah preaches to Nineveh',
    year: -780,
    description: 'Jonah preaches to Nineveh and they repent',
    category: 'prophets',
    reference: 'Jonah 3:1-10',
    people: ['Jonah']
  },
  {
    id: 't101',
    event: 'Isaiah\'s vision of God',
    year: -740,
    description: 'Isaiah sees the Lord in the temple and is called',
    category: 'prophets',
    reference: 'Isaiah 6:1-8',
    people: ['Isaiah']
  },
  {
    id: 't102',
    event: 'Isaiah prophesies the Messiah',
    year: -735,
    description: 'Isaiah prophesies the coming of the Messiah',
    category: 'prophets',
    reference: 'Isaiah 9:6-7',
    people: ['Isaiah']
  },
  {
    id: 't103',
    event: 'Micah prophesies the birthplace of the Messiah',
    year: -735,
    description: 'Micah prophesies that the Messiah will be born in Bethlehem',
    category: 'prophets',
    reference: 'Micah 5:2',
    people: ['Micah']
  },
  {
    id: 't104',
    event: 'Jeremiah\'s call',
    year: -627,
    description: 'Jeremiah is called as a prophet to the nations',
    category: 'prophets',
    reference: 'Jeremiah 1:4-10',
    people: ['Jeremiah']
  },
  {
    id: 't105',
    event: 'Jeremiah\'s temple sermon',
    year: -608,
    description: 'Jeremiah preaches to the people at the temple gate',
    category: 'prophets',
    reference: 'Jeremiah 7:1-15',
    people: ['Jeremiah']
  },
  {
    id: 't106',
    event: 'Daniel and his friends in Babylon',
    year: -605,
    description: 'Daniel and his friends are taken captive to Babylon',
    category: 'prophets',
    reference: 'Daniel 1:1-21',
    people: ['Daniel', 'Shadrach', 'Meshach', 'Abednego']
  },
  {
    id: 't107',
    event: 'Daniel interprets Nebuchadnezzar\'s dream',
    year: -603,
    description: 'Daniel interprets the king\'s dream of the statue',
    category: 'prophets',
    reference: 'Daniel 2:1-45',
    people: ['Daniel', 'Nebuchadnezzar']
  },
  {
    id: 't108',
    event: 'Ezekiel\'s vision of dry bones',
    year: -593,
    description: 'Ezekiel sees a vision of dry bones coming to life',
    category: 'prophets',
    reference: 'Ezekiel 37:1-14',
    people: ['Ezekiel']
  },
  {
    id: 't109',
    event: 'Ezekiel\'s vision of the Temple',
    year: -573,
    description: 'Ezekiel sees a vision of a restored Temple',
    category: 'prophets',
    reference: 'Ezekiel 40:1-48',
    people: ['Ezekiel']
  },
  {
    id: 't110',
    event: 'Daniel in the lion\'s den',
    year: -537,
    description: 'Daniel is thrown into the lion\'s den and survives',
    category: 'prophets',
    reference: 'Daniel 6:1-28',
    people: ['Daniel', 'Darius']
  },

  // ================================================================
  // SECTION 7: EXILE & RETURN (15+ events)
  // ================================================================
  {
    id: 't111',
    event: 'Fall of Samaria',
    year: -722,
    description: 'Assyria conquers the northern kingdom of Israel',
    category: 'exile',
    reference: '2 Kings 17:1-23',
    people: ['Assyrians']
  },
  {
    id: 't112',
    event: 'First deportation to Babylon',
    year: -605,
    description: 'Nebuchadnezzar takes Daniel and others to Babylon',
    category: 'exile',
    reference: 'Daniel 1:1-4',
    people: ['Nebuchadnezzar']
  },
  {
    id: 't113',
    event: 'Fall of Jerusalem',
    year: -586,
    description: 'The Babylonians destroy Jerusalem and the Temple',
    category: 'exile',
    reference: '2 Kings 25:1-21',
    people: ['Nebuchadnezzar', 'Zedekiah']
  },
  {
    id: 't114',
    event: 'Babylonian Exile begins',
    year: -586,
    description: 'The people of Judah are taken captive to Babylon',
    category: 'exile',
    reference: '2 Kings 25:22-26',
    people: ['Jehoiachin']
  },
  {
    id: 't115',
    event: 'Ezekiel\'s ministry in exile',
    year: -593,
    description: 'Ezekiel prophesies to the exiles in Babylon',
    category: 'exile',
    reference: 'Ezekiel 1:1-3',
    people: ['Ezekiel']
  },
  {
    id: 't116',
    event: 'Persia conquers Babylon',
    year: -539,
    description: 'Cyrus the Great of Persia conquers Babylon',
    category: 'exile',
    reference: 'Daniel 5:30-31',
    people: ['Cyrus']
  },
  {
    id: 't117',
    event: 'Cyrus allows the Jews to return',
    year: -538,
    description: 'Cyrus decrees that the Jews may return to Jerusalem',
    category: 'exile',
    reference: 'Ezra 1:1-4',
    people: ['Cyrus']
  },
  {
    id: 't118',
    event: 'First group returns from exile',
    year: -538,
    description: 'Zerubbabel leads the first group back to Jerusalem',
    category: 'exile',
    reference: 'Ezra 2:1-70',
    people: ['Zerubbabel', 'Jeshua']
  },
  {
    id: 't119',
    event: 'Foundation of the Temple laid',
    year: -537,
    description: 'The foundation of the Second Temple is laid',
    category: 'exile',
    reference: 'Ezra 3:8-13',
    people: ['Zerubbabel']
  },
  {
    id: 't120',
    event: 'Second Temple completed',
    year: -516,
    description: 'The Second Temple is completed and dedicated',
    category: 'exile',
    reference: 'Ezra 6:13-18',
    people: ['Zerubbabel']
  },
  {
    id: 't121',
    event: 'Ezra returns to Jerusalem',
    year: -458,
    description: 'Ezra leads a second group back to Jerusalem',
    category: 'exile',
    reference: 'Ezra 7:1-10',
    people: ['Ezra']
  },
  {
    id: 't122',
    event: 'Nehemiah returns to Jerusalem',
    year: -445,
    description: 'Nehemiah returns to rebuild the walls of Jerusalem',
    category: 'exile',
    reference: 'Nehemiah 2:1-8',
    people: ['Nehemiah']
  },
  {
    id: 't123',
    event: 'Jerusalem\'s walls rebuilt',
    year: -444,
    description: 'The walls of Jerusalem are completed in 52 days',
    category: 'exile',
    reference: 'Nehemiah 6:15-16',
    people: ['Nehemiah']
  },
  {
    id: 't124',
    event: 'Ezra reads the Law',
    year: -444,
    description: 'Ezra reads the Book of the Law to the people',
    category: 'exile',
    reference: 'Nehemiah 8:1-12',
    people: ['Ezra', 'Nehemiah']
  },
  {
    id: 't125',
    event: 'Malachi\'s prophecy',
    year: -430,
    description: 'Malachi prophesies, becoming the last Old Testament prophet',
    category: 'exile',
    reference: 'Malachi 1:1-14',
    people: ['Malachi']
  },

  // ================================================================
  // SECTION 8: INTERTESTAMENTAL PERIOD (5+ events)
  // ================================================================
  {
    id: 't126',
    event: 'Greek conquest of Persia',
    year: -333,
    description: 'Alexander the Great conquers Persia',
    category: 'intertestamental',
    reference: 'Daniel 8:5-8',
    people: ['Alexander the Great']
  },
  {
    id: 't127',
    event: 'Maccabean Revolt',
    year: -167,
    description: 'The Maccabees revolt against Greek oppression',
    category: 'intertestamental',
    reference: '1 Maccabees 2:1-70',
    people: ['Judas Maccabeus']
  },
  {
    id: 't128',
    event: 'Roman conquest of Judea',
    year: -63,
    description: 'Pompey conquers Judea, making it a Roman province',
    category: 'intertestamental',
    reference: 'Josephus',
    people: ['Pompey']
  },

  // ================================================================
  // SECTION 9: NEW TESTAMENT (25+ events)
  // ================================================================
  {
    id: 't129',
    event: 'Birth of John the Baptist',
    year: -5,
    description: 'John the Baptist is born to Zechariah and Elizabeth',
    category: 'new-testament',
    reference: 'Luke 1:57-66',
    people: ['John the Baptist', 'Zechariah', 'Elizabeth']
  },
  {
    id: 't130',
    event: 'Birth of Jesus',
    year: -5,
    description: 'Jesus is born in Bethlehem to Mary and Joseph',
    category: 'new-testament',
    reference: 'Luke 2:1-7',
    people: ['Jesus', 'Mary', 'Joseph']
  },
  {
    id: 't131',
    event: 'Shepherds visit Jesus',
    year: -5,
    description: 'Shepherds visit the newborn Jesus',
    category: 'new-testament',
    reference: 'Luke 2:8-20',
    people: ['Jesus', 'Shepherds']
  },
  {
    id: 't132',
    event: 'Presentation at the Temple',
    year: -5,
    description: 'Mary and Joseph present Jesus at the Temple',
    category: 'new-testament',
    reference: 'Luke 2:22-38',
    people: ['Jesus', 'Simeon', 'Anna']
  },
  {
    id: 't133',
    event: 'Visit of the Magi',
    year: -4,
    description: 'Wise men from the East visit the young Jesus',
    category: 'new-testament',
    reference: 'Matthew 2:1-12',
    people: ['Jesus', 'Magi', 'Herod']
  },
  {
    id: 't134',
    event: 'Jesus in the Temple',
    year: 12,
    description: 'Twelve-year-old Jesus teaches in the Temple',
    category: 'new-testament',
    reference: 'Luke 2:41-50',
    people: ['Jesus', 'Mary', 'Joseph']
  },
  {
    id: 't135',
    event: 'John the Baptist\'s ministry begins',
    year: 26,
    description: 'John the Baptist begins his ministry in the wilderness',
    category: 'new-testament',
    reference: 'Luke 3:1-3',
    people: ['John the Baptist']
  },
  {
    id: 't136',
    event: 'Jesus\' baptism',
    year: 27,
    description: 'John baptizes Jesus in the Jordan River',
    category: 'new-testament',
    reference: 'Matthew 3:13-17',
    people: ['Jesus', 'John the Baptist']
  },
  {
    id: 't137',
    event: 'Temptation of Jesus',
    year: 27,
    description: 'Jesus is tempted by Satan in the wilderness for 40 days',
    category: 'new-testament',
    reference: 'Matthew 4:1-11',
    people: ['Jesus', 'Satan']
  },
  {
    id: 't138',
    event: 'Jesus turns water into wine',
    year: 27,
    description: 'Jesus performs his first miracle at the wedding in Cana',
    category: 'new-testament',
    reference: 'John 2:1-11',
    people: ['Jesus', 'Mary']
  },
  {
    id: 't139',
    event: 'Jesus calls the first disciples',
    year: 27,
    description: 'Jesus calls Peter, Andrew, James, and John',
    category: 'new-testament',
    reference: 'Matthew 4:18-22',
    people: ['Jesus', 'Peter', 'Andrew', 'James', 'John']
  },
  {
    id: 't140',
    event: 'Sermon on the Mount',
    year: 28,
    description: 'Jesus teaches the Beatitudes and the Lord\'s Prayer',
    category: 'new-testament',
    reference: 'Matthew 5:1-7:29',
    people: ['Jesus']
  },
  {
    id: 't141',
    event: 'Jesus walks on water',
    year: 28,
    description: 'Jesus walks on the Sea of Galilee',
    category: 'new-testament',
    reference: 'Matthew 14:22-33',
    people: ['Jesus', 'Peter']
  },
  {
    id: 't142',
    event: 'Peter\'s confession',
    year: 28,
    description: 'Peter confesses that Jesus is the Christ',
    category: 'new-testament',
    reference: 'Matthew 16:13-20',
    people: ['Jesus', 'Peter']
  },
  {
    id: 't143',
    event: 'Transfiguration of Jesus',
    year: 28,
    description: 'Jesus is transfigured before Peter, James, and John',
    category: 'new-testament',
    reference: 'Matthew 17:1-8',
    people: ['Jesus', 'Peter', 'James', 'John', 'Moses', 'Elijah']
  },
  {
    id: 't144',
    event: 'Jesus raises Lazarus',
    year: 29,
    description: 'Jesus raises Lazarus from the dead after four days',
    category: 'new-testament',
    reference: 'John 11:38-44',
    people: ['Jesus', 'Lazarus', 'Mary', 'Martha']
  },
  {
    id: 't145',
    event: 'Triumphal Entry',
    year: 30,
    description: 'Jesus enters Jerusalem on a donkey',
    category: 'new-testament',
    reference: 'Matthew 21:1-11',
    people: ['Jesus']
  },
  {
    id: 't146',
    event: 'The Last Supper',
    year: 30,
    description: 'Jesus shares the Passover meal with his disciples',
    category: 'new-testament',
    reference: 'Matthew 26:17-30',
    people: ['Jesus', 'Disciples']
  },
  {
    id: 't147',
    event: 'Betrayal and arrest',
    year: 30,
    description: 'Judas betrays Jesus and he is arrested in Gethsemane',
    category: 'new-testament',
    reference: 'Matthew 26:47-56',
    people: ['Jesus', 'Judas', 'Peter']
  },
  {
    id: 't148',
    event: 'Peter denies Jesus',
    year: 30,
    description: 'Peter denies knowing Jesus three times',
    category: 'new-testament',
    reference: 'Matthew 26:69-75',
    people: ['Peter', 'Jesus']
  },
  {
    id: 't149',
    event: 'Crucifixion of Jesus',
    year: 30,
    description: 'Jesus is crucified on Golgotha',
    category: 'new-testament',
    reference: 'Matthew 27:33-50',
    people: ['Jesus', 'Mary', 'John']
  },
  {
    id: 't150',
    event: 'Resurrection of Jesus',
    year: 30,
    description: 'Jesus rises from the dead on the third day',
    category: 'new-testament',
    reference: 'Matthew 28:1-10',
    people: ['Jesus', 'Mary Magdalene', 'Mary']
  },
  {
    id: 't151',
    event: 'Ascension of Jesus',
    year: 30,
    description: 'Jesus ascends to heaven from the Mount of Olives',
    category: 'new-testament',
    reference: 'Acts 1:9-11',
    people: ['Jesus', 'Disciples']
  },

  // ================================================================
  // SECTION 10: EARLY CHURCH (10+ events)
  // ================================================================
  {
    id: 't152',
    event: 'Day of Pentecost',
    year: 30,
    description: 'The Holy Spirit descends and the Church is born',
    category: 'early-church',
    reference: 'Acts 2:1-13',
    people: ['Peter', 'Disciples', 'Holy Spirit']
  },
  {
    id: 't153',
    event: 'Peter\'s sermon at Pentecost',
    year: 30,
    description: 'Peter preaches and 3,000 people are saved',
    category: 'early-church',
    reference: 'Acts 2:14-41',
    people: ['Peter']
  },
  {
    id: 't154',
    event: 'First Christian martyrdom',
    year: 34,
    description: 'Stephen becomes the first Christian martyr',
    category: 'early-church',
    reference: 'Acts 7:54-60',
    people: ['Stephen', 'Saul']
  },
  {
    id: 't155',
    event: 'Paul\'s conversion',
    year: 34,
    description: 'Saul encounters Jesus on the road to Damascus',
    category: 'early-church',
    reference: 'Acts 9:1-19',
    people: ['Paul', 'Ananias']
  },
  {
    id: 't156',
    event: 'Peter\'s vision of clean animals',
    year: 40,
    description: 'Peter receives a vision to preach to the Gentiles',
    category: 'early-church',
    reference: 'Acts 10:9-16',
    people: ['Peter']
  },
  {
    id: 't157',
    event: 'Paul\'s first missionary journey',
    year: 46,
    description: 'Paul and Barnabas begin their first missionary journey',
    category: 'early-church',
    reference: 'Acts 13:1-52',
    people: ['Paul', 'Barnabas']
  },
  {
    id: 't158',
    event: 'Jerusalem Council',
    year: 49,
    description: 'The council decides that Gentiles don\'t need to keep the law',
    category: 'early-church',
    reference: 'Acts 15:1-35',
    people: ['Paul', 'Barnabas', 'Peter', 'James']
  },
  {
    id: 't159',
    event: 'Paul\'s second missionary journey',
    year: 50,
    description: 'Paul travels through Greece and Asia Minor',
    category: 'early-church',
    reference: 'Acts 16:1-18:22',
    people: ['Paul', 'Silas', 'Timothy']
  },
  {
    id: 't160',
    event: 'Paul\'s third missionary journey',
    year: 53,
    description: 'Paul travels to Ephesus and Macedonia',
    category: 'early-church',
    reference: 'Acts 18:23-21:17',
    people: ['Paul']
  },
  {
    id: 't161',
    event: 'Paul\'s imprisonment in Rome',
    year: 59,
    description: 'Paul is imprisoned in Rome and writes his prison letters',
    category: 'early-church',
    reference: 'Acts 28:16-31',
    people: ['Paul']
  },
  {
    id: 't162',
    event: 'Death of Paul and Peter',
    year: 64,
    description: 'Paul and Peter are martyred in Rome under Nero',
    category: 'early-church',
    reference: 'Tradition',
    people: ['Paul', 'Peter']
  },
  {
    id: 't163',
    event: 'Book of Revelation written',
    year: 95,
    description: 'John writes the book of Revelation on Patmos',
    category: 'early-church',
    reference: 'Revelation 1:1-9',
    people: ['John']
  }
];

// ================================================================
// HELPER FUNCTIONS
// ================================================================

export const getTimelineEvents = (count: number = 10): TimelineEvent[] => {
  const shuffled = [...timelineEvents].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export const getEventsByCategory = (category: string): TimelineEvent[] => {
  if (category === 'all') return timelineEvents;
  return timelineEvents.filter(e => e.category === category);
};

export const getCategories = () => [
  { value: 'all', label: 'All' },
  { value: 'creation', label: 'Creation' },
  { value: 'patriarchs', label: 'Patriarchs' },
  { value: 'exodus', label: 'Exodus' },
  { value: 'judges', label: 'Judges' },
  { value: 'kings', label: 'Kings' },
  { value: 'prophets', label: 'Prophets' },
  { value: 'exile', label: 'Exile' },
  { value: 'intertestamental', label: 'Intertestamental' },
  { value: 'new-testament', label: 'New Testament' },
  { value: 'early-church', label: 'Early Church' }
];

export const getDifficultyLevels = () => [
  { value: 'easy', label: 'Easy', count: 10 },
  { value: 'medium', label: 'Medium', count: 20 },
  { value: 'hard', label: 'Hard', count: 30 },
  { value: 'expert', label: 'Expert', count: 50 }
];

export const getEventById = (id: string): TimelineEvent | undefined => {
  return timelineEvents.find(e => e.id === id);
};

export const getEventsByYearRange = (startYear: number, endYear: number): TimelineEvent[] => {
  return timelineEvents.filter(e => e.year >= startYear && e.year <= endYear);
};

export const getEventsByPeople = (person: string): TimelineEvent[] => {
  return timelineEvents.filter(e => e.people && e.people.includes(person));
};

export const getEventCount = (): number => {
  return timelineEvents.length;
};

export const getCategoryCounts = (): Record<string, number> => {
  const counts: Record<string, number> = {};
  timelineEvents.forEach(e => {
    counts[e.category] = (counts[e.category] || 0) + 1;
  });
  return counts;
};

export const getAllPeople = (): string[] => {
  const people = new Set<string>();
  timelineEvents.forEach(e => {
    e.people?.forEach(p => people.add(p));
  });
  return Array.from(people).sort();
};

export const getTimelineStats = () => ({
  totalEvents: timelineEvents.length,
  categories: getCategoryCounts(),
  peopleCount: getAllPeople().length,
  earliestYear: Math.min(...timelineEvents.map(e => e.year)),
  latestYear: Math.max(...timelineEvents.map(e => e.year))
});