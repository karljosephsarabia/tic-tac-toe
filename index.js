const area1 = document.getElementById('area-1');
const area2 = document.getElementById('area-2');
const area3 = document.getElementById('area-3');
const area4 = document.getElementById('area-4');
const area5 = document.getElementById('area-5');
const area6 = document.getElementById('area-6');
const area7 = document.getElementById('area-7');
const area8 = document.getElementById('area-8');
const area9 = document.getElementById('area-9');
const playScore = document.getElementById('player-score');
const compScore = document.getElementById('computer-score');
const gameStatus = document.getElementById('game-status');
const playButton = document.getElementById('play-button');
const quitButton = document.getElementById('quit-button');
const playingBoardStatus = document.getElementsByClassName('board');
const playScoreStorage = sessionStorage.getItem('playerscore');
const compScoreStorage = sessionStorage.getItem('computerscore');

let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    player = true, pickedNumber = 0, winner = true,
    playerScore = 0, computerScore = 0, countMove = 0;

if (playScoreStorage != null && compScoreStorage != null) {
    playScore.textContent = playScoreStorage;
    compScore.textContent = compScoreStorage;
    playerScore = playScoreStorage;
    computerScore = compScoreStorage;
} else {
    playScore.textContent = 0;
    compScore.textContent = 0;
}



function playerMove(event) {
    player = true;

    playerSelection(event);
    removePickedNumber();
    checkWinner();


    if (winner && countMove < 9) {
        disabledUnsedField();
        setTimeout(() => {
            enabledUnsedField();
            computerMove();
            removePickedNumber();
            checkWinner();
        }, 3000);

    } else if (winner && countMove === 9) {
        console.log("It's a draw");
        gameStatus.textContent = "It's a draw";
    }

}

function playerSelection(event) {
    if (event === 1) {
        area1.innerHTML = player ? '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon"/>' : '<img class="in-game-icon" src="./assets/muzan-icon-removebg-preview.png" alt="muzan-icon"/>';
        area1.style.pointerEvents = 'none';
        pickedNumber = event;

    } else if (event === 2) {
        area2.innerHTML = player ? '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon"/>' : '<img class="in-game-icon" src="./assets/muzan-icon-removebg-preview.png" alt="muzan-icon"/>';
        area2.style.pointerEvents = 'none';
        pickedNumber = event;

    } else if (event === 3) {
        area3.innerHTML = player ? '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon"/>' : '<img class="in-game-icon" src="./assets/muzan-icon-removebg-preview.png" alt="muzan-icon"/>';
        area3.style.pointerEvents = 'none';
        pickedNumber = event;

    } else if (event === 4) {
        area4.innerHTML = player ? '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon"/>' : '<img class="in-game-icon" src="./assets/muzan-icon-removebg-preview.png" alt="muzan-icon"/>';
        area4.style.pointerEvents = 'none';
        pickedNumber = event;

    } else if (event === 5) {
        area5.innerHTML = player ? '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon"/>' : '<img class="in-game-icon" src="./assets/muzan-icon-removebg-preview.png" alt="muzan-icon"/>';
        area5.style.pointerEvents = 'none';
        pickedNumber = event;

    } else if (event === 6) {
        area6.innerHTML = player ? '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon"/>' : '<img class="in-game-icon" src="./assets/muzan-icon-removebg-preview.png" alt="muzan-icon"/>';
        area6.style.pointerEvents = 'none';
        pickedNumber = event;

    } else if (event === 7) {
        area7.innerHTML = player ? '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon"/>' : '<img class="in-game-icon" src="./assets/muzan-icon-removebg-preview.png" alt="muzan-icon"/>';
        area7.style.pointerEvents = 'none';
        pickedNumber = event;

    } else if (event === 8) {
        area8.innerHTML = player ? '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon"/>' : '<img class="in-game-icon" src="./assets/muzan-icon-removebg-preview.png" alt="muzan-icon"/>';
        area8.style.pointerEvents = 'none';
        pickedNumber = event;

    } else if (event === 9) {
        area9.innerHTML = player ? '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon"/>' : '<img class="in-game-icon" src="./assets/muzan-icon-removebg-preview.png" alt="muzan-icon"/>';
        area9.style.pointerEvents = 'none';
        pickedNumber = event;
    }

    countMove++;
}

