DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;
USE bamazon;

CREATE TABLE products (
	item_id INTEGER(10) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL(10,4) NOT NULL,
    stock_quantity INT (10) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("hammock", "outdoors", 50.00, 100), ("laptop", "electronics", 1000.00, 50), ("yoga mat", "athletics", 50.00, 500), ("TV", "electronics", 500.00, 200),
("tent", "outdoors", 200.00, 75), ("snowboard", "athletics", 400.00, 40), ("hairdryer", "electronics", 50.00, 300), ("turntable","electronics", 100.00, 60),
("candle", "homegoods", 20.00, 300), ("diffuser", "homegoods", 50.00, 60);

SELECT * FROM products;