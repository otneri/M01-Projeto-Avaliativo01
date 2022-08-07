import {Dica} from './index.mjs'

export function criarCard () {
    let cards = document.getElementById('cards');
    let cardDica = document.getElementById('cardDica');
    let linkEditar = document.createElement('a');
    let linkExcluir = document.createElement('a');
    // cards.appendChild(cardDica);

    
    // function criaTitulo () {
    //     let txt = this.arrayDicas[i].titulo ;
    //     let titulo = document.createElement('h3');   
    //     titulo.textContent = txt;
    //     cardDica.appendChild(titulo);

    //     console.log(txt);
    //     return 
    // };
    // criaTitulo()

    // function criaSkill () {
    //     let txt = this.arrayDicas[i].skill;
    //     let skillTexto = document.createElement('p');   
    //     skillTexto.textContent = `Linguagem/Skill: ${txt}`;
    //     cardDica.appendChild(skillTexto);

    //     console.log(txt);
    //     return 
    // };
    // criaSkill();

    // function criaCategoria () {
    //     let txt = this.arrayDicas[i].categoria;
    //     let categoriaTexto = document.createElement('p');   
    //     categoriaTexto.textContent = `Categoria: ${txt}`;
    //     cardDica.appendChild(categoriaTexto);

    //     console.log(txt);
    //     return 
    // };
    // criaCategoria()

    // function criaDescricao () {
    //     let txt = this.arrayDicas[i].descricao;
    //     let categoriaTexto = document.createElement('p');   
    //     categoriaTexto.textContent = `${txt}`;
    //     cardDica.appendChild(categoriaTexto);

    //     console.log(txt);
    //     return 
    // };
    // criaDescricao()

    // function criaUrl () {
    //     let txt = this.arrayDicas[i].url;
    //     if (txt !== '') {
    //         // criarbotao com link para o video

    //     }
        
    //     return 
    // };  
    function criaBotoes () {
        
        let botaoEditar = document.createElement('img');   
        botaoEditar.src = `../assets/img/editar.png`;
        linkEditar.appendChild(botaoEditar);
        cardDica.appendChild(linkEditar);
        
        let botaoExcluir = document.createElement('img');   
        botaoExcluir.src = `./assets/img/deletar-lixeira.png`;
        linkExcluir.appendChild(botaoExcluir);
        cardDica.appendChild(linkExcluir);
        return 
    };
    criaBotoes()
    '<img src="./assets/img/editar.png" alt="edit"></img>';
    '<img src="./assets/img/deletar-lixeira.png" alt="delete">';
};