function removePickedNumber() {
    const index = arrayNum.indexOf(pickedNumber);
    const x = arrayNum.splice(index, 1);
    console.log(arrayNum);
}

function computerMove() {
    let randomNum = arrayNum[Math.floor(Math.random() * arrayNum.length)];
    player = false;
    playerSelection(randomNum);
}



function checkWinner() {

    if (playingBoardStatus[0].innerHTML === playingBoardStatus[1].innerHTML &&
        playingBoardStatus[1].innerHTML === playingBoardStatus[2].innerHTML &&
        playingBoardStatus[0].innerHTML === playingBoardStatus[2].innerHTML) {

        playingBoardStatus[0].innerHTML === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? playerScore++ : computerScore++;
        playScore.textContent = playerScore;
        compScore.textContent = computerScore;
        gameStatus.textContent = playingBoardStatus[0].innerHTML === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'You Win' : 'You Lose';
        gameStatus.style.color = playingBoardStatus[0].innerHTML === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'white' : 'red';

        sessionStorage.setItem('playerscore', playerScore);
        sessionStorage.setItem('computerscore', computerScore);
        disabledUnsedField();
        winner = !winner;

    } else if (
        playingBoardStatus[3].innerHTML === playingBoardStatus[4].innerHTML &&
        playingBoardStatus[4].innerHTML === playingBoardStatus[5].innerHTML &&
        playingBoardStatus[3].innerHTML === playingBoardStatus[5].innerHTML) {

        playingBoardStatus[3].innerHTML === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? playerScore++ : computerScore++;
        playScore.textContent = playerScore;
        compScore.textContent = computerScore;
        gameStatus.textContent = playingBoardStatus[3].innerHTML === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'You Win' : 'You Lose';
        gameStatus.style.color = playingBoardStatus[3].innerHTML === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'white' : 'red';

        sessionStorage.setItem('playerscore', playerScore);
        sessionStorage.setItem('computerscore', computerScore);
        disabledUnsedField();
        winner = !winner;


    } else if (
        playingBoardStatus[6].innerHTML === playingBoardStatus[7].innerHTML &&
        playingBoardStatus[7].innerHTML === playingBoardStatus[8].innerHTML &&
        playingBoardStatus[6].innerHTML === playingBoardStatus[8].innerHTML) {

        playingBoardStatus[6].innerHTML === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? playerScore++ : computerScore++;
        playScore.textContent = playerScore;
        compScore.textContent = computerScore;
        gameStatus.textContent = playingBoardStatus[6].innerHTML === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'You Win' : 'You Lose';
        gameStatus.style.color = playingBoardStatus[6].innerHTML === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'white' : 'red';

        sessionStorage.setItem('playerscore', playerScore);
        sessionStorage.setItem('computerscore', computerScore);
        disabledUnsedField();
        winner = !winner;

    } else if (
        playingBoardStatus[0].innerHTML === playingBoardStatus[3].innerHTML &&
        playingBoardStatus[3].innerHTML === playingBoardStatus[6].innerHTML &&
        playingBoardStatus[0].innerHTML === playingBoardStatus[6].innerHTML) {

        playingBoardStatus[0].innerHTML === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? playerScore++ : computerScore++;
        playScore.textContent = playerScore;
        compScore.textContent = computerScore;
        gameStatus.textContent = playingBoardStatus[0].innerHTML === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'You Win' : 'You Lose';
        gameStatus.style.color = playingBoardStatus[0].innerHTML === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'white' : 'red';

        sessionStorage.setItem('playerscore', playerScore);
        sessionStorage.setItem('computerscore', computerScore);
        disabledUnsedField();
        winner = !winner;

    } else if (
        playingBoardStatus[1].innerHTML === playingBoardStatus[4].innerHTML &&
        playingBoardStatus[4].innerHTML === playingBoardStatus[7].innerHTML &&
        playingBoardStatus[1].innerHTML === playingBoardStatus[7].innerHTML) {

        playingBoardStatus[1].innerHTML === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? playerScore++ : computerScore++;
        playScore.textContent = playerScore;
        compScore.textContent = computerScore;
        gameStatus.textContent = playingBoardStatus[1].innerHTML === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'You Win' : 'You Lose';
        gameStatus.style.color = playingBoardStatus[1].innerHTML === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'white' : 'red';

        sessionStorage.setItem('playerscore', playerScore);
        sessionStorage.setItem('computerscore', computerScore);
        disabledUnsedField();
        winner = !winner;

    } else if (
        playingBoardStatus[2].innerHTML === playingBoardStatus[5].innerHTML &&
        playingBoardStatus[5].innerHTML === playingBoardStatus[8].innerHTML &&
        playingBoardStatus[2].innerHTML === playingBoardStatus[8].innerHTML) {

        playingBoardStatus[2].innerHTML === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? playerScore++ : computerScore++;
        playScore.textContent = playerScore;
        compScore.textContent = computerScore;
        gameStatus.textContent = playingBoardStatus[2].innerHTML === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'You Win' : 'You Lose';
        gameStatus.style.color = playingBoardStatus[2].innerHTML === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'white' : 'red';

        sessionStorage.setItem('playerscore', playerScore);
        sessionStorage.setItem('computerscore', computerScore);
        disabledUnsedField();
        winner = !winner;

    } else if (
        playingBoardStatus[0].innerHTML === playingBoardStatus[4].innerHTML &&
        playingBoardStatus[4].innerHTML === playingBoardStatus[8].innerHTML &&
        playingBoardStatus[0].innerHTML === playingBoardStatus[8].innerHTML) {

        playingBoardStatus[0].innerHTML === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? playerScore++ : computerScore++;
        playScore.textContent = playerScore;
        compScore.textContent = computerScore;
        gameStatus.textContent = playingBoardStatus[0].innerHTML === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'You Win' : 'You Lose';
        gameStatus.style.color = playingBoardStatus[0].innerHTML === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'white' : 'red';

        sessionStorage.setItem('playerscore', playerScore);
        sessionStorage.setItem('computerscore', computerScore);
        disabledUnsedField();
        winner = !winner;

    } else if (
        playingBoardStatus[2].innerHTML === playingBoardStatus[4].innerHTML &&
        playingBoardStatus[4].innerHTML === playingBoardStatus[6].innerHTML &&
        playingBoardStatus[2].innerHTML === playingBoardStatus[6].innerHTML) {

        playingBoardStatus[2].innerHTML === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? playerScore++ : computerScore++;
        playScore.textContent = playerScore;
        compScore.textContent = computerScore;
        gameStatus.textContent = playingBoardStatus[2].innerHTML === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'You Win' : 'You Lose';
        gameStatus.style.color = playingBoardStatus[2].innerHTML === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'white' : 'red';

        sessionStorage.setItem('playerscore', playerScore);
        sessionStorage.setItem('computerscore', computerScore);
        disabledUnsedField();
        winner = !winner;

    } else {
        gameStatus.textContent = player ? 'Muzan turn' : "It's Your Turn";
    }
}

