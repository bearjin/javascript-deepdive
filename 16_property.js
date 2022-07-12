const log = console.log;

const o = {};

console.dir(o); // [[Prototype]] 이 존재함

log(o.__proto__); // 비권장
log(Object.getPrototypeOf(o)); // 권장

o.name = "Lee";

log(Object.getOwnPropertyDescriptor(o, "name"));

const person = {
  firstName: "Woongjin",
  lastName: "Kim",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

log(person.fullName, (person.fullName = "Hyemi Kim"));

let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
log(descriptor);

descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
log(descriptor);

const newPerson = {};
Object.defineProperty(newPerson, "firstName", {
  value: "Woongjin",
  writable: true,
  enumerable: true,
  configurable: true,
});
log(newPerson.firstName);

newPerson.firstName = "Hyemi";
log(newPerson.firstName);

Object.defineProperty(newPerson, "lastName", {
  value: "Kim",
});
log(newPerson.lastName);

newPerson.lastName = "Park";
log(newPerson.lastName);

for (let key in newPerson) {
  log(key);
}

const a = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(newPerson)
);
log(a);

log((a.firstName = "Woongjin"));
log(newPerson.firstName);

Object.preventExtensions(a); // 객체 확장 금지: 추가 안됨

Object.seal(a); // 객체 밀봉: 추가, 삭제 안됨

Object.freeze(a); // 겍체 동결: 읽기만 됨
