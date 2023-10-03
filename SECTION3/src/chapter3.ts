// 기본 타입간의 호환성
let num1: number = 1;
let num2: 10 = 10;
num1 = num2;

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let dog: Dog = {
  name: "doldol",
  color: "brown",
  breed: "jindo",
};

let animal: Animal = {
  name: "kirin",
  color: "yello",
};

type Book = {
  name: string;
  price: number;
};
type ProgramingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;

let programingBook: ProgramingBook = {
  name: "한입",
  price: 2000,
  skill: "react.js",
};

book = programingBook; //sub 객체를 super 객체에 대입하는 것은 가능!
book = {
  name: "young",
  price: 30000,
  //   skill: "typescript", //리터럴로 대입하면 초과 프로퍼티 검사에 의해서 제한을 받음
};
console.log(book);
