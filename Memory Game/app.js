document.addEventListener('DOMContentLoaded', () => {

    const grid = document.querySelector('.grid');
    const result = document.querySelector('#result');
    const gamezone = document.querySelector('.gamezone');
    const flips = document.querySelector('#flips');

    const cardsArray = [
        {
            name: 'cheeseburger.png',
            image: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger.png',
            image: 'images/cheeseburger.png'
        },
        {
            name: 'fries.png',
            image: 'images/fries.png'
        },
        {
            name: 'fries.png',
            image: 'images/fries.png'
        },
        {
            name: 'hotdog.png',
            image: 'images/hotdog.png'
        },
        {
            name: 'hotdog.png',
            image: 'images/hotdog.png'
        },
        {
            name: 'ice-cream.png',
            image: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream.png',
            image: 'images/ice-cream.png'
        },
        {
            name: 'milkshake.png',
            image: 'images/milkshake.png'
        },
        {
            name: 'milkshake.png',
            image: 'images/milkshake.png'
        },
        {
            name: 'pizza.png',
            image: 'images/pizza.png'
        },
        {
            name: 'pizza.png',
            image: 'images/pizza.png'
        },
    ];

    cardsArray.sort(() => 0.5 - Math.random());

    var cardsChosen = [];
    var cardsChosenIds = [];
    var cardsMatched = [];
    var numFlips = 0;

    function flipCard(){
        var cardId = this.getAttribute('card-id');
        // var matchStatus = this.getAttribute('is-matched');
        cardsChosen.push(cardsArray[cardId].name);
        cardsChosenIds.push(cardId);
        this.setAttribute('src', cardsArray[cardId].image);
        if(cardsChosen.length == 2){
            setTimeout(checkMatch, 500);
        }
    }

    function restartGame(){
        result.textContent = '';
        gamezone.removeChild('button');
        createGrid();
    }

    function checkMatch(){
        var card1 = cardsChosen[0], card2 = cardsChosen[1];
        var id1 = cardsChosenIds[0], id2 = cardsChosenIds[1];
        var cards = document.querySelectorAll('img');
        if(id1 === id2){
            alert("You cannot click on the same image");
            cards[id1].setAttribute('src', 'images/blank.png');
        }
        else if(card1 === card2){
            alert("You found a match!");
            cards[id1].setAttribute('src', 'images/white.png');
            cards[id2].setAttribute('src', 'images/white.png');
            // cards[id1].setAttribute('is-matched', 'true');
            // cards[id2].setAttribute('is-matched', 'true');
            cards[id1].removeEventListener('click', flipCard);
            cards[id2].removeEventListener('click', flipCard);
            cardsMatched.push(cardsChosen);
            numFlips += 2;
        }
        else{
            alert("Sorry, try again");
            cards[id1].setAttribute('src', 'images/blank.png');
            cards[id2].setAttribute('src', 'images/blank.png');
            numFlips += 2;
        }
        
        cardsChosen = [];
        cardsChosenIds = [];

        var score = cardsMatched.length;
        result.textContent = score;
        flips.textContent = numFlips;

        if(cardsArray.length === score * 2){
            result.textContent = "Congratulations! You won!";
            // grid.innerHTML = '';
            // var restartButton = document.createElement('button');
            // restartButton.setAttribute('onClick', restartGame());
            // restartButton.setAttribute('class', 'restartbutton');
            // restartButton.textContent = "Restart Game";
            // gamezone.appendChild(restartButton);
        }
    }

    function createGrid(){
        for(let i = 0; i < cardsArray.length; i ++){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('card-id', i);
            // card.setAttribute('is-matched', 'false');
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    createGrid();

})