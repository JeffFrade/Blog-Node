CREATE DATABASE blog_node;
USE blog_node;

CREATE TABLE users(
`user` VARCHAR(30) PRIMARY KEY,
`name` VARCHAR(150) NOT NULL,
`password` VARCHAR(255) NOT NULL,
email VARCHAR(100) NOT NULL,
`profile` VARCHAR(10) NOT NULL);

CREATE TABLE post(
id INT PRIMARY KEY,
title VARCHAR(75) NOT NULL,
post VARCHAR(3000) NOT NULL,
`page` VARCHAR(25) NOT NULL,
image VARCHAR(2000));

CREATE TABLE `comment`(
id INT PRIMARY KEY,
`name` VARCHAR(150) NOT NULL,
email VARCHAR(150) NOT NULL,
`comment` VARCHAR(3500) NOT NULL,
id_post INT NOT NULL,
FOREIGN KEY (id_post) REFERENCES post(id));

INSERT INTO users(`user`, `name`, `password`, email, `profile`) VALUES('Fulano', 'Fulano', MD5('123'), 'fulano@mail.com', 'ADM');
INSERT INTO users(`user`, `name`, `password`, email, `profile`) VALUES('Ciclano', 'Ciclano', MD5('321'), 'ciclano@mail.com', 'User');