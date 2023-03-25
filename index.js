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

let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    player, pickedNumber, winner = false,
    playerScore = 0, computerScore = 0, countMove = 0;

function playerMove(event) {
    player = true;
    console.log(player);

    playerSelection(event);
    removePickedNumber();
    checkWinner();


    if (winner === false && countMove < 9) {
        setTimeout(() => {
            computerMove();
            removePickedNumber();
            checkWinner();
        }, 3000);


    } else if (countMove === 9 && winner === false) {
        console.log("It's a draw");
        gameStatus.textContent = "It's a draw";
    }

    console.log(countMove);
}

function playerSelection(event) {
    if (event === 1) {
        area1.innerHTML = player === true ? '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon"/>' : '<img class="in-game-icon" src="./assets/muzan-icon-removebg-preview.png" alt="muzan-icon"/>';
        area1.style.pointerEvents = 'none';
        pickedNumber = event;

        console.log(area1);
    } else if (event === 2) {
        area2.innerHTML = player === true ? '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon"/>' : '<img class="in-game-icon" src="./assets/muzan-icon-removebg-preview.png" alt="muzan-icon"/>';
        area2.style.pointerEvents = 'none';
        pickedNumber = event;

    } else if (event === 3) {
        area3.innerHTML = player === true ? '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon"/>' : '<img class="in-game-icon" src="./assets/muzan-icon-removebg-preview.png" alt="muzan-icon"/>';
        area3.style.pointerEvents = 'none';
        pickedNumber = event;

    } else if (event === 4) {
        area4.innerHTML = player === true ? '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon"/>' : '<img class="in-game-icon" src="./assets/muzan-icon-removebg-preview.png" alt="muzan-icon"/>';
        area4.style.pointerEvents = 'none';
        pickedNumber = event;

    } else if (event === 5) {
        area5.innerHTML = player === true ? '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon"/>' : '<img class="in-game-icon" src="./assets/muzan-icon-removebg-preview.png" alt="muzan-icon"/>';
        area5.style.pointerEvents = 'none';
        pickedNumber = event;

    } else if (event === 6) {
        area6.innerHTML = player === true ? '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon"/>' : '<img class="in-game-icon" src="./assets/muzan-icon-removebg-preview.png" alt="muzan-icon"/>';
        area6.style.pointerEvents = 'none';
        pickedNumber = event;

    } else if (event === 7) {
        area7.innerHTML = player === true ? '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon"/>' : '<img class="in-game-icon" src="./assets/muzan-icon-removebg-preview.png" alt="muzan-icon"/>';
        area7.style.pointerEvents = 'none';
        pickedNumber = event;

    } else if (event === 8) {
        area8.innerHTML = player === true ? '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon"/>' : '<img class="in-game-icon" src="./assets/muzan-icon-removebg-preview.png" alt="muzan-icon"/>';
        area8.style.pointerEvents = 'none';
        pickedNumber = event;

    } else if (event === 9) {
        area9.innerHTML = player === true ? '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon"/>' : '<img class="in-game-icon" src="./assets/muzan-icon-removebg-preview.png" alt="muzan-icon"/>';
        area9.style.pointerEvents = 'none';
        pickedNumber = event;
    }

    countMove++;
    console.log(pickedNumber);
}

function removePickedNumber() {
    const index = arrayNum.indexOf(pickedNumber);
    const x = arrayNum.splice(index, 1);
    console.log(arrayNum);
}

function computerMove() {
    let randomNum = arrayNum[Math.floor(Math.random() * arrayNum.length)];
    player = false;
    console.log(player);
    playerSelection(randomNum);
}



