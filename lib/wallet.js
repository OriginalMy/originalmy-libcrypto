var listErros = require('./errors/errors-list');
var bitcoin = require('bitcoinjs-lib');
var Hash = bitcoin.crypto;
var bigi = require('bigi');
var LibCryptoError = require('./errors/lib-crypto-errors');
var BitcoinMessage = require('bitcoinjs-message');
var WalletModel = require('./model/wallet');
var proofofwork = require('./pow');

module.exports = (function () {

  function createWalletPrivate(seed, network = 'mainnet') {
    if (!seed)
      throw new LibCryptoError(listErros['SeedEmptyError']);

    let value = new Buffer(seed);
    let hash = bitcoin.crypto.sha256(seed); // transform the seed on a sha256 hash
    let d = bigi.fromBuffer(hash);

    let keyPair;
    if (network === 'mainnet') {
      keyPair = new bitcoin.ECPair(d);
    } else {
      keyPair = new bitcoin.ECPair(d, null, {
        network: {
          messagePrefix: '\x18Bitcoin Signed Message:\n',
          bip32: {
            public: 0x043587cf,
            private: 0x04358394
          },
          pubKeyHash: 0x6f,
          scriptHash: 0xc4,
          wif: 0xef,
          dustThreshold: 546
        }
      });
    }

    let wif = keyPair.toWIF(); // export the private key to wif format

    return wif;
  }

  class Wallet {

    constructor() { }

    static createWallet(seed, network = 'mainnet') {
      if (!seed)
        throw new LibCryptoError(listErros['SeedEmptyError']);

      let hash = bitcoin.crypto.sha256(seed);
      let d = bigi.fromBuffer(hash);

      let keyPair;
      if (network === 'mainnet') {
        keyPair = new bitcoin.ECPair(d);
      } else {
        keyPair = new bitcoin.ECPair(d, null, {
          network: {
            messagePrefix: '\x18Bitcoin Signed Message:\n',
            bip32: {
              public: 0x043587cf,
              private: 0x04358394
            },
            pubKeyHash: 0x6f,
            scriptHash: 0xc4,
            wif: 0xef,
            dustThreshold: 546
          }
        });
      }
      let result = new WalletModel(keyPair.getAddress()); // get the wallet address

      return result;
    }

    static createWalletFromSHA(seedsha, network = 'mainnet') {
      if (!seedsha)
        throw new LibCryptoError(listErros['SeedEmptyError']);

      let value = new Buffer(seedsha, "hex");
      let d = bigi.fromBuffer(value); // read hexadecimal value here

      let keyPair;
      if (network === 'mainnet') {
        keyPair = new bitcoin.ECPair(d);
      } else {
        keyPair = new bitcoin.ECPair(d, null, {
          network: {
            messagePrefix: '\x18Bitcoin Signed Message:\n',
            bip32: {
              public: 0x043587cf,
              private: 0x04358394
            },
            pubKeyHash: 0x6f,
            scriptHash: 0xc4,
            wif: 0xef,
            dustThreshold: 546
          }
        });
      }

      let result = new WalletModel(keyPair.getAddress()); // get the wallet address

      return result;
    }

    static signMessage(seedsha256, message, difficulty, network = 'mainnet') {
      if (!seedsha256)
        throw new LibCryptoError(listErros['SeedEmptyError']);

      if (!message)
        throw new LibCryptoError(listErros['MessageEmptyError']);

      let value = new Buffer(seedsha256, "hex");
      let d = bigi.fromBuffer(value);

      let keyPair;
      if (network === 'mainnet') {
        keyPair = new bitcoin.ECPair(d);
      } else {
        keyPair = new bitcoin.ECPair(d,null,{
        network: {
          messagePrefix: '\x18Bitcoin Signed Message:\n',
          bip32: {
            public: 0x043587cf,
            private: 0x04358394
          },
          pubKeyHash: 0x6f,
          scriptHash: 0xc4,
          wif: 0xef,
          dustThreshold: 546
        }
        });
      }

      let wallet = new WalletModel(keyPair.getAddress()); // get the wallet address from seed

      let privateKey = keyPair.d.toBuffer(32)

      let messagePrefix = network === 'mainnet' ? bitcoin.networks.bitcoin.messagePrefix : bitcoin.networks.testnet.messagePrefix;
      let signature = BitcoinMessage.sign(message, messagePrefix, privateKey, keyPair.compressed); //sign the message
      let concatMessage = message + ';' + wallet.publicKey + ';' + signature.toString('base64');

      let block = proofofwork(concatMessage, difficulty); // do a proof-of-work on string message

      return block;
    }

    static verifyMessage(address, message, signature, network = 'mainnet') {
      if (!address)
        throw new LibCryptoError(listErros['PublicKeyEmptyError']);

      if (!message)
        throw new LibCryptoError(listErros['MessageEmptyError']);

      if (!signature)
        throw new LibCryptoError(listErros['SignatureEmptyError']);

      let messagePrefix = network === 'mainnet' ? bitcoin.networks.bitcoin.messagePrefix : bitcoin.networks.testnet.messagePrefix;

      let verified = BitcoinMessage.verify(message, messagePrefix, address, signature); // verify if the digital signature is valid

      return verified;
    }

    static validateWallet(seed, publicKey, network) {

      let wallet = Wallet.createWallet(seed, network).publicKey;

      let result = wallet == publicKey ? true : false;

      return result;
    }

    static mineMessage(message, difficulty) {

      let result = proofofwork(message, difficulty);

      return result;
    }

    static checkMinedMessage(message, difficulty, block) {

      let result = proofofwork.check(message, difficulty, block);

      return result;
    }
  }
  return Wallet;
})();
