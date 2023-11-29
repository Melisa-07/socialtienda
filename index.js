//MENU DESPLEGABLE EN DISPOSITIVOS PEQUEÑOS
const toggleButton = document.querySelector(".navigation-toggle");
const toggleNavbar = document.querySelector(".navigation");
if (toggleButton && toggleNavbar) {
  toggleButton.addEventListener("click", () => {
    toggleNavbar.classList.toggle("active");
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    toggleNavbar.classList.remove("active");
  }
});

//DISCIPLINAS
const accordionHeaders = document.querySelectorAll('.accordion-header')
const toggleActive = event => {
  event.currentTarget.classList.toggle('active')
}
const addToggleHandler = item => {
  item.addEventListener('click', toggleActive)
}
Array.from(accordionHeaders).forEach(addToggleHandler)

const accordionHeader = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(header => {
  header.addEventListener('mouseenter', () => {
    header.querySelector('::after').style.display = 'block';
  });

  header.addEventListener('mouseleave', () => {
    header.querySelector('::after').style.display = 'none';
  });
});

//TIENDA-SLIDER
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "",
    price: 119,
  },
  {
    id: 2,
    title: "",
    price: 149,
  },
  {
    id: 3,
    title: "",
    price: 109,
  },
  {
    id: 4,
    title: "",
    price: 129,
  },
  {
    id: 5,
    title: "",
    price: 99,
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {

    wrapper.style.transform = `translateX(${-100 * index}vw)`;


    choosenProduct = products[index];


    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;


  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});



