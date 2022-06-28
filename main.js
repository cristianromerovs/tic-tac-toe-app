import './style.css'

const buttons = document.querySelectorAll('button');
let buttonCont = 0;
let turnCount = 1;
let arrayPosition = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const getRandom = () => {
  return arrayPosition[Math.floor(Math.random() * arrayPosition.length)];
}

const fillPosition = () => {
  document.querySelector(`.button${getRandom()}`).innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="85%" height="85%" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      </svg>
      `;
}

const playTurn = (position) => {
  turnCount++;
  // console.log(position);
  if (turnCount % 2 === 0) {
    console.log("computer turn");
    console.log("Numero random" + getRandom());
    setTimeout(function timeout() {
      fillPosition();
    }, 1000);
  } else {
    console.log("my turn");
  }
}

buttons.forEach(button => {
  buttonCont++;
  button.classList.add(`button${buttonCont}`, 'btn');
  button.value = buttonCont;
  //onclick event
  button.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(button.classList.value);
    if(button.classList.contains('clicked')) {
      console.log("already clicked");
      return;
    } else {
      button.classList.add('clicked');
      button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
      </svg>`;
      playTurn(button.value);
    }
  })
});
