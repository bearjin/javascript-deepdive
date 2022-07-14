const log = console.log;

const circle1 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  },
};

log(circle1.getDiameter()); // 10

const circle2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  },
};

log(circle2.getDiameter()); // 20

// 생성자 함수
function Circle(radius) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.

  // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };

  // if (!new.target) {
  //   return new Circle(radius);
  // }

  // 3. 암묵적으로 this를 반환한다.
  // 원시값은 그대로 암묵적인 this가 그대로 반환.
  // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
  // return {};
}
// 인스턴스 생성
const circle3 = new Circle(5);
const circle4 = new Circle(10);
const circle5 = Circle(15);

log(radius, getDiameter());

// log(circle3.getDiameter(), circle4.getDiameter(), circle5.getDiameter());

function add(x, y) {
  return x + y;
}

let inst = new add();
log(inst);

const NonConstructor = function () {
  return {};
};

const a = new NonConstructor();
