import { initMemory } from '../../games/memory/memory.js'
import { initXXO } from '../../games/xxo/xxo.js'
import { initWam } from '../../games/wam/wam.js'
import { MainSection } from '../home/home.js'
import './header.css'

export const Header = (divApp) => {
  const header = document.createElement('header')
  const buttonXXO = document.createElement('button')
  const buttonWam = document.createElement('button')
  const buttonMemory = document.createElement('button')
  const buttonHome = document.createElement('button')
  buttonHome.className = 'buttonHome'

  buttonXXO.textContent = 'TicTacToe'
  buttonWam.textContent = 'Whack-a-mole'
  buttonMemory.textContent = 'Memory Game'
  buttonHome.textContent = 'HOME'

  buttonMemory.addEventListener('click', initMemory)
  buttonWam.addEventListener('click', initWam)
  buttonXXO.addEventListener('click', initXXO)
  buttonHome.addEventListener('click', MainSection)

  header.appendChild(buttonXXO)
  header.appendChild(buttonWam)
  header.appendChild(buttonMemory)
  header.appendChild(buttonHome)
  divApp.appendChild(header)
}
