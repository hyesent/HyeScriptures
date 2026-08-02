// ================================================================
// TYPE DEFINITIONS
// ================================================================

export type ProphecyStatus = 'fulfilled' | 'unfulfilled' | 'partial' | 'in-progress'

export type ProphecyCategory = 
  | 'messianic'
  | 'judgment'
  | 'restoration'
  | 'kingdom'
  | 'nations'
  | 'end-times'
  | 'covenant'
  | 'deliverance'

export interface Prophecy {
  id: string
  title: string
  otReference: string
  ntReference?: string
  description: string
  status: ProphecyStatus
  category: ProphecyCategory
  context: string
  fulfillmentDetails?: string
  importance: 1 | 2 | 3 | 4 | 5
  tags: string[]
  otText?: string
  ntText?: string
}

// ================================================================
// PROPHECIES DATA
// ================================================================

export const prophecies: Prophecy[] = [
  {
    id: 'prop-001',
    title: 'Born of a Virgin',
    otReference: 'Isaiah 7:14',
    ntReference: 'Matthew 1:22-23',
    description: 'The Messiah would be born of a virgin',
    status: 'fulfilled',
    category: 'messianic',
    context: 'Isaiah prophesies to King Ahaz about a sign from God',
    fulfillmentDetails: 'Fulfilled in the birth of Jesus Christ to Mary',
    importance: 5,
    tags: ['birth', 'virgin', 'messiah', 'emmanuel'],
    otText: 'Therefore the Lord himself shall give you a sign; Behold, a virgin shall conceive, and bear a son, and shall call his name Immanuel.',
    ntText: 'Behold, a virgin shall be with child, and shall bring forth a son, and they shall call his name Emmanuel, which being interpreted is, God with us.'
  },
  {
    id: 'prop-002',
    title: 'Born in Bethlehem',
    otReference: 'Micah 5:2',
    ntReference: 'Matthew 2:1-6',
    description: 'The Messiah would be born in Bethlehem',
    status: 'fulfilled',
    category: 'messianic',
    context: 'Micah prophesies about the birthplace of the ruler of Israel',
    fulfillmentDetails: 'Fulfilled in the birth of Jesus in Bethlehem',
    importance: 5,
    tags: ['birth', 'bethlehem', 'messiah', 'rulership'],
    otText: 'But thou, Bethlehem Ephratah, though thou be little among the thousands of Judah, yet out of thee shall he come forth unto me that is to be ruler in Israel; whose goings forth have been from of old, from everlasting.',
    ntText: 'And thou Bethlehem, in the land of Judah, art not the least among the princes of Judah: for out of thee shall come a Governor, that shall rule my people Israel.'
  },
  {
    id: 'prop-003',
    title: 'Called Out of Egypt',
    otReference: 'Hosea 11:1',
    ntReference: 'Matthew 2:14-15',
    description: 'The Messiah would be called out of Egypt',
    status: 'fulfilled',
    category: 'messianic',
    context: 'Hosea refers to Israel\'s exodus from Egypt as a pattern',
    fulfillmentDetails: 'Fulfilled when Joseph took Jesus and Mary to Egypt and returned',
    importance: 4,
    tags: ['egypt', 'exodus', 'messiah', 'deliverance'],
    otText: 'When Israel was a child, then I loved him, and called my son out of Egypt.',
    ntText: 'And was there until the death of Herod: that it might be fulfilled which was spoken of the Lord by the prophet, saying, Out of Egypt have I called my son.'
  },
  {
    id: 'prop-004',
    title: 'A Prophet Like Moses',
    otReference: 'Deuteronomy 18:15',
    ntReference: 'Acts 3:22-23',
    description: 'The Messiah would be a prophet like Moses',
    status: 'fulfilled',
    category: 'messianic',
    context: 'Moses promises that God would raise up another prophet like him',
    fulfillmentDetails: 'Fulfilled in Jesus\' prophetic ministry',
    importance: 4,
    tags: ['prophet', 'moses', 'messiah', 'teacher'],
    otText: 'The Lord thy God will raise up unto thee a Prophet from the midst of thee, of thy brethren, like unto me; unto him ye shall hearken.',
    ntText: 'For Moses truly said unto the fathers, A prophet shall the Lord your God raise up unto you of your brethren, like unto me; him shall ye hear in all things whatsoever he shall say unto you.'
  },
  {
    id: 'prop-005',
    title: 'Suffering Servant',
    otReference: 'Isaiah 53:3-5',
    ntReference: 'Matthew 8:16-17',
    description: 'The Messiah would suffer and bear our iniquities',
    status: 'fulfilled',
    category: 'messianic',
    context: 'Isaiah prophesies the suffering servant',
    fulfillmentDetails: 'Fulfilled in Jesus\' passion and crucifixion',
    importance: 5,
    tags: ['suffering', 'servant', 'sacrifice', 'atonement'],
    otText: 'He is despised and rejected of men; a man of sorrows, and acquainted with grief: and we hid as it were our faces from him; he was despised, and we esteemed him not. Surely he hath borne our griefs, and carried our sorrows: yet we did esteem him stricken, smitten of God, and afflicted. But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.',
    ntText: 'When the even was come, they brought unto him many that were possessed with devils: and he cast out the spirits with his word, and healed all that were sick: That it might be fulfilled which was spoken by Esaias the prophet, saying, Himself took our infirmities, and bare our sicknesses.'
  },
  {
    id: 'prop-006',
    title: 'Ride on a Donkey',
    otReference: 'Zechariah 9:9',
    ntReference: 'Matthew 21:4-5',
    description: 'The Messiah would ride into Jerusalem on a donkey',
    status: 'fulfilled',
    category: 'messianic',
    context: 'Zechariah prophesies the humble king',
    fulfillmentDetails: 'Fulfilled in Jesus\' triumphal entry',
    importance: 4,
    tags: ['triumphal entry', 'donkey', 'king', 'humble'],
    otText: 'Rejoice greatly, O daughter of Zion; shout, O daughter of Jerusalem: behold, thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass, and upon a colt the foal of an ass.',
    ntText: 'All this was done, that it might be fulfilled which was spoken by the prophet, saying, Tell ye the daughter of Sion, Behold, thy King cometh unto thee, meek, and sitting upon an ass, and a colt the foal of an ass.'
  },
  {
    id: 'prop-007',
    title: 'Betrayed for 30 Pieces of Silver',
    otReference: 'Zechariah 11:12-13',
    ntReference: 'Matthew 26:14-16',
    description: 'The Messiah would be betrayed for 30 pieces of silver',
    status: 'fulfilled',
    category: 'messianic',
    context: 'Zechariah prophesies the price of betrayal',
    fulfillmentDetails: 'Fulfilled in Judas\' betrayal of Jesus',
    importance: 4,
    tags: ['betrayal', 'silver', 'judas', 'suffering'],
    otText: 'And I said unto them, If ye think good, give me my price; and if not, forbear. So they weighed for my price thirty pieces of silver. And the Lord said unto me, Cast it unto the potter: a goodly price that I was prised at of them. And I took the thirty pieces of silver, and cast them to the potter in the house of the Lord.',
    ntText: 'Then one of the twelve, called Judas Iscariot, went unto the chief priests, And said unto them, What will ye give me, and I will deliver him unto you? And they covenanted with him for thirty pieces of silver.'
  },
  {
    id: 'prop-008',
    title: 'Crucified with Thieves',
    otReference: 'Isaiah 53:12',
    ntReference: 'Matthew 27:38',
    description: 'The Messiah would be numbered with the transgressors',
    status: 'fulfilled',
    category: 'messianic',
    context: 'Isaiah prophesies the suffering servant',
    fulfillmentDetails: 'Fulfilled when Jesus was crucified between two thieves',
    importance: 4,
    tags: ['crucifixion', 'transgressors', 'thieves', 'suffering'],
    otText: 'Therefore will I divide him a portion with the great, and he shall divide the spoil with the strong; because he hath poured out his soul unto death: and he was numbered with the transgressors; and he bare the sin of many, and made intercession for the transgressors.',
    ntText: 'Then were there two thieves crucified with him, one on the right hand, and another on the left.'
  },
  {
    id: 'prop-009',
    title: 'Pierced Hands and Feet',
    otReference: 'Psalm 22:16',
    ntReference: 'John 19:33-37',
    description: 'The Messiah would be pierced',
    status: 'fulfilled',
    category: 'messianic',
    context: 'David prophesies the suffering of the Messiah',
    fulfillmentDetails: 'Fulfilled in Jesus\' crucifixion when his side was pierced',
    importance: 5,
    tags: ['pierced', 'crucifixion', 'hands', 'feet'],
    otText: 'For dogs have compassed me: the assembly of the wicked have inclosed me: they pierced my hands and my feet.',
    ntText: 'But one of the soldiers with a spear pierced his side, and forthwith came there out blood and water. And again another scripture saith, They shall look on him whom they pierced.'
  },
  {
    id: 'prop-010',
    title: 'Garments Divided',
    otReference: 'Psalm 22:18',
    ntReference: 'Matthew 27:35',
    description: 'The Messiah\'s garments would be divided',
    status: 'fulfilled',
    category: 'messianic',
    context: 'David prophesies the dividing of garments',
    fulfillmentDetails: 'Fulfilled at the crucifixion when soldiers cast lots for Jesus\' robe',
    importance: 3,
    tags: ['garments', 'crucifixion', 'soldiers', 'suffering'],
    otText: 'They part my garments among them, and cast lots upon my vesture.',
    ntText: 'And they crucified him, and parted his garments, casting lots: that it might be fulfilled which was spoken by the prophet, They parted my garments among them, and upon my vesture did they cast lots.'
  },
  {
    id: 'prop-011',
    title: 'His Bones Not Broken',
    otReference: 'Psalm 34:20',
    ntReference: 'John 19:33-36',
    description: 'Not a bone of the Messiah would be broken',
    status: 'fulfilled',
    category: 'messianic',
    context: 'David prophesies the protection of the righteous',
    fulfillmentDetails: 'Fulfilled when Jesus\' legs were not broken on the cross',
    importance: 3,
    tags: ['bones', 'crucifixion', 'protection', 'suffering'],
    otText: 'He keepeth all his bones: not one of them is broken.',
    ntText: 'But when they came to Jesus, and saw that he was dead already, they brake not his legs. For these things were done, that the scripture should be fulfilled, A bone of him shall not be broken.'
  },
  {
    id: 'prop-012',
    title: 'Destruction of Babylon',
    otReference: 'Isaiah 13:19-22',
    ntReference: 'Revelation 18:2',
    description: 'Babylon would be destroyed and never inhabited',
    status: 'fulfilled',
    category: 'judgment',
    context: 'Isaiah prophesies judgment on Babylon',
    fulfillmentDetails: 'Babylon was destroyed and remains desolate',
    importance: 4,
    tags: ['babylon', 'judgment', 'destruction', 'nations'],
    otText: 'And Babylon, the glory of kingdoms, the beauty of the Chaldees\' excellency, shall be as when God overthrew Sodom and Gomorrah. It shall never be inhabited, neither shall it be dwelt in from generation to generation.',
    ntText: 'And he cried mightily with a strong voice, saying, Babylon the great is fallen, is fallen, and is become the habitation of devils, and the hold of every foul spirit, and a cage of every unclean and hateful bird.'
  },
  {
    id: 'prop-013',
    title: 'Destruction of Tyre',
    otReference: 'Ezekiel 26:3-5',
    ntReference: 'Acts 12:20-23',
    description: 'Tyre would be destroyed and scraped bare',
    status: 'fulfilled',
    category: 'judgment',
    context: 'Ezekiel prophesies judgment on Tyre',
    fulfillmentDetails: 'Tyre was destroyed by Alexander the Great',
    importance: 3,
    tags: ['tyre', 'judgment', 'destruction', 'nations'],
    otText: 'Therefore thus saith the Lord God; Behold, I am against thee, O Tyrus, and will cause many nations to come up against thee, as the sea causeth his waves to come up. And they shall destroy the walls of Tyrus, and break down her towers: I will also scrape her dust from her, and make her like the top of a rock.',
    ntText: 'And immediately the angel of the Lord smote him, because he gave not God the glory: and he was eaten of worms, and gave up the ghost.'
  },
  {
    id: 'prop-014',
    title: 'Destruction of Jerusalem (70 AD)',
    otReference: 'Daniel 9:26',
    ntReference: 'Matthew 24:2',
    description: 'Jerusalem and the Temple would be destroyed',
    status: 'fulfilled',
    category: 'judgment',
    context: 'Daniel prophesies the destruction of Jerusalem',
    fulfillmentDetails: 'Fulfilled in 70 AD when the Romans destroyed Jerusalem',
    importance: 5,
    tags: ['jerusalem', 'temple', 'judgment', 'destruction'],
    otText: 'And after threescore and two weeks shall Messiah be cut off, but not for himself: and the people of the prince that shall come shall destroy the city and the sanctuary; and the end thereof shall be with a flood, and unto the end of the war desolations are determined.',
    ntText: 'And Jesus said unto them, See ye not all these things? verily I say unto you, There shall not be left here one stone upon another, that shall not be thrown down.'
  },
  {
    id: 'prop-015',
    title: 'Return from Exile',
    otReference: 'Jeremiah 29:10-14',
    ntReference: 'Ezra 1:1-3',
    description: 'Israel would return from Babylonian exile',
    status: 'fulfilled',
    category: 'restoration',
    context: 'Jeremiah prophesies the return from exile after 70 years',
    fulfillmentDetails: 'Fulfilled when Cyrus allowed the Jews to return',
    importance: 4,
    tags: ['exile', 'return', 'restoration', 'israel'],
    otText: 'For thus saith the Lord, That after seventy years be accomplished at Babylon I will visit you, and perform my good word toward you, in causing you to return to this place. For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end.',
    ntText: 'Now in the first year of Cyrus king of Persia, that the word of the Lord by the mouth of Jeremiah might be fulfilled, the Lord stirred up the spirit of Cyrus king of Persia, that he made a proclamation throughout all his kingdom, and put it also in writing, saying, Thus saith Cyrus king of Persia, The Lord God of heaven hath given me all the kingdoms of the earth; and he hath charged me to build him an house at Jerusalem, which is in Judah.'
  },
  {
    id: 'prop-016',
    title: 'Rebuilding of Jerusalem',
    otReference: 'Nehemiah 2:17-20',
    ntReference: 'Ezra 6:14-15',
    description: 'Jerusalem would be rebuilt',
    status: 'fulfilled',
    category: 'restoration',
    context: 'Nehemiah leads the rebuilding of Jerusalem\'s walls',
    fulfillmentDetails: 'Fulfilled in the rebuilding of Jerusalem after exile',
    importance: 3,
    tags: ['jerusalem', 'rebuilding', 'restoration', 'israel'],
    otText: 'Then said I unto them, Ye see the distress that we are in, how Jerusalem lieth waste, and the gates thereof are burned with fire: come, and let us build up the wall of Jerusalem, that we be no more a reproach.',
    ntText: 'And the elders of the Jews builded, and they prospered through the prophesying of Haggai the prophet and Zechariah the son of Iddo. And they builded, and finished it, according to the commandment of the God of Israel, and according to the commandment of Cyrus, and Darius, and Artaxerxes king of Persia.'
  },
  {
    id: 'prop-017',
    title: 'The Kingdom Established',
    otReference: '2 Samuel 7:12-13',
    ntReference: 'Acts 2:29-36',
    description: 'The Messiah\'s kingdom would be established forever',
    status: 'fulfilled',
    category: 'kingdom',
    context: 'Davidic covenant promises an eternal kingdom',
    fulfillmentDetails: 'Fulfilled in Christ\'s eternal kingdom',
    importance: 5,
    tags: ['kingdom', 'david', 'messiah', 'eternal'],
    otText: 'And when thy days be fulfilled, and thou shalt sleep with thy fathers, I will set up thy seed after thee, which shall proceed out of thy bowels, and I will establish his kingdom. He shall build an house for my name, and I will stablish the throne of his kingdom for ever.',
    ntText: 'Men and brethren, let me freely speak unto you of the patriarch David, that he is both dead and buried, and his sepulchre is with us unto this day. Therefore being a prophet, and knowing that God had sworn with an oath to him, that of the fruit of his loins, according to the flesh, he would raise up Christ to sit on his throne.'
  },
  {
    id: 'prop-018',
    title: 'The Great Tribulation',
    otReference: 'Daniel 12:1',
    ntReference: 'Matthew 24:21',
    description: 'A time of trouble unlike any before',
    status: 'unfulfilled',
    category: 'end-times',
    context: 'Daniel prophesies the end times',
    fulfillmentDetails: 'Yet to be fulfilled in the future tribulation',
    importance: 5,
    tags: ['tribulation', 'end-times', 'daniel', 'prophecy'],
    otText: 'And at that time shall Michael stand up, the great prince which standeth for the children of thy people: and there shall be a time of trouble, such as never was since there was a nation even to that same time: and at that time thy people shall be delivered, every one that shall be found written in the book.',
    ntText: 'For then shall be great tribulation, such as was not since the beginning of the world to this time, no, nor ever shall be.'
  },
  {
    id: 'prop-019',
    title: 'The Second Coming',
    otReference: 'Zechariah 14:4',
    ntReference: 'Acts 1:11',
    description: 'The Lord will return and stand on the Mount of Olives',
    status: 'unfulfilled',
    category: 'end-times',
    context: 'Zechariah prophesies the day of the Lord',
    fulfillmentDetails: 'Yet to be fulfilled in the second coming of Christ',
    importance: 5,
    tags: ['second coming', 'mount of olives', 'end-times', 'return'],
    otText: 'And his feet shall stand in that day upon the mount of Olives, which is before Jerusalem on the east, and the mount of Olives shall cleave in the midst thereof toward the east and toward the west, and there shall be a very great valley; and half of the mountain shall remove toward the north, and half of it toward the south.',
    ntText: 'Which also said, Ye men of Galilee, why stand ye gazing up into heaven? this same Jesus, which is taken up from you into heaven, shall so come in like manner as ye have seen him go into heaven.'
  },
  {
    id: 'prop-020',
    title: 'New Heavens and New Earth',
    otReference: 'Isaiah 65:17',
    ntReference: '2 Peter 3:13',
    description: 'God will create new heavens and a new earth',
    status: 'unfulfilled',
    category: 'end-times',
    context: 'Isaiah prophesies the new creation',
    fulfillmentDetails: 'Yet to be fulfilled in the eternal state',
    importance: 5,
    tags: ['new heavens', 'new earth', 'restoration', 'eternal'],
    otText: 'For, behold, I create new heavens and a new earth: and the former shall not be remembered, nor come into mind.',
    ntText: 'Nevertheless we, according to his promise, look for new heavens and a new earth, wherein dwelleth righteousness.'
  },
  {
    id: 'prop-021',
    title: 'Israel Will Be Restored',
    otReference: 'Ezekiel 37:21-22',
    ntReference: 'Romans 11:25-26',
    description: 'Israel will be gathered and restored as one nation',
    status: 'in-progress',
    category: 'restoration',
    context: 'Ezekiel prophesies the restoration of Israel',
    fulfillmentDetails: 'Partially fulfilled in 1948, fully fulfilled in the future',
    importance: 4,
    tags: ['israel', 'restoration', 'gathering', 'end-times'],
    otText: 'And say unto them, Thus saith the Lord God; Behold, I will take the children of Israel from among the heathen, whither they be gone, and will gather them on every side, and bring them into their own land: And I will make them one nation in the land upon the mountains of Israel; and one king shall be king to them all: and they shall be no more two nations, neither shall they be divided into two kingdoms any more at all.',
    ntText: 'For I would not, brethren, that ye should be ignorant of this mystery, lest ye should be wise in your own conceits; that blindness in part is happened to Israel, until the fulness of the Gentiles be come in. And so all Israel shall be saved: as it is written, There shall come out of Sion the Deliverer, and shall turn away ungodliness from Jacob.'
  },
  {
    id: 'prop-022',
    title: 'New Covenant',
    otReference: 'Jeremiah 31:31-34',
    ntReference: 'Luke 22:20',
    description: 'God would make a new covenant with Israel',
    status: 'fulfilled',
    category: 'covenant',
    context: 'Jeremiah prophesies the new covenant',
    fulfillmentDetails: 'Fulfilled in Christ at the Last Supper',
    importance: 5,
    tags: ['new covenant', 'grace', 'forgiveness', 'law'],
    otText: 'Behold, the days come, saith the Lord, that I will make a new covenant with the house of Israel, and with the house of Judah: Not according to the covenant that I made with their fathers in the day that I took them by the hand to bring them out of the land of Egypt; which my covenant they brake, although I was an husband unto them, saith the Lord: But this shall be the covenant that I will make with the house of Israel; After those days, saith the Lord, I will put my law in their inward parts, and write it in their hearts; and will be their God, and they shall be my people.',
    ntText: 'Likewise also the cup after supper, saying, This cup is the new testament in my blood, which is shed for you.'
  },
  {
    id: 'prop-023',
    title: 'All Nations Blessed',
    otReference: 'Genesis 12:2-3',
    ntReference: 'Galatians 3:8',
    description: 'All nations would be blessed through Abraham\'s seed',
    status: 'fulfilled',
    category: 'nations',
    context: 'The Abrahamic covenant promises blessing to all nations',
    fulfillmentDetails: 'Fulfilled in Christ through the gospel going to all nations',
    importance: 5,
    tags: ['abraham', 'nations', 'blessing', 'covenant'],
    otText: 'And I will make of thee a great nation, and I will bless thee, and make thy name great; and thou shalt be a blessing: And I will bless them that bless thee, and curse him that curseth thee: and in thee shall all families of the earth be blessed.',
    ntText: 'And the scripture, foreseeing that God would justify the heathen through faith, preached before the gospel unto Abraham, saying, In thee shall all nations be blessed.'
  },
  {
    id: 'prop-024',
    title: 'Deliverance from Egypt',
    otReference: 'Exodus 3:7-8',
    ntReference: 'Acts 7:34',
    description: 'God would deliver Israel from Egypt',
    status: 'fulfilled',
    category: 'deliverance',
    context: 'God calls Moses to deliver Israel',
    fulfillmentDetails: 'Fulfilled in the Exodus',
    importance: 4,
    tags: ['exodus', 'deliverance', 'egypt', 'moses'],
    otText: 'And the Lord said, I have surely seen the affliction of my people which are in Egypt, and have heard their cry by reason of their taskmasters; for I know their sorrows; And I am come down to deliver them out of the hand of the Egyptians, and to bring them up out of that land unto a good land and a large, unto a land flowing with milk and honey.',
    ntText: 'I have seen, I have seen the affliction of my people which is in Egypt, and I have heard their groaning, and am come down to deliver them. And now come, I will send thee into Egypt.'
  }
]

