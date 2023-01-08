{
    
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

const products = document.querySelector(".products");

function printProducts() {
    let html = "";

    productsClothes.forEach(function ({ id, name, price, stock, urlImage }) {
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

    products.innerHTML = html;
}

printProducts();
}


// let hoddies = [
//     {
//         id: "0",
//         name: "Hoodies",
//         price: 14,
//         stock: 10,
//         urlImage: "./src/img/featured1.png",
//     },
// ];

// const products = document.querySelector(".hoddies");

// function printProducts() {
//     let html = "";

//     hoddies.forEach(function ({ id, name, price, stock, urlImage }) {
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