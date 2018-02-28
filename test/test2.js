const assert = require('assert');
const LibCrypto = require('./../lib/lib-crypto');
const createHash = require('sha.js');
const bitcoin = require('bitcoinjs-lib');
const NETWORK = 'testnet';
const sha256 = require('sha256');
let PUBLIC_KEY;
let SEED;

describe(`LibCrypto [${NETWORK}]`, function () {
  this.timeout(60000);
  describe('CreateSeedAndWallet', function () {
    let seedCreate = LibCrypto.createSeedAndWallet('BRAZILIAN-PORTUGUESE', 'ExtraEntropy', NETWORK);
    PUBLIC_KEY = seedCreate.publicKey;
    SEED = seedCreate.seed;
    assert.equal(seedCreate.success, true);
    assert.notEqual(PUBLIC_KEY[0], '1');
    assert.notEqual(PUBLIC_KEY[0], '3');
  });
  describe('CreateWallet', function () {
    it('CreateWallet With Seed', function () {
      let wallet = LibCrypto.createWallet('culpa decorar socorro esquadrilha chateado guarda fresco idade barganha palma monte auditar', NETWORK);
      assert.equal(wallet.success, true);
      assert.equal(wallet.message, 'ok');
      assert.equal(wallet.publicKey, 'mvJDBszChomEK8GcYyeKkRJ2GuPNCXFFES');
    })
    it('CreateWallet with Seed SHA', function () {
      let wallet = LibCrypto.createWalletFromSHA('44cfbe4215c8ef38a2e02c2b1870d4d57902f78a581e5e3974b548ba90a7661b', NETWORK);
      assert.equal(wallet.success, true);
      assert.equal(wallet.message, 'ok');
      assert.equal(wallet.publicKey, 'mq8NoX1FPSuqxGoM9DjdUtqZtyBk5XuVq6');
    })
  });
  describe('ValidateWallet', function () {
    it('ValidateWallet With Seed and PublicKey', function () {
      let seed = 'falar latino desmaio demolir pesagem omitir sufoco absorver suporte lava papel carro';
      let publicKey = 'mtLgLWi4sRBKNnq23qcHV2UUZEqeJe7itH';
      let result = LibCrypto.validateWallet(seed, publicKey, NETWORK);
      assert.equal(result, true);
    })
  });
  describe('VerifyMessage', function () {
    it('Sign and verify a message', function () {
      const publicKey = 'myGhjF8HNRgztkm6JcbBSNUtyfDkSsyDFD';
      const seed = sha256('secagem sozinho qualquer cesta cruz luva escape socorrido isoladamente pessoal carga maleta');
      const message = `Nome do usuario;Endereco do usuario;Titulo de Eleitor;${new Date().toISOString()}`;
      let signature = LibCrypto.signMessage(seed, message, 2, NETWORK);
      let result = LibCrypto.verifyMessage(publicKey, message, signature);
      assert.equal(result, true);
    })
  });
});
