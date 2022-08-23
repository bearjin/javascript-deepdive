// // 클래스 선언문
// class Person {
//   // 생성자
//   constructor(name) {
//     // 인스턴스 생성 및 초기화
//     this.name = name; // name 프로퍼티는 public하다.
//   }

//   // 프로토타입 메서드
//   sayHi() {
//     console.log(`Hi My name is ${this.name}`);
//   }

//   // 정적 메서드
//   static sayHello() {
//     console.log("Hello");
//   }
// }

// // 인스턴스 생성
// const me = new Person("Kim");

// // 인스턴스의 프로퍼티 참조
// console.log(me.name); // Kim

// // 프로토타입 메서드 호출
// me.sayHi(); // Hi My name is Kim

// Person.sayHello(); // Hello

// class Square {
//   static area(width, height) {
//     return width * height;
//   }
// }

// console.log(Square.area(10, 10)); // 100

class Square {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const square = new Square(10, 10);
console.log(square.area()); // 100

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  }
}

const me = new Person("Woongjin", "Kim");

console.log(`${me.firstName} ${me.lastName}`); // Woongjin Kim

// setter 함수 실행
me.fullName = "Hyemi Kim";
console.log(me); // {firstName: Hyemi, lastName: "Kim"}

// getter 함수 실행
console.log(me.fullName);

class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }

  eat() {
    return "eat";
  }

  move() {
    return "move";
  }
}

class Bird extends Animal {
  constructor(age, weight) {
    super(age, weight);
  }

  fly() {
    return "fly";
  }
}

const animal = new Animal(3, 10);
const bird = new Bird(1, 5);
console.log(animal.age);
console.log(animal.weight);
console.log(bird.age);
console.log(bird.weight);

class Base {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi ${this.name}`;
  }
}

class Derived extends Base {
  sayHi() {
    return `${super.sayHi()}. how are you doing?`;
  }
}

const derived = new Derived("Kim");
console.log(derived.sayHi());

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  toString() {
    return `width = ${this.width}, height = ${this.height}`;
  }
}

class ColorRectangle extends Rectangle {
  constructor(width, height, color) {
    super(width, height);
    this.color = color;
  }

  toString() {
    return super.toString() + `, color = ${this.color}`;
  }
}

const colorRectangle = new ColorRectangle(3, 5, "blue");
console.log(colorRectangle.getArea());
console.log(colorRectangle.toString());
