const a = 100;
const b = 100;

/**
 *
 * 0x123: 100;
 * 0x111: a, 값은 0x123;
 * 0x112: b, 값은 0x123;
 */

a === b; // true

const c = document.querySelector(".a"); // null

Symbol("abc") === Symbol("abc"); // false

typeof null; // object
