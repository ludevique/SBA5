// Creating the simple data structures we'll work with.
// How we choose to store and organize this data is very important!
// Different options and techniques for storing data and
// creating relationships between different data sets will be
// explored during lessons on database integrations and techniques.

// The "posts" data will include information about
// social media posts that the users make.
const characters = [
    {
      id: 1,
      villageId: 1,
      characters:{
        name: [
          'uzumaki naruto',
          'shikamaru narah',
          'rock lee',
          'neiji hyuga',
          'hinata hyuga',
          'sasuke ushiwa',
          'gai mato',
          'kakashi atake'
        ],
      }
    },
    {
      id: 2,
      villageId: 2,
      characters:{
        name: [
          'gaara',
          'kankuro',
          'temari',
          'baki',
          'chiyo',
          'yashamaru',
          'ebizo'
        ],
      }
    },
    {
      id: 3,
      villageId: 3,
      characters: {
        name: [
         'yagura',
         'zabuza',
         'kagura',
         'kizame hoshigake',
         'kaku',
         'mei terumi' ,
         'chojuro'
        ]
      }
    },
    {
      id: 4,
      villageId: 4,
      characters: {
        name: [
         'kitsuchi',
         'kurotsuchi',
         'gari',
         'ishikawa',
         'han',
         'roshi'
        ]
      }
    },
    {
      id: 5,
      villageId: 5,
      characters: {
        name: [
         'oroshimaru',
         'kabuto',
         'jubo',
         'sakon',
         'tayuya',
         'dosu',
         'karin'
        ],
      }
    }
  ]
    
  
  module.exports = characters;