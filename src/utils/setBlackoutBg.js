export function setBlackoutBg() {
  const body = document.querySelector('body')
  const div = document.createElement('div')
  div.classList.add('fixed')
  div.classList.add('top-0')
  div.classList.add('h-screen')
  div.classList.add('w-screen')
  div.classList.add('bg-stone-600/80')
  div.classList.add('z-0')
  div.addEventListener('click', () => {
    div.dispatchEvent('turn-light-on')
    body.removeChild(div)
  })
  div.setAttribute('id', 'blackout-bg')
  body.append(div)
  return div
}