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
    let lengthShouldBe = mixedChars.length;
    if(object && object.max)
        lengthShouldBe = parseInt(object.max);

        for(let i =0;i< lengthShouldBe;i++){
           let val =  Math.floor(Math.random() * mixedChars.length-1) +1;
            string += mixedChars[val] ;
        }
        return string;
};