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
  difficulty?: 'easy' | 'medium' | 'hard'
  category?: string
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
  color?: string
  totalQuestions?: number
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
  chapters?: string,
  color?: string
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
  chapters,
  color,
  totalQuestions: locations.reduce((sum, loc) => sum + loc.questions.length, 0)
})

// ============================================================
// 1. FIRST MISSIONARY JOURNEY (Acts 13-14) - ENHANCED
// ============================================================

const firstJourneyLocations: JourneyLocation[] = [
  {
    id: 'f1-antioch',
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
        explanation: 'Barnabas accompanied Paul on the first missionary journey (Acts 13:2-3).',
        difficulty: 'easy',
        category: 'paul'
      },
      {
        question: 'Where did the church in Antioch send Paul and Barnabas from?',
        options: ['Jerusalem', 'Rome', 'Antioch', 'Tarsus'],
        correct: 2,
        explanation: 'The church in Antioch sent them out (Acts 13:1-3).',
        difficulty: 'easy',
        category: 'paul'
      },
      {
        question: 'What did the church do before sending Paul and Barnabas?',
        options: ['They fasted and prayed', 'They collected money', 'They held a feast', 'They built a ship'],
        correct: 0,
        explanation: 'The church fasted and prayed before sending them (Acts 13:2-3).',
        difficulty: 'medium',
        category: 'paul'
      }
    ],
    trivia: 'Antioch was the third largest city in the Roman Empire.',
    verse: 'Acts 13:1-3'
  },
  {
    id: 'f1-seleucia',
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
        explanation: 'They sailed from Seleucia to Cyprus (Acts 13:4).',
        difficulty: 'easy',
        category: 'paul'
      },
      {
        question: 'What sea did Paul and Barnabas cross from Seleucia?',
        options: ['Aegean Sea', 'Mediterranean Sea', 'Red Sea', 'Caspian Sea'],
        correct: 1,
        explanation: 'They sailed across the Mediterranean Sea to Cyprus (Acts 13:4).',
        difficulty: 'medium',
        category: 'geography'
      }
    ],
    trivia: 'Seleucia was the main port of Antioch.',
    verse: 'Acts 13:4'
  },
  {
    id: 'f1-salamis',
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
        explanation: 'They preached in the synagogues of Salamis (Acts 13:5).',
        difficulty: 'easy',
        category: 'paul'
      },
      {
        question: 'Who was with Paul and Barnabas in Salamis?',
        options: ['Silas', 'John Mark', 'Timothy', 'Luke'],
        correct: 1,
        explanation: 'John Mark was with them as a helper (Acts 13:5).',
        difficulty: 'easy',
        category: 'paul'
      }
    ],
    trivia: 'Salamis was the main port city of Cyprus.',
    verse: 'Acts 13:5'
  },
  {
    id: 'f1-paphos',
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
        explanation: 'Paul made Elymas temporarily blind for opposing the Gospel (Acts 13:6-12).',
        difficulty: 'easy',
        category: 'miracles'
      },
      {
        question: 'Who was the proconsul that believed?',
        options: ['Felix', 'Sergius Paulus', 'Festus', 'Agrippa'],
        correct: 1,
        explanation: 'Sergius Paulus believed after seeing Elymas blinded (Acts 13:12).',
        difficulty: 'medium',
        category: 'paul'
      },
      {
        question: 'What was Elymas trying to do?',
        options: ['Convert to Christianity', 'Turn the proconsul from the faith', 'Heal the sick', 'Preach in the synagogue'],
        correct: 1,
        explanation: 'Elymas was trying to turn the proconsul from the faith (Acts 13:8).',
        difficulty: 'medium',
        category: 'paul'
      }
    ],
    trivia: 'Cyprus was Barnabas\'s home country.',
    verse: 'Acts 13:6-12'
  },
  {
    id: 'f1-perga',
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
        explanation: 'John Mark left them and returned to Jerusalem (Acts 13:13).',
        difficulty: 'easy',
        category: 'paul'
      },
      {
        question: 'What did John Mark do when he left Perga?',
        options: ['Went to Rome', 'Returned to Jerusalem', 'Joined another missionary team', 'Went back to Antioch'],
        correct: 1,
        explanation: 'John Mark returned to Jerusalem (Acts 13:13).',
        difficulty: 'medium',
        category: 'paul'
      }
    ],
    trivia: 'Perga was known for its Temple of Artemis.',
    verse: 'Acts 13:13'
  },
  {
    id: 'f1-pisidian',
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
        explanation: 'Paul preached about Jesus as the promised Messiah (Acts 13:16-41).',
        difficulty: 'easy',
        category: 'paul'
      },
      {
        question: 'How did the Jews react to Paul\'s preaching?',
        options: ['They believed', 'They became jealous', 'They ignored him', 'They arrested him'],
        correct: 1,
        explanation: 'The Jews became jealous and contradicted Paul\'s message (Acts 13:45).',
        difficulty: 'medium',
        category: 'paul'
      },
      {
        question: 'What did Paul say when the Jews rejected his message?',
        options: ['I will stay and preach more', 'I turn to the Gentiles', 'I curse you', 'I will go to Rome'],
        correct: 1,
        explanation: 'Paul said, "I turn to the Gentiles" (Acts 13:46).',
        difficulty: 'medium',
        category: 'paul'
      }
    ],
    trivia: 'This is where Paul first said "I turn to the Gentiles".',
    verse: 'Acts 13:14-52'
  },
  {
    id: 'f1-iconium',
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
        explanation: 'A plot was formed to stone them (Acts 14:5).',
        difficulty: 'medium',
        category: 'paul'
      },
      {
        question: 'How did Paul and Barnabas escape Iconium?',
        options: ['They fought their way out', 'They fled to other cities', 'They were rescued by soldiers', 'They were released'],
        correct: 1,
        explanation: 'They fled to Lystra and Derbe (Acts 14:6).',
        difficulty: 'easy',
        category: 'paul'
      }
    ],
    trivia: 'Iconium is now known as Konya, Turkey.',
    verse: 'Acts 14:1-5'
  },
  {
    id: 'f1-lystra',
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
        explanation: 'Paul healed a man crippled from birth (Acts 14:8-10).',
        difficulty: 'easy',
        category: 'miracles'
      },
      {
        question: 'Who did the people of Lystra think Paul and Barnabas were?',
        options: ['Angels', 'Gods', 'Prophets', 'Kings'],
        correct: 1,
        explanation: 'They thought Paul was Hermes and Barnabas was Zeus (Acts 14:11-13).',
        difficulty: 'medium',
        category: 'paul'
      },
      {
        question: 'What happened to Paul after healing the crippled man?',
        options: ['He was praised', 'He was stoned', 'He was arrested', 'He was made king'],
        correct: 1,
        explanation: 'Paul was stoned and left for dead (Acts 14:19).',
        difficulty: 'medium',
        category: 'paul'
      }
    ],
    trivia: 'Timothy was from Lystra and later became Paul\'s companion.',
    verse: 'Acts 14:8-20'
  },
  {
    id: 'f1-derbe',
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
        explanation: 'Many disciples were made in Derbe (Acts 14:21).',
        difficulty: 'easy',
        category: 'paul'
      },
      {
        question: 'What did Paul do after making disciples in Derbe?',
        options: ['He stayed there permanently', 'He returned to the cities he had visited', 'He went to Rome', 'He went back to Jerusalem'],
        correct: 1,
        explanation: 'He returned to Lystra, Iconium, and Antioch to strengthen the disciples (Acts 14:21-22).',
        difficulty: 'medium',
        category: 'paul'
      }
    ],
    trivia: 'Derbe is mentioned as the birthplace of Gaius.',
    verse: 'Acts 14:21'
  },
  {
    id: 'f1-return',
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
        explanation: 'They reported all that God had done with them (Acts 14:27).',
        difficulty: 'easy',
        category: 'paul'
      },
      {
        question: 'How long did Paul stay in Antioch after returning?',
        options: ['A few days', 'A long time', 'He left immediately', 'He went to Jerusalem'],
        correct: 1,
        explanation: 'They stayed a long time with the disciples (Acts 14:28).',
        difficulty: 'medium',
        category: 'paul'
      }
    ],
    trivia: 'This journey covered approximately 1,400 miles.',
    verse: 'Acts 14:26-28'
  }
]

// ============================================================
// 2. SECOND MISSIONARY JOURNEY (Acts 15-18) - ENHANCED
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
        explanation: 'Silas accompanied Paul on the second journey (Acts 15:40).',
        difficulty: 'easy',
        category: 'paul'
      },
      {
        question: 'Why did Paul choose Silas instead of Barnabas?',
        options: ['Barnabas was sick', 'They had a disagreement', 'Barnabas went with John Mark', 'Silas was more experienced'],
        correct: 2,
        explanation: 'Paul and Barnabas disagreed about taking John Mark (Acts 15:36-40).',
        difficulty: 'medium',
        category: 'paul'
      },
      {
        question: 'What was the result of Paul and Barnabas\'s disagreement?',
        options: ['They reconciled', 'They parted ways', 'They went to Rome together', 'They stopped ministering'],
        correct: 1,
        explanation: 'Paul and Barnabas parted ways over the disagreement about John Mark (Acts 15:39).',
        difficulty: 'hard',
        category: 'paul'
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
        explanation: 'Paul strengthened the disciples (Acts 16:1-5).',
        difficulty: 'easy',
        category: 'paul'
      },
      {
        question: 'What was the purpose of Paul revisiting the churches?',
        options: ['To collect money', 'To strengthen them', 'To start new churches', 'To find new leaders'],
        correct: 1,
        explanation: 'Paul revisited the churches to strengthen them (Acts 16:1-5).',
        difficulty: 'medium',
        category: 'paul'
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
        explanation: 'Timothy joined Paul and Silas in Lystra (Acts 16:1-3).',
        difficulty: 'easy',
        category: 'paul'
      },
      {
        question: 'What was Timothy\'s background?',
        options: ['Pure Greek', 'Jewish mother, Greek father', 'Pure Jewish', 'Roman citizen'],
        correct: 1,
        explanation: 'Timothy was the son of a Jewish mother and Greek father (Acts 16:1).',
        difficulty: 'medium',
        category: 'paul'
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
        explanation: 'Paul saw a vision of a man from Macedonia calling for help (Acts 16:9).',
        difficulty: 'easy',
        category: 'paul'
      },
      {
        question: 'Who joined Paul in Troas?',
        options: ['Luke', 'Mark', 'Titus', 'Apollos'],
        correct: 0,
        explanation: 'Luke joined Paul and the others in Troas (Acts 16:10).',
        difficulty: 'medium',
        category: 'paul'
      },
      {
        question: 'What did the Macedonian vision cause Paul to do?',
        options: ['Go to Macedonia', 'Go to Rome', 'Return to Jerusalem', 'Stay in Troas'],
        correct: 0,
        explanation: 'Paul concluded that God was calling them to preach in Macedonia (Acts 16:10).',
        difficulty: 'medium',
        category: 'paul'
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
        explanation: 'Lydia was the first convert in Philippi (Acts 16:14-15).',
        difficulty: 'easy',
        category: 'paul'
      },
      {
        question: 'What happened to Paul and Silas in Philippi?',
        options: ['They were welcomed', 'They were imprisoned', 'They were stoned', 'They were arrested and beaten'],
        correct: 3,
        explanation: 'Paul and Silas were arrested, beaten, and imprisoned (Acts 16:19-24).',
        difficulty: 'medium',
        category: 'paul'
      },
      {
        question: 'What happened during the earthquake in Philippi?',
        options: ['Paul and Silas escaped', 'The jailer was saved', 'The prison collapsed', 'All of the above'],
        correct: 1,
        explanation: 'The jailer and his household were saved (Acts 16:25-34).',
        difficulty: 'medium',
        category: 'paul'
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
        explanation: 'Paul reasoned with them for three Sabbath days (Acts 17:2).',
        difficulty: 'easy',
        category: 'paul'
      },
      {
        question: 'What did the Jews in Thessalonica do?',
        options: ['Believed', 'Remained neutral', 'Started a riot', 'Invited Paul to stay'],
        correct: 2,
        explanation: 'The Jews started a riot against Paul and Silas (Acts 17:5-6).',
        difficulty: 'medium',
        category: 'paul'
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
        explanation: 'The Bereans searched the Scriptures daily to verify Paul\'s teaching (Acts 17:11).',
        difficulty: 'easy',
        category: 'paul'
      },
      {
        question: 'How did the Bereans receive Paul\'s message?',
        options: ['They rejected it', 'They received it eagerly', 'They ignored it', 'They argued with Paul'],
        correct: 1,
        explanation: 'The Bereans received the word with all eagerness (Acts 17:11).',
        difficulty: 'medium',
        category: 'paul'
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
        explanation: 'Paul preached on the Areopagus (Mars Hill) in Athens (Acts 17:22-31).',
        difficulty: 'easy',
        category: 'paul'
      },
      {
        question: 'How did the Athenians respond to Paul\'s sermon?',
        options: ['All believed', 'Some mocked, some wanted to hear more', 'They arrested him', 'They all rejected him'],
        correct: 1,
        explanation: 'Some mocked, others wanted to hear more, and a few believed (Acts 17:32-34).',
        difficulty: 'medium',
        category: 'paul'
      },
      {
        question: 'What was Paul\'s approach in Athens?',
        options: ['He quoted the prophets', 'He quoted Greek poets', 'He preached the Law', 'He performed miracles'],
        correct: 1,
        explanation: 'Paul quoted Greek poets and philosophers to connect with his audience (Acts 17:28).',
        difficulty: 'hard',
        category: 'paul'
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
        explanation: 'Paul stayed in Corinth for eighteen months (Acts 18:11).',
        difficulty: 'easy',
        category: 'paul'
      },
      {
        question: 'Who did Paul meet in Corinth?',
        options: ['Aquila and Priscilla', 'Peter and John', 'Luke and Mark', 'Timothy and Titus'],
        correct: 0,
        explanation: 'Paul met Aquila and Priscilla in Corinth (Acts 18:2-3).',
        difficulty: 'medium',
        category: 'paul'
      },
      {
        question: 'What was Aquila and Priscilla\'s occupation?',
        options: ['Tentmakers', 'Silversmiths', 'Fishermen', 'Teachers'],
        correct: 0,
        explanation: 'Aquila and Priscilla were tentmakers by trade (Acts 18:3).',
        difficulty: 'medium',
        category: 'paul'
      }
    ],
    trivia: 'Paul wrote two letters to the Corinthians.',
    verse: 'Acts 18:1-18'
  },
  {
    id: 's2-ephesus',
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
        explanation: 'Paul left Ephesus quickly and promised to return if God willed (Acts 18:20-21).',
        difficulty: 'medium',
        category: 'paul'
      },
      {
        question: 'Who did Paul leave behind in Ephesus?',
        options: ['Silas', 'Timothy', 'Aquila and Priscilla', 'Luke'],
        correct: 2,
        explanation: 'Paul left Aquila and Priscilla in Ephesus (Acts 18:19).',
        difficulty: 'hard',
        category: 'paul'
      }
    ],
    trivia: 'Paul later spent three years in Ephesus.',
    verse: 'Acts 18:19-21'
  }
]

