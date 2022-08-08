export function pegarDados(elemento) {
    let novadica = {}

    novadica.id = elemento.id
    novadica.titulo = document.getElementById('titulo').value;
    novadica.skill = document.getElementById('skill').value;
    novadica.categoria = document.getElementById('categoria').value;
    novadica.descricao = document.getElementById('descricao').value;
    novadica.url = document.getElementById('url').value;


    return novadica;
}