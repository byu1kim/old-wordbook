
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
  checked BIT(1) NOT NULL DEFAULT 0,
  eng VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  kor VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

PORT=8080 MYSQL_HOST="127.0.0.1" MYSQL_USER="wordbook_user" MYSQL_PASSWORD='MyPassword1!' MYSQL_DATABASE="wordbook"

-- Change a database
ALTER DATABASE wordbook
  CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci; 

-- Change a table
ALTER TABLE words 
  CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci; 

-- Change a column
ALTER TABLE words
  CHANGE kor VARCHAR(255) 
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


