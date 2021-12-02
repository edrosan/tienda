-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-12-2021 a las 00:23:08
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `php`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tienda`
--

CREATE TABLE `tienda` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `imagen` text NOT NULL,
  `descripcion` text NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tienda`
--

INSERT INTO `tienda` (`id`, `nombre`, `imagen`, `descripcion`, `cantidad`) VALUES
(0, 'Taza', 'https://www.letrasdeencuentro.es/regalos-para-lectores/images/taza-harry-potter.jpeg', 'Caliente', 0),
(1, 'Libreta ', 'https://m.media-amazon.com/images/I/415kt+Ix7wL.jpg', 'Escribe magicamente', 0),
(2, 'Cubrebocas', 'https://todoharrypotter.es/image/todoharrypotter.es/mascarillas-de-harry-potter-1600096298.jpg/200/200', 'Mágicamente protegido', 9),
(3, 'PotterSuerter', 'https://aos-al.org/wp-content/uploads/2019/03/Imagen-1-1-425x400.jpg', 'Caliente', 2),
(4, 'Collar gira tiempo', 'https://img.kichink.com/item_id/275301?width=350&height=250', 'Collar', 13),
(5, 'Labiales', 'https://i0.wp.com/www.mercadonegro.pe/wp-content/uploads/2019/04/Harry-Potter-Colour-Changing-Lipsticks.jpg?fit=740%2C580&ssl=1', 'Labial', 12),
(6, 'PuercoPotter', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0864faf1-8513-4531-ba79-5b7f09415e05/d3k7mv2-903d8518-063c-4275-9809-ac2384184231.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8wODY0ZmFmMS04NTEzLTQ1MzEtYmE3OS01YjdmMDk0MTVlMDUvZDNrN212Mi05MDNkODUxOC0wNjNjLTQyNzUtOTgwOS1hYzIzODQxODQyMzEuanBnIn1dXX0.EHXUUF1OuoIpEvhagjZ84mJqstCEHpi_bn6k6th6fTI', 'Es Potter', 2),
(7, 'Nimbus 2000', 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/09/boligrafo.jpg?itok=sAzbzD62', '??', 1),
(8, 'Ajedrez', 'https://i0.wp.com/elrincon.tv/wp-content/uploads/2018/10/ajedrez-harry-potter.jpg?fit=1318%2C843&ssl=1', 'Juega', 5),
(9, 'Mochila', 'https://blog.cerdagroup.com/hs-fs/hubfs/2%20(7).png?width=730&name=2%20(7).png', 'Es una mochila', 20),
(10, 'Llaveros', 'https://m.media-amazon.com/images/I/91vDumtUtNL._AC_SY355_.jpg', 'Llaveros para llaves', 42),
(11, 'Varitas', 'https://http2.mlstatic.com/D_NQ_NP_954739-MLM44257649875_122020-O.jpg', 'Varitas', 25),
(12, 'Tenis', 'https://dzqguq0tiw9xx.cloudfront.net/wcsstore/AuroraESite/Attachment/2019/blog/harry2.jpg', 'Tenis potter', 4),
(13, 'Pulsera', 'https://i.ytimg.com/vi/yefg01mJhRU/maxresdefault.jpg', 'Buena suerte', 50),
(14, 'Collar', 'https://img.clasf.mx/2019/07/29/Collar-Harry-Potter-Dijes-Hogwarts-Reliquias-Snitch-Hermione-20190729212717.4629700015.jpg', 'C......', 25),
(15, 'Corbata', 'https://www.dhresource.com/0x0/f2/albu/g7/M00/AD/B3/rBVaSVsGv8uAJkU8AAFswiAmszE437.jpg', 'Luce', 53),
(16, 'Sudadera', 'https://mikusanime.com/2985-large_default/sudadera-harry-potter-s-3xl-.jpg', 's.....', 64),
(17, 'Capa', 'https://http2.mlstatic.com/D_NQ_NP_609572-MLM32378074107_092019-O.jpg', '........', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
