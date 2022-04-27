CREATE TABLE customer(
    customer_ID serial PRIMARY KEY,
    email_ID VARCHAR ( 150 ) UNIQUE NOT NULL,
    pwd VARCHAR ( 1000 ) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone_num VARCHAR(10),
    address_customer VARCHAR ( 250 )
);
 
CREATE TABLE label(
    label_ID serial PRIMARY KEY,
    label_name VARCHAR(50) UNIQUE NOT NULL,
    email_ID VARCHAR ( 150 ) UNIQUE NOT NULL,
    pwd VARCHAR ( 1000 ) NOT NULL    
);
 
CREATE TABLE album(
    album_ID serial PRIMARY KEY,
    album_name VARCHAR(50) NOT NULL,
    artist VARCHAR(100) NOT NULL,
    genre VARCHAR(50) NOT NULL,
    songs TEXT [] NOT NULL,
    yearOfRelease SMALLINT NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    label_ID INT NOT NULL REFERENCES label(label_ID)
);
 
CREATE TABLE album_type(
    album_ID INT NOT NULL REFERENCES album(album_ID),
    alb_type VARCHAR(15) NOT NULL,
    stock INT NOT NULL,
    price REAL NOT NULL,
    PRIMARY KEY (album_ID, alb_type)
);
 
CREATE TABLE addToCart(
    customer_ID INT NOT NULL REFERENCES customer(customer_ID),
    alb_type VARCHAR(15)  NOT NULL,
    album_ID INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (album_ID,alb_type ) REFERENCES album_type (album_ID, alb_type),
    PRIMARY KEY(customer_ID,alb_type,album_ID)
);
 
CREATE TABLE orders (
    order_ID serial PRIMARY KEY,
    customer_ID INT NOT NULL REFERENCES customer(customer_ID),
    date_time TIMESTAMP NOT NULL,
    order_status VARCHAR(20) NOT NULL
);
 
CREATE TABLE order_items(
    order_ID INT NOT NULL REFERENCES orders(order_ID),
    alb_type VARCHAR(15) NOT NULL,
    album_ID INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (album_ID,alb_type ) REFERENCES album_type (album_ID, alb_type),
    PRIMARY KEY(order_ID,alb_type,album_ID)
);
 