// ============================================================
// 3. THIRD MISSIONARY JOURNEY (Acts 18-21) - ENHANCED
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
        explanation: 'Paul went to strengthen the churches (Acts 18:23).',
        difficulty: 'easy',
        category: 'paul'
      },
      {
        question: 'How did Paul begin his third journey?',
        options: ['By ship to Rome', 'By traveling through Galatia and Phrygia', 'By going to Jerusalem first', 'By going to Spain'],
        correct: 1,
        explanation: 'Paul traveled through Galatia and Phrygia strengthening the disciples (Acts 18:23).',
        difficulty: 'medium',
        category: 'paul'
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
        explanation: 'Paul revisited the churches of Galatia (Acts 18:23).',
        difficulty: 'easy',
        category: 'paul'
      },
      {
        question: 'What did Paul do in Galatia?',
        options: ['He healed the sick', 'He strengthened the disciples', 'He started new churches', 'He wrote letters'],
        correct: 1,
        explanation: 'Paul strengthened the disciples in Galatia (Acts 18:23).',
        difficulty: 'medium',
        category: 'paul'
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
        explanation: 'Paul spent three years in Ephesus (Acts 20:31).',
        difficulty: 'easy',
        category: 'paul'
      },
      {
        question: 'What caused the riot in Ephesus?',
        options: ['Paul preached against idols', 'The silversmiths lost business', 'The temple was destroyed', 'Paul was arrested'],
        correct: 1,
        explanation: 'The silversmiths started a riot because their business was threatened (Acts 19:23-28).',
        difficulty: 'medium',
        category: 'paul'
      },
      {
        question: 'Who were Aquila and Priscilla?',
        options: ['Paul\'s relatives', 'Tentmakers and teachers', 'Silversmiths', 'Gentile converts'],
        correct: 1,
        explanation: 'Aquila and Priscilla were tentmakers who taught Apollos (Acts 18:24-26).',
        difficulty: 'medium',
        category: 'paul'
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
        explanation: 'Paul traveled through Macedonia to encourage the believers (Acts 20:1-2).',
        difficulty: 'easy',
        category: 'paul'
      },
      {
        question: 'What did Paul do in Macedonia?',
        options: ['He preached to new people', 'He encouraged the believers', 'He wrote letters', 'He healed the sick'],
        correct: 1,
        explanation: 'Paul encouraged the believers in Macedonia (Acts 20:1-2).',
        difficulty: 'medium',
        category: 'paul'
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
        explanation: 'Paul spent three months in Corinth (Acts 20:3).',
        difficulty: 'easy',
        category: 'paul'
      },
      {
        question: 'What did Paul do in Corinth?',
        options: ['He planted a new church', 'He wrote the letter to the Romans', 'He healed the sick', 'He started a school'],
        correct: 1,
        explanation: 'Paul wrote the letter to the Romans from Corinth (Acts 20:3).',
        difficulty: 'hard',
        category: 'paul'
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
        explanation: 'A young man named Eutychus fell from a window and died, but Paul raised him (Acts 20:7-12).',
        difficulty: 'medium',
        category: 'miracles'
      },
      {
        question: 'What was Eutychus doing when he fell?',
        options: ['He was praying', 'He was sleeping', 'He was singing', 'He was serving'],
        correct: 1,
        explanation: 'Eutychus fell asleep during Paul\'s long sermon (Acts 20:9).',
        difficulty: 'medium',
        category: 'miracles'
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
        explanation: 'Paul warned them about false teachers and said his final farewell (Acts 20:17-38).',
        difficulty: 'medium',
        category: 'paul'
      },
      {
        question: 'What famous saying is found in Paul\'s farewell address?',
        options: ['It is more blessed to give than to receive', 'Love your neighbor as yourself', 'The Lord is my shepherd', 'The truth shall set you free'],
        correct: 0,
        explanation: 'Paul said, "It is more blessed to give than to receive" (Acts 20:35).',
        difficulty: 'hard',
        category: 'paul'
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
        explanation: 'The disciples warned Paul through the Spirit about going to Jerusalem (Acts 21:4).',
        difficulty: 'medium',
        category: 'paul'
      },
      {
        question: 'How did the disciples in Tyre show their love for Paul?',
        options: ['They gave him money', 'They prayed with him on the beach', 'They threw a feast', 'They built a church'],
        correct: 1,
        explanation: 'The disciples knelt and prayed with Paul on the beach before his departure (Acts 21:5-6).',
        difficulty: 'hard',
        category: 'paul'
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
        explanation: 'Agabus prophesied that Paul would be bound and handed over to the Romans (Acts 21:10-11).',
        difficulty: 'medium',
        category: 'prophecy'
      },
      {
        question: 'What was Paul\'s response to Agabus\' prophecy?',
        options: ['He was afraid', 'He was willing to die for the Lord', 'He tried to escape', 'He ignored it'],
        correct: 1,
        explanation: 'Paul was willing to be bound and even die for the Lord (Acts 21:13).',
        difficulty: 'hard',
        category: 'paul'
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
        explanation: 'Paul was arrested in the temple and a riot broke out (Acts 21:26-34).',
        difficulty: 'medium',
        category: 'paul'
      },
      {
        question: 'What was the reason for Paul\'s arrest in Jerusalem?',
        options: ['He was preaching against the Law', 'He was accused of bringing Gentiles into the temple', 'He was causing riots', 'He was teaching false doctrine'],
        correct: 1,
        explanation: 'Paul was accused of bringing Gentiles into the temple (Acts 21:28-29).',
        difficulty: 'hard',
        category: 'paul'
      }
    ],
    trivia: 'Paul\'s arrest in Jerusalem began his journey to Rome.',
    verse: 'Acts 21:27-36'
  }
]

// ============================================================
// 4. PAUL'S JOURNEY TO ROME (Acts 27-28) - ENHANCED
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
        explanation: 'Paul was imprisoned in Caesarea for two years (Acts 24:27).',
        difficulty: 'easy',
        category: 'paul'
      },
      {
        question: 'Who heard Paul\'s defense in Caesarea?',
        options: ['Felix, Festus, and Agrippa', 'Nero and the Senate', 'Peter and James', 'The Sanhedrin'],
        correct: 0,
        explanation: 'Paul testified before Felix, Festus, and King Agrippa (Acts 24-26).',
        difficulty: 'medium',
        category: 'paul'
      },
      {
        question: 'What did Paul appeal to?',
        options: ['King Agrippa', 'Caesar', 'The Sanhedrin', 'The Roman Senate'],
        correct: 1,
        explanation: 'Paul appealed to Caesar, which sent him to Rome (Acts 25:11-12).',
        difficulty: 'medium',
        category: 'paul'
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
        explanation: 'Paul was allowed to go to his friends to receive care (Acts 27:3).',
        difficulty: 'easy',
        category: 'paul'
      },
      {
        question: 'Who was the centurion in charge of Paul?',
        options: ['Julius', 'Cornelius', 'Claudius', 'Titus'],
        correct: 0,
        explanation: 'Julius the centurion treated Paul kindly (Acts 27:1-3).',
        difficulty: 'hard',
        category: 'paul'
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
        explanation: 'Paul was shipwrecked, survived a viper bite, and healed many (Acts 28:1-10).',
        difficulty: 'easy',
        category: 'miracles'
      },
      {
        question: 'Who was the chief official on Malta?',
        options: ['Julius', 'Publius', 'Felix', 'Festus'],
        correct: 1,
        explanation: 'Publius was the chief official of Malta who was healed by Paul (Acts 28:7-8).',
        difficulty: 'hard',
        category: 'paul'
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
        explanation: 'Paul lived in his own rented house and preached the Gospel (Acts 28:30-31).',
        difficulty: 'easy',
        category: 'paul'
      },
      {
        question: 'What was Paul allowed to do in Rome?',
        options: ['He was kept in chains but could preach', 'He was completely free', 'He was in a dungeon', 'He was sent to Spain'],
        correct: 0,
        explanation: 'Paul was under house arrest but could preach to anyone who came to him (Acts 28:30-31).',
        difficulty: 'medium',
        category: 'paul'
      }
    ],
    trivia: 'Paul\'s journey to Rome fulfilled the prophecy that he would preach there.',
    verse: 'Acts 28:30-31'
  }
]

// ============================================================
// 5. PHILIP'S JOURNEY (Acts 8) - ENHANCED
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
        explanation: 'Philip was one of the seven deacons and an evangelist (Acts 6:5, 8:5).',
        difficulty: 'easy',
        category: 'philip'
      },
      {
        question: 'What was Philip\'s role in the early church?',
        options: ['He was a teacher', 'He was a deacon and evangelist', 'He was a prophet', 'He was a leader in Jerusalem'],
        correct: 1,
        explanation: 'Philip was one of the seven chosen to serve (Acts 6:5) and later became an evangelist (Acts 8:5).',
        difficulty: 'medium',
        category: 'philip'
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
        explanation: 'Many believed and were baptized in Samaria (Acts 8:12).',
        difficulty: 'easy',
        category: 'philip'
      },
      {
        question: 'Who tried to buy the power of the Holy Spirit?',
        options: ['Simon the Sorcerer', 'The Ethiopian eunuch', 'The Samaritans', 'The apostles'],
        correct: 0,
        explanation: 'Simon the Sorcerer tried to buy the power of the Holy Spirit (Acts 8:18-19).',
        difficulty: 'medium',
        category: 'philip'
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
        explanation: 'Philip met the Ethiopian eunuch on the road to Gaza (Acts 8:26-27).',
        difficulty: 'easy',
        category: 'philip'
      },
      {
        question: 'What did the Ethiopian eunuch do after hearing the Gospel?',
        options: ['He rejected it', 'He was baptized', 'He went to Jerusalem', 'He gave money to Philip'],
        correct: 1,
        explanation: 'The Ethiopian eunuch believed and was baptized (Acts 8:36-38).',
        difficulty: 'medium',
        category: 'philip'
      },
      {
        question: 'What Old Testament book was the eunuch reading?',
        options: ['Psalms', 'Isaiah', 'Jeremiah', 'Genesis'],
        correct: 1,
        explanation: 'The Ethiopian eunuch was reading from the book of Isaiah (Acts 8:28).',
        difficulty: 'hard',
        category: 'philip'
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
        explanation: 'Philip preached in Azotus and all the cities along the coast (Acts 8:40).',
        difficulty: 'easy',
        category: 'philip'
      },
      {
        question: 'Where did Philip eventually settle?',
        options: ['Jerusalem', 'Caesarea', 'Rome', 'Antioch'],
        correct: 1,
        explanation: 'Philip eventually settled in Caesarea with his four daughters (Acts 21:8-9).',
        difficulty: 'medium',
        category: 'philip'
      }
    ],
    trivia: 'Philip eventually settled in Caesarea with his four daughters.',
    verse: 'Acts 8:40'
  }
]

