function somar(){

    let txtn1 = document.getElementById('txt1')//recebendo o valor do input
    let txtn2 = document.getElementById('txt2')//recebendo o valor do input

    let resSoma = document.getElementById('resSoma')//recebendo o valor da div

    let n1 = Number(txtn1.value)//transformando o valor de string para number
    let n2 = Number(txtn2.value)//transformando o valor de string para number
    let s = n1 + n2
    resSoma.innerText = s
}

function multiplicar(){
    let mxmt1 = document.getElementById('mxm1')
    let mxmt2 = document.getElementById('mxm2')

    let resMult = document.getElementById('resMult')

    let n3 = Number(mxmt1.value)
    let n4 = Number(mxmt2.value)
    let m = n3 * n4
    resMult.innerHTML = m
}