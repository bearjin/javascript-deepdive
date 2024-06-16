// NOTE __proto__ is deprecated Object.getPrototypeOf() / Object.create() should be used instead
var Person = function (name) {
  this._name = name;
};

Person.prototype.getName = function () {
  return this._name;
};

var suzi = new Person("Suzi");
suzi.__proto__._name = "SUZI__proto__"; // SUZI__proto__
console.dir(suzi);
console.log(suzi.__proto__.getName()); // undefined; this suzi.__proto__
// console.log(Object.getPrototypeOf(suzi).getName());
console.dir(suzi.__proto__);

var suzi = new Person("Suzi", 28);
console.dir(suzi);
console.log(suzi.getName());
var iu = new Person("Jieun", 28);
console.dir(iu);
console.log(iu.getName());
// NOTE __proto__ 는 생략 가능한 프로퍼티이기때문에 직접 접근이 가능하다.

// NOTE 생성자 함수의 prototype에 어떤 메서드나 프로퍼티가 있다면 인스턴스에서도 마치 자신의 것처럼 해당 메서드나 프로퍼티에 접근할 수 있게 됩니다.

var Constructor = function (name) {
  this.name = name;
};

Constructor.prototype.method1 = function () {};
Constructor.prototype.prototype1 = "Constructor Prototype Property";

var instance = new Constructor("Instance");
console.dir(Constructor);
console.dir(instance);

var arr = [1, 2];
console.dir(arr);
console.dir(Array);
console.log(Array.prototype.constructor === Array); // true
console.log(arr.__proto__.constructor === Array); // true
console.log(arr.constructor === Array); // true

// NOTE isArray, from 등의 메서드는 참조할 수 없다.

// NOTE 모두 동일한 대상을 가리킵니다.
/**
 * [Constructor]
 * [instance].__proto__.constructor
 * [instance].constructor
 * Object.getPrototypeOf([instance]).constructor
 * [Constructor].prototype.constructor
 */

var Person2 = function (name) {
  this.name = name;
};

Person2.prototype.getName = function () {
  return this.name;
};

var woong = new Person2("웅");
woong.getName = function () {
  return "이름은 " + this.name;
};
console.log(woong.getName()); // 이름은 웅
console.dir(woong);
console.log(woong.__proto__.getName.call(woong)); // 웅

// NOTE 프로토타입 체인 Object 는 최상위 프로토타입이기 때문에 객체의 메서드들은 Object.prototype이 아닌 Object에 직접 부여할 수 밖에 없었다.
console.dir(Object);
