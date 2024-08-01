document.getElementById('controle-idade').addEventListener('click', function(){
   const dia = document.getElementById('data-dia').value;
   const mes = document.getElementById('data-mes').value;
   const ano = document.getElementById('data-ano').value;

   function exibirErro(campo, mensagem){
        const erro = document.getElementById(`erro-${campo}`);
        erro.style.display = 'block';
        erro.textContent = mensagem;
   }

   function esconderErro(){
        const erros = document.querySelectorAll('.erro__datas');
        erros.forEach(function(erro){
            erro.style.display = 'none';
            erro.textContent = '';
        })
   }

   function validaData(){
    esconderErro();
    let valido = true;
 
    if(dia === ''){
        exibirErro('dia', 'This field is required');
        valido = false;
    }else if (dia < 0 || dia >= 31){
        exibirErro('dia', 'Invalid day!');
        valido = false;
    } else{
        let dias = 31 - dia;
        document.getElementById('idade-dia').innerHTML = dias;
    }

    let meseHoje = new Date().getMonth() + 1;
    if(mes === ''){
        exibirErro('mes', 'This field is required');
        valido = false;
    }else if(mes < 0 || mes > 12){
        exibirErro('mes', 'Invalid month!');
        valido = false;
    }else{
        let meses = parseInt(meseHoje - mes);
        document.getElementById('idade-mes').innerHTML = meses;
    }

    const anoAtual = new Date().getFullYear();
    if(ano === ''){
        exibirErro('ano', 'This field is required');
        valido = false;
    }else if(ano <= 1900 || ano > anoAtual){
        exibirErro('ano', 'Invalid year!');
        valido = false;
    }else{
        let idade = anoAtual - ano;
        document.getElementById('idade-ano').innerHTML = idade;
    }

    return valido;
   }

   validaData();
})


