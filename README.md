# cipher-vgnr
Vigenere Cipher in node

## Usage:

```js
const Encrypt = require('ciphervgnr');

let text = 'Kestrel Is Under Attack';
let key = 'Wardog';

//Encrypt
let code = Encrypt(text, key);  //output: Gejwfkh Ij Xbjar Rwhgyk

//Decrypt
Encrypt(code, key, true); //output: Kestrel Is Under Attack
```
