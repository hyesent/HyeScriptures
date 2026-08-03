// src/data/games/missionary-journey.ts

export interface JourneyLocation {
  id: string
  name: string
  region: string
  description: string
  emoji: string
  coordinates: { x: number; y: number }
  questions: JourneyQuestion[]
  trivia?: string
  verse?: string
  keyEvent?: string
  people?: string[]
}

export interface JourneyQuestion {
  question: string
  options: string[]
  correct: number
  explanation: string
}

export interface Journey {
  id: string
  name: string
  description: string
  locations: JourneyLocation[]
  startLocation: string
  endLocation: string
  totalDistance?: string
  keyPeople?: string[]
  keyBook?: string
  chapters?: string
}

// ============================================================
// HELPER FUNCTIONS
// ============================================================

const createJourney = (
  id: string,
  name: string,
  description: string,
  startLocation: string,
  endLocation: string,
  locations: JourneyLocation[],
  totalDistance?: string,
  keyPeople?: string[],
  keyBook?: string,
  chapters?: string
): Journey => ({
  id,
  name,
  description,
  startLocation,
  endLocation,
  locations,
  totalDistance,
  keyPeople,
  keyBook,
  chapters
})

// ============================================================
// FIRST MISSIONARY JOURNEY (Acts 13-14)
// ============================================================

const firstJourneyLocations: JourneyLocation[] = [
  {
    id: 'antioch',
    name: 'Antioch',
    region: 'Syria',
    description: 'The starting point of Paul\'s missionary journeys. The church here sent Paul and Barnabas out with prayer and fasting.',
    emoji: '🏛️',
    coordinates: { x: 35, y: 25 },
    people: ['Paul', 'Barnabas', 'John Mark'],
    keyEvent: 'Commissioning of Paul and Barnabas',
    questions: [
      {
        question: 'Who was the other missionary with Paul on this journey?',
        options: ['Peter', 'Barnabas', 'John Mark', 'Silas'],
        correct: 1,
        explanation: 'Barnabas accompanied Paul on the first missionary journey (Acts 13:2-3).'
      },
      {
        question: 'Where did the church in Antioch send Paul and Barnabas from?',
        options: ['Jerusalem', 'Rome', 'Antioch', 'Tarsus'],
        correct: 2,
        explanation: 'The church in Antioch sent them out (Acts 13:1-3).'
      }
    ],
    trivia: 'Antioch was the third largest city in the Roman Empire.',
    verse: 'Acts 13:1-3'
  },
  {
    id: 'seleucia',
    name: 'Seleucia',
    region: 'Syria',
    description: 'The port city from which Paul and Barnabas sailed to Cyprus.',
    emoji: '⛵',
    coordinates: { x: 38, y: 30 },
    people: ['Paul', 'Barnabas'],
    keyEvent: 'Departure by sea',
    questions: [
      {
        question: 'What did Paul and Barnabas do when they arrived in Seleucia?',
        options: ['Preached in the synagogue', 'Sailed to Cyprus', 'Healed the sick', 'Built a church'],
        correct: 1,
        explanation: 'They sailed from Seleucia to Cyprus (Acts 13:4).'
      }
    ],
    trivia: 'Seleucia was the main port of Antioch.',
    verse: 'Acts 13:4'
  },
  {
    id: 'salamis',
    name: 'Salamis',
    region: 'Cyprus',
    description: 'Paul and Barnabas preached in the synagogues of Salamis, the largest city on Cyprus.',
    emoji: '🏝️',
    coordinates: { x: 45, y: 35 },
    people: ['Paul', 'Barnabas', 'John Mark'],
    keyEvent: 'Preaching in the synagogues',
    questions: [
      {
        question: 'What did Paul and Barnabas do first in Cyprus?',
        options: ['Healed the sick', 'Preached in the synagogues', 'Went to the marketplace', 'Visited the governor'],
        correct: 1,
        explanation: 'They preached in the synagogues of Salamis (Acts 13:5).'
      }
    ],
    trivia: 'Salamis was the main port city of Cyprus.',
    verse: 'Acts 13:5'
  },
  {
    id: 'paphos',
    name: 'Paphos',
    region: 'Cyprus',
    description: 'Paul confronted Elymas the sorcerer here. The proconsul Sergius Paulus believed.',
    emoji: '⚡',
    coordinates: { x: 42, y: 38 },
    people: ['Paul', 'Barnabas', 'Elymas', 'Sergius Paulus'],
    keyEvent: 'Confrontation with Elymas',
    questions: [
      {
        question: 'What did Paul do to Elymas the sorcerer?',
        options: ['Healed him', 'Made him blind', 'Converted him', 'Ignored him'],
        correct: 1,
        explanation: 'Paul made Elymas temporarily blind for opposing the Gospel (Acts 13:6-12).'
      },
      {
        question: 'Who was the proconsul that believed?',
        options: ['Felix', 'Sergius Paulus', 'Festus', 'Agrippa'],
        correct: 1,
        explanation: 'Sergius Paulus believed after seeing Elymas blinded (Acts 13:12).'
      }
    ],
    trivia: 'Cyprus was Barnabas\'s home country.',
    verse: 'Acts 13:6-12'
  },
  {
    id: 'perga',
    name: 'Perga',
    region: 'Pamphylia',
    description: 'A city in Asia Minor where John Mark left Paul and Barnabas and returned to Jerusalem.',
    emoji: '🏗️',
    coordinates: { x: 55, y: 45 },
    people: ['Paul', 'Barnabas', 'John Mark'],
    keyEvent: 'John Mark departs',
    questions: [
      {
        question: 'Who left Paul and Barnabas in Perga?',
        options: ['Peter', 'John Mark', 'Silas', 'Timothy'],
        correct: 1,
        explanation: 'John Mark left them and returned to Jerusalem (Acts 13:13).'
      }
    ],
    trivia: 'Perga was known for its Temple of Artemis.',
    verse: 'Acts 13:13'
  },
  {
    id: 'pisidian-antioch',
    name: 'Pisidian Antioch',
    region: 'Pisidia',
    description: 'Paul preached a powerful sermon in the synagogue here, revealing Jesus as the promised Messiah.',
    emoji: '🕍',
    coordinates: { x: 50, y: 40 },
    people: ['Paul', 'Barnabas'],
    keyEvent: 'Sermon in the synagogue',
    questions: [
      {
        question: 'What did Paul preach about in Pisidian Antioch?',
        options: ['The Law', 'Jesus as the Messiah', 'The Temple', 'The Prophets'],
        correct: 1,
        explanation: 'Paul preached about Jesus as the promised Messiah (Acts 13:16-41).'
      },
      {
        question: 'How did the Jews react to Paul\'s preaching?',
        options: ['They believed', 'They became jealous', 'They ignored him', 'They arrested him'],
        correct: 1,
        explanation: 'The Jews became jealous and contradicted Paul\'s message (Acts 13:45).'
      }
    ],
    trivia: 'This is where Paul first said "I turn to the Gentiles".',
    verse: 'Acts 13:14-52'
  },
  {
    id: 'iconium',
    name: 'Iconium',
    region: 'Lycaonia',
    description: 'A city where Paul and Barnabas faced persecution and a plot to stone them.',
    emoji: '⚔️',
    coordinates: { x: 58, y: 50 },
    people: ['Paul', 'Barnabas'],
    keyEvent: 'Persecution and escape',
    questions: [
      {
        question: 'What happened in Iconium when Paul preached?',
        options: ['They were welcomed', 'They were stoned', 'A plot to stone them was formed', 'They were arrested'],
        correct: 2,
        explanation: 'A plot was formed to stone them (Acts 14:5).'
      }
    ],
    trivia: 'Iconium is now known as Konya, Turkey.',
    verse: 'Acts 14:1-5'
  },
  {
    id: 'lystra',
    name: 'Lystra',
    region: 'Lycaonia',
    description: 'Paul healed a crippled man here and was later stoned and left for dead.',
    emoji: '🩹',
    coordinates: { x: 60, y: 55 },
    people: ['Paul', 'Barnabas', 'Timothy'],
    keyEvent: 'Healing of crippled man and stoning',
    questions: [
      {
        question: 'What did Paul do in Lystra that amazed the crowd?',
        options: ['Raised the dead', 'Healed a crippled man', 'Cast out demons', 'Preached to thousands'],
        correct: 1,
        explanation: 'Paul healed a man crippled from birth (Acts 14:8-10).'
      },
      {
        question: 'Who did the people of Lystra think Paul and Barnabas were?',
        options: ['Angels', 'Gods', 'Prophets', 'Kings'],
        correct: 1,
        explanation: 'They thought Paul was Hermes and Barnabas was Zeus (Acts 14:11-13).'
      },
      {
        question: 'What happened to Paul after healing the crippled man?',
        options: ['He was praised', 'He was stoned', 'He was arrested', 'He was made king'],
        correct: 1,
        explanation: 'Paul was stoned and left for dead (Acts 14:19).'
      }
    ],
    trivia: 'Timothy was from Lystra and later became Paul\'s companion.',
    verse: 'Acts 14:8-20'
  },
  {
    id: 'derbe',
    name: 'Derbe',
    region: 'Lycaonia',
    description: 'A city where many believed the Gospel and disciples were made.',
    emoji: '🙌',
    coordinates: { x: 65, y: 60 },
    people: ['Paul', 'Barnabas'],
    keyEvent: 'Many believe',
    questions: [
      {
        question: 'What happened when Paul preached in Derbe?',
        options: ['He was arrested', 'Many believed', 'He was rejected', 'He left immediately'],
        correct: 1,
        explanation: 'Many disciples were made in Derbe (Acts 14:21).'
      }
    ],
    trivia: 'Derbe is mentioned as the birthplace of Gaius.',
    verse: 'Acts 14:21'
  },
  {
    id: 'antioch-return',
    name: 'Return to Antioch',
    region: 'Syria',
    description: 'Paul and Barnabas returned to Antioch, reporting all that God had done.',
    emoji: '🏆',
    coordinates: { x: 35, y: 25 },
    people: ['Paul', 'Barnabas'],
    keyEvent: 'Journey complete',
    questions: [
      {
        question: 'What did Paul and Barnabas report when they returned?',
        options: ['Their success', 'All that God had done', 'The persecution they faced', 'All of the above'],
        correct: 3,
        explanation: 'They reported all that God had done with them (Acts 14:27).'
      }
    ],
    trivia: 'This journey covered approximately 1,400 miles.',
    verse: 'Acts 14:26-28'
  }
]

