import './memory.css'

export const initMemory = () => {
  const divContent = document.querySelector('.content')
  divContent.replaceChildren()

  let lives = 5
  let firstCard = null
  let secondCard = null
  let lockBoard = false

  let wins = Number(localStorage.getItem('memoryWins')) || 0

  const title = document.createElement('h1')
  title.textContent = 'Memory Game'

  const status = document.createElement('p')
  status.textContent = `Lives: ${lives}`

  const winsText = document.createElement('p')
  winsText.textContent = `Wins: ${wins}`

  const infoContainer = document.createElement('div')
  infoContainer.className = 'info-container'

  infoContainer.appendChild(status)
  infoContainer.appendChild(winsText)

  const message = document.createElement('p')
  message.className = 'message'

  const grid = document.createElement('div')
  grid.className = 'memory-grid'

  const animalImages = [
    'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1777327638/PROYECTO%205/perro_eoohwe.png',
    'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1777327672/PROYECTO%205/gato_fmkq4t.png',
    'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1777327610/PROYECTO%205/ciervo_ox1oqr.png',
    'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1777327709/PROYECTO%205/raton_fsuglm.png',
    'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1777327726/PROYECTO%205/elefante_gd5uch.png',
    'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1777327746/PROYECTO%205/koala_sy3kbd.png'
  ]

  let cardsArray = animalImages
    .concat(animalImages)
    .sort(() => Math.random() - 0.5)

  cardsArray.forEach((imgSrc) => {
    const card = document.createElement('div')
    card.className = 'memory-card'
    card.dataset.image = imgSrc

    const front = document.createElement('img')
    front.className = 'front'
    front.src = imgSrc

    const back = document.createElement('div')
    back.className = 'back'
    back.textContent = '❓'

    card.appendChild(front)
    card.appendChild(back)
    grid.appendChild(card)

    card.addEventListener('click', () => {
      if (lockBoard) return
      if (card === firstCard) return
      if (lives <= 0) return
      if (card.classList.contains('flip')) return

      card.classList.add('flip')

      if (!firstCard) {
        firstCard = card
        return
      }

      secondCard = card
      lockBoard = true

      if (firstCard.dataset.image === secondCard.dataset.image) {
        message.textContent = 'Great match!'

        firstCard = null
        secondCard = null
        lockBoard = false

        const allFlipped =
          document.querySelectorAll('.memory-card.flip').length ===
          cardsArray.length

        if (allFlipped) {
          wins++
          localStorage.setItem('memoryWins', wins)
          winsText.textContent = `Wins: ${wins}`

          message.textContent = 'Congratulations! You completed the game!'
        }
      } else {
        lives--
        status.textContent = `Lives: ${lives}`
        message.textContent = 'Try again!'

        setTimeout(() => {
          firstCard.classList.remove('flip')
          secondCard.classList.remove('flip')

          firstCard = null
          secondCard = null
          lockBoard = false

          if (lives <= 0) {
            message.textContent = 'Game Over!'
          }
        }, 1200)
      }
    })
  })

  const resetBtn = document.createElement('button')
  resetBtn.textContent = 'Reset'
  resetBtn.className = 'reset'

  resetBtn.addEventListener('click', () => {
    lives = 5
    status.textContent = `Lives: ${lives}`
    message.textContent = ''
    initMemory()
  })

  divContent.appendChild(title)
  divContent.appendChild(infoContainer)
  divContent.appendChild(message)
  divContent.appendChild(grid)
  divContent.appendChild(resetBtn)
}
