(async function fetchData() {
  const data = await fetch("https://fakestoreapi.com/products");
  const res = await data.json();
  console.log(res);
  let dummyData = [...res.slice(0, 10)];
  //   console.log(dummyData);
  console.log(dummyData);
  const productsSection = document.querySelector(".products-section");

  let cart = [];
  // Displaying the data
  let finalElement = ``;
  dummyData.forEach((item) => {
    console.log(item.image);
    finalElement += `
    <div class="single-product">
        <img src=${item.image} alt="product-image"/>
        <div class=product-info>
        <div class=product-specs>
          <p class="product-title">${item.title.slice(0, 20)}</p>
          <p class="product-title">${item.price} $</p>
        </div>
        <img   src=${"Add_Cart.png"} class="cart-icon" />
        
        </div>
        


    </div>
    `;
  });
  productsSection.innerHTML = finalElement;

  // const addToCart = document.querySelectorAll(".cart-icon");
  // console.log(addToCart);

  //Adding an item to cart:

  console.log(cart);

  function addItem(item) {
    // cart = [...cart, item];
    console.log(item);
    displayCart();
  }

  // Remmove from cart
  function removeCart(item) {
    cart = cart.filter((item) => item.id !== item);
  }

  // Filter

  function displayCart() {
    if (cart.length === 0) {
      document.querySelector(".cart-products").innerHTML = "Your cart is empty";
    } else {
      document.querySelector(".cart-products").innerHTML = cart.map((item) => {
        let { image, price, title } = item;
        return `<div class=cart-item>
          
          <img src=${image} alt="product-image"/>
        <div class=product-info>
        <div class=product-specs>
          <p class="product-title">${title.slice(0, 20)}</p>
          <p class="product-title">${price} $</p>
        </div></div>`;
      });
    }
  }

  // addToCart.forEach((item) => item.addEventListener("click", addItem(e)));
})();