INSERT INTO customer(email_ID,pwd,first_name,last_name,phone_num,address_customer)
VALUES
('f20202044@hyderabad.bits-pilani.ac.in','$2a$04$2Hao3c521GO/1G.ZNyYMouC9UIclKONCC7MpFzx9XKKN.UpMvfb6G','Rohith','Paul','7022986655','365, St Josephs, Hyderabad'),
('f20202068@hyderabad.bits-pilani.ac.in','$2a$04$Aooe/qL9otSbPvbYO0C8leXAvBNKBbEC/HSsI.p3lzOHH63fi2TTG','Arya','Pathak','7034545223','247, MG Road, Pune'),
('f20201722@hyderabad.bits-pilani.ac.in','$2a$04$qu5DY9w46BsPggpL9dRBEOXVCKkqIRp.qUci3zixR3MRyqQOv2HSC','Medini','N B','9901665304','123, Street A, Manipal'),
('f20201316@hyderabad.bits-pilani.ac.in','$2a$04$uqbRCtb/N8JXi17DYeL/X.qcEBHAQ9as9jvMUpIK.k2AErwihOEqG','Megha','Khurana','7022029655','678, Street B, Bangalore'),
('f20202476@hyderabad.bits-pilani.ac.in','$2a$04$VcMs2TasperTpniJxX9jGuxRjdqybGigGVkRyuTZpqQvNwh72a6s2','Sayyam','Tiwari','9511295952','255, Abbeys St, Hyderabad'),
('prithvi@gmail.com','$2a$04$NksulYebJSA293ncqTpE9.WJCWutjHll8fRwa/yDruKaldpT8.fuW','Prithvi','Hegde','9999999999','88th Wall St'),
('rajan@gmail.com','$2a$04$lNPCrTdsx/5sMrsUa8nz/.QLUL8WZBrMJeQ85R58k2ocvkdAUqhsa','Prithvi','Rajan','8888888888','77th Sarojini Block'),
('pandey@gmail.com','$2a$04$L/w2qefFX/wN/HoMwvJRxeYS1ISZXzspO3BCDNJ43.11fOSpLAJBe','Shashank','Pandey','7373737373','95 Street C,NY'),
('kishan123@gmail.com','$2a$04$mzGmwpYJ9svB5MVFogbPH.7rZ7cd2VLDRiXyTa0/sZ/esCTtCvdHm','Kishan','Kokil','6734520945','235, JP Nagar'),
('kavya@gmail.com','$2a$04$pRTY/882sONmsZdw4PnvUOj9CISrAfThhhYNKHHHMuTWCSa6/zKWu','Kavya','Agnihotri','7492568256','87, Whitefield');
 
 
INSERT INTO label(label_name,email_ID,pwd)
VALUES
('UMG','universalmusic@gmail.com','$2a$04$UY8IGKURpKIRZvLTzObwhefon1RCa02CDg/b0xOwmO6iQlGEVgoi2'),
('SME','sonyentertainment@yahoo.com','$2a$04$4KOTBE8tlo/9eL9qIie0gut9ISCZbY2MFRvmT6UyAhKDg1IrFXqWC'),
('Atlantic Records','atlanticrecords@gmail.com','$2a$04$lsxSWd.gd26G76ulYvdwxe6G7mobaWVanzLQLV5.Yd7oLSHHqY9X.'),
('Virgin Records','virgin@gmail.com','$2a$04$qWYqWJyUs7L0WtR/5IU3SuvQeUFe.WqA1ArVKC8kkLqh5KvJDXHoK'),
('RCA Records','rca@yahoo.com','$2a$04$nb/1ptlz0HwMhhBi/W.ULOUscGaVSYAS54B93Os2JLVPzfv0jnOU2'),
('Warner Music Group','wmg@gmail.com','$2a$04$uD9gb/hVjGKX47Qh78r/aOi1ukZR4mUon6O6gaRV4f1F9G5b6IoUW'),
('Island Records','islandrec@gmail.com','$2a$04$iyBdTmeZVOgAOwzUMvedZujX2qUHDuaHbDdsAbDAPcARLLU3Rmnwi'),
('ABC Records','abcrec@gmail.com','$2a$04$I3bPqTduy5KB6BPzZWnxHOLwjopzNCtp.8Y8BwaxJu1si3HwBpiGG'),
('Red Hill Records','redhillrec@gmail.com','$2a$04$Jvw82hXAGc3ZI.9bUMd6hOm2LamsZTz6TbAn3JH4n.yQgO5FbZT8y'),
('Def Jam Records','defjamrec@gmail.com','$2a$04$BkNfoO2SHIkSgywnTJtO4uP7.R2P0Ts6GlZ1Jp1Cgf7AkDT2eOXx6');
 
