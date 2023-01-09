{
    
// let productsClothes = [
//     {
//         id: "0",
//         name: "Hoodies",
//         price: 14,
//         stock: 10,
//         urlImage: "./src/img/featured1.png",
//     },
//     {
//         id: "1",
//         name: "Shirts",
//         price: 24,
//         stock: 15,
//         urlImage: "./src/img/featured2.png",
//     },
//     {
//         id: "2",
//         name: "Sweatshirts",
//         price: 24,
//         stock: 20,
//         urlImage: "./src/img/featured3.png",
//     },
// ];

// const products = document.querySelector(".products");

// function printProducts() {
//     let html = "";

//     productsClothes.forEach(function ({ id, name, price, stock, urlImage }) {
//         html += `
//             <div class="product">
//                 <div class="product__img">
//                 <div>
//                 <img src="${urlImage}" alt="${name}" />
//                 </div>
//                 </div>

//                 <div class="product__info">
//                     <h2>$ ${price}.00 | <span>Stock: ${stock}</span></h2>
//                     <h3>${name}</h3>
//                 </div>

//                 <div class="product__options" id="${id}">
//                     <button class="btnplus btn__add">+</button>
//                 </div>
//             </div>
//         `;
//     });

//     products.innerHTML = html;
// }

// printProducts();
}


let prod1 = [
    {
        id: "0",
        name: "Hoodies",
        price: 14,
        stock: 10,
        urlImage: "./src/img/featured1.png",
    },
];

let prod2 = [
    {
        id: "1",
        name: "Shirts",
        price: 24,
        stock: 15,
        urlImage: "./src/img/featured2.png",
    },
];

let prod3 = [
    {
                id: "2",
                name: "Sweatshirts",
                price: 24,
                stock: 20,
                urlImage: "./src/img/featured3.png",
            },
];



const hoodies = document.querySelector(".Hood");
const shirts = document.querySelector(".Shir");
const sweatshirts = document.querySelector(".Sweat");

function printProducts(i) {
    let html = "";

    i.forEach(function ({ id, name, price, stock, urlImage }) {
        html += `
            <div class="product">
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
                    <button class="btnplus btn__add">+</button>
                </div>
            </div>
        `;
    });
    hoodies.innerHTML = html;    
}

function printProduct2(i) {
    let html = "";

    i.forEach(function ({ id, name, price, stock, urlImage }) {
        html += `
            <div class="product">
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
                    <button class="btnplus btn__add">+</button>
                </div>
            </div>
        `;
    });
    shirts.innerHTML = html;    
}

function printProduct3(i) {
    let html = "";

    i.forEach(function ({ id, name, price, stock, urlImage }) {
        html += `
            <div class="product">
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
                    <button class="btnplus btn__add">+</button>
                </div>
            </div>
        `;
    });
    sweatshirts.innerHTML = html;    
}

printProducts(prod1);
printProduct2(prod2);
printProduct3(prod3)