// function greet(name) {
//   return `Welcome ${name}!`;
// }

// Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet('Mango')); // "Welcome Mango!"

// Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet); // ƒ greet() {return `Welcome ${name}!`}

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//     callback(name);

// }

// registerGuest('Mango', greet);
// registerGuest('Mango', notify);

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// array.forEach(function callback(element, index, array) {
//   // Тіло колбек-функції
// });

// const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// const functionParams = (paraams) => {
//   let sumAll = 0;
//   paraams.forEach(item => {
//     sumAll += item;
//   });
//   return sumAll;
// };

// console.log(functionParams([5, 10, 15]));

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const titles = books.map(titlees => titlees.title);

// console.log(titles);

// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// const mappedCourses = students.map(student => student.courses);
// console.log(mappedCourses) // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

// const flattenedCourses = students.flatMap(student => student.courses);
// console.log(flattenedCourses) // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

// const getUserEmails = (users) => {
//   const usersEmail = users.map(emailArrayUsers => emailArrayUsers.email)
// };

// console.log(
//   getUserEmails([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       skills: ['ipsum', 'lorem'],
//       gender: 'male',
//       age: 37,
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//       gender: 'female',
//       age: 34,
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//       gender: 'male',
//       age: 24,
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       skills: ['adipisicing', 'irure', 'velit'],
//       gender: 'female',
//       age: 21,
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       skills: ['ex', 'culpa', 'nostrud'],
//       gender: 'male',
//       age: 27,
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       skills: ['non', 'amet', 'ipsum'],
//       gender: 'male',
//       age: 38,
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       skills: ['lorem', 'veniam', 'culpa'],
//       gender: 'female',
//       age: 39,
//     },
//   ]),
// );

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(item => item % 2 === 0);
// console.log(evenNumbers);

// const oddNumbers = numbers.filter(item2 => item2 % 2 === 1);
// console.log(oddNumbers);

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
//   { name: 'Houston', score: 64 },
// ];

// const average = students.filter(
//   student => student.score >= LOW_SCORE && student.score < HIGH_SCORE,
// );
// console.log(average); // Масив об'єктів з іменами Poly і Houston

// const getUsersWithEyeColor = (users, color) => {
//   const usersFilter = users.filter(item => item.eyeColor === color);
//   return usersFilter;
// };

// const testGpt = massNumber => {
//   const newMassNumber = massNumber.filter(item => item % 2 === 0)
//   return newMassNumber
// }

// console.log(testGpt([16, 18, 15, 13]));
// Доповни код функції getUsersWithAge(users, minAge, maxAge),
//   щоб повернути масив користувачів, вік(збережений у властивості age) яких потрапляє у заданий діапазон від minAge до maxAge.

// Поради:

// Використай метод filter() для створення нового масиву, в якому зберігаються тільки елементи, які задовольняють певну умову.
// Використай оператори >= (більше або дорівнює) та <= (менше або дорівнює), щоб відфільтрувати користувачів,
//   вік яких точно потрапляє у діапазон між мінімальним minAge та максимальним maxAge значеннями.

// const getUsersWithAge = (users, minAge, maxAge) => {
//   const userAge = users.filter(item => item >= minAge && item <= maxAge);
//   return userAge
// };
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((acc, item) => acc + item);

// const averagePlayTime = totalPlayTime / playtimes.length;

// const functionParams = (paraams) => {
//   let sumAll = 0;
//   paraams.forEach(item => {
//     sumAll += item;
//   });
//   return sumAll;
// };
// console.log(functionParams([5, 10, 15]));

// const products = [
//   { name: 'Ноутбук', price: 25000 },
//   { name: 'Мишка', price: 800 },
//   { name: 'Клавіатура', price: 1500 },
// ];

// products.forEach(uesr => console.log(uesr.name));

// const numbers = [3, 8, 11, 4, 6, 7, 2];
// let sum = 0;
// numbers.forEach(item => {
//   if (item % 2 === 0) {
//     sum += item;
//   }

// })

// console.log(sum);

// const words = ['чай', 'телефон', 'лампа', 'стіл', 'монітор', 'вікно'];

// let suma = 0;
// words.forEach(item => {
//   if (item.length > 4) {
//     suma += item.length;
//   }
// });
// console.log(suma);

