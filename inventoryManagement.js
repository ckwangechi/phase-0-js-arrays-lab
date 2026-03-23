// Write your code here

// Create product inventory array
let products = ["Laptop", "Phone", "Headphones", "Monitor"]

// Access product information
function logFirstProduct() {
  console.log("first product:", products[0]);
}

// Add a product
function addProduct() {
  console.log(productName + "added");
}

// Update product information
function updateProductName() {
  if (index>=0 && index < products.length) {
    console.log("updating", products[index], "to", newName)
  }
  else{
   console.log("Invalid index"); 
  }
}

// Remove a product
function removeLastProduct() {
  let removed = products.pop();
  console.log("removed product:", removed);
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
