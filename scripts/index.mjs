// import {criarCard} from './criarCards.mjs'
const botaosalvar = document.getElementById('salvar');
const botaopreencher = document.getElementById('preencher');
const botaolimpar = document.getElementById('limpar');
const botaoPesquisar = document.getElementById('pesquisarbotao');

// Seção do Form



//classe
export class Dica {
    constructor (){
        this.id = 1  
        this.arrayDicas = [] ;
        this.editId = null
    }

    salvar () {
        
        let novaDica = this.pegarDados();
        
        // chama os cards :
        if (this.validarCampos(novaDica) === true) {
            if (this.editId == null) {
            alert ('dica Salva!');

            this.adicionarDica(novaDica);
            
            console.log(this.arrayDicas);
    
            this.criarContador();

            }else {
                this.atualizar(this.editId)
            };

            this.listarDicas();
            this.cancelar();
        };

                
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
        let cards = document.getElementById('cards') ;
        
        cards.innerText = '';

        for (let i = 0; i < this.arrayDicas.length; i ++) {
            

            let cardDica = document.createElement('li');
            
            cards.appendChild(cardDica);
            
            // criarCard();
            
            //PUXA TITULO
            let txt1 = this.arrayDicas[i].titulo;
            let titulo = document.createElement('h3');   
            titulo.textContent = txt1;
            cardDica.appendChild(titulo);


            //PUXA SKILL
            let txt2 = this.arrayDicas[i].skill;
            let skillTexto = document.createElement('p');   
            skillTexto.textContent = `Linguagem/Skill: ${txt2}`;
            cardDica.appendChild(skillTexto);
            
            
            //PUXA CATEGORIA
            let txt4 = this.arrayDicas[i].categoria;
            let categoriaTexto = document.createElement('p');   
            categoriaTexto.textContent = `Categoria: ${txt4}`;
            cardDica.appendChild(categoriaTexto);


            //PUXA DESCRIÇÃO
            let txt3 = this.arrayDicas[i].descricao;
            let descricaoTexto = document.createElement('p');   
            descricaoTexto.textContent = `${txt3}`;
            cardDica.appendChild(descricaoTexto);

            //CRIAR BOTOES

            let botaoEditar = document.createElement('button');   
            botaoEditar.innerHTML = (' <img src= "../assets/img/editar.png"></img>') ;
            botaoEditar.onclick  = () => this.prepararEdicao(JSON.stringify(this.arrayDicas[i]))
        
            let botaoExcluir = document.createElement('button');   
            botaoExcluir.innerHTML = ('<img src = "./assets/img/deletar-lixeira.png" ></img>');
            botaoExcluir.onclick  = () => this.deletar(this.arrayDicas[i].id)

            
            cardDica.appendChild(botaoEditar);
            cardDica.appendChild(botaoExcluir);

            //PUXA URL
            // let txt = this.arrayDicas[i].url;
            // if (txt !== '') {
            // criarbotao com link para o video
            console.log(this.arrayDicas);
        }
            

            
    };      
    deletar (id) {

        if(confirm('DELETAR a Dica '+ id +' ?')) {
            let cards = document.getElementById('cards') ;

            for (let i = 0; i < this.arrayDicas.length; i ++) {
                if(this.arrayDicas[i].id === id) {
                    this.arrayDicas.splice(i,1);
                    cards.removeChild(cards.children[i]);
                }
            };
            console.log(this.arrayDicas)
        }
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
        this.arrayDicas.forEach(element => {
            if (element.titulo === termo) {
                newArray.push(element);
            }
        })
        cards.innerText = newArray;
        
    }

    filtrar () {
        

        
    }

    criarContador () {
        let total = 0
        let frontend = 0
        let backend = 0
        let fullstack = 0
        let softskill = 0

        this.arrayDicas.forEach(element => {
            if (element.categoria == 'frontend'){
                frontend+=1;
            }
            else if (element.categoria == 'backend'){
                backend+=1;
            }
            else if (element.categoria == 'fullstack'){
                fullstack+=1;
            }
            else if (element.categoria == 'comportamental'){
                softskill+=1;
            }
            total+=1;

            
        }) 
        document.getElementById('total').innerText = total;
        document.getElementById('front').innerText = frontend;
        document.getElementById('back').innerText = backend ;
        document.getElementById('full').innerText = fullstack ;
        document.getElementById('soft').innerText = softskill ;

    }
  
};

let dica = new Dica();




// PREENCHIMENTO AUTOMÁTICO
function prencher() {
    document.getElementById("titulo").value = "GRID vs Flex-box";
    document.getElementById("skill").value = "CSS";
    document.getElementById("categoria").value = "frontend";
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

botaoPesquisar.addEventListener ('click', function (e) {
    e.preventDefault();

    dica.pesquisar();
    dica.filtrar();
    
});