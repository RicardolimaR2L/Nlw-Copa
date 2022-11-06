function createGame(player1, hour, player2) {
  return `
  <li>
      <img src="assets/icon-${player1}.svg " alt="bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="assets/icon-${player2}.svg" alt="bandeira do ${player2}" />
    </li>
  `
}

let delay = -0.4

function createCard(date, day, games) {
  delay = delay + 0.4
  return ` 
  <div class="card" style="animation-delay: ${delay}s">
  <h2>${date} <span>${day}</span></h2>
  <ul>
    ${games}
  </ul>
</div>`
}

document.querySelector('#cards').innerHTML =
  createCard('24/11', 'Quinta', createGame('brazil', '13:00', 'serbia')) +
  createCard(
    '28/11',
    'Segunda',
    createGame('brazil', '16:00', 'switzerland') +
      createGame('portugal', '16:00', 'ghana')
  ) +
  createCard(
    '02/12',
    'Sexta',
    createGame('ghana', '10:00', 'brazil') +
      createGame('argentina', '16:00', 'belgium')
  )  +
  createCard(
    '08/12',
    'Sábado',
    createGame('belgium', '11:00', 'brazil') +
      createGame('uruguai', '16:00', 'ghana')
  )

let greenBtn = document.querySelector('.btn-green ')

greenBtn.addEventListener('click', function () {
  document.body.classList.toggle('green')
})

const classname = document.body.className
if (classname === 'yellow') {
  this.TextContent = 'green'
} else {
  this.TextContent = 'yellow'
}

let blueBtn = document.querySelector('.btn-blue ')

blueBtn.addEventListener('click', function () {
  document.body.classList.toggle('blue')
})

const className = document.body.className
if (className === 'yellow') {
  this.TextContent = 'blue'
} else {
  this.TextContent = 'yellow'
}
