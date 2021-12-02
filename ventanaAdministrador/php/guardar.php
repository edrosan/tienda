<?php

    require 'conexion.php';

    $nombre  = "";
    $url = "";
    $descripcion = "";

    elegirBoton($conectar);

    function elegirBoton($conectar) {
        if(isset($_POST['botonAgregar'])){
            agregar($conectar);
        }
        if(isset($_POST['botonEliminar'])){
            eliminar($conectar);
        }
        if(isset($_POST['botonActualizar'])){
            actualizar($conectar);
        }
        if(isset($_POST['botonBuscar'])){
            buscar($conectar);
        }
    }

    function agregar($conectar) {
        $nombre = $_POST['titulo'];
        $imagen = $_POST['imagen'];
        $descripcion = $_POST['descripcion'];
        $id = $_POST['idBase'];
        $cantidad = $_POST['cantidad'];

        $insertar = "INSERT INTO tienda VALUES ('$id','$nombre','$imagen','$descripcion','$cantidad')";
        $query = mysqli_query($conectar, $insertar);
        if($query){
            echo "Agregado";
        }else{
            echo "No agregado";
        }
    }

    function eliminar($conectar){
        $id = $_POST['idBuscar'];
        $insertar = "DELETE FROM tienda WHERE id='$id'";
        $query = mysqli_query($conectar, $insertar);
        if($query){
            echo "Eliminado";
        }else{
            echo "No eliminado";
        }
    }

    function actualizar($conectar){
        $nombre = $_POST['titulo'];
        $descripcion = $_POST['descripcion'];
        $url = $_POST['imagen'];
        $id = $_POST['idBuscar'];
        $id= $_POST['idBase'];
        $cantidad = $_POST['cantidad'];

        $editar = "UPDATE tienda SET descripcion='$descripcion' WHERE id='$id'";
        $query = mysqli_query($conectar, $editar);
        $editar = "UPDATE tienda SET imagen='$url' WHERE id='$id'";
        $query = mysqli_query($conectar, $editar);
        $editar = "UPDATE tienda SET nombre='$nombre' WHERE id='$id'";
        $query = mysqli_query($conectar, $editar);
        $editar = "UPDATE tienda SET cantidad='$cantidad' WHERE id='$id'";
        $query = mysqli_query($conectar, $editar);
        $editar = "UPDATE tienda SET id='$id' WHERE id='$id'";
        $query = mysqli_query($conectar, $editar);
        if($query){
            echo "Actualizado";
        }else{
            echo "Error al actualizar";
        }
    }

    function buscar($conectar){
        $nombre = $_POST['titulo'];
        $idBuscar = $_POST['idBuscar'];

        $resultado=$conectar->query("SELECT EXISTS (SELECT * FROM tienda WHERE id='$idBuscar');");
        $row=mysqli_fetch_row($resultado);

        if ($row[0]=="1") {
            $query = mysqli_query($conectar, "SELECT * FROM tienda WHERE id=$idBuscar");
            $data = mysqli_fetch_assoc($query);

            $nombre = $data['nombre'];
            $idBase = $data['id'];
            $url = $data['imagen'];
            $descripcion = $data['descripcion'];
            $cantidad = $data['cantidad'];

            echo "<script>document.getElementById('idBuscar').value=".$idBuscar."</script>";

            echo "<script>document.getElementById('idBase').value=".$idBase."</script>";
            echo "<script>document.getElementById('titulo').value='".$nombre."'</script>";
            echo "<script>document.getElementById('imagen').value='".$url."'</script>";
            echo "<script>document.getElementById('descripcion').value='".$descripcion."'</script>";
            echo "<script>document.getElementById('cantidad').value='".$cantidad."'</script>";


         



        }else{
            echo "Dato no encontrado";
        }
    }


?>