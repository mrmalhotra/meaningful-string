const animal = require('./assets/animal');
const adjective = require('./assets/adjectives');

const number = '1234567890';
const smallCaseAlphabats = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseAlphabats = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const smallAlphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';
const upperAlphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123409876';
const mixedChars = 'NOPQRmDTBCMljLSIJkno3p051F787643G8EArKqH';

function getRandom(object) {
    let string = '';
    let referralString = mixedChars;
    let lengthShouldBeAtlast = mixedChars.length;
    let lengthShouldBeAtleast = 4;
    let lengthShouldBe = lengthShouldBeAtlast;

    if(object && object.custom)
        referralString = object.custom;

    if(object && object.allCaps)
        referralString = upperCaseAlphabats;

    if(object && object.allSmall)
        referralString = smallCaseAlphabats;

    if(object && object.capsWithNumbers)
        referralString = upperAlphanumeric;

    if(object && object.smallWithNumbers)
        referralString = smallAlphanumeric;

    if(object && object.onlyNumbers)
        referralString = number;

    if (object && object.max)
        lengthShouldBeAtlast = parseInt(object.max);

    if (object && object.min)
        lengthShouldBeAtleast = parseInt(object.min);

    if(lengthShouldBeAtleast > lengthShouldBeAtlast){
        var temp = lengthShouldBeAtleast;
        lengthShouldBeAtleast = lengthShouldBeAtlast;
        lengthShouldBeAtlast = temp;
        console.log('checking swaping value ',lengthShouldBeAtleast, ' last ',lengthShouldBeAtlast)
    }

    if (object && object.max && object.min)
        lengthShouldBe = Math.floor(Math.random() * (object.max - object.min + 1)) + object.min;

    if (object && object.charLength && !object.fromShortId)
        lengthShouldBe = parseInt(object.charLength);

    if(object && object.fromShortId)
        if(object.charLength >= 3 && object.charLength <= 8)
            lengthShouldBe = parseInt(object.charLength);


    for (let i = 0; i < lengthShouldBe; i++) {
        let val = Math.floor(Math.random() * referralString.length - 1) + 1;
        string += referralString[val];
    }

    if(object && object.startWith)
        string =  object.startWith + string;

    if(object && object.endWith)
        string =  string + object.endWith;

    return string;
}

//returns random string according to the params
random =  (object) => {
    return getRandom(object);
};

//returns a meaningful random string generated with the combination of animal-adjective-numbers
meaningful = (object) =>{

        let max = Math.floor(Math.random() * animal.animalsName.length - 1);
        let order = [];
        let upto = 1000;
        let joinString = '-';
        let chooseAnimal = animal.animalsName[max];
        let chooseAdjective = adjective.adjective[Math.floor(Math.random() * (adjective.adjective.length - 1))];

        if(object && object.numberUpto > 0)
            upto = parseInt(object.numberUpto);

        if(object && object.joinBy)
         joinString = object.joinBy;

         let chooseNumber = Math.floor(Math.random() * upto);

        order.push(chooseAnimal);
        order.push(chooseAdjective);
        order.push(chooseNumber);

        return order.join(joinString);
};

shortId = (object) =>{

    var empty = {};

    if(object)
        object.fromShortId = true;

    if(object && !object.charLength && !object.min && object.max){
        object.max = 4;
        object.min = 4;
    }

    if(object && object.charLength === 0){
        object.min = 3;
        object.max = 3;
    }

    if((object && object.charLength) && (parseInt(object.charLength) > 8)){
        object.max = 8;
        object.min = 8
    }

    if(object && object.charLength && parseInt(object.charLength) < 3){
        object.max = 3;
        object.min = 3;
    }

    if((object && object.charLength) && (parseInt(object.charLength) >= 3 && parseInt(object.charLength) <= 8)){
        var value = parseInt(object.charLength);
        object.max = value;
        object.min = value;
    }

    if(object && object.startWith){
        object.startWith = null;
    }

    if(object && object.endWith){
        object.endWith = null;
    }


    if(!object){
        empty.max = 4;
        empty.min = 4;
        empty.fromShortId = true;
        return getRandom(empty);
    }

    return getRandom(object);
}

const hashCode = (s) => s ? s.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0):0


module.exports = {
    random,
    meaningful,
    shortId,
    hashCode
}