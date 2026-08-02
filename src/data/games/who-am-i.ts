// src/data/games/who-am-i.ts

export interface CharacterClue {
  id: string;
  name: string;
  clues: string[];
  reference: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  category: 'old-testament' | 'new-testament' | 'women' | 'kings' | 'prophets' | 'apostles' | 'judges' | 'patriarchs' | 'angels' | 'disciples' | 'early-church' | 'minor-prophets' | 'martyrs';
  funFact?: string;
  keyVerse?: string;
}

export const characterClues: CharacterClue[] = [
  // ================================================================
  // SECTION 1: PATRIARCHS (15 characters)
  // ================================================================
  {
    id: 'c1',
    name: 'Noah',
    clues: [
      'I built a large boat',
      'I saved my family and animals from a flood',
      'I saw a rainbow as God\'s promise'
    ],
    reference: 'Genesis 6-9',
    difficulty: 'easy',
    category: 'patriarchs',
    funFact: 'I lived 950 years!',
    keyVerse: 'Genesis 6:22'
  },
  {
    id: 'c2',
    name: 'Abraham',
    clues: [
      'I was called the father of many nations',
      'I was willing to sacrifice my son',
      'I left my homeland to follow God'
    ],
    reference: 'Genesis 12-22',
    difficulty: 'easy',
    category: 'patriarchs',
    funFact: 'God changed my name from Abram to Abraham',
    keyVerse: 'Genesis 12:1-3'
  },
  {
    id: 'c3',
    name: 'Isaac',
    clues: [
      'I was the son of Abraham and Sarah',
      'I was almost sacrificed on an altar',
      'I married Rebekah'
    ],
    reference: 'Genesis 21-26',
    difficulty: 'easy',
    category: 'patriarchs',
    funFact: 'I was born when my parents were very old',
    keyVerse: 'Genesis 22:9-12'
  },
  {
    id: 'c4',
    name: 'Jacob',
    clues: [
      'I wrestled with God',
      'I had 12 sons who became the 12 tribes of Israel',
      'My name was changed to Israel'
    ],
    reference: 'Genesis 25-49',
    difficulty: 'easy',
    category: 'patriarchs',
    funFact: 'I wore a coat of many colors as a young man',
    keyVerse: 'Genesis 32:28'
  },
  {
    id: 'c5',
    name: 'Esau',
    clues: [
      'I was Jacob\'s twin brother',
      'I sold my birthright for a bowl of stew',
      'I was a skilled hunter'
    ],
    reference: 'Genesis 25-27',
    difficulty: 'medium',
    category: 'patriarchs',
    funFact: 'I was also called Edom',
    keyVerse: 'Genesis 25:34'
  },
  {
    id: 'c6',
    name: 'Joseph',
    clues: [
      'I was sold into slavery by my brothers',
      'I interpreted dreams for Pharaoh',
      'I saved Egypt from a great famine'
    ],
    reference: 'Genesis 37-50',
    difficulty: 'easy',
    category: 'patriarchs',
    funFact: 'I wore a coat of many colors',
    keyVerse: 'Genesis 50:20'
  },
  {
    id: 'c7',
    name: 'Benjamin',
    clues: [
      'I was the youngest son of Jacob',
      'My mother Rachel died giving birth to me',
      'My brothers thought Joseph took me'
    ],
    reference: 'Genesis 35, 42-44',
    difficulty: 'hard',
    category: 'patriarchs',
    funFact: 'My name means "son of my right hand"',
    keyVerse: 'Genesis 35:18'
  },
  {
    id: 'c8',
    name: 'Judah',
    clues: [
      'I was one of Jacob\'s sons',
      'I offered myself in place of Benjamin',
      'The tribe of kings came from me'
    ],
    reference: 'Genesis 38, 44',
    difficulty: 'hard',
    category: 'patriarchs',
    funFact: 'Jesus came from my tribe',
    keyVerse: 'Genesis 44:33'
  },
  {
    id: 'c9',
    name: 'Levi',
    clues: [
      'I was the third son of Jacob and Leah',
      'My descendants became priests',
      'I was known for my anger'
    ],
    reference: 'Genesis 29:34, 34:25-31',
    difficulty: 'hard',
    category: 'patriarchs',
    funFact: 'The Levites became the priestly tribe',
    keyVerse: 'Genesis 34:25'
  },
  {
    id: 'c10',
    name: 'Simeon',
    clues: [
      'I was the second son of Jacob and Leah',
      'I was known for my violence',
      'My brother and I avenged our sister Dinah'
    ],
    reference: 'Genesis 29:33, 34:25-31',
    difficulty: 'hard',
    category: 'patriarchs',
    funFact: 'My descendants were scattered in Israel',
    keyVerse: 'Genesis 34:25'
  },
  {
    id: 'c11',
    name: 'Zebulun',
    clues: [
      'I was the sixth son of Jacob and Leah',
      'My name means "dwelling"',
      'My tribe was known for seafaring'
    ],
    reference: 'Genesis 30:19-20',
    difficulty: 'expert',
    category: 'patriarchs',
    funFact: 'My tribe lived by the sea',
    keyVerse: 'Genesis 30:20'
  },
  {
    id: 'c12',
    name: 'Issachar',
    clues: [
      'I was the fifth son of Jacob and Leah',
      'My tribe was known for their wisdom',
      'My name means "reward"'
    ],
    reference: 'Genesis 30:17-18',
    difficulty: 'expert',
    category: 'patriarchs',
    funFact: 'My tribe was known for understanding the times',
    keyVerse: 'Genesis 30:18'
  },
  {
    id: 'c13',
    name: 'Dan',
    clues: [
      'I was the first son of Jacob and Bilhah',
      'My name means "judge"',
      'My tribe settled in the north of Israel'
    ],
    reference: 'Genesis 30:5-6',
    difficulty: 'expert',
    category: 'patriarchs',
    funFact: 'Samson was from my tribe',
    keyVerse: 'Genesis 30:6'
  },
  {
    id: 'c14',
    name: 'Naphtali',
    clues: [
      'I was the second son of Jacob and Bilhah',
      'My name means "my struggle"',
      'My tribe was known for their swiftness'
    ],
    reference: 'Genesis 30:7-8',
    difficulty: 'expert',
    category: 'patriarchs',
    funFact: 'My tribe was called "free" (Judges 5:18)',
    keyVerse: 'Genesis 30:8'
  },
  {
    id: 'c15',
    name: 'Gad',
    clues: [
      'I was the first son of Jacob and Zilpah',
      'My name means "good fortune"',
      'My tribe settled east of the Jordan'
    ],
    reference: 'Genesis 30:10-11',
    difficulty: 'expert',
    category: 'patriarchs',
    funFact: 'My tribe were known as mighty warriors',
    keyVerse: 'Genesis 30:11'
  },

  // ================================================================
  // SECTION 2: EXODUS & WILDERNESS (15 characters)
  // ================================================================
  {
    id: 'c16',
    name: 'Moses',
    clues: [
      'I was found in a basket in the Nile River',
      'I led my people out of Egypt',
      'I received the Ten Commandments on a mountain'
    ],
    reference: 'Exodus 2-20',
    difficulty: 'easy',
    category: 'old-testament',
    funFact: 'I was the most humble man on earth',
    keyVerse: 'Exodus 3:14'
  },
  {
    id: 'c17',
    name: 'Aaron',
    clues: [
      'I was the brother of Moses',
      'I became the first high priest',
      'I made a golden calf while Moses was on the mountain'
    ],
    reference: 'Exodus 4, 32, Leviticus 8',
    difficulty: 'easy',
    category: 'old-testament',
    funFact: 'I was three years older than Moses',
    keyVerse: 'Exodus 4:14'
  },
  {
    id: 'c18',
    name: 'Miriam',
    clues: [
      'I was the sister of Moses and Aaron',
      'I watched over Moses as a baby in the Nile',
      'I was a prophetess who led worship after crossing the Red Sea'
    ],
    reference: 'Exodus 2, 15, Numbers 12',
    difficulty: 'medium',
    category: 'women',
    funFact: 'I was struck with leprosy for speaking against Moses',
    keyVerse: 'Exodus 15:20-21'
  },
  {
    id: 'c19',
    name: 'Joshua',
    clues: [
      'I led Israel into the Promised Land',
      'I marched around Jericho for seven days',
      'I said "As for me and my house, we will serve the Lord"'
    ],
    reference: 'Joshua 1-6, 24',
    difficulty: 'easy',
    category: 'old-testament',
    funFact: 'I was one of the two faithful spies',
    keyVerse: 'Joshua 24:15'
  },
  {
    id: 'c20',
    name: 'Caleb',
    clues: [
      'I was one of the 12 spies sent to Canaan',
      'I was the only other faithful spy besides Joshua',
      'I conquered Hebron at age 85'
    ],
    reference: 'Numbers 13-14, Joshua 14',
    difficulty: 'medium',
    category: 'old-testament',
    funFact: 'I was 85 years old when I conquered my mountain',
    keyVerse: 'Joshua 14:12'
  },
  {
    id: 'c21',
    name: 'Pharaoh (Exodus)',
    clues: [
      'I refused to let the Israelites go',
      'I hardened my heart against God',
      'My army was destroyed in the Red Sea'
    ],
    reference: 'Exodus 5-14',
    difficulty: 'easy',
    category: 'old-testament',
    funFact: 'I had 10 plagues sent against me',
    keyVerse: 'Exodus 9:12'
  },
  {
    id: 'c22',
    name: 'Jethro',
    clues: [
      'I was Moses\' father-in-law',
      'I was a priest of Midian',
      'I advised Moses to delegate leadership'
    ],
    reference: 'Exodus 2, 18',
    difficulty: 'medium',
    category: 'old-testament',
    funFact: 'I gave Moses wise advice about leadership',
    keyVerse: 'Exodus 18:17-23'
  },
  {
    id: 'c23',
    name: 'Korah',
    clues: [
      'I led a rebellion against Moses and Aaron',
      'I wanted to be a priest',
      'I was swallowed by the earth'
    ],
    reference: 'Numbers 16',
    difficulty: 'hard',
    category: 'old-testament',
    funFact: 'My rebellion is a warning against pride',
    keyVerse: 'Numbers 16:32-33'
  },
  {
    id: 'c24',
    name: 'Balaam',
    clues: [
      'I was a prophet who was hired to curse Israel',
      'My donkey spoke to me',
      'I blessed Israel instead of cursing them'
    ],
    reference: 'Numbers 22-24',
    difficulty: 'hard',
    category: 'prophets',
    funFact: 'My donkey saw the angel before I did',
    keyVerse: 'Numbers 22:28'
  },
  {
    id: 'c25',
    name: 'Phinehas',
    clues: [
      'I was the grandson of Aaron',
      'I was zealous for God\'s holiness',
      'I stopped a plague with a spear'
    ],
    reference: 'Numbers 25, 31',
    difficulty: 'expert',
    category: 'old-testament',
    funFact: 'God made a covenant of peace with me',
    keyVerse: 'Numbers 25:11-13'
  },
  {
    id: 'c26',
    name: 'Midian',
    clues: [
      'I was a tribe descended from Abraham',
      'I oppressed Israel in the time of Gideon',
      'My people were defeated by Gideon'
    ],
    reference: 'Judges 6-8',
    difficulty: 'hard',
    category: 'old-testament',
    funFact: 'Moses fled to Midian and married a Midianite',
    keyVerse: 'Judges 7:22'
  },
  {
    id: 'c27',
    name: 'Othniel',
    clues: [
      'I was the first judge of Israel',
      'I was Caleb\'s younger brother',
      'I delivered Israel from the king of Mesopotamia'
    ],
    reference: 'Judges 3:7-11',
    difficulty: 'hard',
    category: 'judges',
    funFact: 'I married Caleb\'s daughter Achsah',
    keyVerse: 'Judges 3:10'
  },
  {
    id: 'c28',
    name: 'Ehud',
    clues: [
      'I was a left-handed judge',
      'I assassinated the king of Moab',
      'I delivered Israel from Moab\'s oppression'
    ],
    reference: 'Judges 3:12-30',
    difficulty: 'hard',
    category: 'judges',
    funFact: 'I made a double-edged sword and hid it on my thigh',
    keyVerse: 'Judges 3:21-22'
  },
  {
    id: 'c29',
    name: 'Shamgar',
    clues: [
      'I was a judge of Israel',
      'I killed 600 Philistines with an oxgoad',
      'I delivered Israel from the Philistines'
    ],
    reference: 'Judges 3:31',
    difficulty: 'expert',
    category: 'judges',
    funFact: 'I used an oxgoad as a weapon',
    keyVerse: 'Judges 3:31'
  },
  {
    id: 'c30',
    name: 'Barak',
    clues: [
      'I was a military commander in Israel',
      'I fought alongside Deborah',
      'I defeated the Canaanite army'
    ],
    reference: 'Judges 4-5',
    difficulty: 'medium',
    category: 'judges',
    funFact: 'I refused to go into battle without Deborah',
    keyVerse: 'Judges 4:8'
  },

  // ================================================================
  // SECTION 3: KINGS (20 characters)
  // ================================================================
  {
    id: 'c31',
    name: 'David',
    clues: [
      'I was a shepherd boy who became king',
      'I defeated a giant with a sling and stone',
      'I wrote many of the Psalms'
    ],
    reference: '1 Samuel 16-17, Psalms',
    difficulty: 'easy',
    category: 'kings',
    funFact: 'I was called a man after God\'s own heart',
    keyVerse: '1 Samuel 13:14'
  },
  {
    id: 'c32',
    name: 'Saul',
    clues: [
      'I was the first king of Israel',
      'I was rejected by God for disobedience',
      'I was killed in battle against the Philistines'
    ],
    reference: '1 Samuel 9-31',
    difficulty: 'easy',
    category: 'kings',
    funFact: 'I was from the tribe of Benjamin',
    keyVerse: '1 Samuel 15:23'
  },
  {
    id: 'c33',
    name: 'Solomon',
    clues: [
      'I was known as the wisest man who ever lived',
      'I built the first temple in Jerusalem',
      'I wrote the book of Proverbs'
    ],
    reference: '1 Kings 3-11, Proverbs',
    difficulty: 'easy',
    category: 'kings',
    funFact: 'I had 700 wives and 300 concubines',
    keyVerse: '1 Kings 3:12'
  },
  {
    id: 'c34',
    name: 'Hezekiah',
    clues: [
      'I was a good king of Judah',
      'I trusted God and was healed from a deadly illness',
      'I prayed and God added 15 years to my life'
    ],
    reference: '2 Kings 18-20',
    difficulty: 'medium',
    category: 'kings',
    funFact: 'I saw the shadow go back 10 steps as a sign',
    keyVerse: '2 Kings 20:5-6'
  },
  {
    id: 'c35',
    name: 'Josiah',
    clues: [
      'I became king at age 8',
      'I found the Book of the Law in the temple',
      'I led a great religious reform in Judah'
    ],
    reference: '2 Kings 22-23',
    difficulty: 'medium',
    category: 'kings',
    funFact: 'I was the last good king of Judah',
    keyVerse: '2 Kings 23:25'
  },
  {
    id: 'c36',
    name: 'Rehoboam',
    clues: [
      'I was Solomon\'s son',
      'I made the kingdom divide with my harsh words',
      'I was the king of Judah after the division'
    ],
    reference: '1 Kings 12',
    difficulty: 'medium',
    category: 'kings',
    funFact: 'I listened to my young friends instead of the elders',
    keyVerse: '1 Kings 12:13-14'
  },
  {
    id: 'c37',
    name: 'Jeroboam',
    clues: [
      'I was the first king of the northern kingdom of Israel',
      'I set up golden calves in Dan and Bethel',
      'I led Israel into idolatry'
    ],
    reference: '1 Kings 11-14',
    difficulty: 'medium',
    category: 'kings',
    funFact: 'My sin caused Israel to fall into idolatry',
    keyVerse: '1 Kings 12:28-30'
  },
  {
    id: 'c38',
    name: 'Ahab',
    clues: [
      'I was the wicked king of Israel',
      'I married Jezebel',
      'I built a temple to Baal'
    ],
    reference: '1 Kings 16-22',
    difficulty: 'medium',
    category: 'kings',
    funFact: 'I was defeated by the prophet Elijah',
    keyVerse: '1 Kings 16:30-33'
  },
  {
    id: 'c39',
    name: 'Jehoshaphat',
    clues: [
      'I was a good king of Judah',
      'I allied with Ahab but was rebuked',
      'I appointed judges and sought the Lord'
    ],
    reference: '1 Kings 22, 2 Chronicles 17-20',
    difficulty: 'hard',
    category: 'kings',
    funFact: 'I prayed "Lord, I don\'t know what to do"',
    keyVerse: '2 Chronicles 20:12'
  },
  {
    id: 'c40',
    name: 'Uzziah',
    clues: [
      'I became king at age 16',
      'I was a successful king who became proud',
      'I was struck with leprosy for entering the temple'
    ],
    reference: '2 Kings 15, 2 Chronicles 26',
    difficulty: 'hard',
    category: 'kings',
    funFact: 'My pride led to my downfall',
    keyVerse: '2 Chronicles 26:16'
  },
  {
    id: 'c41',
    name: 'Jehu',
    clues: [
      'I was anointed king of Israel',
      'I destroyed the house of Ahab',
      'I drove my chariot furiously'
    ],
    reference: '2 Kings 9-10',
    difficulty: 'hard',
    category: 'kings',
    funFact: 'I was known for my furious driving',
    keyVerse: '2 Kings 9:20'
  },
  {
    id: 'c42',
    name: 'Joash (Jehoash)',
    clues: [
      'I became king at age 7',
      'I was hidden in the temple for 6 years',
      'I repaired the temple during my reign'
    ],
    reference: '2 Kings 11-12',
    difficulty: 'hard',
    category: 'kings',
    funFact: 'I was saved from death by my aunt Jehosheba',
    keyVerse: '2 Kings 11:12'
  },
  {
    id: 'c43',
    name: 'Manasseh',
    clues: [
      'I was the most wicked king of Judah',
      'I led Judah into terrible idolatry',
      'I repented after being taken captive to Babylon'
    ],
    reference: '2 Kings 21, 2 Chronicles 33',
    difficulty: 'hard',
    category: 'kings',
    funFact: 'My repentance shows God\'s mercy is great',
    keyVerse: '2 Chronicles 33:12-13'
  },
  {
    id: 'c44',
    name: 'Cyrus (Persian King)',
    clues: [
      'I was the king of Persia who conquered Babylon',
      'I allowed the Jews to return to their homeland',
      'I was called God\'s shepherd'
    ],
    reference: '2 Chronicles 36, Ezra 1, Isaiah 44-45',
    difficulty: 'hard',
    category: 'kings',
    funFact: 'I was prophesied by Isaiah 150 years before I lived',
    keyVerse: 'Isaiah 45:1'
  },
  {
    id: 'c45',
    name: 'Nebuchadnezzar',
    clues: [
      'I was the king of Babylon',
      'I conquered Jerusalem and destroyed the temple',
      'I went insane for 7 years because of my pride'
    ],
    reference: 'Daniel 2-4',
    difficulty: 'hard',
    category: 'kings',
    funFact: 'I had a dream of a great statue that Daniel interpreted',
    keyVerse: 'Daniel 4:37'
  },
  {
    id: 'c46',
    name: 'Artaxerxes',
    clues: [
      'I was the Persian king who allowed Nehemiah to return',
      'I gave Nehemiah permission to rebuild Jerusalem\'s walls',
      'I was a friend to the Jews'
    ],
    reference: 'Nehemiah 1-2',
    difficulty: 'expert',
    category: 'kings',
    funFact: 'I noticed Nehemiah was sad and asked about it',
    keyVerse: 'Nehemiah 2:4-5'
  },
  {
    id: 'c47',
    name: 'Darius',
    clues: [
      'I was the king who threw Daniel into the lion\'s den',
      'I regretted having to punish Daniel',
      'I was happy when Daniel was saved'
    ],
    reference: 'Daniel 6',
    difficulty: 'medium',
    category: 'kings',
    funFact: 'I fasted because I was concerned about Daniel',
    keyVerse: 'Daniel 6:14'
  },
  {
    id: 'c48',
    name: 'Herod the Great',
    clues: [
      'I was the king who tried to kill baby Jesus',
      'I ordered the massacre of all male infants in Bethlehem',
      'I was a Roman-appointed king'
    ],
    reference: 'Matthew 2:1-18',
    difficulty: 'medium',
    category: 'new-testament',
    funFact: 'I died shortly after the massacre',
    keyVerse: 'Matthew 2:16'
  },
  {
    id: 'c49',
    name: 'Herod Agrippa',
    clues: [
      'I was the king who had James killed',
      'I imprisoned Peter',
      'I was struck down by an angel and died'
    ],
    reference: 'Acts 12',
    difficulty: 'hard',
    category: 'new-testament',
    funFact: 'I accepted worship as if I were a god',
    keyVerse: 'Acts 12:23'
  },
  {
    id: 'c50',
    name: 'Pontius Pilate',
    clues: [
      'I was the Roman governor who sentenced Jesus to death',
      'I found no fault in Jesus but still condemned him',
      'I washed my hands to show my innocence'
    ],
    reference: 'Matthew 27, Mark 15, John 18-19',
    difficulty: 'medium',
    category: 'new-testament',
    funFact: 'I had a notice placed on the cross: "King of the Jews"',
    keyVerse: 'Matthew 27:24'
  },

  // ================================================================
  // SECTION 4: PROPHETS (25 characters)
  // ================================================================
  {
    id: 'c51',
    name: 'Elijah',
    clues: [
      'I challenged the prophets of Baal on Mount Carmel',
      'I was taken to heaven in a whirlwind',
      'I was fed by ravens during a drought'
    ],
    reference: '1 Kings 17-19, 2 Kings 2',
    difficulty: 'medium',
    category: 'prophets',
    funFact: 'I never died, I was taken straight to heaven',
    keyVerse: '1 Kings 18:21'
  },
  {
    id: 'c52',
    name: 'Elisha',
    clues: [
      'I was Elijah\'s successor',
      'I performed twice as many miracles as Elijah',
      'I healed Naaman of leprosy'
    ],
    reference: '2 Kings 2-13',
    difficulty: 'medium',
    category: 'prophets',
    funFact: 'I saw a chariot of fire take Elijah to heaven',
    keyVerse: '2 Kings 2:9'
  },
  {
    id: 'c53',
    name: 'Isaiah',
    clues: [
      'I saw the Lord high and lifted up in the temple',
      'I prophesied the birth of the Messiah from a virgin',
      'I wrote about the suffering servant'
    ],
    reference: 'Isaiah 1-66',
    difficulty: 'medium',
    category: 'prophets',
    funFact: 'I prophesied about Jesus 700 years before he came',
    keyVerse: 'Isaiah 6:8'
  },
  {
    id: 'c54',
    name: 'Jeremiah',
    clues: [
      'I was known as the weeping prophet',
      'I was thrown into a cistern',
      'I prophesied the destruction of Jerusalem'
    ],
    reference: 'Jeremiah 1-39',
    difficulty: 'hard',
    category: 'prophets',
    funFact: 'I had a scroll that was burned and I rewrote it',
    keyVerse: 'Jeremiah 1:5'
  },
  {
    id: 'c55',
    name: 'Ezekiel',
    clues: [
      'I saw a vision of a valley of dry bones',
      'I was told to eat a scroll',
      'I prophesied during the Babylonian exile'
    ],
    reference: 'Ezekiel 1-37',
    difficulty: 'hard',
    category: 'prophets',
    funFact: 'I had visions of God\'s glory on wheels',
    keyVerse: 'Ezekiel 37:3'
  },
  {
    id: 'c56',
    name: 'Daniel',
    clues: [
      'I was thrown into a den of lions',
      'I interpreted the handwriting on the wall',
      'I continued praying despite a decree against it'
    ],
    reference: 'Daniel 1-6',
    difficulty: 'medium',
    category: 'prophets',
    funFact: 'I was taken captive to Babylon as a teenager',
    keyVerse: 'Daniel 6:10'
  },
  {
    id: 'c57',
    name: 'Jonah',
    clues: [
      'I was swallowed by a great fish',
      'I tried to run away from God',
      'I preached to the city of Nineveh'
    ],
    reference: 'Jonah 1-4',
    difficulty: 'easy',
    category: 'prophets',
    funFact: 'I was angry when God showed mercy to Nineveh',
    keyVerse: 'Jonah 1:17'
  },
  {
    id: 'c58',
    name: 'Hosea',
    clues: [
      'I married a prostitute named Gomer',
      'My marriage was a symbol of God\'s relationship with Israel',
      'I prophesied to the northern kingdom'
    ],
    reference: 'Hosea 1-14',
    difficulty: 'hard',
    category: 'prophets',
    funFact: 'I even had to buy my wife back from slavery',
    keyVerse: 'Hosea 1:2'
  },
  {
    id: 'c59',
    name: 'Joel',
    clues: [
      'I prophesied about the day of the Lord',
      'I spoke of God pouring out his Spirit on all people',
      'I used the imagery of a locust plague'
    ],
    reference: 'Joel 1-3',
    difficulty: 'hard',
    category: 'prophets',
    funFact: 'My prophecy about the Spirit was quoted at Pentecost',
    keyVerse: 'Joel 2:28'
  },
  {
    id: 'c60',
    name: 'Amos',
    clues: [
      'I was a shepherd and fig farmer',
      'I was not a prophet by training',
      'I prophesied about justice and righteousness'
    ],
    reference: 'Amos 1-9',
    difficulty: 'hard',
    category: 'prophets',
    funFact: 'I was from Tekoa, a small village',
    keyVerse: 'Amos 7:14-15'
  },
  {
    id: 'c61',
    name: 'Obadiah',
    clues: [
      'I wrote the shortest book in the Old Testament',
      'I prophesied judgment against Edom',
      'I spoke of the day of the Lord'
    ],
    reference: 'Obadiah 1',
    difficulty: 'expert',
    category: 'prophets',
    funFact: 'My book has only 21 verses',
    keyVerse: 'Obadiah 1:15'
  },
  {
    id: 'c62',
    name: 'Micah',
    clues: [
      'I prophesied the birthplace of the Messiah',
      'I asked "What does the Lord require of you?"',
      'I was a contemporary of Isaiah'
    ],
    reference: 'Micah 1-7',
    difficulty: 'hard',
    category: 'prophets',
    funFact: 'My prophecy about Bethlehem is one of the most famous',
    keyVerse: 'Micah 5:2'
  },
  {
    id: 'c63',
    name: 'Nahum',
    clues: [
      'I prophesied the destruction of Nineveh',
      'I wrote about God\'s wrath and goodness',
      'My name means "comfort"'
    ],
    reference: 'Nahum 1-3',
    difficulty: 'expert',
    category: 'prophets',
    funFact: 'I was an Elkoshite from Elkosh',
    keyVerse: 'Nahum 1:7'
  },
  {
    id: 'c64',
    name: 'Habakkuk',
    clues: [
      'I questioned God about why evil was allowed',
      'I was told "the righteous shall live by faith"',
      'I waited for God\'s answer on the watchtower'
    ],
    reference: 'Habakkuk 1-3',
    difficulty: 'expert',
    category: 'prophets',
    funFact: 'My prayer is written as a song',
    keyVerse: 'Habakkuk 2:4'
  },
  {
    id: 'c65',
    name: 'Zephaniah',
    clues: [
      'I prophesied the day of the Lord is near',
      'I spoke of God\'s judgment and restoration',
      'I warned about the pride of nations'
    ],
    reference: 'Zephaniah 1-3',
    difficulty: 'expert',
    category: 'prophets',
    funFact: 'I was a descendant of Hezekiah',
    keyVerse: 'Zephaniah 1:14'
  },
  {
    id: 'c66',
    name: 'Haggai',
    clues: [
      'I encouraged the people to rebuild the temple',
      'I prophesied during the time of Zerubbabel',
      'My messages were about priorities'
    ],
    reference: 'Haggai 1-2',
    difficulty: 'expert',
    category: 'prophets',
    funFact: 'I was one of the post-exilic prophets',
    keyVerse: 'Haggai 1:8'
  },
  {
    id: 'c67',
    name: 'Zechariah',
    clues: [
      'I had visions of a golden lampstand',
      'I prophesied about the coming king on a donkey',
      'I was a priest and prophet'
    ],
    reference: 'Zechariah 1-14',
    difficulty: 'expert',
    category: 'prophets',
    funFact: 'My book is the most Messianic prophecy book after Isaiah',
    keyVerse: 'Zechariah 9:9'
  },
  {
    id: 'c68',
    name: 'Malachi',
    clues: [
      'I was the last prophet of the Old Testament',
      'I spoke about tithing and robbing God',
      'I prophesied about the coming of Elijah'
    ],
    reference: 'Malachi 1-4',
    difficulty: 'hard',
    category: 'prophets',
    funFact: 'My name means "my messenger"',
    keyVerse: 'Malachi 3:10'
  },
  {
    id: 'c69',
    name: 'John the Baptist',
    clues: [
      'I wore camel\'s hair and ate locusts and wild honey',
      'I baptized Jesus in the Jordan River',
      'I prepared the way for the Lord'
    ],
    reference: 'Matthew 3, Mark 1, Luke 3',
    difficulty: 'medium',
    category: 'prophets',
    funFact: 'I was the forerunner of the Messiah',
    keyVerse: 'Matthew 3:3'
  },
  {
    id: 'c70',
    name: 'Zechariah (Father of John)',
    clues: [
      'I was a priest in the temple',
      'I was struck mute for not believing the angel',
      'My son was John the Baptist'
    ],
    reference: 'Luke 1:5-25, 57-80',
    difficulty: 'hard',
    category: 'new-testament',
    funFact: 'I wrote my son\'s name on a tablet',
    keyVerse: 'Luke 1:13'
  },
  {
    id: 'c71',
    name: 'Elijah (Appeared at Transfiguration)',
    clues: [
      'I appeared with Moses at Jesus\' transfiguration',
      'I was taken to heaven in a whirlwind',
      'I was a prophet of fire and power'
    ],
    reference: 'Matthew 17:1-8, Mark 9:2-8, 2 Kings 2',
    difficulty: 'hard',
    category: 'prophets',
    funFact: 'I appeared with Moses at the transfiguration',
    keyVerse: 'Matthew 17:3'
  },
  {
    id: 'c72',
    name: 'Moses (Appeared at Transfiguration)',
    clues: [
      'I appeared with Elijah at Jesus\' transfiguration',
      'I led Israel out of Egypt',
      'I received the Law on Mount Sinai'
    ],
    reference: 'Matthew 17:1-8, Exodus 1-20',
    difficulty: 'hard',
    category: 'old-testament',
    funFact: 'I appeared with Elijah at Jesus\' transfiguration',
    keyVerse: 'Matthew 17:3'
  },
  {
    id: 'c73',
    name: 'Balaam',
    clues: [
      'My donkey spoke to me',
      'I blessed Israel instead of cursing them',
      'I was a prophet hired by Balak'
    ],
    reference: 'Numbers 22-24',
    difficulty: 'hard',
    category: 'prophets',
    funFact: 'My donkey saved my life',
    keyVerse: 'Numbers 22:28'
  },
  {
    id: 'c74',
    name: 'Samuel',
    clues: [
      'I was dedicated to God by my mother Hannah',
      'I was the last judge and first prophet',
      'I anointed Saul and David as kings'
    ],
    reference: '1 Samuel 1-16',
    difficulty: 'medium',
    category: 'prophets',
    funFact: 'I heard God\'s voice as a boy',
    keyVerse: '1 Samuel 3:10'
  },
  {
    id: 'c75',
    name: 'Nathan',
    clues: [
      'I was a prophet in David\'s court',
      'I confronted David about his sin with Bathsheba',
      'I told David about the coming Messiah'
    ],
    reference: '2 Samuel 7, 12',
    difficulty: 'hard',
    category: 'prophets',
    funFact: 'I told David a parable about a rich man and a poor man',
    keyVerse: '2 Samuel 12:7'
  },

  // ================================================================
  // SECTION 5: JUDGES (15 characters)
  // ================================================================
  {
    id: 'c76',
    name: 'Samson',
    clues: [
      'I had superhuman strength',
      'My strength came from my hair',
      'I was betrayed by Delilah'
    ],
    reference: 'Judges 13-16',
    difficulty: 'easy',
    category: 'judges',
    funFact: 'I killed more Philistines in my death than in my life',
    keyVerse: 'Judges 16:30'
  },
  {
    id: 'c77',
    name: 'Deborah',
    clues: [
      'I was the only female judge of Israel',
      'I gave Barak instructions to defeat the Canaanites',
      'I sang a victory song after the battle'
    ],
    reference: 'Judges 4-5',
    difficulty: 'hard',
    category: 'judges',
    funFact: 'I was also a prophetess',
    keyVerse: 'Judges 4:4-5'
  },
  {
    id: 'c78',
    name: 'Gideon',
    clues: [
      'I defeated the Midianites with 300 men',
      'I put out a fleece to test God',
      'I was called a "mighty warrior" even though I was afraid'
    ],
    reference: 'Judges 6-8',
    difficulty: 'medium',
    category: 'judges',
    funFact: 'I broke the jars to reveal the torches inside',
    keyVerse: 'Judges 7:20-22'
  },
  {
    id: 'c79',
    name: 'Jephthah',
    clues: [
      'I was a judge of Israel',
      'I made a foolish vow that cost my daughter',
      'I defeated the Ammonites'
    ],
    reference: 'Judges 11-12',
    difficulty: 'hard',
    category: 'judges',
    funFact: 'I was rejected by my family and became an outcast',
    keyVerse: 'Judges 11:30-31'
  },
  {
    id: 'c80',
    name: 'Tola',
    clues: [
      'I judged Israel for 23 years',
      'I was from the tribe of Issachar',
      'I lived in Shamir'
    ],
    reference: 'Judges 10:1-2',
    difficulty: 'expert',
    category: 'judges',
    funFact: 'I was one of the lesser-known judges',
    keyVerse: 'Judges 10:1-2'
  },
  {
    id: 'c81',
    name: 'Jair',
    clues: [
      'I was a judge of Israel',
      'I had 30 sons who rode 30 donkeys',
      'I judged Israel for 22 years'
    ],
    reference: 'Judges 10:3-5',
    difficulty: 'expert',
    category: 'judges',
    funFact: 'My sons had 30 towns in Gilead',
    keyVerse: 'Judges 10:4'
  },
  {
    id: 'c82',
    name: 'Elon',
    clues: [
      'I was a judge of Israel',
      'I was from the tribe of Zebulun',
      'I judged Israel for 10 years'
    ],
    reference: 'Judges 12:11-12',
    difficulty: 'expert',
    category: 'judges',
    funFact: 'I was buried in Aijalon in Zebulun',
    keyVerse: 'Judges 12:11-12'
  },
  {
    id: 'c83',
    name: 'Abdon',
    clues: [
      'I was a judge of Israel',
      'I had 40 sons and 30 grandsons',
      'I judged Israel for 8 years'
    ],
    reference: 'Judges 12:13-15',
    difficulty: 'expert',
    category: 'judges',
    funFact: 'My sons and grandsons rode 70 donkeys',
    keyVerse: 'Judges 12:14'
  },
  {
    id: 'c84',
    name: 'Othniel',
    clues: [
      'I was the first judge of Israel',
      'I was Caleb\'s younger brother',
      'I delivered Israel from the king of Mesopotamia'
    ],
    reference: 'Judges 3:7-11',
    difficulty: 'hard',
    category: 'judges',
    funFact: 'I married Caleb\'s daughter Achsah',
    keyVerse: 'Judges 3:10'
  },
  {
    id: 'c85',
    name: 'Ehud',
    clues: [
      'I was a left-handed judge',
      'I assassinated the king of Moab',
      'I delivered Israel from Moab\'s oppression'
    ],
    reference: 'Judges 3:12-30',
    difficulty: 'hard',
    category: 'judges',
    funFact: 'I made a double-edged sword and hid it on my thigh',
    keyVerse: 'Judges 3:21-22'
  },
  {
    id: 'c86',
    name: 'Shamgar',
    clues: [
      'I was a judge of Israel',
      'I killed 600 Philistines with an oxgoad',
      'I delivered Israel from the Philistines'
    ],
    reference: 'Judges 3:31',
    difficulty: 'expert',
    category: 'judges',
    funFact: 'I used an oxgoad as a weapon',
    keyVerse: 'Judges 3:31'
  },
  {
    id: 'c87',
    name: 'Barak',
    clues: [
      'I was a military commander in Israel',
      'I fought alongside Deborah',
      'I defeated the Canaanite army'
    ],
    reference: 'Judges 4-5',
    difficulty: 'medium',
    category: 'judges',
    funFact: 'I refused to go into battle without Deborah',
    keyVerse: 'Judges 4:8'
  },
  {
    id: 'c88',
    name: 'Gideon\'s Son - Abimelech',
    clues: [
      'I was the son of Gideon',
      'I killed my 70 brothers to become king',
      'I was killed by a woman who dropped a millstone on me'
    ],
    reference: 'Judges 9',
    difficulty: 'expert',
    category: 'judges',
    funFact: 'I was the first and only king to rule in Shechem',
    keyVerse: 'Judges 9:53'
  },
  {
    id: 'c89',
    name: 'Jephthah\'s Daughter',
    clues: [
      'I was the daughter of a judge',
      'My father made a vow that cost me my life',
      'I mourned my virginity in the mountains'
    ],
    reference: 'Judges 11:34-40',
    difficulty: 'expert',
    category: 'women',
    funFact: 'My story is one of the saddest in the Bible',
    keyVerse: 'Judges 11:37'
  },
  {
    id: 'c90',
    name: 'Deborah\'s Commander - Barak',
    clues: [
      'I was a military commander in Israel',
      'I fought alongside Deborah',
      'I defeated the Canaanite army'
    ],
    reference: 'Judges 4-5',
    difficulty: 'medium',
    category: 'judges',
    funFact: 'I refused to go into battle without Deborah',
    keyVerse: 'Judges 4:8'
  },

  // ================================================================
  // SECTION 6: WOMEN (25 characters)
  // ================================================================
  {
    id: 'c91',
    name: 'Eve',
    clues: [
      'I was the first woman',
      'I was created from Adam\'s rib',
      'I ate the forbidden fruit'
    ],
    reference: 'Genesis 2-3',
    difficulty: 'easy',
    category: 'women',
    funFact: 'I was the mother of all living',
    keyVerse: 'Genesis 3:20'
  },
  {
    id: 'c92',
    name: 'Sarah',
    clues: [
      'I was Abraham\'s wife',
      'I laughed when told I would have a child at age 90',
      'I gave birth to Isaac'
    ],
    reference: 'Genesis 11-23',
    difficulty: 'easy',
    category: 'women',
    funFact: 'My name was changed from Sarai to Sarah',
    keyVerse: 'Genesis 21:6'
  },
  {
    id: 'c93',
    name: 'Hagar',
    clues: [
      'I was Sarah\'s Egyptian servant',
      'I gave birth to Ishmael, Abraham\'s first son',
      'I was sent away into the wilderness'
    ],
    reference: 'Genesis 16, 21',
    difficulty: 'medium',
    category: 'women',
    funFact: 'I was the first person to give God a name',
    keyVerse: 'Genesis 16:13'
  },
  {
    id: 'c94',
    name: 'Rebekah',
    clues: [
      'I was Isaac\'s wife',
      'I helped Jacob steal Esau\'s blessing',
      'I was the mother of twins'
    ],
    reference: 'Genesis 24-27',
    difficulty: 'easy',
    category: 'women',
    funFact: 'I was the first woman in the Bible to ask God a question',
    keyVerse: 'Genesis 25:23'
  },
  {
    id: 'c95',
    name: 'Rachel',
    clues: [
      'I was Jacob\'s beloved wife',
      'I stole my father\'s household idols',
      'I died giving birth to Benjamin'
    ],
    reference: 'Genesis 29-35',
    difficulty: 'medium',
    category: 'women',
    funFact: 'I was the mother of Joseph and Benjamin',
    keyVerse: 'Genesis 29:18'
  },
  {
    id: 'c96',
    name: 'Leah',
    clues: [
      'I was Jacob\'s first wife',
      'I was known for my tender eyes',
      'I gave birth to six of Jacob\'s sons'
    ],
    reference: 'Genesis 29-35',
    difficulty: 'medium',
    category: 'women',
    funFact: 'I was the mother of Judah, ancestor of Jesus',
    keyVerse: 'Genesis 29:17'
  },
  {
    id: 'c97',
    name: 'Ruth',
    clues: [
      'I stayed with my mother-in-law Naomi',
      'I gleaned in the fields of Boaz',
      'I became the great-grandmother of King David'
    ],
    reference: 'Ruth 1-4',
    difficulty: 'easy',
    category: 'women',
    funFact: 'I was a Moabite who became a Jew',
    keyVerse: 'Ruth 1:16'
  },
  {
    id: 'c98',
    name: 'Naomi',
    clues: [
      'I was Ruth\'s mother-in-law',
      'I changed my name to "Mara" because of my suffering',
      'I helped Ruth find a husband'
    ],
    reference: 'Ruth 1-4',
    difficulty: 'medium',
    category: 'women',
    funFact: 'My name means "pleasant"',
    keyVerse: 'Ruth 1:20'
  },
  {
    id: 'c99',
    name: 'Esther',
    clues: [
      'I became queen of Persia',
      'I risked my life to save my people from genocide',
      'I said "If I perish, I perish"'
    ],
    reference: 'Esther 1-10',
    difficulty: 'easy',
    category: 'women',
    funFact: 'The book of Esther never mentions God, but He\'s everywhere',
    keyVerse: 'Esther 4:16'
  },
  {
    id: 'c100',
    name: 'Mordecai',
    clues: [
      'I was Esther\'s cousin and adopted father',
      'I exposed a plot to kill the king',
      'I was honored by the king and saved my people'
    ],
    reference: 'Esther 2-10',
    difficulty: 'medium',
    category: 'old-testament',
    funFact: 'I was a Jew living in Persia',
    keyVerse: 'Esther 4:14'
  },
  {
    id: 'c101',
    name: 'Hannah',
    clues: [
      'I prayed for a son and promised to give him to God',
      'I gave birth to Samuel',
      'I sang a song of praise when my prayer was answered'
    ],
    reference: '1 Samuel 1-2',
    difficulty: 'medium',
    category: 'women',
    funFact: 'My prayer is one of the most powerful in the Bible',
    keyVerse: '1 Samuel 1:27'
  },
  {
    id: 'c102',
    name: 'Abigail',
    clues: [
      'I was the wife of the foolish Nabal',
      'I prevented David from taking revenge',
      'I became David\'s wife after Nabal died'
    ],
    reference: '1 Samuel 25',
    difficulty: 'medium',
    category: 'women',
    funFact: 'I was considered both beautiful and wise',
    keyVerse: '1 Samuel 25:33'
  },
  {
    id: 'c103',
    name: 'Bathsheba',
    clues: [
      'I was the wife of Uriah',
      'I was seen bathing by King David',
      'I became the mother of Solomon'
    ],
    reference: '2 Samuel 11-12, 1 Kings 1-2',
    difficulty: 'medium',
    category: 'women',
    funFact: 'I went through great tragedy and became a queen',
    keyVerse: '2 Samuel 11:2-3'
  },
  {
    id: 'c104',
    name: 'The Widow of Zarephath',
    clues: [
      'I shared my last meal with Elijah',
      'My flour and oil never ran out',
      'My son was raised from the dead'
    ],
    reference: '1 Kings 17',
    difficulty: 'hard',
    category: 'women',
    funFact: 'I was a Gentile who showed great faith',
    keyVerse: '1 Kings 17:15-16'
  },
  {
    id: 'c105',
    name: 'The Shunammite Woman',
    clues: [
      'I provided hospitality to Elisha',
      'I was promised a son even though I was barren',
      'My son was raised from the dead'
    ],
    reference: '2 Kings 4:8-37',
    difficulty: 'hard',
    category: 'women',
    funFact: 'I built a room for Elisha to stay',
    keyVerse: '2 Kings 4:10'
  },
  {
    id: 'c106',
    name: 'Naaman\'s Servant Girl',
    clues: [
      'I was a young servant in Naaman\'s house',
      'I told my mistress about the prophet Elisha',
      'I pointed the way for Naaman\'s healing'
    ],
    reference: '2 Kings 5:2-4',
    difficulty: 'hard',
    category: 'women',
    funFact: 'I was a young Israelite girl taken captive',
    keyVerse: '2 Kings 5:3'
  },
  {
    id: 'c107',
    name: 'Mary (Mother of Jesus)',
    clues: [
      'I was visited by an angel named Gabriel',
      'I gave birth to Jesus in Bethlehem',
      'I was told I would be blessed among women'
    ],
    reference: 'Luke 1-2',
    difficulty: 'easy',
    category: 'women',
    funFact: 'I was a young virgin when I conceived Jesus',
    keyVerse: 'Luke 1:38'
  },
  {
    id: 'c108',
    name: 'Elizabeth',
    clues: [
      'I was the mother of John the Baptist',
      'I was barren but gave birth in my old age',
      'I was a relative of Mary'
    ],
    reference: 'Luke 1:5-25, 39-80',
    difficulty: 'easy',
    category: 'women',
    funFact: 'My baby leaped in my womb when Mary greeted me',
    keyVerse: 'Luke 1:41'
  },
  {
    id: 'c109',
    name: 'Mary Magdalene',
    clues: [
      'I was a follower of Jesus',
      'I was healed of seven demons',
      'I was the first to see the risen Jesus'
    ],
    reference: 'Luke 8:2, John 20',
    difficulty: 'medium',
    category: 'women',
    funFact: 'I was a close friend and follower of Jesus',
    keyVerse: 'John 20:16'
  },
  {
    id: 'c110',
    name: 'Martha',
    clues: [
      'I was the sister of Mary and Lazarus',
      'I was busy serving while my sister sat at Jesus\' feet',
      'I confessed that Jesus was the Christ'
    ],
    reference: 'Luke 10:38-42, John 11',
    difficulty: 'medium',
    category: 'women',
    funFact: 'Jesus said I was distracted by much serving',
    keyVerse: 'Luke 10:41-42'
  },
  {
    id: 'c111',
    name: 'Mary of Bethany',
    clues: [
      'I sat at Jesus\' feet and listened to his teaching',
      'I anointed Jesus with expensive perfume',
      'I was the sister of Lazarus'
    ],
    reference: 'Luke 10, John 11-12',
    difficulty: 'medium',
    category: 'women',
    funFact: 'I chose the "better part" that Jesus spoke of',
    keyVerse: 'John 12:3'
  },
  {
    id: 'c112',
    name: 'Lydia',
    clues: [
      'I was a seller of purple cloth from Thyatira',
      'I was the first European convert to Christianity',
      'I opened my home to Paul and his companions'
    ],
    reference: 'Acts 16:14-15, 40',
    difficulty: 'hard',
    category: 'women',
    funFact: 'I was a businesswoman, selling expensive purple cloth',
    keyVerse: 'Acts 16:14'
  },
  {
    id: 'c113',
    name: 'Priscilla',
    clues: [
      'I was a teacher of the faith alongside my husband',
      'I corrected Apollos\' understanding of the gospel',
      'I risked my life for Paul'
    ],
    reference: 'Acts 18, Romans 16',
    difficulty: 'hard',
    category: 'women',
    funFact: 'My name always appears with my husband Aquila',
    keyVerse: 'Acts 18:26'
  },
  {
    id: 'c114',
    name: 'Tabitha (Dorcas)',
    clues: [
      'I was known for my good works and charity',
      'I made clothing for the widows',
      'I was raised from the dead by Peter'
    ],
    reference: 'Acts 9:36-42',
    difficulty: 'hard',
    category: 'women',
    funFact: 'My name means "gazelle" in Aramaic and Greek',
    keyVerse: 'Acts 9:36'
  },
  {
    id: 'c115',
    name: 'The Woman at the Well (Samaritan Woman)',
    clues: [
      'I met Jesus at a well in Samaria',
      'I had five husbands',
      'I brought many people to believe in Jesus'
    ],
    reference: 'John 4:1-42',
    difficulty: 'hard',
    category: 'women',
    funFact: 'I was the first person Jesus revealed himself to as the Messiah',
    keyVerse: 'John 4:29'
  },

  // ================================================================
  // SECTION 7: APOSTLES & DISCIPLES (20 characters)
  // ================================================================
  {
    id: 'c116',
    name: 'Peter',
    clues: [
      'I was a fisherman before following Jesus',
      'I walked on water briefly',
      'I denied Jesus three times'
    ],
    reference: 'Matthew 4, 14, 26',
    difficulty: 'easy',
    category: 'apostles',
    funFact: 'My name was changed from Simon to Peter',
    keyVerse: 'Matthew 16:18'
  },
  {
    id: 'c117',
    name: 'Paul (Saul)',
    clues: [
      'I was once called Saul',
      'I was blinded on the road to Damascus',
      'I wrote most of the New Testament letters'
    ],
    reference: 'Acts 9, 13-28, Epistles',
    difficulty: 'easy',
    category: 'apostles',
    funFact: 'I was a Pharisee who persecuted Christians',
    keyVerse: 'Acts 9:15'
  },
  {
    id: 'c118',
    name: 'James (Son of Zebedee)',
    clues: [
      'I was the brother of John',
      'I was one of the "sons of thunder"',
      'I was the first apostle to be martyred'
    ],
    reference: 'Matthew 4:21, Acts 12:1-2',
    difficulty: 'medium',
    category: 'apostles',
    funFact: 'I was killed by Herod Agrippa',
    keyVerse: 'Acts 12:2'
  },
  {
    id: 'c119',
    name: 'John (Son of Zebedee)',
    clues: [
      'I was the brother of James',
      'I was called the "beloved disciple"',
      'I wrote the Gospel of John and Revelation'
    ],
    reference: 'John 13:23, 19:26, Revelation',
    difficulty: 'medium',
    category: 'apostles',
    funFact: 'I was the only apostle not martyred',
    keyVerse: 'John 13:23'
  },
  {
    id: 'c120',
    name: 'Thomas',
    clues: [
      'I was known as the doubter',
      'I refused to believe Jesus rose until I saw Him',
      'I finally believed when I touched His wounds'
    ],
    reference: 'John 20:24-29',
    difficulty: 'medium',
    category: 'apostles',
    funFact: 'I said "My Lord and my God!"',
    keyVerse: 'John 20:28'
  },
  {
    id: 'c121',
    name: 'Matthew (Levi)',
    clues: [
      'I was a tax collector before following Jesus',
      'I wrote the first Gospel',
      'I had a feast to introduce Jesus to my friends'
    ],
    reference: 'Matthew 9:9, 28:19-20',
    difficulty: 'medium',
    category: 'apostles',
    funFact: 'I was a hated tax collector before becoming a disciple',
    keyVerse: 'Matthew 9:9'
  },
  {
    id: 'c122',
    name: 'Andrew',
    clues: [
      'I was the brother of Peter',
      'I was the first disciple called by Jesus',
      'I brought the boy with the loaves and fish to Jesus'
    ],
    reference: 'John 1:40-42, 6:8-9',
    difficulty: 'medium',
    category: 'apostles',
    funFact: 'I was a disciple of John the Baptist first',
    keyVerse: 'John 1:40-41'
  },
  {
    id: 'c123',
    name: 'Philip',
    clues: [
      'I brought Nathanael to Jesus',
      'I asked Jesus to show us the Father',
      'I was from Bethsaida'
    ],
    reference: 'John 1:43-46, 6:5-7, 14:8',
    difficulty: 'medium',
    category: 'apostles',
    funFact: 'I was one of the first disciples called',
    keyVerse: 'John 1:46'
  },
  {
    id: 'c124',
    name: 'Nathanael (Bartholomew)',
    clues: [
      'I said "Can anything good come from Nazareth?"',
      'Jesus saw me under the fig tree',
      'I was called a "true Israelite" by Jesus'
    ],
    reference: 'John 1:45-51',
    difficulty: 'hard',
    category: 'apostles',
    funFact: 'I was also known as Bartholomew',
    keyVerse: 'John 1:47'
  },
  {
    id: 'c125',
    name: 'James (Son of Alphaeus)',
    clues: [
      'I was one of the lesser-known apostles',
      'I was called "James the Less"',
      'I was the son of Alphaeus'
    ],
    reference: 'Matthew 10:3, Mark 3:18',
    difficulty: 'hard',
    category: 'apostles',
    funFact: 'I am often confused with James the brother of John',
    keyVerse: 'Mark 3:18'
  },
  {
    id: 'c126',
    name: 'Thaddaeus (Judas son of James)',
    clues: [
      'I was one of the lesser-known apostles',
      'I asked Jesus why he would show himself to us and not the world',
      'I am also called Lebbaeus'
    ],
    reference: 'Matthew 10:3, Mark 3:18, John 14:22',
    difficulty: 'hard',
    category: 'apostles',
    funFact: 'I am the only apostle who asked about the revelation',
    keyVerse: 'John 14:22'
  },
  {
    id: 'c127',
    name: 'Simon the Zealot',
    clues: [
      'I was a Zealot before following Jesus',
      'I was called the "Zealot" to distinguish me from Simon Peter',
      'I was part of a political party before being a disciple'
    ],
    reference: 'Matthew 10:4, Luke 6:15',
    difficulty: 'hard',
    category: 'apostles',
    funFact: 'I was a member of the Zealot party',
    keyVerse: 'Luke 6:15'
  },
  {
    id: 'c128',
    name: 'Judas Iscariot',
    clues: [
      'I betrayed Jesus with a kiss',
      'I was the treasurer of the disciples',
      'I hanged myself after the betrayal'
    ],
    reference: 'Matthew 26:14-16, 27:3-5',
    difficulty: 'easy',
    category: 'apostles',
    funFact: 'I was replaced by Matthias after my death',
    keyVerse: 'Matthew 26:48-49'
  },
  {
    id: 'c129',
    name: 'Matthias',
    clues: [
      'I was chosen to replace Judas',
      'I was a witness of Jesus\' resurrection',
      'I was chosen by lot'
    ],
    reference: 'Acts 1:15-26',
    difficulty: 'expert',
    category: 'apostles',
    funFact: 'I was one of the two candidates to replace Judas',
    keyVerse: 'Acts 1:26'
  },
  {
    id: 'c130',
    name: 'Barnabas',
    clues: [
      'I was called the "son of encouragement"',
      'I introduced Paul to the other apostles',
      'I was a companion of Paul on missionary journeys'
    ],
    reference: 'Acts 4:36-37, 9:26-27, 13:1-4',
    difficulty: 'medium',
    category: 'early-church',
    funFact: 'I sold a field and gave the money to the church',
    keyVerse: 'Acts 4:36-37'
  },
  {
    id: 'c131',
    name: 'Silas',
    clues: [
      'I was a companion of Paul',
      'I was imprisoned with Paul in Philippi',
      'I sang hymns with Paul in prison'
    ],
    reference: 'Acts 15:22, 16:19-40',
    difficulty: 'hard',
    category: 'early-church',
    funFact: 'I was a Roman citizen like Paul',
    keyVerse: 'Acts 16:25'
  },
  {
    id: 'c132',
    name: 'Timothy',
    clues: [
      'I was a young disciple of Paul',
      'I was circumcised by Paul for the sake of the gospel',
      'I became a leader in the church'
    ],
    reference: 'Acts 16:1-3, 1 Timothy, 2 Timothy',
    difficulty: 'medium',
    category: 'early-church',
    funFact: 'My mother was Jewish and my father was Greek',
    keyVerse: '1 Timothy 4:12'
  },
  {
    id: 'c133',
    name: 'Titus',
    clues: [
      'I was a Greek convert and companion of Paul',
      'I was left in Crete to appoint elders',
      'I was the recipient of a letter from Paul'
    ],
    reference: '2 Corinthians 8:16-24, Titus 1:4-5',
    difficulty: 'hard',
    category: 'early-church',
    funFact: 'I was known for my love and zeal',
    keyVerse: 'Titus 1:4-5'
  },
  {
    id: 'c134',
    name: 'Stephen',
    clues: [
      'I was the first Christian martyr',
      'I was stoned for my faith',
      'I saw heaven open and Jesus standing at the right hand of God'
    ],
    reference: 'Acts 6-7',
    difficulty: 'medium',
    category: 'early-church',
    funFact: 'I was one of the first seven deacons',
    keyVerse: 'Acts 7:55-56'
  },
  {
    id: 'c135',
    name: 'Ananias (of Damascus)',
    clues: [
      'I was sent by God to heal Saul\'s blindness',
      'I was afraid of Saul because of his reputation',
      'I called Saul "brother" and baptized him'
    ],
    reference: 'Acts 9:10-19',
    difficulty: 'hard',
    category: 'early-church',
    funFact: 'I was a disciple in Damascus',
    keyVerse: 'Acts 9:17'
  },

  // ================================================================
  // SECTION 8: ANGELS & HEAVENLY BEINGS (10 characters)
  // ================================================================
  {
    id: 'c136',
    name: 'Michael the Archangel',
    clues: [
      'I am the archangel who leads God\'s armies',
      'I fought against the prince of Persia',
      'I will arise in the end times'
    ],
    reference: 'Daniel 10:13, 12:1, Jude 1:9, Revelation 12:7',
    difficulty: 'hard',
    category: 'angels',
    funFact: 'I am one of only two angels named in the Bible',
    keyVerse: 'Revelation 12:7'
  },
  {
    id: 'c137',
    name: 'Gabriel',
    clues: [
      'I announced the birth of John the Baptist',
      'I announced the birth of Jesus to Mary',
      'I gave Daniel visions and understanding'
    ],
    reference: 'Daniel 8:16, 9:21, Luke 1:19, 1:26',
    difficulty: 'medium',
    category: 'angels',
    funFact: 'I am one of only two angels named in the Bible',
    keyVerse: 'Luke 1:19'
  },
  {
    id: 'c138',
    name: 'Lucifer (Satan)',
    clues: [
      'I fell from heaven because of my pride',
      'I am called the "morning star"',
      'I said "I will ascend to heaven, I will be like the Most High"'
    ],
    reference: 'Isaiah 14:12-15, Ezekiel 28:12-19',
    difficulty: 'hard',
    category: 'angels',
    funFact: 'My name means "light-bringer"',
    keyVerse: 'Isaiah 14:12-14'
  },
  {
    id: 'c139',
    name: 'The Angel of the Lord',
    clues: [
      'I appeared to Moses in a burning bush',
      'I appeared to Gideon under an oak tree',
      'I appeared to Mary and Joseph in dreams'
    ],
    reference: 'Exodus 3:2, Judges 6:11-24, Matthew 1:20, 2:13',
    difficulty: 'hard',
    category: 'angels',
    funFact: 'Many believe I was a pre-incarnate appearance of Jesus',
    keyVerse: 'Exodus 3:2'
  },
  {
    id: 'c140',
    name: 'The Seraphim',
    clues: [
      'We are the angels who stand around God\'s throne',
      'We have six wings',
      'We cry "Holy, holy, holy is the Lord Almighty"'
    ],
    reference: 'Isaiah 6:1-7',
    difficulty: 'expert',
    category: 'angels',
    funFact: 'Our name means "burning ones"',
    keyVerse: 'Isaiah 6:3'
  },
  {
    id: 'c141',
    name: 'The Cherubim',
    clues: [
      'We guard the way to the Tree of Life',
      'We were placed above the mercy seat on the Ark',
      'We are described as having wings and many faces'
    ],
    reference: 'Genesis 3:24, Exodus 25:18-22, Ezekiel 1, 10',
    difficulty: 'expert',
    category: 'angels',
    funFact: 'We are often associated with the presence of God',
    keyVerse: 'Genesis 3:24'
  },
  {
    id: 'c142',
    name: 'The Living Creatures',
    clues: [
      'We have faces like a lion, ox, eagle, and man',
      'We are covered with eyes all around',
      'We worship God day and night'
    ],
    reference: 'Revelation 4:6-9, Ezekiel 1:5-14',
    difficulty: 'expert',
    category: 'angels',
    funFact: 'We never stop saying "Holy, holy, holy"',
    keyVerse: 'Revelation 4:8'
  },
  {
    id: 'c143',
    name: 'The Angel of the Lord (to Hagar)',
    clues: [
      'I appeared to Hagar in the wilderness',
      'I told her to return to Sarah',
      'I promised her son Ishmael would become a great nation'
    ],
    reference: 'Genesis 16:7-12, 21:17-19',
    difficulty: 'hard',
    category: 'angels',
    funFact: 'Hagar gave God a name based on this encounter',
    keyVerse: 'Genesis 16:10-11'
  },
  {
    id: 'c144',
    name: 'The Angel (to Daniel)',
    clues: [
      'I appeared to Daniel in visions',
      'I explained the vision of the ram and the goat',
      'I told Daniel he was greatly loved'
    ],
    reference: 'Daniel 8:15-17, 9:21-23, 10:10-12',
    difficulty: 'expert',
    category: 'angels',
    funFact: 'I was delayed by the prince of Persia',
    keyVerse: 'Daniel 9:23'
  },
  {
    id: 'c145',
    name: 'The Angel (to Zechariah)',
    clues: [
      'I appeared to Zechariah in the temple',
      'I announced the birth of John the Baptist',
      'I struck Zechariah mute for his unbelief'
    ],
    reference: 'Luke 1:11-20',
    difficulty: 'hard',
    category: 'angels',
    funFact: 'I told Zechariah his prayer had been heard',
    keyVerse: 'Luke 1:13'
  },

  // ================================================================
  // SECTION 9: NEW TESTAMENT CHARACTERS (25 characters)
  // ================================================================
  {
    id: 'c146',
    name: 'Mary (Mother of Jesus)',
    clues: [
      'I was visited by an angel named Gabriel',
      'I gave birth to Jesus in Bethlehem',
      'I was told I would be blessed among women'
    ],
    reference: 'Luke 1-2',
    difficulty: 'easy',
    category: 'new-testament',
    funFact: 'I was a young virgin when I conceived Jesus',
    keyVerse: 'Luke 1:38'
  },
  {
    id: 'c147',
    name: 'Joseph (Earthly Father of Jesus)',
    clues: [
      'I was a carpenter from Nazareth',
      'I was engaged to Mary when she became pregnant',
      'I took Jesus and Mary to Egypt to escape Herod'
    ],
    reference: 'Matthew 1-2, Luke 2',
    difficulty: 'easy',
    category: 'new-testament',
    funFact: 'I was visited by an angel in a dream four times',
    keyVerse: 'Matthew 1:20-21'
  },
  {
    id: 'c148',
    name: 'Herod the Great',
    clues: [
      'I was the king who tried to kill baby Jesus',
      'I ordered the massacre of all male infants in Bethlehem',
      'I was a Roman-appointed king'
    ],
    reference: 'Matthew 2:1-18',
    difficulty: 'medium',
    category: 'new-testament',
    funFact: 'I died shortly after the massacre',
    keyVerse: 'Matthew 2:16'
  },
  {
    id: 'c149',
    name: 'The Wise Men (Magi)',
    clues: [
      'We followed a star to find Jesus',
      'We brought gifts of gold, frankincense, and myrrh',
      'We worshiped Jesus and gave him treasures'
    ],
    reference: 'Matthew 2:1-12',
    difficulty: 'medium',
    category: 'new-testament',
    funFact: 'There were probably three of us, but the Bible doesn\'t say',
    keyVerse: 'Matthew 2:11'
  },
  {
    id: 'c150',
    name: 'Simeon',
    clues: [
      'I was a devout and righteous man in Jerusalem',
      'I was promised I would see the Messiah before I died',
      'I held baby Jesus in my arms and praised God'
    ],
    reference: 'Luke 2:25-35',
    difficulty: 'hard',
    category: 'new-testament',
    funFact: 'I said Jesus would be a "light to the Gentiles"',
    keyVerse: 'Luke 2:29-32'
  },
  {
    id: 'c151',
    name: 'Anna',
    clues: [
      'I was a prophetess in the temple',
      'I was 84 years old',
      'I gave thanks to God and spoke about baby Jesus'
    ],
    reference: 'Luke 2:36-38',
    difficulty: 'hard',
    category: 'women',
    funFact: 'I lived in the temple, fasting and praying',
    keyVerse: 'Luke 2:38'
  },
  {
    id: 'c152',
    name: 'John the Baptist',
    clues: [
      'I wore camel\'s hair and ate locusts and wild honey',
      'I baptized Jesus in the Jordan River',
      'I prepared the way for the Lord'
    ],
    reference: 'Matthew 3, Mark 1, Luke 3',
    difficulty: 'easy',
    category: 'new-testament',
    funFact: 'I was the forerunner of the Messiah',
    keyVerse: 'Matthew 3:3'
  },
  {
    id: 'c153',
    name: 'Nicodemus',
    clues: [
      'I came to Jesus at night',
      'I said "Rabbi, we know you are a teacher from God"',
      'I helped bury Jesus with 75 pounds of spices'
    ],
    reference: 'John 3, 7:50-52, 19:39-42',
    difficulty: 'medium',
    category: 'new-testament',
    funFact: 'I was a member of the Sanhedrin',
    keyVerse: 'John 3:2'
  },
  {
    id: 'c154',
    name: 'The Samaritan Woman',
    clues: [
      'I met Jesus at a well in Samaria',
      'I had five husbands',
      'I brought many people to believe in Jesus'
    ],
    reference: 'John 4:1-42',
    difficulty: 'hard',
    category: 'women',
    funFact: 'I was the first person Jesus revealed himself to as the Messiah',
    keyVerse: 'John 4:29'
  },
  {
    id: 'c155',
    name: 'The Centurion (at the cross)',
    clues: [
      'I was a Roman officer at Jesus\' crucifixion',
      'I said "Surely this was the Son of God"',
      'I witnessed the earthquake and darkness at Jesus\' death'
    ],
    reference: 'Matthew 27:54, Mark 15:39',
    difficulty: 'hard',
    category: 'new-testament',
    funFact: 'I was the first Gentile to believe in Jesus',
    keyVerse: 'Matthew 27:54'
  },
  {
    id: 'c156',
    name: 'Joseph of Arimathea',
    clues: [
      'I was a wealthy member of the Sanhedrin',
      'I asked Pilate for Jesus\' body',
      'I placed Jesus in my own new tomb'
    ],
    reference: 'Matthew 27:57-60, Mark 15:43-46',
    difficulty: 'hard',
    category: 'new-testament',
    funFact: 'I was a secret disciple of Jesus',
    keyVerse: 'Matthew 27:59-60'
  },
  {
    id: 'c157',
    name: 'Lazarus',
    clues: [
      'I was raised from the dead after four days',
      'I was the brother of Mary and Martha',
      'Jesus wept at my tomb'
    ],
    reference: 'John 11:1-44, 12:1-2',
    difficulty: 'easy',
    category: 'new-testament',
    funFact: 'I was a living proof of Jesus\' power over death',
    keyVerse: 'John 11:43-44'
  },
  {
    id: 'c158',
    name: 'Zacchaeus',
    clues: [
      'I was a short tax collector',
      'I climbed a sycamore tree to see Jesus',
      'I promised to give half my possessions to the poor'
    ],
    reference: 'Luke 19:1-10',
    difficulty: 'medium',
    category: 'new-testament',
    funFact: 'I was despised as a tax collector but Jesus visited me',
    keyVerse: 'Luke 19:5'
  },
  {
    id: 'c159',
    name: 'The Blind Man (Bartimaeus)',
    clues: [
      'I was a blind beggar in Jericho',
      'I called out "Jesus, Son of David, have mercy on me"',
      'I received my sight because of my faith'
    ],
    reference: 'Mark 10:46-52, Luke 18:35-43',
    difficulty: 'hard',
    category: 'new-testament',
    funFact: 'My name means "son of Timaeus"',
    keyVerse: 'Mark 10:47'
  },
  {
    id: 'c160',
    name: 'The Woman with the Issue of Blood',
    clues: [
      'I suffered from bleeding for 12 years',
      'I touched the hem of Jesus\' garment',
      'I was healed immediately'
    ],
    reference: 'Matthew 9:20-22, Mark 5:25-34, Luke 8:43-48',
    difficulty: 'medium',
    category: 'women',
    funFact: 'I spent all my money on doctors but got worse',
    keyVerse: 'Mark 5:28'
  },
  {
    id: 'c161',
    name: 'Jairus',
    clues: [
      'I was a synagogue leader',
      'My daughter was dying',
      'I asked Jesus to heal my daughter'
    ],
    reference: 'Mark 5:21-43, Luke 8:40-56',
    difficulty: 'hard',
    category: 'new-testament',
    funFact: 'My daughter was raised from the dead by Jesus',
    keyVerse: 'Mark 5:23'
  },
  {
    id: 'c162',
    name: 'The Good Samaritan (Parable)',
    clues: [
      'I helped a man who was beaten and robbed',
      'I bound his wounds and took him to an inn',
      'I showed mercy when others passed by'
    ],
    reference: 'Luke 10:25-37',
    difficulty: 'easy',
    category: 'new-testament',
    funFact: 'I am the example of loving my neighbor',
    keyVerse: 'Luke 10:37'
  },
  {
    id: 'c163',
    name: 'The Prodigal Son (Parable)',
    clues: [
      'I asked my father for my inheritance early',
      'I wasted everything in a far country',
      'I returned home and my father welcomed me'
    ],
    reference: 'Luke 15:11-32',
    difficulty: 'easy',
    category: 'new-testament',
    funFact: 'I represent every sinner who returns to God',
    keyVerse: 'Luke 15:20'
  },
  {
    id: 'c164',
    name: 'The Rich Young Ruler',
    clues: [
      'I asked Jesus what I must do to inherit eternal life',
      'I kept all the commandments from my youth',
      'I walked away sad when Jesus told me to sell everything'
    ],
    reference: 'Matthew 19:16-22, Mark 10:17-22, Luke 18:18-23',
    difficulty: 'hard',
    category: 'new-testament',
    funFact: 'I loved my possessions more than God',
    keyVerse: 'Matthew 19:22'
  },
  {
    id: 'c165',
    name: 'The Syrophoenician Woman',
    clues: [
      'I was a Gentile from the region of Tyre and Sidon',
      'I asked Jesus to heal my demon-possessed daughter',
      'I said "Even the dogs eat the crumbs under the table"'
    ],
    reference: 'Matthew 15:21-28, Mark 7:24-30',
    difficulty: 'hard',
    category: 'women',
    funFact: 'My faith was commended by Jesus',
    keyVerse: 'Matthew 15:28'
  },
  {
    id: 'c166',
    name: 'The Leper who Returned',
    clues: [
      'I was one of ten lepers healed by Jesus',
      'I returned to thank Jesus',
      'I was a Samaritan'
    ],
    reference: 'Luke 17:11-19',
    difficulty: 'hard',
    category: 'new-testament',
    funFact: 'I was the only one who returned to give thanks',
    keyVerse: 'Luke 17:15-16'
  },
  {
    id: 'c167',
    name: 'The Centurion at Capernaum',
    clues: [
      'I was a Roman officer with a sick servant',
      'I said "I am not worthy for you to come under my roof"',
      'Jesus commended my faith as greater than any in Israel'
    ],
    reference: 'Matthew 8:5-13, Luke 7:1-10',
    difficulty: 'hard',
    category: 'new-testament',
    funFact: 'I understood authority because I was a soldier',
    keyVerse: 'Matthew 8:8'
  },
  {
    id: 'c168',
    name: 'The Woman Anointing Jesus',
    clues: [
      'I poured expensive perfume on Jesus\' feet',
      'I wiped his feet with my hair',
      'Jesus said I prepared him for burial'
    ],
    reference: 'Matthew 26:6-13, John 12:1-8',
    difficulty: 'hard',
    category: 'women',
    funFact: 'Some people criticized me for wasting the perfume',
    keyVerse: 'Mark 14:8'
  },
  {
    id: 'c169',
    name: 'The Man Born Blind',
    clues: [
      'I was blind from birth',
      'Jesus made mud with his spit and put it on my eyes',
      'I was healed and worshiped Jesus'
    ],
    reference: 'John 9:1-41',
    difficulty: 'hard',
    category: 'new-testament',
    funFact: 'I was interrogated by the Pharisees about my healing',
    keyVerse: 'John 9:25'
  },
  {
    id: 'c170',
    name: 'The Father of the Epileptic Boy',
    clues: [
      'I brought my demon-possessed son to Jesus',
      'I said "I believe; help my unbelief!"',
      'Jesus healed my son'
    ],
    reference: 'Mark 9:14-29, Matthew 17:14-21, Luke 9:37-43',
    difficulty: 'hard',
    category: 'new-testament',
    funFact: 'My prayer is one of the most honest in the Bible',
    keyVerse: 'Mark 9:24'
  },

  // ================================================================
  // SECTION 10: EARLY CHURCH & MARTYRS (15 characters)
  // ================================================================
  {
    id: 'c171',
    name: 'Stephen',
    clues: [
      'I was the first Christian martyr',
      'I was stoned for my faith',
      'I saw heaven open and Jesus standing at the right hand of God'
    ],
    reference: 'Acts 6-7',
    difficulty: 'medium',
    category: 'early-church',
    funFact: 'I was one of the first seven deacons',
    keyVerse: 'Acts 7:55-56'
  },
  {
    id: 'c172',
    name: 'Peter (Apostle)',
    clues: [
      'I was a fisherman before following Jesus',
      'I walked on water briefly',
      'I denied Jesus three times'
    ],
    reference: 'Matthew 4, 14, 26',
    difficulty: 'easy',
    category: 'apostles',
    funFact: 'I preached on Pentecost and 3,000 were saved',
    keyVerse: 'Acts 2:41'
  },
  {
    id: 'c173',
    name: 'James the Just (Brother of Jesus)',
    clues: [
      'I was the brother of Jesus',
      'I led the church in Jerusalem',
      'I wrote the book of James'
    ],
    reference: 'Acts 15, Galatians 1:19, James 1:1',
    difficulty: 'medium',
    category: 'early-church',
    funFact: 'I was called "James the Just" because of my righteousness',
    keyVerse: 'James 1:1'
  },
  {
    id: 'c174',
    name: 'Jude (Brother of Jesus)',
    clues: [
      'I was the brother of Jesus and James',
      'I wrote the book of Jude',
      'I warned about false teachers'
    ],
    reference: 'Jude 1:1',
    difficulty: 'hard',
    category: 'early-church',
    funFact: 'My book is one of the shortest in the New Testament',
    keyVerse: 'Jude 1:3'
  },
  {
    id: 'c175',
    name: 'Barnabas',
    clues: [
      'I was called the "son of encouragement"',
      'I introduced Paul to the other apostles',
      'I was a companion of Paul on missionary journeys'
    ],
    reference: 'Acts 4:36-37, 9:26-27, 13:1-4',
    difficulty: 'medium',
    category: 'early-church',
    funFact: 'I sold a field and gave the money to the church',
    keyVerse: 'Acts 4:36-37'
  },
  {
    id: 'c176',
    name: 'Silas',
    clues: [
      'I was a companion of Paul',
      'I was imprisoned with Paul in Philippi',
      'I sang hymns with Paul in prison'
    ],
    reference: 'Acts 15:22, 16:19-40',
    difficulty: 'hard',
    category: 'early-church',
    funFact: 'I was a Roman citizen like Paul',
    keyVerse: 'Acts 16:25'
  },
  {
    id: 'c177',
    name: 'Timothy',
    clues: [
      'I was a young disciple of Paul',
      'I was circumcised by Paul for the sake of the gospel',
      'I became a leader in the church'
    ],
    reference: 'Acts 16:1-3, 1 Timothy, 2 Timothy',
    difficulty: 'medium',
    category: 'early-church',
    funFact: 'My mother was Jewish and my father was Greek',
    keyVerse: '1 Timothy 4:12'
  },
  {
    id: 'c178',
    name: 'Titus',
    clues: [
      'I was a Greek convert and companion of Paul',
      'I was left in Crete to appoint elders',
      'I was the recipient of a letter from Paul'
    ],
    reference: '2 Corinthians 8:16-24, Titus 1:4-5',
    difficulty: 'hard',
    category: 'early-church',
    funFact: 'I was known for my love and zeal',
    keyVerse: 'Titus 1:4-5'
  },
  {
    id: 'c179',
    name: 'Ananias (of Damascus)',
    clues: [
      'I was sent by God to heal Saul\'s blindness',
      'I was afraid of Saul because of his reputation',
      'I called Saul "brother" and baptized him'
    ],
    reference: 'Acts 9:10-19',
    difficulty: 'hard',
    category: 'early-church',
    funFact: 'I was a disciple in Damascus',
    keyVerse: 'Acts 9:17'
  },
  {
    id: 'c180',
    name: 'Sapphira',
    clues: [
      'I lied to the Holy Spirit about a land sale',
      'I agreed with my husband to deceive the apostles',
      'I died instantly when confronted by Peter'
    ],
    reference: 'Acts 5:1-11',
    difficulty: 'hard',
    category: 'early-church',
    funFact: 'My husband Ananias died before me',
    keyVerse: 'Acts 5:9'
  },
  {
    id: 'c181',
    name: 'Ananias (with Sapphira)',
    clues: [
      'I sold a piece of land and lied about the price',
      'I kept back part of the money',
      'I died because I lied to the Holy Spirit'
    ],
    reference: 'Acts 5:1-11',
    difficulty: 'hard',
    category: 'early-church',
    funFact: 'My wife Sapphira died with me',
    keyVerse: 'Acts 5:5'
  },
  {
    id: 'c182',
    name: 'Cornelius',
    clues: [
      'I was a centurion in the Italian Regiment',
      'I was a devout man who feared God',
      'I was the first Gentile to receive the Holy Spirit'
    ],
    reference: 'Acts 10:1-48',
    difficulty: 'medium',
    category: 'early-church',
    funFact: 'My household was the first Gentile church',
    keyVerse: 'Acts 10:2'
  },
  {
    id: 'c183',
    name: 'Phoebe',
    clues: [
      'I was a deaconess of the church in Cenchrea',
      'I was a patron of Paul and many others',
      'I delivered Paul\'s letter to the Romans'
    ],
    reference: 'Romans 16:1-2',
    difficulty: 'expert',
    category: 'women',
    funFact: 'Paul called me a deaconess and a helper',
    keyVerse: 'Romans 16:1-2'
  },
  {
    id: 'c184',
    name: 'Aquila and Priscilla',
    clues: [
      'We were a husband and wife team who taught the faith',
      'We corrected Apollos\' understanding of the gospel',
      'We risked our lives for Paul'
    ],
    reference: 'Acts 18, Romans 16:3-5',
    difficulty: 'hard',
    category: 'early-church',
    funFact: 'We hosted a church in our home',
    keyVerse: 'Acts 18:26'
  },
  {
    id: 'c185',
    name: 'Apollos',
    clues: [
      'I was a learned man from Alexandria',
      'I was eloquent and mighty in the Scriptures',
      'I was taught more accurately by Priscilla and Aquila'
    ],
    reference: 'Acts 18:24-28, 1 Corinthians 3:4-6',
    difficulty: 'hard',
    category: 'early-church',
    funFact: 'I was a powerful preacher but needed to be taught',
    keyVerse: 'Acts 18:24-25'
  },

  // ================================================================
  // SECTION 11: ADDITIONAL CHARACTERS (15 characters)
  // ================================================================
  {
    id: 'c186',
    name: 'Melchizedek',
    clues: [
      'I was a king and a priest of God Most High',
      'I blessed Abraham',
      'I brought out bread and wine'
    ],
    reference: 'Genesis 14:18-20, Hebrews 5-7',
    difficulty: 'expert',
    category: 'old-testament',
    funFact: 'I was a type of Christ',
    keyVerse: 'Genesis 14:18-19'
  },
  {
    id: 'c187',
    name: 'Job',
    clues: [
      'I was a wealthy man who lost everything',
      'I was afflicted with terrible boils',
      'I said "Though he slay me, yet will I trust him"'
    ],
    reference: 'Job 1-42',
    difficulty: 'medium',
    category: 'old-testament',
    funFact: 'I had 7,000 sheep, 3,000 camels, and 10 children',
    keyVerse: 'Job 13:15'
  },
  {
    id: 'c188',
    name: 'Hezekiah',
    clues: [
      'I was a good king of Judah',
      'I trusted God and was healed from a deadly illness',
      'I prayed and God added 15 years to my life'
    ],
    reference: '2 Kings 18-20',
    difficulty: 'medium',
    category: 'kings',
    funFact: 'I saw the shadow go back 10 steps as a sign',
    keyVerse: '2 Kings 20:5-6'
  },
  {
    id: 'c189',
    name: 'Josiah',
    clues: [
      'I became king at age 8',
      'I found the Book of the Law in the temple',
      'I led a great religious reform in Judah'
    ],
    reference: '2 Kings 22-23',
    difficulty: 'medium',
    category: 'kings',
    funFact: 'I was the last good king of Judah',
    keyVerse: '2 Kings 23:25'
  },
  {
    id: 'c190',
    name: 'King Hezekiah\'s Prayer',
    clues: [
      'I prayed a prayer of faith',
      'I was told I would die but I prayed for more time',
      'God added 15 years to my life'
    ],
    reference: '2 Kings 20:1-11, Isaiah 38:1-8',
    difficulty: 'hard',
    category: 'kings',
    funFact: 'I turned my face to the wall and wept',
    keyVerse: '2 Kings 20:2-3'
  },
  {
    id: 'c191',
    name: 'Shadrach',
    clues: [
      'I was one of Daniel\'s friends',
      'I refused to bow to the golden image',
      'I survived the fiery furnace with Meshach and Abednego'
    ],
    reference: 'Daniel 3:12-30',
    difficulty: 'hard',
    category: 'old-testament',
    funFact: 'I was thrown into the furnace but didn\'t even singe',
    keyVerse: 'Daniel 3:17-18'
  },
  {
    id: 'c192',
    name: 'Meshach',
    clues: [
      'I was one of Daniel\'s friends',
      'I refused to bow to the golden image',
      'I survived the fiery furnace with Shadrach and Abednego'
    ],
    reference: 'Daniel 3:12-30',
    difficulty: 'hard',
    category: 'old-testament',
    funFact: 'I walked in the furnace with the Son of God',
    keyVerse: 'Daniel 3:25'
  },
  {
    id: 'c193',
    name: 'Abednego',
    clues: [
      'I was one of Daniel\'s friends',
      'I refused to bow to the golden image',
      'I survived the fiery furnace with Shadrach and Meshach'
    ],
    reference: 'Daniel 3:12-30',
    difficulty: 'hard',
    category: 'old-testament',
    funFact: 'I was the third friend who survived the furnace',
    keyVerse: 'Daniel 3:26'
  },
  {
    id: 'c194',
    name: 'Enoch',
    clues: [
      'I walked with God',
      'I was taken by God without dying',
      'I was the seventh from Adam'
    ],
    reference: 'Genesis 5:21-24, Hebrews 11:5',
    difficulty: 'hard',
    category: 'old-testament',
    funFact: 'I never died; God took me',
    keyVerse: 'Genesis 5:24'
  },
  {
    id: 'c195',
    name: 'Cain',
    clues: [
      'I was the firstborn son of Adam and Eve',
      'I killed my brother Abel',
      'I was marked by God and became a wanderer'
    ],
    reference: 'Genesis 4:1-16',
    difficulty: 'easy',
    category: 'old-testament',
    funFact: 'I was the first murderer',
    keyVerse: 'Genesis 4:9-10'
  },
  {
    id: 'c196',
    name: 'Abel',
    clues: [
      'I was the second son of Adam and Eve',
      'I was a shepherd',
      'My sacrifice was accepted by God'
    ],
    reference: 'Genesis 4:1-16, Hebrews 11:4',
    difficulty: 'easy',
    category: 'old-testament',
    funFact: 'I was the first martyr',
    keyVerse: 'Genesis 4:4'
  },
  {
    id: 'c197',
    name: 'Lamech (Cain\'s Descendant)',
    clues: [
      'I was the first polygamist in the Bible',
      'I killed a young man for wounding me',
      'I boasted about my vengeance'
    ],
    reference: 'Genesis 4:19-24',
    difficulty: 'expert',
    category: 'old-testament',
    funFact: 'I was the first person to have two wives',
    keyVerse: 'Genesis 4:23-24'
  },
  {
    id: 'c198',
    name: 'Jabal',
    clues: [
      'I was the father of those who live in tents and raise livestock',
      'I was a descendant of Cain',
      'I was the first nomad'
    ],
    reference: 'Genesis 4:20',
    difficulty: 'expert',
    category: 'old-testament',
    funFact: 'I was the first to have livestock',
    keyVerse: 'Genesis 4:20'
  },
  {
    id: 'c199',
    name: 'Jubal',
    clues: [
      'I was the father of those who play instruments',
      'I was a descendant of Cain',
      'I invented music'
    ],
    reference: 'Genesis 4:21',
    difficulty: 'expert',
    category: 'old-testament',
    funFact: 'I was the first musician',
    keyVerse: 'Genesis 4:21'
  },
  {
    id: 'c200',
    name: 'Tubal-Cain',
    clues: [
      'I was a forger of bronze and iron tools',
      'I was a descendant of Cain',
      'I was a blacksmith'
    ],
    reference: 'Genesis 4:22',
    difficulty: 'expert',
    category: 'old-testament',
    funFact: 'I was the first metalsmith',
    keyVerse: 'Genesis 4:22'
  },
];

