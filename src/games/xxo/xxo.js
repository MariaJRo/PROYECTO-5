import './xxo.css'

export const initXXO = () => {
  const divContent = document.querySelector('.content')
  divContent.replaceChildren()

  let board = ['', '', '', '', '', '', '', '', '']
  let currentPlayer = 'X'
  let gameActive = true

  let scoreX = Number(localStorage.getItem('scoreX')) || 0
  let scoreO = Number(localStorage.getItem('scoreO')) || 0

  const title = document.createElement('h1')
  title.textContent = 'TicTacToe'

  const scoreText = document.createElement('div')
  scoreText.className = 'score'
  scoreText.textContent = 'X Wins: ' + scoreX + ' | O Wins: ' + scoreO

  const status = document.createElement('p')
  status.textContent = 'Turn: ' + currentPlayer

  const boardContainer = document.createElement('div')
  boardContainer.className = 'board'

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div')
    cell.className = 'cell'

    cell.addEventListener('click', function () {
      if (!gameActive) return
      if (board[i] !== '') return

      board[i] = currentPlayer
      cell.textContent = currentPlayer

      checkWinner()

      if (gameActive) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
        status.textContent = 'Turn: ' + currentPlayer
      }
    })

    boardContainer.appendChild(cell)
  }

  function checkWinner() {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (const combo of wins) {
      const [a, b, c] = combo

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        win(board[a])
        return
      }
    }

    let draw = true
    for (let i = 0; i < 9; i++) {
      if (board[i] === '') draw = false
    }

    if (draw && gameActive) {
      status.textContent = 'Draw!'
      gameActive = false
    }
  }

  function win(player) {
    status.textContent = 'Winner: ' + player
    gameActive = false

    if (player === 'X') {
      scoreX++
      localStorage.setItem('scoreX', scoreX)
    } else {
      scoreO++
      localStorage.setItem('scoreO', scoreO)
    }

    scoreText.textContent = 'X Wins: ' + scoreX + ' | O Wins: ' + scoreO
  }

  const resetBtn = document.createElement('button')
  resetBtn.textContent = 'Reset Game'
  resetBtn.className = 'reset'

  resetBtn.addEventListener('click', function () {
    initXXO()
  })

  divContent.appendChild(title)
  divContent.appendChild(scoreText)
  divContent.appendChild(status)
  divContent.appendChild(boardContainer)
  divContent.appendChild(resetBtn)
}