// ============================================================
// 6. PETER'S JOURNEY (Acts 9-12) - ENHANCED
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
        explanation: 'Peter was one of the leading apostles in the early church (Acts 1-5).',
        difficulty: 'easy',
        category: 'peter'
      },
      {
        question: 'What significant event did Peter preach at?',
        options: ['The Last Supper', 'Pentecost', 'The Transfiguration', 'The Ascension'],
        correct: 1,
        explanation: 'Peter preached the first gospel sermon at Pentecost (Acts 2:14-41).',
        difficulty: 'medium',
        category: 'peter'
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
        explanation: 'Peter raised Tabitha (Dorcas) from the dead (Acts 9:36-42).',
        difficulty: 'easy',
        category: 'miracles'
      },
      {
        question: 'What was Tabitha known for?',
        options: ['Her wealth', 'Her good works and charity', 'Her teaching', 'Her prophecies'],
        correct: 1,
        explanation: 'Tabitha was known for her good works and charity (Acts 9:36).',
        difficulty: 'medium',
        category: 'peter'
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
        explanation: 'Peter saw a vision of a great sheet with all kinds of animals (Acts 10:9-16).',
        difficulty: 'easy',
        category: 'peter'
      },
      {
        question: 'Who was Cornelius?',
        options: ['A Jewish leader', 'A Roman centurion', 'A Greek philosopher', 'A Syrian merchant'],
        correct: 1,
        explanation: 'Cornelius was a Roman centurion (Acts 10:1).',
        difficulty: 'medium',
        category: 'peter'
      },
      {
        question: 'What was significant about Cornelius\' conversion?',
        options: ['He was the first Gentile convert', 'He was a Jewish leader', 'He was a Roman emperor', 'He was a priest'],
        correct: 0,
        explanation: 'Cornelius was the first recorded Gentile convert to Christianity (Acts 10).',
        difficulty: 'hard',
        category: 'peter'
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
        explanation: 'Paul confronted Peter for being hypocritical about eating with Gentiles (Galatians 2:11-14).',
        difficulty: 'medium',
        category: 'peter'
      },
      {
        question: 'What was Peter\'s issue in Antioch?',
        options: ['He refused to eat with Gentiles', 'He ate with Gentiles then stopped when Jews came', 'He preached false doctrine', 'He refused to work with Paul'],
        correct: 1,
        explanation: 'Peter ate with Gentiles but stopped when Jewish believers came, showing hypocrisy (Galatians 2:11-13).',
        difficulty: 'hard',
        category: 'peter'
      }
    ],
    trivia: 'The confrontation in Antioch was a key moment in church history.',
    verse: 'Galatians 2:11-14'
  }
]

// ============================================================
// 7. ABRAHAM'S JOURNEY (Genesis 11-25) - ENHANCED
// ============================================================

const abrahamJourneyLocations: JourneyLocation[] = [
  {
    id: 'ab-ur',
    name: 'Ur',
    region: 'Chaldea',
    description: 'Abraham was called by God to leave his homeland and go to a land God would show him.',
    emoji: '🏠',
    coordinates: { x: 15, y: 55 },
    people: ['Abraham', 'Sarah', 'Lot'],
    keyEvent: 'Call of Abraham',
    questions: [
      {
        question: 'Where did God call Abraham from?',
        options: ['Ur of the Chaldeans', 'Haran', 'Canaan', 'Egypt'],
        correct: 0,
        explanation: 'God called Abraham from Ur of the Chaldeans (Genesis 11:31-12:1).',
        difficulty: 'easy',
        category: 'patriarchs'
      },
      {
        question: 'What did God promise Abraham in Ur?',
        options: ['Wealth', 'Land and descendants', 'A long life', 'A kingdom'],
        correct: 1,
        explanation: 'God promised Abraham land and countless descendants (Genesis 12:2-3).',
        difficulty: 'medium',
        category: 'patriarchs'
      }
    ],
    trivia: 'Ur was a major city in ancient Mesopotamia.',
    verse: 'Genesis 12:1-4'
  },
  {
    id: 'ab-haran',
    name: 'Haran',
    region: 'Syria',
    description: 'Abraham stopped in Haran with his family before continuing to Canaan.',
    emoji: '⛺',
    coordinates: { x: 20, y: 48 },
    people: ['Abraham', 'Sarah', 'Lot', 'Terah'],
    keyEvent: 'Stop in Haran',
    questions: [
      {
        question: 'Who died in Haran?',
        options: ['Abraham', 'Sarah', 'Terah', 'Lot'],
        correct: 2,
        explanation: 'Terah, Abraham\'s father, died in Haran (Genesis 11:32).',
        difficulty: 'easy',
        category: 'patriarchs'
      },
      {
        question: 'How long did Abraham stay in Haran?',
        options: ['Until his father died', 'For 5 years', 'For 10 years', 'He never left'],
        correct: 0,
        explanation: 'Abraham stayed in Haran until his father Terah died (Genesis 11:31-32).',
        difficulty: 'medium',
        category: 'patriarchs'
      }
    ],
    trivia: 'Haran was a major trade center.',
    verse: 'Genesis 11:31-32'
  },
  {
    id: 'ab-shechem',
    name: 'Shechem',
    region: 'Canaan',
    description: 'Abraham arrived in Canaan and built an altar at Shechem.',
    emoji: '⛪',
    coordinates: { x: 30, y: 40 },
    people: ['Abraham'],
    keyEvent: 'Arrival in Canaan',
    questions: [
      {
        question: 'What did Abraham do when he arrived in Canaan?',
        options: ['Built a city', 'Built an altar', 'Marched to Jerusalem', 'Went to Egypt'],
        correct: 1,
        explanation: 'Abraham built an altar to the Lord at Shechem (Genesis 12:6-7).',
        difficulty: 'easy',
        category: 'patriarchs'
      },
      {
        question: 'What did God promise Abraham at Shechem?',
        options: ['Wealth', 'The land', 'A son', 'A kingdom'],
        correct: 1,
        explanation: 'God promised the land to Abraham\'s descendants (Genesis 12:7).',
        difficulty: 'medium',
        category: 'patriarchs'
      }
    ],
    trivia: 'Shechem was a significant city in the land of Canaan.',
    verse: 'Genesis 12:6-8'
  },
  {
    id: 'ab-bethel',
    name: 'Bethel',
    region: 'Canaan',
    description: 'Abraham built another altar at Bethel and called on the name of the Lord.',
    emoji: '🏔️',
    coordinates: { x: 32, y: 38 },
    people: ['Abraham'],
    keyEvent: 'Worship at Bethel',
    questions: [
      {
        question: 'What did Abraham do at Bethel?',
        options: ['Built a city', 'Built an altar', 'Fought a battle', 'Met the king of Sodom'],
        correct: 1,
        explanation: 'Abraham built an altar at Bethel and called on the name of the Lord (Genesis 12:8).',
        difficulty: 'easy',
        category: 'patriarchs'
      },
      {
        question: 'What does "Bethel" mean?',
        options: ['House of God', 'City of Peace', 'Mountain of God', 'Field of Promise'],
        correct: 0,
        explanation: 'Bethel means "House of God" (Genesis 28:19).',
        difficulty: 'medium',
        category: 'patriarchs'
      }
    ],
    trivia: 'Bethel means "House of God".',
    verse: 'Genesis 12:8'
  },
  {
    id: 'ab-egypt',
    name: 'Egypt',
    region: 'Egypt',
    description: 'Abraham went to Egypt during a famine but was sent back by Pharaoh.',
    emoji: '🇪🇬',
    coordinates: { x: 25, y: 70 },
    people: ['Abraham', 'Sarah', 'Pharaoh'],
    keyEvent: 'Sojourn in Egypt',
    questions: [
      {
        question: 'Why did Abraham go to Egypt?',
        options: ['To escape persecution', 'Because of a famine', 'To trade goods', 'To visit relatives'],
        correct: 1,
        explanation: 'Abraham went to Egypt because there was a famine in the land (Genesis 12:10).',
        difficulty: 'easy',
        category: 'patriarchs'
      },
      {
        question: 'What did Abraham say about Sarah in Egypt?',
        options: ['She is my sister', 'She is my wife', 'She is my servant', 'She is my daughter'],
        correct: 0,
        explanation: 'Abraham said Sarah was his sister to protect himself (Genesis 12:11-13).',
        difficulty: 'medium',
        category: 'patriarchs'
      }
    ],
    trivia: 'Abraham lied about Sarah being his sister in Egypt.',
    verse: 'Genesis 12:10-20'
  },
  {
    id: 'ab-mamre',
    name: 'Mamre (Hebron)',
    region: 'Canaan',
    description: 'Abraham settled in Hebron and built an altar to the Lord.',
    emoji: '🌳',
    coordinates: { x: 30, y: 35 },
    people: ['Abraham', 'Sarah'],
    keyEvent: 'Settlement in Hebron',
    questions: [
      {
        question: 'Where did Abraham settle in Canaan?',
        options: ['Shechem', 'Bethel', 'Hebron', 'Beersheba'],
        correct: 2,
        explanation: 'Abraham settled in Hebron (Genesis 13:18).',
        difficulty: 'easy',
        category: 'patriarchs'
      },
      {
        question: 'What is significant about Hebron for Abraham?',
        options: ['He built a city there', 'He bought a burial cave there', 'He built the Temple there', 'He met God there'],
        correct: 1,
        explanation: 'Abraham bought the cave of Machpelah in Hebron for Sarah\'s burial (Genesis 23).',
        difficulty: 'hard',
        category: 'patriarchs'
      }
    ],
    trivia: 'Abraham bought the cave of Machpelah in Hebron for Sarah\'s burial.',
    verse: 'Genesis 13:18'
  },
  {
    id: 'ab-moriah',
    name: 'Mount Moriah',
    region: 'Canaan',
    description: 'Abraham was tested by God to sacrifice Isaac on Mount Moriah.',
    emoji: '🗻',
    coordinates: { x: 35, y: 25 },
    people: ['Abraham', 'Isaac'],
    keyEvent: 'Testing of Abraham',
    questions: [
      {
        question: 'Where did Abraham go to sacrifice Isaac?',
        options: ['Mount Sinai', 'Mount Moriah', 'Mount Carmel', 'Mount Zion'],
        correct: 1,
        explanation: 'Abraham went to Mount Moriah to sacrifice Isaac (Genesis 22:2).',
        difficulty: 'easy',
        category: 'patriarchs'
      },
      {
        question: 'What did God provide as a substitute sacrifice?',
        options: ['A lamb', 'A ram', 'A goat', 'A bull'],
        correct: 1,
        explanation: 'God provided a ram caught in a thicket as a substitute (Genesis 22:13).',
        difficulty: 'easy',
        category: 'patriarchs'
      },
      {
        question: 'What did Abraham\'s willingness to sacrifice Isaac demonstrate?',
        options: ['His love for God', 'His fear of God', 'His obedience to God', 'All of the above'],
        correct: 3,
        explanation: 'Abraham\'s obedience demonstrated his faith and love for God (Genesis 22:12).',
        difficulty: 'hard',
        category: 'patriarchs'
      }
    ],
    trivia: 'Mount Moriah later became the site of Solomon\'s Temple.',
    verse: 'Genesis 22:1-14'
  },
  {
    id: 'ab-beersheba',
    name: 'Beersheba',
    region: 'Canaan',
    description: 'Abraham made a covenant with Abimelech at Beersheba.',
    emoji: '⛲',
    coordinates: { x: 28, y: 32 },
    people: ['Abraham', 'Abimelech'],
    keyEvent: 'Covenant at Beersheba',
    questions: [
      {
        question: 'What did Abraham and Abimelech make at Beersheba?',
        options: ['A treaty', 'An alliance', 'A covenant', 'A trade agreement'],
        correct: 2,
        explanation: 'Abraham and Abimelech made a covenant at Beersheba (Genesis 21:27-32).',
        difficulty: 'medium',
        category: 'patriarchs'
      },
      {
        question: 'What does "Beersheba" mean?',
        options: ['Well of the oath', 'House of God', 'City of Peace', 'Mountain of God'],
        correct: 0,
        explanation: 'Beersheba means "well of the oath" (Genesis 21:31).',
        difficulty: 'hard',
        category: 'patriarchs'
      }
    ],
    trivia: 'Beersheba means "well of the oath".',
    verse: 'Genesis 21:22-34'
  }
]

// ============================================================
// 8. JACOB'S JOURNEY (Genesis 27-35) - ENHANCED
// ============================================================

