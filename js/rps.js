function rpsGame(){
  const li = document.getElementById('rpsResult');
  const rpsList = document.getElementById('rpsList');
  
  let rpsItem = document.createElement('li'); 
  let rpsText = document.createTextNode('null');
  
  var move2 = Math.floor(Math.random() * 3) + 1; //generates three numbers. 1 = rock, 2 = paper and 3 = scissors.
  
  var selected = "null";
  
 for(var i = 0; i < radioButtons.length; i++) {
  if(radioButtons[2].checked){
    selected = "scissors";
    break;
  } else if(radioButtons[1].checked){
    selected = "paper";
    break;
  } else {
    selected = "rock";
    break;
  }
 } 
  if(move2 == 1){
   if(selected == "paper"){
      rpsText = document.createTextNode("Your Paper covered my Rock!");
      rpsItem.appendChild(rpsText);
      rpsList.appendChild(rpsItem);
   }else if(selected == "rock"){
     rpsText = document.createTextNode("We both played Rock!");
     rpsItem.appendChild(rpsText);
     rpsList.appendChild(rpsItem);
   }else{
     rpsText = document.createTextNode("My Rock destroyed your Scissors!");
     rpsItem.appendChild(rpsText);
     rpsList.appendChild(rpsItem);
   }
 }
 else if(move2 == 2){
   if(selected == "scissors"){
     rpsText = document.createTextNode("Your Scissors sliced my Paper!");
     rpsItem.appendChild(rpsText);
     rpsList.appendChild(rpsItem);
   }else if(selected == "paper"){
     rpsText = document.createTextNode("We both played Paper!");
     rpsItem.appendChild(rpsText);
     rpsList.appendChild(rpsItem);
   }else{
     rpsText = document.createTextNode("My Paper covered your Rock!");
     rpsItem.appendChild(rpsText);
     rpsList.appendChild(rpsItem);
   }
 }
 else if(move2 == 3){
   if (selected == "rock"){
     rpsText = document.createTextNode("Your Rock destroyed my Paper!");
     rpsItem.appendChild(rpsText);
     rpsList.appendChild(rpsItem);
   }else if(selected == "scissors"){
     rpsText = document.createTextNode("We both played Scissors!");
     rpsItem.appendChild(rpsText);
     rpsList.appendChild(rpsItem);
   }else{
     rpsText = document.createTextNode("My Scissors sliced your Paper!");
     rpsItem.appendChild(rpsText);
     rpsList.appendChild(rpsItem);
   }
  }
 }

const toggleListRps = document.getElementById('toggleList1');
const listDivRps = document.querySelector('#rpsList');

var radioButtons = document.querySelectorAll('input[name="move"]');
var play = document.getElementById('play');

play.addEventListener('click', rpsGame);

toggleListRps.addEventListener('click',() => {
  if (listDivRps.style.display == 'none') {
  toggleListRps.textContent = 'Hide List'  
  listDivRps.style.display = 'block';
  } else {
  toggleListRps.textContent = 'Show List'
  listDivRps.style.display = 'none';
  }
});

function clearRps() {
    const listClearRps = document.getElementById("rpsList");
    while (listClearRps.hasChildNodes()) {
        listClearRps.removeChild(listClearRps.firstChild);
    }
}

