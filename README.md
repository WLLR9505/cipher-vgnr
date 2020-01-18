# cipher-vgnr
Vigenere Cipher in node

## Usage:

```js
const Encrypt = require('ciphervgnr');

let text = 'KESTREL IS UNDER attack';
let key = 'WARDOG';

//Encrypt
let code = Encrypt(text, key);  //output: GEJWFKHIJXBJARRWHGYK

//Decrypt
Encrypt(code, key, true); //output: KESTRELISUNDERATTACK
```
