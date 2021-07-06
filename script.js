function padStart(){
    let digitoss = document.querySelector('#digitos').value;
    let caractere = document.querySelector('#caractere').value;
    let repeticoes = document.querySelector('#repeticoes').value;
    console.log(digitoss);
    let retornoR = digitoss.padStart(repeticoes, ''+caractere);
    console.log(retornoR);
    document.getElementById('retorno').innerHTML = retornoR;
}

function padEnd(){
    let digitoss = document.querySelector('#digitos').value;
    let caractere = document.querySelector('#caractere').value;
    let repeticoes = document.querySelector('#repeticoes').value;
    console.log(digitoss);
    let retornoR = digitoss.padEnd(repeticoes, ''+caractere);
    console.log(retornoR);
    document.getElementById('retorno').innerHTML = retornoR;
}