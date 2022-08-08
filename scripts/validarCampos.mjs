export function validarCampos (dica) {
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