// const players = [
//   { name: 'Олег', hours: 120, active: true },
//   { name: 'Марія', hours: 85, active: false },
//   { name: 'Іван', hours: 200, active: true },
//   { name: 'Світлана', hours: 150, active: false },
//   { name: 'Юра', hours: 90, active: true },
// ];

// let activeHours = 0;

// players.forEach(item => {
//   if (item.active === true) {
//     activeHours += item.hours;
//   }
// })

// console.log(activeHours);

const heroes = [
  {
    appearance: {
      eyeColor: 'Brown',
      gender: 'Male',
      hairColor: 'Auburn',
      height: ["6'2'", '188 cm'],
      race: null,
      weight: ['200 lb', '90 kg'],
    },
    biography: {
      aliases: ['Stargod', 'Vanwolf', 'Skywolf'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance:
        'AMAZING SPIDER-MAN #1, (as Man-Wolf) AMAZING SPIDER-MAN #124',
      fullName: 'John Jameson',
      placeOfBirth: 'New York, New York',
      publisher: 'Marvel Comics',
    },
    connections: {
      groupAffiliation:
        'Ravencroft Insitute Staff, Avengers Support Crew, NASA, USAF',
      relatives:
        'J. Jonah (father), Joan (mother, deceased), Marla Madison (stepmother), David (paternal grandfather, presumed deceased), Betty (paternal grandmother, presumed deceased)',
    },
    id: 429,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/429-man-wolf.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/429-man-wolf.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/429-man-wolf.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/429-man-wolf.jpg',
    },
    name: 'Man-Wolf',
    powerstats: {
      combat: 70,
      durability: 42,
      intelligence: 63,
      power: 45,
      speed: 35,
      strength: 44,
    },
    slug: '429-man-wolf',
    work: {
      base: 'Queens',
      occupation:
        'Employed by Dept. of Social Services, Queens; former astronaut, test pilot, security chief for Ravenscroft Institute',
    },
  },
  {
    appearance: {
      eyeColor: 'White',
      gender: 'Female',
      hairColor: 'Orange',
      height: ["6'4", '193 cm'],
      race: 'Alien',
      weight: ['218 lb', '98 kg'],
    },
    biography: {
      aliases: ['-'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'The Order #4',
      fullName: 'Ardina',
      placeOfBirth: '-',
      publisher: 'Marvel Comics',
    },
    connections: {
      groupAffiliation: '-',
      relatives: 'Norrin Radd (Silver Surfer, clonal source), Clea (creator)',
    },
    id: 42,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/42-ardina.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/42-ardina.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/42-ardina.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/42-ardina.jpg',
    },
    name: 'Ardina',
    powerstats: {
      combat: 25,
      durability: 80,
      intelligence: 63,
      power: 100,
      speed: 100,
      strength: 100,
    },
    slug: '42-ardina',
    work: {
      base: '-',
      occupation: '-',
    },
  },
  {
    appearance: {
      eyeColor: 'Blue',
      gender: 'Male',
      hairColor: 'Black',
      height: ["5'5", '165 cm'],
      race: 'Human',
      weight: ['125 lb', '56 kg'],
    },
    biography: {
      aliases: ['Alvin Draper', 'Batman', 'Robin', 'Timothy Wayne'],
      alignment: 'good',
      alterEgos: 'Red Robin',
      firstAppearance: 'Batman #436 (August, 1989)',
      fullName: 'Tim Drake',
      placeOfBirth: '-',
      publisher: 'Red Robin',
    },
    connections: {
      groupAffiliation:
        'Teen Titans, Batman Family, Batman Inc., Wayne Enterprises; formerly Young Justice',
      relatives:
        'Jack Drake (father, deceased), Janet Drake (mother, deceased), Dana Winters Drake (step-mother, status unknown), Bruce Wayne (Batman, adoptive father), Damian Wayne (Robin V, adoptive brother), Dick Grayson (Robin I, adoptive brother), Jason Todd (Robin II, adoptive brother), Cassandra Cain (Batgirl IV, adoptive sister)',
    },
    id: 563,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/563-robin-iii.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/563-robin-iii.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/563-robin-iii.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/563-robin-iii.jpg',
    },
    name: 'Robin III',
    powerstats: {
      combat: 85,
      durability: 28,
      intelligence: 81,
      power: 29,
      speed: 27,
      strength: 11,
    },
    slug: '563-robin-iii',
    work: {
      base: 'Gotham City; Titans Tower, San Francisco',
      occupation: 'High School Student',
    },
  },
  {
    appearance: {
      eyeColor: '-',
      gender: 'Female',
      hairColor: 'Blond',
      height: ['-', '0 cm'],
      race: null,
      weight: ['- lb', '0 kg'],
    },
    biography: {
      aliases: ['-'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'No Ordinary Family S01E01 (2010)',
      fullName: 'Stephanie Powell',
      placeOfBirth: '-',
      publisher: 'ABC Studios',
    },
    connections: {
      groupAffiliation: '-',
      relatives:
        'Jim Powell (husband), Daphne Powell (daughter), JJ Powell (son)',
    },
    id: 636,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/636-stephanie-powell.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/636-stephanie-powell.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/636-stephanie-powell.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/636-stephanie-powell.jpg',
    },
    name: 'Stephanie Powell',
    powerstats: {
      combat: 10,
      durability: 10,
      intelligence: 69,
      power: 24,
      speed: 54,
      strength: 10,
    },
    slug: '636-stephanie-powell',
    work: {
      base: '-',
      occupation: 'Executive Vice President of Research at Global Tech',
    },
  },
  {
    appearance: {
      eyeColor: 'Blue',
      gender: 'Male',
      hairColor: 'Black',
      height: ["5'9", '175 cm'],
      race: 'Human',
      weight: ['165 lb', '74 kg'],
    },
    biography: {
      aliases: ['Captain Marvel Jr.', 'CM3'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance:
        'Current incarnation: (As Freddy Freeman) The Power of Shazam #3 (May, 1995)',
      fullName: 'Frederick Christopher Freeman',
      placeOfBirth: '-',
      publisher: 'DC Comics',
    },
    connections: {
      groupAffiliation: 'Marvel Family, formerly Outsiders and Teen Titans.',
      relatives:
        'parents, deceased, Jacob Freeman (granfather, deceased), Timothy Karnes (Sabbac, foster brother, deceased)',
    },
    id: 158,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/158-captain-marvel-ii.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/158-captain-marvel-ii.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/158-captain-marvel-ii.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/158-captain-marvel-ii.jpg',
    },
    name: 'Captain Marvel II',
    powerstats: {
      combat: 56,
      durability: 90,
      intelligence: 75,
      power: 34,
      speed: 27,
      strength: 81,
    },
    slug: '158-captain-marvel-ii',
    work: {
      base: 'Primarily Fawcett City.',
      occupation: 'Adventurer',
    },
  },
  {
    appearance: {
      eyeColor: 'Brown',
      gender: 'Male',
      hairColor: 'Grey',
      height: ["6'4", '193 cm'],
      race: 'Cyborg',
      weight: ['395 lb', '178 kg'],
    },
    biography: {
      aliases: ['Demolisher'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'Astonishing Tales #25 (August, 1974)',
      fullName: 'Luther Manning',
      placeOfBirth: '-',
      publisher: 'Marvel Comics',
    },
    connections: {
      groupAffiliation:
        "Former member of the CIA, Project: Alpha-Mech, US Army, ally of Godwulf's Redeemers",
      relatives: 'Janice (Wife, seperated), Richard (son)',
    },
    id: 215,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/215-deathlok.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/215-deathlok.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/215-deathlok.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/215-deathlok.jpg',
    },
    name: 'Deathlok',
    powerstats: {
      combat: 60,
      durability: 70,
      intelligence: 69,
      power: 40,
      speed: 30,
      strength: 32,
    },
    slug: '215-deathlok',
    work: {
      base: 'New York area',
      occupation: '-',
    },
  },
  {
    appearance: {
      eyeColor: '-',
      gender: 'Male',
      hairColor: '-',
      height: ['-', '0 cm'],
      race: null,
      weight: ['- lb', '0 kg'],
    },
    biography: {
      aliases: ['Cape'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'The Cape S01E01 (2011)',
      fullName: 'Vince Faraday',
      placeOfBirth: '-',
      publisher: null,
    },
    connections: {
      groupAffiliation: '-',
      relatives: 'Trip Faraday (son), Dana Thompson-Faraday (wife)',
    },
    id: 656,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/656-the-cape.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/656-the-cape.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/656-the-cape.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/656-the-cape.jpg',
    },
    name: 'The Cape',
    powerstats: {
      combat: 64,
      durability: 32,
      intelligence: 38,
      power: 22,
      speed: 23,
      strength: 10,
    },
    slug: '656-the-cape',
    work: {
      base: '-',
      occupation: '-',
    },
  },
  {
    appearance: {
      eyeColor: 'Blue',
      gender: 'Female',
      hairColor: 'Blond',
      height: ["5'5", '165 cm'],
      race: 'Human',
      weight: ['125 lb', '56 kg'],
    },
    biography: {
      aliases: ['Spider-Woman'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'Edge of Spider-Verse #2',
      fullName: 'Gwen Stacy',
      placeOfBirth: '-',
      publisher: 'Marvel Comics',
    },
    connections: {
      groupAffiliation:
        'Warriors of the Great Web; formerly Mary Janes, Spider-Army',
      relatives: 'George Stacy (father), Helen Stacy (mother, deceased)',
    },
    id: 619,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/619-spider-gwen.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/619-spider-gwen.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/619-spider-gwen.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/619-spider-gwen.jpg',
    },
    name: 'Spider-Gwen',
    powerstats: {
      combat: 70,
      durability: 70,
      intelligence: 75,
      power: 66,
      speed: 63,
      strength: 55,
    },
    slug: '619-spider-gwen',
    work: {
      base: '-',
      occupation: '-',
    },
  },
  {
    appearance: {
      eyeColor: 'Grey',
      gender: 'Male',
      hairColor: 'Black',
      height: ["6'2", '188 cm'],
      race: 'Human',
      weight: ['180 lb', '81 kg'],
    },
    biography: {
      aliases: [
        'Sorcerer Supreme',
        'Master of the Mystic Arts',
        'Stephen Sanders',
        'Captain Universe',
        'Vincent Stevens',
      ],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'Strange Tales #110 (July, 1963)',
      fullName: 'Stephen Strange',
      placeOfBirth: 'Philadelphia, Pennsylvania',
      publisher: 'Marvel Comics',
    },
    connections: {
      groupAffiliation:
        'Defenders, underground Avengers; formerly the Order, Midnight Sons; former disciple of the Ancient One',
      relatives:
        'Eugene (father, deceased), Beverly (mother, deceased), Victor (Khiron, brother, apparently deceased), Donna (sister, deceased), Clea (wife, estranged), Umar (mother-in-law), Orini (father-in-law), Dormammu (uncle-in-law)',
    },
    id: 226,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/226-doctor-strange.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/226-doctor-strange.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/226-doctor-strange.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/226-doctor-strange.jpg',
    },
    name: 'Doctor Strange',
    powerstats: {
      combat: 60,
      durability: 84,
      intelligence: 100,
      power: 100,
      speed: 12,
      strength: 10,
    },
    slug: '226-doctor-strange',
    work: {
      base: '-',
      occupation: 'Sorcerer Supreme, retired neurosurgeon',
    },
  },
  {
    appearance: {
      eyeColor: 'Bown',
      gender: 'Male',
      hairColor: 'Black',
      height: ['-', '0 cm'],
      race: 'Human',
      weight: ['- lb', '0 kg'],
    },
    biography: {
      aliases: ['Green Lantern', 'White Lantern'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'The New 52: FCBD Special Edition #1 (June, 2012)',
      fullName: 'Simoon Baz',
      placeOfBirth: 'Dearborn, Michigan',
      publisher: 'DC Comics',
    },
    connections: {
      groupAffiliation: '-',
      relatives:
        'Sira Baz (sister), Farid Amar (nephew), Nazir Amar (brother in-law)',
    },
    id: 600,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/600-simon-baz.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/600-simon-baz.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/600-simon-baz.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/600-simon-baz.jpg',
    },
    name: 'Simon Baz',
    powerstats: {
      combat: 60,
      durability: 55,
      intelligence: 56,
      power: 100,
      speed: 42,
      strength: 90,
    },
    slug: '600-simon-baz',
    work: {
      base: '-',
      occupation: '-',
    },
  },
  {
    appearance: {
      eyeColor: '-',
      gender: 'Female',
      hairColor: '-',
      height: ['-', '0 cm'],
      race: null,
      weight: ['- lb', '0 kg'],
    },
    biography: {
      aliases: ['-'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'Heroes S02E04 - The Kindness of Strangers',
      fullName: 'Monica Dawson',
      placeOfBirth: '-',
      publisher: 'NBC - Heroes',
    },
    connections: {
      groupAffiliation: '-',
      relatives:
        'Nana Dawson (Grandmother), Damon (brother), DL Hawkins (cousin), Niki Sanders (cousin-in-law once removed), Micah Sanders (second cousin)',
    },
    id: 469,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/469-monica-dawson.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/469-monica-dawson.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/469-monica-dawson.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/469-monica-dawson.jpg',
    },
    name: 'Monica Dawson',
    powerstats: {
      combat: 90,
      durability: 14,
      intelligence: 50,
      power: 48,
      speed: 35,
      strength: 10,
    },
    slug: '469-monica-dawson',
    work: {
      base: 'New Orleans, LA',
      occupation: 'Fast food service',
    },
  },
  {
    appearance: {
      eyeColor: 'Brown',
      gender: 'Male',
      hairColor: 'Brown',
      height: ["6'1", '185 cm'],
      race: 'Human',
      weight: ['180 lb', '81 kg'],
    },
    biography: {
      aliases: ['Bucket-Head', 'Edge-Man', 'Powell'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'Darkhawk #1 (March, 1991)',
      fullName: 'Christopher Powell',
      placeOfBirth: 'Queens, New York',
      publisher: 'Marvel Comics',
    },
    connections: {
      groupAffiliation:
        'formerly Loners, New Warriors, Avengers West Coast (reservist), Secret Defenders (founder)',
      relatives:
        'Michael Powell (father), Grace Powell (mother), Jonathon and Jason Powell (brothers)',
    },
    id: 202,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/202-darkhawk.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/202-darkhawk.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/202-darkhawk.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/202-darkhawk.jpg',
    },
    name: 'Darkhawk',
    powerstats: {
      combat: 64,
      durability: 70,
      intelligence: 50,
      power: 74,
      speed: 33,
      strength: 32,
    },
    slug: '202-darkhawk',
    work: {
      base: 'Los Angeles, California; formerly New York City and Avengers Compound',
      occupation: 'Retired Superhero',
    },
  },
  {
    appearance: {
      eyeColor: 'Brown',
      gender: 'Male',
      hairColor: 'Brown',
      height: ["5'4", '163 cm'],
      race: null,
      weight: ['124 lb', '56 kg'],
    },
    biography: {
      aliases: ['Max'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'New X-Men: Academy X #1',
      fullName: 'Maxwell Jordan',
      placeOfBirth: '-',
      publisher: 'Marvel Comics',
    },
    connections: {
      groupAffiliation: 'Corsairs',
      relatives: '-',
    },
    id: 537,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/537-quill.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/537-quill.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/537-quill.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/537-quill.jpg',
    },
    name: 'Quill',
    powerstats: {
      combat: 14,
      durability: 14,
      intelligence: 38,
      power: 23,
      speed: 12,
      strength: 10,
    },
    slug: '537-quill',
    work: {
      base: 'X-Mansion',
      occupation: '-',
    },
  },
  {
    appearance: {
      eyeColor: '-',
      gender: 'Male',
      hairColor: '-',
      height: ['-', '0 cm'],
      race: null,
      weight: ['- lb', '0 kg'],
    },
    biography: {
      aliases: ['-'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'Darkman (August 24, 1990)',
      fullName: 'Peyton Westlake',
      placeOfBirth: '-',
      publisher: 'Universal Studios',
    },
    connections: {
      groupAffiliation: '-',
      relatives: 'Julie Hastings (girlfriend)',
    },
    id: 203,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/203-darkman.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/203-darkman.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/203-darkman.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/203-darkman.jpg',
    },
    name: 'Darkman',
    powerstats: {
      combat: 28,
      durability: 85,
      intelligence: 75,
      power: 12,
      speed: 23,
      strength: 14,
    },
    slug: '203-darkman',
    work: {
      base: '-',
      occupation: 'Scientist',
    },
  },
  {
    appearance: {
      eyeColor: 'Green',
      gender: 'Female',
      hairColor: 'Blond',
      height: ["5'10", '178 cm'],
      race: 'Human',
      weight: ['120 lb', '54 kg'],
    },
    biography: {
      aliases: ['Felicity Harmon'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'Amazing Spider-Man #194 (July, 1979)',
      fullName: 'Felicia Hardy',
      placeOfBirth: 'Queens, New York',
      publisher: 'Marvel Comics',
    },
    connections: {
      groupAffiliation: 'Formerly Heroes for Hire',
      relatives: 'Walter Hardy (father, deceased), Lydia Hardy (mother)',
    },
    id: 99,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/99-black-cat.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/99-black-cat.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/99-black-cat.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/99-black-cat.jpg',
    },
    name: 'Black Cat',
    powerstats: {
      combat: 70,
      durability: 10,
      intelligence: 75,
      power: 23,
      speed: 33,
      strength: 16,
    },
    slug: '99-black-cat',
    work: {
      base: '-',
      occupation:
        "Cat burglar; Private investigator, founder of Cat's Eye Investigations.",
    },
  },
  {
    appearance: {
      eyeColor: 'Blue',
      gender: 'Male',
      hairColor: 'Blond',
      height: ['-', '0 cm'],
      race: 'Human',
      weight: ['- lb', '0 kg'],
    },
    biography: {
      aliases: [
        'Time Lord',
        'Time Master',
        'Boppy',
        'Dr. Hunter',
        'Mr',
        'Hunter',
        'Carter',
      ],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'Showcase #20',
      fullName: 'Richard Hunter',
      placeOfBirth: '-',
      publisher: 'DC Comics',
    },
    connections: {
      groupAffiliation:
        'Formerly leader of the Time Masters; former member of the Forgotten Heroes; former member of the Linear Men, Booster Gold International (BGI)',
      relatives:
        'Michael Carter, (Booster Gold, father), Unknown (mother), Jonar Carter (grandfather), Ellen Carter (grandmother, deceased), Michelle Carter (Goldstar) (aunt), Daniel Carter (21st century ancestor), Rose Levin (ancestor), Dan Hunter (cousin),',
    },
    id: 559,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/559-rip-hunter.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/559-rip-hunter.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/559-rip-hunter.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/559-rip-hunter.jpg',
    },
    name: 'Rip Hunter',
    powerstats: {
      combat: 25,
      durability: 10,
      intelligence: 100,
      power: 100,
      speed: 8,
      strength: 8,
    },
    slug: '559-rip-hunter',
    work: {
      base: 'Time Lab, Arizona',
      occupation: '-',
    },
  },
  {
    appearance: {
      eyeColor: 'Black',
      gender: 'Female',
      hairColor: 'Black',
      height: ["5'8", '173 cm'],
      race: 'Talokite',
      weight: ['120 lb', '54 kg'],
    },
    biography: {
      aliases: ['-'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'Adventure Comics #365',
      fullName: 'Tasmia Mallor',
      placeOfBirth: 'Talok VIII',
      publisher: 'DC Comics',
    },
    connections: {
      groupAffiliation: '-',
      relatives: '-',
    },
    id: 585,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/585-shadow-lass.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/585-shadow-lass.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/585-shadow-lass.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/585-shadow-lass.jpg',
    },
    name: 'Shadow Lass',
    powerstats: {
      combat: 80,
      durability: 20,
      intelligence: 63,
      power: 79,
      speed: 67,
      strength: 10,
    },
    slug: '585-shadow-lass',
    work: {
      base: '-',
      occupation: '-',
    },
  },
  {
    appearance: {
      eyeColor: 'Yellow',
      gender: 'Male',
      hairColor: 'Indigo',
      height: ["5'9'", '175 cm'],
      race: null,
      weight: ['195 lb', '88 kg'],
    },
    biography: {
      aliases: ['-'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'GIANT-SIZE X-MEN #1',
      fullName: 'Kurt Wagner',
      placeOfBirth: 'Somewhere in the Bavarian Alps',
      publisher: 'Marvel Comics',
    },
    connections: {
      groupAffiliation: 'X-Men, formerly Excalibur',
      relatives:
        'Eric Wagner (father, deceased), Margali Szardos (foster mother), Jimaine Szardos (Daytripper, alias Amanda Sefton, foster sister), Stefan Szardos (foster brother, deceased), Mystique (mother), Graydon Creed (half-brother, deceased).',
    },
    id: 490,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/490-nightcrawler.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/490-nightcrawler.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/490-nightcrawler.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/490-nightcrawler.jpg',
    },
    name: 'Nightcrawler',
    powerstats: {
      combat: 80,
      durability: 14,
      intelligence: 50,
      power: 76,
      speed: 47,
      strength: 10,
    },
    slug: '490-nightcrawler',
    work: {
      base: 'Xavier Institute for Higher Learning, Salem Center, Westchester County, New York (former) Muir Island, Scotland; Braddock Lighthouse',
      occupation: 'Adventurer, Teacher',
    },
  },
  {
    appearance: {
      eyeColor: 'Green',
      gender: 'Female',
      hairColor: 'Brown',
      height: ['-', '0 cm'],
      race: 'Human',
      weight: ['- lb', '0 kg'],
    },
    biography: {
      aliases: ['Green Lantern', 'Power Ring'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'Green Lantern Vol 5 #20 (July, 2013)',
      fullName: 'Jessica Cruz',
      placeOfBirth: '-',
      publisher: 'DC Comics',
    },
    connections: {
      groupAffiliation: '-',
      relatives: 'Sara Cruz (sister)',
    },
    id: 360,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/360-jessica-cruz.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/360-jessica-cruz.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/360-jessica-cruz.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/360-jessica-cruz.jpg',
    },
    name: 'Jessica Cruz',
    powerstats: {
      combat: 55,
      durability: 50,
      intelligence: 56,
      power: 100,
      speed: 46,
      strength: 90,
    },
    slug: '360-jessica-cruz',
    work: {
      base: '-',
      occupation: '-',
    },
  },
  {
    appearance: {
      eyeColor: 'Blue',
      gender: 'Male',
      hairColor: 'No Hair',
      height: ["6'1", '185 cm'],
      race: 'Ungaran',
      weight: ['200 lb', '90 kg'],
    },
    biography: {
      aliases: ['Lagzia'],
      alignment: 'good',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'Showcase #22 (October, 1959)',
      fullName: '',
      placeOfBirth: 'Ungara',
      publisher: 'DC Comics',
    },
    connections: {
      groupAffiliation: 'Green Lantern Corps, Black Lantern Corps',
      relatives:
        'Amon Sur (son), Arin Sur (sister), Thaal Sinestro (brother-in-law), Soranik Natu (niece)',
    },
    id: 3,
    images: {
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/3-abin-sur.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/3-abin-sur.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/3-abin-sur.jpg',
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/3-abin-sur.jpg',
    },
    name: 'Abin Sur',
    powerstats: {
      combat: 65,
      durability: 64,
      intelligence: 50,
      power: 99,
      speed: 53,
      strength: 90,
    },
    slug: '3-abin-sur',
    work: {
      base: 'Oa',
      occupation: 'Green Lantern, former history professor',
    },
  },
];

