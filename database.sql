CREATE DATABASE qrcode;
use qrcode;

CREATE TABLE `qrcode` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `link` varchar(255),
  `maquina_id` int NOT NULL
);

CREATE TABLE `maquina` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nome` varchar(100),
  `descricao` varchar(9000)
);

CREATE TABLE `midias` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nome` varchar(255),
  `maquina_id` int NOT NULL,
  `caminho` varchar(255)
);

CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL
);

CREATE USER 'qrcode'@'localhost' IDENTIFIED BY 'senai115';
GRANT ALL PRIVILEGES ON * . * TO 'qrcode'@'localhost';
FLUSH PRIVILEGES;