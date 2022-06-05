const menu = [
    {
        id: 1,
        nome: "Carbonara",
        category: "massas",
        preco: 54,
        img: "./assets/img/carbonara.jpg",
        desc: "Espaguete com panceta, queijo parmesão, gema de ovo e cream."
    },
    {
        id: 2,
        nome: "Pizza Peppe Blu",
        category: "massas",
        preco: 78,
        img: "./assets/img/pizza.jpg",
        desc: "Sabores: peperoni, mussarela, marguerita."
    },
    {
        id: 3,
        nome: "Bruschetta da casa",
        category: "massas",
        preco: 46,
        img: "./assets/img/bruschetta.jpg",
        desc: "Presunto de parma, queijo de cabra e rúcula"
    },
    {
        id: 4,
        nome: "Nhoque de espinafre",
        category: "massas",
        preco: 62,
        img: "./assets/img/nhoque.jpg",
        desc: "Nhoque de massa de batata, queijo ricota e espinafre. Molhos: sugo, branco ou bolonhesa."
    },
    {
        id: 5,
        nome: "risotto alla milanese",
        category: "massas",
        preco: 65,
        img: "./assets/img/risoto.jpg",
        desc: "Risoto à milanesa, açafrão e queijo parmesão."
    },
    {
        id: 6,
        nome: "Lasangna",
        category: "massas",
        preco: 58,
        img: "./assets/img/lasanha.jpg",
        desc: "Massa da casa, patinho, molho bolonhesa e queijo parmesão."
    },
    {
        id: 7,
        nome: "Bistecca alla Fiorentina",
        category: "massas",
        preco: 128,
        img: "./assets/img/bisteca.jpg",
        desc: "Filé mignon na grelha."
    },
    {
        id: 8,
        nome: "Blackberry Gin Tonic",
        category: "bebidas",
        preco: 27,
        img: "./assets/img/blackberry.jpg",
        desc: "Gin, Tônica, blackberry, suco de limão."
    },
    {
        id: 9,
        nome: "Café russo",
        category: "bebidas",
        preco: 25,
        img: "./assets/img/russian.jpg",
        desc: "Vodka, Kahlua, extrato de baunilha, leite de amêndoas, café e mel."
    },
    {
        id: 10,
        nome: "Cabernet Sauvignon",
        category: "bebidas",
        preco: 148,
        img: "./assets/img/vinho.jpg",
        desc: "2008 – Espanha."
    },
    {
        id: 11,
        nome: "Caipirinha",
        category: "bebidas",
        preco: 17,
        img: "./assets/img/caipirinha.jpg",
        desc: "Cachaça, limão, açúcar."
    },
    {
        id: 12,
        nome: "Água",
        category: "bebidas",
        preco: 6,
        img: "./assets/img/agua.jpg",
        desc: " "
    },
    {
        id: 13,
        nome: "Refrigerante",
        category: "bebidas",
        preco: 8,
        img: "./assets/img/refri.jpg",
        desc: " "
    },
    {
        id: 14,
        nome: "Moet Imperial Brut 750 Ml Moët & Chandon",
        category: "bebidas",
        preco: 419,
        img: "./assets/img/espumante.jpg",
        desc: " "
    },
    {
        id: 15,
        nome: "Tiramisù",
        category: "sobremesas",
        preco: 25,
        img: "./assets/img/tiramisu.jpg",
        desc: "Base de chocolate, café, biscoito e creme de mascarpone."
    },
    {
        id: 16,
        nome: "Cannoli",
        category: "sobremesas",
        preco: 18,
        img: "./assets/img/canolli.jpg",
        desc: "massa doce frita em formato de tubinhos e recheada com creme de ricota e frutas cristalizadas."
    },
    {
        id: 17,
        nome: "Macaron (6 un)",
        category: "sobremesas",
        preco: 18,
        img: "./assets/img/macaron.jpg",
        desc: "Farinha de amêndoas, recheio de creme, geleia de frutas ou chocolate."
    },
    {
        id: 18,
        nome: "Frittelle al mascarpone",
        category: "sobremesas",
        preco: 15,
        img: "./assets/img/frittele.jpg",
        desc: " "
    },
    {
        id: 19,
        nome: "Gelato al fiordilatte",
        category: "sobremesas",
        preco: 22,
        img: "./assets/img/gelato.jpg",
        desc: "Consultar sabores."
    },
];

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src='${item.img}' alt='${item.nome}' class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.nome}</h4>
              <h5 class="trace"></h5>
              <h4 class="preco">R$${item.preco}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}



function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["Tudo"]
    );
    const categoryBtns = categories.map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "Tudo") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }
