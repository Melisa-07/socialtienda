document.addEventListener('DOMContentLoaded', function () {

  var productsListContainer = document.getElementById('productsList');
  var filterButtons = document.querySelectorAll('.btn-filter');
  let carrito = [];
  let verCarrito = document.getElementById('verCarrito');
  let modalContainer = document.getElementById('modalContainer');
  let quantityCart = document.getElementById('quantityCart');

  function createElement(tag, className, textContent, src) {
    var element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (textContent) element.textContent = textContent;
    if (src) element.src = src;
    return element;
  }

  function filterProducts(category) {
    var productItems = document.querySelectorAll('.product_item');
    // console.log('producto por category: ', category);
    productItems.forEach(function (item) {
      if (category === 'all' || item.getAttribute('category') === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  
  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var category = button.getAttribute('category');
      filterProducts(category);
    });
  });

  productos.forEach(function (producto) {
    var productElement = createElement('div', 'product_item');
    productElement.setAttribute('category', producto.category);

    var visibilityLink = createElement('a', 'visibility-link');
    visibilityLink.href = 'details-product.html';
    var visibilityIcon = createElement('span', 'material-symbols-outlined');
    visibilityIcon.textContent = 'visibility';
    visibilityLink.appendChild(visibilityIcon);
    productElement.appendChild(visibilityLink);

    productElement.appendChild(createElement('img', undefined, undefined, producto.image));
    productElement.appendChild(document.createElement('hr'));
    
    var productContent = createElement('div', 'contenido_producto');
    productContent.appendChild(createElement('h2', undefined, producto.title));
    productContent.appendChild(createElement('span', undefined, '$ ' + producto.price));
    
    if (producto.size) {
      productContent.appendChild(document.createElement('br'));
      productContent.appendChild(createElement('span', undefined, 'Tallas: ' + producto.size));
    }

    productContent.appendChild(createElement('p', undefined, producto.description));
    productElement.appendChild(productContent);

    var buttonContainer = createElement('div', 'button-container');
    
    var addToCartButton = createElement('button', 'btn_comprar', 'Agregar');
    var cartIcon = createElement('span', 'material-symbols-outlined');
    cartIcon.textContent = 'add_shopping_cart';
    
    addToCartButton.appendChild(cartIcon);
    buttonContainer.appendChild(addToCartButton);
    
    productElement.appendChild(buttonContainer);
    productsListContainer.appendChild(productElement);
    addToCartButton.addEventListener('click', () => {
      const repeat = carrito.some((repeatProduct) => repeatProduct.id === producto.id);
      console.log('false si no está, true si se repite', repeat);
      if (repeat){
        carrito.map((prod)=> {
          if (prod.id === producto.id) {
            prod.quantity++;
          }
        })      
      }
      else{       
        carrito.push({
          id: producto.id,
          title: producto.title,
          price: producto.price,
          size: producto.size,
          category: producto.category,
          quantity : producto.quantity
        });
      };
      console.log('click agregar', carrito);
      carritoCounter();
  });
  });

  verCarrito.addEventListener('click', () => {
    modalContainer.innerHTML = '';
    modalContainer.style.display = 'flex';
    // console.log('click verCarrito funciona');
    const modalHeader = document.createElement('div');
    modalHeader.className = "modal_header";
    modalHeader.innerHTML = `<h1 class="titulo_carrito">Productos seleccionados</h1>`;
    modalContainer.append(modalHeader);
  
    const modalButton = document.createElement('h2');
    modalButton.innerText = 'X';
    modalButton.className = ("x_modal");
    modalHeader.append(modalButton);
  
    modalButton.addEventListener('click', () => {
      modalContainer.style.display = 'none';
    });
  
    carrito.forEach((producto) => {
      let carritoContent = document.createElement('div');
      carritoContent.className = 'modal_content';
      carritoContent.innerHTML = `<img src="${producto.image}">
      <h3>${producto.title}</h3>
      <h4>${producto.price}</h4>
      <p>Cantidad: ${producto.quantity}</p>
      <p>Total: ${producto.quantity * producto.price}</p>
      `;

      modalContainer.append(carritoContent);
      console.log(carrito.length);
        
      let eliminarProd = document.createElement('span');
      eliminarProd.innerText = "X";
      eliminarProd.className = "delete_element";
      carritoContent.append(eliminarProd);
      
      const eliminarProducto = () => {      
        carritoContent.remove();  
        for (let i=0; i<carrito.length;i++) {
          if (carrito[i].id === producto.id) {
            carrito.splice(i, 1);
            break;
          }
        }
      carritoCounter();
      console.log('eliminar producto', carrito);
      }
      eliminarProd.addEventListener('click', eliminarProducto)
    })   
    const total = carrito.reduce((acumulador, p ) => acumulador + p.price.toFixed() * p.quantity, 0);
    const totalPrice = document.createElement('div');
    totalPrice.className = 'total_content'
    totalPrice.innerHTML = `Total a pagar: $ ${total} `;
    modalContainer.append(totalPrice);
  }); 
  console.log('carrito', carrito);

  const carritoCounter = () => {
    quantityCart.style.display = 'block';
    quantityCart.innerText = carrito.length;
  }
});