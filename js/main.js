console.clear();

const timerDom = document.getElementById('timer');
let p1score = 0;
let p2score = 0;
const score1DOM = document.getElementById('score1');
const score2DOM = document.getElementById('score2');

timerDom.innerText = '00';

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  console.log('Aktyvus');
  return i;
}
    
const startButtonDOM = document.querySelector('.start-button')

startButtonDOM.addEventListener("click", startGame);

function startGame (){
    startButtonDOM.classList.add('hide');
    let t = 60;
        const interval = window.setInterval(function(){
        if (t > 0){
            attack(t);
            t--;
        }else{
            endGame();
            clearInterval(interval) 
        }
        timerDom.innerHTML = checkTime(t);
    }, 1000);
}

function attack(t){

    if ( t < 60 ){
        const tileDOMs =document.querySelectorAll('.blackout');
        for (let i = 0; i < tileDOMs.length; i++) {
            tileDOMs[i].classList.remove('blackout');
            tileDOMs[i].style.backgroundColor='transparent';
            p2score++;
            score2DOM.innerText =checkTime(p2score);
        }
    }
    if (t > 1){
        const tr = 't' + r();
        const tileDOM = document.getElementById(tr);
        tileDOM.classList.add('blackout');
        tileDOM.style.backgroundColor = '#' + Math.random(255).toString(16).slice(2, 8) + '33';
        tileDOM.addEventListener("click", function(){
            boom(tr);
        }, false);
    }
    
    
}

function boom(tr){
    const tileDOM = document.getElementById(tr);
    tileDOM.classList.remove('blackout');
    tileDOM.style.backgroundColor='transparent';
    tileDOM.replaceWith(tileDOM.cloneNode(true));
    p1score++;
    score1DOM.innerText = checkTime(p1score);
}

function r(){
    const r = Math.floor(Math.random() * 50) + 1;

    return r;
}

function endGame(){
    let finishDOM = document.querySelector('.loose');
    if (p1score > p2score){
        finishDOM = document.querySelector('.win');
    } else if(p1score === p2score){
        finishDOM = document.querySelector('.even');
    }
        
    finishDOM.classList.add('show');
    finishDOM.addEventListener('click', function(){
        location.reload()});
}