// ============================================================
// SECOND MISSIONARY JOURNEY (Acts 15-18)
// ============================================================

const secondJourneyLocations: JourneyLocation[] = [
  {
    id: 's2-antioch',
    name: 'Antioch',
    region: 'Syria',
    description: 'Paul and Silas were sent out from Antioch after the Jerusalem Council.',
    emoji: '🏛️',
    coordinates: { x: 35, y: 25 },
    people: ['Paul', 'Silas', 'Barnabas'],
    keyEvent: 'Second commissioning',
    questions: [
      {
        question: 'Who accompanied Paul on the second journey?',
        options: ['Barnabas', 'Silas', 'Timothy', 'Luke'],
        correct: 1,
        explanation: 'Silas accompanied Paul on the second journey (Acts 15:40).'
      },
      {
        question: 'Why did Paul choose Silas instead of Barnabas?',
        options: ['Barnabas was sick', 'They had a disagreement', 'Barnabas went with John Mark', 'Silas was more experienced'],
        correct: 2,
        explanation: 'Paul and Barnabas disagreed about taking John Mark (Acts 15:36-40).'
      }
    ],
    trivia: 'Paul and Silas were sent off by the church in Antioch.',
    verse: 'Acts 15:40-41'
  },
  {
    id: 's2-derbe',
    name: 'Derbe',
    region: 'Lycaonia',
    description: 'Paul and Silas revisited the churches from the first journey.',
    emoji: '🏗️',
    coordinates: { x: 65, y: 60 },
    people: ['Paul', 'Silas'],
    keyEvent: 'Revisiting churches',
    questions: [
      {
        question: 'What did Paul do when he revisited Derbe?',
        options: ['Preached the Gospel', 'Strengthened the disciples', 'Healed the sick', 'All of the above'],
        correct: 1,
        explanation: 'Paul strengthened the disciples (Acts 16:1-5).'
      }
    ],
    trivia: 'Derbe was one of the cities Paul revisited.',
    verse: 'Acts 16:1'
  },
  {
    id: 's2-lystra',
    name: 'Lystra',
    region: 'Lycaonia',
    description: 'Timothy joined Paul and Silas here.',
    emoji: '👤',
    coordinates: { x: 60, y: 55 },
    people: ['Paul', 'Silas', 'Timothy'],
    keyEvent: 'Timothy joins',
    questions: [
      {
        question: 'Who joined Paul and Silas in Lystra?',
        options: ['Timothy', 'Luke', 'Titus', 'Apollos'],
        correct: 0,
        explanation: 'Timothy joined Paul and Silas in Lystra (Acts 16:1-3).'
      }
    ],
    trivia: 'Timothy was the son of a Jewish mother and Greek father.',
    verse: 'Acts 16:1-3'
  },
  {
    id: 's2-troas',
    name: 'Troas',
    region: 'Mysia',
    description: 'Paul had a vision of a man from Macedonia calling for help.',
    emoji: '👁️',
    coordinates: { x: 70, y: 48 },
    people: ['Paul', 'Silas', 'Timothy', 'Luke'],
    keyEvent: 'Macedonian vision',
    questions: [
      {
        question: 'What vision did Paul have in Troas?',
        options: ['A man from Macedonia calling for help', 'An angel of the Lord', 'A vision of Jerusalem', 'A dream of the Gospel'],
        correct: 0,
        explanation: 'Paul saw a vision of a man from Macedonia calling for help (Acts 16:9).'
      },
      {
        question: 'Who joined Paul in Troas?',
        options: ['Luke', 'Mark', 'Titus', 'Apollos'],
        correct: 0,
        explanation: 'Luke joined Paul and the others in Troas (Acts 16:10).'
      }
    ],
    trivia: 'Troas was where Paul met Luke.',
    verse: 'Acts 16:8-10'
  },
  {
    id: 's2-philippi',
    name: 'Philippi',
    region: 'Macedonia',
    description: 'The first city in Europe where Paul preached. Lydia was converted, and Paul and Silas were imprisoned.',
    emoji: '⛓️',
    coordinates: { x: 80, y: 42 },
    people: ['Paul', 'Silas', 'Lydia', 'Jailer'],
    keyEvent: 'Lydia converts and earthquake at prison',
    questions: [
      {
        question: 'Who was the first convert in Philippi?',
        options: ['Lydia', 'The jailer', 'The slave girl', 'Euodia'],
        correct: 0,
        explanation: 'Lydia was the first convert in Philippi (Acts 16:14-15).'
      },
      {
        question: 'What happened to Paul and Silas in Philippi?',
        options: ['They were welcomed', 'They were imprisoned', 'They were stoned', 'They were arrested and beaten'],
        correct: 3,
        explanation: 'Paul and Silas were arrested, beaten, and imprisoned (Acts 16:19-24).'
      },
      {
        question: 'What happened during the earthquake in Philippi?',
        options: ['Paul and Silas escaped', 'The jailer was saved', 'The prison collapsed', 'All of the above'],
        correct: 1,
        explanation: 'The jailer and his household were saved (Acts 16:25-34).'
      }
    ],
    trivia: 'Philippi was a Roman colony with special privileges.',
    verse: 'Acts 16:12-40'
  },
  {
    id: 's2-thessalonica',
    name: 'Thessalonica',
    region: 'Macedonia',
    description: 'Paul preached in the synagogue for three weeks and many believed, but persecution arose.',
    emoji: '🔥',
    coordinates: { x: 75, y: 40 },
    people: ['Paul', 'Silas', 'Timothy'],
    keyEvent: 'Synagogue preaching and persecution',
    questions: [
      {
        question: 'How long did Paul preach in Thessalonica?',
        options: ['One week', 'Three weeks', 'One month', 'Three months'],
        correct: 1,
        explanation: 'Paul reasoned with them for three Sabbath days (Acts 17:2).'
      },
      {
        question: 'What did the Jews in Thessalonica do?',
        options: ['Believed', 'Remained neutral', 'Started a riot', 'Invited Paul to stay'],
        correct: 2,
        explanation: 'The Jews started a riot against Paul and Silas (Acts 17:5-6).'
      }
    ],
    trivia: 'Paul wrote two letters to the Thessalonians.',
    verse: 'Acts 17:1-9'
  },
  {
    id: 's2-berea',
    name: 'Berea',
    region: 'Macedonia',
    description: 'The Bereans were more noble than the Thessalonians, receiving the Word with eagerness.',
    emoji: '📖',
    coordinates: { x: 72, y: 38 },
    people: ['Paul', 'Silas', 'Timothy'],
    keyEvent: 'Noble Bereans',
    questions: [
      {
        question: 'What made the Bereans "more noble"?',
        options: ['They were richer', 'They searched the Scriptures daily', 'They were more educated', 'They were more religious'],
        correct: 1,
        explanation: 'The Bereans searched the Scriptures daily to verify Paul\'s teaching (Acts 17:11).'
      }
    ],
    trivia: 'The Bereans are a model of faithful Bible study.',
    verse: 'Acts 17:10-14'
  },
  {
    id: 's2-athens',
    name: 'Athens',
    region: 'Achaia',
    description: 'Paul preached on Mars Hill to the philosophers of Athens, declaring the unknown God.',
    emoji: '🏛️',
    coordinates: { x: 68, y: 35 },
    people: ['Paul'],
    keyEvent: 'Areopagus sermon',
    questions: [
      {
        question: 'Where did Paul preach in Athens?',
        options: ['The marketplace', 'The synagogue', 'Mars Hill', 'The theater'],
        correct: 2,
        explanation: 'Paul preached on the Areopagus (Mars Hill) in Athens (Acts 17:22-31).'
      },
      {
        question: 'How did the Athenians respond to Paul\'s sermon?',
        options: ['All believed', 'Some mocked, some wanted to hear more', 'They arrested him', 'They all rejected him'],
        correct: 1,
        explanation: 'Some mocked, others wanted to hear more, and a few believed (Acts 17:32-34).'
      }
    ],
    trivia: 'Athens was the intellectual center of the ancient world.',
    verse: 'Acts 17:16-34'
  },
  {
    id: 's2-corinth',
    name: 'Corinth',
    region: 'Achaia',
    description: 'Paul stayed in Corinth for 18 months, founding the Corinthian church.',
    emoji: '⛪',
    coordinates: { x: 65, y: 32 },
    people: ['Paul', 'Aquila', 'Priscilla', 'Silas', 'Timothy'],
    keyEvent: 'Founding of the Corinthian church',
    questions: [
      {
        question: 'How long did Paul stay in Corinth?',
        options: ['Six months', 'Eighteen months', 'Two years', 'Three years'],
        correct: 1,
        explanation: 'Paul stayed in Corinth for eighteen months (Acts 18:11).'
      },
      {
        question: 'Who did Paul meet in Corinth?',
        options: ['Aquila and Priscilla', 'Peter and John', 'Luke and Mark', 'Timothy and Titus'],
        correct: 0,
        explanation: 'Paul met Aquila and Priscilla in Corinth (Acts 18:2-3).'
      }
    ],
    trivia: 'Paul wrote two letters to the Corinthians.',
    verse: 'Acts 18:1-18'
  },
  {
    id: 's2-ephesus-return',
    name: 'Ephesus (brief stop)',
    region: 'Asia',
    description: 'Paul briefly stopped in Ephesus on his way to Jerusalem.',
    emoji: '🗺️',
    coordinates: { x: 62, y: 48 },
    people: ['Paul', 'Aquila', 'Priscilla'],
    keyEvent: 'Brief stop',
    questions: [
      {
        question: 'Why did Paul leave Ephesus quickly?',
        options: ['He was arrested', 'He was called to Jerusalem', 'The temple riot', 'He promised to return'],
        correct: 3,
        explanation: 'Paul left Ephesus quickly and promised to return if God willed (Acts 18:20-21).'
      }
    ],
    trivia: 'Paul later spent three years in Ephesus.',
    verse: 'Acts 18:19-21'
  }
]

