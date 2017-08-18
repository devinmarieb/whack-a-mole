const moles = document.querySelectorAll('.mole')
const btn = document.querySelector('.level-buttons')
const points = document.querySelector('.points')
const timeText = document.querySelector('.times-up')

function setTimer(e) {
  disableButtons()
  let counter = 0
  let timer = setInterval(()=> {
    counter ++
    if(counter === 20) {
      clearInterval(timer)
      setTimeout(()=> timeText.style.visibility = 'visible' , 2000)
      setTimeout(()=> enableButtons(), 2000)
    }
    getAMole(e)
  }, 1000)
}

function getAMole(e) {
  const button = e.target.value
  const random = moles[Math.floor(Math.random() * moles.length)]
  random.classList.remove('mole')
  random.classList.add('up')
  button === "Easy Mode" ? setTimeout(()=> reset(random), 900) : setTimeout(()=> reset(random), 450)
}

function reset(random) {
  random.classList.remove('up')
  random.classList.add('mole')
}

function disableButtons() {
  const modeBtns = document.querySelectorAll('.start')
  modeBtns.forEach((button)=> {
    button.disabled = true
  })
}

function enableButtons() {
  const modeBtns = document.querySelectorAll('.start')
  modeBtns.forEach((button)=> {
    button.disabled = false
  })
}

btn.addEventListener('click', (e)=> {
  const scoreBoard = document.querySelector('.score-board')
  setTimer(e)
  points.innerHTML = 0
  timeText.style.visibility = 'hidden'
  moles.forEach((mole) => {
    mole.classList.add('mole')
  })
  scoreBoard.style.visibility = 'visible'
})

moles.forEach((mole) => {
  mole.addEventListener('click', (e)=> {
    if(e.screenY <= 427) {
      points.innerHTML++
      reset(mole);
    }
  })
})