function disabledUnsedField() {
    for (let y of playingBoardStatus) {
        if (y.innerHTML != '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">'
            && y.innerHTML != '<img class="in-game-icon" src="./assets/muzan-icon-removebg-preview.png" alt="muzan-icon">') {
            y.style.pointerEvents = 'none';
        }
    }
}

function enabledUnsedField() {
    for (let y of playingBoardStatus) {
        if (y.innerHTML != '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">'
            && y.innerHTML != '<img class="in-game-icon" src="./assets/muzan-icon-removebg-preview.png" alt="muzan-icon">') {
            y.style.pointerEvents = 'auto';
        } else {
            y.style.pointerEvents = 'none';
        }
    }
}

function playGame() {
    arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9],
        player = true, pickedNumber = 0, winner = true,
        countMove = 0;

    area1.innerHTML = '<img src="./assets/cut_images_9YmkIVqOxG/image_part_001.png" style="width: 100%; height: 100%; background-color: white;"/>';
    area2.innerHTML = '<img src="./assets/cut_images_9YmkIVqOxG/image_part_002.png" style="width: 100%; height: 100%; background-color: white;"/>';
    area3.innerHTML = '<img src="./assets/cut_images_9YmkIVqOxG/image_part_003.png" style="width: 100%; height: 100%; background-color: white;"/>';
    area4.innerHTML = '<img src="./assets/cut_images_9YmkIVqOxG/image_part_004.png" style="width: 100%; height: 100%; background-color: white;"/>';
    area5.innerHTML = '<img src="./assets/cut_images_9YmkIVqOxG/image_part_005.png" style="width: 100%; height: 100%; background-color: white;"/>';
    area6.innerHTML = '<img src="./assets/cut_images_9YmkIVqOxG/image_part_006.png" style="width: 100%; height: 100%; background-color: white;"/>';
    area7.innerHTML = '<img src="./assets/cut_images_9YmkIVqOxG/image_part_007.png" style="width: 100%; height: 100%; background-color: white;"/>';
    area8.innerHTML = '<img src="./assets/cut_images_9YmkIVqOxG/image_part_008.png" style="width: 100%; height: 100%; background-color: white;"/>';
    area9.innerHTML = '<img src="./assets/cut_images_9YmkIVqOxG/image_part_009.png" style="width: 100%; height: 100%; background-color: white;"/>';

    area1.style.pointerEvents = 'auto';
    area2.style.pointerEvents = 'auto';
    area3.style.pointerEvents = 'auto';
    area4.style.pointerEvents = 'auto';
    area5.style.pointerEvents = 'auto';
    area6.style.pointerEvents = 'auto';
    area7.style.pointerEvents = 'auto';
    area8.style.pointerEvents = 'auto';
    area9.style.pointerEvents = 'auto';

    gameStatus.textContent = "It's your Turn";
    gameStatus.style.color = "white";
}

