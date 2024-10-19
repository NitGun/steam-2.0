const games = [
    {
        name: 'Asseto Corsa',
        imgURL: 'images/asseto-corsa.jpg',
        price: 1159
    },
    {
        name: 'Baldurs Gate 3',
        imgURL: 'images/baldurs-gate.jpg',
        price: 1999
    },
    {
        name: 'BeamNG.drive',
        imgURL: 'images/beamNG-drive.jpg',
        price: 880
    },
    {
        name: 'Dark Souls III',
        imgURL: 'images/dark-souls-3.jpg',
        price: 2399
    },
    {
        name: 'Rust',
        imgURL: 'images/rust.jpg',
        price: 1100
    },
    {
        name: 'Squad',
        imgURL: 'images/squad.jpg',
        price: 1799
    },
]

const basket = []

window.addEventListener('load', ()=>{
    const gamesBlock = document.querySelector('.games-block');
    for (let game of games){
        gamesBlock.innerHTML+=`
            <div class="games-block__game">
                <h2 class="game__name">${game.name}</h2>
                <p class="game__price">${game.price} руб.</p>
                <img class="game__img" src="${game.imgURL}" alt="">
                <button class="game__buy">В корзину</button>
            </div>
        `;
    }
    const buttons = document.querySelectorAll(".game__buy");
    for (let i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click', ()=>{
            basket.push(games[i]);
            showBasket();
            allSum()
        })
    }
    

})

let basketBlockGames = document.querySelector('.basket-block__games')
const basketBtn   = document.querySelector('.basket-btn');
const basketBlock = document.querySelector('.basket-block');
let basketCount = document.querySelector('.basket-count')
let basketIsOpen = false
basketBtn.addEventListener('click', ()=>{
    if (basketIsOpen){
        basketBlock.style.right = "-400px";
        basketBtn.querySelector('img').style.transform = "rotate(180deg)";
    } else {
        basketBlock.style.right = "0px";
        basketBtn.querySelector('img').style.transform = "rotate(0deg)"
        
    }
    basketIsOpen = !basketIsOpen;
})

function showBasket() {
    basketBlockGames.innerHTML = ''
    for(let game of basket) {
        basketBlockGames.innerHTML +=`
        <div class="basket-block__games__game">
        <img src=${game.imgURL}>
        <h3>${game.name}</h3>
        <h4>${game.price} руб.</h4>
        <button onclick="deleteGame(${count++})"class="basket-block__games__btn">Удалить</button>
        </div>
        `
    }
}
count = 0
function deleteGame(count) {
    basket.pop(count)
    showBasket()
    allSum()
    console.log(count)
}
function allSum() {
    let sum = 0 // ОБЯЗАТЕЛЬНО В
    for(let game of basket) { 
        sum += game.price
    }
    basketCount.innerHTML = `Итого: ${sum} руб.`
}