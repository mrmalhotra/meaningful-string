## Meaningful String
**Meaningful String** is an npm package which generates a random meaningful string.

##Getting Started
Here is how you can install this package globally using npm

##Installation
using npm
```
$ npm install meaningful-string -g
```

In Node.js:

```
//Load the full package
const meaningfulString = require('meaningful-string');

//Generate random string
const generate = new meaningfulString();

console.log('Random String: ',generate.random());
```

**Result**

``Random String: HJ7H9Lkt7hFdS7mJY48NnmHH6hDdg76lIfaD4MhU6Y``

##Usage
```
var options = {
"min":10,
"max":15,
"capsWithNumbers":true
}
 
console.log('Random String: ',generate.random(options));
```

**Result**
``Random String: GJ67ML7G6GJU5M1``

**options**
There are a few options that can be useful:

**min**: This is the minimum length of the generated random string.

**max**: This is the maximum length of the generated random string.

**allCaps**: It tells that only the Upper case alphabets (range A-Z) are allowed in the generated random string.

**allSmall**: It tells that only the Lower case alphabets (range: a-z) are allowed in the generated random string.

**capsWithNumbers**: It tells that only the Upper case alphabets (range: A-Z) and numbers (0-9) are allowed in the generated random string.

**smallWithNumbers**: It tells that only the Lower case alphabets (range: a-z) and numbers (range: 0-9) are allowed in the generated random string.

**onlyNumbers**: It tells that only numbers (0-9) are allowed in the generated random string.