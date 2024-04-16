-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 16, 2024 at 11:20 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lethal-company`
--

-- --------------------------------------------------------

--
-- Table structure for table `Scraps`
--

CREATE TABLE `Scraps` (
  `ScrapName` varchar(255) DEFAULT NULL,
  `MinimumValue` int(11) DEFAULT NULL,
  `Maximumvalue` int(11) DEFAULT NULL,
  `Weight` int(11) DEFAULT NULL,
  `Conductivity` tinyint(1) DEFAULT NULL,
  `IsTwoHanded` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Scraps`
--

INSERT INTO `Scraps` (`ScrapName`, `MinimumValue`, `Maximumvalue`, `Weight`, `Conductivity`, `IsTwoHanded`) VALUES
('Air Horn', 52, 72, 0, 0, 0),
('Big Bolt', 20, 32, 19, 1, 0),
('Brass Bell', 48, 80, 24, 1, 0),
('Candy', 6, 36, 11, 0, 0),
('Clown Horn', 52, 71, 0, 1, 0),
('Coffee Mug', 24, 68, 5, 0, 0),
('Cookie Mold Pan', 12, 38, 16, 0, 0),
('Dust Pan', 20, 28, 0, 0, 0),
('Egg Beater', 12, 38, 11, 1, 0),
('Flask', 34, 40, 19, 1, 0),
('Gold Bar', 108, 210, 77, 1, 0),
('Golden Cup', 46, 80, 16, 1, 0),
('Hair Brush', 8, 36, 11, 0, 0),
('Hair Drier', 60, 98, 7, 0, 0),
('Jar of Pickles', 36, 60, 16, 0, 0),
('Key', 3, 3, 0, 1, 0),
('Laser Pointer', 32, 100, 0, 0, 0),
('Magic 7 ball', 36, 71, 16, 0, 0),
('Magnifying Glass', 44, 60, 11, 0, 0),
('Mask', 0, 0, 0, 0, 0),
('Old Phone', 48, 64, 5, 0, 0),
('Perfume Bottle', 48, 100, 0, 0, 0),
('Pill Bottle', 16, 37, 0, 0, 0),
('Plastic Fish', 28, 39, 0, 0, 0),
('Present', 14, 16, 16, 0, 0),
('Red Soda', 18, 89, 7, 1, 0),
('Remote', 20, 45, 0, 0, 0),
('Robot Toy', 56, 88, 21, 1, 0),
('Rubber Duckie', 2, 100, 0, 0, 0),
('Steering Wheel', 16, 32, 16, 1, 0),
('Stop Sign', 20, 48, 21, 1, 0),
('Tattered Metal Sheet', 10, 22, 26, 1, 0),
('Tea Kettle', 32, 56, 21, 1, 0),
('Teeth', 60, 84, 0, 0, 0),
('Toothpaste', 16, 48, 0, 0, 0),
('Toy Cube', 24, 44, 5, 0, 0),
('Yield Sign', 24, 32, 42, 1, 0),
('Wedding Ring', 58, 79, 16, 1, 0),
('Whoopie Cushion', 4, 18, 10, 1, 0),
('Apparatus', 80, 80, 31, 1, 1),
('Bee Hive', 60, 150, 0, 0, 1),
('Bottles', 44, 56, 19, 0, 1),
('Cash Register', 102, 160, 84, 1, 1),
('Chemical Jug', 32, 85, 31, 0, 1),
('Fancy Lamp', 60, 128, 21, 1, 1),
('Large Axle', 36, 53, 16, 1, 1),
('Painting', 62, 124, 31, 0, 1),
('Player Body', 5, 5, 11, 0, 1),
('V - Type Engine', 20, 52, 16, 1, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
