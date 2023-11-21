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

class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `<html lang="en">
<head>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300&family=Montserrat:wght@300&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300&family=Montserrat:wght@300&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300&family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="path/to/font-awesome/css/font-awesome.min.css"
        />
        <style>
            a {
                text-decoration: none;
                color: inherit;
              }
              
              ul {
                list-style: none;
              }
              
              .navigation-logo img {
                display: block;
                max-width: 40%;
              }
              
              button {
                font: inherit;
                background: none;
                border: none;
                outline: none;
                cursor: pointer;
              }
              
              .primary-header {
                position: fixed;
                top: 0;
                left: 0;
                z-index: 1000;
                width: 100%;
                background-color: #1d5e2e;
                border-bottom: 1px solid #fff;
              }
              .navigation {
                position: flex;
                justify-content: space-between;
                align-items: center;
                height: 3.75rem;
                display: flex;
                align-items: center;
                column-gap: 0.625rem;
              }
              
              .navigation-toggle {
                border-right: 1px solid #fff;
                transition: background-color 250ms;
              }
              
              .navigation.active .navigation-toggle {
                background: #fff url(img/cross.svg) center/20px no-repeat;
              }
              
              .navigation.active .button-toggle-img {
                display: none;
              }
              
              .button-has-icon {
                width: 60px;
                flex-shrink: 0;
                align-self: stretch;
              }
              
              .button-has-icon:not(.navigation-toggle) {
                border-left: 1px solid #fff;
              }
              
              .button-icon {
                display: grid;
                place-items: center;
              }
              
              .navigation-logo {
                width: 8.25rem;
              }
              
              .button-icon-img {
                width: 1.25rem;
              }
              
              .button-icon-img * {
                fill: #fff;
                stroke: #fff;
              }
              
              .button-has-icon:hover .button-icon-img * {
                fill: #22973f;
                stroke: #22973f;
              }
              
              .main-navigation {
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                height: calc(100vh - 100%);
                background-color: #fff;
                padding: 3vw;
                z-index: 800;
                transform: translateX(-100%);
                transition: transform 250ms;
              }
              
              .navigation.active .main-navigation {
                transform: translateX(0);
              }
              
              .navigation-list {
                display: flex;
                flex-direction: column;
                row-gap: 0.625rem;
              }
              
              /* .navigation-item + .navigation-item {
                border-top: 1px solid #000000;
              } */
              
              .navigation-link {
                display: inline-block;
                font-family: "Lato", sans-serif;
                font-size: 2rem;
                text-transform: uppercase;
                padding-top: 0.9375rem;
                transition: color 250ms;
              }
              
              .navigation-link:hover {
                color: #22973f;
              }
              
              .navigation-link:first-of-type {
                padding-top: 0;
              }
              
              .navigation-icon-group {
                align-self: stretch;
                display: flex;
                margin-left: auto;
              }
              
              .navigation-icon-group i {
                font-size: 20px;
              }
              
              .item-inicio {
                border-bottom: 2px solid #FFF;
                margin-bottom: -2px;
              }
              
              @media (min-width: 41.875em) {
                .navigation {
                  height: 4.375rem;
                  column-gap: 1.875rem;
                }
                .navigation-logo {
                  width: 10.875rem;
                }
              }
              
              @media (min-width: 64em) {
                .navigation {
                  column-gap: 4.375rem;
                  padding-left: 1.822916667vw;
                }
                .navigation-toggle {
                  display: none;
                }
              
                .main-navigation {
                  position: initial;
                  width: initial;
                  height: initial;
                  background-color: transparent;
                  padding: initial;
                  transform: initial;
                  transition: none;
                }
              
                .navigation-list {
                  flex-direction: row;
                  column-gap: 1.25rem;
                }
              
                .navigation-link {
                  font-family: "Lato", sans-serif;
                  font-size: 1rem;
                  font-weight: 700;
                  color: #fff;
                  padding-top: 0;
                }
              }
              </style>
       
      </head>
</head>
<body>
    
     <header class="primary-header">
        <div class="navigation">
          <button class="navigation-toggle button-has-icon">
            <span class="button-icon">
              <svg viewBox="0 0 20 20" class="button-icon-img button-toggle-img">
                <g data-name="Layer 1">
                  <line
                    y1="1"
                    x2="20"
                    y2="1"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></line>
                  <line
                    y1="7"
                    x2="20"
                    y2="7"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></line>
                  <line
                    y1="13"
                    x2="20"
                    y2="13"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></line>
                  <line
                    y1="19"
                    x2="20"
                    y2="19"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></line>
                </g>
              </svg>
            </span>
          </button>
  
          <a href="" class="navigation-logo">
            <img
              src="img/Social-logo.png"
              alt="Social lux logo"
              class="logo-image"
            />
          </a>
          <nav class="main-navigation">
            <ul class="navigation-list">
              <li class="navigation-item">
                <a href="" class="navigation-link item-inicio">INICIO</a>
              </li>
              <li class="navigation-item">
                <a href="" class="navigation-link item-disciplinas"
                  >DISCIPLINAS</a
                >
              </li>
              <li class="navigation-item">
                <a
                  href="catalogo/catalogo_todo.html"
                  class="navigation-link item-tienda"
                  >TIENDA</a
                >
              </li>
              <li class="navigation-item">
                <a
                  href="historia/historia.html"
                  class="navigation-link item-historia"
                  >HISTORIA</a
                >
              </li>
              <li class="navigation-item">
                <a href="" class="navigation-link item-contacto">CONTACTO</a>
              </li>
              <li class="navigation-item">
                <a href="" class="navigation-link item-sponsors">SPONSORS</a>
              </li>
              <li class="navigation-item">
                <a href="" class="navigation-link item-mercadito"
                  >MERCADITO EN EL RECUERDO</a
                >
              </li>
            </ul>
          </nav>
          <div class="navigation-icon-group">
            <button type="button" class="btn btn text-white button-has-icon">
              <i class="fa-solid fa-hand-holding-dollar"></i>
            </button>
            <button class="btn btn text-white button-has-icon" type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </header>     
</body>
</html>`
  }
}


