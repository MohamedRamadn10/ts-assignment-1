"use strict";
// // assignment-2
// function calculate(numOne: number, numTwo: number) : number {
//     return numOne + numTwo;
// }
//   console.log(calculate(10, 20)); // 30
//   console.log(calculate("10", "20")); // We Don't Need This To Work
//   console.log(calculate(+true, +true)); // 2
//   // assignment-3 
//   function printInfo(valueOne: string | number , valueTwo:string | number) : string | number {
//     return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
//   }
//   console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
//   console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
//   console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work
//   // assignment-4
//   let arr: (number | boolean[] | (string | (string | number)[])[])[]
//     // = [12, [true, false], ["fjf", ["ff", 224]]];
//     = [112];
//   // assignment-5
//   function reportErrors(username, age: number) {
//     let rank = "Professor";
//     return `Username: ${username}`;
//     console.log("We Will Not Reach Here");
//   }
//   console.log(reportErrors("Elzero", 40));
// assignment-6
// let nothing;
// let theName: string = "Elzero";
// function showMyDetails(a = "", b = "", c = "") {
//   return `${a}${b}${c}`;
// }
// // Replace ???? With The Available Variables As Argument To Get The Result
// console.log(showMyDetails(theName)); // Elzero
// // assignment-7
// function showMsg(user?: number | string, age?: boolean | number | string, country?: boolean | string) {
//   return `${user}${age}${country}`;
// }
// console.log(showMsg());
// console.log(showMsg("Elzero"));
// console.log(showMsg("Elzero", 40));
// console.log(showMsg("Elzero", "40", "Egypt"));
// assignment-8
function printInConsole(...params) {
    let msg = "";
    for (let i = 0; i < params.length; i++) {
        msg += `The Value Is ${params[i]} And Type Is ${typeof params[i]}\n`;
    }
    msg += "Done";
    return msg;
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
//# sourceMappingURL=main.js.map