function checkWinner() {
    let boardStatus = [], countBlank = 0;
    const playingBoardStatus = document.getElementsByClassName('board');

    for (let x of playingBoardStatus) {
        if (x.innerHTML === '') {
            countBlank++;
            boardStatus.push(countBlank);
        } else {
            boardStatus.push(x.innerHTML);
        }
    }

    console.log(boardStatus);

    if (boardStatus[0] === boardStatus[1] &&
        boardStatus[1] === boardStatus[2] &&
        boardStatus[0] === boardStatus[2]) {
        console.log(`Winner ${boardStatus[0] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'Player' : 'Computer'}`);
        boardStatus[0] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? playerScore++ : computerScore++;
        console.log(playerScore, computerScore);
        playScore.textContent = playerScore;
        compScore.textContent = computerScore;

        gameStatus.textContent = boardStatus[0] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'You Win' : 'You Lose';
        gameStatus.style.color = boardStatus[0] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'white' : 'red';

        for (let x of playingBoardStatus) {
            if (x.textContent === '') {
                x.style.pointerEvents = 'none';
            }
        }

        winner = true;

    } else if (
        boardStatus[3] === boardStatus[4] &&
        boardStatus[4] === boardStatus[5] &&
        boardStatus[3] === boardStatus[5]) {
        console.log(`Winner ${boardStatus[3] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'Player' : 'Computer'}`);
        boardStatus[3] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? playerScore++ : computerScore++;
        console.log(playerScore, computerScore);
        winner = true;
        playScore.textContent = playerScore;
        compScore.textContent = computerScore;

        gameStatus.textContent = boardStatus[3] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'You Win' : 'You Lose';
        gameStatus.style.color = boardStatus[3] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'white' : 'red';

        for (let x of playingBoardStatus) {
            if (x.textContent === '') {
                x.style.pointerEvents = 'none';
            }
        }


    } else if (
        boardStatus[6] === boardStatus[7] &&
        boardStatus[7] === boardStatus[8] &&
        boardStatus[6] === boardStatus[8]) {
        console.log(`Winner ${boardStatus[6] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'Player' : 'Computer'}`);
        boardStatus[6] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? playerScore++ : computerScore++;
        console.log(playerScore, computerScore);
        playScore.textContent = playerScore;
        compScore.textContent = computerScore;
        winner = true;

        gameStatus.textContent = boardStatus[6] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'You Win' : 'You Lose';
        gameStatus.style.color = boardStatus[6] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'white' : 'red';

        for (let x of playingBoardStatus) {
            if (x.textContent === '') {
                x.style.pointerEvents = 'none';
            }
        }

    } else if (
        boardStatus[0] === boardStatus[3] &&
        boardStatus[3] === boardStatus[6] &&
        boardStatus[0] === boardStatus[6]) {
        console.log(`Winner ${boardStatus[0] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'Player' : 'Computer'}`);
        boardStatus[0] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? playerScore++ : computerScore++;
        console.log(playerScore, computerScore);
        playScore.textContent = playerScore;
        compScore.textContent = computerScore;
        winner = true;

        gameStatus.textContent = boardStatus[0] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'You Win' : 'You Lose';
        gameStatus.style.color = boardStatus[0] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'white' : 'red';

        for (let x of playingBoardStatus) {
            if (x.textContent === '') {
                x.style.pointerEvents = 'none';
            }
        }

    } else if (
        boardStatus[1] === boardStatus[4] &&
        boardStatus[4] === boardStatus[7] &&
        boardStatus[1] === boardStatus[7]) {
        console.log(`Winner ${boardStatus[1] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'Player' : 'Computer'}`);
        boardStatus[1] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? playerScore++ : computerScore++;
        console.log(playerScore, computerScore);
        playScore.textContent = playerScore;
        compScore.textContent = computerScore;
        winner = true;

        gameStatus.textContent = boardStatus[1] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'You Win' : 'You Lose';
        gameStatus.style.color = boardStatus[1] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'white' : 'red';

        for (let x of playingBoardStatus) {
            if (x.textContent === '') {
                x.style.pointerEvents = 'none';
            }
        }


    } else if (
        boardStatus[2] === boardStatus[5] &&
        boardStatus[5] === boardStatus[8] &&
        boardStatus[2] === boardStatus[8]) {
        console.log(`Winner ${boardStatus[2] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'Player' : 'Computer'}`);
        boardStatus[2] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? playerScore++ : computerScore++;
        console.log(playerScore, computerScore);
        playScore.textContent = playerScore;
        compScore.textContent = computerScore;
        winner = true;

        gameStatus.textContent = boardStatus[2] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'You Win' : 'You Lose';
        gameStatus.style.color = boardStatus[2] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'white' : 'red';

        for (let x of playingBoardStatus) {
            if (x.textContent === '') {
                x.style.pointerEvents = 'none';
            }
        }


    } else if (
        boardStatus[0] === boardStatus[4] &&
        boardStatus[4] === boardStatus[8] &&
        boardStatus[0] === boardStatus[8]) {
        console.log(`Winner ${boardStatus[0] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'Player' : 'Computer'}`);
        boardStatus[0] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? playerScore++ : computerScore++;
        console.log(playerScore, computerScore);
        playScore.textContent = playerScore;
        compScore.textContent = computerScore;
        winner = true;

        gameStatus.textContent = boardStatus[0] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'You Win' : 'You Lose';
        gameStatus.style.color = boardStatus[0] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'white' : 'red';

        for (let x of playingBoardStatus) {
            if (x.textContent === '') {
                x.style.pointerEvents = 'none';
            }
        }


    } else if (
        boardStatus[2] === boardStatus[4] &&
        boardStatus[4] === boardStatus[6] &&
        boardStatus[2] === boardStatus[6]) {
        console.log(`Winner ${boardStatus[2] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'Player' : 'Computer'}`);
        boardStatus[2] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? playerScore++ : computerScore++;
        console.log(playerScore, computerScore);
        playScore.textContent = playerScore;
        compScore.textContent = computerScore;
        winner = true;

        gameStatus.textContent = boardStatus[2] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'You Win' : 'You Lose';
        gameStatus.style.color = boardStatus[2] === '<img class="in-game-icon" src="./assets/tanjiro-icon-removebg-preview.png" alt="tanjiro-icon">' ? 'white' : 'red';

        for (let x of playingBoardStatus) {
            if (x.textContent === '') {
                x.style.pointerEvents = 'none';
            }
        }
    } else {
        gameStatus.textContent = player ? 'Muzan turn' : "It's Your Turn";
        console.log('No Win');
    } 
}

function playGame() {
    arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9],
        player = true, pickedNumber, winner = false,
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
        player, pickedNumber, winner = false,
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

    gameStatus.textContent = "Press any X to start the game";
    gameStatus.style.color = "white";


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

