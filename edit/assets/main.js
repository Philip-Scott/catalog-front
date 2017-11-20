function createNewEvent() {
    var newEvent = new Object();
    newEvent.categoria = get("categoria").value;
    newEvent.nombre = get("nombre").value;
    newEvent.descripcion = get("descripcion").value;
    newEvent.auditorio = get("auditorio").value;
    newEvent.poster = get("poster").value;
    newEvent.estatus = 1;
    newEvent.fecha = get("fecha").value;
    newEvent.artista = get("artista").value;
    newEvent.precio = Number (get("precio").value);
    newEvent.capacidad = Number (get("capacidad").value);
    var jsonString= JSON.stringify(newEvent);

    fetch("http://localhost:8080/crearEvento", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: jsonString
    }).then(res => res.json()
    ).then(e => {
        //console.log (e);
    }).catch( err => {
        //console.log (err);
    })
}
