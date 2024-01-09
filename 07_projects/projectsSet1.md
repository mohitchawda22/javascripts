# projects retalted to DOM

## projects links
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-atbnqh?file=1-colorChanger%2Fcolor.js)


## solution code

## project 1 solution

```javascript
const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id == 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id=="purple"){
      body.style.backgroundColor=e.target.id
    }
  });
});

```


## project 2 solution

```javaScript
const form = document.querySelector('form');
//this usecase will give you empty value.
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'please give a valid hieght';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'please give a valid wieght';
  } else {
   const bmi= (weight / ((height * height) / 10000)).toFixed(2);

    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
 
});

```
## projects 3 solution


```javaScript
const clock = document.getElementById('clock');
// document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```


## project 4 solution


```javaScript

let random = parseInt(Math.random() * 100 + 1);
// console.log(random);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const Guesses = document.querySelector('.guesses');
const LastResult = document.querySelector('.lastResult');
const LowOrHigh = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number!');
  } else if (guess < 1) {
    alert('please enter a valid number!');
  } else if (guess > 100) {
    alert('please enter the number between 1 to 100!');
  } else {
    prevGuess.push(guess);
    if (numGuess == 11) {
      displayGuess(guess);
      displayMessage(`GameOver!`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == random) {
    displayMessage(`you guessed it right!you won`);
    endGame();
  } else if (guess < random) {
    displayMessage(`number is too low`);
  } else if (guess > random) {
    displayMessage(`number is too high`);
  }
}

function displayMessage(message) {
  LowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
  userInput.value = '';
  Guesses.innerHTML += `${guess},`;
  numGuess++;
  LastResult.innerHTML = `${11 - numGuess}`;
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    random = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    Guesses.innerHTML = '';
    LastResult.innerHTML = `${11 - numGuess}, `;
    userInput.removeAttribute('disables');
    StartOver.removeChild(p);
    playGame = true;
  });
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  StartOver.appendChild(p);
  playGame = false;
  newGame();
}

```

## project 5 solution

```JavaScript


const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class='color'
  <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  `;
});

```


## project 6 solution

```JavaScript


//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;

const StartChangeColor = function () {
  if(!intervalId){
    intervalId = setInterval(changebg, 1000);
  }

  function changebg() {
    document.body.style.backgroundColor = randomColor();
  }
};

const StopChangeColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', StartChangeColor);

document.querySelector('#stop').addEventListener('click', StopChangeColor);

console.log(randomColor());


```