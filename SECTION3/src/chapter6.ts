// 타입 단언
type Person = {
  name: string;
  age: number;
};

let person = {} as Person;

person.name = "kim";
person.age = 27;
console.log(person);
