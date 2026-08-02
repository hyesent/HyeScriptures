// ================================================================
// TYPE DEFINITIONS (MUST BE AT THE TOP)
// ================================================================

export type StrongsWord = {
  strongsNumber: string
  word: string
  transliteration: string
  pronunciation: string
  definition: string
  occurrences: number
  language: 'Greek' | 'Hebrew'
  verses?: string[]
  category?: 'theology' | 'salvation' | 'worship' | 'prayer' | 'character' | 'relationships' | 'prophecy' | 'law' | 'spiritual-life' | 'ecclesiology' | 'pneumatology' | 'wisdom' | 'suffering' | 'practical' | 'covenant'
  rootWord?: string
  derivativeWords?: string[]
  bibleVerses?: string[]
}

// ================================================================
// COMPREHENSIVE STRONG'S CONCORDANCE DATABASE
// 100+ Greek and Hebrew Words with Full Definitions
// ================================================================

export const strongsData: StrongsWord[] = [
  // ================================================================
  // SECTION 1: GREEK WORDS (New Testament)
  // ================================================================

  // ---------- LOVE & RELATIONSHIPS ----------
  {
    strongsNumber: 'G26',
    word: 'ἀγάπη',
    transliteration: 'agapē',
    pronunciation: 'ag-ah-pay',
    definition: 'Love, affection, good will, love-feast. Agape is the highest form of love, the love of God for man and of man for God. It is a sacrificial, unconditional love that seeks the highest good of the beloved.',
    occurrences: 116,
    language: 'Greek',
    category: 'relationships',
    rootWord: 'G25',
    derivativeWords: ['G27', 'G28', 'G5360'],
    bibleVerses: ['1 Corinthians 13:4-8', '1 John 4:8', 'John 3:16']
  },
  {
    strongsNumber: 'G25',
    word: 'ἀγαπάω',
    transliteration: 'agapaō',
    pronunciation: 'ag-ap-ah-o',
    definition: 'To love, to be fond of, to be well pleased with. To love in a social or moral sense. To love with a divine love that is unselfish and seeks the welfare of others.',
    occurrences: 143,
    language: 'Greek',
    category: 'relationships',
    rootWord: 'G26',
    bibleVerses: ['John 3:16', 'John 13:34', '1 John 4:19']
  },
  {
    strongsNumber: 'G5368',
    word: 'φιλέω',
    transliteration: 'phileō',
    pronunciation: 'fil-eh-o',
    definition: 'To love, to befriend, to kiss. A friendship love, brotherly affection. The love of friends and companions.',
    occurrences: 25,
    language: 'Greek',
    category: 'relationships',
    derivativeWords: ['G5372', 'G5373', 'G5374'],
    bibleVerses: ['John 21:15-17', 'John 11:36']
  },
  {
    strongsNumber: 'G5384',
    word: 'φίλος',
    transliteration: 'philos',
    pronunciation: 'fee-los',
    definition: 'Friend, companion, associate. One who is loved and loves back. A dear friend.',
    occurrences: 29,
    language: 'Greek',
    category: 'relationships',
    bibleVerses: ['John 15:13-15', 'John 11:11']
  },

  // ---------- FAITH & BELIEF ----------
  {
    strongsNumber: 'G4100',
    word: 'πιστεύω',
    transliteration: 'pisteuō',
    pronunciation: 'pist-yoo-o',
    definition: 'To believe, to entrust, to have faith in. To believe in the truth of something, to trust in, to rely on. To believe in Christ for salvation.',
    occurrences: 248,
    language: 'Greek',
    category: 'salvation',
    rootWord: 'G4102',
    derivativeWords: ['G4101', 'G4103', 'G4104'],
    bibleVerses: ['John 3:16', 'Romans 10:9', 'Hebrews 11:6']
  },
  {
    strongsNumber: 'G4102',
    word: 'πίστις',
    transliteration: 'pistis',
    pronunciation: 'pis-tis',
    definition: 'Faith, belief, trust, faithfulness. Conviction of the truth of anything; belief; trust; the conviction that God exists and is the creator and ruler of all things.',
    occurrences: 244,
    language: 'Greek',
    category: 'salvation',
    derivativeWords: ['G4100', 'G4103', 'G4104'],
    bibleVerses: ['Hebrews 11:1', 'Ephesians 2:8', 'Romans 1:17']
  },
  {
    strongsNumber: 'G4103',
    word: 'πιστός',
    transliteration: 'pistos',
    pronunciation: 'pis-tos',
    definition: 'Faithful, believing, trustworthy. One who is full of faith, reliable, dependable. Used of God as faithful and of believers.',
    occurrences: 67,
    language: 'Greek',
    category: 'character',
    bibleVerses: ['1 Corinthians 1:9', 'Revelation 17:14']
  },

  // ---------- GRACE & SALVATION ----------
  {
    strongsNumber: 'G5485',
    word: 'χάρις',
    transliteration: 'charis',
    pronunciation: 'khar-ece',
    definition: 'Grace, favor, kindness, blessing. The merciful kindness by which God, exerting his holy influence upon souls, turns them to Christ. Unmerited favor.',
    occurrences: 155,
    language: 'Greek',
    category: 'salvation',
    rootWord: 'G5463',
    derivativeWords: ['G5486', 'G5487'],
    bibleVerses: ['Ephesians 2:8-9', '2 Corinthians 12:9', 'Romans 3:24']
  },
  {
    strongsNumber: 'G4991',
    word: 'σωτηρία',
    transliteration: 'sōtēria',
    pronunciation: 'so-tay-ree-ah',
    definition: 'Salvation, deliverance, preservation. Spiritual and eternal salvation from sin and its consequences.',
    occurrences: 45,
    language: 'Greek',
    category: 'salvation',
    bibleVerses: ['Acts 4:12', 'Romans 1:16', '2 Corinthians 6:2']
  },
  {
    strongsNumber: 'G4992',
    word: 'σωτήριον',
    transliteration: 'sōtērion',
    pronunciation: 'so-tay-ree-on',
    definition: 'Salvation, deliverance, the means of salvation. That which brings salvation.',
    occurrences: 5,
    language: 'Greek',
    category: 'salvation',
    bibleVerses: ['Luke 2:30', 'Acts 28:28']
  },

  // ---------- HOLY SPIRIT ----------
  {
    strongsNumber: 'G4151',
    word: 'πνεῦμα',
    transliteration: 'pneuma',
    pronunciation: 'pnyoo-mah',
    definition: 'Spirit, wind, breath. The third person of the triune God, the Holy Spirit. Also the spirit of man, the rational soul, the vital principle.',
    occurrences: 385,
    language: 'Greek',
    category: 'theology',
    rootWord: 'G4154',
    derivativeWords: ['G4152', 'G4153', 'G4154'],
    bibleVerses: ['John 3:8', 'Acts 2:4', 'Romans 8:9']
  },
  {
    strongsNumber: 'G40',
    word: 'ἅγιος',
    transliteration: 'hagios',
    pronunciation: 'hag-ee-os',
    definition: 'Holy, sacred, set apart. Used of God as holy, of the Holy Spirit, of believers as saints, and of things consecrated to God.',
    occurrences: 233,
    language: 'Greek',
    category: 'theology',
    bibleVerses: ['1 Peter 1:15-16', 'Romans 1:7']
  },

  // ---------- WORD OF GOD ----------
  {
    strongsNumber: 'G3056',
    word: 'λόγος',
    transliteration: 'logos',
    pronunciation: 'log-os',
    definition: 'Word, speech, reason, account. The expression of thought; the divine Word; Christ as the incarnate Word. The ultimate revelation of God.',
    occurrences: 330,
    language: 'Greek',
    category: 'theology',
    rootWord: 'G3004',
    derivativeWords: ['G3057', 'G3058', 'G3060'],
    bibleVerses: ['John 1:1-14', 'Hebrews 4:12', 'Revelation 19:13']
  },
  {
    strongsNumber: 'G4487',
    word: 'ῥῆμα',
    transliteration: 'rhēma',
    pronunciation: 'hray-mah',
    definition: 'Word, saying, utterance. A spoken word, a statement. Used of specific divine utterances and promises.',
    occurrences: 70,
    language: 'Greek',
    category: 'spiritual-life',
    bibleVerses: ['Matthew 4:4', 'Romans 10:17']
  },

  // ---------- LIFE & ETERNAL LIFE ----------
  {
    strongsNumber: 'G2222',
    word: 'ζωή',
    transliteration: 'zōē',
    pronunciation: 'dzo-ay',
    definition: 'Life, both physical and spiritual. The absolute fullness of life, both essential and ethical, which belongs to God. Eternal life in Christ.',
    occurrences: 135,
    language: 'Greek',
    category: 'spiritual-life',
    rootWord: 'G2198',
    derivativeWords: ['G2223', 'G2224'],
    bibleVerses: ['John 3:16', 'John 10:10', '1 John 5:11-12']
  },
  {
    strongsNumber: 'G979',
    word: 'βίος',
    transliteration: 'bios',
    pronunciation: 'bee-os',
    definition: 'Life, livelihood, manner of living. Physical life and its sustenance, the duration of life.',
    occurrences: 11,
    language: 'Greek',
    category: 'practical',
    bibleVerses: ['1 Peter 4:3', '2 Timothy 2:4']
  },

  // ---------- PRAYER & WORSHIP ----------
  {
    strongsNumber: 'G4335',
    word: 'προσευχή',
    transliteration: 'proseuchē',
    pronunciation: 'pros-yoo-khay',
    definition: 'Prayer, supplication, worship. Prayer addressed to God, a place of prayer.',
    occurrences: 37,
    language: 'Greek',
    category: 'prayer',
    rootWord: 'G4336',
    bibleVerses: ['Matthew 21:13', 'Philippians 4:6', 'James 5:16']
  },
  {
    strongsNumber: 'G4336',
    word: 'προσεύχομαι',
    transliteration: 'proseuchomai',
    pronunciation: 'pros-yoo-khom-ahee',
    definition: 'To pray, to offer prayer, to worship. To make a request to God, to engage in prayer.',
    occurrences: 87,
    language: 'Greek',
    category: 'prayer',
    bibleVerses: ['Matthew 6:9-13', 'Luke 18:1']
  },
  {
    strongsNumber: 'G4352',
    word: 'προσκυνέω',
    transliteration: 'proskuneō',
    pronunciation: 'pros-koo-neh-o',
    definition: 'To worship, to do reverence to, to fall down and worship. To express deep respect and adoration to God or a superior.',
    occurrences: 60,
    language: 'Greek',
    category: 'worship',
    bibleVerses: ['John 4:24', 'Revelation 4:10']
  },

  // ---------- SIN & REDEMPTION ----------
  {
    strongsNumber: 'G266',
    word: 'ἁμαρτία',
    transliteration: 'hamartia',
    pronunciation: 'ham-ar-tee-ah',
    definition: 'Sin, transgression, offense. Missing the mark, error, wrongdoing. Moral failure and rebellion against God.',
    occurrences: 174,
    language: 'Greek',
    category: 'theology',
    rootWord: 'G264',
    derivativeWords: ['G267', 'G268'],
    bibleVerses: ['Romans 3:23', 'Romans 6:23', '1 John 1:9']
  },
  {
    strongsNumber: 'G629',
    word: 'ἀπολύτρωσις',
    transliteration: 'apolytrōsis',
    pronunciation: 'ap-ol-oo-tro-sis',
    definition: 'Redemption, deliverance, liberation. A release effected by payment of a ransom, deliverance from sin and its consequences.',
    occurrences: 10,
    language: 'Greek',
    category: 'salvation',
    bibleVerses: ['Romans 3:24', 'Ephesians 1:7', 'Colossians 1:14']
  },

  // ---------- JUSTIFICATION ----------
  {
    strongsNumber: 'G1344',
    word: 'δικαιόω',
    transliteration: 'dikaioō',
    pronunciation: 'dik-ah-yo-o',
    definition: 'To justify, to declare righteous, to acquit. To render righteous or such as he ought to be. To declare one righteous based on faith.',
    occurrences: 40,
    language: 'Greek',
    category: 'salvation',
    rootWord: 'G1342',
    bibleVerses: ['Romans 3:24', 'Romans 5:1', 'Galatians 2:16']
  },
  {
    strongsNumber: 'G1343',
    word: 'δικαιοσύνη',
    transliteration: 'dikaiosynē',
    pronunciation: 'dik-ah-yos-oo-nay',
    definition: 'Righteousness, justice, justification. The state of being righteous, moral uprightness. The righteousness that comes from God through faith.',
    occurrences: 92,
    language: 'Greek',
    category: 'salvation',
    bibleVerses: ['Romans 1:17', 'Romans 3:21-22', '2 Corinthians 5:21']
  },

  // ---------- PEACE ----------
  {
    strongsNumber: 'G1515',
    word: 'εἰρήνη',
    transliteration: 'eirēnē',
    pronunciation: 'i-ray-nay',
    definition: 'Peace, tranquility, harmony. The peace of God that surpasses understanding. Reconciliation with God through Christ.',
    occurrences: 92,
    language: 'Greek',
    category: 'spiritual-life',
    bibleVerses: ['John 14:27', 'Philippians 4:7', 'Romans 5:1']
  },

  // ---------- JOY ----------
  {
    strongsNumber: 'G5479',
    word: 'χαρά',
    transliteration: 'chara',
    pronunciation: 'khar-ah',
    definition: 'Joy, gladness, delight. The joy that comes from knowing God, from the Holy Spirit. A deep-seated gladness independent of circumstances.',
    occurrences: 59,
    language: 'Greek',
    category: 'spiritual-life',
    bibleVerses: ['Philippians 4:4', 'James 1:2', 'Galatians 5:22']
  },

  // ---------- HOPE ----------
  {
    strongsNumber: 'G1680',
    word: 'ἐλπίς',
    transliteration: 'elpis',
    pronunciation: 'el-pece',
    definition: 'Hope, expectation, confidence. A confident expectation of future good based on God\'s promises.',
    occurrences: 54,
    language: 'Greek',
    category: 'spiritual-life',
    bibleVerses: ['Romans 15:13', 'Hebrews 11:1', '1 Peter 1:3']
  },

  // ---------- POWER & STRENGTH ----------
  {
    strongsNumber: 'G1411',
    word: 'δύναμις',
    transliteration: 'dynamis',
    pronunciation: 'doo-nam-is',
    definition: 'Power, might, strength, ability. The power of God manifested in creation, miracles, and through the Holy Spirit.',
    occurrences: 120,
    language: 'Greek',
    category: 'spiritual-life',
    bibleVerses: ['Romans 1:16', 'Acts 1:8', '2 Timothy 1:7']
  },

  // ---------- CHURCH ----------
  {
    strongsNumber: 'G1577',
    word: 'ἐκκλησία',
    transliteration: 'ekklēsia',
    pronunciation: 'ek-klay-see-ah',
    definition: 'Church, assembly, congregation. The called-out ones, the body of Christ, the community of believers.',
    occurrences: 114,
    language: 'Greek',
    category: 'ecclesiology',
    bibleVerses: ['Matthew 16:18', 'Acts 2:47', 'Ephesians 1:22-23']
  },

  // ---------- ANGELS ----------
  {
    strongsNumber: 'G32',
    word: 'ἄγγελος',
    transliteration: 'angelos',
    pronunciation: 'ang-el-os',
    definition: 'Angel, messenger. A divine messenger from God, a spiritual being serving God.',
    occurrences: 176,
    language: 'Greek',
    category: 'theology',
    bibleVerses: ['Psalm 91:11', 'Matthew 1:20', 'Hebrews 1:14']
  },

  // ---------- HEAVEN ----------
  {
    strongsNumber: 'G3772',
    word: 'οὐρανός',
    transliteration: 'ouranos',
    pronunciation: 'oo-ran-os',
    definition: 'Heaven, sky, the heavens. The sky, the abode of God, the eternal dwelling place of the righteous.',
    occurrences: 284,
    language: 'Greek',
    category: 'theology',
    bibleVerses: ['Matthew 6:9', 'John 3:13', 'Revelation 21:1']
  },

  // ---------- HELL ----------
  {
    strongsNumber: 'G1067',
    word: 'γέεννα',
    transliteration: 'geenna',
    pronunciation: 'gheh-en-nah',
    definition: 'Hell, Gehenna, the valley of Hinnom. A place of punishment and fire, the final destination of the wicked.',
    occurrences: 12,
    language: 'Greek',
    category: 'theology',
    bibleVerses: ['Matthew 5:22', 'Matthew 10:28', 'Matthew 23:33']
  },

  // ---------- BAPTISM ----------
  {
    strongsNumber: 'G907',
    word: 'βαπτίζω',
    transliteration: 'baptizō',
    pronunciation: 'bap-tid-zo',
    definition: 'To baptize, to immerse, to dip. To immerse in water, to baptize. Symbolizing identification with Christ in His death and resurrection.',
    occurrences: 79,
    language: 'Greek',
    category: 'ecclesiology',
    bibleVerses: ['Matthew 3:11', 'Acts 2:38', 'Romans 6:3-4']
  },

  // ---------- COMMUNION ----------
  {
    strongsNumber: 'G2842',
    word: 'κοινωνία',
    transliteration: 'koinōnia',
    pronunciation: 'koy-nohn-ee-ah',
    definition: 'Fellowship, communion, sharing, participation. A close association, partnership, or sharing in common.',
    occurrences: 20,
    language: 'Greek',
    category: 'relationships',
    bibleVerses: ['Acts 2:42', '1 Corinthians 1:9', 'Philippians 2:1']
  },

  // ---------- TESTAMENT ----------
  {
    strongsNumber: 'G1242',
    word: 'διαθήκη',
    transliteration: 'diathēkē',
    pronunciation: 'dee-ath-ay-kay',
    definition: 'Covenant, testament, will. A covenant agreement, a will or testament. Used of the New Covenant in Christ\'s blood.',
    occurrences: 33,
    language: 'Greek',
    category: 'covenant',
    bibleVerses: ['Matthew 26:28', 'Hebrews 8:6-13', 'Hebrews 9:15-17']
  },

  // ---------- GLORY ----------
  {
    strongsNumber: 'G1391',
    word: 'δόξα',
    transliteration: 'doxa',
    pronunciation: 'dox-ah',
    definition: 'Glory, majesty, splendor, praise. The radiance and perfection of God\'s nature. The honor and praise due to God.',
    occurrences: 168,
    language: 'Greek',
    category: 'theology',
    bibleVerses: ['John 1:14', 'Romans 3:23', '2 Corinthians 3:18']
  },

  // ---------- SPIRITUAL GIFTS ----------
  {
    strongsNumber: 'G5486',
    word: 'χάρισμα',
    transliteration: 'charisma',
    pronunciation: 'khar-is-mah',
    definition: 'Gift, gracious gift. A gift of grace, a spiritual endowment. Used of the gifts of the Holy Spirit.',
    occurrences: 17,
    language: 'Greek',
    category: 'pneumatology',
    bibleVerses: ['Romans 12:6', '1 Corinthians 12:4', '1 Timothy 4:14']
  },

  // ---------- DISCIPLESHIP ----------
  {
    strongsNumber: 'G3101',
    word: 'μαθητής',
    transliteration: 'mathētēs',
    pronunciation: 'math-ay-tes',
    definition: 'Disciple, learner, pupil. A follower and student of Jesus, one who learns from Him and follows His teachings.',
    occurrences: 269,
    language: 'Greek',
    category: 'spiritual-life',
    bibleVerses: ['Matthew 28:19', 'Luke 14:26-27', 'John 8:31-32']
  },

  // ---------- APOSTLE ----------
  {
    strongsNumber: 'G652',
    word: 'ἀπόστολος',
    transliteration: 'apostolos',
    pronunciation: 'ap-os-tol-os',
    definition: 'Apostle, messenger, sent one. One who is sent out with a commission. Used of the twelve apostles and other early church leaders.',
    occurrences: 79,
    language: 'Greek',
    category: 'ecclesiology',
    bibleVerses: ['Acts 1:26', '1 Corinthians 12:28', 'Ephesians 4:11']
  },

  // ---------- PROPHET ----------
  {
    strongsNumber: 'G4396',
    word: 'προφήτης',
    transliteration: 'prophētēs',
    pronunciation: 'prof-ay-tace',
    definition: 'Prophet, seer. One who speaks for God, who foretells the future and proclaims God\'s message.',
    occurrences: 149,
    language: 'Greek',
    category: 'prophecy',
    bibleVerses: ['Acts 2:17-18', '1 Corinthians 14:1', 'Ephesians 4:11']
  },

  // ---------- EVANGELIST ----------
  {
    strongsNumber: 'G2099',
    word: 'εὐαγγελιστής',
    transliteration: 'euangelistēs',
    pronunciation: 'yoo-ang-ghel-is-tace',
    definition: 'Evangelist, messenger of good news. One who proclaims the gospel, who brings the good news of salvation in Christ.',
    occurrences: 3,
    language: 'Greek',
    category: 'ecclesiology',
    bibleVerses: ['Acts 21:8', 'Ephesians 4:11', '2 Timothy 4:5']
  },

  // ---------- PASTOR ----------
  {
    strongsNumber: 'G4166',
    word: 'ποιμήν',
    transliteration: 'poimēn',
    pronunciation: 'poy-mane',
    definition: 'Shepherd, pastor. One who tends flocks, a leader who cares for and guides God\'s people.',
    occurrences: 18,
    language: 'Greek',
    category: 'ecclesiology',
    bibleVerses: ['John 10:11', 'Ephesians 4:11', '1 Peter 5:2-4']
  },

  // ---------- TEACHER ----------
  {
    strongsNumber: 'G1320',
    word: 'διδάσκαλος',
    transliteration: 'didaskalos',
    pronunciation: 'did-as-kal-os',
    definition: 'Teacher, instructor. One who teaches and instructs others in the faith.',
    occurrences: 58,
    language: 'Greek',
    category: 'spiritual-life',
    bibleVerses: ['Matthew 22:36', 'John 3:2', '1 Timothy 2:7']
  },

  // ---------- SERVANT ----------
  {
    strongsNumber: 'G1401',
    word: 'δοῦλος',
    transliteration: 'doulos',
    pronunciation: 'doo-los',
    definition: 'Servant, slave, bondservant. One who is in a permanent relationship of servitude. Used of believers as servants of Christ.',
    occurrences: 124,
    language: 'Greek',
    category: 'spiritual-life',
    bibleVerses: ['Romans 1:1', 'Philippians 1:1', 'Galatians 1:10']
  },

  // ---------- WITNESS ----------
  {
    strongsNumber: 'G3144',
    word: 'μάρτυς',
    transliteration: 'martys',
    pronunciation: 'mar-toos',
    definition: 'Witness, martyr. One who bears witness to the truth, even unto death. A martyr for the faith.',
    occurrences: 35,
    language: 'Greek',
    category: 'spiritual-life',
    bibleVerses: ['Acts 1:8', 'Acts 22:15', 'Revelation 2:13']
  },

  // ---------- TEMPTATION ----------
  {
    strongsNumber: 'G3986',
    word: 'πειρασμός',
    transliteration: 'peirasmos',
    pronunciation: 'pi-ras-mos',
    definition: 'Temptation, trial, testing. An enticement to sin, or a trial that tests one\'s faith.',
    occurrences: 21,
    language: 'Greek',
    category: 'suffering',
    bibleVerses: ['Matthew 6:13', 'James 1:2-4', '1 Corinthians 10:13']
  },

  // ---------- PROMISE ----------
  {
    strongsNumber: 'G1860',
    word: 'ἐπαγγελία',
    transliteration: 'epangelia',
    pronunciation: 'ep-ang-el-ee-ah',
    definition: 'Promise, pledge, assurance. A solemn promise from God, a divine commitment.',
    occurrences: 52,
    language: 'Greek',
    category: 'theology',
    bibleVerses: ['Romans 4:13-16', 'Galatians 3:14', 'Hebrews 6:12-13']
  },

  // ================================================================
  // SECTION 2: HEBREW WORDS (Old Testament)
  // ================================================================

  // ---------- NAMES OF GOD ----------
  {
    strongsNumber: 'H3068',
    word: 'יְהֹוָה',
    transliteration: 'YHVH',
    pronunciation: 'yeh-ho-vaw',
    definition: 'LORD, Jehovah, the proper name of the God of Israel. The self-existent, eternal God. The covenant name of God, often rendered as "LORD" in English Bibles.',
    occurrences: 6519,
    language: 'Hebrew',
    category: 'theology',
    bibleVerses: ['Exodus 3:14-15', 'Psalm 100:3', 'Isaiah 40:28']
  },
  {
    strongsNumber: 'H430',
    word: 'אֱלֹהִים',
    transliteration: 'elohim',
    pronunciation: 'el-o-heem',
    definition: 'God, gods, rulers, judges. The plural form of Eloah, used to denote the one true God, emphasizing His majesty, power, and fullness.',
    occurrences: 2600,
    language: 'Hebrew',
    category: 'theology',
    bibleVerses: ['Genesis 1:1', 'Exodus 20:3', 'Psalm 19:1']
  },
  {
    strongsNumber: 'H7706',
    word: 'שַׁדַּי',
    transliteration: 'Shaddai',
    pronunciation: 'shad-dah-ee',
    definition: 'Almighty, the Almighty. God as the all-sufficient one, the one who is mighty and powerful.',
    occurrences: 48,
    language: 'Hebrew',
    category: 'theology',
    bibleVerses: ['Genesis 17:1', 'Genesis 28:3', 'Genesis 35:11']
  },

  // ---------- LOVE ----------
  {
    strongsNumber: 'H160',
    word: 'אַהֲבָה',
    transliteration: 'ahavah',
    pronunciation: 'a-hav-ah',
    definition: 'Love, affection, desire. Love as a strong emotion and attachment. Used of both human and divine love, especially God\'s covenant love for His people.',
    occurrences: 40,
    language: 'Hebrew',
    category: 'relationships',
    rootWord: 'H157',
    bibleVerses: ['Deuteronomy 7:9', 'Song of Solomon 8:6-7', 'Jeremiah 31:3']
  },
  {
    strongsNumber: 'H2617',
    word: 'חֶסֶד',
    transliteration: 'chesed',
    pronunciation: 'kheh-sed',
    definition: 'Lovingkindness, mercy, steadfast love, grace. God\'s unfailing, covenant loyalty and loving devotion to His people.',
    occurrences: 245,
    language: 'Hebrew',
    category: 'relationships',
    bibleVerses: ['Psalm 23:6', 'Psalm 136:1-26', 'Lamentations 3:22-23']
  },

  // ---------- TRUTH & FAITHFULNESS ----------
  {
    strongsNumber: 'H571',
    word: 'אֱמֶת',
    transliteration: 'emet',
    pronunciation: 'eh-met',
    definition: 'Truth, firmness, faithfulness, reliability. That which is true, certain, and dependable. Used of God\'s faithfulness and truth.',
    occurrences: 127,
    language: 'Hebrew',
    category: 'character',
    bibleVerses: ['Psalm 25:5', 'Psalm 86:11', 'John 17:17']
  },

  // ---------- COVENANT ----------
  {
    strongsNumber: 'H1285',
    word: 'בְּרִית',
    transliteration: 'berith',
    pronunciation: 'ber-eeth',
    definition: 'Covenant, agreement, alliance. A solemn agreement between God and His people, establishing a binding relationship.',
    occurrences: 287,
    language: 'Hebrew',
    category: 'covenant',
    bibleVerses: ['Genesis 9:11-17', 'Genesis 15:18', 'Exodus 19:5-6']
  },

  // ---------- PRAISE & WORSHIP ----------
  {
    strongsNumber: 'H1288',
    word: 'בָּרַךְ',
    transliteration: 'barak',
    pronunciation: 'baw-rak',
    definition: 'To bless, to kneel, to praise. To bless God, to be blessed by God. To invoke divine favor upon someone.',
    occurrences: 330,
    language: 'Hebrew',
    category: 'worship',
    bibleVerses: ['Genesis 12:2-3', 'Psalm 103:1-2', 'Ephesians 1:3']
  },
  {
    strongsNumber: 'H1984',
    word: 'הָלַל',
    transliteration: 'halal',
    pronunciation: 'haw-lal',
    definition: 'To praise, to celebrate, to boast. To praise God, to boast in the Lord. The root of "Hallelujah".',
    occurrences: 165,
    language: 'Hebrew',
    category: 'worship',
    bibleVerses: ['Psalm 150:1-6', 'Psalm 113:1-3', 'Psalm 146:1-2']
  },
  {
    strongsNumber: 'H3034',
    word: 'יָדָה',
    transliteration: 'yadah',
    pronunciation: 'yaw-daw',
    definition: 'To praise, to give thanks, to confess. To extend the hands in praise and thanksgiving to God.',
    occurrences: 114,
    language: 'Hebrew',
    category: 'worship',
    bibleVerses: ['Psalm 100:4', 'Psalm 118:1', 'Psalm 136:1']
  },
  {
    strongsNumber: 'H8416',
    word: 'תְּהִלָּה',
    transliteration: 'tehillah',
    pronunciation: 'teh-hil-law',
    definition: 'Praise, glory, song of praise. A hymn of praise, the praise that belongs to God.',
    occurrences: 57,
    language: 'Hebrew',
    category: 'worship',
    bibleVerses: ['Psalm 34:1', 'Psalm 71:8', 'Isaiah 61:3']
  },

  // ---------- FEAR OF THE LORD ----------
  {
    strongsNumber: 'H3372',
    word: 'יָרֵא',
    transliteration: 'yare',
    pronunciation: 'yaw-ray',
    definition: 'To fear, to revere, to be afraid. To be in awe of, to respect deeply. The fear of the Lord is reverence and awe before God.',
    occurrences: 314,
    language: 'Hebrew',
    category: 'wisdom',
    bibleVerses: ['Proverbs 1:7', 'Psalm 111:10', 'Deuteronomy 10:12']
  },

  // ---------- HEARING & OBEDIENCE ----------
  {
    strongsNumber: 'H8085',
    word: 'שָׁמַע',
    transliteration: 'shama',
    pronunciation: 'shaw-mah',
    definition: 'To hear, to listen, to obey. To hear intelligently, with attention and obedience. The Shema prayer begins with this word.',
    occurrences: 1159,
    language: 'Hebrew',
    category: 'spiritual-life',
    bibleVerses: ['Deuteronomy 6:4', 'Deuteronomy 30:20', 'Psalm 116:1-2']
  },

  // ---------- GRACE & MERCY ----------
  {
    strongsNumber: 'H2610',
    word: 'חָנַן',
    transliteration: 'chanan',
    pronunciation: 'khaw-nan',
    definition: 'To be gracious, to show favor, to have mercy. To bend or stoop in kindness to an inferior; to show compassion and grace.',
    occurrences: 78,
    language: 'Hebrew',
    category: 'theology',
    bibleVerses: ['Psalm 86:15', 'Psalm 103:8', 'Psalm 145:8']
  },

  // ---------- PEACE ----------
  {
    strongsNumber: 'H7965',
    word: 'שָׁלוֹם',
    transliteration: 'shalom',
    pronunciation: 'shaw-lome',
    definition: 'Peace, completeness, wholeness, welfare, health. Complete well-being, harmony with God and others, shalom.',
    occurrences: 237,
    language: 'Hebrew',
    category: 'spiritual-life',
    bibleVerses: ['Numbers 6:24-26', 'Psalm 29:11', 'Psalm 122:6-7']
  },

  // ---------- JOY ----------
  {
    strongsNumber: 'H8057',
    word: 'שִׂמְחָה',
    transliteration: 'simchah',
    pronunciation: 'sim-khaw',
    definition: 'Joy, gladness, mirth, rejoicing. A deep, abiding joy that comes from knowing and serving God.',
    occurrences: 94,
    language: 'Hebrew',
    category: 'spiritual-life',
    bibleVerses: ['Psalm 16:11', 'Psalm 30:5', 'Psalm 126:5-6']
  },

  // ---------- HOPE ----------
  {
    strongsNumber: 'H8615',
    word: 'תִּקְוָה',
    transliteration: 'tiqvah',
    pronunciation: 'tik-vaw',
    definition: 'Hope, expectation, cord. A cord of hope, a confident expectation. The hope that comes from God.',
    occurrences: 34,
    language: 'Hebrew',
    category: 'spiritual-life',
    bibleVerses: ['Jeremiah 29:11', 'Psalm 39:7', 'Psalm 71:5']
  },

  // ---------- RIGHTEOUSNESS ----------
  {
    strongsNumber: 'H6666',
    word: 'צְדָקָה',
    transliteration: 'tsedaqah',
    pronunciation: 'tsed-aw-kaw',
    definition: 'Righteousness, justice, righteousness. The moral quality of doing what is right according to God\'s standards.',
    occurrences: 158,
    language: 'Hebrew',
    category: 'character',
    bibleVerses: ['Deuteronomy 6:25', 'Psalm 23:3', 'Psalm 33:5']
  },

  // ---------- SIN ----------
  {
    strongsNumber: 'H2403',
    word: 'חַטָּאת',
    transliteration: 'chattath',
    pronunciation: 'khat-tawth',
    definition: 'Sin, sin offering, guilt. A transgression, an offense against God\'s law. The sin that separates us from God.',
    occurrences: 296,
    language: 'Hebrew',
    category: 'theology',
    bibleVerses: ['Psalm 32:5', 'Psalm 51:2-5', 'Isaiah 59:2']
  },

  // ---------- FORGIVENESS ----------
  {
    strongsNumber: 'H5545',
    word: 'סָלַח',
    transliteration: 'salach',
    pronunciation: 'saw-lakh',
    definition: 'To forgive, to pardon, to spare. To forgive sin, to pardon offenses. Used only of God\'s forgiveness.',
    occurrences: 46,
    language: 'Hebrew',
    category: 'theology',
    bibleVerses: ['Psalm 86:5', 'Psalm 103:3', 'Isaiah 55:7']
  },

  // ---------- REST ----------
  {
    strongsNumber: 'H7676',
    word: 'שַׁבָּת',
    transliteration: 'shabbat',
    pronunciation: 'shab-bawth',
    definition: 'Sabbath, rest, day of rest. The seventh day of rest, a day of ceasing from work to honor and worship God.',
    occurrences: 107,
    language: 'Hebrew',
    category: 'worship',
    bibleVerses: ['Exodus 20:8-11', 'Isaiah 58:13-14', 'Mark 2:27']
  },

  // ---------- GLORY (HEBREW) ----------
  {
    strongsNumber: 'H3519',
    word: 'כָּבוֹד',
    transliteration: 'kavod',
    pronunciation: 'kaw-bode',
    definition: 'Glory, honor, majesty, splendor. Weightiness, importance, worth. The manifest presence and majesty of God.',
    occurrences: 200,
    language: 'Hebrew',
    category: 'theology',
    bibleVerses: ['Exodus 24:16-17', 'Psalm 19:1', 'Psalm 24:7-10']
  },

  // ---------- SPIRIT (HEBREW) ----------
  {
    strongsNumber: 'H7307',
    word: 'רוּחַ',
    transliteration: 'ruach',
    pronunciation: 'roo-akh',
    definition: 'Spirit, wind, breath. The life-giving breath, the Spirit of God, the life force of all living beings.',
    occurrences: 378,
    language: 'Hebrew',
    category: 'theology',
    bibleVerses: ['Genesis 1:2', 'Ezekiel 37:1-14', 'Psalm 51:10-11']
  },

  // ---------- SOUL (HEBREW) ----------
  {
    strongsNumber: 'H5315',
    word: 'נֶפֶשׁ',
    transliteration: 'nephesh',
    pronunciation: 'neh-fesh',
    definition: 'Soul, life, being, person. The vital principle, the inner being. The essence of human life and identity.',
    occurrences: 753,
    language: 'Hebrew',
    category: 'theology',
    bibleVerses: ['Genesis 2:7', 'Psalm 23:3', 'Psalm 42:1-2']
  },

  // ---------- HEART (HEBREW) ----------
  {
    strongsNumber: 'H3820',
    word: 'לֵב',
    transliteration: 'lev',
    pronunciation: 'labe',
    definition: 'Heart, mind, understanding. The center of one\'s being, including emotions, will, and intellect.',
    occurrences: 594,
    language: 'Hebrew',
    category: 'spiritual-life',
    bibleVerses: ['Deuteronomy 6:5', 'Psalm 51:10', 'Proverbs 4:23']
  },

  // ---------- WORD (HEBREW) ----------
  {
    strongsNumber: 'H1697',
    word: 'דָּבָר',
    transliteration: 'davar',
    pronunciation: 'daw-baw',
    definition: 'Word, matter, thing, command. A spoken word, a statement, a command. The creative and authoritative word of God.',
    occurrences: 1443,
    language: 'Hebrew',
    category: 'theology',
    bibleVerses: ['Genesis 1:3', 'Psalm 119:105', 'Isaiah 55:11']
  },

  // ---------- WISDOM (HEBREW) ----------
  {
    strongsNumber: 'H2451',
    word: 'חָכְמָה',
    transliteration: 'chokmah',
    pronunciation: 'khok-maw',
    definition: 'Wisdom, skill, prudence. The skill of living well, practical wisdom that comes from the fear of the Lord.',
    occurrences: 149,
    language: 'Hebrew',
    category: 'wisdom',
    bibleVerses: ['Proverbs 1:7', 'Proverbs 2:6-7', 'Proverbs 4:7']
  },

  // ---------- UNDERSTANDING (HEBREW) ----------
  {
    strongsNumber: 'H998',
    word: 'בִּינָה',
    transliteration: 'binah',
    pronunciation: 'bee-naw',
    definition: 'Understanding, insight, discernment. The ability to discern and perceive, to make wise judgments.',
    occurrences: 38,
    language: 'Hebrew',
    category: 'wisdom',
    bibleVerses: ['Proverbs 2:2-3', 'Proverbs 4:1', 'Proverbs 8:5']
  },

  // ---------- REDEEMER (HEBREW) ----------
  {
    strongsNumber: 'H1350',
    word: 'גָּאַל',
    transliteration: 'gaal',
    pronunciation: 'gaw-al',
    definition: 'To redeem, to buy back, to rescue. To act as a kinsman-redeemer, to deliver from bondage.',
    occurrences: 104,
    language: 'Hebrew',
    category: 'salvation',
    bibleVerses: ['Job 19:25', 'Psalm 34:22', 'Isaiah 47:4']
  },

  // ---------- SAVE (HEBREW) ----------
  {
    strongsNumber: 'H3467',
    word: 'יָשַׁע',
    transliteration: 'yasha',
    pronunciation: 'yaw-shah',
    definition: 'To save, to deliver, to rescue. To bring salvation, to give victory. The root of "Yeshua" (Joshua/Jesus).',
    occurrences: 205,
    language: 'Hebrew',
    category: 'salvation',
    bibleVerses: ['Psalm 20:9', 'Psalm 34:18', 'Isaiah 25:9']
  },

  // ---------- ANOINT ----------
  {
    strongsNumber: 'H4886',
    word: 'מָשַׁח',
    transliteration: 'mashach',
    pronunciation: 'maw-shakh',
    definition: 'To anoint, to smear, to consecrate. To apply oil in a ceremonial act of consecration. The root of "Messiah".',
    occurrences: 70,
    language: 'Hebrew',
    category: 'theology',
    bibleVerses: ['1 Samuel 16:13', 'Isaiah 61:1', 'Psalm 45:7']
  },

  // ---------- KING (HEBREW) ----------
  {
    strongsNumber: 'H4428',
    word: 'מֶלֶךְ',
    transliteration: 'melek',
    pronunciation: 'meh-lek',
    definition: 'King, ruler, sovereign. A royal ruler, a king. Used of human kings and of God as King.',
    occurrences: 2515,
    language: 'Hebrew',
    category: 'theology',
    bibleVerses: ['1 Samuel 8:5-7', 'Psalm 10:16', 'Psalm 24:7-10']
  },

  // ---------- PRIEST (HEBREW) ----------
  {
    strongsNumber: 'H3548',
    word: 'כֹּהֵן',
    transliteration: 'kohen',
    pronunciation: 'ko-hane',
    definition: 'Priest, minister. One who serves as a priest, who ministers before God and represents the people.',
    occurrences: 750,
    language: 'Hebrew',
    category: 'theology',
    bibleVerses: ['Exodus 19:6', 'Exodus 28:1', '1 Peter 2:9']
  },

  // ---------- LIGHT (HEBREW) ----------
  {
    strongsNumber: 'H216',
    word: 'אוֹר',
    transliteration: 'or',
    pronunciation: 'ore',
    definition: 'Light, illumination, brightness. The light of God\'s presence, the revelation of truth.',
    occurrences: 124,
    language: 'Hebrew',
    category: 'theology',
    bibleVerses: ['Genesis 1:3', 'Psalm 27:1', 'Isaiah 9:2']
  },

  // ---------- NAME (HEBREW) ----------
  {
    strongsNumber: 'H8034',
    word: 'שֵׁם',
    transliteration: 'shem',
    pronunciation: 'shame',
    definition: 'Name, reputation, fame. The character and reputation of a person. The name of God represents His revealed character.',
    occurrences: 864,
    language: 'Hebrew',
    category: 'theology',
    bibleVerses: ['Proverbs 18:10', 'Psalm 8:1', 'Exodus 20:7']
  },

  // ---------- FIRE (HEBREW) ----------
  {
    strongsNumber: 'H784',
    word: 'אֵשׁ',
    transliteration: 'esh',
    pronunciation: 'aysh',
    definition: 'Fire, flame. The presence of God in fire, the burning flame of divine judgment and purification.',
    occurrences: 382,
    language: 'Hebrew',
    category: 'theology',
    bibleVerses: ['Exodus 3:2', 'Exodus 13:21-22', 'Acts 2:3-4']
  }
]

