const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItems");

const products = [
  {
    id: 1,
    title: "REMERA DE ENTRENAMIENTO",
    price: 119,
    colors: [
      {
        code: "black",
        img: "",
      },
      {
        code: "white",
        img: "",
      },
      {
        code: "#1d5e2e",
        img: "",
      },
    ],
  },
  {
    id: 2,
    title: "SHORT NUEVA TEMPORADA",
    price: 149,
    colors: [
        {
            code: "black",
            img: "",
          },
          {
            code: "white",
            img: "",
          },
          {
            code: "#1d5e2e",
            img: "",
          }, 
    ],
  },
  {
    id: 3,
    title: "BUZO NUEVA TEMPORADA",
    price: 109,
    colors: [
        {
            code: "black",
            img: "",
          },
          {
            code: "white",
            img: "",
          },
          {
            code: "#1d5e2e",
            img: "",
          }, 
    ],
  },
  {
    id: 4,
    title: "TAZA",
    price: 129,
    colors: [
      {
        code: "",
        img: "",
      },      
    ],
  },
  {
    id: 5,
    title: "PIN",
    price: 99,
    colors: [
      {
        code: "",
        img: "",
      },      
    ],
  },
  {
    id: 6,
    title: "STICKER",
    price: 99,
    colors: [
      {
        code: "",
        img: "",
      },      
    ],
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
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //CAMBIAR EL PRODUCTO SELECCIONADO
    choosenProduct = products[index];

    //MODIFICAR EL TEXTO DEL PRODUCTO SELECCIONADO
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //ASIGNAR COLORES A LOS PRODUCTOS
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});