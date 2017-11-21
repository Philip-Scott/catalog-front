function editorAction () {
    if (id != undefined) {
        console.log ("edit");
        editEvent (id);
    } else {
        console.log ("create");
        createNewEvent ();
    }
}

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

    fetch("http://ec2-34-215-220-146.us-west-2.compute.amazonaws.com:8080/crearEvento", {
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

    get ("three").innerHTML = "<h1>Event Created</h1>"
}

function editEvent(id) {
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
    newEvent._id = id;
    var jsonString= JSON.stringify(newEvent);

    fetch("http://ec2-34-215-220-146.us-west-2.compute.amazonaws.com:8080/editarEvento", {
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

    get ("three").innerHTML = "<h1>Event Edited</h1>"
}