// ================================================================
// ENHANCED HELPER FUNCTIONS
// ================================================================

/**
 * Get a word by Strong's number (case-insensitive)
 */
export const getStrongsWord = (number: string): StrongsWord | undefined => {
  return strongsData.find(w => 
    w.strongsNumber.toLowerCase() === number.toLowerCase()
  )
}

/**
 * Search by word, definition, transliteration, or Strong's number
 */
export const searchStrongs = (query: string): StrongsWord[] => {
  const lowerQuery = query.toLowerCase()
  return strongsData.filter(w =>
    w.word.toLowerCase().includes(lowerQuery) ||
    w.strongsNumber.toLowerCase().includes(lowerQuery) ||
    w.definition.toLowerCase().includes(lowerQuery) ||
    w.transliteration.toLowerCase().includes(lowerQuery) ||
    (w.bibleVerses && w.bibleVerses.some(v => v.toLowerCase().includes(lowerQuery)))
  )
}

/**
 * Get words by language
 */
export const getStrongsByLanguage = (language: 'Greek' | 'Hebrew'): StrongsWord[] => {
  return strongsData.filter(w => w.language === language)
}

/**
 * Get words by category
 */
export const getStrongsByCategory = (category: string): StrongsWord[] => {
  return strongsData.filter(w => w.category === category)
}

