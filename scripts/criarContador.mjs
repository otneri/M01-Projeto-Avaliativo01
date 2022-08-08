
export function criarContador (obj) {
    let total = 0
    let frontend = 0
    let backend = 0
    let fullstack = 0
    let softskill = 0

    obj.forEach(element => {
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
