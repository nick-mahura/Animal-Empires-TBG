var statsList = [{cls: "population__lions", name: "Lions", val: 1000},
  {cls: "population__wolves", name: "Wolves", val: 1000},
  {cls: "population__foxes", name: "Foxes", val: 300},
  {cls: "population__owls", name: "Owls", val: 100},
  {cls: "population__bears", name: "Bears", val: 500},             
  {cls: "population__monkeys", name: "Monkeys", val: 300},
  {cls: "population__roaches", name: "Roaches", val: 10000}];
var player__name = name;
var racesList = ['Lions', 'Wolves', 'Foxes', 'Owls', 'Bears', 'Monkeys', 'Roaches'];

const texts = {
  text: "Youre sitting on a chair next to a large woodern door. You know that behind that door sits a very mighty ruller, that will crush you in a blink on an eye. Feeling that your life is in danger, you should deside:"
}

function gameStartMenu() {
  //Creating starting screen
  var startingScreen = document.createElement('div');
  startingScreen.className = 'starting-screen';
  document.querySelector('.wrapper').appendChild(startingScreen);
  
  //Creating starting screen form
  var startingScreenForm = document.createElement('form');
  startingScreenForm.className = 'starting-screen__form';
  document.querySelector('.starting-screen').appendChild(startingScreenForm);
  
  //Creating starting screen header
  var startingScreenHeader = document.createElement('p');
  startingScreenHeader.className = 'starting-screen__name';
  startingScreenHeader.innerHTML = "Enter your name:";
  document.querySelector('.starting-screen__form').appendChild(startingScreenHeader);
  
  //Creating starting screen name input
  var startingScreenNameInput = document.createElement('input');
  startingScreenNameInput.setAttribute('type','text');
  startingScreenNameInput.className = 'starting-screen__name-input';
  document.querySelector('.starting-screen__form').appendChild(startingScreenNameInput);
  
  //Creating starting screen start button
  var startingScreenStartButton = document.createElement('input');
  startingScreenStartButton.setAttribute('type','button');
  startingScreenStartButton.setAttribute('value','Start');
  startingScreenStartButton.className = 'starting-screen__start-btn';
  document.querySelector('.starting-screen__form').appendChild(startingScreenStartButton);
  
  function gameStart() {
    createGame()
    console.log(document.querySelectorAll('.stats__population')[0]);
    console.log("game started");
  }
  
  document.querySelector('.starting-screen__start-btn').onclick = function() {
    console.log('game started');
    playerName();
    document.querySelector('.starting-screen').remove();
    setTimeout(createGame, 500);
  }
}

function createGame() {
  //Creating gamewrapper
  var gameWrapper = document.createElement('div');
  gameWrapper.className = 'game__wrapper';
  document.querySelector('.wrapper').appendChild(gameWrapper);
  
  //Creating game header
  var gameHeader = document.createElement('h1');
  gameHeader.className = 'game__header';
  gameHeader.innerHTML = 'Hello ' + player__name + "!";
  document.querySelector('.game__wrapper').appendChild(gameHeader);
  
  //Creating game header
  var gameContent = document.createElement('section');
  gameContent.className = 'game__content';
  document.querySelector('.game__wrapper').appendChild(gameContent);
  
  //Creating game stats
  var gameStats = document.createElement('aside');
  gameStats.className = 'game__stats';
  document.querySelector('.game__content').appendChild(gameStats);
  
  //Creating game stats list
  var gameStatsList = document.createElement('ul');
  gameStatsList.className = 'stats__list';
  document.querySelector('.game__stats').appendChild(gameStatsList);
  
  //Creating game stats list items
  statsList.map(function(obj) {
    let li = document.createElement('li');
    li.className = 'stats__population';
    li.innerHTML = obj.name;
    document.querySelector('.stats__list').appendChild(li);
    let span = document.createElement('span');
    span.classList = obj.cls;
    span.innerHTML = " " + obj.val;
    li.appendChild(span);
  });
  
  //Creating main game area
  var mainGameArea = document.createElement('div');
  mainGameArea.className = 'content__main-game';
  gameContent.appendChild(mainGameArea);
  
  //Creating main game text area 
  var mainGameText = document.createElement('p');
  mainGameText.className = 'main-game__story';
  mainGameText.innerHTML = texts.text;
  mainGameArea.appendChild(mainGameText);
  
  for (let i=0; i<=2; i++) {
    var choiseBtn = document.createElement('button');
    choiseBtn.className = 'choise choise__' + (i+1);
    choiseBtn.innerHTML = 'Choise ' + (i+1);
    mainGameArea.appendChild(choiseBtn);
  }
  
  //Creating exit button
  var exit__btn = document.createElement('button');
  exit__btn.className = 'exit__btn';
  exit__btn.innerHTML = "EXIT";
  gameWrapper.appendChild(exit__btn);
  
  document.querySelector('.exit__btn').onclick = function() {
    console.log('exit');
    gameWrapper.remove();
    gameStartMenu();
  }
 
}

gameStartMenu();

function changeLionsPopulation(n) {
  document.querySelector('.population__lions').innerHTML = n;
}

function changeWolvesPopulation(n) {
  document.querySelector('.population__wolves').innerHTML = n;
}

function changeFoxesPopulation(n) {
  document.querySelector('.population__foxes').innerHTML = n;
}

function changeOwlsPopulation(n) {
  document.querySelector('.population__owls').innerHTML = n;
}

function playerName() {
  player__name = document.querySelector('.starting-screen__name-input').value;
  console.log(player__name);
  document.querySelector('.starting-screen__name-input').value = "";
}
  
  


  
  


