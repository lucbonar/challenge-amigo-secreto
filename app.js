// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];

function validarEntrada() {
    return (document.getElementById('amigo').value === '') ? true : false;
}

function agregarAmigo() {
    if (validarEntrada()) {
        listaDeAmigos.push(document.getElementById('amigo').value);
        console.log(listaDeAmigos);
        document.getElementById('amigo').value = ''
    } else {
        alert('Por favor, inserte un nombre.')
    }
    return;
}

function sortearAmigo() {
    return;
}