// ============================================================
// THIRD MISSIONARY JOURNEY (Acts 18-21)
// ============================================================

const thirdJourneyLocations: JourneyLocation[] = [
  {
    id: 't3-antioch',
    name: 'Antioch',
    region: 'Syria',
    description: 'The starting point of Paul\'s third missionary journey.',
    emoji: '🏛️',
    coordinates: { x: 35, y: 25 },
    people: ['Paul'],
    keyEvent: 'Third journey begins',
    questions: [
      {
        question: 'What was the main purpose of Paul\'s third journey?',
        options: ['To plant new churches', 'To strengthen existing churches', 'To reach Spain', 'To go to Rome'],
        correct: 1,
        explanation: 'Paul went to strengthen the churches (Acts 18:23).'
      }
    ],
    trivia: 'The third journey covered even more territory.',
    verse: 'Acts 18:23'
  },
  {
    id: 't3-galatia',
    name: 'Galatia',
    region: 'Galatia',
    description: 'Paul revisited the churches in Galatia.',
    emoji: '🗺️',
    coordinates: { x: 55, y: 45 },
    people: ['Paul'],
    keyEvent: 'Revisiting Galatia',
    questions: [
      {
        question: 'Which churches did Paul revisit in Galatia?',
        options: ['Lystra, Derbe, Iconium', 'Ephesus, Colossae', 'Philippi, Thessalonica', 'Corinth, Athens'],
        correct: 0,
        explanation: 'Paul revisited the churches of Galatia (Acts 18:23).'
      }
    ],
    trivia: 'Paul wrote the letter to the Galatians.',
    verse: 'Acts 18:23'
  },
  {
    id: 't3-ephesus',
    name: 'Ephesus',
    region: 'Asia',
    description: 'Paul spent three years in Ephesus, where a great revival and the riot of the silversmiths occurred.',
    emoji: '⚡',
    coordinates: { x: 62, y: 48 },
    people: ['Paul', 'Aquila', 'Priscilla', 'Apollos'],
    keyEvent: 'Three-year ministry and riot',
    questions: [
      {
        question: 'How long did Paul minister in Ephesus?',
        options: ['One year', 'Two years', 'Three years', 'Four years'],
        correct: 2,
        explanation: 'Paul spent three years in Ephesus (Acts 20:31).'
      },
      {
        question: 'What caused the riot in Ephesus?',
        options: ['Paul preached against idols', 'The silversmiths lost business', 'The temple was destroyed', 'Paul was arrested'],
        correct: 1,
        explanation: 'The silversmiths started a riot because their business was threatened (Acts 19:23-28).'
      },
      {
        question: 'Who were Aquila and Priscilla?',
        options: ['Paul\'s relatives', 'Tentmakers and teachers', 'Silversmiths', 'Gentile converts'],
        correct: 1,
        explanation: 'Aquila and Priscilla were tentmakers who taught Apollos (Acts 18:24-26).'
      }
    ],
    trivia: 'The riot in Ephesus was one of the most dramatic events in Acts.',
    verse: 'Acts 19:1-41'
  },
  {
    id: 't3-macedonia',
    name: 'Macedonia',
    region: 'Macedonia',
    description: 'Paul traveled through Macedonia, encouraging the churches there.',
    emoji: '🚶',
    coordinates: { x: 80, y: 42 },
    people: ['Paul'],
    keyEvent: 'Encouraging the churches',
    questions: [
      {
        question: 'Why did Paul travel through Macedonia?',
        options: ['To plant new churches', 'To encourage the believers', 'To escape persecution', 'To collect an offering'],
        correct: 1,
        explanation: 'Paul traveled through Macedonia to encourage the believers (Acts 20:1-2).'
      }
    ],
    trivia: 'Paul wrote 2 Corinthians during this time.',
    verse: 'Acts 20:1-2'
  },
  {
    id: 't3-corinth',
    name: 'Corinth',
    region: 'Achaia',
    description: 'Paul spent three months in Corinth on his way back to Jerusalem.',
    emoji: '⛪',
    coordinates: { x: 65, y: 32 },
    people: ['Paul'],
    keyEvent: 'Three months in Corinth',
    questions: [
      {
        question: 'How long did Paul stay in Corinth?',
        options: ['One month', 'Three months', 'Six months', 'One year'],
        correct: 1,
        explanation: 'Paul spent three months in Corinth (Acts 20:3).'
      }
    ],
    trivia: 'Paul wrote the letter to the Romans from Corinth.',
    verse: 'Acts 20:3'
  },
  {
    id: 't3-troas',
    name: 'Troas',
    region: 'Mysia',
    description: 'Paul ministered in Troas and raised Eutychus from the dead.',
    emoji: '🔄',
    coordinates: { x: 70, y: 48 },
    people: ['Paul', 'Eutychus'],
    keyEvent: 'Eutychus raised from the dead',
    questions: [
      {
        question: 'What happened in Troas when Paul preached?',
        options: ['A revival broke out', 'A man fell from a window and died', 'Paul was arrested', 'The church grew quickly'],
        correct: 1,
        explanation: 'A young man named Eutychus fell from a window and died, but Paul raised him (Acts 20:7-12).'
      }
    ],
    trivia: 'Eutychus fell asleep during Paul\'s long sermon.',
    verse: 'Acts 20:7-12'
  },
  {
    id: 't3-miletus',
    name: 'Miletus',
    region: 'Asia',
    description: 'Paul gave his farewell address to the Ephesian elders here.',
    emoji: '💔',
    coordinates: { x: 58, y: 45 },
    people: ['Paul', 'Ephesian elders'],
    keyEvent: 'Farewell address',
    questions: [
      {
        question: 'What was Paul\'s message to the Ephesian elders?',
        options: ['He was returning to Jerusalem', 'He was saying goodbye', 'He was warning about false teachers', 'All of the above'],
        correct: 3,
        explanation: 'Paul warned them about false teachers and said his final farewell (Acts 20:17-38).'
      }
    ],
    trivia: 'Paul said "It is more blessed to give than to receive" here.',
    verse: 'Acts 20:17-38'
  },
  {
    id: 't3-tyre',
    name: 'Tyre',
    region: 'Syria',
    description: 'Paul stopped in Tyre, where disciples warned him through the Spirit about going to Jerusalem.',
    emoji: '⚓',
    coordinates: { x: 32, y: 28 },
    people: ['Paul', 'Disciples'],
    keyEvent: 'Warning about Jerusalem',
    questions: [
      {
        question: 'What happened when Paul arrived in Tyre?',
        options: ['He was welcomed', 'The disciples warned him about Jerusalem', 'He was arrested', 'He healed the sick'],
        correct: 1,
        explanation: 'The disciples warned Paul through the Spirit about going to Jerusalem (Acts 21:4).'
      }
    ],
    trivia: 'The believers in Tyre begged Paul not to go to Jerusalem.',
    verse: 'Acts 21:3-6'
  },
  {
    id: 't3-caesarea',
    name: 'Caesarea',
    region: 'Judea',
    description: 'Paul stayed with Philip the evangelist. Agabus prophesied about Paul\'s imprisonment.',
    emoji: '🔮',
    coordinates: { x: 42, y: 22 },
    people: ['Paul', 'Philip', 'Agabus'],
    keyEvent: 'Agabus\' prophecy',
    questions: [
      {
        question: 'What did Agabus prophesy about Paul in Caesarea?',
        options: ['He would be free', 'He would be imprisoned', 'He would die', 'He would preach in Rome'],
        correct: 1,
        explanation: 'Agabus prophesied that Paul would be bound and handed over to the Romans (Acts 21:10-11).'
      }
    ],
    trivia: 'Caesarea was where Paul was later imprisoned for two years.',
    verse: 'Acts 21:8-14'
  },
  {
    id: 't3-jerusalem',
    name: 'Jerusalem',
    region: 'Judea',
    description: 'Paul arrived in Jerusalem and was arrested, beginning his journey to Rome.',
    emoji: '⛓️',
    coordinates: { x: 45, y: 20 },
    people: ['Paul', 'James', 'Elders'],
    keyEvent: 'Arrest in Jerusalem',
    questions: [
      {
        question: 'What happened when Paul arrived in Jerusalem?',
        options: ['He was welcomed by all', 'He was arrested in the temple', 'He preached to the crowds', 'He was sent to Rome'],
        correct: 1,
        explanation: 'Paul was arrested in the temple and a riot broke out (Acts 21:26-34).'
      }
    ],
    trivia: 'Paul\'s arrest in Jerusalem began his journey to Rome.',
    verse: 'Acts 21:27-36'
  }
]

