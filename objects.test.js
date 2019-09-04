const shop = require("./04_objects");

console.log(typeof shop);

describe("shopTitle", () => {
  it("Should return the shop title", () => {
    expect(shop.shopTitle()).toBe("My Fancy Drink Shop");
  });
});

describe("upperCase", () => {
  it("Should return an upper case string", () => {
    expect(shop.upperCase("heLLo")).toBe("HELLO");
  });
});

describe("upperCaseShopTitle", () => {
  it("Should return an upper case shop title", () => {
    expect(shop.upperCaseShopTitle()).toBe("MY FANCY DRINK SHOP");
  });
});

describe("productById", () => {
  it("Should return the correct product", () => {
    let product = shop.productById(1);
    expect(product.id).toBe(1);
    expect(product.title).toBe("Coca Cola");
  });
  it("Should return null when product not found", () => {
    expect(shop.productById(999)).toBe(null);
  });
});

describe("productCost", () => {
  it("Should return the correct product price", () => {
    expect(shop.productCost(1)).toBe(4.32);
  });
});

describe("formatAddress", () => {
  it("Should format the given user's address", () => {
    expect(shop.formatAddress("jane@doe.com")).toBe(
      "12 Main St, Brisbane, 4000"
    );
  });
});

describe("orderById", () => {
  it("Should return the correct order for the orderId and customer", () => {
    let order = shop.customerOrderById("jane@doe.com", 61721);
    expect(order.id).toBe(61721);
    expect(order.status).toBe("delivered");
  });
  it("Should return null when the customer isn't foumnd", () => {
    expect(shop.customerOrderById("nonexsistent@email.com", 61721)).toBe(null);
  });
  it("Should return null when the order id isn't found", () => {
    expect(shop.customerOrderById("jane@doe.com", 99999)).toBe(null);
  });
});

describe("totalCost", () => {
  it("Should return the total cost of a customer's order", () => {
    expect(shop.totalCost("jane@doe.com", 61721)).toBe(25.41);
  });
});

describe("addProduct", () => {
  it("Should add a product", () => {
    expect(shop.addProduct(5, "Example", 12.34)).toBe(true);
    expect(shop.productCost(5)).toBe(12.34);
  });
});

describe("updateProductPrice", () => {
  it("Should update a specific product's price", () => {
    expect(shop.updateProductPrice(1, 33.44)).toBe(true);
    expect(shop.productCost(1)).toBe(33.44);
  });
});