class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `<html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300&family=Montserrat:wght@300&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300&family=Montserrat:wght@300&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300&family=Montserrat:wght@300&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="path/to/font-awesome/css/font-awesome.min.css"
      />
      <link rel="stylesheet" href="style.css" />
      <style>.container {
        max-width: 1170px;
        margin: auto;
      }
      
      .row {
        display: flex;
        flex-wrap: wrap;
      }
      
      ul {
        list-style: none;
      }
      
      .footer {
        background-color: #1d5e2e;
        padding: 30px 0;
      }
      
      .footer-col {
        width: 25%;
        padding: 0 15px;
      }
      
      .footer-col h4 {
        font-size: 20px;
        color: #ffffff;
        text-transform: capitalize;
        margin-bottom: 35px;
        font-weight: 500;
        position: relative;
      }
      
      .footer-col h4::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -10px;
        background-color: #fff;
        height: 2px;
        box-sizing: border-box;
        width: 50px;
      }
      
      .footer-col ul li:not(:last-child) {
        margin-bottom: 10px;
      }
      
      .footer-col ul li a {
        font-size: 18px;
        text-transform: capitalize;
        color: #ffffff;
        text-decoration: none;
        font-weight: 300;
        color: #bbbbbb;
        display: block;
        transition: all 0.3s ease;
      }
      
      .footer-col ul li a:hover {
        color: #ffffff;
        padding-left: 8px;
      }
      
      .footer-col .social-links a {
        display: inline-block;
        height: 40px;
        width: 40px;
        background-color: rgba(255, 255, 255, 0.2);
        margin: 0 10px 10px 0;
        text-align: center;
        line-height: 40px;
        border-radius: 50%;
        color: #ffffff;
        transition: all 0.5s ease;
      }
      
      .footer-col .social-links i {
        margin-top: 10px;
        font-size: 20px;
      }
      
      .footer-col .social-links a:hover {
        color: #24262b;
        background-color: #ffffff;
      }
      
      .footer-copyright {
        color: #ffffff;
        width: 100%;
        text-align: center;
        margin-top: 3rem;
      }
      
      /*responsive*/
      @media (max-width: 767px) {
        .footer-col {
          width: 50%;
          margin-bottom: 30px;
        }
      }
      @media (max-width: 574px) {
        .footer-col {
          width: 100%;
        }
      }</style>

    </head>
  
    <body>
  <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>El Club</h4>
              <ul>
                <li><a href="#">Acerca de nosotros</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Más información</h4>
              <ul>
                <li><a href="#">Cursos de la municipalidad</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Tienda online</h4>
              <ul>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Devoluciones</a></li>
                <li><a href="#">Formas de pago</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Seguinos</h4>
              <div class="social-links">
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
              </div>
            </div>
            <div class="footer-copyright">
              <p>
                Club deportivo y social Lux © 2023 Todos los derechos reservados ·
              </p>
            </div>
          </div>
        </div>
      </footer>
  
      <script
        src="https://kit.fontawesome.com/137f813a12.js"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
        integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
        crossorigin="anonymous"
      ></script>
  
      <script src="index.js"></script>
    </body>
  </html>
  `
  }
}

customElements.define('app-navbar', NavBar);

customElements.define('app-footer', Footer);