function quitGame() {
    arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9],
        player = true, pickedNumber = 0, winner = true,
        countMove = 0, playerScore = 0, computerScore = 0;

    area1.innerHTML = '<img src="./assets/cut_images_9YmkIVqOxG/image_part_001.png" style="width: 100%; height: 100%; background-color: white;"/>';
    area2.innerHTML = '<img src="./assets/cut_images_9YmkIVqOxG/image_part_002.png" style="width: 100%; height: 100%; background-color: white;"/>';
    area3.innerHTML = '<img src="./assets/cut_images_9YmkIVqOxG/image_part_003.png" style="width: 100%; height: 100%; background-color: white;"/>';
    area4.innerHTML = '<img src="./assets/cut_images_9YmkIVqOxG/image_part_004.png" style="width: 100%; height: 100%; background-color: white;"/>';
    area5.innerHTML = '<img src="./assets/cut_images_9YmkIVqOxG/image_part_005.png" style="width: 100%; height: 100%; background-color: white;"/>';
    area6.innerHTML = '<img src="./assets/cut_images_9YmkIVqOxG/image_part_006.png" style="width: 100%; height: 100%; background-color: white;"/>';
    area7.innerHTML = '<img src="./assets/cut_images_9YmkIVqOxG/image_part_007.png" style="width: 100%; height: 100%; background-color: white;"/>';
    area8.innerHTML = '<img src="./assets/cut_images_9YmkIVqOxG/image_part_008.png" style="width: 100%; height: 100%; background-color: white;"/>';
    area9.innerHTML = '<img src="./assets/cut_images_9YmkIVqOxG/image_part_009.png" style="width: 100%; height: 100%; background-color: white;"/>';
    playScore.textContent = '0';
    compScore.textContent = '0';

    gameStatus.textContent = "Press any Box to start the game";
    gameStatus.style.color = "white";

    sessionStorage.removeItem('playerscore');
    sessionStorage.removeItem('computerscore');


    area1.style.pointerEvents = 'auto';
    area2.style.pointerEvents = 'auto';
    area3.style.pointerEvents = 'auto';
    area4.style.pointerEvents = 'auto';
    area5.style.pointerEvents = 'auto';
    area6.style.pointerEvents = 'auto';
    area7.style.pointerEvents = 'auto';
    area8.style.pointerEvents = 'auto';
    area9.style.pointerEvents = 'auto';
}


