var Encrypt = require('./index.js');

function test() {
    let text = 'KESTREL IS UNDER ATTACK';
    let key = 'WARDOG';

    console.log('criptografado: ' + Encrypt(text, key)); //output: GEJWFKH IJ XBJAR RWHGYK
    console.log('descriptografado: ' + Encrypt(Encrypt(text, key), key, true)); //output: KESTREL IS UNDER ATTACK
}

test();