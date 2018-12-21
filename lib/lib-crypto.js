var SeedLib = require('./seed');
var WalletLib = require('./wallet');
var dictionary = require('./brazilian-portuguese-bip39.json');

class LibCrypto {

  constructor() { }

  static dictionary(lng) {
    const wordList = {
      'PT' : dictionary ,
      'EN' : require('bip39').wordlists['EN']
     };
    return wordList[lng] || dictionary;
  }

  static createSeedAndWallet(lang, extraEntropy, network) {
    return SeedLib.createSeedAndWallet(lang, extraEntropy, network);
  }

  static createSeed(lang, extraEntropy) {
    return SeedLib.generateRandomSeed(lang, extraEntropy);
  }

  static validateSeed(seed) {
    return SeedLib.validateSeed(seed);
  }

  static validateSeedWithLang(lang, seed) {
    return SeedLib.validateSeedWithLang(lang, seed);
  }

  static createWallet(seed, network) {
    return WalletLib.createWallet(seed, network);
  }

  static createWalletETH(seed) {
    return WalletLib.createWalletETH(seed);
  }

  static createWalletFromSHA(seedsha, network) {
    return WalletLib.createWalletFromSHA(seedsha, network);
  }

  static validateWallet(seed, publicKey, network) {
    return WalletLib.validateWallet(seed, publicKey, network);
  }

  static validateWalletETH(seed, publicKey) {
    return WalletLib.validateWalletETH(seed, publicKey);
  }

  static signMessage(seedsha256, message, difficulty, network) {
    return WalletLib.signMessage(seedsha256, message, difficulty, network);
  }

  static verifyMessage(publicKey, message, signature, network) {
    return WalletLib.verifyMessage(publicKey, message, signature, network);
  }

  static mineMessage(message, difficulty) {
    return WalletLib.mineMessage(message, difficulty);
  }

  static checkMinedMessage(message, difficulty, block){
    return WalletLib.checkMinedMessage(message, difficulty, block);
  }
}

module.exports = LibCrypto;