const jacobJourneyLocations: JourneyLocation[] = [
  {
    id: 'jac-beersheba',
    name: 'Beersheba',
    region: 'Canaan',
    description: 'Jacob left Beersheba to flee from Esau and find a wife.',
    emoji: '🏠',
    coordinates: { x: 28, y: 32 },
    people: ['Jacob', 'Isaac', 'Rebekah'],
    keyEvent: 'Departure from Beersheba',
    questions: [
      {
        question: 'Why did Jacob leave Beersheba?',
        options: ['To escape Esau\'s anger', 'To find a wife', 'To seek his fortune', 'Both A and B'],
        correct: 3,
        explanation: 'Jacob left to escape Esau\'s anger and to find a wife (Genesis 27:41-28:2).',
        difficulty: 'easy',
        category: 'patriarchs'
      },
      {
        question: 'Who sent Jacob away from Beersheba?',
        options: ['Isaac', 'Rebekah', 'Esau', 'God'],
        correct: 1,
        explanation: 'Rebekah sent Jacob away to protect him from Esau (Genesis 27:42-45).',
        difficulty: 'medium',
        category: 'patriarchs'
      }
    ],
    trivia: 'Jacob was fleeing from his brother Esau who wanted to kill him.',
    verse: 'Genesis 28:1-5'
  },
  {
    id: 'jac-bethel',
    name: 'Bethel',
    region: 'Canaan',
    description: 'Jacob had a dream of a ladder reaching to heaven at Bethel.',
    emoji: '🪜',
    coordinates: { x: 32, y: 38 },
    people: ['Jacob'],
    keyEvent: 'Jacob\'s ladder vision',
    questions: [
      {
        question: 'What did Jacob see in his dream at Bethel?',
        options: ['A pillar of fire', 'A ladder reaching to heaven', 'Angels singing', 'A burning bush'],
        correct: 1,
        explanation: 'Jacob saw a ladder reaching to heaven with angels ascending and descending (Genesis 28:12).',
        difficulty: 'easy',
        category: 'patriarchs'
      },
      {
        question: 'What did God promise Jacob at Bethel?',
        options: ['Wealth', 'The land and descendants', 'A long life', 'A kingdom'],
        correct: 1,
        explanation: 'God promised Jacob the land and numerous descendants (Genesis 28:13-15).',
        difficulty: 'medium',
        category: 'patriarchs'
      }
    ],
    trivia: 'Jacob renamed the place Bethel, meaning "House of God".',
    verse: 'Genesis 28:10-22'
  },
  {
    id: 'jac-haran',
    name: 'Haran',
    region: 'Syria',
    description: 'Jacob stayed in Haran for 20 years, worked for Laban, and married Leah and Rachel.',
    emoji: '🏛️',
    coordinates: { x: 20, y: 48 },
    people: ['Jacob', 'Leah', 'Rachel', 'Laban'],
    keyEvent: 'Laban\'s household',
    questions: [
      {
        question: 'How long did Jacob work for Laban?',
        options: ['7 years', '14 years', '20 years', '40 years'],
        correct: 2,
        explanation: 'Jacob worked for Laban for 20 years (Genesis 31:38-41).',
        difficulty: 'easy',
        category: 'patriarchs'
      },
      {
        question: 'Who were Jacob\'s wives?',
        options: ['Leah and Rachel', 'Sarah and Hagar', 'Rebecca and Leah', 'Rachel and Esther'],
        correct: 0,
        explanation: 'Jacob married Leah and Rachel, the daughters of Laban (Genesis 29:21-30).',
        difficulty: 'easy',
        category: 'patriarchs'
      },
      {
        question: 'How many sons did Jacob have?',
        options: ['10', '12', '14', '16'],
        correct: 1,
        explanation: 'Jacob had 12 sons who became the 12 tribes of Israel (Genesis 35:22-26).',
        difficulty: 'medium',
        category: 'patriarchs'
      }
    ],
    trivia: 'Jacob married two sisters and had 12 sons who became the 12 tribes of Israel.',
    verse: 'Genesis 29-31'
  },
  {
    id: 'jac-peniel',
    name: 'Peniel',
    region: 'Transjordan',
    description: 'Jacob wrestled with God at Peniel and was renamed Israel.',
    emoji: '🤼',
    coordinates: { x: 38, y: 45 },
    people: ['Jacob'],
    keyEvent: 'Wrestling with God',
    questions: [
      {
        question: 'What happened to Jacob at Peniel?',
        options: ['He was injured', 'He wrestled with God', 'His name was changed to Israel', 'All of the above'],
        correct: 3,
        explanation: 'Jacob wrestled with God, was injured, and his name was changed to Israel (Genesis 32:24-32).',
        difficulty: 'medium',
        category: 'patriarchs'
      },
      {
        question: 'What does "Peniel" mean?',
        options: ['Face of God', 'House of God', 'Well of the oath', 'Mountain of God'],
        correct: 0,
        explanation: 'Peniel means "face of God" because Jacob saw God face to face (Genesis 32:30).',
        difficulty: 'hard',
        category: 'patriarchs'
      }
    ],
    trivia: 'Peniel means "face of God" because Jacob saw God face to face.',
    verse: 'Genesis 32:22-32'
  },
  {
    id: 'jac-succoth',
    name: 'Succoth',
    region: 'Canaan',
    description: 'Jacob built a place for himself at Succoth after returning from Haran.',
    emoji: '🏗️',
    coordinates: { x: 36, y: 40 },
    people: ['Jacob'],
    keyEvent: 'Settlement in Succoth',
    questions: [
      {
        question: 'What did Jacob build at Succoth?',
        options: ['An altar', 'A city', 'A house for himself and booths for his livestock', 'A temple'],
        correct: 2,
        explanation: 'Jacob built a house for himself and made booths for his livestock at Succoth (Genesis 33:17).',
        difficulty: 'medium',
        category: 'patriarchs'
      },
      {
        question: 'What does "Succoth" mean?',
        options: ['Booths', 'Tents', 'Houses', 'City'],
        correct: 0,
        explanation: 'The name Succoth means "booths" (Genesis 33:17).',
        difficulty: 'hard',
        category: 'patriarchs'
      }
    ],
    trivia: 'The name Succoth means "booths".',
    verse: 'Genesis 33:17'
  },
  {
    id: 'jac-shechem',
    name: 'Shechem',
    region: 'Canaan',
    description: 'Jacob settled in Shechem and bought land there.',
    emoji: '⛺',
    coordinates: { x: 30, y: 40 },
    people: ['Jacob', 'Hamor', 'Shechem'],
    keyEvent: 'Settlement in Shechem',
    questions: [
      {
        question: 'What happened to Jacob\'s daughter Dinah in Shechem?',
        options: ['She married the prince', 'She was kidnapped and violated', 'She became a prophetess', 'She went back to Haran'],
        correct: 1,
        explanation: 'Dinah was kidnapped and violated by Shechem, the son of Hamor (Genesis 34:1-2).',
        difficulty: 'medium',
        category: 'patriarchs'
      },
      {
        question: 'How did Jacob\'s sons respond to Dinah\'s violation?',
        options: ['They forgave Shechem', 'They killed the men of Shechem', 'They left the city', 'They made a treaty'],
        correct: 1,
        explanation: 'Jacob\'s sons Simeon and Levi avenged Dinah by killing the men of Shechem (Genesis 34:25-29).',
        difficulty: 'hard',
        category: 'patriarchs'
      }
    ],
    trivia: 'Jacob\'s sons Simeon and Levi avenged Dinah by killing the men of Shechem.',
    verse: 'Genesis 34:1-31'
  },
  {
    id: 'jac-bethel-return',
    name: 'Return to Bethel',
    region: 'Canaan',
    description: 'Jacob returned to Bethel and built an altar, as God had commanded.',
    emoji: '⛪',
    coordinates: { x: 32, y: 38 },
    people: ['Jacob'],
    keyEvent: 'Return to Bethel',
    questions: [
      {
        question: 'Why did Jacob return to Bethel?',
        options: ['To find his family', 'To build an altar as God commanded', 'To fight a battle', 'To buy more land'],
        correct: 1,
        explanation: 'God told Jacob to return to Bethel and build an altar (Genesis 35:1).',
        difficulty: 'easy',
        category: 'patriarchs'
      },
      {
        question: 'What did Jacob do at Bethel?',
        options: ['He built an altar', 'He prayed', 'He worshipped God', 'All of the above'],
        correct: 3,
        explanation: 'Jacob built an altar, prayed, and worshipped God at Bethel (Genesis 35:1-7).',
        difficulty: 'medium',
        category: 'patriarchs'
      }
    ],
    trivia: 'This was Jacob\'s second visit to Bethel.',
    verse: 'Genesis 35:1-15'
  },
  {
    id: 'jac-hebron',
    name: 'Hebron',
    region: 'Canaan',
    description: 'Jacob returned to Hebron, where his father Isaac lived.',
    emoji: '🏡',
    coordinates: { x: 30, y: 35 },
    people: ['Jacob', 'Isaac'],
    keyEvent: 'Return to Hebron',
    questions: [
      {
        question: 'Where did Jacob finally settle after all his travels?',
        options: ['Shechem', 'Bethel', 'Hebron', 'Beersheba'],
        correct: 2,
        explanation: 'Jacob came to Hebron where his father Isaac lived (Genesis 35:27).',
        difficulty: 'easy',
        category: 'patriarchs'
      },
      {
        question: 'What happened to Isaac after Jacob returned?',
        options: ['He became king', 'He died', 'He went to Egypt', 'He blessed his sons'],
        correct: 1,
        explanation: 'Isaac died at Hebron and was buried by Jacob and Esau (Genesis 35:29).',
        difficulty: 'medium',
        category: 'patriarchs'
      }
    ],
    trivia: 'Jacob returned to Hebron after 20 years away.',
    verse: 'Genesis 35:27-29'
  }
]

// ============================================================
// 9. JOSEPH'S JOURNEY (Genesis 37-50) - ENHANCED
// ============================================================

const josephJourneyLocations: JourneyLocation[] = [
  {
    id: 'joe-canaan',
    name: 'Canaan (Hebron)',
    region: 'Canaan',
    description: 'Joseph was the favorite son of Jacob, living in Canaan with his family.',
    emoji: '🏠',
    coordinates: { x: 30, y: 35 },
    people: ['Joseph', 'Jacob', 'Brothers'],
    keyEvent: 'Favorite son',
    questions: [
      {
        question: 'What did Jacob give Joseph that made his brothers jealous?',
        options: ['A ring', 'A coat of many colors', 'A sword', 'A kingdom'],
        correct: 1,
        explanation: 'Jacob gave Joseph a coat of many colors (Genesis 37:3).',
        difficulty: 'easy',
        category: 'patriarchs'
      },
      {
        question: 'Why were Joseph\'s brothers jealous of him?',
        options: ['He was the oldest', 'He had a special coat', 'He was handsome', 'He was rich'],
        correct: 1,
        explanation: 'Jacob\'s favoritism and the special coat made his brothers jealous (Genesis 37:3-4).',
        difficulty: 'medium',
        category: 'patriarchs'
      }
    ],
    trivia: 'Joseph\'s coat was a sign of his father\'s favor.',
    verse: 'Genesis 37:1-4'
  },
  {
    id: 'joe-dothan',
    name: 'Dothan',
    region: 'Canaan',
    description: 'Joseph was sold into slavery by his brothers in Dothan.',
    emoji: '⛓️',
    coordinates: { x: 35, y: 42 },
    people: ['Joseph', 'Brothers', 'Midianite traders'],
    keyEvent: 'Sold into slavery',
    questions: [
      {
        question: 'Who sold Joseph into slavery?',
        options: ['His brothers', 'His father', 'Strangers', 'The Egyptians'],
        correct: 0,
        explanation: 'Joseph\'s brothers sold him to Midianite traders for 20 pieces of silver (Genesis 37:25-28).',
        difficulty: 'easy',
        category: 'patriarchs'
      },
      {
        question: 'How much did Joseph\'s brothers sell him for?',
        options: ['10 pieces of silver', '20 pieces of silver', '30 pieces of silver', '40 pieces of silver'],
        correct: 1,
        explanation: 'Joseph was sold for 20 pieces of silver (Genesis 37:28).',
        difficulty: 'medium',
        category: 'patriarchs'
      }
    ],
    trivia: 'Reuben tried to save Joseph but was too late.',
    verse: 'Genesis 37:18-28'
  },
  {
    id: 'joe-egypt',
    name: 'Egypt',
    region: 'Egypt',
    description: 'Joseph was sold to Potiphar in Egypt and later rose to power.',
    emoji: '🇪🇬',
    coordinates: { x: 25, y: 70 },
    people: ['Joseph', 'Potiphar', 'Pharaoh'],
    keyEvent: 'Rise to power',
    questions: [
      {
        question: 'What position did Joseph eventually hold in Egypt?',
        options: ['Baker', 'Cupbearer', 'Second in command to Pharaoh', 'Soldier'],
        correct: 2,
        explanation: 'Joseph became second in command to Pharaoh (Genesis 41:39-44).',
        difficulty: 'easy',
        category: 'patriarchs'
      },
      {
        question: 'Who was Joseph\'s master in Egypt?',
        options: ['Pharaoh', 'Potiphar', 'The king\'s cupbearer', 'The baker'],
        correct: 1,
        explanation: 'Joseph was bought by Potiphar, the captain of the guard (Genesis 39:1).',
        difficulty: 'easy',
        category: 'patriarchs'
      },
      {
        question: 'What did Joseph interpret for Pharaoh?',
        options: ['A dream about a famine', 'A dream about a storm', 'A dream about a battle', 'A dream about a plague'],
        correct: 0,
        explanation: 'Joseph interpreted Pharaoh\'s dream of seven years of plenty and seven years of famine (Genesis 41:25-30).',
        difficulty: 'medium',
        category: 'patriarchs'
      }
    ],
    trivia: 'Joseph interpreted Pharaoh\'s dream of seven years of plenty and seven years of famine.',
    verse: 'Genesis 39-41'
  },
  {
    id: 'joe-goshen',
    name: 'Goshen',
    region: 'Egypt',
    description: 'Joseph\'s family came to Egypt and settled in the land of Goshen.',
    emoji: '🌾',
    coordinates: { x: 28, y: 72 },
    people: ['Joseph', 'Jacob', 'Brothers'],
    keyEvent: 'Family reunites',
    questions: [
      {
        question: 'How many people came to Egypt with Jacob?',
        options: ['30', '50', '70', '100'],
        correct: 2,
        explanation: 'Seventy persons came to Egypt with Jacob (Genesis 46:26-27).',
        difficulty: 'medium',
        category: 'patriarchs'
      },
      {
        question: 'What part of Egypt did Joseph give his family?',
        options: ['The land of Goshen', 'The city of Thebes', 'The Nile Delta', 'The desert'],
        correct: 0,
        explanation: 'Joseph gave his family the land of Goshen (Genesis 46:28-47:6).',
        difficulty: 'medium',
        category: 'patriarchs'
      }
    ],
    trivia: 'The land of Goshen was the best part of Egypt for shepherds.',
    verse: 'Genesis 46:28-47:6'
  },
  {
    id: 'joe-return',
    name: 'Return to Canaan (Joseph\'s bones)',
    region: 'Canaan',
    description: 'Joseph\'s bones were carried back to Canaan as he had requested.',
    emoji: '⚰️',
    coordinates: { x: 30, y: 35 },
    people: ['Joseph', 'Israelites'],
    keyEvent: 'Joseph\'s bones return',
    questions: [
      {
        question: 'Who took Joseph\'s bones back to Canaan?',
        options: ['Jacob', 'Moses', 'Joshua', 'David'],
        correct: 2,
        explanation: 'Joshua took Joseph\'s bones back to Canaan (Joshua 24:32).',
        difficulty: 'medium',
        category: 'patriarchs'
      },
      {
        question: 'Where were Joseph\'s bones buried?',
        options: ['Hebron', 'Shechem', 'Jerusalem', 'Bethel'],
        correct: 1,
        explanation: 'Joseph\'s bones were buried at Shechem (Joshua 24:32).',
        difficulty: 'hard',
        category: 'patriarchs'
      }
    ],
    trivia: 'Joseph\'s bones were buried at Shechem.',
    verse: 'Joshua 24:32'
  }
]

