const elementNav = document.getElementById('navigation')

const button = document.getElementById('btn-open')

button.addEventListener('click', event => {
  if (elementNav.classList.contains('active')) {
    elementNav.classList.remove('active')
  } else {
    elementNav.classList.add('active')
  }
})
