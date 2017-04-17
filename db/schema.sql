CREATE DATABASE burgers_db;

USE burgers_db;

/*table goes here*/
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN,
    ts TIMESTAMP default CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
    );
