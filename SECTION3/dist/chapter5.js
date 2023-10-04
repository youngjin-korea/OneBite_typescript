// 타입 추론 (변수에 초기값을 대입하면서 자동으로 ts가 타입을 결정한다.)
let a = 10;
let b = "";
let c = {
    id: 1,
    name: "kim",
    profile: {
        nickname: "kimmy",
    },
    urls: ["https://www.naver.com"],
};
let { id, name, profile } = c;
let [one, two, three] = [1, "", {}];
function func(props = "") {
    return "";
}
// 함수의 리턴 타입과 , 파라미터의 기본값의 타입을 추론 가능
const num = 1;
const str = "str";
// 상수는 다른 값으로 바뀌지 않으므로 초기값을 리터럴 타입으로 갖는다.
// 변수를 선언만 하면 any로 값을 넣을때 마다 변수의 타입이 변함.
let num1;
num1 = "";
num1 = 12;
export {};
//  let 으로 선언하면 const와 다르게 넓은 타입으로 지정해 준다. -> 타입 넓히기
