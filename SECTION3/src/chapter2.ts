import { futimes } from "fs";

// unknown 최상위 슈퍼타입 이므로 어떤 타입도 업캐스팅 가능
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "string";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
}

// never
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();
}

// void type: return 값이 없는 함수에 사용된다.(유일하게 undefined로 가능하다.)
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  let voidLet: void = undefined;
}


