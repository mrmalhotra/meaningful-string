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

    if (object && object.max && object.min){
        // let minimum = lengthShouldBeAtlast - lengthShouldBeAtleast;
        // let maximum = lengthShouldBeAtlast - minimum;
        lengthShouldBe = Math.floor(Math.random() * (object.max - object.min + 1)) + object.min;
    }

    for (let i = 0; i < lengthShouldBe; i++) {
        let val = Math.floor(Math.random() * referralString.length - 1) + 1;
        string += referralString[val];
    }
    return string;
}

random =  (object) => {
    return getRandom(object);
};

meaningful = () =>{
    console.log('check word one ',animal.animalsName.length);

    let max = Math.floor(Math.random() * animal.animalsName.length - 1);
        console.log('check word one ',max);
        let order = [];
        let chooseAnimal = animal.animalsName[max];
        let chooseAdjective = adjective.adjective[Math.floor(Math.random() * adjective.adjective.length - 1)];
        let chooseNumber = Math.floor(Math.random() * 28);

        order.push(chooseAnimal);
        order.push(chooseAdjective);
        order.push(chooseNumber);

        return order.join('-')
};


module.exports = {
    random,
    meaningful,
}