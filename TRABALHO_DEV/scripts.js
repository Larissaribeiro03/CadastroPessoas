


function cadastrarPessoa(e){
    var nomePessoa = document.getElementById('name').value;
    var cpfPessoa = document.getElementById('cpf').value;
    var valida = true;
    

    pessoa= {
        nome : nomePessoa,
        cpf : cpfPessoa
    }

    if(localStorage.getItem('cadastroPessoa') === null){
        var pessoas= [];     
        validarCpf();
        alert("Entrou no IF");
        if(valida){
            pessoas.push(pessoa);
            localStorage.setItem('cadastroPessoa',JSON.stringify(pessoas));
        }
    } else {
        var pessoas = JSON.parse(localStorage.getItem('cadastroPessoa'));
        validarCpf();
        alert("Entrou no ELSE");
        if(valida){
            pessoas.push(pessoa);
            localStorage.setItem('cadastroPessoa',JSON.stringify(pessoas));
        }
        }
    mostrarCadastrados();
    
    e.preventDefault();
}

function deletarCadastro(cpf) {
    var pessoas = JSON.parse(localStorage.getItem('cadastroPessoa'));

    for(var i =0; i < pessoas.length; i++) {
        if(pessoas[i].cpf == cpf){
            pessoas.splice(i, 1);
        }
        localStorage.setItem('cadastroPessoa', JSON.stringify(pessoas));
    }

    mostrarCadastrados();
}

function mostrarCadastrados(){
    var pessoas = JSON.parse(localStorage.getItem('cadastroPessoa'));
    var pessoasCadastradas = document.getElementById('resultados');

    pessoasCadastradas.innerHTML = '';

   for(var i = 0; i < pessoas.length; i++){
    var nome = pessoas[i].nome;
    var cpf = pessoas[i].cpf;

    pessoasCadastradas.innerHTML += '<tr><td>' + nome + '</td>' + '<td>' + cpf + '</td>' +  '<td><button class="btn btn-danger" onclick="deletarCadastro(\''+cpf+'\')">Delete</button><td/>' + '</tr>';
   }

}

function retiraLetras(cpf) {
    const textoAtual = cpf.value;

    const textoAjustado = textoAtual.replace(/[^\d]+/g, ''); 
    
    cpf.value = textoAjustado;
}

function mascaraCpf(cpf){
    
    const textoAtual = cpf.value;
    let textoAjustado;
    const parte1 = textoAtual.slice(0,3);
    const parte2 = textoAtual.slice(3,6);
    const parte3 = textoAtual.slice(6,9);
    const parte4 = textoAtual.slice(9,11);
    textoAjustado = `${parte1}.${parte2}.${parte3}-${parte4}`        
    
    if (cpf.value != "") 
        cpf.value = textoAjustado;
}

function validarCpf(cpf) {
    alert(cpf);
    if (cpf.length != 11 || cpf == "undefined") {
        alert("Entrou no IF do validaCPF");
         return valida = false;
    }
    
}
