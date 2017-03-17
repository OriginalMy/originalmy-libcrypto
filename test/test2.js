var assert = require('assert');
var LibCrypto = require('./../lib/lib-crypto');
var sha256 = require('sha256');

describe('LibCrypto', function () {
    this.timeout(60000);
    
    
    
    describe('VerifyMessage', function () {

	it('Mine a block from a signed message', function(){
            let message = 'nome;email;senha'
            let mSha256 = sha256(message);
            let difficulty = 3;
            let block =  LibCrypto.mineMessage(mSha256,difficulty);
		    console.log('Block: ' + block)
            assert.notEqual(block,null);
        })
        it('Check mined block from a signed message', function(){
            let message = 'nome;email;senha'
            let mSha256 = sha256(message);
            let difficulty = 3;
            let block = "9ec5c455e2e7c105ccc9def132733a15230569d8b2a154e0a3cfe2af2cb064cb;2574"
            let result =  LibCrypto.checkMinedMessage(mSha256,difficulty,block);
            assert.equal(result, true);
        })
        
    });
});
