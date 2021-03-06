function insert(array, index, item) {
    return array.splice(index, 0, item);
}

function CharCode(c) {
    //Transforma o código ASCII do caracter em código do alfabeto (0~25)
    let code = c.charCodeAt(0) - 65;
    if (code >= 0 && code < 26) { //ignora caractéres diferentes de letras maiúsculas
        return code;
    } else {
        return '';
    }
}
function Decode (c) {
    //Transforma o código alfabético (0~25) em código ASCII
    return String.fromCharCode(c + 65);
}

function Encrypt (text, key, decrypt = false) {
    text = text.split(''); //cria um array com o texto para procurar espaços
    let spaces = text.map((t, index) => {
        if (t == ' ') { return index }
    }).filter((t, index) => {
        if (t) { return t }
    }); //mapeia e constroi um novo array com o número e a posição de espaços

    let UpperAndLower = text.map((t, i) => {
        return t.charCodeAt(0) <= 90 ? true : false; //  MAIUSCULAS / minusculas
    })

    text = text.join(''); //recupera o texto original
    text = text.replace(/\s/g, ''); //remove os espaços
    text = text.toUpperCase();
    key = key.toUpperCase();

    let c, t, k;    //codigo (0~25) correspondente a criptografado / texto / key
    let kp = 0; //caracter da key
    let CODE = '';

    for (var i = 0; i < text.length; i++) {

        if (kp >= key.length) { kp = 0; }   //para repetir a key no texto

        t = CharCode(text[i]);
        k = CharCode(key[kp]);

        if (decrypt === true) {  //se for para descriptografar
            c = ((t - k) + 26) % 26;
        } else {
            c = (t + k) % 26;
        }
        CODE += Decode(c);
        kp++;
    }
    CODE = CODE.split('');
    spaces.forEach(s => {
        insert(CODE, s, ' '); //insere espaços nos pontos marcados
    });
    CODE = CODE.map((t, i) => {
        return UpperAndLower[i] == false ? t.toLowerCase() : t.toUpperCase(); //converte para maiusculas e minusculas
    })
    CODE = CODE.join('');
    return CODE;
}

module.exports = Encrypt;