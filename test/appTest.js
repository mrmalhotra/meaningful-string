const assert = require('chai').assert;
const random = require('../index');

describe('App',()=>{
    it('Should return random string in range ',()=>{
        assert.equal(random.random({min:9,max:9}).length,9);

    })

    it('Should return random string in range with equality below ',()=>{
        assert.isBelow(random.random({min:9,max:14}).length,15);
    })


    it('Should return random string in range with equality above ',()=>{
        assert.isAbove(random.random({min:10,max:14}).length,9);
    })

    for(var i= 0;i<2000;i++){
        if(i >= 3 || i <=8){
            it(`Should return short id with length ${i} and equal`,()=>{
                assert.equal(random.shortId({charLength:i}).length,i);
            })
        }else{
            it(`Should return short id with length ${i} and not equal`,()=>{
                assert.isBelow(random.shortId({charLength:i}).length,i);
            })
        }

    }

    for(var i= 0;i<1000;i++){
        it(`Should return string id with length ${i} and should be equal`,()=>{
            assert.equal(random.random({charLength:i}).length,i);
        })
    }

    it('no value in max',()=>{
        assert.isAbove(random.random({min:3}).length,10)
    })

    it('no value in min',()=>{
        assert.isAbove(random.random({max:7}).length,10)
    })

    for (let i = 0; i < 1000; i++) {
        let stringToBeAdded = random.random({min: 7, max: 9});
        it('startWith ' + stringToBeAdded, () => {
            assert.include(random.random({startWith: stringToBeAdded}), stringToBeAdded, 'it contains the: ' + stringToBeAdded);
        })
    }

    for (let i = 0; i < 1000; i++) {
        let stringToBeAdded = random.random({min: 7, max: 9});
        it('endWith ' + stringToBeAdded, () => {
            assert.include(random.random({endWith: stringToBeAdded}), stringToBeAdded, 'it contains the: ' + stringToBeAdded);
        })
    }
})



