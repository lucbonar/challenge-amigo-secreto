let amigos = [];

function validarEntrada() {
    return (document.getElementById('amigo').value != '') ? true : false;
}

function limpiarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
}

function actualizarLista(listaAmigos){
    //obtengo el elemento lista
    let lista = document.getElementById('listaAmigos');
    //Limpio la lista existente
    limpiarLista();
    //Recorro y agrego elementos en la lista
    listaAmigos.forEach(amigo => {
        lista.innerHTML+=`<li>${amigo}</li>`;
    });
    return;
}

function agregarAmigo() {
    if (validarEntrada()) {
        //agregando nombres a la lista
        amigos.push(document.getElementById('amigo').value);
        //actualizar lista
        actualizarLista(amigos);
        //limpiando el input
        document.getElementById('amigo').value = '';
    } else {
        alert('Por favor, inserte un nombre.')
    }
    return;
}

function sortearAmigo() {
    limpiarLista();
    let tamañoLista = amigos.length;
    if (tamañoLista != 0) {
        
        return
    }
    
    return;
}

