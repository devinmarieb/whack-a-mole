const moles = document.querySelectorAll('.mole')
const btn = document.querySelector('.level-buttons')

btn.addEventListener('click', (e)=> {
  const scoreBoard = document.querySelector('.score-board')
  setTimer(e)
  moles.forEach((mole) => {
    mole.classList.add('mole')
  })
  scoreBoard.style.visibility = 'visible'
})

function setTimer(e) {
  let counter = 0
  let timer = setInterval(()=> {
    counter ++
    if(counter === 20) {
      clearInterval(timer)
    }
    getAMole(e)
  }, 1000)
}

function getAMole(e) {
  const button = e.target.value
  const random = moles[Math.floor(Math.random() * moles.length)]
  random.classList.remove('mole')
  random.classList.add('up')
  button === "Easy Mode" ? setTimeout(()=> reset(random), 1000) : setTimeout(()=> reset(random), 500)
}

function reset(random) {
  random.classList.remove('up')
  random.classList.add('mole')
}

moles.forEach((mole) => {
  const points = document.querySelector('.points')
  mole.addEventListener('click', (e)=> {
    if(e.screenY <= 363) {
      points.innerHTML++
      reset(mole);
    }
  })
})
