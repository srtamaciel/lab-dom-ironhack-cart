// ITERATION 1

function updateSubtotal(product) {

  //... your code goes here
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  
  let subtotal = price.innerText * quantity.value
  
  product.querySelector('.subtotal span').innerText = subtotal
  
  return subtotal
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll('.product')
  
  let totalPrice = 0
  
  allProducts.forEach((product)=> {
  totalPrice += updateSubtotal(product)
  })  

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerText = totalPrice
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const parentTarget = event.currentTarget.parentNode;
  let productTarget = parentTarget.parentNode;
  productTarget.remove()

  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeButton = document.querySelectorAll('.btn-remove')
  removeButton.forEach((button)=> {
    button.addEventListener('click', removeProduct)
  })

  //... your code goes here
});
