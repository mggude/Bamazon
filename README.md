# Bamazon
An Amazon-like storefront app that takes in orders from customers and depletes stock from the store's inventory using mySQL and node.

The customer app begins by prompting the user with two messages: 
* The first asks for the ID of the product the user would like to buy.
* The second asks how many units of the product the user would like to buy.

Once the customer has placed the order, the app checks if the store has enough of the product to meet the customer's request.
* If not, the app informs the user of the insufficient quantity, and then prevents the order from going through.
* If the store does have enough of the product, the customer's order is fulfilled.

![Bamazon Gif](bamazonCustomer.gif)