// ============================================================
// 10. JOSHUA'S CONQUEST (Joshua 1-12) - ENHANCED
// ============================================================

const joshuaJourneyLocations: JourneyLocation[] = [
  {
    id: 'jos-shittim',
    name: 'Shittim',
    region: 'Moab',
    description: 'Joshua prepared the people to cross the Jordan River at Shittim.',
    emoji: '⛺',
    coordinates: { x: 38, y: 50 },
    people: ['Joshua', 'Israelites'],
    keyEvent: 'Preparation to cross',
    questions: [
      {
        question: 'What was the first thing God told Joshua to do after Moses\' death?',
        options: ['Build an altar', 'Cross the Jordan', 'March around Jericho', 'Conquer Jerusalem'],
        correct: 1,
        explanation: 'God told Joshua to cross the Jordan River (Joshua 1:2).',
        difficulty: 'easy',
        category: 'conquest'
      },
      {
        question: 'What did God promise Joshua before crossing the Jordan?',
        options: ['Wealth', 'Victory', 'A long life', 'A kingdom'],
        correct: 1,
        explanation: 'God promised Joshua victory as long as he was strong and courageous (Joshua 1:6-9).',
        difficulty: 'medium',
        category: 'conquest'
      }
    ],
    trivia: 'Shittim was the last camp before crossing the Jordan.',
    verse: 'Joshua 3:1'
  },
  {
    id: 'jos-jordan',
    name: 'Jordan River',
    region: 'Transjordan/Canaan',
    description: 'Joshua led Israel across the Jordan River on dry ground.',
    emoji: '🌊',
    coordinates: { x: 40, y: 42 },
    people: ['Joshua', 'Priests', 'Israelites'],
    keyEvent: 'Crossing the Jordan',
    questions: [
      {
        question: 'What happened when the priests stepped into the Jordan?',
        options: ['They swam across', 'The water stopped flowing', 'They turned back', 'They built a bridge'],
        correct: 1,
        explanation: 'The water stopped flowing and the people crossed on dry ground (Joshua 3:15-17).',
        difficulty: 'easy',
        category: 'conquest'
      },
      {
        question: 'How many priests carried the Ark of the Covenant?',
        options: ['4', '8', '12', '24'],
        correct: 0,
        explanation: 'Four priests carried the Ark of the Covenant (Joshua 3:12).',
        difficulty: 'hard',
        category: 'conquest'
      }
    ],
    trivia: 'The Jordan River parted just like the Red Sea.',
    verse: 'Joshua 3:14-17'
  },
  {
    id: 'jos-gilgal',
    name: 'Gilgal',
    region: 'Canaan',
    description: 'Israel set up camp at Gilgal and Joshua set up twelve stones as a memorial.',
    emoji: '🪨',
    coordinates: { x: 42, y: 38 },
    people: ['Joshua', 'Israelites'],
    keyEvent: 'Camp at Gilgal',
    questions: [
      {
        question: 'What did Joshua set up at Gilgal as a memorial?',
        options: ['An altar', 'Twelve stones', 'A pillar', 'A monument'],
        correct: 1,
        explanation: 'Joshua set up twelve stones as a memorial of crossing the Jordan (Joshua 4:19-24).',
        difficulty: 'easy',
        category: 'conquest'
      },
      {
        question: 'Why did Joshua set up the memorial stones?',
        options: ['To mark the camp', 'To remind future generations of God\'s faithfulness', 'To honor the priests', 'To mark the boundary'],
        correct: 1,
        explanation: 'The memorial stones were to remind future generations of God\'s faithfulness (Joshua 4:21-24).',
        difficulty: 'medium',
        category: 'conquest'
      }
    ],
    trivia: 'The memorial stones were to remind future generations of God\'s faithfulness.',
    verse: 'Joshua 4:19-24'
  },
  {
    id: 'jos-jericho',
    name: 'Jericho',
    region: 'Canaan',
    description: 'The walls of Jericho fell after the Israelites marched around them for seven days.',
    emoji: '🏛️',
    coordinates: { x: 44, y: 35 },
    people: ['Joshua', 'Israelites'],
    keyEvent: 'Fall of Jericho',
    questions: [
      {
        question: 'How many days did Israel march around Jericho?',
        options: ['3 days', '7 days', '14 days', '40 days'],
        correct: 1,
        explanation: 'Israel marched around Jericho for seven days (Joshua 6:1-16).',
        difficulty: 'easy',
        category: 'conquest'
      },
      {
        question: 'Who was saved in Jericho?',
        options: ['All the people', 'Rahab and her family', 'The priests', 'The king of Jericho'],
        correct: 1,
        explanation: 'Rahab and her family were saved because she hid the spies (Joshua 6:22-25).',
        difficulty: 'easy',
        category: 'conquest'
      },
      {
        question: 'What caused the walls of Jericho to fall?',
        options: ['An earthquake', 'The people shouted', 'A battering ram', 'A flood'],
        correct: 1,
        explanation: 'The walls of Jericho fell after the people shouted (Joshua 6:20).',
        difficulty: 'medium',
        category: 'conquest'
      }
    ],
    trivia: 'The walls of Jericho fell after the people shouted.',
    verse: 'Joshua 6:1-27'
  },
  {
    id: 'jos-ai',
    name: 'Ai',
    region: 'Canaan',
    description: 'Israel was defeated at Ai because Achan took devoted things.',
    emoji: '⚔️',
    coordinates: { x: 46, y: 36 },
    people: ['Joshua', 'Achan', 'Israelites'],
    keyEvent: 'Defeat at Ai',
    questions: [
      {
        question: 'Why was Israel defeated at Ai?',
        options: ['They were outnumbered', 'Achan took devoted things', 'They didn\'t trust God', 'They fought on the wrong day'],
        correct: 1,
        explanation: 'Israel was defeated because Achan took devoted things from Jericho (Joshua 7:1-5).',
        difficulty: 'medium',
        category: 'conquest'
      },
      {
        question: 'What did Achan take from Jericho?',
        options: ['Gold and silver', 'A beautiful robe', 'A Babylonian garment', 'All of the above'],
        correct: 3,
        explanation: 'Achan took a Babylonian garment, silver, and gold from Jericho (Joshua 7:21).',
        difficulty: 'hard',
        category: 'conquest'
      }
    ],
    trivia: 'Achan\'s sin affected the entire nation.',
    verse: 'Joshua 7:1-26'
  },
  {
    id: 'jos-gibeon',
    name: 'Gibeon',
    region: 'Canaan',
    description: 'The Gibeonites tricked Joshua into making a treaty with them.',
    emoji: '🤝',
    coordinates: { x: 43, y: 33 },
    people: ['Joshua', 'Gibeonites'],
    keyEvent: 'Treaty with Gibeon',
    questions: [
      {
        question: 'How did the Gibeonites trick Joshua?',
        options: ['They pretended to be from a distant land', 'They offered him a bribe', 'They attacked at night', 'They sent a messenger with false information'],
        correct: 0,
        explanation: 'The Gibeonites pretended to be from a distant land to make a treaty (Joshua 9:3-15).',
        difficulty: 'medium',
        category: 'conquest'
      },
      {
        question: 'What happened to the Gibeonites after the treaty?',
        options: ['They were killed', 'They became servants to Israel', 'They left the land', 'They became rulers'],
        correct: 1,
        explanation: 'The Gibeonites became servants to Israel because of their deception (Joshua 9:27).',
        difficulty: 'hard',
        category: 'conquest'
      }
    ],
    trivia: 'The Gibeonites became servants to Israel because of their deception.',
    verse: 'Joshua 9:1-27'
  },
  {
    id: 'jos-sun',
    name: 'Valley of Aijalon',
    region: 'Canaan',
    description: 'Joshua prayed for the sun to stand still during the battle.',
    emoji: '☀️',
    coordinates: { x: 42, y: 30 },
    people: ['Joshua'],
    keyEvent: 'Sun stands still',
    questions: [
      {
        question: 'What did Joshua pray for during the battle?',
        options: ['For rain', 'For the sun to stand still', 'For more soldiers', 'For the enemy to surrender'],
        correct: 1,
        explanation: 'Joshua prayed for the sun to stand still (Joshua 10:12-14).',
        difficulty: 'medium',
        category: 'conquest'
      },
      {
        question: 'How long did the sun stand still?',
        options: ['For an hour', 'For about a full day', 'For three days', 'For a week'],
        correct: 1,
        explanation: 'The sun stood still for about a full day (Joshua 10:13).',
        difficulty: 'hard',
        category: 'conquest'
      }
    ],
    trivia: 'The sun stood still for about a full day.',
    verse: 'Joshua 10:12-14'
  },
  {
    id: 'jos-shechem',
    name: 'Shechem',
    region: 'Canaan',
    description: 'Joshua renewed the covenant with Israel at Shechem.',
    emoji: '📜',
    coordinates: { x: 30, y: 40 },
    people: ['Joshua', 'Israelites'],
    keyEvent: 'Covenant renewal',
    questions: [
      {
        question: 'What did Joshua say at Shechem?',
        options: ['Choose this day whom you will serve', 'The Lord is my shepherd', 'Go and make disciples', 'Love the Lord your God'],
        correct: 0,
        explanation: 'Joshua said, "Choose this day whom you will serve" (Joshua 24:15).',
        difficulty: 'easy',
        category: 'conquest'
      },
      {
        question: 'What was Joshua\'s famous declaration at Shechem?',
        options: ['I will serve the Lord', 'As for me and my house, we will serve the Lord', 'The Lord is my shepherd', 'I am the way'],
        correct: 1,
        explanation: 'Joshua declared, "As for me and my house, we will serve the Lord" (Joshua 24:15).',
        difficulty: 'easy',
        category: 'conquest'
      }
    ],
    trivia: '"As for me and my house, we will serve the Lord" is from this passage.',
    verse: 'Joshua 24:1-28'
  }
]

// ============================================================
// 11. ELIJAH'S JOURNEY (1 Kings 17-19, 2 Kings 2) - ENHANCED
// ============================================================

