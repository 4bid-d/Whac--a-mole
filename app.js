const squares = document.querySelectorAll('.square')
const mole =document.querySelector('.mole')
const score = document.getElementById('score')
const chosenMole = document.getElementsByClassName('mole')
const timeLeft = document.getElementById('time-left')
const retryButton = document.createElement('button')
retryButton.innerHTML = ('Retry')
retryButton.setAttribute('onclick','window.location.reload()')
const retrySpan = document.getElementById('retryButton')
let result = 0
let chosenSquareId 
let currentTime = 10
let timeId = null 

function randomSquare(){

    score.textContent= result
    
    chosenSquareId = 0
    squares.forEach(square=>{
        square.classList.remove('mole')
        })

    let randomSquare = squares[Math.floor(Math.random() * 9)]   

    randomSquare.classList.add('mole')
    chosenSquareId = randomSquare.id
    squares.forEach(square =>{
   
    square.addEventListener('mousedown',() => {
        if(square.id == chosenSquareId){
         result++
         
         }else{
             result = result
         }
        })
   })
}


function moveMole(){

  
    timeId = setInterval(randomSquare,1000)
}

moveMole()

function countdown(){
     currentTime--
     timeLeft.textContent = currentTime
     if (currentTime == 0){
        clearInterval(countDownId)
        clearInterval(timeId)
        retrySpan.appendChild(retryButton)
        currentTime = 10
        alert('GAme over your Final Score is  '+ result)
       
     }
}

let countDownId= setInterval(countdown,1000)

