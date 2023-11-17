const productos = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtJLdLLsQMOnaBm9Om5mnMkZ3UQLk5vqYrA&usqp=CAU",
      title: "Producto 1",
      price: 19.99,
      description: "100% algodón, todas tallas sadasdasdad23123131132",
      size: "S, M, L",
      category: "remeras"
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtJLdLLsQMOnaBm9Om5mnMkZ3UQLk5vqYrA&usqp=CAU",
      title: "Producto 2",
      price: 29.99,
      description: "100% algodón, todas  tallas sadasdadsad23123131132",
      size: "XS, XL",
      category: "shorts"
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtJLdLLsQMOnaBm9Om5mnMkZ3UQLk5vqYrA&usqp=CAU",
      title: "Producto 3",
      price: 39.99,
      description: "100% algodón, todas tallas sadasdasds231231311329874",
      size: "S, M, Xl",
      category: "pantalones"
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtJLdLLsQMOnaBm9Om5mnMkZ3UQLk5vqYrA&usqp=CAU",
      title: "Producto 4",
      price: 49.99,
      description: "Descripción del Producto 4",
      size: "S, M, Xl",
      category: "shorts"
    },
    {
      id: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtJLdLLsQMOnaBm9Om5mnMkZ3UQLk5vqYrA&usqp=CAU",
      title: "Producto 5",
      price: 59.99,
      description: "Descripción del Producto 5",
      size: "XS,M, XL",
      category: "otros"
    },
    {
      id: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtJLdLLsQMOnaBm9Om5mnMkZ3UQLk5vqYrA&usqp=CAU",
      title: "Producto 6",
      price: 69.99,
      description: "Descripción del Producto 6",
      size: "XL",
      category: "shorts"
    },
    {
      id: 7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtJLdLLsQMOnaBm9Om5mnMkZ3UQLk5vqYrA&usqp=CAU",
      title: "Producto 7",
      price: 79.99,
      description: "Descripción del Producto 7",
      size: "S, L, XL",
      category: "accesorios"
    },
    {
      id: 8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtJLdLLsQMOnaBm9Om5mnMkZ3UQLk5vqYrA&usqp=CAU",
      title: "Producto 8",
      price: 89.99,
      description: "Descripción del Producto 8",
      size: "M, L",
      category: "conjuntos"
    },
    {
      id: 9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtJLdLLsQMOnaBm9Om5mnMkZ3UQLk5vqYrA&usqp=CAU",
      title: "Producto 9",
      price: 99.99,
      description: "Descripción del Producto 9",
      size: "M, L, XL",
      category: "shorts"
    },
    {
      id: 10,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtJLdLLsQMOnaBm9Om5mnMkZ3UQLk5vqYrA&usqp=CAU",
      title: "Producto 10",
      price: 109.99,
      description: "Descripción del Producto 10",
      size: "XXL",
      category: "accesorios"
    }
];

console.log(productos);

document.addEventListener('DOMContentLoaded', function () {
  var productsListContainer = document.getElementById('productsList');
  var filterButtons = document.querySelectorAll('.btn-filter');

  function createElement(tag, className, textContent, src) {
    var element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (textContent) element.textContent = textContent;
    if (src) element.src = src;
    return element;
  }

  function filterProducts(category) {
    var productItems = document.querySelectorAll('.product_item');

    console.log('producto por category: ', category);
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
    productElement.appendChild(createElement('a', 'btn_comprar', 'Agregar'));
    productsListContainer.appendChild(productElement);
  });
});