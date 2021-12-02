<?php
    require 'conexion.php';

    // print_r($_POST);
    $opcion = $_POST['opcion'];
    // echo $opcion;
    if($opcion == 1) {
        iniciar($conexion);
    }
    if($opcion == 2) {
        disminuir($conexion);
    }



    function iniciar($conexion){
        $consulta = ("SELECT * FROM tienda");
        $resultado = mysqli_query($conexion,$consulta);
        mysqli_close($conexion);

        if($resultado){
            $contador = 0;
            $datos = [];
            while($row = $resultado->fetch_array()){
                $array= [];
                $id = $row['id'];
                $nombre = $row['nombre'];
                $imagen = $row['imagen'];
                $descripcion = $row['descripcion'];
                $cantidad = $row['cantidad'];

                $data = ['id'=>$id, 'nombre'=>$nombre,'imagen'=>$imagen,'descripcion'=>$descripcion,'cantidad'=>$cantidad];

                array_push($datos, $data);
                $contador=$contador+1;
            }
            echo json_encode($datos);

        }else{
            echo 'error';
        }
        exit;
    }

    function disminuir($conexion){
        $id = $_POST['id'];
        $cantidad = $_POST['cantidad'];

        $query = mysqli_query($conexion, "SELECT cantidad FROM tienda WHERE id=$id");
        $data = mysqli_fetch_assoc($query);
        $cantidad = $data['cantidad'] - $cantidad;

        $update = "UPDATE tienda SET cantidad='$cantidad' WHERE id='$id'";

        $query = mysqli_query($conexion, $update);
        if($query){
            echo "ok";
        }else{
            echo "error";
        }
    }


?>