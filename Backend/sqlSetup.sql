create database mvreview;

use mvreview;

create table users(
    id int primary key auto_increment,
    first_name varchar(20),
    last_name varchar(20),
    email varchar(40) unique,
    password varchar(100),
    mobile varchar(10),
    birth Date
);
create table shares(
    review_id int,
    user_id int
);

CREATE TABLE reviews (
    id INT PRIMARY KEY auto_increment,
    movie_id INT,
    review VARCHAR(4000),
    rating int,
    user_id INT,
    modified DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

create table movies(
    id int primary key auto_increment,
    title varchar(30),
    mvrelease Date
);

INSERT INTO movies (id, title, mvrelease) VALUES
(1, 'The Shawshank Redemption', '1994-09-23'),
(2, 'The Godfather', '1972-03-24'),
(3, 'The Dark Knight', '2008-07-18'),
(4, 'Pulp Fiction', '1994-10-14'),
(5, 'The Lord of the Rings', '2001-12-19'),
(6, 'Forrest Gump', '1994-07-06'),
(7, 'Inception', '2010-07-16'),
(8, 'The Matrix', '1999-03-31'),
(9, 'Interstellar', '2014-11-07'),
(10, 'Gladiator', '2000-05-05'),
(11, 'Fight Club', '1999-10-15'),
(12, 'Spirited Away', '2001-07-20'),
(13, 'Parasite', '2019-05-30'),
(14, 'Whiplash', '2014-10-10'),
(15, 'The Lion King', '1994-06-24'),
(16, 'Goodfellas', '1990-09-21'),
(17, 'Saving Private Ryan', '1998-07-24'),
(18, 'The Green Mile', '1999-12-10'),
(19, 'Django Unchained', '2012-12-25'),
(20, 'Blade Runner 2049', '2017-10-06');