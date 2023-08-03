let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'classic',
        image: 'classic-mockup.png',
        price: 15.99 
    },
    {
        id: 2,
        name: 'coconut-lime',
        image: 'coconut-mockup.png',
        price: 17.99 
    },
    {
        id: 3,
        name: 'kiwi',
        image: 'kiwi-mockup.PNG',
        price:17.99 
    },
    {
        id: 4,
        name: 'grapefruit',
        image: 'grapefruit-mockup.PNG',
        price: 17.99 
    },
    {
        id: 5,
        name: 'lemon',
        image: 'lemon-mockup.PNG',
        price: 16.99 
    },
    {
        id: 6,
        name: 'mango',
        image: 'mango-mockup.PNG',
        price: 17.99 
    },
    {
        id: 7,
        name: 'orange',
        image: 'orange-mockup.PNG',
        price: 16.99 
    },
    {
        id: 8,
        name: 'rasberry-lime',
        image: 'ras-mockup.PNG',
        price: 17.99 
    },
    {
        id: 9,
        name: 'liftoff. t-shirt',
        image: 'purple-shirt.PNG',
        price: 29.99 
    },
    {
        id: 10,
        name: 'baseball hat',
        image: 'baseball-hat.PNG',
        price:  22.99 
    },

];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="../images/products/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="../images/products/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

/*      HoanghoDev(2023) addtocardv2[source code].
        https://github.com/HoanghoDev/addtocardv2.git  */