const assert = require('assert');
const LibCrypto = require('./../lib/lib-crypto');
const createHash = require('sha.js');
const bitcoin = require('bitcoinjs-lib');
const NETWORK = 'testnet';
const sha256 = require('sha256');

describe(`LibCrypto [${NETWORK}]`, function () {
  this.timeout(60000);
  describe('Wallet', function () {
    it('CreateSeedAndWallet', function () {
      const seedCreate = LibCrypto.createSeedAndWallet('BRAZILIAN-PORTUGUESE', 'ExtraEntropy', NETWORK);
      assert.equal(seedCreate.success, true);
      assert.notEqual(seedCreate.publicKey[0], '1');
      assert.notEqual(seedCreate.publicKey[0], '3');
    });

    it('CreateWallet From Seed', function () {
      const wallet = LibCrypto.createWallet('culpa decorar socorro esquadrilha chateado guarda fresco idade barganha palma monte auditar', NETWORK);
      assert.equal(wallet.success, true);
      assert.equal(wallet.message, 'ok');
      assert.equal(wallet.publicKey, 'mvJDBszChomEK8GcYyeKkRJ2GuPNCXFFES');
    });

    it('CreateWallet From SHA256 of Seed', function () {
      const wallet = LibCrypto.createWalletFromSHA('44cfbe4215c8ef38a2e02c2b1870d4d57902f78a581e5e3974b548ba90a7661b', NETWORK);
      assert.equal(wallet.success, true);
      assert.equal(wallet.message, 'ok');
      assert.equal(wallet.publicKey, 'mq8NoX1FPSuqxGoM9DjdUtqZtyBk5XuVq6');
    });

    it('ValidateWallet With Seed and PublicKey', function () {
      const seed = 'falar latino desmaio demolir pesagem omitir sufoco absorver suporte lava papel carro';
      const publicKey = 'mtLgLWi4sRBKNnq23qcHV2UUZEqeJe7itH';
      const result = LibCrypto.validateWallet(seed, publicKey, NETWORK);
      assert.equal(result, true);
    });
  });

  describe('Message', function () {
    it('Sign a message', function () {
      const publicKey = 'mx6xmuqhJENmFmSpqAcPDDj8SmkyKnZt3U';
      const seed = sha256('guindaste gemada incidente investimento guindaste trilho joelho babador abrir movimento oval marinado');
      const message = `Nome do usuario;2018-02-28T18:10:37.878Z`;
      const signature = LibCrypto.signMessage(seed, message, 2, NETWORK);
      assert.equal(signature.split(';')[2], publicKey);
    });

    it('Verify a signed message', function () {
      const publicKey = 'mx6xmuqhJENmFmSpqAcPDDj8SmkyKnZt3U';
      const message = `Nome do usuario;2018-02-28T18:10:37.878Z`;
      const signature = 'Nome do usuario;2018-02-28T18:10:37.878Z;mx6xmuqhJENmFmSpqAcPDDj8SmkyKnZt3U;HxWKljVKtl2EL80UX/LKW8dnjIZanE1uqTEAracZMiCAYr9iYff1wrl5zuDqIYbyQT3xyUGvaQAyeFtuHDG0DFQ=;6';
      const result = LibCrypto.verifyMessage(publicKey, message, signature.split(';')[3], NETWORK);
      assert.equal(result, true);
    });
  });
});
