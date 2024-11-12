-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 07, 2024 at 01:19 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cit2202`
--
CREATE DATABASE IF NOT EXISTS `p-d_digitalFrontier` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `p-d_digitalFrontier`;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dateOfBirth` date DEFAULT NULL,
  `role` tinyint(4) NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `dateOfBirth`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin01', 'administrator01@digitalFrontier.co.uk', '$2y$10$MVyqATTVeQz2UJv3WLyMsuECcqpXe4P3TO5x2BtgtzJpkkhn7A4VK', NULL, 2, NULL, NULL, NULL),
(2, 'Admin02', 'administrator02@digitalFrontier.co.uk', '$2y$10$LWx8xNYBl2qzV8AKDK/ZYun8hcmGwwFYuPkodhJWOde7junoXDJ8G', NULL, 2, NULL, NULL, NULL),
(3, 'User01', 'user01@digitalFrontier.co.uk', '$2y$10$xEfy05sAc2DfJ4WrY3b7He4wa3P6jTEVIgJtTIAWHuFkF2WsC2qba', NULL, 1, NULL, NULL, NULL);

--
-- Passwords as follows: admin01  admin02  user01
--