const elijahJourneyLocations: JourneyLocation[] = [
  {
    id: 'el-gilead',
    name: 'Gilead',
    region: 'Transjordan',
    description: 'Elijah appeared in Gilead during the drought declared by God.',
    emoji: '🌵',
    coordinates: { x: 40, y: 50 },
    people: ['Elijah'],
    keyEvent: 'Beginning of ministry',
    questions: [
      {
        question: 'What did Elijah declare to Ahab?',
        options: ['That it would rain', 'That there would be no rain', 'That he would conquer Israel', 'That he would be killed'],
        correct: 1,
        explanation: 'Elijah declared that there would be no rain except by his word (1 Kings 17:1).',
        difficulty: 'easy',
        category: 'prophets'
      },
      {
        question: 'Where was Elijah from?',
        options: ['Tishbe in Gilead', 'Jerusalem', 'Samaria', 'Bethlehem'],
        correct: 0,
        explanation: 'Elijah was a prophet from Tishbe in Gilead (1 Kings 17:1).',
        difficulty: 'medium',
        category: 'prophets'
      }
    ],
    trivia: 'Elijah was a prophet from Tishbe in Gilead.',
    verse: '1 Kings 17:1'
  },
  {
    id: 'el-kerith',
    name: 'Brook Cherith',
    region: 'Transjordan',
    description: 'Elijah was hidden by God at the Brook Cherith, where ravens fed him.',
    emoji: '🐦',
    coordinates: { x: 38, y: 48 },
    people: ['Elijah'],
    keyEvent: 'Fed by ravens',
    questions: [
      {
        question: 'How did God provide for Elijah at Cherith?',
        options: ['Through manna from heaven', 'Through ravens that brought food', 'Through the widow\'s provision', 'Through angels'],
        correct: 1,
        explanation: 'God commanded ravens to bring Elijah food at Cherith (1 Kings 17:2-6).',
        difficulty: 'easy',
        category: 'prophets'
      },
      {
        question: 'What happened to the brook Cherith during the drought?',
        options: ['It overflowed', 'It dried up', 'It turned to blood', 'It became a river'],
        correct: 1,
        explanation: 'The brook Cherith dried up because of the drought (1 Kings 17:7).',
        difficulty: 'medium',
        category: 'prophets'
      }
    ],
    trivia: 'Cherith was east of the Jordan River.',
    verse: '1 Kings 17:2-7'
  },
  {
    id: 'el-zarephath',
    name: 'Zarephath',
    region: 'Sidon',
    description: 'Elijah stayed with a widow in Zarephath, and God provided for them.',
    emoji: '🏠',
    coordinates: { x: 25, y: 28 },
    people: ['Elijah', 'Widow', 'Her son'],
    keyEvent: 'Widow of Zarephath',
    questions: [
      {
        question: 'What miracle happened in Zarephath?',
        options: ['Water turned to wine', 'The widow\'s flour and oil did not run out', 'A dead man was raised', 'The sun stood still'],
        correct: 1,
        explanation: 'The widow\'s flour and oil did not run out during the drought (1 Kings 17:10-16).',
        difficulty: 'easy',
        category: 'prophets'
      },
      {
        question: 'What happened to the widow\'s son?',
        options: ['He was healed', 'He was raised from the dead', 'He became a prophet', 'He was blessed'],
        correct: 1,
        explanation: 'Elijah raised the widow\'s son from the dead (1 Kings 17:17-24).',
        difficulty: 'medium',
        category: 'prophets'
      }
    ],
    trivia: 'Jesus mentioned this widow in Luke 4.',
    verse: '1 Kings 17:8-16'
  },
  {
    id: 'el-carmel',
    name: 'Mount Carmel',
    region: 'Israel',
    description: 'Elijah challenged the prophets of Baal on Mount Carmel.',
    emoji: '🔥',
    coordinates: { x: 30, y: 35 },
    people: ['Elijah', 'Prophets of Baal', 'Ahab'],
    keyEvent: 'Contest on Mount Carmel',
    questions: [
      {
        question: 'What happened on Mount Carmel?',
        options: ['Elijah killed the prophets of Baal', 'God sent fire from heaven', 'It rained after the drought', 'All of the above'],
        correct: 3,
        explanation: 'God sent fire from heaven, Elijah killed the prophets of Baal, and rain came (1 Kings 18:20-46).',
        difficulty: 'easy',
        category: 'prophets'
      },
      {
        question: 'How many prophets of Baal were on Mount Carmel?',
        options: ['150', '450', '850', '1000'],
        correct: 1,
        explanation: 'There were 450 prophets of Baal and 400 prophets of Asherah (1 Kings 18:19).',
        difficulty: 'medium',
        category: 'prophets'
      }
    ],
    trivia: 'Elijah had 450 prophets of Baal and 400 prophets of Asherah killed.',
    verse: '1 Kings 18:16-46'
  },
  {
    id: 'el-horeb',
    name: 'Mount Horeb',
    region: 'Sinai',
    description: 'Elijah fled from Jezebel and heard God\'s still small voice on Mount Horeb.',
    emoji: '🗻',
    coordinates: { x: 25, y: 65 },
    people: ['Elijah'],
    keyEvent: 'God\'s still small voice',
    questions: [
      {
        question: 'How did God speak to Elijah on Mount Horeb?',
        options: ['In a loud voice', 'In a whirlwind', 'In a still small voice', 'Through an angel'],
        correct: 2,
        explanation: 'God spoke to Elijah in a still small voice (1 Kings 19:11-13).',
        difficulty: 'easy',
        category: 'prophets'
      },
      {
        question: 'What did God ask Elijah on Mount Horeb?',
        options: ['What are you doing here?', 'Why are you afraid?', 'Where is your servant?', 'Who are you?'],
        correct: 0,
        explanation: 'God asked Elijah, "What are you doing here, Elijah?" (1 Kings 19:9, 13).',
        difficulty: 'medium',
        category: 'prophets'
      }
    ],
    trivia: 'Elijah was given a new commission on Mount Horeb.',
    verse: '1 Kings 19:1-18'
  },
  {
    id: 'el-jordan',
    name: 'Jordan River',
    region: 'Transjordan',
    description: 'Elijah crossed the Jordan with Elisha and was taken to heaven.',
    emoji: '🌊',
    coordinates: { x: 40, y: 42 },
    people: ['Elijah', 'Elisha'],
    keyEvent: 'Taken to heaven',
    questions: [
      {
        question: 'What happened to Elijah at the Jordan?',
        options: ['He walked on water', 'He was taken to heaven in a chariot of fire', 'He crossed on dry ground', 'He was swallowed by a fish'],
        correct: 1,
        explanation: 'Elijah was taken to heaven in a chariot of fire (2 Kings 2:11).',
        difficulty: 'easy',
        category: 'prophets'
      },
      {
        question: 'What did Elisha receive from Elijah before he was taken?',
        options: ['His cloak', 'His staff', 'His sword', 'His ring'],
        correct: 0,
        explanation: 'Elisha received Elijah\'s cloak (2 Kings 2:13-14).',
        difficulty: 'medium',
        category: 'prophets'
      }
    ],
    trivia: 'Elisha saw Elijah taken up and inherited his mantle.',
    verse: '2 Kings 2:1-14'
  }
]

// ============================================================
// 12. THE RETURN FROM EXILE (Ezra 1-6) - ENHANCED
// ============================================================

const returnJourneyLocations: JourneyLocation[] = [
  {
    id: 're-babylon',
    name: 'Babylon',
    region: 'Babylonia',
    description: 'Cyrus allowed the Jews to return to Jerusalem after 70 years of exile.',
    emoji: '🏛️',
    coordinates: { x: 18, y: 52 },
    people: ['Cyrus', 'Zerubbabel', 'Jeshua'],
    keyEvent: 'Decree of Cyrus',
    questions: [
      {
        question: 'Who decreed that the Jews could return to Jerusalem?',
        options: ['Darius', 'Artaxerxes', 'Cyrus', 'Nebuchadnezzar'],
        correct: 2,
        explanation: 'Cyrus made a decree allowing the Jews to return to Jerusalem (Ezra 1:1-4).',
        difficulty: 'easy',
        category: 'return'
      },
      {
        question: 'How long was the exile in Babylon?',
        options: ['50 years', '70 years', '100 years', '120 years'],
        correct: 1,
        explanation: 'The exile lasted 70 years as prophesied by Jeremiah (Jeremiah 25:11-12).',
        difficulty: 'medium',
        category: 'return'
      }
    ],
    trivia: 'The exile lasted 70 years as prophesied by Jeremiah.',
    verse: 'Ezra 1:1-4'
  },
  {
    id: 're-jerusalem',
    name: 'Jerusalem',
    region: 'Judea',
    description: 'The Jews returned to Jerusalem and began rebuilding the Temple.',
    emoji: '🏗️',
    coordinates: { x: 45, y: 20 },
    people: ['Zerubbabel', 'Jeshua', 'Jews'],
    keyEvent: 'Rebuilding the Temple',
    questions: [
      {
        question: 'What was the first thing the returning Jews did in Jerusalem?',
        options: ['Built homes', 'Rebuilt the walls', 'Built the altar', 'Planted crops'],
        correct: 2,
        explanation: 'The first thing they did was rebuild the altar of God (Ezra 3:2-3).',
        difficulty: 'easy',
        category: 'return'
      },
      {
        question: 'What did the people do when the foundation of the Temple was laid?',
        options: ['They wept', 'They rejoiced', 'They shouted', 'Both A and B'],
        correct: 3,
        explanation: 'Some wept and others rejoiced when the foundation was laid (Ezra 3:12-13).',
        difficulty: 'medium',
        category: 'return'
      }
    ],
    trivia: 'The foundation of the Temple was laid with great celebration.',
    verse: 'Ezra 3:1-13'
  },
  {
    id: 're-temple',
    name: 'The Temple Site',
    region: 'Judea',
    description: 'The Second Temple was completed and dedicated despite opposition.',
    emoji: '⛪',
    coordinates: { x: 45, y: 20 },
    people: ['Zerubbabel', 'Haggai', 'Zechariah'],
    keyEvent: 'Temple completed',
    questions: [
      {
        question: 'Who encouraged the people to finish the Temple?',
        options: ['Ezra', 'Nehemiah', 'Haggai and Zechariah', 'Malachi'],
        correct: 2,
        explanation: 'The prophets Haggai and Zechariah encouraged the people to finish the Temple (Ezra 5:1-2).',
        difficulty: 'medium',
        category: 'return'
      },
      {
        question: 'When was the Second Temple completed?',
        options: ['516 BC', '586 BC', '538 BC', '445 BC'],
        correct: 0,
        explanation: 'The Second Temple was completed in 516 BC (Ezra 6:15).',
        difficulty: 'hard',
        category: 'return'
      }
    ],
    trivia: 'The Second Temple was completed in 516 BC.',
    verse: 'Ezra 6:13-18'
  },
  {
    id: 're-walls',
    name: 'Jerusalem Walls',
    region: 'Judea',
    description: 'Nehemiah later rebuilt the walls of Jerusalem.',
    emoji: '🧱',
    coordinates: { x: 45, y: 20 },
    people: ['Nehemiah'],
    keyEvent: 'Walls rebuilt',
    questions: [
      {
        question: 'How long did it take to rebuild the walls of Jerusalem?',
        options: ['52 days', '3 months', '6 months', '1 year'],
        correct: 0,
        explanation: 'The walls were rebuilt in 52 days (Nehemiah 6:15).',
        difficulty: 'easy',
        category: 'return'
      },
      {
        question: 'Who opposed Nehemiah\'s rebuilding?',
        options: ['Sanballat, Tobiah, and Geshem', 'The Assyrians', 'The Babylonians', 'The Greeks'],
        correct: 0,
        explanation: 'Sanballat, Tobiah, and Geshem opposed the rebuilding (Nehemiah 4:1-8).',
        difficulty: 'medium',
        category: 'return'
      }
    ],
    trivia: 'The wall rebuilding was opposed by Sanballat and Tobiah.',
    verse: 'Nehemiah 6:15-16'
  },
  {
    id: 're-law',
    name: 'Water Gate, Jerusalem',
    region: 'Judea',
    description: 'Ezra read the Law to the people at the Water Gate.',
    emoji: '📖',
    coordinates: { x: 45, y: 20 },
    people: ['Ezra', 'Nehemiah', 'Levites'],
    keyEvent: 'Law read',
    questions: [
      {
        question: 'What happened when Ezra read the Law?',
        options: ['The people rejoiced and wept', 'They ignored it', 'They left Jerusalem', 'They built a new temple'],
        correct: 0,
        explanation: 'The people wept and rejoiced when they heard the Law (Nehemiah 8:1-12).',
        difficulty: 'easy',
        category: 'return'
      },
      {
        question: 'What feast did the people celebrate after hearing the Law?',
        options: ['Passover', 'Feast of Booths', 'Day of Atonement', 'Pentecost'],
        correct: 1,
        explanation: 'The people celebrated the Feast of Booths (Nehemiah 8:13-18).',
        difficulty: 'hard',
        category: 'return'
      }
    ],
    trivia: 'The reading of the Law led to a great revival.',
    verse: 'Nehemiah 8:1-12'
  }
]

// ============================================================
// 13. MARY & JOSEPH'S JOURNEY TO BETHLEHEM (Luke 2) - ENHANCED
// ============================================================

