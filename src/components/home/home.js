import './home.css'

export const MainSection = () => {
  const divContent = document.querySelector('.content')
  if (!divContent) return
  divContent.replaceChildren()

  const welcome = document.createElement('h1')
  welcome.textContent = 'Welcome to Games Hub'

  const img = document.createElement('img')
  img.src =
    'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1771802644/PROYECTO%205/retro-arcade-cabinet-isolated-white-background_1308-87083_pcdmpk.avif'
  img.alt = 'Ardade'
  img.className = 'arcade'

  divContent.appendChild(welcome)
  divContent.appendChild(img)
}
