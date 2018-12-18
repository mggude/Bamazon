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
    connection.query("SELECT item_id, product_name, price FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
    });
}

function viewLowInventory() {
  // If a manager selects View Low Inventory, then it should list all items with an inventory count lower than five.  
  connection.query("SELECT stock_quantity FROM products WHERE LENGTH(stock_quantity) < 5", function (err, res) {
    console.log(res);
    if (err) throw err;
    // Log all results of the SELECT statement
    // console.table(res);
    // if () {

    // } else {

    // }
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