// ============================================================
// PAUL'S JOURNEY TO ROME (Acts 27-28)
// ============================================================

const romeJourneyLocations: JourneyLocation[] = [
  {
    id: 'r-caesarea',
    name: 'Caesarea',
    region: 'Judea',
    description: 'Paul was imprisoned in Caesarea for two years before his journey to Rome.',
    emoji: '⛓️',
    coordinates: { x: 42, y: 22 },
    people: ['Paul', 'Felix', 'Festus', 'Agrippa'],
    keyEvent: 'Imprisonment',
    questions: [
      {
        question: 'How long was Paul imprisoned in Caesarea?',
        options: ['One year', 'Two years', 'Three years', 'Four years'],
        correct: 1,
        explanation: 'Paul was imprisoned in Caesarea for two years (Acts 24:27).'
      },
      {
        question: 'Who heard Paul\'s defense in Caesarea?',
        options: ['Felix, Festus, and Agrippa', 'Nero and the Senate', 'Peter and James', 'The Sanhedrin'],
        correct: 0,
        explanation: 'Paul testified before Felix, Festus, and King Agrippa (Acts 24-26).'
      }
    ],
    trivia: 'Paul appealed to Caesar, which sent him to Rome.',
    verse: 'Acts 24-26'
  },
  {
    id: 'r-sidon',
    name: 'Sidon',
    region: 'Syria',
    description: 'Paul was allowed to visit friends in Sidon during the voyage to Rome.',
    emoji: '⚓',
    coordinates: { x: 32, y: 28 },
    people: ['Paul'],
    keyEvent: 'Stop at Sidon',
    questions: [
      {
        question: 'What special treatment did Paul receive in Sidon?',
        options: ['He was released', 'He was allowed to visit friends', 'He was given a ship', 'He was healed'],
        correct: 1,
        explanation: 'Paul was allowed to go to his friends to receive care (Acts 27:3).'
      }
    ],
    trivia: 'Julius the centurion treated Paul kindly.',
    verse: 'Acts 27:3'
  },
  {
    id: 'r-malta',
    name: 'Malta',
    region: 'Mediterranean',
    description: 'Paul was shipwrecked on Malta and survived a viper\'s bite.',
    emoji: '🏝️',
    coordinates: { x: 55, y: 70 },
    people: ['Paul', 'Publius'],
    keyEvent: 'Shipwreck and viper',
    questions: [
      {
        question: 'What happened to Paul on Malta?',
        options: ['He was shipwrecked', 'He was bitten by a viper', 'He healed many people', 'All of the above'],
        correct: 3,
        explanation: 'Paul was shipwrecked, survived a viper bite, and healed many (Acts 28:1-10).'
      }
    ],
    trivia: 'The people of Malta thought Paul was a god after the viper didn\'t harm him.',
    verse: 'Acts 28:1-10'
  },
  {
    id: 'r-rome',
    name: 'Rome',
    region: 'Italy',
    description: 'Paul arrived in Rome and preached the Gospel to the Gentiles there.',
    emoji: '🏛️',
    coordinates: { x: 50, y: 15 },
    people: ['Paul', 'Roman believers'],
    keyEvent: 'Arrival in Rome',
    questions: [
      {
        question: 'How did Paul spend his time in Rome?',
        options: ['He was in prison constantly', 'He preached the Gospel freely', 'He was executed immediately', 'He wrote his letters'],
        correct: 1,
        explanation: 'Paul lived in his own rented house and preached the Gospel (Acts 28:30-31).'
      }
    ],
    trivia: 'Paul\'s journey to Rome fulfilled the prophecy that he would preach there.',
    verse: 'Acts 28:30-31'
  }
]

