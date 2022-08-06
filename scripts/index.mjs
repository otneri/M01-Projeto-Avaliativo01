import {criarCard} from './criarCards.mjs'
const botaosalvar = document.getElementById('salvar');
const botaopreencher = document.getElementById('preencher');
const botaolimpar = document.getElementById('limpar');

// Seção do Form



//classe
class Dica {
    constructor (){
        this.id = 1  
        this.arrayDicas = [] ;

    }

    salvar () {
        
        let novaDica = this.pegarDados();
        
        // chama os cards :
        if (this.validarCampos(novaDica) === true) {
            alert ('dica Salva!');

            this.adicionarDica(novaDica);
            
            this.listarDicas();

            
            console.log(this.arrayDicas.length);
        
            // this.cancelar();

            this.contadorCategorizado();
        }

                
    };

    cancelar () {
        document.getElementById('titulo').value='';
        document.getElementById('skill').value ='';
        document.getElementById('descricao').value ='';
        document.getElementById('url').value = '';
    }

    
    validarCampos (dica) {
        let msg = ''

        if (dica.titulo === '') {
            msg += 'Preencha o campo titulo!\n';
        };
        if (dica.skill === '') {
            msg += 'Preencha o campo skill!\n';
        };
        if (dica.descricao === '') {
            msg += 'Preencha o campo descricao!\n';
        };
        if (msg !== '') {
            alert (msg);
            return false;
        }
        return true;

    }


    pegarDados() {
        let novadica = {}

        novadica.id = this.id
        novadica.titulo = document.getElementById('titulo').value;
        novadica.skill = document.getElementById('skill').value;
        novadica.categoria = document.getElementById('categoria').value;
        novadica.descricao = document.getElementById('descricao').value;
        novadica.url = document.getElementById('url').value;


        return novadica;
    }

    adicionarDica (obj) {
        this.arrayDicas.push(obj) ;
        this.id++;
    }

    listarDicas () {
        // criarCard()
        let cardDica = document.getElementById('cardDica') ;
        criarCard()
        // for (let i = 0; i < this.arrayDicas.length; i ++) {
            
        //     let categoriaTexto = document.createElement('p');   
        //     categoriaTexto.textContent = this.pegarDados(titulo) ;
        //     cardDica.appendChild(categoriaTexto);
    

        // };
    };      

    
    contadorCategorizado ()  {
        let ul = document.getElementById('contacategoria');
        let lista = document.createElement('li');
        let txt = 'TOTAL';
        let contadorDicas = txt + this.arrayDicas.length;
        lista.innerText = contadorDicas;
        ul.appendChild(lista);
        
        
    };

  
};

let dica = new Dica();




// PREENCHIMENTO AUTOMÁTICO
function prencher() {
    document.getElementById("titulo").value = "GRID vs Flex-box";
    document.getElementById("skill").value = "CSS";
    document.getElementById("categoria").value = "FrontEnd";
    document.getElementById("descricao").value =
      "Se você está usando mais de um container flex para organizar elementos em um layout, provavelmente um deles deveria ser grid. Se você precisa aplicar diversas propriedades nos elementos filhos para ter maior controle do layout, você provavelmente deveria estar fazendo isso com grid.";
    document.getElementById("youtube").value = "https://www.youtube.com/watch?v=3elGSZSWTbM&ab_channel=KevinPowell" ;
  }



botaopreencher.addEventListener ('click', function (e) {
    e.preventDefault();
    prencher();
});

// 

// EVENTO DE CLICK DO BOTÃO DE SALVAR DICA
botaosalvar.addEventListener ('click', function (e) {
    e.preventDefault();
    dica.salvar();
});