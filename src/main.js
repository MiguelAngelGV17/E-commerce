// import cart from './cart.js';
    
let productsClothes = [
    {
        id: "0",
        name: "Hoodies",
        price: 14,
        stock: 10,
        urlImage: "./src/img/featured1.png",
    },
    {
        id: "1",
        name: "Shirts",
        price: 24,
        stock: 15,
        urlImage: "./src/img/featured2.png",
    },
    {
        id: "2",
        name: "Sweatshirts",
        price: 24,
        stock: 20,
        urlImage: "./src/img/featured3.png",
    },
];


{
    const iconCart = document.querySelector(".cart");
    const contentCart = document.querySelector(".contentCar");

    iconCart.addEventListener("click", function () {
        contentCart.classList.toggle("contentCar__show");
    });
}

const products = document.querySelector(".products");
const cartProducts = document.querySelector(".carProducts");
const carTotal = document.querySelector(".carTotal");
const amountCart = document.querySelector(".count");

let objCart = {};



function printAmountCart() {
    let sum = 0;

    const arrayCart = Object.values(objCart);

    if (!arrayCart.length) {
        amountCart.style.display = "none";
        return;
    }

    amountCart.style.display = "inline-block";

    arrayCart.forEach(function ({ amount }) {
        sum += amount;
    });

    amountCart.textContent = sum;
}

function printTotalCart() {
    const arrayCart = Object.values(objCart);

    if (!arrayCart.length) {
        carTotal.innerHTML = `
            <h3>No hay nada, a comprar!!!</h3>
        `;

        return;
    }

    let sum = 0;

    arrayCart.forEach(function ({ amount, price }) {
        sum += amount * price;
    });

    carTotal.innerHTML = `
            <h3>Total a pagar ${sum}</h3>
            <button class="btn btn__buy">Comprar</button>
        `;
}

function printProductsInCart() {
    let html = "";

    const arrayCart = Object.values(objCart);

    arrayCart.forEach(function ({ id, name, price, urlImage, amount }) {
        html += `
            <div class="product">
                <div class="product__img">
                    <img src="${urlImage}" alt="${name}" />
                </div>

                <div class="product__info">
                    <p>${name}</p>
                    <p>${price}</p>
                    <p>Cant: ${amount}</p>
                </div>

                <div class="product__options" id="${id}">
                    <i class='bx bx-minus'></i>                    
                    <i class='bx bx-plus'></i>
                    <i class='bx bx-trash'></i>
                </div>
            </div>
        `;
    });

    cartProducts.innerHTML = html;
}

function printProducts() {
    let html = "";

    productsClothes.forEach(function ({ id, name, price, stock, urlImage }) {
        html += `
            <div class="element ${name}">
                <div class="product__img">
                <div>
                <img src="${urlImage}" alt="${name}" />
                </div>
                </div>

                <div class="product__info">
                    <h2>$ ${price}.00 | <span>Stock: ${stock}</span></h2>
                    <h3>${name}</h3>
                </div>

                <div class="product__options" id="${id}">
                    <button class="btn btn__add">+</button>
                </div>
            </div>
        `;
    });

    products.innerHTML = html;
}


products.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn__add")) {
        // obtenemos el id
        const id = e.target.parentElement.id;

        // vamos a obtener el producto por id
        let findProduct = productsClothes.find(function (food) {
            return food.id === id;
        });

        // logica para el carrito
        if (objCart[id]) {
            if (findProduct.stock === objCart[id].amount) {
                alert("No tengo mas en stock");
            } else {
                objCart[id].amount++;
            }
        } else {
            objCart[id] = {
                ...findProduct,
                amount: 1,
            };
        }
    }

    
    printProductsInCart();
    printTotalCart();
    printAmountCart();
});

cartProducts.addEventListener("click", function (e) {
    if (e.target.classList.contains("bx-minus")) {
        const id = e.target.parentElement.id;

        if (objCart[id].amount === 1) {
            const res = confirm("Seguro quieres eliminar este producto");
            if (res) delete objCart[id];
        } else {
            objCart[id].amount--;
        }
    }

    if (e.target.classList.contains("bx-plus")) {
        const id = e.target.parentElement.id;

        let findProduct = productsClothes.find(function (food) {
            return food.id === id;
        });

        if (findProduct.stock === objCart[id].amount) {
            alert("No tengo mas en stock");
        } else {
            objCart[id].amount++;
        }
    }

    if (e.target.classList.contains("bx-trash")) {
        const id = e.target.parentElement.id;

        const res = confirm("Seguro quieres eliminar este producto");
        if (res) delete objCart[id];
    }

    printProductsInCart();
    printTotalCart();
    printAmountCart();
});

carTotal.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn__buy")) {
        const res = confirm("Seguro quieres hacer la compra");

        if (!res) return;

        let newArray = [];

        productsClothes.forEach(function (food) {
            if (food.id === objCart[food.id]?.id) {
                newArray.push({
                    ...food,
                    stock: food.stock - objCart[food.id].amount,
                });
            } else {
                newArray.push(food);
            }
        });

        productsClothes = newArray;
        objCart = {};

        printProducts();
        printProductsInCart();
        printTotalCart();
        printAmountCart();
    }
});

printProducts();
printTotalCart();
printAmountCart();