INSERT INTO album(album_name,genre,songs,artist,image_url,yearOfRelease,label_ID)
VALUES
('Evermore','Pop',ARRAY['exile','willow', 'gold rush'],'Taylor Swift','https://i.discogs.com/MOtHCmTFzKJGWi5YRWPgXI_XihxxXGbmx9C_1-u1qkE/rs:fit/g:sm/q:90/h:591/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2NjAx/MDM0LTE2MDg4MDQ4/OTUtOTM4Mi5qcGVn.jpeg',2020,1),
('Take Me Home','Pop',ARRAY['heart attack','little things'],'1D','https://i.discogs.com/QzKUSBCtl1WfVQFYeA9bkfikgSl_H_AK9FosNbPTXIw/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQwMzU0/NjMtMTU2ODUzODE3/NC05NTg5LmpwZWc.jpeg',2012,1),
('Red','Pop',ARRAY['Red','22','Starlight'],'Taylor Swift','https://pbs.twimg.com/media/E4LtA9ZXwAsgl1V.jpg:large',2012,1),
('Hybrid Theory','Rock',ARRAY['Papercut','Crawling'],'Linkin Park','https://upload.wikimedia.org/wikipedia/en/2/2a/Linkin_Park_Hybrid_Theory_Album_Cover.jpg',2000,2),
('Blonde','RnB',ARRAY['Ivy','Nike','Solo'],'Frank Ocean','https://electricladystudios.com/wp-content/uploads/2016/08/Frank-Ocean-Blond.jpg',2016,2),
('Awaken, My Love!','Rap',ARRAY['Red Bone', 'California'],'Chilidish Gambino','https://upload.wikimedia.org/wikipedia/en/1/10/Childish_Gambino_-_Awaken%2C_My_Love%21.png',2016,2),
('channel ORANGE','RnB',ARRAY['White','Lost','Pyramids'],'Frank Ocean','https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg',2012,3),
('Back Of My Mind','RnB',ARRAY['We Made It','Damage','Lucky'],'H.E.R.','https://upload.wikimedia.org/wikipedia/en/c/c4/Back_Of_My_Mind_By_H.E.R.png',2021,3),
('One More Light','Pop',ARRAY['Invisible','Heavy'],'Linkin Park','https://upload.wikimedia.org/wikipedia/en/b/b2/Linkin_Park%2C_One_More_Light%2C_album_art_final.jpeg',2019,3),
('Nectar','RnB',ARRAY['Ew','Tick Tock','Daylight'],'Joji','https://upload.wikimedia.org/wikipedia/en/1/1b/Joji_-_Nectar.png',2020,4),
('Starboy','Pop',ARRAY['Starboy','False Alarm','Die For You'],'The Weeknd','https://i.discogs.com/5I1sHhyJ8DOW0tJKFzFXfuLrpQ1xDmDQCjjFA0n27kY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk0MTIz/ODMtMTY0NzI4NjA1/OS0zMzY3LmpwZWc.jpeg',2016,4),
('30','Pop',ARRAY['Easy On Me','Oh My God'],'Adele','https://i.discogs.com/4jsCdY482XiGwow9HlAIRigzOlaGEYp8PLfWaVJsb04/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMDI4/NDI5LTE2Mzk2MjU2/MTEtNzYzMy5qcGVn.jpeg',2021,4),
('Back In Black','Rock',ARRAY['Hells Bells', 'Shoot to Thrill'],'ACDC','https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/ACDC_Back_in_Black_cover.svg/1200px-ACDC_Back_in_Black_cover.svg.png',1980,5),
('Because the Internet','Rap',ARRAY['Sweatpants','3005','Urn'],'Childish Gambino','https://i.pinimg.com/originals/b6/8c/98/b68c9826325b14f12727f476a3f7549a.jpg',2013,5),
('Nevermind','Rock',ARRAY['In Bloom','Breed','Polly'],'Nirvana','https://upload.wikimedia.org/wikipedia/commons/1/19/Nirvana_around_1992.jpg',1991,5),
('25','Pop',ARRAY['Hello','I miss you','Remedy'],'Adele','https://upload.wikimedia.org/wikipedia/en/9/96/Adele_-_25_%28Official_Album_Cover%29.png',2015,6),
('The Chronic','Rap',ARRAY['Let Me Ride','The Doctors Office'],'Dr. Dre','https://upload.wikimedia.org/wikipedia/en/1/19/Dr.DreTheChronic.jpg',1992,6),
('Blonde2','RnB',ARRAY['Solo','Self Control','Nights'],'Frank Ocean','https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Lars-Unnerstall2.jpg/330px-Lars-Unnerstall2.jpg',2016,6),
('Anti','Pop',ARRAY['Consideration','Work'],'Rihanna','https://upload.wikimedia.org/wikipedia/en/3/32/Rihanna_-_Anti.png',2014,7),
('Rumours','Rock',ARRAY['The Chain','Dreams'],'Fleetwood Mac','https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG',1977,7),
('II','RnB',ARRAY['Thankyou','I sit away'],'Boyz II Men','https://upload.wikimedia.org/wikipedia/en/b/b9/BoyzIIMen-II-Cover.jpg',1994,7),
('Lemonade','Pop',ARRAY['Hold Up','Forward'],'Beyonce','https://upload.wikimedia.org/wikipedia/en/5/53/Beyonce_-_Lemonade_%28Official_Album_Cover%29.png',2016,8),
('OK Computer','Rock',ARRAY['Airbag','Let Down'],'Radiohead','https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png',1997,8),
('Ctrl','RnB',ARRAY['Broken Clocks','Anything'],'SZA','https://upload.wikimedia.org/wikipedia/en/b/bf/SZA_-_Ctrl_cover.png',2017,8),
('Teenage Dream','Pop',ARRAY['Firework','Peacock'],'Katy Perry','https://upload.wikimedia.org/wikipedia/en/8/82/Katy_Perry_-_Smile.png',2010,9),
('London Calling','Rock',ARRAY['Hateful','Spanish Bombs'],'The Clash','https://upload.wikimedia.org/wikipedia/en/0/00/TheClashLondonCallingalbumcover.jpg',1979,9),
('Thriller','RnB',ARRAY['Beat It','Human Nature'],'Micheal Jackson','https://upload.wikimedia.org/wikipedia/commons/3/31/Michael_Jackson_in_1988.jpg',1982,9),
('Melodrama','Pop',ARRAY['Green Light','Supercut'],'Lorde','https://upload.wikimedia.org/wikipedia/en/b/b2/Lorde_-_Melodrama.png',2017,10),
('Ten','Rock',ARRAY['Oceans','Black'],'Pearl Jam','https://upload.wikimedia.org/wikipedia/en/2/2d/PearlJam-Ten2.jpg',2017,10),
('After Hours','RnB',ARRAY['SnowChild','Heartless'],'The Weeknd','https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png',2020,10);
 
 
INSERT INTO album_type(album_ID,alb_type,stock,price)
VALUES
(1,'CD',20,200),
(2,'vinyl',15,350),
(3,'CD',25,200),
(3,'vinyl',20,300),
(4,'CD',50,500),
(4,'vinyl',40,600),
(5,'CD',100,200),
(6,'CD',150,200),
(7,'vinyl',40,300),
(8,'CD',100,200),
(8,'vinyl',150,225),
(9,'vinyl',20,375),
(10,'CD',100,100),
(11,'CD',100,200),
(11,'vinyl',100,275),
(12,'CD',200,100),
(12,'vinyl',10,300),
(13,'CD',40,250),
(14,'CD',50,350),
(14,'vinyl',40,450),
(15,'vinyl',60,800),
(16,'CD',40,550),
(17,'vinyl',70,400),
(18,'CD',30,200),
(19,'vinyl',50,500),
(20,'CD',70,200),
(21,'vinyl',30,350),
(22,'CD',40,450),
(23,'vinyl',60,710),
(24,'CD',45,350),
(25,'vinyl',65,450),
(26,'CD',50,500),
(27,'vinyl',80,250),
(28,'CD',60,500),
(29,'vinyl',45,500),
(30,'CD',55,450);
 
INSERT INTO addToCart(customer_ID,album_ID,alb_type,quantity)
VALUES
(1,1,'CD',2),
(1,8,'vinyl',1),
(3,9,'vinyl',1),
(4,6,'CD',2),
(4,11,'CD',1),
(4,12,'CD',2),
(5,4,'CD',1),
(10,5,'CD',5),
(6,5,'CD',5),
(8,5,'CD',5);
 
INSERT INTO orders(customer_ID,date_time,order_status)
VALUES
(4,'2021-01-01 00:00:00+00','delivered'),
(3,'2021-01-01 02:00:00+00','delivered'),
(5,'2021-01-01 03:00:00+00','delivered'),
(4,'2021-01-01 04:00:00+00','delivered'),
(1,'2021-01-01 05:00:00+00','on the way'),
(7,'2021-01-01 06:00:00+00','on the way'),
(8,'2021-01-01 07:00:00+00','on the way'),
(10,'2021-01-01 08:00:00+00','on the way'),
(9,'2021-01-01 09:00:00+00','on the way'),
(2,' 2021-01-01 10:00:00+00','on the way');
 
INSERT INTO order_items(order_ID,album_ID,alb_type,quantity)
VALUES
(1,3,'vinyl',3),
(1,1,'CD',2),
(1,12,'CD',1),
(2,2,'vinyl',2),
(2,13,'CD',1),
(2,14,'vinyl',1),
(3,2,'vinyl',4),
(3,3,'CD',1),
(3,4,'CD',3),
(4,11,'vinyl',1),
(4,5,'CD',1),
(4,7,'vinyl',2),
(5,6,'CD',2),
(5,10,'CD',1),
(5,11,'CD',1),
(6,6,'CD',2),
(6,10,'CD',1),
(6,11,'CD',1),
(7,6,'CD',2),
(7,10,'CD',1),
(7,11,'CD',1),
(8,6,'CD',2),
(8,10,'CD',1),
(8,11,'CD',1),
(9,6,'CD',2),
(9,10,'CD',1),
(9,11,'CD',1),
(10,3,'vinyl',3),
(10,1,'CD',2),
(10,12,'CD',1);
 
CREATE TABLE admin(
    admin_ID INT PRIMARY KEY,
    pwd VARCHAR(1000) NOT NULL
);
 
INSERT INTO admin(admin_ID,pwd)
VALUES
(8956,'$2a$04$pv/3TdHKlQ55R81dX9e0/.ekWhUdiHKhM0xloL3RQ0binvq8qliDW');--admin232