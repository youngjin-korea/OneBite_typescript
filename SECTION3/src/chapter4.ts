import { type } from "os";

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person; // union type 선언
// Dog 차집합 Person
let union1: Union1 = {
  name: "kim",
  color: "red",
};
// Person 차집합 Dog
let union2: Union1 = {
  name: "young",
  language: "ko",
};
// Dog 교집합 Person
let union3: Union1 = {
  name: "kim",
  color: "skyBlue",
  language: "en",
};
// 어느 집합에도 포함 안됨.
// let union4: Union1 = {
//   name: "kaka",
// };

// 교집합 타입 (intersection type)
let intersectiion1: number & string; //숫자 문자열은 교집합 부분이 없으므로 never(공집합)타입이 된다.

type signIn = {
  email: string;
  pw: string;
};
type signUp = {
  email: string;
  pw: string;
  name: string;
};

type intersection2 = signIn & signUp;

let prototype1 = {
  email: "",
  pw: "",
  name: "",
};