// Напиши функцію, яка приймає масив героїв та повертає масив імен усіх героїв.

// const nameHeroes = heroes => {
//   return heroes.map(nameHeroesUpdate => nameHeroesUpdate.name);

// }

// console.log(nameHeroes(heroes));

// Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких gender дорівнює 'Male'.  не виконав сам
// const gameHeroes = heroes => {
//   return heroes.filter(item => item.appearance.gender === 'Male')
// }

// console.log(gameHeroes(heroes));

// Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких eyeColor дорівнює 'Blue'

// const colorEye = heroes => {
//   return heroes.filter(hero => hero.appearance.eyeColor === 'Blue')
// }
// console.log(colorEye(heroes));

// Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких hairColor дорівнює 'Black'

// const colorHair = heroes => {
//   return heroes.filter(hero => hero.appearance.hairColor === 'Black')
// }

// console.log(colorHair(heroes));

// Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких race дорівнює 'Human'
// const raceHuman = heroes => {
//   return heroes.filter(hero => hero.appearance.race === 'Human');
// };

// console.log(raceHuman(heroes));

// Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких publisher дорівнює 'Marvel Comics'
// const publisherMarvel = heroes => {
//   return heroes.filter(hero => hero.biography.publisher === 'Marvel Comics');
// };

// console.log(publisherMarvel(heroes))
// Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких powerstats.power більше ніж 80
// const powerstatsPower = heroes => {
//   return heroes.filter(hero => hero.powerstats.power > 80)
// }

// console.log(powerstatsPower(heroes));
// Напиши функцію, яка приймає масив героїв та повертає героя з name рівним 'Doctor Strange'

// const nameSearch = heroes => {
//   return heroes.find(hero => hero.name === 'Doctor Strange');
// }

// console.log(nameSearch(heroes));