// ============================================================
// PHILIP'S JOURNEY (Acts 8)
// ============================================================

const philipJourneyLocations: JourneyLocation[] = [
  {
    id: 'p-jerusalem',
    name: 'Jerusalem',
    region: 'Judea',
    description: 'Philip was one of the seven deacons in Jerusalem.',
    emoji: '🏙️',
    coordinates: { x: 45, y: 20 },
    people: ['Philip', 'Stephen'],
    keyEvent: 'Ministry in Jerusalem',
    questions: [
      {
        question: 'Who was Philip?',
        options: ['An apostle', 'A deacon and evangelist', 'A Pharisee', 'A Roman official'],
        correct: 1,
        explanation: 'Philip was one of the seven deacons and an evangelist (Acts 6:5, 8:5).'
      }
    ],
    trivia: 'Philip was one of the first seven deacons appointed in Acts 6.',
    verse: 'Acts 6:5'
  },
  {
    id: 'p-samaria',
    name: 'Samaria',
    region: 'Samaria',
    description: 'Philip preached the Gospel in Samaria, and many believed.',
    emoji: '🕊️',
    coordinates: { x: 50, y: 30 },
    people: ['Philip', 'Simon the Sorcerer'],
    keyEvent: 'Revival in Samaria',
    questions: [
      {
        question: 'What happened when Philip preached in Samaria?',
        options: ['He was rejected', 'Many believed and were baptized', 'He was arrested', 'He left immediately'],
        correct: 1,
        explanation: 'Many believed and were baptized in Samaria (Acts 8:12).'
      }
    ],
    trivia: 'Simon the Sorcerer tried to buy the power of the Holy Spirit.',
    verse: 'Acts 8:5-25'
  },
  {
    id: 'p-gaza',
    name: 'The Gaza Road',
    region: 'Judea',
    description: 'Philip was led by the Spirit to meet the Ethiopian eunuch on the desert road.',
    emoji: '🏜️',
    coordinates: { x: 40, y: 25 },
    people: ['Philip', 'Ethiopian eunuch'],
    keyEvent: 'Ethiopian eunuch converted',
    questions: [
      {
        question: 'Who did Philip meet on the road to Gaza?',
        options: ['An Ethiopian eunuch', 'A Roman centurion', 'A Samaritan woman', 'A tax collector'],
        correct: 0,
        explanation: 'Philip met the Ethiopian eunuch on the road to Gaza (Acts 8:26-27).'
      },
      {
        question: 'What did the Ethiopian eunuch do after hearing the Gospel?',
        options: ['He rejected it', 'He was baptized', 'He went to Jerusalem', 'He gave money to Philip'],
        correct: 1,
        explanation: 'The Ethiopian eunuch believed and was baptized (Acts 8:36-38).'
      }
    ],
    trivia: 'The Ethiopian was reading from the book of Isaiah when Philip met him.',
    verse: 'Acts 8:26-39'
  },
  {
    id: 'p-azotus',
    name: 'Azotus',
    region: 'Philistia',
    description: 'Philip continued his ministry in the coastal cities of Palestine.',
    emoji: '🗺️',
    coordinates: { x: 42, y: 28 },
    people: ['Philip'],
    keyEvent: 'Continuing ministry',
    questions: [
      {
        question: 'Where did Philip continue his ministry after the Ethiopian eunuch?',
        options: ['Jerusalem', 'Azotus and other cities', 'Rome', 'Antioch'],
        correct: 1,
        explanation: 'Philip preached in Azotus and all the cities along the coast (Acts 8:40).'
      }
    ],
    trivia: 'Philip eventually settled in Caesarea with his four daughters.',
    verse: 'Acts 8:40'
  }
]