const nativityJourneyLocations: JourneyLocation[] = [
  {
    id: 'nat-nazareth',
    name: 'Nazareth',
    region: 'Galilee',
    description: 'Mary and Joseph lived in Nazareth before the birth of Jesus.',
    emoji: '🏠',
    coordinates: { x: 30, y: 30 },
    people: ['Mary', 'Joseph'],
    keyEvent: 'Annunciation',
    questions: [
      {
        question: 'What did the angel Gabriel tell Mary in Nazareth?',
        options: ['She would have a son named Jesus', 'She would be queen', 'She would travel to Egypt', 'She would become a prophet'],
        correct: 0,
        explanation: 'Gabriel told Mary she would conceive and bear a son named Jesus (Luke 1:26-33).',
        difficulty: 'easy',
        category: 'nativity'
      },
      {
        question: 'What was Joseph\'s reaction to Mary\'s pregnancy?',
        options: ['He rejoiced', 'He was troubled', 'He left her', 'He accused her'],
        correct: 1,
        explanation: 'Joseph was troubled and planned to divorce Mary quietly (Matthew 1:19).',
        difficulty: 'medium',
        category: 'nativity'
      }
    ],
    trivia: 'Nazareth was a small, insignificant town in Galilee.',
    verse: 'Luke 1:26-38'
  },
  {
    id: 'nat-bethlehem',
    name: 'Bethlehem',
    region: 'Judea',
    description: 'Mary and Joseph traveled to Bethlehem for the census, and Jesus was born there.',
    emoji: '⭐',
    coordinates: { x: 44, y: 25 },
    people: ['Mary', 'Joseph', 'Jesus'],
    keyEvent: 'Birth of Jesus',
    questions: [
      {
        question: 'Why did Mary and Joseph go to Bethlehem?',
        options: ['To visit relatives', 'For a census', 'To escape persecution', 'To buy land'],
        correct: 1,
        explanation: 'They went to Bethlehem for the census (Luke 2:1-4).',
        difficulty: 'easy',
        category: 'nativity'
      },
      {
        question: 'Where was Jesus born in Bethlehem?',
        options: ['In a house', 'In an inn', 'In a stable', 'In a palace'],
        correct: 2,
        explanation: 'Jesus was born in a stable because there was no room in the inn (Luke 2:7).',
        difficulty: 'easy',
        category: 'nativity'
      },
      {
        question: 'What did Mary do with Jesus after he was born?',
        options: ['She wrapped him in swaddling cloths', 'She laid him in a manger', 'She presented him at the temple', 'All of the above'],
        correct: 3,
        explanation: 'Mary wrapped Jesus in swaddling cloths and laid him in a manger (Luke 2:7). Later, she presented him at the temple (Luke 2:22).',
        difficulty: 'medium',
        category: 'nativity'
      }
    ],
    trivia: 'Bethlehem was the city of David, fulfilling the prophecy.',
    verse: 'Luke 2:1-7'
  },
  {
    id: 'nat-shepherds',
    name: 'Fields of Bethlehem',
    region: 'Judea',
    description: 'Shepherds visited Jesus after an angel appeared to them.',
    emoji: '🐑',
    coordinates: { x: 44, y: 25 },
    people: ['Shepherds', 'Angels'],
    keyEvent: 'Shepherds visit',
    questions: [
      {
        question: 'What did the angels proclaim to the shepherds?',
        options: ['A great victory', 'The birth of a Savior', 'A new king in Jerusalem', 'A famine coming'],
        correct: 1,
        explanation: 'The angels proclaimed the birth of a Savior, Christ the Lord (Luke 2:10-11).',
        difficulty: 'easy',
        category: 'nativity'
      },
      {
        question: 'How did the shepherds respond to the angels\' message?',
        options: ['They ignored it', 'They went to see Jesus', 'They told everyone what they had seen', 'Both B and C'],
        correct: 3,
        explanation: 'The shepherds went to see Jesus and then spread the word about what they had heard (Luke 2:15-17).',
        difficulty: 'medium',
        category: 'nativity'
      }
    ],
    trivia: 'The shepherds were the first to hear the good news of Jesus\' birth.',
    verse: 'Luke 2:8-20'
  },
  {
    id: 'nat-temple',
    name: 'Jerusalem Temple',
    region: 'Judea',
    description: 'Mary and Joseph presented Jesus at the Temple in Jerusalem.',
    emoji: '🕍',
    coordinates: { x: 45, y: 20 },
    people: ['Mary', 'Joseph', 'Simeon', 'Anna'],
    keyEvent: 'Presentation at Temple',
    questions: [
      {
        question: 'Who recognized Jesus as the Messiah at the Temple?',
        options: ['Simeon and Anna', 'The priests', 'The Pharisees', 'The Sadducees'],
        correct: 0,
        explanation: 'Simeon and Anna recognized Jesus as the Messiah at the Temple (Luke 2:25-38).',
        difficulty: 'easy',
        category: 'nativity'
      },
      {
        question: 'What did Simeon say about Jesus?',
        options: ['He is the Messiah', 'He is a light for the Gentiles', 'He is the glory of Israel', 'All of the above'],
        correct: 3,
        explanation: 'Simeon said Jesus was the Messiah, a light for the Gentiles, and the glory of Israel (Luke 2:29-32).',
        difficulty: 'medium',
        category: 'nativity'
      }
    ],
    trivia: 'Simeon had been told he would not die before seeing the Messiah.',
    verse: 'Luke 2:22-38'
  },
  {
    id: 'nat-egypt',
    name: 'Egypt',
    region: 'Egypt',
    description: 'Joseph and Mary fled to Egypt to escape Herod\'s decree.',
    emoji: '🇪🇬',
    coordinates: { x: 25, y: 70 },
    people: ['Mary', 'Joseph', 'Jesus'],
    keyEvent: 'Flight to Egypt',
    questions: [
      {
        question: 'Why did Mary and Joseph flee to Egypt?',
        options: ['To escape the famine', 'To find work', 'To escape Herod\'s decree', 'To visit relatives'],
        correct: 2,
        explanation: 'They fled to Egypt to escape Herod\'s decree to kill all male infants (Matthew 2:13-14).',
        difficulty: 'easy',
        category: 'nativity'
      },
      {
        question: 'What prophecy was fulfilled by the flight to Egypt?',
        options: ['Out of Egypt I called my son', 'He will be called a Nazarene', 'He will be born in Bethlehem', 'He will be a light to the Gentiles'],
        correct: 0,
        explanation: 'The flight to Egypt fulfilled the prophecy, "Out of Egypt I called my son" (Hosea 11:1, Matthew 2:15).',
        difficulty: 'hard',
        category: 'nativity'
      }
    ],
    trivia: 'The flight to Egypt fulfilled the prophecy, "Out of Egypt I called my son".',
    verse: 'Matthew 2:13-15'
  },
  {
    id: 'nat-return',
    name: 'Return to Nazareth',
    region: 'Galilee',
    description: 'After Herod\'s death, Mary and Joseph returned to Nazareth.',
    emoji: '🏠',
    coordinates: { x: 30, y: 30 },
    people: ['Mary', 'Joseph', 'Jesus'],
    keyEvent: 'Return to Nazareth',
    questions: [
      {
        question: 'What did Mary and Joseph do after Herod\'s death?',
        options: ['They went to Bethlehem', 'They returned to Nazareth', 'They went to Egypt', 'They went to Jerusalem'],
        correct: 1,
        explanation: 'After Herod\'s death, they returned to Nazareth (Matthew 2:19-23).',
        difficulty: 'easy',
        category: 'nativity'
      },
      {
        question: 'What prophecy was fulfilled by Jesus growing up in Nazareth?',
        options: ['He will be called a Nazarene', 'He will be a light to the Gentiles', 'He will be the Son of God', 'He will be the King of the Jews'],
        correct: 0,
        explanation: 'Jesus growing up in Nazareth fulfilled the prophecy that he would be called a Nazarene (Matthew 2:23).',
        difficulty: 'hard',
        category: 'nativity'
      }
    ],
    trivia: 'Nazareth was the hometown of Jesus.',
    verse: 'Matthew 2:19-23'
  }
]

// ============================================================
// 14. JONAH'S JOURNEY (Jonah 1-4) - ENHANCED
// ============================================================

const jonahJourneyLocations: JourneyLocation[] = [
  {
    id: 'jon-joppa',
    name: 'Joppa',
    region: 'Judea',
    description: 'Jonah fled from God\'s call at Joppa and boarded a ship to Tarshish.',
    emoji: '⛵',
    coordinates: { x: 42, y: 23 },
    people: ['Jonah'],
    keyEvent: 'Flight from God',
    questions: [
      {
        question: 'Where did Jonah try to flee from God?',
        options: ['Nineveh', 'Tarshish', 'Babylon', 'Egypt'],
        correct: 1,
        explanation: 'Jonah tried to flee to Tarshish (Jonah 1:3).',
        difficulty: 'easy',
        category: 'prophets'
      },
      {
        question: 'Why did Jonah flee from God?',
        options: ['He was afraid of Nineveh', 'He didn\'t want to preach to his enemies', 'He was lazy', 'He didn\'t believe God'],
        correct: 1,
        explanation: 'Jonah didn\'t want to preach to the Ninevites because they were Israel\'s enemies (Jonah 4:2).',
        difficulty: 'medium',
        category: 'prophets'
      }
    ],
    trivia: 'Joppa was a port city on the Mediterranean coast.',
    verse: 'Jonah 1:1-3'
  },
  {
    id: 'jon-ship',
    name: 'The Ship',
    region: 'Mediterranean Sea',
    description: 'Jonah was on a ship going to Tarshish when God sent a storm.',
    emoji: '⛵',
    coordinates: { x: 35, y: 55 },
    people: ['Jonah', 'Sailors'],
    keyEvent: 'Great storm',
    questions: [
      {
        question: 'What did Jonah do during the storm?',
        options: ['He prayed', 'He was sleeping', 'He helped the sailors', 'He jumped overboard'],
        correct: 1,
        explanation: 'Jonah was sleeping during the storm (Jonah 1:5).',
        difficulty: 'easy',
        category: 'prophets'
      },
      {
        question: 'What did the sailors do to calm the storm?',
        options: ['They threw Jonah overboard', 'They prayed to God', 'They turned back', 'They sailed faster'],
        correct: 0,
        explanation: 'The sailors threw Jonah overboard at his request, and the sea calmed (Jonah 1:15).',
        difficulty: 'medium',
        category: 'prophets'
      }
    ],
    trivia: 'The sailors were terrified and cried out to their gods.',
    verse: 'Jonah 1:4-16'
  },
  {
    id: 'jon-fish',
    name: 'The Great Fish',
    region: 'Mediterranean Sea',
    description: 'Jonah was swallowed by a great fish and spent three days inside it.',
    emoji: '🐋',
    coordinates: { x: 35, y: 55 },
    people: ['Jonah'],
    keyEvent: 'Swallowed by fish',
    questions: [
      {
        question: 'How long was Jonah in the belly of the fish?',
        options: ['Three hours', 'Three days', 'Three weeks', 'Three months'],
        correct: 1,
        explanation: 'Jonah was in the belly of the fish for three days and three nights (Jonah 1:17).',
        difficulty: 'easy',
        category: 'prophets'
      },
      {
        question: 'What did Jonah do while in the fish?',
        options: ['He slept', 'He prayed', 'He sang', 'He planned his escape'],
        correct: 1,
        explanation: 'Jonah prayed to God from the belly of the fish (Jonah 2:1).',
        difficulty: 'medium',
        category: 'prophets'
      }
    ],
    trivia: 'Jesus compared his time in the tomb to Jonah\'s three days in the fish.',
    verse: 'Jonah 1:17'
  },
  {
    id: 'jon-nineveh',
    name: 'Nineveh',
    region: 'Assyria',
    description: 'Jonah finally preached to Nineveh, and the people repented.',
    emoji: '🏛️',
    coordinates: { x: 10, y: 45 },
    people: ['Jonah', 'King of Nineveh'],
    keyEvent: 'Preaching and repentance',
    questions: [
      {
        question: 'What did the people of Nineveh do when Jonah preached?',
        options: ['They attacked him', 'They repented', 'They ignored him', 'They killed him'],
        correct: 1,
        explanation: 'The people of Nineveh repented and turned from their evil ways (Jonah 3:5-10).',
        difficulty: 'easy',
        category: 'prophets'
      },
      {
        question: 'How did the king of Nineveh respond?',
        options: ['He ignored the message', 'He proclaimed a fast', 'He arrested Jonah', 'He left the city'],
        correct: 1,
        explanation: 'The king of Nineveh proclaimed a fast and called for repentance (Jonah 3:6-9).',
        difficulty: 'medium',
        category: 'prophets'
      }
    ],
    trivia: 'Nineveh was the capital of Assyria, a brutal nation.',
    verse: 'Jonah 3:1-10'
  },
  {
    id: 'jon-plant',
    name: 'Outside Nineveh',
    region: 'Assyria',
    description: 'Jonah was angry at God\'s mercy and sat outside Nineveh.',
    emoji: '🌿',
    coordinates: { x: 10, y: 45 },
    people: ['Jonah'],
    keyEvent: 'Jonah\'s anger',
    questions: [
      {
        question: 'What happened to the plant that shaded Jonah?',
        options: ['It grew tall', 'It was eaten by a worm', 'It withered in the sun', 'It was uprooted by the wind'],
        correct: 1,
        explanation: 'A worm ate the plant that shaded Jonah (Jonah 4:7).',
        difficulty: 'easy',
        category: 'prophets'
      },
      {
        question: 'What did God teach Jonah through the plant?',
        options: ['About His compassion for all people', 'About the value of plants', 'About Jonah\'s anger', 'About the weather'],
        correct: 0,
        explanation: 'God taught Jonah about His compassion for all people, including the Ninevites (Jonah 4:10-11).',
        difficulty: 'hard',
        category: 'prophets'
      }
    ],
    trivia: 'God used the plant to teach Jonah about His compassion.',
    verse: 'Jonah 4:1-11'
  }
]

// ============================================================
// 15. NEHEMIAH'S JOURNEY (Nehemiah 1-7) - ENHANCED
// ============================================================

