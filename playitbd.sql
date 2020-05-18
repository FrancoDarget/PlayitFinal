-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2020 at 10:17 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `playitbd`
--


-- --------------------------------------------------------

--
-- Table structure for table `resenas`
--
CREATE DATABASE  `playitdb`;
USE playitdb;
CREATE TABLE `resenas` (
  `id` int(11) NOT NULL,
  `id pelicula` int(11) DEFAULT NULL,
  `id usuario` int(11) DEFAULT NULL,
  `resena` longtext DEFAULT NULL,
  `fecha creacion` date DEFAULT NULL,
  `fecha actualizacion` date DEFAULT NULL,
  `puntaje` decimal(1,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='tabla de resenas';

--
-- Dumping data for table `resenas`
--

INSERT INTO `resenas` (`id`, `id pelicula`, `id usuario`, `resena`, `fecha creacion`, `fecha actualizacion`, `puntaje`) VALUES
(1, NULL, 1, 'Buenisima', '2001-02-02', '2020-05-18', '8'),
(2, NULL, 2, 'Tremendo', '2001-02-02', '2016-05-18', '8'),
(3, NULL, 3, 'MUY mala', '2001-02-02', '2005-05-18', '3'),
(4, NULL, 4, 'Me pegue un cagaso', '2001-02-07', '2010-05-18', '9'),
(5, NULL, 5, 'Tremenda', '2001-02-07', '2020-05-18', '6'),
(6, NULL, 1, 'La mas inspirante que vi en mi vida', '2001-02-07', '2012-05-18', '9'),
(7, NULL, 2, 'De las peores inversiones que hice', '2001-02-07', '2011-05-18', '1'),
(8, NULL, 3, 'QUE LOCURA', '2001-02-07', '2020-05-18', '7'),
(9, NULL, 4, 'La veria mil veces mas', '2001-02-07', '2020-05-18', '8'),
(10, NULL, 5, 'Como hacen peliculas tan malas?', '2001-02-07', '2018-05-18', '3'),
(11, NULL, 1, 'Oscar si o si', '2001-02-07', '2020-05-18', '5'),
(12, NULL, 2, 'WOW', '2001-02-07', '2020-05-18', '8'),
(13, NULL, 3, 'Malisima', '2001-02-07', '2007-05-18', '4'),
(14, NULL, 4, 'genialll', '2001-02-07', '2020-05-18', '7'),
(15, NULL, 5, 'Tremenda', '2001-02-07', '2012-05-18', '9'),
(16, NULL, 1, 'muy malaa', '2001-02-07', '2020-05-18', '1'),
(17, NULL, 2, 'Pesima', '2001-02-07', '2019-05-18', '3'),
(18, NULL, 3, 'muy piola', '2001-02-07', '2020-05-18', '9'),
(19, NULL, 4, 'pesimo', '2001-02-07', '2013-05-18', '4'),
(20, NULL, 5, 'me rei mucho', '2001-02-07', '2020-05-18', '8'),
(21, NULL, 1, 'Genial', '2001-02-07', '2018-05-18', '8'),
(22, NULL, 2, 'muy mala', '2001-02-07', '2016-05-18', '4'),
(23, NULL, 3, 'buenisimo', '2001-02-07', '2015-05-18', '9'),
(24, NULL, 4, 'Muy buena onda', '2001-02-07', '2020-05-18', '8'),
(25, NULL, 5, 'tremendoo', '2001-02-07', '2003-05-18', '8');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `birth date` date DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` tinytext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabla de usuarios';

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `name`, `birth date`, `email`, `password`) VALUES
(1, 'Franco', '2001-02-02', 'franco@gmail.com', 'Playitfranco'),
(2, 'Segundo', '2001-02-07', 'segundo@gmail.com', 'Playitsegu'),
(3, 'Justi', '2001-02-05', 'justi@gmail.com', 'Playitjusti'),
(4, 'Paula', '2001-02-03', 'paula@gmail.com', 'Playitpaula'),
(5, 'Sofia', '2001-02-07', 'sofia@gmail.com', 'Playitsofia'),
(6, 'Leon', '2001-02-07', 'leon@gmail.com', 'Playitleon'),
(7, 'Eucracio', '2001-02-07', 'eucracio@gmail.com', 'Playiteucracio'),
(8, 'Mati', '2001-02-02', 'mati@gmail.com', 'Playitmati'),
(9, 'Dario', '2001-02-02', 'dario@gmail.com', 'Playitdario'),
(10, 'Herni', '2001-02-02', 'herni@gmail.com', 'Playitmarcos'),
(11, 'Marcos', '2001-02-02', 'marcos@gmail.com', 'Playitmarcos');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `resenas`
--
ALTER TABLE `resenas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuarioResena` (`id usuario`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `resenas`
--
ALTER TABLE `resenas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `resenas`
--
ALTER TABLE `resenas`
  ADD CONSTRAINT `usuarioResena` FOREIGN KEY (`id usuario`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
