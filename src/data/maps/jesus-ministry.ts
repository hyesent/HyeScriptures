import type { BibleMapData } from '../../types/maps'

export const jesusMinistryMap: BibleMapData = {
  id: 'jesus-ministry',
  name: "Jesus' Ministry",
  description: 'The life and ministry of Jesus Christ from birth to ascension',
  icon: '✝️',
  backgroundColor: '#f8f6f2',
  landColor: '#e8e4dd',
  waterColor: '#bfdbfe',
  locations: [
    {
      id: 'bethlehem_jesus',
      name: 'Bethlehem',
      description: 'Birthplace of Jesus Christ, as prophesied by Micah.',
      x: 50,
      y: 38,
      type: 'city',
      events: ['Birth of Jesus (Matthew 2:1-12)', 'Visit of the Magi (Matthew 2:1-12)'],
      references: ['Micah 5:2', 'Matthew 2:1-12', 'Luke 2:4-7'],
      modernCountry: 'Israel'
    },
    {
      id: 'nazareth_jesus',
      name: 'Nazareth',
      description: 'Childhood home of Jesus, where He grew up and began His ministry.',
      x: 47,
      y: 28,
      type: 'city',
      events: ['Childhood (Luke 2:39-52)', 'Rejection at synagogue (Luke 4:16-30)'],
      references: ['Luke 1:26-38', 'Luke 2:39-52', 'Luke 4:16-30'],
      modernCountry: 'Israel'
    },
    {
      id: 'jordan_baptism',
      name: 'Jordan River',
      description: 'Where Jesus was baptized by John the Baptist.',
      x: 44,
      y: 46,
      type: 'water',
      events: ['Baptism of Jesus (Matthew 3:13-17)', 'John\'s testimony (John 1:29-34)'],
      references: ['Matthew 3:13-17', 'Mark 1:9-11', 'Luke 3:21-22', 'John 1:29-34']
    },
    {
      id: 'wilderness_temptation',
      name: 'Wilderness of Judea',
      description: 'Where Jesus was tempted by Satan for 40 days.',
      x: 45,
      y: 42,
      type: 'region',
      events: ['Temptation of Jesus (Matthew 4:1-11)'],
      references: ['Matthew 4:1-11', 'Mark 1:12-13', 'Luke 4:1-13']
    },
    {
      id: 'cana_galilee',
      name: 'Cana',
      description: 'Where Jesus performed His first miracle—turning water into wine.',
      x: 49,
      y: 30,
      type: 'city',
      events: ['First miracle (John 2:1-11)'],
      references: ['John 2:1-11'],
      modernCountry: 'Israel'
    },
    {
      id: 'capernaum_base',
      name: 'Capernaum',
      description: 'Jesus\' ministry headquarters. Many miracles and teachings occurred here.',
      x: 51,
      y: 22,
      type: 'city',
      events: ['Healing of paralytic (Mark 2)', 'Calling disciples (Matthew 4)'],
      references: ['Matthew 4:13', 'Mark 2:1-12', 'Luke 4:31-37'],
      modernCountry: 'Israel'
    },
    {
      id: 'sermon_mount',
      name: 'Mount of Beatitudes',
      description: 'Where Jesus delivered the Sermon on the Mount.',
      x: 50,
      y: 20,
      type: 'mountain',
      events: ['Sermon on the Mount (Matthew 5-7)'],
      references: ['Matthew 5:1-7:29', 'Luke 6:17-49']
    },
    {
      id: 'feeding_5000',
      name: 'Bethsaida',
      description: 'Where Jesus fed the 5,000.',
      x: 53,
      y: 18,
      type: 'region',
      events: ['Feeding of 5,000 (John 6:1-14)', 'Walking on water (John 6:16-21)'],
      references: ['Matthew 14:13-21', 'Mark 6:30-44', 'Luke 9:10-17', 'John 6:1-14']
    },
    {
      id: 'transfiguration',
      name: 'Mount Hermon',
      description: 'Where Jesus was transfigured before Peter, James, and John.',
      x: 55,
      y: 12,
      type: 'mountain',
      events: ['Transfiguration (Matthew 17:1-8)'],
      references: ['Matthew 17:1-8', 'Mark 9:2-8', 'Luke 9:28-36']
    },
    {
      id: 'jerusalem_temple',
      name: 'Jerusalem',
      description: 'Where Jesus was crucified, buried, and resurrected.',
      x: 52,
      y: 35,
      type: 'city',
      events: [
        'Triumphal entry (Matthew 21)',
        'Last Supper (Luke 22)',
        'Crucifixion (Matthew 27)',
        'Resurrection (Matthew 28)',
        'Ascension (Acts 1)'
      ],
      references: ['Matthew 21-28', 'Luke 22-24', 'John 18-21', 'Acts 1:1-11'],
      modernCountry: 'Israel'
    },
    {
      id: 'bethany_lazarus',
      name: 'Bethany',
      description: 'Home of Mary, Martha, and Lazarus. Where Jesus raised Lazarus from the dead.',
      x: 53,
      y: 37,
      type: 'city',
      events: ['Raising of Lazarus (John 11)'],
      references: ['John 11:1-44', 'Mark 14:3-9'],
      modernCountry: 'Israel'
    },
    {
      id: 'gethsemane',
      name: 'Gethsemane',
      description: 'Where Jesus prayed before His arrest.',
      x: 53,
      y: 34,
      type: 'region',
      events: ['Agony in Gethsemane (Matthew 26:36-46)'],
      references: ['Matthew 26:36-46', 'Mark 14:32-42', 'Luke 22:39-46']
    }
  ],
  routes: [
    {
      points: [
        { x: 50, y: 38 }, // Bethlehem (Birth)
        { x: 47, y: 28 }, // Nazareth (Childhood)
        { x: 44, y: 46 }, // Jordan River (Baptism)
        { x: 45, y: 42 }, // Wilderness (Temptation)
        { x: 49, y: 30 }, // Cana (First miracle)
        { x: 51, y: 22 }, // Capernaum (Headquarters)
        { x: 50, y: 20 }, // Mount of Beatitudes
        { x: 53, y: 18 }, // Bethsaida (Feeding 5,000)
        { x: 55, y: 12 }, // Mount Hermon (Transfiguration)
        { x: 52, y: 35 }  // Jerusalem (Crucifixion, Resurrection, Ascension)
      ],
      color: '#c9a84c',
      label: "Jesus' Ministry Route"
    }
  ]
}