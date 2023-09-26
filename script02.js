let conta = function (operador, acumulador, ...numeros){
    for(let numero of numeros){
    if (operador == '+') acumulador += numero
    if (operador == '-') acumulador -= numero
    if (operador == '/') acumulador /= numero
    if (operador == '*') acumulador *= numero
    }
    console.log(acumulador)
}
conta('*', 10, 5,6,7,8)