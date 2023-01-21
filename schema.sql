
-- Create the database
DROP DATABASE IF EXISTS wordbook;
CREATE DATABASE wordbook;
USE wordbook;

-- Create a user that can access the database
DROP USER IF EXISTS 'wordbook_user'@'localhost';
CREATE USER 'wordbook_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'MyPassword1!';
GRANT ALL PRIVILEGES ON wordbook.* TO 'wordbook_user'@'localhost';

-- Create all the tables
DROP TABLE IF EXISTS words;

CREATE TABLE words (
  id integer PRIMARY KEY AUTO_INCREMENT,
  eng VARCHAR(255) NOT NULL,
  kor VARCHAR(255) NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);