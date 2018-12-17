// DROP DATABASE IF EXISTS bamazon;
// CREATE database bamazon;
// USE bamazon;

// CREATE TABLE products (
// 	item_id INTEGER(10) NOT NULL AUTO_INCREMENT,
//     product_name VARCHAR(30) NOT NULL,
//     department_name VARCHAR(30) NOT NULL,
//     price DECIMAL(10,4) NOT NULL,
//     stock_quantity INT (10) NOT NULL,
//     PRIMARY KEY (item_id)
// );

// INSERT INTO products (product_name, department_name, price, stock_quantity)
// VALUES ("hammock", "outdoors", 50.00, 100), ("laptop", "electronics", 1000.00, 50), ("yoga mat", "athletics", 50.00, 500), ("TV", "electronics", 500.00, 200),
// ("tent", "outdoors", 200.00, 75), ("snowboard", "athletics", 400.00, 40), ("hairdryer", "electronics", 50.00, 300), ("turntable","electronics", 100.00, 60),
// ("candle", "homegoods", 20.00, 300), ("diffuser", "homegoods", 50.00, 60);

var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    displayItems();
    // createProduct();
});

function customerOrder() {
    // Update the SQL database to reflect the remaining quantity.
    // Once the update goes through, show the customer the total cost of their purchase.
}

// display items
// First display all of the items available for sale. Include the ids, names, and prices of products for sale.
function displayItems() {
    console.log("Displaying all items...\n");
    connection.query("SELECT item_id, product_name, price FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Please enter the ID of the product you would like to buy!",
                    name: "item_id"
                }, {
                    type: "input",
                    message: "How many units would you like to buy?",
                    name: "num_units"
                }
            ]).then(function (inquirerResponse) {
                if (err) throw err;
                console.log(inquirerResponse);
                console.log(inquirerResponse.num_units);
                console.log(inquirerResponse.item_id);
                connection.query(`SELECT stock_quantity FROM products WHERE item_id = '${inquirerResponse.item_id}'`, function (err, res) {
                    if (err) throw err;
                    console.log(res);
                })
                // Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
                // If your store does have enough of the product, you should fulfill the customer's order.

                // If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
                // console.log("Insufficient quantity!");
                // connection.end();
                
                

                
                // if (inquirerResponse.num_units > ) {

                // } else {
                //     var query = connection.query("SELECT * FROM items", function (err, res) {
                //         if (err) throw err;
                //         // Log all results of the SELECT statement
                //         console.log(res);
                //     })
                // };
            });
    });
}



