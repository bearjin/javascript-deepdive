var person = {
  "last-name": "Lee",
  1: 10,
};

person.'last-name'; // error
person.last-name; // error
person[last-name]; // error
person['last-name']; // okay

person.1; // error
person.'1'; // error
person[1]; // okay
person['1']; // okay

// ES6
let x = 1, y = 2;;

const obj = { x, y }; // { x: 1, y: 2};

const prefix = 'prop';
let i = 0;

const obj2 = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
}; // {prop-1: 1, prop-2: 2, prop-3: 3}