// ============================================================
// PETER'S JOURNEY (Acts 9-12)
// ============================================================

const peterJourneyLocations: JourneyLocation[] = [
  {
    id: 'pe-jerusalem',
    name: 'Jerusalem',
    region: 'Judea',
    description: 'Peter was a key leader in the Jerusalem church.',
    emoji: '🏙️',
    coordinates: { x: 45, y: 20 },
    people: ['Peter', 'John', 'James'],
    keyEvent: 'Early ministry',
    questions: [
      {
        question: 'What was Peter\'s role in the early church?',
        options: ['He was a deacon', 'He was a leader and apostle', 'He was a scribe', 'He was a Roman official'],
        correct: 1,
        explanation: 'Peter was one of the leading apostles in the early church (Acts 1-5).'
      }
    ],
    trivia: 'Peter preached the first gospel sermon at Pentecost.',
    verse: 'Acts 2:14-41'
  },
  {
    id: 'pe-joppa',
    name: 'Joppa',
    region: 'Judea',
    description: 'Peter raised Tabitha (Dorcas) from the dead in Joppa.',
    emoji: '🔄',
    coordinates: { x: 44, y: 23 },
    people: ['Peter', 'Tabitha'],
    keyEvent: 'Tabitha raised',
    questions: [
      {
        question: 'What miracle did Peter perform in Joppa?',
        options: ['He healed the blind', 'He raised Tabitha from the dead', 'He walked on water', 'He calmed a storm'],
        correct: 1,
        explanation: 'Peter raised Tabitha (Dorcas) from the dead (Acts 9:36-42).'
      }
    ],
    trivia: 'Tabitha was known for her good works and charity.',
    verse: 'Acts 9:36-43'
  },
  {
    id: 'pe-caesarea',
    name: 'Caesarea',
    region: 'Judea',
    description: 'Peter received a vision and preached to Cornelius, the first Gentile convert.',
    emoji: '👁️',
    coordinates: { x: 42, y: 22 },
    people: ['Peter', 'Cornelius'],
    keyEvent: 'Cornelius converted',
    questions: [
      {
        question: 'What vision did Peter receive in Joppa?',
        options: ['A vision of a great sheet with animals', 'A vision of Jesus', 'A vision of angels', 'A vision of the cross'],
        correct: 0,
        explanation: 'Peter saw a vision of a great sheet with all kinds of animals (Acts 10:9-16).'
      },
      {
        question: 'Who was Cornelius?',
        options: ['A Jewish leader', 'A Roman centurion', 'A Greek philosopher', 'A Syrian merchant'],
        correct: 1,
        explanation: 'Cornelius was a Roman centurion (Acts 10:1).'
      }
    ],
    trivia: 'Cornelius was the first recorded Gentile convert to Christianity.',
    verse: 'Acts 10:1-48'
  },
  {
    id: 'pe-antioch',
    name: 'Antioch',
    region: 'Syria',
    description: 'Peter visited the church in Antioch before Paul\'s first missionary journey.',
    emoji: '🏛️',
    coordinates: { x: 35, y: 25 },
    people: ['Peter', 'Paul', 'Barnabas'],
    keyEvent: 'Conflict with Paul',
    questions: [
      {
        question: 'What happened between Peter and Paul in Antioch?',
        options: ['They agreed on everything', 'Paul confronted Peter about hypocrisy', 'They argued about the law', 'They separated permanently'],
        correct: 1,
        explanation: 'Paul confronted Peter for being hypocritical about eating with Gentiles (Galatians 2:11-14).'
      }
    ],
    trivia: 'The confrontation in Antioch was a key moment in church history.',
    verse: 'Galatians 2:11-14'
  }
]

// ============================================================
// THE JOURNEY OF THE ARK (Genesis 6-9)
// ============================================================

