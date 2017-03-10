function diceGame(){
  const diceList = document.getElementById('diceList');
  const li = document.getElementById('diceResult');
  let diceItem = document.createElement('li');
  let diceText = document.createTextNode('null');
  
  var letsRoll = Math.floor(Math.random() * 12) + 1;
  switch (letsRoll) {
    case (7):
    case (11):
      //li.innerHTML += letsRoll + " you win!"
      diceText = document.createTextNode(letsRoll + ": You win!");
      diceItem.appendChild(diceText);
      diceList.appendChild(diceItem);
      break;
    case (2):
    case (3):
    case (12):
      //li.innerHTML += letsRoll + " you lose!"
      diceText = document.createTextNode(letsRoll + ": You lose!");
      diceItem.appendChild(diceText);
      diceList.appendChild(diceItem);
      break;
    default:
      //li.innerHTML += letsRoll + " reroll!"
      diceText = document.createTextNode(letsRoll + ": Reroll!");
      diceItem.appendChild(diceText);
      diceList.appendChild(diceItem);
      break;
  }
}

const diceButton = document.getElementById('diceButton');
const toggleListDice = document.getElementById('toggleList2');
const listDivDice = document.querySelector('#diceList');

diceButton.addEventListener('click', diceGame);

toggleListDice.addEventListener('click',() => {
  if (listDivDice.style.display == 'none') {
    toggleListDice.textContent = 'Hide List'  
    listDivDice.style.display = 'block';
  } else {
    toggleListDice.textContent = 'Show List'
    listDivDice.style.display = 'none';
  }
});

function clearDice() {
    const listClearDice = document.getElementById("diceList");
    while (listClearDice.hasChildNodes()) {
        listClearDice.removeChild(listClearDice.firstChild);
    }
}