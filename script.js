"use strict";

const nombreDeCasesTemp = 64;


const boardGame = document.querySelector(".boardgame");
const coverPlate = document.querySelector(".cover--container")
const allCasesArray = [];
const bombPositionArray = [];



// On initilise les objets JS du jeu
class InitGameCl {
  constructor(caseNumber, bombNumber) {
    this.caseNumber = caseNumber;
    this.bombNumber = bombNumber;
  }

 

  createJSCases() {
    for(let j=1; j<= this.caseNumber; j++) {
      allCasesArray.push(new CaseCl(j, 0))
    }
  }

  putBombsOnJSCases() {
    // On déclare la fonction qui va nous fournir des entiers au hasard
    const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
    // On fait tourner la boucle jusqu'au nombre max de bombes que l'on veut puis on crée un array avec la position des cases qui contiendront des bombes dans l'array qui contient les bombes (attention au décalage entre la position dans l'array et le numéro de la case)
    for(let k = 0; k <= this.bombNumber - 1; k++) {
      const bbpos = randomInt(0, this.caseNumber - 1);
      bombPositionArray.push(bbpos)
    }
    // On ajoute dans les objets cases le fait qu'elle contiennent une bombe. 
    bombPositionArray.forEach(function(pos) {
      allCasesArray[pos].addBomb();
    })
  }



} 

// On définit une classe pour les cases du jeu
class CaseCl {
  constructor(position, numberOfBombsNearby) {
    this.position = position;
    this.numberOfBombsNearby = numberOfBombsNearby
  }

  addBomb() {
    this.bombPresence = "yes"
  }

  setNumberOfBombsNearby() {
    this.NumberOfBombsNearby = 1
  }

}

class DemineurTurnCL {

  CalculateNumberOfBombsNearby() {
    allCasesArray.forEach(function(cas) {
      let count;
        if (cas.bombPresence === "yes") {
          cas.numberOfBombsNearby =0
        } else if (cas.position === 1) {
          count =0;
          if (allCasesArray[cas.position].bombPresence === "yes") {
            count ++
          } if (allCasesArray[cas.position -1 + 8].bombPresence === "yes") {
            count ++
          } if (allCasesArray[cas.position - 1 + 9].bombPresence ==="yes") {
            count ++
          }
          cas.numberOfBombsNearby = count;
        } else if (cas.position === 8) {
            count =0;
            if (allCasesArray[cas.position - 2].bombPresence === "yes") {
              count ++
            } 
            if (allCasesArray[cas.position -1 + 8].bombPresence === "yes") {
              count ++
            } if (allCasesArray[cas.position -1 + 7].bombPresence === "yes") {
              count ++
            } 
            cas.numberOfBombsNearby = count;
        } else if (cas.position === 57) {
            count = 0;
            if (allCasesArray[cas.position - 1 - 8].bombPresence === "yes") {
              count ++
          } if (allCasesArray[cas.position].bombPresence === "yes") {
            count ++
          } if (allCasesArray[cas.position - 1 - 7].bombPresence === "yes") {
            count ++
        } cas.numberOfBombsNearby = count;
      } else if (cas.position === 64) {
        count = 0;
          if (allCasesArray[cas.position - 1 - 8].bombPresence === "yes") {
            count ++
        } if (allCasesArray[cas.position - 2].bombPresence === "yes") {
          count ++
        } if (allCasesArray[cas.position -1 - 9].bombPresence === "yes") {
          count ++
        } 
        cas.numberOfBombsNearby = count;
      } else if (cas.position === 2 || cas.position === 3 || cas.position === 4 || cas.position === 5 || cas.position === 6 || cas.position === 7 ) {
        count = 0;
          if (allCasesArray[cas.position - 2].bombPresence === "yes") {
            count ++
          } if (allCasesArray[cas.position].bombPresence === "yes") {
            count ++
        }  if (allCasesArray[cas.position - 1 + 8].bombPresence === "yes") {
          count ++
        }  if (allCasesArray[cas.position - 1 + 7].bombPresence === "yes") {
          count ++
        }  if (allCasesArray[cas.position - 1 + 9].bombPresence === "yes") {
          count ++
        }
      cas.numberOfBombsNearby = count;
    } else if (cas.position === 58 || cas.position === 59 || cas.position === 60 || cas.position === 61 || cas.position === 62 || cas.position === 63 ) {
        count = 0;
        if (allCasesArray[cas.position - 2].bombPresence === "yes") {
          count ++
        } if (allCasesArray[cas.position].bombPresence === "yes") {
          count ++
        } if (allCasesArray[cas.position - 1 - 8].bombPresence === "yes") {
          count ++
        }  if (allCasesArray[cas.position - 1 - 7].bombPresence === "yes") {
          count ++
        }  if (allCasesArray[cas.position - 1 - 9].bombPresence === "yes") {
          count ++
        }
        cas.numberOfBombsNearby = count;
    } else if (cas.position === 9 || cas.position === 17 || cas.position === 25 || cas.position === 33 || cas.position === 41 || cas.position === 49 ) {
        count = 0;
        if (allCasesArray[cas.position].bombPresence === "yes") {
          count ++
        } if (allCasesArray[cas.position - 1 - 8].bombPresence === "yes") {
          count ++
      } if (allCasesArray[cas.position - 1 + 8].bombPresence === "yes") {
        count ++
      } if (allCasesArray[cas.position - 1 - 7].bombPresence === "yes") {
        count ++
      } if (allCasesArray[cas.position - 1 + 9].bombPresence === "yes") {
        count ++
      }
    cas.numberOfBombsNearby = count;
  } else if (cas.position === 16 || cas.position === 24 || cas.position === 32 || cas.position === 40 || cas.position === 48 || cas.position === 56 ) {
    count = 0;
      if (allCasesArray[cas.position - 2].bombPresence === "yes") {
        count ++
      }  if (allCasesArray[cas.position - 1 - 8].bombPresence === "yes") {
        count ++
      }  if (allCasesArray[cas.position - 1 + 8].bombPresence === "yes") {
        count ++
      } if (allCasesArray[cas.position - 1 - 9].bombPresence === "yes") {
        count ++
      } if (allCasesArray[cas.position - 1 + 7].bombPresence === "yes") {
        count ++
      }
    cas.numberOfBombsNearby = count;
  } else {
    count = 0;
      if (allCasesArray[cas.position - 2].bombPresence === "yes") {
        count ++
      } if (allCasesArray[cas.position].bombPresence === "yes") {
        count ++
      } if (allCasesArray[cas.position - 1 - 8].bombPresence === "yes") {
        count ++
      } if (allCasesArray[cas.position - 1 - 7].bombPresence === "yes") {
        count ++
      } if (allCasesArray[cas.position - 1 - 9].bombPresence === "yes") {
        count ++
      } if (allCasesArray[cas.position - 1 + 8].bombPresence === "yes") {
        count ++
      } if (allCasesArray[cas.position - 1 + 7].bombPresence === "yes") {
        count ++
      } if (allCasesArray[cas.position - 1 + 9].bombPresence === "yes") {
        count ++
      } 
    cas.numberOfBombsNearby = count;
  }
  })
  }

