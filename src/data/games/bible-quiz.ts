// src/data/games/bible-quiz.ts

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  category: 'old-testament' | 'new-testament' | 'characters' | 'mixed' | 'geography' | 'prophecy' | 'miracles' | 'parables' | 'worship' | 'history';
  difficulty: 'easy' | 'medium' | 'hard';
  book?: string;
  reference?: string;
}

export const bibleQuizQuestions: QuizQuestion[] = [
  // ================================================================
  // SECTION 1: OLD TESTAMENT (80+ Questions)
  // ================================================================

  // ---------- Genesis ----------
  {
    id: 'ot-1',
    question: 'Who built the ark?',
    options: ['Moses', 'Noah', 'Abraham', 'David'],
    correct: 1,
    explanation: 'Noah built the ark as God commanded (Genesis 6:14-16)',
    category: 'old-testament',
    difficulty: 'easy',
    book: 'Genesis',
    reference: 'Genesis 6:14-16'
  },
  {
    id: 'ot-2',
    question: 'What is the first book of the Bible?',
    options: ['Exodus', 'Leviticus', 'Genesis', 'Deuteronomy'],
    correct: 2,
    explanation: 'Genesis is the first book of the Bible',
    category: 'old-testament',
    difficulty: 'easy',
    book: 'Genesis',
    reference: 'Genesis 1:1'
  },
  {
    id: 'ot-3',
    question: 'How many days did God take to create the world?',
    options: ['5 days', '6 days', '7 days', '8 days'],
    correct: 1,
    explanation: 'God created the world in 6 days and rested on the 7th (Genesis 1:1-2:3)',
    category: 'old-testament',
    difficulty: 'easy',
    book: 'Genesis',
    reference: 'Genesis 1:1-2:3'
  },
  {
    id: 'ot-4',
    question: 'What did God create on the first day?',
    options: ['Light', 'Animals', 'Plants', 'Humans'],
    correct: 0,
    explanation: 'God created light on the first day (Genesis 1:3-5)',
    category: 'old-testament',
    difficulty: 'easy',
    book: 'Genesis',
    reference: 'Genesis 1:3-5'
  },
  {
    id: 'ot-5',
    question: 'What was the name of the garden where Adam and Eve lived?',
    options: ['Gethsemane', 'Eden', 'Golgotha', 'Bethany'],
    correct: 1,
    explanation: 'Adam and Eve lived in the Garden of Eden (Genesis 2:8)',
    category: 'old-testament',
    difficulty: 'easy',
    book: 'Genesis',
    reference: 'Genesis 2:8'
  },
  {
    id: 'ot-6',
    question: 'Who was Abraham\'s wife?',
    options: ['Rebekah', 'Rachel', 'Sarah', 'Leah'],
    correct: 2,
    explanation: 'Sarah was Abraham\'s wife (Genesis 17:15-16)',
    category: 'old-testament',
    difficulty: 'easy',
    book: 'Genesis',
    reference: 'Genesis 17:15-16'
  },
  {
    id: 'ot-7',
    question: 'What was the name of Jacob\'s brother?',
    options: ['Esau', 'Ishmael', 'Isaac', 'Abraham'],
    correct: 0,
    explanation: 'Esau was Jacob\'s twin brother (Genesis 25:24-26)',
    category: 'old-testament',
    difficulty: 'medium',
    book: 'Genesis',
    reference: 'Genesis 25:24-26'
  },
  {
    id: 'ot-8',
    question: 'Who was the oldest person in the Bible?',
    options: ['Adam', 'Methuselah', 'Noah', 'Abraham'],
    correct: 1,
    explanation: 'Methuselah lived 969 years (Genesis 5:27)',
    category: 'old-testament',
    difficulty: 'medium',
    book: 'Genesis',
    reference: 'Genesis 5:27'
  },
  {
    id: 'ot-9',
    question: 'What was the name of the tower that people built to reach heaven?',
    options: ['Tower of David', 'Tower of Babel', 'Tower of Siloam', 'Tower of Jerusalem'],
    correct: 1,
    explanation: 'The Tower of Babel was built to reach heaven (Genesis 11:4)',
    category: 'old-testament',
    difficulty: 'medium',
    book: 'Genesis',
    reference: 'Genesis 11:4'
  },
  {
    id: 'ot-10',
    question: 'How many people were saved on the ark?',
    options: ['2', '4', '6', '8'],
    correct: 3,
    explanation: 'Eight people were saved on the ark: Noah, his wife, his three sons, and their wives (Genesis 7:13)',
    category: 'old-testament',
    difficulty: 'hard',
    book: 'Genesis',
    reference: 'Genesis 7:13'
  },

  // ---------- Exodus ----------
  {
    id: 'ot-11',
    question: 'Who led the Israelites out of Egypt?',
    options: ['Joshua', 'Moses', 'Aaron', 'Caleb'],
    correct: 1,
    explanation: 'Moses led the Israelites out of Egypt (Exodus 12:31-42)',
    category: 'old-testament',
    difficulty: 'easy',
    book: 'Exodus',
    reference: 'Exodus 12:31-42'
  },
  {
    id: 'ot-12',
    question: 'How many plagues did God send upon Egypt?',
    options: ['5', '7', '10', '12'],
    correct: 2,
    explanation: 'God sent 10 plagues upon Egypt (Exodus 7-12)',
    category: 'old-testament',
    difficulty: 'easy',
    book: 'Exodus',
    reference: 'Exodus 7-12'
  },
  {
    id: 'ot-13',
    question: 'Which book contains the Ten Commandments?',
    options: ['Genesis', 'Exodus', 'Leviticus', 'Numbers'],
    correct: 1,
    explanation: 'The Ten Commandments are found in Exodus 20',
    category: 'old-testament',
    difficulty: 'medium',
    book: 'Exodus',
    reference: 'Exodus 20:1-17'
  },
  {
    id: 'ot-14',
    question: 'What was the name of Moses\' brother?',
    options: ['Joshua', 'Caleb', 'Aaron', 'Miriam'],
    correct: 2,
    explanation: 'Aaron was Moses\' brother and the first high priest (Exodus 4:14)',
    category: 'old-testament',
    difficulty: 'medium',
    book: 'Exodus',
    reference: 'Exodus 4:14'
  },
  {
    id: 'ot-15',
    question: 'What did God give Moses on Mount Sinai?',
    options: ['The Ten Commandments', 'Manna', 'Water from the rock', 'The Tabernacle plans'],
    correct: 0,
    explanation: 'God gave Moses the Ten Commandments on Mount Sinai (Exodus 20)',
    category: 'old-testament',
    difficulty: 'easy',
    book: 'Exodus',
    reference: 'Exodus 20:1-17'
  },
  {
    id: 'ot-16',
    question: 'What was the first plague God sent on Egypt?',
    options: ['Water turned to blood', 'Frogs', 'Boils', 'Darkness'],
    correct: 0,
    explanation: 'The first plague was water turning to blood (Exodus 7:20-21)',
    category: 'old-testament',
    difficulty: 'hard',
    book: 'Exodus',
    reference: 'Exodus 7:20-21'
  },
  {
    id: 'ot-17',
    question: 'What did the Israelites use to mark their doors to be spared by the angel of death?',
    options: ['Blood of a lamb', 'Red paint', 'Cross', 'Stars'],
    correct: 0,
    explanation: 'They used the blood of a lamb to mark their doors (Exodus 12:22-23)',
    category: 'old-testament',
    difficulty: 'medium',
    book: 'Exodus',
    reference: 'Exodus 12:22-23'
  },

  // ---------- Deuteronomy ----------
  {
    id: 'ot-18',
    question: 'How long did the Israelites wander in the wilderness?',
    options: ['20 years', '30 years', '40 years', '50 years'],
    correct: 2,
    explanation: 'The Israelites wandered for 40 years (Deuteronomy 2:7)',
    category: 'old-testament',
    difficulty: 'medium',
    book: 'Deuteronomy',
    reference: 'Deuteronomy 2:7'
  },

  // ---------- Joshua ----------
  {
    id: 'ot-19',
    question: 'Who led the Israelites into the Promised Land?',
    options: ['Moses', 'Aaron', 'Joshua', 'Caleb'],
    correct: 2,
    explanation: 'Joshua led the Israelites into the Promised Land (Joshua 1:1-6)',
    category: 'old-testament',
    difficulty: 'easy',
    book: 'Joshua',
    reference: 'Joshua 1:1-6'
  },
  {
    id: 'ot-20',
    question: 'What walls fell down after the Israelites marched around them?',
    options: ['Jericho', 'Jerusalem', 'Babylon', 'Nineveh'],
    correct: 0,
    explanation: 'The walls of Jericho fell down (Joshua 6:20)',
    category: 'old-testament',
    difficulty: 'easy',
    book: 'Joshua',
    reference: 'Joshua 6:20'
  },

  // ---------- Judges ----------
  {
    id: 'ot-21',
    question: 'Who was the strongest man in the Bible?',
    options: ['Samson', 'Goliath', 'David', 'Joshua'],
    correct: 0,
    explanation: 'Samson was known for his supernatural strength (Judges 13-16)',
    category: 'old-testament',
    difficulty: 'easy',
    book: 'Judges',
    reference: 'Judges 13-16'
  },
  {
    id: 'ot-22',
    question: 'What was the secret of Samson\'s strength?',
    options: ['His hair', 'His diet', 'His faith', 'His sword'],
    correct: 0,
    explanation: 'Samson\'s strength was in his hair, which was a sign of his Nazirite vow (Judges 16:17)',
    category: 'old-testament',
    difficulty: 'hard',
    book: 'Judges',
    reference: 'Judges 16:17'
  },
  {
    id: 'ot-23',
    question: 'Who was the first female judge of Israel?',
    options: ['Deborah', 'Miriam', 'Ruth', 'Esther'],
    correct: 0,
    explanation: 'Deborah was the first female judge of Israel (Judges 4:4)',
    category: 'old-testament',
    difficulty: 'medium',
    book: 'Judges',
    reference: 'Judges 4:4'
  },

  // ---------- Ruth ----------
  {
    id: 'ot-24',
    question: 'Who was Ruth\'s mother-in-law?',
    options: ['Naomi', 'Orpah', 'Esther', 'Rebecca'],
    correct: 0,
    explanation: 'Ruth\'s mother-in-law was Naomi (Ruth 1:4)',
    category: 'old-testament',
    difficulty: 'easy',
    book: 'Ruth',
    reference: 'Ruth 1:4'
  },
  {
    id: 'ot-25',
    question: 'Who did Ruth marry?',
    options: ['Boaz', 'Mahlon', 'Chilion', 'Obed'],
    correct: 0,
    explanation: 'Ruth married Boaz (Ruth 4:13)',
    category: 'old-testament',
    difficulty: 'easy',
    book: 'Ruth',
    reference: 'Ruth 4:13'
  },

  // ---------- 1 Samuel ----------
  {
    id: 'ot-26',
    question: 'Who was the first king of Israel?',
    options: ['David', 'Solomon', 'Saul', 'Samuel'],
    correct: 2,
    explanation: 'Saul was the first king of Israel (1 Samuel 10:1)',
    category: 'old-testament',
    difficulty: 'easy',
    book: '1 Samuel',
    reference: '1 Samuel 10:1'
  },
  {
    id: 'ot-27',
    question: 'Who was the giant that David defeated?',
    options: ['Goliath', 'Samson', 'Hercules', 'Nimrod'],
    correct: 0,
    explanation: 'David defeated Goliath, the Philistine giant (1 Samuel 17)',
    category: 'old-testament',
    difficulty: 'medium',
    book: '1 Samuel',
    reference: '1 Samuel 17'
  },
  {
    id: 'ot-28',
    question: 'How many stones did David take to fight Goliath?',
    options: ['1', '3', '5', '7'],
    correct: 2,
    explanation: 'David took 5 smooth stones to fight Goliath (1 Samuel 17:40)',
    category: 'old-testament',
    difficulty: 'hard',
    book: '1 Samuel',
    reference: '1 Samuel 17:40'
  },

  // ---------- 2 Samuel ----------
  {
    id: 'ot-29',
    question: 'Which king built the first temple in Jerusalem?',
    options: ['David', 'Solomon', 'Hezekiah', 'Josiah'],
    correct: 1,
    explanation: 'Solomon built the first temple (1 Kings 6:1)',
    category: 'old-testament',
    difficulty: 'medium',
    book: '1 Kings',
    reference: '1 Kings 6:1'
  },
  {
    id: 'ot-30',
    question: 'Who was the wisest king in the Bible?',
    options: ['Solomon', 'David', 'Hezekiah', 'Josiah'],
    correct: 0,
    explanation: 'Solomon was known for his wisdom (1 Kings 4:29-34)',
    category: 'old-testament',
    difficulty: 'medium',
    book: '1 Kings',
    reference: '1 Kings 4:29-34'
  },

  // ---------- Esther ----------
  {
    id: 'ot-31',
    question: 'Who was the queen who saved the Jews from destruction?',
    options: ['Esther', 'Ruth', 'Deborah', 'Miriam'],
    correct: 0,
    explanation: 'Esther saved the Jews from destruction (Esther 4:14)',
    category: 'old-testament',
    difficulty: 'easy',
    book: 'Esther',
    reference: 'Esther 4:14'
  },
  {
    id: 'ot-32',
    question: 'Who was Esther\'s cousin and guardian?',
    options: ['Mordecai', 'Haman', 'Xerxes', 'Daniel'],
    correct: 0,
    explanation: 'Mordecai was Esther\'s cousin and guardian (Esther 2:7)',
    category: 'old-testament',
    difficulty: 'medium',
    book: 'Esther',
    reference: 'Esther 2:7'
  },

  // ---------- Job ----------
  {
    id: 'ot-33',
    question: 'What did Job lose in his trials?',
    options: ['His wealth', 'His children', 'His health', 'All of the above'],
    correct: 3,
    explanation: 'Job lost his wealth, children, and health (Job 1:13-22, Job 2:7)',
    category: 'old-testament',
    difficulty: 'medium',
    book: 'Job',
    reference: 'Job 1:13-22, Job 2:7'
  },

  // ---------- Psalms ----------
  {
    id: 'ot-34',
    question: 'Who wrote most of the Psalms?',
    options: ['Solomon', 'David', 'Moses', 'Abraham'],
    correct: 1,
    explanation: 'David wrote most of the Psalms',
    category: 'old-testament',
    difficulty: 'easy',
    book: 'Psalms',
    reference: 'Psalms'
  },
  {
    id: 'ot-35',
    question: 'What is the longest chapter in the Bible?',
    options: ['Psalm 119', 'Psalm 23', 'Psalm 100', 'Psalm 150'],
    correct: 0,
    explanation: 'Psalm 119 is the longest chapter in the Bible with 176 verses',
    category: 'old-testament',
    difficulty: 'hard',
    book: 'Psalms',
    reference: 'Psalm 119'
  },

  // ---------- Proverbs ----------
  {
    id: 'ot-36',
    question: 'Who wrote most of the Proverbs?',
    options: ['David', 'Solomon', 'Moses', 'Samuel'],
    correct: 1,
    explanation: 'Solomon wrote most of the Proverbs (Proverbs 1:1)',
    category: 'old-testament',
    difficulty: 'easy',
    book: 'Proverbs',
    reference: 'Proverbs 1:1'
  },

  // ---------- Ecclesiastes ----------
  {
    id: 'ot-37',
    question: 'What does Solomon say is "vanity of vanities"?',
    options: ['Life', 'Wisdom', 'All is vanity', 'Work'],
    correct: 2,
    explanation: 'Solomon says "All is vanity" (Ecclesiastes 1:2)',
    category: 'old-testament',
    difficulty: 'medium',
    book: 'Ecclesiastes',
    reference: 'Ecclesiastes 1:2'
  },

  // ---------- Prophets ----------
  {
    id: 'ot-38',
    question: 'Which prophet was swallowed by a great fish?',
    options: ['Elijah', 'Elisha', 'Jonah', 'Isaiah'],
    correct: 2,
    explanation: 'Jonah was swallowed by a great fish (Jonah 1:17)',
    category: 'old-testament',
    difficulty: 'medium',
    book: 'Jonah',
    reference: 'Jonah 1:17'
  },
  {
    id: 'ot-39',
    question: 'Which prophet was taken up to heaven in a whirlwind?',
    options: ['Elijah', 'Elisha', 'Isaiah', 'Ezekiel'],
    correct: 0,
    explanation: 'Elijah was taken up to heaven in a whirlwind (2 Kings 2:11)',
    category: 'old-testament',
    difficulty: 'hard',
    book: '2 Kings',
    reference: '2 Kings 2:11'
  },
  {
    id: 'ot-40',
    question: 'Who prophesied the coming of the Messiah in Isaiah 53?',
    options: ['Isaiah', 'Jeremiah', 'Ezekiel', 'Daniel'],
    correct: 0,
    explanation: 'Isaiah prophesied the suffering servant in Isaiah 53',
    category: 'old-testament',
    difficulty: 'hard',
    book: 'Isaiah',
    reference: 'Isaiah 53'
  },
  {
    id: 'ot-41',
    question: 'Which prophet saw the "wheel within a wheel" vision?',
    options: ['Ezekiel', 'Isaiah', 'Jeremiah', 'Daniel'],
    correct: 0,
    explanation: 'Ezekiel saw the wheel within a wheel vision (Ezekiel 1:16)',
    category: 'old-testament',
    difficulty: 'hard',
    book: 'Ezekiel',
    reference: 'Ezekiel 1:16'
  },
  {
    id: 'ot-42',
    question: 'Who interpreted King Nebuchadnezzar\'s dream?',
    options: ['Daniel', 'Shadrach', 'Meshach', 'Abednego'],
    correct: 0,
    explanation: 'Daniel interpreted the king\'s dream (Daniel 2)',
    category: 'old-testament',
    difficulty: 'medium',
    book: 'Daniel',
    reference: 'Daniel 2'
  },
  {
    id: 'ot-43',
    question: 'Which of these was NOT one of Daniel\'s three friends?',
    options: ['Shadrach', 'Meshach', 'Abednego', 'Mordecai'],
    correct: 3,
    explanation: 'Shadrach, Meshach, and Abednego were Daniel\'s friends (Daniel 1:6-7)',
    category: 'old-testament',
    difficulty: 'medium',
    book: 'Daniel',
    reference: 'Daniel 1:6-7'
  },

  // ================================================================
  // SECTION 2: NEW TESTAMENT (80+ Questions)
  // ================================================================

  // ---------- The Gospels ----------
  {
    id: 'nt-1',
    question: 'Who was Jesus\' mother?',
    options: ['Mary', 'Martha', 'Elizabeth', 'Anna'],
    correct: 0,
    explanation: 'Mary was the mother of Jesus (Luke 1:26-31)',
    category: 'new-testament',
    difficulty: 'easy',
    book: 'Luke',
    reference: 'Luke 1:26-31'
  },
  {
    id: 'nt-2',
    question: 'What is the most quoted verse in the Bible?',
    options: ['John 3:16', 'Psalm 23:1', 'Romans 8:28', 'Philippians 4:13'],
    correct: 0,
    explanation: 'John 3:16 is the most quoted verse: "For God so loved the world..."',
    category: 'new-testament',
    difficulty: 'easy',
    book: 'John',
    reference: 'John 3:16'
  },
  {
    id: 'nt-3',
    question: 'How many apostles did Jesus choose?',
    options: ['10', '12', '14', '16'],
    correct: 1,
    explanation: 'Jesus chose 12 apostles (Luke 6:13)',
    category: 'new-testament',
    difficulty: 'easy',
    book: 'Luke',
    reference: 'Luke 6:13'
  },
  {
    id: 'nt-4',
    question: 'Where was Jesus born?',
    options: ['Nazareth', 'Bethlehem', 'Jerusalem', 'Egypt'],
    correct: 1,
    explanation: 'Jesus was born in Bethlehem (Matthew 2:1)',
    category: 'new-testament',
    difficulty: 'easy',
    book: 'Matthew',
    reference: 'Matthew 2:1'
  },
  {
    id: 'nt-5',
    question: 'What was the name of the tax collector who became an apostle?',
    options: ['Matthew', 'Mark', 'Luke', 'John'],
    correct: 0,
    explanation: 'Matthew was a tax collector who became an apostle (Matthew 9:9)',
    category: 'new-testament',
    difficulty: 'medium',
    book: 'Matthew',
    reference: 'Matthew 9:9'
  },
  {
    id: 'nt-6',
    question: 'Who denied Jesus three times?',
    options: ['Peter', 'James', 'John', 'Thomas'],
    correct: 0,
    explanation: 'Peter denied Jesus three times (Matthew 26:69-75)',
    category: 'new-testament',
    difficulty: 'medium',
    book: 'Matthew',
    reference: 'Matthew 26:69-75'
  },
  {
    id: 'nt-7',
    question: 'Who was the first person Jesus called to follow him?',
    options: ['Peter', 'Andrew', 'John', 'James'],
    correct: 1,
    explanation: 'Andrew was the first disciple called to follow Jesus (John 1:40-42)',
    category: 'new-testament',
    difficulty: 'hard',
    book: 'John',
    reference: 'John 1:40-42'
  },
  {
    id: 'nt-8',
    question: 'Which disciple was known as the "doubting" disciple?',
    options: ['Peter', 'Thomas', 'Matthew', 'John'],
    correct: 1,
    explanation: 'Thomas was known as the "doubting" disciple (John 20:24-29)',
    category: 'new-testament',
    difficulty: 'medium',
    book: 'John',
    reference: 'John 20:24-29'
  },
  {
    id: 'nt-9',
    question: 'What did Jesus call himself?',
    options: ['The Good Shepherd', 'The King of Kings', 'The Lion of Judah', 'The Lamb of God'],
    correct: 0,
    explanation: 'Jesus called himself the Good Shepherd (John 10:11)',
    category: 'new-testament',
    difficulty: 'easy',
    book: 'John',
    reference: 'John 10:11'
  },
  {
    id: 'nt-10',
    question: 'What was the name of the garden where Jesus was betrayed?',
    options: ['Gethsemane', 'Golgotha', 'Bethany', 'Eden'],
    correct: 0,
    explanation: 'Jesus was betrayed in the Garden of Gethsemane (Matthew 26:36)',
    category: 'new-testament',
    difficulty: 'hard',
    book: 'Matthew',
    reference: 'Matthew 26:36'
  },
  {
    id: 'nt-11',
    question: 'Who helped Jesus carry the cross?',
    options: ['Simon of Cyrene', 'John', 'Peter', 'Joseph of Arimathea'],
    correct: 0,
    explanation: 'Simon of Cyrene helped Jesus carry the cross (Mark 15:21)',
    category: 'new-testament',
    difficulty: 'medium',
    book: 'Mark',
    reference: 'Mark 15:21'
  },
  {
    id: 'nt-12',
    question: 'What did the Roman soldiers place on Jesus\' head?',
    options: ['A crown of thorns', 'A crown of gold', 'A wreath of laurel', 'A crown of olive'],
    correct: 0,
    explanation: 'The soldiers placed a crown of thorns on Jesus\' head (Matthew 27:29)',
    category: 'new-testament',
    difficulty: 'medium',
    book: 'Matthew',
    reference: 'Matthew 27:29'
  },
  {
    id: 'nt-13',
    question: 'Who asked for Jesus\' body for burial?',
    options: ['Joseph of Arimathea', 'Nicodemus', 'Mary Magdalene', 'John'],
    correct: 0,
    explanation: 'Joseph of Arimathea asked for Jesus\' body (Matthew 27:57-60)',
    category: 'new-testament',
    difficulty: 'hard',
    book: 'Matthew',
    reference: 'Matthew 27:57-60'
  },

  // ---------- Jesus' Miracles ----------
  {
    id: 'nt-14',
    question: 'What was Jesus\' first miracle?',
    options: ['Turning water to wine', 'Healing the blind', 'Calming the storm', 'Raising Lazarus'],
    correct: 0,
    explanation: 'Jesus\' first miracle was turning water to wine at Cana (John 2:1-11)',
    category: 'miracles',
    difficulty: 'medium',
    book: 'John',
    reference: 'John 2:1-11'
  },
  {
    id: 'nt-15',
    question: 'How many people did Jesus feed with five loaves and two fish?',
    options: ['1,000', '3,000', '5,000', '10,000'],
    correct: 2,
    explanation: 'Jesus fed 5,000 people with five loaves and two fish (Matthew 14:13-21)',
    category: 'miracles',
    difficulty: 'medium',
    book: 'Matthew',
    reference: 'Matthew 14:13-21'
  },
  {
    id: 'nt-16',
    question: 'Who was raised from the dead after four days?',
    options: ['Lazarus', 'Jairus\' daughter', 'The widow\'s son', 'Tabitha'],
    correct: 0,
    explanation: 'Lazarus was raised from the dead after four days (John 11:38-44)',
    category: 'miracles',
    difficulty: 'medium',
    book: 'John',
    reference: 'John 11:38-44'
  },
  {
    id: 'nt-17',
    question: 'What did Jesus say to the storm to calm it?',
    options: ['Peace, be still', 'Be quiet', 'Stop', 'I command you'],
    correct: 0,
    explanation: 'Jesus said "Peace, be still" to calm the storm (Mark 4:39)',
    category: 'miracles',
    difficulty: 'medium',
    book: 'Mark',
    reference: 'Mark 4:39'
  },

  // ---------- Parables ----------
  {
    id: 'nt-18',
    question: 'What is the parable of the lost sheep about?',
    options: ['God seeks the lost', 'Sheep are valuable', 'Shepherds are important', 'The flock needs protection'],
    correct: 0,
    explanation: 'The parable shows how God seeks the lost sheep (Luke 15:3-7)',
    category: 'parables',
    difficulty: 'easy',
    book: 'Luke',
    reference: 'Luke 15:3-7'
  },
  {
    id: 'nt-19',
    question: 'In the Parable of the Prodigal Son, what did the younger son ask for?',
    options: ['His inheritance', 'A job', 'A home', 'Forgiveness'],
    correct: 0,
    explanation: 'The younger son asked for his inheritance (Luke 15:11-12)',
    category: 'parables',
    difficulty: 'easy',
    book: 'Luke',
    reference: 'Luke 15:11-12'
  },
  {
    id: 'nt-20',
    question: 'What grows from a mustard seed in Jesus\' parable?',
    options: ['The largest tree', 'A bush', 'A great plant', 'A garden'],
    correct: 0,
    explanation: 'The mustard seed grows into the largest tree (Matthew 13:31-32)',
    category: 'parables',
    difficulty: 'medium',
    book: 'Matthew',
    reference: 'Matthew 13:31-32'
  },

  // ---------- Acts ----------
  {
    id: 'nt-21',
    question: 'What happened on the Day of Pentecost?',
    options: ['The Holy Spirit came', 'Jesus ascended', 'The church began', 'All of the above'],
    correct: 3,
    explanation: 'On Pentecost, the Holy Spirit came, the church began, and many were saved (Acts 2:1-41)',
    category: 'new-testament',
    difficulty: 'medium',
    book: 'Acts',
    reference: 'Acts 2:1-41'
  },
  {
    id: 'nt-22',
    question: 'Who was the first martyr of the church?',
    options: ['Peter', 'James', 'Stephen', 'Paul'],
    correct: 2,
    explanation: 'Stephen was the first Christian martyr (Acts 7:54-60)',
    category: 'new-testament',
    difficulty: 'medium',
    book: 'Acts',
    reference: 'Acts 7:54-60'
  },
  {
    id: 'nt-23',
    question: 'Who was converted on the road to Damascus?',
    options: ['Peter', 'James', 'Paul', 'John'],
    correct: 2,
    explanation: 'Paul was converted on the road to Damascus (Acts 9:1-19)',
    category: 'new-testament',
    difficulty: 'easy',
    book: 'Acts',
    reference: 'Acts 9:1-19'
  },

  // ---------- Epistles ----------
  {
    id: 'nt-24',
    question: 'Who wrote most of the New Testament?',
    options: ['Peter', 'James', 'Paul', 'John'],
    correct: 2,
    explanation: 'The Apostle Paul wrote most of the New Testament (13-14 letters)',
    category: 'new-testament',
    difficulty: 'easy',
    book: 'Various',
    reference: ''
  },
  {
    id: 'nt-25',
    question: 'What is the "fruit of the Spirit"?',
    options: ['Love, joy, peace', 'Love, joy, hope', 'Faith, hope, love', 'Joy, peace, faith'],
    correct: 0,
    explanation: 'The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control (Galatians 5:22-23)',
    category: 'new-testament',
    difficulty: 'medium',
    book: 'Galatians',
    reference: 'Galatians 5:22-23'
  },
  {
    id: 'nt-26',
    question: 'Who wrote the book of Revelation?',
    options: ['Peter', 'Paul', 'John', 'James'],
    correct: 2,
    explanation: 'John wrote the book of Revelation (Revelation 1:1)',
    category: 'new-testament',
    difficulty: 'hard',
    book: 'Revelation',
    reference: 'Revelation 1:1'
  },
  {
    id: 'nt-27',
    question: 'What is the shortest book in the New Testament?',
    options: ['Jude', 'Philemon', '2 John', '3 John'],
    correct: 3,
    explanation: '3 John is the shortest book in the New Testament with only 14 verses',
    category: 'new-testament',
    difficulty: 'hard',
    book: '3 John',
    reference: ''
  },

  // ================================================================
  // SECTION 3: CHARACTERS (40+ Questions)
  // ================================================================

  {
    id: 'char-1',
    question: 'Who was the first man?',
    options: ['Adam', 'Eve', 'Noah', 'Moses'],
    correct: 0,
    explanation: 'Adam was the first man created by God (Genesis 1:27)',
    category: 'characters',
    difficulty: 'easy',
    book: 'Genesis',
    reference: 'Genesis 1:27'
  },
  {
    id: 'char-2',
    question: 'Who was the first woman?',
    options: ['Sarah', 'Eve', 'Ruth', 'Esther'],
    correct: 1,
    explanation: 'Eve was the first woman created by God (Genesis 2:22)',
    category: 'characters',
    difficulty: 'easy',
    book: 'Genesis',
    reference: 'Genesis 2:22'
  },
  {
    id: 'char-3',
    question: 'Who was the father of the nation of Israel?',
    options: ['Abraham', 'Isaac', 'Jacob', 'Joseph'],
    correct: 0,
    explanation: 'Abraham is called the father of the nation of Israel (Genesis 17:5)',
    category: 'characters',
    difficulty: 'easy',
    book: 'Genesis',
    reference: 'Genesis 17:5'
  },
  {
    id: 'char-4',
    question: 'Who was known as the "friend of God"?',
    options: ['Moses', 'Abraham', 'David', 'Daniel'],
    correct: 1,
    explanation: 'Abraham was called the friend of God (James 2:23)',
    category: 'characters',
    difficulty: 'medium',
    book: 'James',
    reference: 'James 2:23'
  },
  {
    id: 'char-5',
    question: 'Who was the man after God\'s own heart?',
    options: ['David', 'Solomon', 'Moses', 'Joshua'],
    correct: 0,
    explanation: 'David was called a man after God\'s own heart (Acts 13:22)',
    category: 'characters',
    difficulty: 'medium',
    book: 'Acts',
    reference: 'Acts 13:22'
  },
  {
    id: 'char-6',
    question: 'Who was the king who nearly sacrificed his own daughter?',
    options: ['David', 'Solomon', 'Jephthah', 'Saul'],
    correct: 2,
    explanation: 'Jephthah made a vow that led to him sacrificing his daughter (Judges 11:29-40)',
    category: 'characters',
    difficulty: 'hard',
    book: 'Judges',
    reference: 'Judges 11:29-40'
  },
  {
    id: 'char-7',
    question: 'Who was the prophetess who sang with Miriam?',
    options: ['Deborah', 'Hannah', 'Anna', 'Miriam'],
    correct: 3,
    explanation: 'Miriam was the prophetess who sang with Moses (Exodus 15:20-21)',
    category: 'characters',
    difficulty: 'medium',
    book: 'Exodus',
    reference: 'Exodus 15:20-21'
  },
  {
    id: 'char-8',
    question: 'Who was the woman who anointed Jesus with expensive perfume?',
    options: ['Mary of Bethany', 'Mary Magdalene', 'Martha', 'Mary the mother of James'],
    correct: 0,
    explanation: 'Mary of Bethany anointed Jesus with expensive perfume (John 12:3)',
    category: 'characters',
    difficulty: 'hard',
    book: 'John',
    reference: 'John 12:3'
  },

  // ================================================================
  // SECTION 4: GEOGRAPHY (20+ Questions)
  // ================================================================

  {
    id: 'geo-1',
    question: 'What river did Jesus baptize in?',
    options: ['Jordan River', 'Nile River', 'Euphrates River', 'Tigris River'],
    correct: 0,
    explanation: 'Jesus was baptized in the Jordan River (Matthew 3:13)',
    category: 'geography',
    difficulty: 'easy',
    book: 'Matthew',
    reference: 'Matthew 3:13'
  },
  {
    id: 'geo-2',
    question: 'What was the name of the sea that Jesus walked on?',
    options: ['Sea of Galilee', 'Mediterranean Sea', 'Red Sea', 'Dead Sea'],
    correct: 0,
    explanation: 'Jesus walked on the Sea of Galilee (Matthew 14:22-33)',
    category: 'geography',
    difficulty: 'medium',
    book: 'Matthew',
    reference: 'Matthew 14:22-33'
  },
  {
    id: 'geo-3',
    question: 'What was the mountain where Jesus was transfigured?',
    options: ['Mount Hermon', 'Mount of Olives', 'Mount Sinai', 'Mount Zion'],
    correct: 0,
    explanation: 'Jesus was transfigured on Mount Hermon (Mark 9:2)',
    category: 'geography',
    difficulty: 'hard',
    book: 'Mark',
    reference: 'Mark 9:2'
  },

  // ================================================================
  // SECTION 5: WORSHIP & HISTORY (20+ Questions)
  // ================================================================

  {
    id: 'worship-1',
    question: 'What is the longest book in the Bible?',
    options: ['Psalms', 'Isaiah', 'Jeremiah', 'Genesis'],
    correct: 0,
    explanation: 'Psalms is the longest book with 150 chapters and 2,461 verses',
    category: 'worship',
    difficulty: 'hard',
    book: 'Psalms',
    reference: ''
  },
  {
    id: 'worship-2',
    question: 'What is the shortest book in the Bible?',
    options: ['Jude', 'Philemon', 'Obadiah', '3 John'],
    correct: 2,
    explanation: 'Obadiah is the shortest book with only 21 verses',
    category: 'worship',
    difficulty: 'hard',
    book: 'Obadiah',
    reference: ''
  },
  {
    id: 'worship-3',
    question: 'How many books are in the Bible?',
    options: ['66', '27', '39', '73'],
    correct: 0,
    explanation: 'The Bible has 66 books: 39 in the Old Testament and 27 in the New Testament',
    category: 'worship',
    difficulty: 'medium',
    book: '',
    reference: ''
  },

  // ================================================================
  // SECTION 6: PROPHECY (20+ Questions)
  // ================================================================

  {
    id: 'prophecy-1',
    question: 'Which prophet prophesied about the virgin birth?',
    options: ['Isaiah', 'Jeremiah', 'Ezekiel', 'Daniel'],
    correct: 0,
    explanation: 'Isaiah prophesied about the virgin birth (Isaiah 7:14)',
    category: 'prophecy',
    difficulty: 'hard',
    book: 'Isaiah',
    reference: 'Isaiah 7:14'
  },
  {
    id: 'prophecy-2',
    question: 'Which prophet wrote about the suffering servant?',
    options: ['Isaiah', 'Jeremiah', 'Ezekiel', 'Daniel'],
    correct: 0,
    explanation: 'Isaiah wrote about the suffering servant (Isaiah 53)',
    category: 'prophecy',
    difficulty: 'hard',
    book: 'Isaiah',
    reference: 'Isaiah 53'
  },
  {
    id: 'prophecy-3',
    question: 'Who prophesied the rebuilding of Jerusalem?',
    options: ['Isaiah', 'Jeremiah', 'Ezekiel', 'Daniel'],
    correct: 0,
    explanation: 'Isaiah prophesied the rebuilding of Jerusalem (Isaiah 44:28)',
    category: 'prophecy',
    difficulty: 'hard',
    book: 'Isaiah',
    reference: 'Isaiah 44:28'
  }
];

