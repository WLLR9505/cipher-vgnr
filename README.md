# cipher-vgnr
Vigenere Cipher in node

## Usage:

```js
const Encrypt = require('ciphervgnr');

let text = 'KESTREL IS UNDER ATTACK';
let key = 'WARDOG';

//Encrypt
let code = Encrypt(text, key);  //output: GEJWFKH IJ XBJAR RWHGYK

//Decrypt
Encrypt(code, key, true); //output: KESTREL IS UNDER ATTACK
```
