var Encrypt = require('./index.js');

function test() {
    let text = 'KESTREL IS UNDER atack';
    let key = 'WARDOG';

    console.log('criptografado: ' + Encrypt(text, key)); //output: GEJWFKHIJXBJARRWHGYK
    console.log('descriptografado: ' + Encrypt(Encrypt(text, key), key, true)); //output: KESTRELISUNDERATTACK
}

test();