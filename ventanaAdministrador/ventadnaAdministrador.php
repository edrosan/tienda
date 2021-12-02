<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="CSS/style.css" />
    <title>BDD</title>
</head>

<body>
    <div id="cabecera">
        <div id="cabeceraLogo">
            <img src="img/logo.png" title="BUAP">
        </div>
        <div id="cabeceraTitulo">
            <h1><br>BDD</h1>
        </div>
        <div id="cabeceraDatos">
            <p><br>Datos</p>
            <p>Alcantar Perez Jose Luis</br>Rodriguez Sanchez Eduardo</p>
        </div>
    </div>
    <div id="formulario">
        <form action="index.php" method="post">

            <div class="tarjetaFormulario">
                <input class="izquierda" name="idBuscar" type="text" placeholder="IdBuscar" id="idBuscar"></input>
                <input class="izquierda" name="idBase" type="text" placeholder="IdBase" id="idBase"></input>

                <input class="izquierda" name="titulo" type="text" placeholder="Nombre" id="titulo"></input>

                <input class="izquierda" id="imagen" name="imagen" type="text" placeholder="Inserta una URL"></input>

                <textarea class="izquierda" name="descripcion" type="text" placeholder="Inserta una descripcion"
                    id="descripcion"></textarea>
                <input class="izquierda" id="cantidad" name="cantidad" type="text" placeholder="Inserta una cantidad"></input>




                <button class="izquierda" name="botonAgregar" id="botonAgregar" type="submit">
                    Agregar
                </button>

                <button class="izquierda" name="botonBuscar" id="botonBuscar" type="submit">
                    Buscar
                </button>

                <button class="izquierda" name="botonActualizar" id="botonActualizar" type="submit">
                    Actualizar
                </button>
                <button class="izquierda" name="botonEliminar" id="botonEliminar" type="submit">
                    Eliminar
                </button>



            </div>



        </form>


    </div>


    <?php
        require 'php/guardar.php';

    ?>
</body>

</html>