// ================================================================
// HELPER FUNCTIONS
// ================================================================

export const getCharacterClues = (count: number = 5): CharacterClue[] => {
  const shuffled = [...characterClues].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

export const getCharactersByCategory = (category: string): CharacterClue[] => {
  return characterClues.filter(c => c.category === category);
};

export const getCharactersByDifficulty = (difficulty: string): CharacterClue[] => {
  return characterClues.filter(c => c.difficulty === difficulty);
};

export const getCharacterCategories = (): { value: string; label: string; count: number }[] => {
  const categories = [
    'old-testament', 'new-testament', 'women', 'kings', 'prophets', 'apostles', 
    'judges', 'patriarchs', 'angels', 'disciples', 'early-church', 'minor-prophets', 'martyrs'
  ];
  return categories.map(cat => ({
    value: cat,
    label: cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    count: getCharactersByCategory(cat).length
  }));
};

export const getCharacterDifficulties = (): { value: string; label: string; count: number }[] => {
  const difficulties = ['easy', 'medium', 'hard', 'expert'];
  return difficulties.map(diff => ({
    value: diff,
    label: diff.charAt(0).toUpperCase() + diff.slice(1),
    count: getCharactersByDifficulty(diff).length
  }));
};

export const getCharacterByName = (name: string): CharacterClue | undefined => {
  return characterClues.find(c => c.name === name);
};

export const getRandomCharacter = (): CharacterClue => {
  return characterClues[Math.floor(Math.random() * characterClues.length)];
};

export const getStats = () => ({
  totalCharacters: characterClues.length,
  categories: getCharacterCategories().reduce((acc, cat) => {
    acc[cat.value] = cat.count;
    return acc;
  }, {} as Record<string, number>),
  difficulties: {
    easy: getCharactersByDifficulty('easy').length,
    medium: getCharactersByDifficulty('medium').length,
    hard: getCharactersByDifficulty('hard').length,
    expert: getCharactersByDifficulty('expert').length
  }
});