"use strict";

const nombreDeCasesTemp = 64;

const gameContainer = document.querySelector("board-container");
const boardGame = document.querySelector(".boardgame");
const coverPlate = document.querySelector(".cover--container");
let allCasesArray;
let bombPositionArray;
const gameOverPopup = document.querySelector(".gameover-popup");
const victoryPopup = document.querySelector(".victory-popup");
const gameoverBtn = document.querySelector(".gameover-button");
const victoryBtn = document.querySelector(".victory-button");
const scoreDisplay = document.querySelector(".score-display");
const scoreNumber = document.querySelector(".score-number");
const startPopup = document.querySelector(".start-popup");
const startButton = document.querySelector(".start-button");

class CaseCl {
  constructor(position, numberOfBombsNearby) {
    this.position = position;
    this.numberOfBombsNearby = numberOfBombsNearby;
    this.bombPresence = false;
  }

  addBomb() {
    this.bombPresence = true;
  }

  // Pour indiquer dans l'objet le fait qu'on a cliqué sur une case
  clickedOn() {
    this.wasClickedOn = true;
  }
}

// On initilise les objets JS du jeu
class BoardGameCl {
  constructor(caseNumber, bombNumber) {
    this.caseNumber = caseNumber;
    this.bombNumber = bombNumber;
  }

  // On crée des cases qu'on range dans un tableau.
  createJSCases() {
    for (let j = 1; j <= this.caseNumber; j++) {
      allCasesArray.push(new CaseCl(j, 0));
    }
  }

  // On met des bombes dans les cases
  putBombsOnJSCases() {
    // On déclare la fonction qui va nous fournir des entiers au hasard
    const randomInt = (min, max) =>
      Math.floor(Math.random() * (max - min) + 1) + min;
    // On fait tourner la boucle jusqu'au nombre max de bombes que l'on veut puis on crée un array avec la position des cases qui contiendront des bombes dans l'array qui contient les bombes (attention au décalage entre la position dans l'array et le numéro de la case)
    for (let k = 0; k <= this.bombNumber - 1; k++) {
      const bbpos = randomInt(0, this.caseNumber - 1);
      bombPositionArray.push(bbpos);
    }
    // On ajoute dans les objets cases le fait qu'elle contiennent une bombe.
    bombPositionArray.forEach(function (pos) {
      allCasesArray[pos].addBomb();
    });
  }

  // Pour chaque case, on calcule le nombre de cases qui sont sur les cases concommittantes.
  calculateNumberOfBombsNearby() {
    allCasesArray.forEach(function (cas) {
      let count;
      if (cas.bombPresence) {
        cas.numberOfBombsNearby = 0;
      } else if (cas.position === 1) {
        count = 0;
        if (allCasesArray[cas.position].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 1 + 8].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 1 + 9].bombPresence) {
          count++;
        }
        cas.numberOfBombsNearby = count;
      } else if (cas.position === 8) {
        count = 0;
        if (allCasesArray[cas.position - 2].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 1 + 8].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 1 + 7].bombPresence) {
          count++;
        }
        cas.numberOfBombsNearby = count;
      } else if (cas.position === 57) {
        count = 0;
        if (allCasesArray[cas.position - 1 - 8].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 1 - 7].bombPresence) {
          count++;
        }
        cas.numberOfBombsNearby = count;
      } else if (cas.position === 64) {
        count = 0;
        if (allCasesArray[cas.position - 1 - 8].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 2].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 1 - 9].bombPresence) {
          count++;
        }
        cas.numberOfBombsNearby = count;
      } else if (
        cas.position === 2 ||
        cas.position === 3 ||
        cas.position === 4 ||
        cas.position === 5 ||
        cas.position === 6 ||
        cas.position === 7
      ) {
        count = 0;
        if (allCasesArray[cas.position - 2].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 1 + 8].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 1 + 7].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 1 + 9].bombPresence) {
          count++;
        }
        cas.numberOfBombsNearby = count;
      } else if (
        cas.position === 58 ||
        cas.position === 59 ||
        cas.position === 60 ||
        cas.position === 61 ||
        cas.position === 62 ||
        cas.position === 63
      ) {
        count = 0;
        if (allCasesArray[cas.position - 2].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 1 - 8].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 1 - 7].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 1 - 9].bombPresence) {
          count++;
        }
        cas.numberOfBombsNearby = count;
      } else if (
        cas.position === 9 ||
        cas.position === 17 ||
        cas.position === 25 ||
        cas.position === 33 ||
        cas.position === 41 ||
        cas.position === 49
      ) {
        count = 0;
        if (allCasesArray[cas.position].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 1 - 8].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 1 + 8].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 1 - 7].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 1 + 9].bombPresence) {
          count++;
        }
        cas.numberOfBombsNearby = count;
      } else if (
        cas.position === 16 ||
        cas.position === 24 ||
        cas.position === 32 ||
        cas.position === 40 ||
        cas.position === 48 ||
        cas.position === 56
      ) {
        count = 0;
        if (allCasesArray[cas.position - 2].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 1 - 8].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 1 + 8].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 1 - 9].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 1 + 7].bombPresence) {
          count++;
        }
        cas.numberOfBombsNearby = count;
      } else {
        count = 0;
        if (allCasesArray[cas.position - 2].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 1 - 8].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 1 - 7].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 1 - 9].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 1 + 8].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 1 + 7].bombPresence) {
          count++;
        }
        if (allCasesArray[cas.position - 1 + 9].bombPresence) {
          count++;
        }
        cas.numberOfBombsNearby = count;
      }
    });
  }
}

