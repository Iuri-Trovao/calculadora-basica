const Button = document.getElementById('but')
Button.addEventListener('click', ()=>{
    const input1 = document.getElementById('input1')
    const input2 = document.getElementById('input2')
    const valor1 = Number(input1.value) 
    const valor2 = Number(input2.value) 
    const Selecao = document.getElementById('select').value
    const res = document.getElementById('res')
    if(Selecao === 'somar'){
        res.innerHTML = `${valor1} + ${valor2} = ${valor1 + valor2}`;
    }else if(Selecao === 'menos'){
        res.innerHTML = `${valor1} + ${valor2} = ${valor1 - valor2}`;
    }else if(Selecao === 'multiplicar'){
        res.innerHTML = `${valor1} + ${valor2} = ${valor1 * valor2}`;
    }else if(Selecao === 'dividir'){
        res.innerHTML = `${valor1} + ${valor2} = ${valor1 / valor2}`;
    }
})