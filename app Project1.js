document.addEventListener('DOMContentLoaded', () => {

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded',ready());
} else{
    ready();
}

function ready () {
    let overlays = Array.from(document.getElementsByClassName('overlay-text.visible'));

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classlist.remove('visible');
        });
    });

}


//Create an array with 2 of each card 
const cardArray = [
    {
        name: 'ice cream 1',
        img: 'images2/rsz_icecream1.jpg'
    },
    {
        name: 'ice cream 1',
        img: 'images2/rsz_icecream1.jpg'
    },
    {
        name: 'ice cream 2',
        img: 'images2/rsz_icecream2.jpg'
    },
    {
        name: 'ice cream 2',
        img: 'images2/rsz_icecream2.jpg'
    },
    {
        name: 'ice cream 3',
        img: 'images2/rsz_icecream3.jpg'
    },
    {
        name: 'ice cream 3',
        img: 'images2/rsz_icecream3.jpg'
    },
    {
        name: 'ice cream 4',
        img: 'images2/rsz_icecream4.jpg'
    },
    {
        name: 'ice cream 4',
        img: 'images2/rsz_icecream4.jpg'
    },
    {
        name: 'ice cream 5',
        img: 'images2/rsz_icecream5.jpg'
    },
    {
        name: 'ice cream 5',
        img: 'images2/rsz_icecream5.jpg'
    },
    {
        name: 'ice cream 6',
        img: 'images2/rsz_icecream6.jpg'
    },
    {
        name: 'ice cream 6',
        img: 'images2/rsz_icecream6.jpg'
    },
    {
        name: 'ice cream 7',
        img: 'images2/rsz_icecream7.jpg'
    },
    {
        name: 'ice cream 7',
        img: 'images2/rsz_icecream7.jpg'
    },
    {
        name: 'ice cream 8',
        img: 'images2/rsz_icecream8.jpg'
    },
    {
        name: 'ice cream 8',
        img: 'images2/rsz_icecream8.jpg'
    },
    {
        name: 'ice cream 9',
        img: 'images2/rsz_icecream9.jpg'
    },
    {
        name: 'ice cream 9',
        img: 'images2/rsz_icecream9.jpg'
    },
    {
        name: 'ice cream 8',
        img: 'images2/rsz_icecream8.jpg'
    },
    {
        name: 'ice cream 8',
        img: 'images2/rsz_icecream8.jpg'
    },
]



//randomise the cards on the board
cardArray.sort(() => 0.5 - Math.random()) 

const grid = document.querySelector('.grid');
const displayResult = document.querySelector('#result') //display result in Score id result
const cardsChosen = [];
const cardsChosenID = [];
const cardsWon = [];

let constructor = (totalTime, cards) => {
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
    }

const startGame = () => {
    this.totalClicks = 0;
    this.timeRemaining = this.totalTime;
    setTimeout(() => {
        this.countdown = this.startCountdown();
    }, 500);
    this.timer.innerText = this.timeRemaining;
}
const startCountdown = () => {
    return setInterval(() => {
        this.timeRemaining--;
        this.timer.innerText = this.timeRemaining;
        if(this.timeRemaining === 0)
            this.gameOver();
    }, 1000);
}
const gameOver = () => {
    clearInterval(this.countdown);
    this.audioController.gameOver();
    document.getElementById('game-over-text').classList.add('visible');
}
const victory = ()=>{
    clearInterval(this.countdown);
    this.audioController.victory();
    document.getElementById('victory-text').classList.add('visible');
}

//1) create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img'); //create new Element
            card.setAttribute('src', 'images/rsz_3rsz_questionmark.jpg'); //adding class attribute and value to element ('class','value')
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipcard);
            grid.appendChild(card);
        }
    }

//check for matching cards
function checkForMatch () {
    let cards = document.querySelectorAll('img')
    const option1ID = cardsChosenID[0];
    const option2ID = cardsChosenID[1];
    if (cardsChosen[0] === cardsChosen[1]) {
        cards[option1ID].setAttribute('src','images/rsz_white1.png'); //if matches, then will show a white image for both cards
        cards[option2ID].setAttribute('src','images/rsz_white1.png');
        cardsWon.push(cardsChosen);        
    }
    else {
        cards[option1ID].setAttribute('src','images/rsz_3rsz_questionmark.jpg') //if not, to flip back to questionMark image
        cards[option2ID].setAttribute('src','images/rsz_3rsz_questionmark.jpg')
    }
    cardsChosen.length = 0 //to clear the 2 arrays to be ready to start flipping again
    cardsChosenID.length = 0
    displayResult.textContent = cardsWon.length //if result points same as no. of cards, player wins
    if (cardsWon.length ===((cardArray.length)/2)) {
        displayResult.textContent = 'Congratulations! You found them all!'
    }
}

//Flip the cards
function flipcard () {
const cardID = this.getAttribute('data-id');
cardsChosen.push(cardArray[cardID].name);
cardsChosenID.push(cardID);
this.setAttribute('src', cardArray[cardID].img);
if (cardsChosen.length ===2 ) {
    setTimeout(checkForMatch, 300)
}
}


createBoard();

})