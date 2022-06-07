const elementNav = document.getElementById('navigation')

const buttonOpenMenu = document.getElementById('btn-open')

buttonOpenMenu.addEventListener('click', event => {
  if (elementNav.classList.contains('active')) {
    elementNav.classList.remove('active')
  } else {
    elementNav.classList.add('active')
  }
})

const boxTicketsNumber = document.querySelectorAll('.number-box')

for (var i = 0; i < boxTicketsNumber.length; i++) {
  boxTicketsNumber[i].onmouseover = function () {
    this.querySelector('span').style.display = 'inline-block'
  }
  boxTicketsNumber[i].onmouseout = function () {
    this.querySelector('span').style.display = 'none'
  }
}
