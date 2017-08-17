const moles = document.querySelectorAll('.mole')
const startBtn = document.getElementById('start')
const score = document.querySelector('.score')
let points = document.querySelector('.points')

startBtn.addEventListener('click', ()=> {
  score.innerHTML = 'Score: '
  points.innerHTML = 0
  getAMole()
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

moles.forEach(function(mole) {
  mole.addEventListener('click', (e)=> {
    let points = 0
    let score = document.querySelector('.points')
    if(e.screenY <= 450) {
    reset(mole);
    points++
    score.innerHTML = points
    }
  })
})
