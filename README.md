# TypeScript

### Install

---

`npm i -g typescript`

### Setup

---

#### Create file

```TypeScript
// add.ts
const add = (num1: number, num2: number) => {
  return num1 + num2;
}

console.log(add(1, 2))
console.log(add("1", "2")) // this will be highlight as error
```

#### Compile to JavaScript file

```console
# general
tsc add.ts

# if includes es5 contents
tsc -t es5 add.ts
# or
tsc add.ts -t es5
```

### Overview

---

##### Basic Types:

-   number
-   string
-   boolean
-   array
-   tuple
-   enum
-   any
-   unknown

-   void
-   undefined
-   never

##### Advance Types:

-   union
-   literal

##### Type Assertion

##### OOP

-   object
-   interface
-   class
-   decorator
-   generics
