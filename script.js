/* function funcao({nome, sobrenome, idade}){
    console.log(nome,sobrenome,idade)
}
let obj = {nome: 'Carlos', sobrenome: 'Araújo', idade: '20'}
funcao(obj)
 */

//rest operator
function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
    if (operador == '+') acumulador += numero
    if (operador == '-') acumulador -= numero
    if (operador == '/') acumulador /= numero
    if (operador == '*') acumulador *= numero
    }
    console.log(acumulador)
}
conta('*', 10, 5,6,7,8)

//desestruturação
function funcao([nome, sobrenome, idade]){
    console.log(nome,sobrenome,idade)
}
funcao(['Carlos', 'Araújo', 20])

 