const nehemiahJourneyLocations: JourneyLocation[] = [
  {
    id: 'ne-susa',
    name: 'Susa',
    region: 'Persia',
    description: 'Nehemiah was the cupbearer to King Artaxerxes in Susa.',
    emoji: '🏛️',
    coordinates: { x: 20, y: 50 },
    people: ['Nehemiah', 'Artaxerxes'],
    keyEvent: 'Cupbearer to the king',
    questions: [
      {
        question: 'What was Nehemiah\'s position in Persia?',
        options: ['Scribe', 'Cupbearer to the king', 'Governor', 'Prophet'],
        correct: 1,
        explanation: 'Nehemiah was the cupbearer to King Artaxerxes (Nehemiah 1:11).',
        difficulty: 'easy',
        category: 'return'
      },
      {
        question: 'What did Nehemiah do when he heard about Jerusalem\'s condition?',
        options: ['He wept and prayed', 'He ignored it', 'He went to the king immediately', 'He sent money'],
        correct: 0,
        explanation: 'Nehemiah wept, mourned, and prayed when he heard about Jerusalem\'s condition (Nehemiah 1:4).',
        difficulty: 'medium',
        category: 'return'
      }
    ],
    trivia: 'Susa was the winter capital of the Persian Empire.',
    verse: 'Nehemiah 1:1-11'
  },
  {
    id: 'ne-jerusalem',
    name: 'Jerusalem',
    region: 'Judea',
    description: 'Nehemiah arrived in Jerusalem and inspected the walls.',
    emoji: '🏗️',
    coordinates: { x: 45, y: 20 },
    people: ['Nehemiah'],
    keyEvent: 'Arrival and inspection',
    questions: [
      {
        question: 'What did Nehemiah do when he arrived in Jerusalem?',
        options: ['He immediately started rebuilding', 'He inspected the walls by night', 'He called a meeting', 'He prayed for 40 days'],
        correct: 1,
        explanation: 'Nehemiah inspected the walls by night (Nehemiah 2:11-16).',
        difficulty: 'easy',
        category: 'return'
      },
      {
        question: 'How long did Nehemiah inspect the walls?',
        options: ['One night', 'Three days', 'Seven days', 'One month'],
        correct: 0,
        explanation: 'Nehemiah inspected the walls over one night (Nehemiah 2:12-15).',
        difficulty: 'hard',
        category: 'return'
      }
    ],
    trivia: 'Nehemiah kept his inspection secret.',
    verse: 'Nehemiah 2:11-20'
  },
  {
    id: 'ne-walls',
    name: 'Jerusalem Walls',
    region: 'Judea',
    description: 'Nehemiah led the rebuilding of the walls of Jerusalem.',
    emoji: '🧱',
    coordinates: { x: 45, y: 20 },
    people: ['Nehemiah', 'Jews'],
    keyEvent: 'Rebuilding the walls',
    questions: [
      {
        question: 'Who opposed Nehemiah\'s rebuilding?',
        options: ['Sanballat, Tobiah, and Geshem', 'The Assyrians', 'The Babylonians', 'The Greeks'],
        correct: 0,
        explanation: 'Sanballat, Tobiah, and Geshem opposed the rebuilding (Nehemiah 4:1-8).',
        difficulty: 'easy',
        category: 'return'
      },
      {
        question: 'How did Nehemiah defend against opposition?',
        options: ['By building a wall', 'With armed guards', 'By praying and working', 'All of the above'],
        correct: 3,
        explanation: 'Nehemiah prayed, worked, and set guards to defend against opposition (Nehemiah 4:9-23).',
        difficulty: 'medium',
        category: 'return'
      },
      {
        question: 'What did the workers do while building?',
        options: ['They worked with one hand and held a weapon in the other', 'They worked in shifts', 'They built at night', 'They stopped fighting'],
        correct: 0,
        explanation: 'The workers built with one hand and held a weapon in the other (Nehemiah 4:17-18).',
        difficulty: 'hard',
        category: 'return'
      }
    ],
    trivia: 'The workers built with one hand and held a weapon in the other.',
    verse: 'Nehemiah 4:1-23'
  },
  {
    id: 'ne-complete',
    name: 'Jerusalem Walls Completed',
    region: 'Judea',
    description: 'The walls were completed in 52 days, and the people celebrated.',
    emoji: '🎉',
    coordinates: { x: 45, y: 20 },
    people: ['Nehemiah', 'Jews'],
    keyEvent: 'Walls completed',
    questions: [
      {
        question: 'How long did it take to rebuild the walls of Jerusalem?',
        options: ['52 days', '3 months', '6 months', '1 year'],
        correct: 0,
        explanation: 'The walls were rebuilt in 52 days (Nehemiah 6:15).',
        difficulty: 'easy',
        category: 'return'
      },
      {
        question: 'What was the reaction of the surrounding nations?',
        options: ['They were happy', 'They were afraid', 'They attacked', 'They ignored it'],
        correct: 1,
        explanation: 'The completion caused fear among the surrounding nations (Nehemiah 6:16).',
        difficulty: 'medium',
        category: 'return'
      }
    ],
    trivia: 'The completion caused fear among the surrounding nations.',
    verse: 'Nehemiah 6:15-16'
  }
]

// ============================================================
// 16. THE EXODUS JOURNEY (Exodus 1-40) - ENHANCED
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
        explanation: 'The Israelites were in slavery for 400 years (Genesis 15:13, Acts 7:6).',
        difficulty: 'easy',
        category: 'exodus'
      },
      {
        question: 'What did the Israelites do during their slavery?',
        options: ['They prospered', 'They cried out to God', 'They escaped', 'They fought back'],
        correct: 1,
        explanation: 'The Israelites cried out to God during their slavery (Exodus 2:23-25).',
        difficulty: 'medium',
        category: 'exodus'
      }
    ],
    trivia: 'The Israelites grew from 70 people to about 2 million in Egypt.',
    verse: 'Exodus 1:1-22'
  },
  {
    id: 'ex-moses',
    name: 'Call of Moses',
    region: 'Midian',
    description: 'Moses encountered God at the burning bush on Mount Horeb.',
    emoji: '🔥',
    coordinates: { x: 28, y: 75 },
    people: ['Moses', 'God'],
    keyEvent: 'Burning bush',
    questions: [
      {
        question: 'Where did Moses see the burning bush?',
        options: ['Mount Sinai', 'Mount Horeb', 'Mount Carmel', 'Mount Zion'],
        correct: 1,
        explanation: 'Moses saw the burning bush on Mount Horeb (Exodus 3:1).',
        difficulty: 'easy',
        category: 'exodus'
      },
      {
        question: 'What did God tell Moses His name was?',
        options: ['El Shaddai', 'I AM WHO I AM', 'Jehovah', 'Adonai'],
        correct: 1,
        explanation: 'God revealed His name as "I AM WHO I AM" (Exodus 3:14).',
        difficulty: 'medium',
        category: 'exodus'
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
        explanation: 'God sent 10 plagues on Egypt (Exodus 7-12).',
        difficulty: 'easy',
        category: 'exodus'
      },
      {
        question: 'What was the first plague?',
        options: ['Frogs', 'Water turned to blood', 'Darkness', 'Locusts'],
        correct: 1,
        explanation: 'The first plague was turning water to blood (Exodus 7:20).',
        difficulty: 'medium',
        category: 'exodus'
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
        explanation: 'The Israelites put lamb\'s blood on their doorposts (Exodus 12:7).',
        difficulty: 'easy',
        category: 'exodus'
      },
      {
        question: 'What does Passover commemorate?',
        options: ['The Exodus from Egypt', 'The giving of the Law', 'The crossing of the Red Sea', 'The birth of Moses'],
        correct: 0,
        explanation: 'Passover commemorates the Exodus from Egypt (Exodus 12:14).',
        difficulty: 'medium',
        category: 'exodus'
      }
    ],
    trivia: 'Passover commemorates the Exodus from Egypt.',
    verse: 'Exodus 12:1-14'
  },
  {
    id: 'ex-redsea',
    name: 'Red Sea',
    region: 'Egypt to Sinai',
    description: 'The Israelites crossed the Red Sea on dry ground.',
    emoji: '🌊',
    coordinates: { x: 28, y: 68 },
    people: ['Moses', 'Israelites'],
    keyEvent: 'Crossing the Red Sea',
    questions: [
      {
        question: 'What happened to the Egyptian army in the Red Sea?',
        options: ['They crossed safely', 'They were destroyed', 'They turned back', 'They made a treaty'],
        correct: 1,
        explanation: 'The Egyptian army was destroyed when the waters returned (Exodus 14:26-28).',
        difficulty: 'easy',
        category: 'exodus'
      },
      {
        question: 'How did the Israelites cross the Red Sea?',
        options: ['By swimming', 'On dry ground', 'On boats', 'By building a bridge'],
        correct: 1,
        explanation: 'The Israelites crossed the Red Sea on dry ground (Exodus 14:22).',
        difficulty: 'medium',
        category: 'exodus'
      }
    ],
    trivia: 'The crossing of the Red Sea is one of the greatest miracles in the Bible.',
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
        explanation: 'God gave the Ten Commandments at Mount Sinai (Exodus 20:1-17).',
        difficulty: 'easy',
        category: 'exodus'
      },
      {
        question: 'On what were the Ten Commandments written?',
        options: ['Papyrus', 'Stone tablets', 'Leather scrolls', 'Wooden tablets'],
        correct: 1,
        explanation: 'The Ten Commandments were written on stone tablets (Exodus 31:18).',
        difficulty: 'medium',
        category: 'exodus'
      }
    ],
    trivia: 'The Ten Commandments are the foundation of God\'s moral law.',
    verse: 'Exodus 20:1-17'
  },
  {
    id: 'ex-tabernacle',
    name: 'Wilderness',
    region: 'Sinai',
    description: 'The Tabernacle was built according to God\'s instructions.',
    emoji: '🏕️',
    coordinates: { x: 32, y: 65 },
    people: ['Moses', 'Bezalel', 'Israelites'],
    keyEvent: 'Tabernacle built',
    questions: [
      {
        question: 'What was the purpose of the Tabernacle?',
        options: ['A place of worship', 'A meeting tent', 'A dwelling place for God', 'All of the above'],
        correct: 3,
        explanation: 'The Tabernacle was a dwelling place for God among His people (Exodus 40:34-38).',
        difficulty: 'medium',
        category: 'exodus'
      },
      {
        question: 'Who was the craftsman who built the Tabernacle?',
        options: ['Moses', 'Aaron', 'Bezalel', 'Joshua'],
        correct: 2,
        explanation: 'Bezalel was the craftsman who built the Tabernacle (Exodus 31:2-5).',
        difficulty: 'hard',
        category: 'exodus'
      }
    ],
    trivia: 'The Tabernacle was the portable sanctuary in the wilderness.',
    verse: 'Exodus 40:1-38'
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
    '13-14',
    '#D4AF37'
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
    '15-18',
    '#D4AF37'
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
    '18-21',
    '#D4AF37'
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
    '27-28',
    '#D4AF37'
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
    '8',
    '#D4AF37'
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
    '9-12',
    '#D4AF37'
  ),
  createJourney(
    'abraham-journey',
    "Abraham's Journey",
    'Follow Abraham as he leaves his homeland and travels to the land God promised.',
    'Ur',
    'Hebron',
    abrahamJourneyLocations,
    '~1,500 miles',
    ['Abraham', 'Sarah', 'Lot', 'Isaac'],
    'Genesis',
    '11-25',
    '#8B5CF6'
  ),
  createJourney(
    'jacob-journey',
    "Jacob's Journey",
    'Travel with Jacob as he flees his brother, works for Laban, and returns to Canaan.',
    'Beersheba',
    'Hebron',
    jacobJourneyLocations,
    '~1,000 miles',
    ['Jacob', 'Leah', 'Rachel', 'Laban'],
    'Genesis',
    '27-35',
    '#8B5CF6'
  ),
  createJourney(
    'joseph-journey',
    "Joseph's Journey",
    'Follow Joseph from the pit to the palace in Egypt.',
    'Canaan',
    'Egypt',
    josephJourneyLocations,
    '~500 miles',
    ['Joseph', 'Jacob', 'Brothers', 'Pharaoh'],
    'Genesis',
    '37-50',
    '#8B5CF6'
  ),
  createJourney(
    'joshua-journey',
    "Joshua's Conquest",
    'Journey with Joshua as he leads Israel to conquer the Promised Land.',
    'Shittim',
    'Shechem',
    joshuaJourneyLocations,
    '~300 miles',
    ['Joshua', 'Israelites'],
    'Joshua',
    '1-12',
    '#F59E0B'
  ),
  createJourney(
    'elijah-journey',
    "Elijah's Journey",
    'Follow the prophet Elijah as he confronts kings and hears God\'s voice.',
    'Gilead',
    'Jordan River',
    elijahJourneyLocations,
    '~500 miles',
    ['Elijah', 'Elisha', 'Ahab', 'Jezebel'],
    '1 Kings, 2 Kings',
    '17-19, 2',
    '#EF4444'
  ),
  createJourney(
    'return-journey',
    "The Return from Exile",
    'Follow the Jews as they return from Babylon and rebuild the Temple.',
    'Babylon',
    'Jerusalem',
    returnJourneyLocations,
    '~800 miles',
    ['Cyrus', 'Zerubbabel', 'Ezra', 'Nehemiah'],
    'Ezra',
    '1-6',
    '#22C55E'
  ),
  createJourney(
    'nativity-journey',
    "The Nativity Journey",
    'Travel with Mary and Joseph as they journey to Bethlehem and beyond.',
    'Nazareth',
    'Nazareth',
    nativityJourneyLocations,
    '~500 miles',
    ['Mary', 'Joseph', 'Jesus', 'Shepherds', 'Simeon', 'Anna'],
    'Luke, Matthew',
    '1-2',
    '#D4AF37'
  ),
  createJourney(
    'jonah-journey',
    "Jonah's Journey",
    'Follow the reluctant prophet Jonah as he learns about God\'s mercy.',
    'Joppa',
    'Nineveh',
    jonahJourneyLocations,
    '~1,500 miles',
    ['Jonah', 'Sailors', 'King of Nineveh'],
    'Jonah',
    '1-4',
    '#3B82F6'
  ),
  createJourney(
    'nehemiah-journey',
    "Nehemiah's Journey",
    'Follow Nehemiah as he returns to rebuild the walls of Jerusalem.',
    'Susa',
    'Jerusalem',
    nehemiahJourneyLocations,
    '~1,000 miles',
    ['Nehemiah', 'Artaxerxes', 'Sanballat', 'Tobiah'],
    'Nehemiah',
    '1-7',
    '#22C55E'
  ),
  createJourney(
    'exodus-journey',
    "The Exodus Journey",
    'Follow Moses and the Israelites from slavery in Egypt to Mount Sinai.',
    'Egypt',
    'Mount Sinai',
    exodusJourneyLocations,
    '~500 miles',
    ['Moses', 'Aaron', 'Miriam', 'Joshua'],
    'Exodus',
    '1-40',
    '#EF4444'
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

// ============================================================
// COMPUTED STATS
// ============================================================

export const getJourneyTotalQuestions = (journeyId: string): number => {
  const journey = getJourney(journeyId)
  if (!journey) return 0
  return journey.locations.reduce((sum, loc) => sum + loc.questions.length, 0)
}

export const getJourneyDifficulty = (journeyId: string): 'easy' | 'medium' | 'hard' => {
  const total = getJourneyTotalQuestions(journeyId)
  if (total > 30) return 'hard'
  if (total > 20) return 'medium'
  return 'easy'
}
