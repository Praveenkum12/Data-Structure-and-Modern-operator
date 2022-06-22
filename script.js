'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

// const days=['mon','tue','wed','thur','fri','sat','sun'];

const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
const openingHours = {
  [days[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order: function (starterIndex, mainIndex) {
    return this.starterMenu[starterIndex] + ' and ' + this.mainMenu[mainIndex];
  },
  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `At ${time}, deliver ${this.order(
        starterIndex,
        mainIndex
      )} to ${address} `
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIng, ...remainIng) {
    console.log(mainIng);
    console.log(remainIng);
  },
};

// for (const [key, { open, close }] of Object.entries(openingHours)) {
//   console.log(key, open, close);
// }

// for (const value of Object.values(openingHours)) {
//   console.log(value);
// }

// for (const hour of Object.keys(openingHours)) {
//   console.log(hour);
// }

// for (const day of Object.keys(restaurant)) {
//   console.log(day);
// }
// const weekday = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

// for (const day of weekday) {
//   console.log(restaurant.openingHours[day]?.open);
// }

// const rest1 = {
//   name: 'Termi',
//   dish: 'Biryani',
// };
// const rest2 = {
//   name: 'Priya',
//   food: 'Burger',
// };

// const menu = restaurant.starterMenu;

// for (const item of menu.entries()) {
//   console.log(item[0] + 1, item[1]);
// }

// const arr = ['Mushroom', 'Onion', 'cucumber', 'tomato'];
// restaurant.orderPizza(...arr);

// const { openingHours: { sat, ...weekdays } } = restaurant;
// console.log(sat, weekdays);
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Termi';
// console.log(restaurantCopy);
// console.log(restaurant);
// const ing = [prompt('Set your first ingrdient'), prompt('Set your second ingrdient'), prompt('Set your third ingrdient')];
// restaurant.orderPasta(...ing);

// const arr = { 3: 2, 4: 5, 5: 6 };
// console.log(arr);

// restaurant.orderDelivery({
//     starterIndex: 2,
//     mainIndex: 0,
//     time: '10:30',
//     address: 'Perumal koil street'
// });

// let { open, close } = restaurant.openingHours.thur;
// const obj = { open: 30, close: 40 };
// console.log(open, close);
// ({ open, close } = obj);
// console.log(open, close);

// let [x, y] = [100, 400];
// console.log(x, y);
// const obj = { x: 40, y: 20, z: 50 };
// ({ x, y } = obj);
// console.log(x, y);
// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// const [firstOrder, secondOrder] = restaurant.order(2, 1);
// console.log(firstOrder, secondOrder);
// let [first, second] = restaurant.categories;
// console.log(first, second);
// [first, second] = [second, first];
// console.log(first, second);

// const game = {
//   team1: 'Bayern Munich',
//   team2: `Borrussia Dortmund`,
//   players: [
//     [
//       'neuer',
//       'Termi',
//       'Priya',
//       'Praveen',
//       'Dyno',
//       'Sanjay',
//       'Vijai',
//       'Ajith',
//       'Dev',
//       'Ronaldo',
//       'Messi',
//     ],
//     [
//       'Segar',
//       'Termi',
//       'PK',
//       'Praveen',
//       'Dyno',
//       'Sanjay',
//       'Vijai',
//       'Ajith',
//       'Dev',
//       'Ronaldo',
//       'Messi',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Priya', 'Termi', 'Uma', 'Segar'],
//   date: 'Nov 9th,2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// for (const [team, odd] of Object.entries(game.odds)) {
//   console.log(`Odd of victory ${game[team] ?? 'Draw'}: ${odd}`);
// }

// for (const [x, names] of game.scored.entries()) {
//   console.log(`Goal ${x + 1}: ${names}`);
// }

// let sum = 0;
// for (const item of Object.values(game.odds)) {
//   sum += item;
// }
// sum /= Object.values(game.odds).length;
// console.log(sum);

// const {
//   odds: { team1: x },
// } = game;
// console.log(x);

// const arr = [2, 3, 4];
// const x = arr.indexOf(3);
// console.log(x);
