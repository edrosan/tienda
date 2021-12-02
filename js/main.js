var contador = 0;
var nombre;
var imagen;
var descripcion;
var cantidad;
var id;
var inicio = 1;
var productos = [];



function iniciar(){
    $.ajax({
        url: "php/logica.php",
        type: "POST",
        async: true,
        data: {opcion: inicio},
        success: function(response){

            if(response!="error"){
                var data = $.parseJSON(response);
                var indice = 0;

                while(data[indice] != null){
                    console.log(data[indice].id)
                    id = data[indice].id;
                    nombre = data[indice].nombre;
                    imagen = data[indice].imagen;
                    descripcion = data[indice].descripcion;
                    cantidad = data[indice].cantidad;
                    agregarTarjeta(id,nombre,imagen,descripcion,cantidad);

                    indice++;
                }

                // agregarTarjeta(nombre,imagen,descripcion);
            }else{
                console.log(response);
            }
        }
    });
}


function agregarTarjeta(idBase,nombreBase, imagenBase, descripcionBase, cantidadBase ){
    var textoBoton = "Agregar al carrito";
    //se crea la tarjeta
    var padre = document.getElementById("cajaTarjetas");
    var tarjeta = document.createElement("div");
    padre.appendChild(tarjeta);
    tarjeta.setAttribute("class", "tarjeta");
    tarjeta.setAttribute("id", "tarjeta" + contador);

    //se agregan los campos a la tarjeta
    padre = document.getElementById("tarjeta" + contador)

    var nombreTarjeta = document.createElement("p");
    var texto = document.createTextNode(nombreBase);
    nombreTarjeta.setAttribute("id", "nombreTarjeta" + contador);
    padre.appendChild(nombreTarjeta);
    nombreTarjeta.appendChild(texto);

    var imagenTarjeta = document.createElement("img");
    imagenTarjeta.setAttribute("id", "imagen" + contador);
    imagenTarjeta.setAttribute("class", "imagenTarjeta");
    padre.appendChild(imagenTarjeta);
    document.getElementById("imagen" + contador).src = imagenBase;


    var descripcionTarjeta = document.createElement("p");
    texto = document.createTextNode(descripcionBase);
    descripcionTarjeta.setAttribute("id", "descripcionTarjeta" + contador);
    descripcionTarjeta.appendChild(texto);
    padre.appendChild(descripcionTarjeta);

    var idTarjeta = document.createElement("p");
    texto = document.createTextNode(idBase);
    idTarjeta.appendChild(texto);
    idTarjeta.setAttribute("class", "idTarjeta");
    idTarjeta.setAttribute("id", "idTarjeta" + contador);
    padre.appendChild(idTarjeta);

    var cantidadTarjeta = document.createElement("p");
    texto = document.createTextNode(cantidadBase);
    cantidadTarjeta.appendChild(texto);
    cantidadTarjeta.setAttribute("class", "cantidadTarjeta");
    cantidadTarjeta.setAttribute("id", "cantidadTarjeta" + contador);
    padre.appendChild(cantidadTarjeta);

    var botonTarjeta = document.createElement("button");
    botonTarjeta.setAttribute("class", "botonTarjeta");
    botonTarjeta.setAttribute("onclick", "agregarCarrito(this)");
    botonTarjeta.setAttribute("id", "botonTarjeta" + contador);

    padre.appendChild(botonTarjeta);

    var spanBoton = document.createElement("span");
    texto = document.createTextNode(textoBoton);
    spanBoton.appendChild(texto);
    botonTarjeta.appendChild(spanBoton);

    contador++;


}

function abrirCarrito(){
    simplificar();
    var indice = 0;
    document.getElementById("ventanaCarrito").style.visibility = 'visible';
    document.getElementById("carrito").style.visibility = 'hidden';

    while(productos[indice]!=null){
        agregarProductosCarritos(productos[indice],productos[indice+1],productos[indice+2])
        indice+=3;
    }


}

function agregarCarrito(objeto){
    var idBoton = objeto.id;
    var idTarjeta = document.getElementById(idBoton).parentNode;
    listaHijos = idTarjeta.childNodes;
    var cantidadProducto = document.getElementById(listaHijos[4].id).innerHTML;
    if(cantidadProducto > 0){
        var id = document.getElementById(listaHijos[3].id).innerHTML;
        var nombre = document.getElementById(listaHijos[0].id).innerHTML;
        cantidadProducto--;
        document.getElementById(listaHijos[4].id).innerHTML = cantidadProducto;
        productos.push(id,nombre,'1');
        Swal.fire({
            icon: 'success',
            title: "Agregado"
        });
        // alert("Producto Agregado");
    }else{
        Swal.fire({
            icon: 'error',
            title: "Producto no disponible"
        });
        // alert("Producto no disponible");
    }
}

