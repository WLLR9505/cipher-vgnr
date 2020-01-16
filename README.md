# cipher-vgnr
Vigenere Cipher in node

## Usage:

```js
const Encrypt = require('./index.js');

let text = 'KESTREL IS UNDER atack';
let key = 'WARDOG';

//Encrypt
let code = Encrypt(text, key);  //output: GEJWFKHIJXBJARRWHGYK

//Decrypt
Encrypt(code, key, true); //output: KESTRELISUNDERATTACK
```
