const moles = document.querySelectorAll('.mole')
const startBtn = document.getElementById('start')
const score = document.querySelector('.score')
const points = document.querySelector('.points')


startBtn.addEventListener('click', ()=> {
  let timer = false
  setTimeout(()=> timer = true, 3000)
  moles.forEach((mole) => {
    mole.classList.remove('down')
    mole.classList.add('mole')
  })
  score.innerHTML = 'Score: '
  points.innerHTML = 0
  window.setInterval(()=> {
    getAMole()
  }, 1000)
})

function getAMole() {
  let random = moles[Math.floor(Math.random() * moles.length)]
  random.classList.remove('mole')
  random.classList.add('up')
  setTimeout(()=> reset(random), 1000)
}

function reset(random) {
  random.classList.remove('up')
  random.classList.add('down')
}

moles.forEach((mole) => {
  mole.addEventListener('click', (e)=> {
    if(e.screenY <= 450) {
      points.innerHTML++
      reset(mole);
    }
  })
})
