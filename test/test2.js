var assert = require('assert');
var LibCrypto = require('./../lib/lib-crypto');

describe('LibCrypto', function () {
    this.timeout(60000);
    
    describe('Tests2', function () {

	it('CreateSeedAndWallet With Language and ExtraEntropy', function(){
            let seedCreate = LibCrypto.createSeedAndWallet('BRAZILIAN-PORTUGUESE', 'ExtraEntropy');
            assert.notEqual(seedCreate,null);
        })
        
    });
});
