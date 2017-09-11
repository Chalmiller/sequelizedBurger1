CREATE DATABASE burgers_db;

 USE burgers_db;

 -- # If the table already exists, remove it before trying to create the table again
-- DROP TABLE IF EXISTS burgers;
 #
-- CREATE the burgers TABLE
CREATE TABLE burgers(
	id INT AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(45) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT false,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id)
);
