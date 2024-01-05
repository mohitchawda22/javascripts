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