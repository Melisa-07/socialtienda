document.addEventListener('DOMContentLoaded', function () {

  var productsListContainer = document.getElementById('productsList');

  let carrito = JSON.parse(localStorage.getItem(('carrito'))) || [] ;
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

// FILTRO POR CATEGORIA 
  function filterProducts() {
    var categorySelect = document.getElementById('categoryFilter');
    var selectedCategory = categorySelect.value;
    var productItems = document.querySelectorAll('.product_item');
    // console.log('producto por category: ', categorySelect.value);
    productItems.forEach(function (item) {
      if (selectedCategory === 'all' || item.getAttribute('category') === selectedCategory) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  var categorySelect = document.getElementById('categoryFilter');
  categorySelect.addEventListener('change', filterProducts);

// FILTRO POR PRECIO ASC/DESC 
  function filterPrice() {
    var priceSelect = document.getElementById('priceFilter');
    var selectedPrice = priceSelect.value;
    var productItems = document.querySelectorAll('.product_item');
    var sortedProducts;

    if (selectedPrice === 'asc') {
      sortedProducts = Array.from(productItems).sort((a, b) => {
        var priceA = parseFloat(a.querySelector('.price-product').textContent.replace('$', ''));
        var priceB = parseFloat(b.querySelector('.price-product').textContent.replace('$', ''));
        return priceA - priceB;
      });
    } else if (selectedPrice === 'desc') {
      sortedProducts = Array.from(productItems).sort((a, b) => {
        var priceA = parseFloat(a.querySelector('.price-product').textContent.replace('$', ''));
        var priceB = parseFloat(b.querySelector('.price-product').textContent.replace('$', ''));
        return priceB - priceA;
      });
    } else {
      sortedProducts = Array.from(productItems);
    }

    productsListContainer.innerHTML = '';
    sortedProducts.forEach((item) => {
      productsListContainer.appendChild(item);
    });
  }

  var priceSelect = document.getElementById('priceFilter');
  priceSelect.addEventListener('change', filterPrice);

// FILTRO POR BUSCADOR
  function filterSearch() {
    var inputSearch = document.getElementById('productSearch');
    var searchTerm = inputSearch.value.trim().toLowerCase();
    var productItems = document.querySelectorAll('.product_item');
    var noResultsMessage = document.getElementById('noResultsMessage');
    var hasResults = false;
    
    productItems.forEach(function (item) {
      var title = item.querySelector('.title-product').textContent.toLowerCase();
      var description = item.querySelector('.description-product').textContent.toLowerCase();
      var category = item.getAttribute('category').toLowerCase();
      var sizes = item.getAttribute('data-sizes').toLowerCase();
  
      if (title.includes(searchTerm) || description.includes(searchTerm) || 
          category.includes(searchTerm) || sizes.includes(searchTerm))
      {
        item.style.display = 'block';
        hasResults = true; 
      } else {
        item.style.display = 'none';
      }
    });
    if (!hasResults) {
      noResultsMessage.style.display = 'flex';
    } else {
      noResultsMessage.style.display = 'none';
    }
  }
  var searchButton = document.getElementById('searchButton');
  searchButton.addEventListener('click', filterSearch);

  // ESTRUCTURA PRODUCTOS
  productos.forEach(function (producto) {
    var productElement = createElement('div', 'product_item');
    productElement.setAttribute('category', producto.category);
    productElement.setAttribute('data-colors',producto.colors);
    productElement.setAttribute('data-sizes', producto.sizes);
    productElement.setAttribute('data-selected-color', producto.selectedColor);
    productElement.setAttribute('data-selected-size', producto.selectedSize);
  

    var visibilityLink = createElement('a', 'visibility-link');
    visibilityLink.href = 'details-product.html';
    var visibilityIcon = createElement('span', 'material-symbols-outlined');
    visibilityIcon.textContent = 'visibility';
    visibilityLink.appendChild(visibilityIcon);
    productElement.appendChild(visibilityLink);

    productElement.appendChild(createElement('img', 'img-product', '', producto.image));
    productElement.appendChild(document.createElement('hr'));
    
    var productContent = createElement('div', 'contenido_producto');
    productContent.appendChild(createElement('h2', 'title-product', producto.title));
    productContent.appendChild(createElement('span', 'price-product', '$ ' + producto.price));
    
    if (producto.size) {
      productContent.appendChild(document.createElement('br'));
      productContent.appendChild(createElement('span', 'sizes-prodcut', 'Talles: ' + producto.size));
    }

    productContent.appendChild(createElement('p', 'description-product', producto.description));
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
      // console.log('false si no está, true si se repite', repeat);
      if (repeat) {
        const existingProduct = carrito.find((product) => product.id === producto.id);
  
        const modalAlertContainer = document.createElement('div');
        modalAlertContainer.className = 'product_already_added_modal_container';
        modalAlertContainer.style.display = 'flex';
  
        const modalContent = document.createElement('div');
        modalContent.className = 'product_already_added_modal_content';
        modalContent.innerHTML = `"${existingProduct.title}" ya está agregado, puede modificar detalles desde el carrito.`;
        modalAlertContainer.appendChild(modalContent);
  
        const modalButton = document.createElement('button');
        modalButton.textContent = 'check';
        modalButton.className = 'material-symbols-outlined btn_modal_check';
        modalButton.addEventListener('click', () => {
          modalAlertContainer.style.display = 'none';
        });
        modalAlertContainer.appendChild(modalButton);
        productElement.appendChild(modalAlertContainer);

      } else {
        carrito.push({
          id: producto.id,
          image: producto.image,
          title: producto.title,
          price: producto.price,
          sizes: producto.sizes,
          category: producto.category,
          quantity : producto.quantity
        });
      };
      // console.log('click agregar', carrito);
      carritoCounter();
      carritoStorage();
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
    modalButton.innerText = 'close';
    modalButton.className = "material-symbols-outlined x_modal";
    modalHeader.append(modalButton);
  
    modalButton.addEventListener('click', () => {
      modalContainer.style.display = 'none';
    });

    function createColorOptions(colors, selectedColor) {
      if (colors)
      return colors.map(color => `<option value="${color}" ${color === selectedColor ? 'selected' : ''}>${color}</option>`).join('');
    }
    function createSizeOptions(sizes, selectedSize) {
      if (sizes) 
      return sizes.map(size => `<option value="${size}" ${size === selectedSize ? 'selected' : ''}>${size}</option>`).join('');

    }

    carrito.forEach((producto) => {
      let carritoContent = document.createElement('div');
      carritoContent.className = 'modal_content';
      carritoContent.innerHTML = `<img src="${producto.image}">
      <h3>${producto.title}</h3>
      <h4>${producto.price}</h4>
      <div class="select-container">
      <label for="color-select">Color:</label>
      <select id="color-select" class="color-select">
      ${createColorOptions(producto.colors, producto.selectedColor)}
      </select>
    </div>
    <div class="select-container">
      <label for="size-select">Talla:</label>
      <select id="size-select" class="size-select">
      ${createSizeOptions(producto.sizes, producto.selectedSize)}
      </select>
    </div>
      <span class="material-symbols-outlined remove">remove</span>
      <p>${producto.quantity}</p>
      <span class="material-symbols-outlined add">add</span>
      <p class="total_same_product">Total: ${(producto.quantity * producto.price).toFixed(2)}</p>      
      `; 
    
      modalContainer.append(carritoContent);

      let colorSelect = carritoContent.querySelector('.color-select');
      let sizeSelect = carritoContent.querySelector('.size-select');
    
      colorSelect.addEventListener('change', () => {
        producto.selectedColor = colorSelect.value;
        // console.log('color seleccionado', colorSelect); fix
        carritoCounter();
        carritoStorage();
        actualizarTotal();
      });
    
      sizeSelect.addEventListener('change', () => {
        producto.selectedSize = sizeSelect.value;
        // console.log('talle seleccionado', sizeSelect.value); ok
        carritoCounter();
        carritoStorage();
        actualizarTotal();
      });
    
      let restar = carritoContent.querySelector('.remove');
      restar.addEventListener('click', () => {
        if (producto.quantity !== 1) {
          producto.quantity--;
        }
        carritoContent.querySelector('p').innerText = producto.quantity;
        const totalProducto = carritoContent.querySelector('.total_same_product');
        totalProducto.innerText = `Total: ${(producto.quantity * producto.price).toFixed(2)}`;
        carritoCounter();
        carritoStorage();
        actualizarTotal();
      });
    
      let sumar = carritoContent.querySelector('.add');
      sumar.addEventListener('click', () => {
        producto.quantity++;
        carritoContent.querySelector('p').innerText = producto.quantity;
        const totalProducto = carritoContent.querySelector('.total_same_product');
        totalProducto.innerText = `Total: ${(producto.quantity * producto.price).toFixed(2)}`;
        carritoCounter();
        carritoStorage();
        actualizarTotal();
      });
    
      let eliminarProd = document.createElement('span');
      eliminarProd.innerText = "delete";
      eliminarProd.className = "material-symbols-outlined delete_element";
      carritoContent.append(eliminarProd);
      
      const eliminarProducto = () => {      
        carritoContent.remove();  
        for (let i=0; i<carrito.length;i++) {
          if (carrito[i].id === producto.id) {
            carrito.splice(i, 1);
            break;
          }
        } 
          var hasProducts = carrito.length > 0;
          if (!hasProducts) {
            noProductsMessage.style.display = 'flex';
          } else {
            noProductsMessage.style.display = 'none';
          }
        carritoCounter();
        carritoStorage();
        actualizarTotal();      
      }
      eliminarProd.addEventListener('click', eliminarProducto);
    }); 
          
      const noProductsMessage = document.createElement('div');
      noProductsMessage.className = 'modal_content empty_cart';
      noProductsMessage.textContent = 'No hay productos en el carrito';
      modalContainer.appendChild(noProductsMessage);

      var hasProducts = carrito.length > 0;
      if (!hasProducts) {
        noProductsMessage.style.display = 'flex';
      } else {
        noProductsMessage.style.display = 'none';
      }

    const total = carrito.reduce((acumulador, p ) => acumulador + p.price * p.quantity, 0);
    const totalPrice = document.createElement('div');
    totalPrice.className = 'total_content'
    totalPrice.innerHTML = `Total a pagar: $ ${total.toFixed(2)} `;
    modalContainer.append(totalPrice);

    const actualizarTotal = () => {
      const nuevoTotal = carrito.reduce((acumulador, p) => acumulador + p.price * p.quantity, 0);
      totalPrice.innerHTML = `Total a pagar: $ ${nuevoTotal.toFixed(2)} `;
    };
  }); 
  // console.log('carrito: ', carrito);

  const carritoCounter = () => {
    quantityCart.style.display = 'block';
    const carritoLength = carrito.length;
    localStorage.setItem('carritoLength', JSON.stringify(carritoLength));
    quantityCart.innerText = JSON.parse(localStorage.getItem('carritoLength'));
    }
    const carritoStorage = () => {
      localStorage.setItem('carrito', JSON.stringify(carrito)); // guarda los elementos del carrito en el localStorage
    }
    JSON.parse(localStorage.getItem('carrito')); // toma los elementos del carrito guardados en el set
    
  carritoCounter();
});
