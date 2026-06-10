import './home.css'

export const MainSection = () => {
  const divContent = document.querySelector('.content')
  if (!divContent) return
  divContent.replaceChildren()

  // Agregada animación en el Home
  const starsContainer = document.createElement('div')
  starsContainer.className = 'stars-container'

  const classes = [
    'star1',
    'star2',
    'star3',
    'star4',
    'star5',
    'star6',
    'star7',
    'star8',
    'star9',
    'star10',
    'star11',
    'star12',
    'star13',
    'star14',
    'star15',
    'star16',
    'star17',
    'star18',
    'star19',
    'star20'
  ]

  for (let i = 0; i < classes.length; i++) {
    const star = document.createElement('div')
    star.className = 'star ' + classes[i]
    starsContainer.appendChild(star)
  }

  divContent.appendChild(starsContainer)

  // Agregada animación en el Home

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
