// document.addEventListener('DOMContentLoaded', () => {

// })


let gameSquare = document.querySelectorAll('.wam_square');
let gameMole = document.querySelectorAll('.mole');
let timeRemaining = document.querySelector('.seconds');
let score = document.querySelector('.score');
let result = 0;
let whackPosition;
let timeLeft = timeRemaining.textContent;
let gameOver = document.getElementById('game_over');
let gameOverBtn = document.getElementById('restart_btn');
let cycleSpeed = 1000;
let moleTimer;
let finalScore = document.querySelector('.final_count');


function randomSquare() {
    gameSquare.forEach((square => {
        square.children.item(1).classList.add('mole--hidden', );
        square.children.item(1).setAttribute('src', 'images/mole.svg');
    }))

    let randomPosition = gameSquare[Math.floor(Math.random() * 9)]
    randomPosition.children.item(1).classList.remove('mole--hidden');
    whackPosition = randomPosition.id;
}

function cycleMoles() {
    moleTimer = setInterval(randomSquare, cycleSpeed)
}

function countDown() {
    timeLeft--;
    timeRemaining.textContent = timeLeft;
    if (timeLeft === 0) {
        clearInterval(timer);
        clearInterval(moleTimer);
        gameSquare.forEach((square => {
            square.children.item(1).classList.remove('mole--hidden', );
        }))
        gameOver.style.display = 'flex';
        finalScore.textContent = result;
    }
}

let timer = setInterval(countDown, 1000);

gameOverBtn.addEventListener('click', function() {
    window.location.reload();
})

// cycleMoles();

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(cycleMoles(), 0);

    gameSquare.forEach(square => {
        square.addEventListener('click', () => {
            if (square.id === whackPosition) {
                result++;
                score.textContent = result;
                let moleImg = square.children.item(1);
                moleImg.setAttribute('src', 'images/mole-whacked.svg');
                setTimeout(() => {
                    moleImg.classList.add('mole--hidden');
                }, 200)
                cycleSpeed -= cycleSpeed / 10;
                // cycleMoles();
            }
        })
    })
})
