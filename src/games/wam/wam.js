import './wam.css'

let moleInterval = null
let timerInterval = null

export const initWam = () => {
  const divContent = document.querySelector('.content')
  divContent.replaceChildren()

  clearInterval(moleInterval)
  clearInterval(timerInterval)

  let score = 0
  let highScore = localStorage.getItem('wamHighScore') || 0

  let timeLeft = 20
  let gameActive = false
  let currentMole = null

  const title = document.createElement('h1')
  title.textContent = 'Whack a Mole'

  const infoContainer = document.createElement('div')
  infoContainer.className = 'info-container'

  const status = document.createElement('p')
  status.textContent = `Score: ${score}`

  const highScoreText = document.createElement('p')
  highScoreText.textContent = `High Score: ${highScore}`

  const timer = document.createElement('p')
  timer.textContent = `Time: ${timeLeft}`

  infoContainer.appendChild(status)
  infoContainer.appendChild(highScoreText)
  infoContainer.appendChild(timer)

  const message = document.createElement('p')

  const grid = document.createElement('div')
  grid.className = 'mole-grid'

  const holes = []

  for (let i = 0; i < 9; i++) {
    const hole = document.createElement('div')
    hole.className = 'hole'

    hole.addEventListener('click', () => {
      if (!gameActive) return

      if (hole === currentMole) {
        score++
        status.textContent = `Score: ${score}`

        if (score > highScore) {
          highScore = score

          localStorage.setItem('wamHighScore', highScore)

          highScoreText.textContent = `High Score: ${highScore}`
        }

        hole.classList.remove('mole')
        hole.classList.add('hit')
        hole.textContent = ''

        currentMole = null

        setTimeout(() => {
          hole.classList.remove('hit')
        }, 200)
      } else {
        hole.classList.add('miss')

        setTimeout(() => {
          hole.classList.remove('miss')
        }, 200)
      }
    })

    holes.push(hole)
    grid.appendChild(hole)
  }

  const showMole = () => {
    if (!gameActive) return

    holes.forEach((hole) => {
      hole.classList.remove('mole')
      hole.textContent = ''
    })

    const randomIndex = Math.floor(Math.random() * holes.length)
    currentMole = holes[randomIndex]

    currentMole.classList.add('mole')
    currentMole.textContent = '🐹'
  }

  const startBtn = document.createElement('button')
  startBtn.textContent = 'Start'
  startBtn.className = 'reset'

  startBtn.addEventListener('click', () => {
    if (gameActive) return

    score = 0
    timeLeft = 20
    gameActive = true

    status.textContent = `Score: ${score}`
    timer.textContent = `Time: ${timeLeft}`
    message.textContent = ''

    moleInterval = setInterval(showMole, 800)

    timerInterval = setInterval(() => {
      timeLeft--
      timer.textContent = `Time: ${timeLeft}`

      if (timeLeft <= 0) {
        gameActive = false
        clearInterval(moleInterval)
        clearInterval(timerInterval)

        message.textContent = 'Game Over!'

        holes.forEach((hole) => {
          hole.textContent = ''
          hole.classList.remove('mole')
        })
      }
    }, 1000)
  })

  const resetBtn = document.createElement('button')
  resetBtn.textContent = 'Reset'
  resetBtn.className = 'reset'

  resetBtn.addEventListener('click', () => {
    clearInterval(moleInterval)
    clearInterval(timerInterval)
    initWam()
  })

  const buttonsContainer = document.createElement('div')
  buttonsContainer.className = 'buttons-container'

  buttonsContainer.appendChild(startBtn)
  buttonsContainer.appendChild(resetBtn)

  divContent.appendChild(title)
  divContent.appendChild(infoContainer)
  divContent.appendChild(message)
  divContent.appendChild(grid)
  divContent.appendChild(buttonsContainer)
}