const arkJourneyLocations: JourneyLocation[] = [
  {
    id: 'ark-build',
    name: 'Building the Ark',
    region: 'Mesopotamia',
    description: 'Noah built the ark according to God\'s instructions.',
    emoji: '🔨',
    coordinates: { x: 30, y: 50 },
    people: ['Noah', 'Shem', 'Ham', 'Japheth'],
    keyEvent: 'Construction of the ark',
    questions: [
      {
        question: 'How long did Noah take to build the ark?',
        options: ['50 years', '100 years', '120 years', '150 years'],
        correct: 2,
        explanation: 'Noah built the ark for 120 years (Genesis 6:3).'
      }
    ],
    trivia: 'The ark was 450 feet long, 75 feet wide, and 45 feet high.',
    verse: 'Genesis 6:14-16'
  },
  {
    id: 'ark-enter',
    name: 'Entering the Ark',
    region: 'Mesopotamia',
    description: 'Noah and his family entered the ark, and the flood began.',
    emoji: '🚪',
    coordinates: { x: 30, y: 50 },
    people: ['Noah', 'Shem', 'Ham', 'Japheth', 'Mrs. Noah'],
    keyEvent: 'Entering the ark',
    questions: [
      {
        question: 'How many people entered the ark?',
        options: ['4', '6', '8', '10'],
        correct: 2,
        explanation: 'Eight people entered the ark (Genesis 7:7, 1 Peter 3:20).'
      }
    ],
    trivia: 'Noah and his family were in the ark for about one year.',
    verse: 'Genesis 7:7-13'
  },
  {
    id: 'ark-flood',
    name: 'The Flood',
    region: 'Worldwide',
    description: 'The flood covered the entire earth.',
    emoji: '🌊',
    coordinates: { x: 30, y: 50 },
    people: ['Noah'],
    keyEvent: 'The deluge',
    questions: [
      {
        question: 'How long did the rain fall during the flood?',
        options: ['40 days', '60 days', '80 days', '100 days'],
        correct: 0,
        explanation: 'The rain fell for 40 days and 40 nights (Genesis 7:12).'
      }
    ],
    trivia: 'The flood waters covered even the highest mountains.',
    verse: 'Genesis 7:17-24'
  },
  {
    id: 'ark-dove',
    name: 'The Dove',
    region: 'Worldwide',
    description: 'Noah sent out a dove to find dry land.',
    emoji: '🕊️',
    coordinates: { x: 30, y: 50 },
    people: ['Noah'],
    keyEvent: 'Searching for land',
    questions: [
      {
        question: 'What did the dove bring back to Noah?',
        options: ['A twig', 'An olive leaf', 'A branch', 'A flower'],
        correct: 1,
        explanation: 'The dove brought back a freshly plucked olive leaf (Genesis 8:11).'
      }
    ],
    trivia: 'The olive leaf became a symbol of peace.',
    verse: 'Genesis 8:8-12'
  },
  {
    id: 'ark-rainbow',
    name: 'The Rainbow',
    region: 'Worldwide',
    description: 'God made a covenant with Noah and set the rainbow as a sign.',
    emoji: '🌈',
    coordinates: { x: 30, y: 50 },
    people: ['Noah', 'God'],
    keyEvent: 'Covenant and rainbow',
    questions: [
      {
        question: 'What was the sign of God\'s covenant with Noah?',
        options: ['A star', 'A rainbow', 'A flame', 'A pillar of cloud'],
        correct: 1,
        explanation: 'The rainbow was the sign of God\'s covenant (Genesis 9:12-17).'
      }
    ],
    trivia: 'The rainbow is a symbol of God\'s faithfulness.',
    verse: 'Genesis 9:12-17'
  }
]

// ============================================================
// THE EXODUS JOURNEY (Exodus 1-40)
// ============================================================

const exodusJourneyLocations: JourneyLocation[] = [
  {
    id: 'ex-egypt',
    name: 'Egypt',
    region: 'Egypt',
    description: 'The Israelites were enslaved in Egypt and cried out to God.',
    emoji: '🇪🇬',
    coordinates: { x: 25, y: 70 },
    people: ['Moses', 'Aaron', 'Pharaoh'],
    keyEvent: 'Oppression in Egypt',
    questions: [
      {
        question: 'How long were the Israelites in slavery in Egypt?',
        options: ['200 years', '300 years', '400 years', '500 years'],
        correct: 2,
        explanation: 'The Israelites were in slavery for 400 years (Genesis 15:13, Acts 7:6).'
      }
    ],
    trivia: 'The Israelites grew from 70 people to about 2 million in Egypt.',
    verse: 'Exodus 1:1-22'
  },
  {
    id: 'ex-moses',
    name: 'Call of Moses',
    region: 'Midian',
    description: 'Moses encountered God at the burning bush.',
    emoji: '🔥',
    coordinates: { x: 28, y: 75 },
    people: ['Moses', 'God'],
    keyEvent: 'Burning bush',
    questions: [
      {
        question: 'Where did Moses see the burning bush?',
        options: ['Mount Sinai', 'Mount Horeb', 'Mount Carmel', 'Mount Zion'],
        correct: 1,
        explanation: 'Moses saw the burning bush on Mount Horeb (Exodus 3:1).'
      }
    ],
    trivia: 'Mount Horeb is also known as Mount Sinai.',
    verse: 'Exodus 3:1-12'
  },
  {
    id: 'ex-plagues',
    name: 'The Plagues',
    region: 'Egypt',
    description: 'God sent ten plagues on Egypt to free His people.',
    emoji: '⚠️',
    coordinates: { x: 25, y: 70 },
    people: ['Moses', 'Aaron', 'Pharaoh'],
    keyEvent: 'The ten plagues',
    questions: [
      {
        question: 'How many plagues did God send on Egypt?',
        options: ['5', '7', '10', '12'],
        correct: 2,
        explanation: 'God sent 10 plagues on Egypt (Exodus 7-12).'
      }
    ],
    trivia: 'The tenth plague was the death of the firstborn, which led to the Exodus.',
    verse: 'Exodus 7-12'
  },
  {
    id: 'ex-passover',
    name: 'Passover',
    region: 'Egypt',
    description: 'The Israelites celebrated the Passover and were spared.',
    emoji: '🐑',
    coordinates: { x: 25, y: 70 },
    people: ['Moses', 'Israelites'],
    keyEvent: 'Passover instituted',
    questions: [
      {
        question: 'What did the Israelites put on their doorposts?',
        options: ['A cross', 'Lamb\'s blood', 'Olive oil', 'A mezuzah'],
        correct: 1,
        explanation: 'The Israelites put lamb\'s blood on their doorposts (Exodus 12:7).'
      }
    ],
    trivia: 'Passover commemorates the Exodus from Egypt.',
    verse: 'Exodus 12:1-14'
  },
  {
    id: 'ex-exodus',
    name: 'The Exodus',
    region: 'Egypt to Sinai',
    description: 'The Israelites left Egypt and crossed the Red Sea.',
    emoji: '🏃',
    coordinates: { x: 28, y: 68 },
    people: ['Moses', 'Aaron', 'Israelites'],
    keyEvent: 'Departure from Egypt',
    questions: [
      {
        question: 'How did the Israelites cross the Red Sea?',
        options: ['They swam across', 'They built boats', 'The sea was parted', 'They walked around it'],
        correct: 2,
        explanation: 'The Red Sea was parted and the Israelites walked across on dry ground (Exodus 14:21-22).'
      }
    ],
    trivia: 'The Egyptian army was destroyed in the Red Sea.',
    verse: 'Exodus 14:21-31'
  },
  {
    id: 'ex-sinai',
    name: 'Mount Sinai',
    region: 'Sinai',
    description: 'The Israelites received the Ten Commandments at Sinai.',
    emoji: '🗻',
    coordinates: { x: 32, y: 65 },
    people: ['Moses', 'Israelites'],
    keyEvent: 'Ten Commandments given',
    questions: [
      {
        question: 'What did God give the Israelites at Mount Sinai?',
        options: ['The tabernacle', 'The Ten Commandments', 'The promised land', 'A new leader'],
        correct: 1,
        explanation: 'God gave the Ten Commandments at Mount Sinai (Exodus 20:1-17).'
      }
    ],
    trivia: 'The Ten Commandments are the foundation of God\'s moral law.',
    verse: 'Exodus 20:1-17'
  }
]