  clickHandler() {
    coverPlate.addEventListener("click", function(e) {
      // Si on clique sur une case qui contient une bombre => problème. Sinon, on découvre la case.
      allCasesArray[e.target.dataset.number - 1].bombPresence === "yes" ? coverPlate.classList.add("hidden"):document.querySelector(`.cover-top--${e.target.dataset.number}`).classList.add("hidden");
    })
  }
  
}

// On crée la représentation visuelle du jeu
class boardGameDisplayCl {
  constructor(caseNumber) {
    this.caseNumber = caseNumber;
  }

  createVisualBoard() {
    let html;
    for(let i= 1; i<= this.caseNumber; i++) {
      html = `<div class="case case--${i}">
      <div class="inside-case inside-case--${i}"></div>
      </div>`
      boardGame.insertAdjacentHTML("beforeend", html)
    }
  }

  createCover() {
    let html;
    for(let i= 1; i<= this.caseNumber; i++) {
      html = `<div class="cover cover-top--${i}" data-number = "${i}"></div>`
      coverPlate.insertAdjacentHTML("beforeend", html)
    }
  }

  // Si l'objet case contient une bombe, on va l'afficher sur l'interface
  showBombs() {
    allCasesArray.forEach(function(cas) {
      if (cas.bombPresence === "yes") {
        document.querySelector(`.inside-case--${cas.position}`).innerHTML = "B";
      }
    });
  }

  showBombsNearby() {
    allCasesArray.forEach(function(cas) {
      if(cas.numberOfBombsNearby != 0) {
        // On montre le chiffre
        document.querySelector(`.inside-case--${cas.position}`).innerHTML = `${cas.numberOfBombsNearby}`;
        if(cas.numberOfBombsNearby === 1) {
          // On adapte le style en fonction du nombre de bombes à côté
          document.querySelector(`.inside-case--${cas.position}`).style.color = "green";
        } else if(cas.numberOfBombsNearby === 2) {
          document.querySelector(`.inside-case--${cas.position}`).style.color = "blue";
        } else if(cas.numberOfBombsNearby === 3) {
          document.querySelector(`.inside-case--${cas.position}`).style.color = "orange";
        } else if(cas.numberOfBombsNearby === 4) {
          document.querySelector(`.inside-case--${cas.position}`).style.color = "red";
        } else {
          document.querySelector(`.inside-case--${cas.position}`).style.color = "purple";
        }
      }
    }
    )}
}







const newDemineurGame = new InitGameCl(nombreDeCasesTemp, 10);
newDemineurGame.createJSCases();
newDemineurGame.putBombsOnJSCases();

const newDemineurTurn = new DemineurTurnCL();
newDemineurTurn.CalculateNumberOfBombsNearby();
newDemineurTurn.clickHandler();


const newBoardGameDisplay = new boardGameDisplayCl(nombreDeCasesTemp);
newBoardGameDisplay.createVisualBoard();
newBoardGameDisplay.showBombs();
newBoardGameDisplay.showBombsNearby();
newBoardGameDisplay.createCover();




console.log(allCasesArray);
