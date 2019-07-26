# OriginalMy LibCrypto

## Creates and manipulates seeds and wallets for Blockchain

[![npm](https://img.shields.io/npm/v/originalmy-libcrypto.svg)](https://www.npmjs.com/package/originalmy-libcrypto)
[![npm](https://img.shields.io/npm/dt/originalmy-libcrypto.svg)](https://www.npmjs.com/package/originalmy-libcrypto)
[![npm](https://img.shields.io/npm/l/originalmy-libcrypto.svg)](https://www.npmjs.com/package/originalmy-libcrypto)

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
let seedAndWallet = OriginalmyLibCrypto.createSeedAndWallet('BRAZILIAN-PORTUGUESE', 'ExtraEntropy'); // MAINNET
// OR: let seedAndWallet = OriginalmyLibCrypto.createSeedAndWallet('BRAZILIAN-PORTUGUESE', 'ExtraEntropy', 'mainnet'); // MAINNET
// OR: let seedAndWallet = OriginalmyLibCrypto.createSeedAndWallet('BRAZILIAN-PORTUGUESE', 'ExtraEntropy', 'testnet'); // TESTNET
```

```text
Parameters
    Language:  ENGLISH, BRAZILIAN-PORTUGUESE
    ExtraEntropy: Any string
    Network: mainnet or testnet
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

### Create wallet from seed

```javascript
let wallet = OriginalmyLibCrypto.createWallet('veterano pelicula verdadeiro cambalhota curso poeta coisa balanco patife companhia governo regra'); // MAINNET
// OR: let wallet = OriginalmyLibCrypto.createWallet('veterano pelicula verdadeiro cambalhota curso poeta coisa balanco patife companhia governo regra', 'mainnet'); // MAINNET
// OR: let wallet = OriginalmyLibCrypto.createWallet('veterano pelicula verdadeiro cambalhota curso poeta coisa balanco patife companhia governo regra', 'testnet'); // TESTNET
```

```text
Parameters
    Seed:  String of 12 words
    Network: mainnet or testnet
Return
    PublicKey as Wallet address
```

### Create wallet from SHA256 of a seed

```javascript
let wallet =  OriginalmyLibCrypto.createWalletFromSHA('44cfbe4215c8ef38a2e02c2b1870d4d57902f78a581e5e3974b548ba90a7661b'); // MAINNET
// OR: let wallet =  OriginalmyLibCrypto.createWalletFromSHA('44cfbe4215c8ef38a2e02c2b1870d4d57902f78a581e5e3974b548ba90a7661b', 'mainnet'); // MAINNET
// OR: let wallet =  OriginalmyLibCrypto.createWalletFromSHA('44cfbe4215c8ef38a2e02c2b1870d4d57902f78a581e5e3974b548ba90a7661b', 'testnet'); // TESTNET
```

```text
Parameters
    Seed:  String of 12 words
    Network: mainnet or testnet
Return
    PublicKey as Wallet address
```

### Validate wallet

```javascript
let seed = 'lagosta diario mesmo dificil plastico grade escondido mergulho acolher remeter areia herdar';
let publicKey = '1JLFmGH679akX7uyUTcGzRoCVNjdYUagaA';
let result =  OriginalmyLibCrypto.validateWallet(seed, publicKey);  // MAINNET
// OR: let result =  OriginalmyLibCrypto.validateWallet(seed, publicKey, 'mainnet'); // MAINNET
// OR: let result =  OriginalmyLibCrypto.validateWallet(seed, publicKey, 'testnet'); // TESTNET
```

```text
Parameters
    Seed:  String of 12 words
    PublicKey = Wallet address
    Network: mainnet or testnet
Return
    Boolean
```

### Sign message

```javascript
const sha256 = require('sha256');  
let seed = sha256('lagosta diario mesmo dificil plastico grade escondido mergulho acolher remeter areia herdar'); // Seed in sha256  
let message = 'Message'  
let difficulty = 5  
let result =  OriginalmyLibCrypto.signMessage(seed,message,difficulty); // MAINNET
// OR: let result =  OriginalmyLibCrypto.signMessage(seed,message,difficulty, 'mainnet'); // MAINNET
// OR: let result =  OriginalmyLibCrypto.signMessage(seed,message,difficulty, 'testnet'); // TESTNET
```

```text
Parameters
    Seed:  String of 12 words
    Message = Any words
    Network: mainnet or testnet
Return
    block = String as [message];[wallet];[signature];nonce
```

### Verify message

```javascript
let publicKey = '1JLFmGH679akX7uyUTcGzRoCVNjdYUagaA'
let message = 'Message';
let signature = 'IDPyblrXKujgcw4fQXBLgEThNs18LWOkrVYwA8WOQrJUSGrT+mIuiL17aWm72GcMO4SsK24j/vZXl5mAj5tPQIc=';
let result =  OriginalmyLibCrypto.verifyMessage(publicKey, message, signature); // MAINNET
// OR: let result =  OriginalmyLibCrypto.verifyMessage(publicKey, message, signature, 'mainnet'); // MAINNET
// OR: let result =  OriginalmyLibCrypto.verifyMessage(publicKey, message, signature, 'testnet'); // TESTNET
```

```text
Parameters
    PublicKey = Wallet address
    Message = Any words
    Signature:  Encrypted text message
    Network: mainnet or testnet
Return
    Boolean
```

## Contributing

Feel free to make a fork and open an pull request or open an [issue](https://github.com/OriginalMy/originalmy-libcrypto/issues/new) for us.
