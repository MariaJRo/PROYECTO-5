import './footer.css'

export const Footer = (divApp) => {
  const footer = document.createElement('footer')
  footer.classList.add('footer')

  const copyrightSection = document.createElement('section')
  copyrightSection.classList.add('copyright')
  const copyrightText = document.createElement('p')
  copyrightText.textContent = '© 2026 María J Rodríguez. All rights reserved.'
  copyrightSection.appendChild(copyrightText)

  footer.appendChild(copyrightSection)
  divApp.appendChild(footer)
}
