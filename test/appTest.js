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
})



