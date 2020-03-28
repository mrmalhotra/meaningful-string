const assert = require('chai').assert;
const mString = require('../index');

const falseValArray = [0, "", null, undefined]

describe('App',()=>{
    it('Should return random string in range ',()=>{
        assert.equal(mString.random({min:9,max:9}).length,9);

    });

    it('Should return random string in range with equality below ',()=>{
        assert.isBelow(mString.random({min:9,max:14}).length,15);
    });


    it('Should return random string in range with equality above ',()=>{
        assert.isAbove(mString.random({min:10,max:14}).length,9);
    });


    for(let i= 0;i<100;i++){
        if(i >= 3 && i <=8){
            it(`shortId: Should return short id with length ${i} and equal`,()=>{
                assert.equal(mString.shortId({charLength:i}).length,i);
            })
        }else if(i < 3){
            it(`shortId: Should return short id with length ${i} and 3`,()=>{
                assert.equal(mString.shortId({charLength:i}).length,3);
            })
        }else if(i > 8){
            it(`shortId: Should return short id with length ${i} and below`,()=>{
                assert.isBelow(mString.shortId({charLength:i}).length,i);
            })
        }

    }

    for(var i= 0;i<100;i++){
        it(`random(): Should return string id with length ${i} and should be equal`,()=>{
            assert.equal(mString.random({charLength:i}).length,i);
        });
    }

    it('no value in max',()=>{
        assert.isAbove(mString.random({min:3}).length,10)
    });

    it('no value in min',()=>{
        assert.isAbove(mString.random({max:7}).length,10)
    });

    for (let i = 0; i < 100; i++) {
        let stringToBeAdded = mString.random({min: 7, max: 9});
        it('startWith ' + stringToBeAdded, () => {
            assert.include(mString.random({startWith: stringToBeAdded}), stringToBeAdded, 'it contains the: ' + stringToBeAdded);
        });
    }

    for (let i = 0; i < 100; i++) {
        let stringToBeAdded = mString.random({min: 7, max: 9});
        it('endWith ' + stringToBeAdded, () => {
            assert.include(mString.random({endWith: stringToBeAdded}), stringToBeAdded, 'it contains the: ' + stringToBeAdded);
        });
    }

    it('Hash should Returning Integer',()=>{
        assert.typeOf(mString.hashCode("npm js"),"number")
    });
        
    falseValArray.forEach(x=> {
        it('Hash should Returning 0',()=>{
            assert.equal(mString.hashCode(x),0)
    
    })
})
    
});




