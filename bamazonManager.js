// List a set of menu options:
// View Products for Sale
// View Low Inventory
// Add to Inventory
// Add New Product


// If a manager selects Add to Inventory, your app should display a prompt that will let the manager "add more" of any item currently in the store.
// If a manager selects Add New Product, it should allow the manager to add a completely new product to the store.

var inquirer = require("inquirer");
var mysql = require("mysql");
var config = require("./config/config.js");

var connection = mysql.createConnection(config);

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    start();
});

function viewProducts() {
    // If a manager selects View Products for Sale, the app should list every available item: the item IDs, names, prices, and quantities.
    console.log("Displaying all items...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        return start();
    });
}

function viewLowInventory() {
    // If a manager selects View Low Inventory, then it should list all items with an inventory count lower than five.  
    connection.query("SELECT * FROM products WHERE stock_quantity < 5", function (err, res) {
        if (err) throw err;
        console.table(res);
        return start();
    });
}

function addToInventory() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
    });
    inquirer
        .prompt([
            {
                name: "id",
                type: "input",
                message: "Please enter the id number of the product whose inventory you would like to update."
            },
            {
                name: "quantity",
                type: "input",
                message: "How many units would you like to have in stock?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(function (answer) {
            // when finished prompting, insert a new item into the db with that info
            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                    {
                        stock_quantity: answer.quantity
                    },
                    {
                        item_id: answer.id
                    }
                ],
                function (error) {
                    if (error) throw error;
                    console.log("Product updated successfully!");
                    start();
                }
            );
        });
}

function addNewProduct() {
    inquirer
        .prompt([
            {
                name: "item",
                type: "input",
                message: "What is the name of the new item?"
            },
            {
                name: "department",
                type: "input",
                message: "In which department does the new item belong?"
            },
            {
                name: "price",
                type: "input",
                message: "What is the price of one unit?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            },
            {
                name: "quantity",
                type: "input",
                message: "How many units would you like to add?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }

        ])
        .then(function (answer) {
            // when finished prompting, insert a new item into the db with that info
            connection.query(
                "INSERT INTO products SET ?",
                {
                    product_name: answer.item,
                    department_name: answer.department,
                    price: answer.price,
                    stock_quantity: answer.quantity
                },
                function (err) {
                    if (err) throw err;
                    console.log("Your product was added successfully!");
                    // re-prompt the user for if they want to bid or post
                    start();
                }
            );
        });
}


function start() {
    inquirer
        .prompt({
            name: "managerTODO",
            type: "rawlist",
            message: "What would you like to do?",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
        })
        .then(function (answer) {
            // based on their answer, either call the bid or the post functions
            switch (answer.managerTODO) {
                case "View Products for Sale":
                    viewProducts();
                    break;
                case "View Low Inventory":
                    viewLowInventory();
                    break;
                case "Add to Inventory":
                    addToInventory();
                    break;
                case "Add New Product":
                    addNewProduct();
                    break;
                default:
                    console.log("Not a valid choice");
            }
        });
}


