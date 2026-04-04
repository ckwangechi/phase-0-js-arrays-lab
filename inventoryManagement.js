// Write your code here

// Create product inventory array
let products = ["Laptop", "Phone", "Headphones", "Monitor"]

// Access product information
function logFirstProduct() {
  console.log(products[0]);
}

// Add a product
function addProduct(productName) {
  products.push (productName);

}

// Update product information
function updateProductName(index, productName) {
  products[index] = productName;
}

// Remove a product
function removeLastProduct() {
  products.pop();
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
