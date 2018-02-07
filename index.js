module.exports = generateString;

const number = '1234567890';
const smallCaseAlphabats = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseAlphabats = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const smallAlphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';
const upperAlphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123409876';
const mixedChars = 'NOPQRmDTBCMljLSIJkno3p051F787643G8EArKqH';

function generateString(first, last) {
this.first = first;
this.last = last;
}

generateString.prototype.animal = function () {

}

generateString.prototype.random = function (object) {
    let string = '';
    let referralString = mixedChars;
    let lengthShouldBeAtlast = mixedChars.length;
    let lengthShouldBeAtleast = 4;
    let lengthShouldBe = lengthShouldBeAtlast;

    // let capsWithNumbers = object.capsWithNumbers;
    // let smallWithNumbers = object.smallWithNumbers;;
    // let onlyNumbers = object.onlyNumbers;;
    // let onlySmallCase = object.onlySmallCase;;
    // let onlyCapsCase = object.onlyCapsCase;;

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

    if (object && object.max)
        lengthShouldBeAtleast = parseInt(object.min);

    if (object && object.max && object.min){
       let minimum = lengthShouldBeAtlast - lengthShouldBeAtleast;
       let maximum = lengthShouldBeAtlast - minimum;
        lengthShouldBe = Math.ceil(Math.random() * minimum) + maximum ;
    }

    for (let i = 0; i < lengthShouldBe; i++) {
        let val = Math.floor(Math.random() * referralString.length - 1) + 1;
        string += referralString[val];
    }
    return string;
};
