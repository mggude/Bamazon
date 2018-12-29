# Bamazon
An Amazon-like storefront app that takes in orders from customers and depletes stock from the store's inventory using mySQL and node.

## Bamazon Customer App
The customer app begins by prompting the user with two messages: 
* The first asks for the ID of the product the user would like to buy.
* The second asks how many units of the product the user would like to buy.

Once the customer has placed the order, the app checks if the store has enough of the product to meet the customer's request.
* If not, the app informs the user of the insufficient quantity, and then prevents the order from going through.
* If the store does have enough of the product, the customer's order is fulfilled.

![Bamazon Gif](bamazonCustomer.gif)

## Bamazon Manager App
Running the manager app will:
* List a set of menu options:
    * View Products for Sale
    * View Low Inventory
    * Add to Inventory
    * Add New Product
* If a manager selects View Products for Sale, the app will list every available item: the item IDs, names, prices, and quantities.
* If a manager selects View Low Inventory, then it will list all items with an inventory count lower than five.
* If a manager selects Add to Inventory, the app will display a prompt that will let the manager "add more" of any item currently in the store.
* If a manager selects Add New Product, it will allow the manager to add a completely new product to the store.

[Link to Demo Video](https://drive.google.com/file/d/1UkH9chXOG8N268CV7CVEnIBuP0J9jql3/view)
