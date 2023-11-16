const productos = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtJLdLLsQMOnaBm9Om5mnMkZ3UQLk5vqYrA&usqp=CAU",
      title: "Producto 1",
      price: 19.99,
      description: "Descripción del Producto 1",
      size: "S, M, L"
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtJLdLLsQMOnaBm9Om5mnMkZ3UQLk5vqYrA&usqp=CAU",
      title: "Producto 2",
      price: 29.99,
      description: "Descripción del Producto 2",
      size: "XS, XL"
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtJLdLLsQMOnaBm9Om5mnMkZ3UQLk5vqYrA&usqp=CAU",
      title: "Producto 3",
      price: 39.99,
      description: "Descripción del Producto 3",
      size: "S, M, Xl"
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtJLdLLsQMOnaBm9Om5mnMkZ3UQLk5vqYrA&usqp=CAU",
      title: "Producto 4",
      price: 49.99,
      description: "Descripción del Producto 4",
      size: "S, M, Xl"
    },
    {
      id: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtJLdLLsQMOnaBm9Om5mnMkZ3UQLk5vqYrA&usqp=CAU",
      title: "Producto 5",
      price: 59.99,
      description: "Descripción del Producto 5",
      size: "XS,M, XL"
    },
    {
      id: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtJLdLLsQMOnaBm9Om5mnMkZ3UQLk5vqYrA&usqp=CAU",
      title: "Producto 6",
      price: 69.99,
      description: "Descripción del Producto 6",
      size: "XL"
    },
    {
      id: 7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtJLdLLsQMOnaBm9Om5mnMkZ3UQLk5vqYrA&usqp=CAU",
      title: "Producto 7",
      price: 79.99,
      description: "Descripción del Producto 7",
      size: "S, L, XL"
    },
    {
      id: 8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtJLdLLsQMOnaBm9Om5mnMkZ3UQLk5vqYrA&usqp=CAU",
      title: "Producto 8",
      price: 89.99,
      description: "Descripción del Producto 8",
      size: "M, L"
    },
    {
      id: 9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtJLdLLsQMOnaBm9Om5mnMkZ3UQLk5vqYrA&usqp=CAU",
      title: "Producto 9",
      price: 99.99,
      description: "Descripción del Producto 9",
      size: "M, L, XL"
    },
    {
      id: 10,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtJLdLLsQMOnaBm9Om5mnMkZ3UQLk5vqYrA&usqp=CAU",
      title: "Producto 10",
      price: 109.99,
      description: "Descripción del Producto 10",
      size: "XXL"
    }
];

console.log(productos);

document.addEventListener('DOMContentLoaded', function () {
  var productsListContainer = document.getElementById('productsList');

  function createElement(tag, className, textContent, src) {
    var element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (textContent) element.textContent = textContent;
    if (src) element.src = src;
    return element;
  }

  productos.forEach(function (producto) {
    var productElement = createElement('div', 'product_item');
    productElement.setAttribute('category', 'remeras');

    productElement.appendChild(createElement('img', undefined, undefined, producto.image));
    
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