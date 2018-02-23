# OriginalMy LibCrypto

## Creates and manipulates seeds and wallets for Blockchain

[![npm version](https://badge.fury.io/js/originalmy-libcrypto.svg)](https://badge.fury.io/js/originalmy-libcrypto)

## Getting Started

This library is distributed in the npm packaging systems.

```sh
npm install originalmy-libcrypto
```

There are many examples of how to use it on the developer guide below.

### Importing npm module

```javascript
const OriginalmyLibCrypto = require('originalmy-libcrypto');
```

### Create Seed

```javascript
let seed = OriginalmyLibCrypto.createSeed('BRAZILIAN-PORTUGUESE', 'ExtraEntropy');
```

```text
Parameters
    Language:  ENGLISH, BRAZILIAN-PORTUGUESE
    ExtraEntropy: Any string
Return
    String
Obs.: Extraentroy is used to generate extra random seed
```

### Create seed and wallet

```javascript
let seedAndWallet = OriginalmyLibCrypto.createSeedAndWallet('BRAZILIAN-PORTUGUESE', 'ExtraEntropy');
```

```text
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

### Validate seed

```javascript
let result = OriginalmyLibCrypto.validateSeed('veterano pelicula verdadeiro cambalhota curso poeta coisa balanco patife companhia governo regra');
```

```text
Parameters
    Seed:  String of 12 words
Return
    Boolean
```

### Validate seed with language

```javascript
let result = OriginalmyLibCrypto.validateSeedWithLang('BRAZILIAN-PORTUGUESE','veterano pelicula verdadeiro cambalhota curso poeta coisa balanco patife companhia governo regra');
```

```text
Parameters
    Language:  ENGLISH,BRAZILIAN-PORTUGUESE
    Seed:  String of 12 words
Return
    Boolean
```

### Create wallet

```javascript
let wallet =  OriginalmyLibCrypto.createWallet('veterano pelicula verdadeiro cambalhota curso poeta coisa balanco patife companhia governo regra');
```

```text
Parameters
    Seed:  String of 12 words
Return
    PublicKey as Wallet address
```

### Validate wallet

```javascript
let seed = 'lagosta diario mesmo dificil plastico grade escondido mergulho acolher remeter areia herdar';
let publicKey = '1JLFmGH679akX7uyUTcGzRoCVNjdYUagaA';
let result =  OriginalmyLibCrypto.validateWallet(seed,publicKey);
```

```text
Parameters
    Seed:  String of 12 words
    PublicKey = Wallet address
Return
    Boolean
```

### Sign message

```javascript
let seed = 'lagosta diario mesmo dificil plastico grade escondido mergulho acolher remeter areia herdar';
let message = 'Message'
let difficulty = 5
let result =  OriginalmyLibCrypto.signMessage(seed,message,difficulty);
```

```text
Parameters
    Seed:  String of 12 words
    Message = Any words
Return
    block = String as [message];[wallet];[signature];nonce
```

### Verify message

```javascript
let publicKey = '1JLFmGH679akX7uyUTcGzRoCVNjdYUagaA'
let message = 'Message';
let signature = 'IDPyblrXKujgcw4fQXBLgEThNs18LWOkrVYwA8WOQrJUSGrT+mIuiL17aWm72GcMO4SsK24j/vZXl5mAj5tPQIc=';
let result =  OriginalmyLibCrypto.verifyMessage(publicKey, message, signature);
```

```text
Parameters
    PublicKey = Wallet address
    Message = Any words
    Signature:  Encrypted text message
Return
    Boolean
```

## Contributing

Feel free to make a fork and open an pull request or open an [issue](https://github.com/OriginalMy/originalmy-libcrypto/issues/new) for us.