var contador2 = 0;
function agregarProductosCarritos(id, producto, cantidad){

    var padre = document.getElementById("cuerpoCarrito");
    var idObjeto = document.createElement("p");
    var texto = document.createTextNode(id);
    idObjeto.appendChild(texto);
    idObjeto.setAttribute("id", ""+contador2);
    contador2++;
    padre.appendChild(idObjeto);

    var nombreObjeto = document.createElement("p");
    var texto = document.createTextNode(producto);
    nombreObjeto.appendChild(texto);
    nombreObjeto.setAttribute("id", ""+contador2);
    contador2++;
    padre.appendChild(nombreObjeto);

    var cantidadObjeto = document.createElement("p");
    var texto = document.createTextNode(cantidad);
    cantidadObjeto.appendChild(texto);
    cantidadObjeto.setAttribute("id", ""+contador2);
    contador2++;
    padre.appendChild(cantidadObjeto);


}

function cerrarVentana(objeto){
    var objetoPadre = document.getElementById(objeto.id).parentNode;
    var listaHijos = objetoPadre.childNodes;
    objetoPadre = listaHijos[3];
    listaHijos = objetoPadre.childNodes;
    var contador3 = 7;//checar
    while(listaHijos[contador3]!=null){
        objetoPadre.removeChild(listaHijos[contador3]);
    }
    document.getElementById("ventanaCarrito").style.visibility = 'hidden';
    document.getElementById("carrito").style.visibility = 'visible';
}

function limpiarCarrito(){
    while(productos.length>0){
        productos.pop();
    }
    var objetoPadre = document.getElementById("botonCerrar1").parentNode;
    var listaHijos = objetoPadre.childNodes;
    objetoPadre = listaHijos[3];
    listaHijos = objetoPadre.childNodes;

    var contador3 = 7;
    while(listaHijos[contador3]!=null){
        objetoPadre.removeChild(listaHijos[contador3]);
    }


    mensajeLimpiar();


}

function mensajeLimpiar(){
    Swal.fire({
        icon: 'success',
        title: "Carrito limpiado",
    }).then(function(){
        location.reload();
    });

}
function simplificar(){
    var contador4 = 0;

    while(productos[contador4] !=null){
        var contador5 = contador4+3;

        while(productos[contador5]!=null){

            if(productos[contador4]==productos[contador5]){
                productos[contador4+2]++;
                productos.splice(contador5,3);
            }
            contador5+=3;
        }
        contador4 += 3;
    }
}


function peticionComprar(){
    var contador6 = 0;
    var inicio = 2;
    var respuesta = "";
    if(productos[contador6] == null){
        Swal.fire({
            icon: 'warning',
            title: "Carrito vacío"
        });
    }
    while(productos[contador6] != null){
        var id = productos[contador6];
        var cantidad = productos[contador6+2];
        $.ajax({
            url: "php/logica.php",
            type: "POST",
            async: true,
            data: { opcion: inicio, id: id, cantidad: cantidad},
            success: function(response){
                    respuesta = response;
                    console.log(response);
                    if(respuesta == "ok"){
                        Swal.fire({
                            icon: 'success',
                            title: "Productos comprados"
                        });
                    }else{
                        Swal.fire({
                            icon: 'error',
                            title: "No se pudo realizar la compra"
                        });
                    }
            }
        });
        contador6+=3;
    }
    
    // cerrarVentana(documen.getElementById("botonCerrar1"));
    var objetoPadre = document.getElementById("botonCerrar1").parentNode;
    var listaHijos = objetoPadre.childNodes;
    objetoPadre = listaHijos[3];
    listaHijos = objetoPadre.childNodes;
    var contador3 = 7;//checar
    while(listaHijos[contador3]!=null){
        objetoPadre.removeChild(listaHijos[contador3]);
    }
    document.getElementById("ventanaCarrito").style.visibility = 'hidden';
    document.getElementById("carrito").style.visibility = 'visible';

    while(productos.length>0){
        productos.pop();
    }
    var objetoPadre = document.getElementById("botonCerrar1").parentNode;
    var listaHijos = objetoPadre.childNodes;
    objetoPadre = listaHijos[3];
    listaHijos = objetoPadre.childNodes;

    var contador3 = 7;
    while(listaHijos[contador3]!=null){
        objetoPadre.removeChild(listaHijos[contador3]);
    }
}






