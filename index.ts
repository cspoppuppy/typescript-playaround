let list: [number, string] = [1, "ddd"]


let union : string | number

union = 2;
union = "hi"
// union = true

let union2: number | string | boolean | string[]

// Literal
let union3: 0 | 1 | 2

union3 = 1
// union3 = 4


let literal : 1 | "2" | true | [1,2,3,4]


function merge(
  n1: number | string,
  n2: number | string,
  resultType: "as-number" | "as-string"
) {
  if (resultType === "as-string") {
    return n1.toString() + n2.toString();
  }
  if (typeof n1 === "string" || typeof n2 === "string")
    return n1.toString() + n2.toString();
  else return n1 + n2;
}

let mergeNumber = merge(2, 5, "as-number");
let mergeNumber2 = merge(2, 5, "as-string");
let mergeString = merge("hello", "world", "as-string")

console.log(mergeNumber)
console.log(mergeNumber2)
console.log(mergeString)

// Enum
enum Color {
  red,
  green,
  blue
}

enum Color2 {
  red = 5,
  green = 10,
  blue = 1
}

enum Color3 {
  red = "red",
  green = "green",
  blue = "blue"
}

let color = Color.blue
console.log(color)
console.log(Color3.green)


// any
let randomValue: any = 666;
randomValue = true;
randomValue = "abc"
randomValue = {}
randomValue()
randomValue.toUpperCase()


// unknown
let randomValue1: unknown = 666;
randomValue1 = true;
randomValue1 = "abc"
randomValue1 = {}
// randomValue1()
// randomValue1.toUpperCase()

// void, undefined and never
function printResult() : void {
  console.log("no return")
}

console.log(printResult())  // undefined


function printResult1() : undefined {
  console.log("return")
  return
}

function printResult3() : any {
  console.log("no return")
}

function printResult4() : any {
  console.log("return")
  return 1
}


function throwError(message: string, errorCode: number): never {
  throw {
    message,
    errorCode
  }
  // never execute here
}
throwError("not found", 404)

function whileLoop(): never {
  while(true) {
    console.log("hi")
  }
}

// Type Assertions
let message: any;
message = "abc"
message.endWith("c")
// // method1
// let ddd = (<string>message).endsWith("c");
// // method2
// let ddd2 = (message as string).endsWith("c")

// function



// object
const person: {
  firstName: string,
  lastName: string,
  age: number
} = {
  firstName: "S",
  lastName: "C",
  age: 18
}


let list1: number = [1,2,3,4]
// Generics
let list2: Array<number> = [1,2,3,4]

let lastInArray = <T>(arr: Array<T>) => {
  return arr[arr.length - 1];
}
// // or
// let lastInArray = <T>(arr: T[]) => {
//   return arr[arr.length - 1];
// }

const l1 = lastInArray([1,2,3,4]);
const l2 = lastInArray<string>(["a", "b", "c"]);
const l3 = lastInArray<string | number>(["a", 1, "b", 2]);

let makeTuple = <T, Y = number>(x: T, y: Y) => [x, y]

const v1 = makeTuple(1, "one")
const v2 = makeTuple<boolean>(true, 1);