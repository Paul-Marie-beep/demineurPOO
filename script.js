"use strict";

const nombreDeCasesTemp = 64;

const gameContainer = document.querySelector("board-container");
const boardGame = document.querySelector(".boardgame");
const coverPlate = document.querySelector(".cover--container");
let allCasesArray = [];
let bombPositionArray = [];
const gameOverPopup = document.querySelector(".gameover-popup");
const victoryPopup = document.querySelector(".victory-popup");
const gameoverBtn = document.querySelector(".gameover-button");
const victoryBtn = document.querySelector(".victory-button");
const scoreDisplay = document.querySelector(".score-display");
const scoreNumber = document.querySelector(".score-number");
const startPopup = document.querySelector(".start-popup");
const startButton = document.querySelector(".start-button");

// On initilise les objets JS du jeu
class InitGameCl {
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

  // C'est la fonction dans laquelle on va mettre les actions à effectuer quand on clique sur une case et que l'on va mettre dans l'eventhandler juste après
  actionsAfterClick(e) {
    // Si on clique sur une case qui contient une bombe => problème. Sinon, on découvre la case.
    // Conditon de défaite
    if (allCasesArray[e.target.dataset.number - 1].bombPresence) {
      coverPlate.classList.add("hidden");
      gameOverPopup.classList.remove("blind");
      coverPlate.removeEventListener("click", this.actionsAfterClick);
      const anotherNewGame = new LaunchAnotherGameCl();
      anotherNewGame.afterDefeatActions();
    } else {
      // Court 'normal' du jeu: on clique sur une case sans bombe.
      // On découvre la case sans bombe sur laquelle on vient de cliquer
      document
        .querySelector(`.cover-top--${e.target.dataset.number}`)
        .classList.add("hidden");
      // On note que l'on a cliqué sur la case
      allCasesArray[e.target.dataset.number - 1].wasClickedOn = true;
      const newDemineurTurn = new DemineurTurnCl();
      // On vérifie la condition de victoire définie dans la classe DemineurturnCl et si elle est remplie, la partie est gagnée: on montre le popup et on arrête l'enventlistener
      if (newDemineurTurn.checkForVictory()) {
        // On affiche le popup de victoire
        victoryPopup.classList.remove("blind");
        // On enlève les caches ainsi que leur event listener
        coverPlate.classList.add("hidden");
        coverPlate.removeEventListener("click", this.actionsAfterClick);
        // On lance une autre session de jeu
        const anotherNewGame = new LaunchAnotherGameCl();
        anotherNewGame.afterVictoryActions();
      }
    }
  }

  // Event listener qui définit ce qui se passe quand on clique sur une case
  clickHandler() {
    coverPlate.addEventListener("click", this.actionsAfterClick);
  }
}

class DemineurTurnCl {
  // Pour gagner il faut que l'on ait cliqué sur toutes les cases qui ne contiennent pas de bombes
  checkForVictory() {
    // return allCasesArray
    //   .filter((cas) => !cas.bombPresence)
    //   .every((val) => val.wasClickedOn);
    return true;
  }
}

// C'est la classe pour lancer une nouvelle session de jeu (ie pas la première)
class LaunchAnotherGameCl {
  defeatBtnPressed() {
    newStartGame.erasePreviousGame();
    const anotherGame = new StartGameCl();
    anotherGame.launchGame();
    gameoverBtn.removeEventListener("click", this.defeatBtnPressed$);
  }

  afterDefeatActions() {
    gameoverBtn.addEventListener("click", this.defeatBtnPressed);
  }

  victoryBtnPressed() {
    newStartGame.erasePreviousGame();
    const anotherGame = new StartGameCl();
    anotherGame.launchGame();
    victoryBtn.removeEventListener("click", this.defeatBtnPressed$);
  }

  afterVictoryActions() {
    victoryBtn.addEventListener("click", this.victoryBtnPressed);
    newScore.updateScore();
    newScore.displayScore();
  }
}

// On définit une classe pour les cases du jeu
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

// On crée la représentation visuelle du jeu
class boardGameDisplayCl {
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
    let html;
    for (let i = 1; i <= this.caseNumber; i++) {
      html = `<div class="cover cover-top--${i}" data-number = "${i}"></div>`;
      coverPlate.insertAdjacentHTML("beforeend", html);
    }
    coverPlate.classList.remove("hidden");
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

class KeepScoreCl {
  constructor() {
    this.score = 0;
  }

  updateScore() {
    this.score++;
  }

  displayScore() {
    scoreNumber.classList.remove("blind");
    scoreNumber.innerHTML = `${this.score}`;
  }
}

// Pour lancer le jeu: la première fois et les autres
class StartGameCl {
  launchGame() {
    const newDemineurGame = new InitGameCl(nombreDeCasesTemp, 10);
    newDemineurGame.createJSCases();
    newDemineurGame.putBombsOnJSCases();
    newDemineurGame.calculateNumberOfBombsNearby();
    newDemineurGame.clickHandler();

    const newBoardGameDisplay = new boardGameDisplayCl(nombreDeCasesTemp);
    newBoardGameDisplay.createVisualBoard();
    newBoardGameDisplay.showBombs();
    newBoardGameDisplay.showBombsNearby();
    newBoardGameDisplay.createCover();

    newScore.displayScore();

    scoreDisplay.classList.remove("blind");
  }

  // Gère l'écran d'accueil avec le popup
  welcome() {
    scoreDisplay.classList.add("blind");
    startButton.addEventListener("click", function (e) {
      newStartGame.launchGame();
      startPopup.classList.add("blind");
    });
  }

  // On écrase les infos du jeu d'avant pour pouvoir recommancer
  erasePreviousGame() {
    bombPositionArray = [];
    allCasesArray = [];
    boardGame.innerHTML = "";
    coverPlate.innerHTML = "";
    victoryPopup.classList.add("blind");
    gameOverPopup.classList.add("blind");
  }
}

class PerformCl {
  perform() {
    const newStartGame = new StartGameCl();
    // newStartGame.erasePreviousGame();

    newStartGame.welcome();
  }
}

const newScore = new KeepScoreCl();
const newPerform = new PerformCl();
newPerform.perform();
