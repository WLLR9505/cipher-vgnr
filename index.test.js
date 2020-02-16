var Encrypt = require('./index.js');

function test() {
    let text = 'Kestrel Is Under Attack';
    let key = 'Wardog';

    console.log('criptografado: ' + Encrypt(text, key)); //output: Gejwfkh Ij Xbjar Rwhgyk
    console.log('descriptografado: ' + Encrypt(Encrypt(text, key), key, true)); //output: Kestrel Is Under Attack
}

test();