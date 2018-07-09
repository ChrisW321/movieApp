CREATE DATABASE movies;

USE movies;

CREATE TABLE movies (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title text NOT NULL
);

INSERT INTO movies(title) values ('test sql title');