// ================================================================
// HELPER FUNCTIONS
// ================================================================

export const getAllProphecies = (): Prophecy[] => {
  return prophecies
}

export const getProphecyById = (id: string): Prophecy | undefined => {
  return prophecies.find(p => p.id === id)
}

export const getPropheciesByStatus = (status: ProphecyStatus): Prophecy[] => {
  return prophecies.filter(p => p.status === status)
}

export const getPropheciesByCategory = (category: ProphecyCategory): Prophecy[] => {
  return prophecies.filter(p => p.category === category)
}

export const searchProphecies = (query: string): Prophecy[] => {
  const lowerQuery = query.toLowerCase()
  return prophecies.filter(p =>
    p.title.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.otReference.toLowerCase().includes(lowerQuery) ||
    (p.ntReference && p.ntReference.toLowerCase().includes(lowerQuery)) ||
    p.tags.some(t => t.toLowerCase().includes(lowerQuery))
  )
}

export const getOTtoNTJumps = (): Prophecy[] => {
  return prophecies.filter(p => p.status === 'fulfilled' && p.ntReference)
}

export const getPropheciesByImportance = (level: 1 | 2 | 3 | 4 | 5): Prophecy[] => {
  return prophecies.filter(p => p.importance === level)
}

export const getProphecyStats = () => {
  const stats = {
    total: prophecies.length,
    fulfilled: prophecies.filter(p => p.status === 'fulfilled').length,
    unfulfilled: prophecies.filter(p => p.status === 'unfulfilled').length,
    partial: prophecies.filter(p => p.status === 'partial').length,
    inProgress: prophecies.filter(p => p.status === 'in-progress').length,
  }
  return stats
}

export const getProphecyCategories = () => {
  const categories: Record<string, number> = {}
  prophecies.forEach(p => {
    if (categories[p.category]) {
      categories[p.category]++
    } else {
      categories[p.category] = 1
    }
  })
  return categories
}