class ShowCl {
  constructor(caseNumber) {
    this.caseNumber = caseNumber;
  }

  // On crée les cases dans le HTML
  createVisualBoard() {
    let html;
    for (let i = 1; i <= this.caseNumber; i++) {
      html = `<div class="case case--${i}">
      <div class="inside-case inside-case--${i}"></div>
      </div>`;
      boardGame.insertAdjacentHTML("beforeend", html);
    }
  }
  // On ajoute les caches en HTML
  createCover() {
    coverPlate.classList.remove("hidden");
    let html;
    for (let i = 1; i <= this.caseNumber; i++) {
      html = `<div class="cover cover-top--${i}" data-number = "${i}"></div>`;
      coverPlate.insertAdjacentHTML("beforeend", html);
    }
  }

  // Pour montrer le jeu
  showVisualBoard() {
    gameContainer.classList.remove("blind");
  }
  // Si l'objet case contient une bombe, on va l'afficher sur l'interface
  showBombs() {
    allCasesArray.forEach(function (cas) {
      if (cas.bombPresence) {
        document.querySelector(`.inside-case--${cas.position}`).innerHTML =
          "💣";
      }
    });
  }

  // Pour que sur chaque case, le nombre de bombes à proximité s'affiche.
  showBombsNearby() {
    allCasesArray.forEach(function (cas) {
      if (cas.numberOfBombsNearby != 0) {
        // On montre le chiffre
        document.querySelector(
          `.inside-case--${cas.position}`
        ).innerHTML = `${cas.numberOfBombsNearby}`;
        if (cas.numberOfBombsNearby === 1) {
          // On adapte le style en fonction du nombre de bombes à côté
          document.querySelector(`.inside-case--${cas.position}`).style.color =
            "green";
        } else if (cas.numberOfBombsNearby === 2) {
          document.querySelector(`.inside-case--${cas.position}`).style.color =
            "blue";
        } else if (cas.numberOfBombsNearby === 3) {
          document.querySelector(`.inside-case--${cas.position}`).style.color =
            "orange";
        } else if (cas.numberOfBombsNearby === 4) {
          document.querySelector(`.inside-case--${cas.position}`).style.color =
            "red";
        } else {
          document.querySelector(`.inside-case--${cas.position}`).style.color =
            "purple";
        }
      }
    });
  }
}

class GameCl {
  constructor() {
    this.actionsAfterClick = this.actionsAfterClick.bind(this);
    this.startGame = this.startGame.bind(this);
    this.outcome = "ongoing";
    this.score = 0;
  }

  initGame() {
    allCasesArray = [];
    bombPositionArray = [];
    boardGame.innerHTML = "";
    coverPlate.innerHTML = "";

    const newBoardGame = new BoardGameCl(64, 10);
    newBoardGame.createJSCases();
    newBoardGame.putBombsOnJSCases();
    newBoardGame.calculateNumberOfBombsNearby();

    const newShow = new ShowCl(64);
    newShow.createVisualBoard();
    newShow.createCover();
    newShow.showBombs();
    newShow.showBombsNearby();

    victoryPopup.classList.add("blind");
    gameOverPopup.classList.add("blind");
    coverPlate.classList.remove("hidden");

    this.displayScore();
  }

  startGame() {
    this.initGame();
    this.playGame();
  }

  displayScore() {
    scoreNumber.classList.remove("blind");
    scoreNumber.innerHTML = this.score;
  }

  coverHide() {
    coverPlate.removeEventListener("click", this.actionsAfterClick);
    coverPlate.classList.add("hidden");
  }

  victoriousGame() {
    this.coverHide();
    victoryPopup.classList.remove("blind");
    this.score++;
    victoryPopup.addEventListener("click", this.startGame);
  }

  unsuccesfullGame() {
    gameOverPopup.classList.remove("blind");
    gameoverBtn.addEventListener("click", this.startGame);
  }

  checkVictory() {
    if (
      allCasesArray
        .filter((cas) => !cas.bombPresence)
        .every((val) => val.wasClickedOn)
    ) {
      this.victoriousGame();
    }
  }

  actionsAfterClick(e) {
    document
      .querySelector(`.cover-top--${e.target.dataset.number}`)
      .classList.add("hidden");
    if (allCasesArray[e.target.dataset.number - 1].bombPresence) {
      this.coverHide();
      this.unsuccesfullGame();
    } else {
      allCasesArray[e.target.dataset.number - 1].wasClickedOn = true;
      this.checkVictory();
    }
  }

  playGame() {
    coverPlate.addEventListener("click", this.actionsAfterClick);
  }
}

const newGame = new GameCl();
newGame.startGame();
