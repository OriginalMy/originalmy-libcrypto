OriginalMy LibCrypto

Creates and manipulates seeds and wallets for Blockchain
=======

[NPM Link](https://www.npmjs.org/package/originalmy-lib-crypto)

[![NPM Package](https://img.shields.io/npm/v/@cycle/core.svg)](https://www.npmjs.org/package/originalmy-lib-crypto)


## Getting Started

This library is distributed in the npm packaging systems.

```sh
npm install originalmy-libcrypto
```

There are many examples of how to use it on the developer guide below.

### Importing npm module

```javascript
var OriginalmyLibCrypto = require('originalmy-libcrypto');
```


### To CreateSeed:
```javascript
OriginalmyLibCrypto.createSeed('BRAZILIAN-PORTUGUESE', 'ExtraEntropy');
```
```
Parameters
    Language:  ENGLISH, BRAZILIAN-PORTUGUESE
    ExtraEntropy: Any string
Return
    String
Obs.: Extraentroy is used to generate extra random seed
```

### To CreateSeedAndWallet:
```javascript
OriginalmyLibCrypto.createSeedAndWallet('BRAZILIAN-PORTUGUESE', 'ExtraEntropy');
```
```
Parameters
    Language:  ENGLISH, BRAZILIAN-PORTUGUESE
    ExtraEntropy: Any string
Return
    Wallet {
      message: string,
      success: boolean,
      publicKey: string,
      seed: string 
    }
Obs.: Extraentroy is used to generate extra random seed
```

### To ValidateSeed:
```javascript
let result = OriginalmyLibCrypto.validateSeed('veterano pelicula verdadeiro cambalhota curso poeta coisa balanco patife companhia governo regra');
```
```
Parameters
    Seed:  String of 12 words
Return
    Boolean
```


### To ValidateSeedWithLang:
```javascript
let result = OriginalmyLibCrypto.validateSeedWithLang('BRAZILIAN-PORTUGUESE','veterano pelicula verdadeiro cambalhota curso poeta coisa balanco patife companhia governo regra');
```
```
Parameters
    Language:  ENGLISH,BRAZILIAN-PORTUGUESE
    Seed:  String of 12 words
Return
    Boolean
```

### To CreateWallet:
```javascript
let wallet =  OriginalmyLibCrypto.createWallet('veterano pelicula verdadeiro cambalhota curso poeta coisa balanco patife companhia governo regra');
```
```
Parameters
    Seed:  String of 12 words
Return
    PublicKey as Wallet address
```


### To ValidateWallet:
```javascript
let seed = 'lagosta diario mesmo dificil plastico grade escondido mergulho acolher remeter areia herdar';
let publicKey = '1JLFmGH679akX7uyUTcGzRoCVNjdYUagaA';
let result =  OriginalmyLibCrypto.validateWallet(seed,publicKey);
```
```
Parameters
    Seed:  String of 12 words
    PublicKey = Wallet address
Return
    Boolean
```

### To SignMessage:
```javascript
let seed = 'lagosta diario mesmo dificil plastico grade escondido mergulho acolher remeter areia herdar';
let message = 'Message'
let difficulty = 5
let result =  OriginalmyLibCrypto.signMessage(seed,message,difficulty);
```
```
Parameters
    Seed:  String of 12 words
    Message = Any words
Return
    block = String as [message];[wallet];[signature];nonce
```

### To VerifyMessage:
```javascript
let publicKey = '1JLFmGH679akX7uyUTcGzRoCVNjdYUagaA'
let message = 'Message';
let signature = 'IDPyblrXKujgcw4fQXBLgEThNs18LWOkrVYwA8WOQrJUSGrT+mIuiL17aWm72GcMO4SsK24j/vZXl5mAj5tPQIc=';
let result =  OriginalmyLibCrypto.verifyMessage(publicKey, message, signature);
```
```
Parameters
    PublicKey = Wallet address
    Message = Any words
    Signature:  Encrypted text message
Return
    Boolean
```

## Contributing

See [CONTRIBUTING.md](https://CONTRIBUTING.md) on the main originalmy-libcrypto repo for information about how to contribute.