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

insert into qrcode (id, link, maquina_id) values (1, 'https://house.gov', 1);
insert into qrcode (id, link, maquina_id) values (2, 'http://marriott.com', 2);
insert into qrcode (id, link, maquina_id) values (3, 'http://godaddy.com', 3);
insert into qrcode (id, link, maquina_id) values (4, 'http://e-recht24.de', 4);
insert into qrcode (id, link, maquina_id) values (5, 'https://moonfruit.com', 5);
insert into qrcode (id, link, maquina_id) values (6, 'https://reddit.com', 6);
insert into qrcode (id, link, maquina_id) values (7, 'http://nydailynews.com', 7);
insert into qrcode (id, link, maquina_id) values (8, 'https://ca.gov', 8);
insert into qrcode (id, link, maquina_id) values (9, 'https://friendfeed.com', 9);
insert into qrcode (id, link, maquina_id) values (10, 'http://exblog.jp', 10);

insert into midias (id, nome, maquina_id, caminho) values (1, 'Reallinks', 1, 'http://dummyimage.com/136x104.png/5fa2dd/ffffff');
insert into midias (id, nome, maquina_id, caminho) values (2, 'Oba', 2, 'http://dummyimage.com/172x135.jpg/5fa2dd/ffffff');
insert into midias (id, nome, maquina_id, caminho) values (3, 'Agimba', 3, 'http://dummyimage.com/108x153.bmp/5fa2dd/ffffff');
insert into midias (id, nome, maquina_id, caminho) values (4, 'Fivebridge', 4, 'http://dummyimage.com/233x196.bmp/5fa2dd/ffffff');
insert into midias (id, nome, maquina_id, caminho) values (5, 'Demivee', 5, 'http://dummyimage.com/241x207.png/5fa2dd/ffffff');
insert into midias (id, nome, maquina_id, caminho) values (6, 'Meemm', 6, 'http://dummyimage.com/244x185.jpg/5fa2dd/ffffff');
insert into midias (id, nome, maquina_id, caminho) values (7, 'Kare', 7, 'http://dummyimage.com/235x233.png/5fa2dd/ffffff');
insert into midias (id, nome, maquina_id, caminho) values (8, 'Realfire', 8, 'http://dummyimage.com/237x104.jpg/5fa2dd/ffffff');
insert into midias (id, nome, maquina_id, caminho) values (9, 'Rooxo', 9, 'http://dummyimage.com/128x119.jpg/cc0000/ffffff');
insert into midias (id, nome, maquina_id, caminho) values (10, 'Trupe', 10, 'http://dummyimage.com/203x231.png/dddddd/000000');

insert into maquina (id, nome, descricao) values (1, 'Tekfly', 'proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor eu pede');
insert into maquina (id, nome, descricao) values (2, 'Latz', 'augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in');
insert into maquina (id, nome, descricao) values (3, 'Blognation', 'est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris');
insert into maquina (id, nome, descricao) values (4, 'Gabtype', 'fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin');
insert into maquina (id, nome, descricao) values (5, 'Vinte', 'in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed');
insert into maquina (id, nome, descricao) values (6, 'Rhynyx', 'magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet');
insert into maquina (id, nome, descricao) values (7, 'Tavu', 'diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet');
insert into maquina (id, nome, descricao) values (8, 'Podcat', 'mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est');
insert into maquina (id, nome, descricao) values (9, 'Buzzdog', 'leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit');
insert into maquina (id, nome, descricao) values (10, 'Riffwire', 'nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor');

insert into user (id, email, senha) values (1, 'aaujouanet0@aol.com', 'tkop27');
insert into user (id, email, senha) values (2, 'astollsteimer1@wiley.com', 'wxum84');
insert into user (id, email, senha) values (3, 'gswatridge2@prlog.org', 'dqxv55');
insert into user (id, email, senha) values (4, 'kkardos3@soup.io', 'xtwb35');
insert into user (id, email, senha) values (5, 'fhought4@go.com', 'zyqe28');
insert into user (id, email, senha) values (6, 'hfairholm5@issuu.com', 'rggj06');
insert into user (id, email, senha) values (7, 'mloftie6@arstechnica.com', 'lxtt08');
insert into user (id, email, senha) values (8, 'rsheards7@storify.com', 'xqig50');
insert into user (id, email, senha) values (9, 'cmckennan8@cloudflare.com', 'ahpp89');
insert into user (id, email, senha) values (10, 'doxterby9@timesonline.co.uk', 'oojs60');

CREATE USER 'qrcode'@'localhost' IDENTIFIED BY 'senai115';
GRANT ALL PRIVILEGES ON * . * TO 'qrcode'@'localhost';
FLUSH PRIVILEGES;