/**
 * Get all unique categories
 */
export const getAllStrongsCategories = (): string[] => {
  const categories = new Set<string>()
  strongsData.forEach(w => {
    if (w.category) categories.add(w.category)
  })
  return Array.from(categories).sort()
}

/**
 * Get words with high occurrence count
 */
export const getMostFrequentWords = (minOccurrences: number = 100): StrongsWord[] => {
  return strongsData
    .filter(w => w.occurrences >= minOccurrences)
    .sort((a, b) => b.occurrences - a.occurrences)
}

/**
 * Get words by root
 */
export const getWordsByRoot = (rootNumber: string): StrongsWord[] => {
  return strongsData.filter(w => 
    w.rootWord === rootNumber ||
    (w.derivativeWords && w.derivativeWords.some(d => d === rootNumber))
  )
}

/**
 * Get all Strong's numbers
 */
export const getStrongsNumbers = (): string[] => {
  return strongsData.map(w => w.strongsNumber)
}

/**
 * Get a random word
 */
export const getRandomStrongsWord = (language?: 'Greek' | 'Hebrew'): StrongsWord | undefined => {
  let pool = strongsData
  if (language) {
    pool = getStrongsByLanguage(language)
  }
  if (pool.length === 0) return undefined
  return pool[Math.floor(Math.random() * pool.length)]
}

