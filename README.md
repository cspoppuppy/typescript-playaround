# TypeScript

#### Install

---

`npm i -g typescript`

#### Create file

```TypeScript
// greeter.ts
function greeter(person) {
  return "hello, " + person;
}

let user = "Jane User";

document.body.textContent = greeter(user);
```

#### Compile to JavaScript file

```console
# general
tsc greeter.ts

# if includes es5 contents
tsc -t es5 greeter.ts
# or
tsc greeter -t es5
```

#### Overview

Basic Types:

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

Advance Types:

-   union
-   literal

Type Assertion

OOP

-   object
-   interface
-   class
-   decorator
-   generics
