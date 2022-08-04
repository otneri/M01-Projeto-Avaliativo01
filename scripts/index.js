const botaosalvar = document.getElementById('salvar');
const botaolimpar = document.getElementById('limpar');

// Seção do Form


let skill = document.getElementById('skill').value;
let titulo = document.getElementById('titulo').value 
let categoria = document.getElementById('categoria').value;
let descricao = document.getElementById('descricao').value;
let url = document.getElementById('url').value;

//classe
class Dica {
    constructor (){
        this.arrayDicas = [] ;
        
    }
    salvar () {
        
        let novaDica = this.pegarDados();
        console.log(novaDica);
        
        if (this.validarCampos(novaDica)) {
            alert ('dica Salva!');
        }
       ;

        
    };

    pegarDados() {
        let novadica = {}

        novadica.titulo = titulo;
        novadica.skill = skill;
        novadica.categoria = categoria;
        novadica.descricao = descricao;
        novadica.url = url;

        return novadica;
    }

    validarCampos () {

        let msg = ''

        if (titulo === '') {
            msg += 'Preencha o campo titulo! ';
        };
        if (skill === '') {
            msg += 'Preencha o campo skill! ';
        };
        if (descricao === '') {
            msg += 'Preencha o campo descricao! ';
        };
        if (msg != '') {
            alert (msg);
            return false;
        }
        return true;

    }
  
};

let dica = new Dica();



// EVENTO DE CLICK DO BOTÃO DE SALVAR DICA
botaosalvar.addEventListener ('click', function (e) {
    e.preventDefault();
    dica.salvar();
});