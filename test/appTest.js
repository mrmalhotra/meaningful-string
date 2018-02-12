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

    for(var i= 0;i<20;i++){
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

    it(`Should return length 3`,()=>{
        assert.equal(random.random({min:3}).length,3);
    })

    it(`Should return length 3`,()=>{
        assert.equal(random.random({max:3}).length,3);
    })

})



