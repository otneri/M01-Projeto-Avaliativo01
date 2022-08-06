export function criarCard () {
    let cardDica = document.getElementById('cardDica');
    let id
    function criaTitulo () {
        let txt = document.getElementById('titulo').value;;
        let titulo = document.createElement('h3');   
        titulo.textContent = txt;
        cardDica.appendChild(titulo);

        console.log(txt);
        return 
    };
    criaTitulo()

    function criaSkill () {
        let txt = document.getElementById('skill').value;;
        let skillTexto = document.createElement('p');   
        skillTexto.textContent = `Linguagem/Skill: ${txt}`;
        cardDica.appendChild(skillTexto);

        console.log(txt);
        return 
    };
    criaSkill();

    function criaCategoria () {
        let txt = document.getElementById('categoria').value;;
        let categoriaTexto = document.createElement('p');   
        categoriaTexto.textContent = `Categoria: ${txt}`;
        cardDica.appendChild(categoriaTexto);

        console.log(txt);
        return 
    };
    criaCategoria()

    function criaDescricao () {
        let txt = document.getElementById('descricao').value;;
        let categoriaTexto = document.createElement('p');   
        categoriaTexto.textContent = `${txt}`;
        cardDica.appendChild(categoriaTexto);

        console.log(txt);
        return 
    };
    criaDescricao()

    function criaUrl () {
        let txt = document.getElementById('url').value;;
        if (txt !== '') {
            // criarbotao com link para o video

        }
        
        return 
    };  
    function criaBotoes () {
        
        let botaoEditar = document.createElement('img');   
        botaoEditar.src = `../assets/img/editar.png`;
        document.getElementById('editar').appendChild(botaoEditar);
        
        let botaoExcluir = document.createElement('img');   
        botaoExcluir.src = `./assets/img/deletar-lixeira.png`;
        document.getElementById('excluir').appendChild(botaoExcluir);
        
        return 
    };
    criaBotoes()
    '<img src="./assets/img/editar.png" alt="edit"></img>';
    '<img src="./assets/img/deletar-lixeira.png" alt="delete">';
};