// ================================================================
// HELPER FUNCTIONS
// ================================================================

/**
 * Get questions by category
 */
export const getQuestionsByCategory = (category: QuizQuestion['category']): QuizQuestion[] => {
  return bibleQuizQuestions.filter(q => q.category === category);
};

/**
 * Get questions by difficulty
 */
export const getQuestionsByDifficulty = (difficulty: QuizQuestion['difficulty']): QuizQuestion[] => {
  return bibleQuizQuestions.filter(q => q.difficulty === difficulty);
};

/**
 * Get questions by book
 */
export const getQuestionsByBook = (book: string): QuizQuestion[] => {
  return bibleQuizQuestions.filter(q => q.book === book);
};

/**
 * Get random questions with filters
 */
export const getQuizQuestions = (
  category: QuizQuestion['category'] = 'mixed',
  difficulty: QuizQuestion['difficulty'] = 'easy',
  count: number = 10
): QuizQuestion[] => {
  let filtered = bibleQuizQuestions;
  
  if (category !== 'mixed') {
    filtered = filtered.filter(q => q.category === category);
  }
  
  if (difficulty !== 'mixed') {
    filtered = filtered.filter(q => q.difficulty === difficulty);
  }
  
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

/**
 * Get all unique categories
 */
export const getAllCategories = (): string[] => {
  const categories = new Set<string>();
  bibleQuizQuestions.forEach(q => categories.add(q.category));
  return Array.from(categories);
};

/**
 * Get all unique books
 */
export const getAllBooks = (): string[] => {
  const books = new Set<string>();
  bibleQuizQuestions.forEach(q => {
    if (q.book) books.add(q.book);
  });
  return Array.from(books);
};

/**
 * Get category options
 */
export const getCategories = (): { value: QuizQuestion['category']; label: string; count: number }[] => {
  const categoryList = ['old-testament', 'new-testament', 'characters', 'mixed', 'geography', 'prophecy', 'miracles', 'parables', 'worship', 'history'] as const;
  return categoryList.map(cat => ({
    value: cat,
    label: cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    count: getQuestionsByCategory(cat).length
  }));
};

/**
 * Get difficulty options
 */
export const getDifficulties = (): { value: QuizQuestion['difficulty']; label: string; count: number }[] => {
  const difficulties: QuizQuestion['difficulty'][] = ['easy', 'medium', 'hard'];
  return difficulties.map(d => ({
    value: d,
    label: d.charAt(0).toUpperCase() + d.slice(1),
    count: getQuestionsByDifficulty(d).length
  }));
};

/**
 * Get statistics about the database
 */
export const getQuizStats = () => ({
  totalQuestions: bibleQuizQuestions.length,
  categories: getAllCategories().reduce((acc, cat) => {
    acc[cat] = getQuestionsByCategory(cat as QuizQuestion['category']).length;
    return acc;
  }, {} as Record<string, number>),
  difficulties: {
    easy: getQuestionsByDifficulty('easy').length,
    medium: getQuestionsByDifficulty('medium').length,
    hard: getQuestionsByDifficulty('hard').length
  },
  books: getAllBooks().reduce((acc, book) => {
    acc[book] = getQuestionsByBook(book).length;
    return acc;
  }, {} as Record<string, number>)
});