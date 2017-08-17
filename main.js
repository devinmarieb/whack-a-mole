const moleTwo = document.getElementById('critter-two')

function moveMole() {

  moleTwo.classList.remove('critter')

  moleTwo.classList.add('up')
}

function reset() {
  moleTwo.classList.remove('up')
  moleTwo.classList.add('down')
}

function clickEvent(e) {
  console.log(e);
}

setTimeout(()=> moveMole(), 2000)
setTimeout(()=> reset(), 4000)

moleTwo.addEventListener('click', (e)=> {
  clickEvent(e)
})
