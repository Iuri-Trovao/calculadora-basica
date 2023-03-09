alert('seja bem vindo!!!')

function calcular() {
    let input1 = document.getElementById('input1')
    let input2 = document.getElementById('input2')
    let n1 = Number(input1.value)
    let n2 = Number(input2.value)
    let resposta = document.getElementById('res') 
    let selecao = document.getElementById('select').value
    let soma = n1 + n2
    let menos = n1 - n2
    let multi = n1 * n2
    let dividir = n1 / n2

    if(selecao === 'somar'){
        resposta.innerHTML = `a resposta é ${soma}`
    }else if(selecao === 'menos'){
        resposta.innerHTML = `a resposta é ${menos}`
    }else if(selecao === 'multiplicar'){
        resposta.innerHTML = `a resposta é ${multi}`
    }else if(selecao === 'dividir'){
        resposta.innerHTML = `a resposta é ${dividir}`
    }
}

let button = document.getElementById('but')
button.onclick = calcular()