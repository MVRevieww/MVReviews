-- 1) Sign In
select email,mobile,password from users;

-- 2) Sign Up  
insert into users (first_name,last_name,email,password,mobile,birth) values
('Prashantkumar','Dudhmal','pk@gmail.com','password','8010842682','2002-12-30');

--get Profile
select * from users where id = 1;

--3) Edit Profile
UPDATE users
SET
    first_name = 'newPk',
    last_name = 'newLastPk',
    email = 'newPk@gmail.com',
    mobile = '8010842682',
    birth = '2002-12-30'
WHERE
    id = 1;

--4) Change Password
UPDATE users SET password= 'lol' WHERE id = 1;

--5) Display All Movies
select * FROM movies;

--6) Create A Review
INSERT INTO reviews(movie_id,review,rating,user_id,modified) values
(1,'Falana Dimka Movie',8,1,null);

--7)Edit Review
UPDATE reviews
SET
    review = 'new Review',
    rating = 0
where
    id = 1;

--8)Delete Review
DELETE FROM reviews WHERE id = 1;

--9)Display All Reviews
Select * From reviews;

--10)display user specific reviews
Select movie_id,review,rating,modified from reviews where user_id = 1;

--11)Display Reviews Shared with me
SELECT r.movie_id,r.review,r.rating,r.user_id,r.modified from shares s Natural Join reviews r on s.user_id=r.user_id;
--12) Share review
INSERT INTO shares(review_id,user_id) VALUES (1,1);