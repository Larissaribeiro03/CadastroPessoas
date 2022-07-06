//document.getElementById('cadastro').addEventListener('submit', cadastrarPessoa);

function cadastrarPessoa(e){
    
    var nomePessoa = document.getElementById('name').value;
    var cpfPessoa = document.getElementById('cpf').value;

    pessoa= {
        nome : nomePessoa,
        cpf : cpfPessoa
    }

    if(localStorage.getItem('cadastroPessoa') === null){
        var pessoas= [];
        pessoas.push(pessoa);
        localStorage.setItem('cadastroPessoa',JSON.stringify(pessoas));
    } else {
        var pessoas = JSON.parse(localStorage.getItem('cadastroPessoa'));
        pessoas.push(pessoa);
        localStorage.setItem('cadastroPessoa', JSON.stringify(pessoas));
    }
    mostrarCadastrados();
    e.preventDefault();
}

function mostrarCadastrados(){
    var pessoas = JSON.parse(localStorage.getItem('cadastroPessoa'));
    var pessoasCadastradas = document.getElementById('resultados');

    pessoasCadastradas.innerHTML = '';

   for(var i = 0; i < pessoas.length; i++){
    var nome = pessoas[i].nome;
    var cpf = pessoas[i].cpf;

    pessoasCadastradas.innerHTML += '<tr><td>' + nome + '</td>' + '<td>' + cpf + '</td>' + '</tr>';
   }

}