import {prencher} from './prencher.mjs'
import {cancelar} from './cancelar.mjs'
import {pegarDados} from './pegarDados.mjs'
import {criarContador} from './criarContador.mjs'
import {validarCampos} from './validarCampos.mjs'


// Seção do Form

const botaosalvar = document.getElementById('salvar');
const botaopreencher = document.getElementById('preencher');
const botaolimparPesquisa = document.getElementById('cancelar');
const botaoPesquisar = document.getElementById('pesquisarbotao');
//classe
class Dica {
    constructor (){
        this.addLocalstorage = JSON.parse(localStorage.getItem('dica'))
        this.id = 1  
        this.arrayLS = localStorage.getItem('dica') !== null ? this.addLocalstorage : [];
        this.editId = null

        this.arrayDicasLocalStorage = []
    }

    salvar () {
        
        let novaDica = pegarDados(this.id);
        
        // chama os cards :
        if (validarCampos(novaDica) === true) {
            if (this.editId == null) {
            alert ('dica Salva!');

            this.adicionarDica(novaDica);
            
            console.log(this.arrayLS);
    
            criarContador(this.arrayLS);

            }else {
                this.atualizar(this.editId)
            };

            this.listarDicas(this.arrayLS);
            cancelar();

            this.updateLocalstorage()
        };

                
    };

    adicionarDica (obj) {
        this.arrayLS.push(obj) ;
        this.id++;
    }

    listarDicas (elemento) {
        // criarCard()
        let cards = document.getElementById('cards') ;
        
        cards.innerText = '';

        for (let i = 0; i < elemento.length; i ++) {
            

            let cardDica = document.createElement('li');
            
            cards.appendChild(cardDica);
            
            // criarCard();
            
            //PUXA TITULO
            let txt1 = elemento[i].titulo;
            let titulo = document.createElement('h3');   
            titulo.textContent = txt1;
            cardDica.appendChild(titulo);


            //PUXA SKILL
            let txt2 = elemento[i].skill;
            let skillTexto = document.createElement('p');   
            skillTexto.textContent = `Linguagem/Skill: ${txt2}`;
            cardDica.appendChild(skillTexto);
            
            
            //PUXA CATEGORIA
            let txt4 = elemento[i].categoria;
            let categoriaTexto = document.createElement('p');   
            categoriaTexto.textContent = `Categoria: ${txt4}`;
            cardDica.appendChild(categoriaTexto);


            //PUXA DESCRIÇÃO
            let txt3 = elemento[i].descricao;
            let descricaoTexto = document.createElement('p');   
            descricaoTexto.textContent = `${txt3}`;
            cardDica.appendChild(descricaoTexto);

            //CRIAR BOTOES

            let botaoEditar = document.createElement('button');   
            botaoEditar.innerHTML = (' <img src= "../assets/img/editar.png"></img>') ;
            botaoEditar.onclick  = () => this.prepararEdicao(JSON.stringify(elemento[i].id))
        
            let botaoExcluir = document.createElement('button');   
            botaoExcluir.innerHTML = ('<img src = "./assets/img/deletar-lixeira.png" ></img>');
            botaoExcluir.onclick  = () => this.deletar(elemento[i].id)

            
            cardDica.appendChild(botaoEditar);
            cardDica.appendChild(botaoExcluir);
            
            //PUXA URL
            let txt = elemento[i].url;
            if (txt !== '') {
                let a = document.createElement('a');
                a.innerHTML = `<a href="${txt}"><img src = "./assets/img/youtube.png" ></img></a>`   
                cardDica.appendChild(a);
            }
        }

        console.log(elemento);
            
    };      
    deletar (id) {

        if(confirm('DELETAR a Dica '+ id +' ?')) {
            let cards = document.getElementById('cards') ;

            for (let i = 0; i < this.arrayLS.length; i ++) {
                if(this.arrayLS[i].id === id) {
                    this.arrayLS.splice(i,1);
                    cards.removeChild(cards.children[i]);
                }
            };
            
            console.log(this.arrayLS)
        }
        this.updateLocalstorage()
    }

    atualizar (id) {
        alert(id)
    }

    prepararEdicao (dados) {

        alert(dados.id);

        this.editId = dados.id

        document.getElementById('titulo').value = dados.titulo;
        document.getElementById('skill').value = dados.skill;
        document.getElementById('categoria').value = dados.categoria;
        document.getElementById('descricao').value = dados.descricao;
        document.getElementById('url').value = dados.url;


        document.getElementById('salvar').innerText = 'Atualizar';
    }



    pesquisar () {
        let cards = document.getElementById('cards') ;
        cards.innerText = '';

        let termo = document.getElementById('pesquisar').value;
        let newArray = []
        this.arrayLS.forEach(element => {
            if (element.titulo === termo) {
                newArray.push(element);
            }
        })

        this.listarDicas(newArray); 
        console.log(newArray);
        
    }

    cancelarPesquisa () {
        this.listarDicas(this.arrayLS);
    }

    
  
   

    updateLocalstorage = () => {
        localStorage.setItem('dica',JSON.stringify(this.arrayLS))
    }
};

let dica = new Dica();




// PREENCHIMENTO AUTOMÁTICO




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
// EVENTO DE CLICK DO BOTÃO DE PESQUISAR
botaoPesquisar.addEventListener ('click', function (e) {
    e.preventDefault();

    dica.pesquisar();
    
});

botaolimparPesquisa.addEventListener ('click', function (e) {
    e.preventDefault();
    dica.cancelarPesquisa();

    
});