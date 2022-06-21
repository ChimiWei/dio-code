const comparar = (num1, num2) => {
    if(!num1 || !num2) return "defina dois números."

    let equal = num1 === num2 ? " são iguais" : " não são iguais"
    let sum = num1 + num2;
    let check10 = sum > 10 ? ", que é maior que 10" : ", que é menor que 10";
    let check20 = sum > 20 ? " e maior que 20." : " e menor que 20.";

    return `os números ${num1} e ${num2}${equal}. A soma é ${sum}${check10}${check20}`
}

console.log(comparar())