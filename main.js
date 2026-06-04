import './style.css'
import { Header } from './src/components/header/header.js'
import { MainSection } from './src/components/home/home.js'
import { Footer } from './src/components/footer/footer.js'

const divApp = document.querySelector('#app')
Header(divApp)

const divContent = document.createElement('div')
divContent.className = 'content'
divApp.appendChild(divContent)

MainSection()
Footer(divApp)