// ============================================================
// ALL JOURNEYS
// ============================================================

export const missionaryJourneys: Journey[] = [
  createJourney(
    'first-journey',
    "Paul's First Missionary Journey",
    'Travel with Paul and Barnabas as they spread the Gospel across Asia Minor.',
    'Antioch',
    'Antioch',
    firstJourneyLocations,
    '~1,400 miles',
    ['Paul', 'Barnabas', 'John Mark'],
    'Acts',
    '13-14'
  ),
  createJourney(
    'second-journey',
    "Paul's Second Missionary Journey",
    'Follow Paul, Silas, and Timothy as they bring the Gospel to Europe for the first time.',
    'Antioch',
    'Jerusalem',
    secondJourneyLocations,
    '~2,800 miles',
    ['Paul', 'Silas', 'Timothy', 'Luke'],
    'Acts',
    '15-18'
  ),
  createJourney(
    'third-journey',
    "Paul's Third Missionary Journey",
    'Journey with Paul as he strengthens the churches and faces intense opposition.',
    'Antioch',
    'Jerusalem',
    thirdJourneyLocations,
    '~3,500 miles',
    ['Paul', 'Aquila', 'Priscilla', 'Apollos'],
    'Acts',
    '18-21'
  ),
  createJourney(
    'rome-journey',
    "Paul's Journey to Rome",
    'Follow Paul as he faces a shipwreck and finally arrives in Rome.',
    'Caesarea',
    'Rome',
    romeJourneyLocations,
    '~2,000 miles',
    ['Paul', 'Julius', 'Luke', 'Aristarchus'],
    'Acts',
    '27-28'
  ),
  createJourney(
    'philip-journey',
    "Philip's Missionary Journey",
    'Travel with Philip as he brings the Gospel to Samaria and the Ethiopian eunuch.',
    'Jerusalem',
    'Caesarea',
    philipJourneyLocations,
    '~200 miles',
    ['Philip', 'Ethiopian eunuch'],
    'Acts',
    '8'
  ),
  createJourney(
    'peter-journey',
    "Peter's Journeys",
    'Follow Peter as he ministers to the early church and opens the door to the Gentiles.',
    'Jerusalem',
    'Antioch',
    peterJourneyLocations,
    '~500 miles',
    ['Peter', 'Cornelius', 'Tabitha', 'John Mark'],
    'Acts',
    '9-12'
  ),
  createJourney(
    'ark-journey',
    "Noah's Journey",
    'Travel with Noah through the greatest cataclysm in human history.',
    'Building the Ark',
    'Mount Ararat',
    arkJourneyLocations,
    '~1,000 miles (by boat)',
    ['Noah', 'Shem', 'Ham', 'Japheth', 'Mrs. Noah'],
    'Genesis',
    '6-9'
  ),
  createJourney(
    'exodus-journey',
    "The Exodus Journey",
    'Follow Moses and the Israelites from slavery in Egypt to the Promised Land.',
    'Egypt',
    'Mount Sinai',
    exodusJourneyLocations,
    '~500 miles',
    ['Moses', 'Aaron', 'Miriam', 'Joshua'],
    'Exodus',
    '1-40'
  ),
]

// ============================================================
// HELPER FUNCTIONS
// ============================================================

export const getJourney = (id: string = 'first-journey'): Journey | undefined => {
  return missionaryJourneys.find(j => j.id === id)
}

export const getAllJourneyIds = (): string[] => {
  return missionaryJourneys.map(j => j.id)
}

export const getAllJourneyNames = (): Record<string, string> => {
  return missionaryJourneys.reduce((acc, j) => {
    acc[j.id] = j.name
    return acc
  }, {} as Record<string, string>)
}

export const getLocation = (journeyId: string, locationId: string): JourneyLocation | undefined => {
  const journey = getJourney(journeyId)
  return journey?.locations.find(l => l.id === locationId)
}

export const getNextLocation = (journeyId: string, currentLocationId: string): JourneyLocation | undefined => {
  const journey = getJourney(journeyId)
  if (!journey) return undefined
  
  const currentIndex = journey.locations.findIndex(l => l.id === currentLocationId)
  if (currentIndex === -1 || currentIndex === journey.locations.length - 1) return undefined
  
  return journey.locations[currentIndex + 1]
}

export const getPrevLocation = (journeyId: string, currentLocationId: string): JourneyLocation | undefined => {
  const journey = getJourney(journeyId)
  if (!journey) return undefined
  
  const currentIndex = journey.locations.findIndex(l => l.id === currentLocationId)
  if (currentIndex <= 0) return undefined
  
  return journey.locations[currentIndex - 1]
}

export const getJourneyProgress = (journeyId: string, currentLocationId: string): number => {
  const journey = getJourney(journeyId)
  if (!journey) return 0
  
  const currentIndex = journey.locations.findIndex(l => l.id === currentLocationId)
  if (currentIndex === -1) return 0
  
  return (currentIndex / (journey.locations.length - 1)) * 100
}

export const getLocationByIndex = (journeyId: string, index: number): JourneyLocation | undefined => {
  const journey = getJourney(journeyId)
  if (!journey) return undefined
  
  return journey.locations[index]
}

export const getTotalLocations = (journeyId: string): number => {
  const journey = getJourney(journeyId)
  return journey?.locations.length || 0
}

export const getAllJourneys = (): Journey[] => {
  return missionaryJourneys
}

export const getJourneyStats = () => ({
  totalJourneys: missionaryJourneys.length,
  totalLocations: missionaryJourneys.reduce((sum, j) => sum + j.locations.length, 0),
  totalQuestions: missionaryJourneys.reduce((sum, j) => 
    sum + j.locations.reduce((locSum, loc) => locSum + loc.questions.length, 0), 0
  ),
  journeyNames: missionaryJourneys.map(j => j.name),
  journeyIds: missionaryJourneys.map(j => j.id)
})
