import { initMemory } from '../../games/memory/memory.js'
import { initXXO } from '../../games/xxo/xxo.js'
import { initWam } from '../../games/wam/wam.js'
import { MainSection } from '../home/home.js'
import './header.css'

export const Header = (divApp) => {
  const header = document.createElement('header')
  const buttonHome = document.createElement('button')
  const buttonXXO = document.createElement('button')
  const buttonWam = document.createElement('button')
  const buttonMemory = document.createElement('button')

  buttonHome.className = 'buttonHome'

  buttonHome.textContent = 'HOME'
  buttonXXO.textContent = 'TicTacToe'
  buttonWam.textContent = 'Whack-a-mole'
  buttonMemory.textContent = 'Memory Game'

  buttonHome.addEventListener('click', MainSection)
  buttonMemory.addEventListener('click', initMemory)
  buttonWam.addEventListener('click', initWam)
  buttonXXO.addEventListener('click', initXXO)

  header.appendChild(buttonHome)
  header.appendChild(buttonXXO)
  header.appendChild(buttonWam)
  header.appendChild(buttonMemory)
  divApp.appendChild(header)
}
