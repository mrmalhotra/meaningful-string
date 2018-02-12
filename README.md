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
const generate = require('meaningful-string');

//Generate random string

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

**custom**: You can also define your own charset.
**charLength**: When you specify charLength, it will take privilege over min, max parameters. This string will be generated exact the length of **charLength**.

##meanigful

It is a function which generates string using animal names followed by adjectives followed by numbers


##Usage
```
var options = {
"numberUpto":60,
"joinBy":'-
}

console.log('Random Meaningful String: ',generate.meaningful(options));

console.log('Random Meaningful String: ',generate.meaningful(options));
```

**Result**

``'Random Meaningful String: rat-smile-45``

``'Random Meaningful String: Fox-emotional-32``


##shortId

It is a function which generates short id.

**Note**: it generates the short Id in the range of 0-8 i.e. charLength can be minimum: 0 and maximum:8.


##Usage
```
var options = {
"charLength":6,
"custom":"frt564"
}

console.log('Random ShortId: ',generate.shortId(options));

console.log('Random ShortId: ',generate.shortId(options));
```

**Result**

``'Random ShortId: ff6ftr``

``'Random ShortId: ftr5r4``