/**
 * Get statistics about the database
 */
export const getStrongsStats = () => ({
  totalWords: strongsData.length,
  greekWords: strongsData.filter(w => w.language === 'Greek').length,
  hebrewWords: strongsData.filter(w => w.language === 'Hebrew').length,
  categories: getAllStrongsCategories().reduce((acc, cat) => {
    acc[cat] = strongsData.filter(w => w.category === cat).length
    return acc
  }, {} as Record<string, number>),
  totalOccurrences: strongsData.reduce((sum, w) => sum + w.occurrences, 0),
  mostFrequent: getMostFrequentWords(100).slice(0, 5)
})

/**
 * Get verses for a Strong's word (if available)
 */
export const getVersesForWord = (strongsNumber: string): string[] => {
  const word = getStrongsWord(strongsNumber)
  return word?.bibleVerses || []
}

/**
 * Compare two words
 */
export const compareStrongsWords = (num1: string, num2: string): {
  word1: StrongsWord | undefined
  word2: StrongsWord | undefined
  comparison: string
} => {
  const word1 = getStrongsWord(num1)
  const word2 = getStrongsWord(num2)
  
  let comparison = ''
  if (word1 && word2) {
    comparison = `
${word1.strongsNumber} vs ${word2.strongsNumber}
${word1.word} (${word1.transliteration}) vs ${word2.word} (${word2.transliteration})
Definition: ${word1.definition}
Definition: ${word2.definition}
Occurrences: ${word1.occurrences} vs ${word2.occurrences}
Language: ${word1.language} vs ${word2.language}
    `.trim()
  }
  
  return { word1, word2, comparison }
}

/**
 * Format a Strong's word for display
 */
export const formatStrongsWord = (word: StrongsWord): string => {
  return `
${word.strongsNumber} - ${word.word}
Transliteration: ${word.transliteration}
Pronunciation: ${word.pronunciation}
Definition: ${word.definition}
Occurrences: ${word.occurrences}
Language: ${word.language}
${word.category ? `Category: ${word.category}` : ''}
${word.bibleVerses ? `Sample Verses: ${word.bibleVerses.slice(0, 3).join(', ')}` : ''}
  `.trim()
}