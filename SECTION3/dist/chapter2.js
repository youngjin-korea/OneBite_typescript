// unknown 최상위 슈퍼타입 이므로 어떤 타입도 업캐스팅 가능
function unknownExam() {
    let a = 1;
    let b = "string";
    let c = true;
    let d = null;
    let e = undefined;
}
// never
function neverExam() {
    function neverFunc() {
        while (true) { }
    }
    let num = neverFunc();
    let str = neverFunc();
    let bool = neverFunc();
}
// void type: return 값이 없는 함수에 사용된다.(유일하게 undefined로 가능하다.)
function voidExam() {
    function voidFunc() {
        console.log("hi");
        return undefined;
    }
    let voidLet = undefined;
}
export {};
