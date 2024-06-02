function isPalindrome(str) {
    let converteLetrasParaMinusculo = str.toLowerCase();
    let converteLetrasSemEspacos = converteLetrasParaMinusculo.replaceAll(' ', '')

    for (let i = 0; i < converteLetrasSemEspacos.length / 2; i++) {
        if (converteLetrasSemEspacos[i] !== converteLetrasSemEspacos[converteLetrasSemEspacos.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
isPalindrome("A SACaDa da cASa")


function arrayMaxMin(arr) {
    let menorNumero = 0;
    let maiorNumero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (menorNumero === 0) {
            menorNumero = arr[i]
            console.log(arr[i])
        } else if (arr[i] < menorNumero) {
            menorNumero = arr[i]
        } if (arr[i] > maiorNumero) {
            maiorNumero = arr[i]
        }
    }
    return [menorNumero, maiorNumero];
}
arrayMaxMin([2, 30, 33, 11, 51, 56])
