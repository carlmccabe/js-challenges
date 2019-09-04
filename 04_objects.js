/*

JSON Practice
-------------

JSON can be parsed and turned into a plain old JS object.
This makes it much easier to read from and write to.

Check out the shop JS object and run the tests.

Complete methods below, one by one.

TEST: npm test

*/

const drinkShop = {
  title: "My Fancy Drink Shop",
  products: [
    {
      id: 1,
      title: "Coca Cola",
      price: 4.32
    },
    {
      id: 2,
      title: "Fanta",
      price: 4.22
    },
    {
      id: 3,
      title: "Lift",
      price: 4.11
    }
  ],
  customers: {
    "jane@doe.com": {
      firstName: "John",
      lastName: "Doe",
      address: {
        streetNumber: 12,
        street: "Main St",
        city: "Brisbane",
        postcode: 4000
      },
      orders: [
        {
          id: 61721,
          status: "delivered",
          items: [
            {
              productId: 1,
              qty: 2
            },
            {
              productId: 3,
              qty: 1
            },
            {
              productId: 2,
              qty: 3
            }
          ],
          notes: "Please leave on doorstep"
        },
        {
          id: 82721,
          status: "delivered",
          items: [
            {
              productId: 4,
              qty: 100
            }
          ],
          notes: "Really enjoying coke ATM"
        }
      ]
    }
  }
};
const shop = {
  shopTitle: () => {
    // Return the shop title (you have access to the shop object from here)
    return drinkShop.title;
  },

  upperCase: string => {
    // Return an uppercase version of string
    return string.toUpperCase();
  },

  upperCaseShopTitle: () => {
    // Return an uppercase shop title.
    // Don't repeat yourself. Use the two functions you just built!
    return shop.upperCase(shop.shopTitle());
  },

  productById: productId => {
    // Return a specific product object
    // When product not found return null
    let prodArr = drinkShop.products;
    for (let product of prodArr) {
      if (product.id === productId) {
        return product;
      }
    }
    return null;
  },

  productCost: productId => {
    // given a product id, return its cost. DRY ;)
    return shop.productById(productId).price;
  },

  formatAddress: email => {
    // return(drinkShop.customers.'jane@doe.com'.address.(streetNumber, street, city, postcode))
    // Given a user's email, return their address in the format:
    // streetNumber street, city, postcode
    // E.g. 10 Amelia St, Sydney, 2000
    // Hint: some destructuring might save you a few lines.
    // Return null if customer not found
    let customer = drinkShop.customers[email];
    if (customer) {
      let { streetNumber, street, city, postcode } = drinkShop.customers[
        email
      ].address;
      return `${streetNumber} ${street}, ${city}, ${postcode}`;
    } else {
      return null;
    }
  },

  customerOrderById: (email, orderId) => {
    let customer = drinkShop.customers[email];
    let orders = customer ? customer.orders : [];

    for (let order of orders) {
      if (order.id === orderId) {
        return order;
      }
    }
    return null;
  },

  totalCost: (email, orderId) => {
    // Return the total cost of an order.
    let order = shop.customerOrderById(email, orderId);
    if (order === null) {
      return 0;
    }
    let items = order.items;
    let total = 0;
    for (let item of items) {
      total += shop.productCost(item.productId) * item.qty;
    }
    return total;
  },

  addProduct: (id, title, price) => {
    // Add a product to the shop.
    let newProduct = { id: id, title: title, price: price };
    drinkShop.products.push(newProduct);
    return true;
  },

  updateProductPrice: (id, newPrice) => {
    // Update the price of a specific product

    update = drinkShop.products[id];
    update.price = newPrice;
    drinkShop.products[id].push(update);

    return true;
  }
};

module.exports = shop;
