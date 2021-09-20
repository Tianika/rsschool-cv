const icon = document.querySelector('.menu-icon')
const menu = document.querySelector('.burger-list')
const menuItems = document.querySelectorAll('.burger-list li')

icon.addEventListener('click', function () {
  menu.classList.toggle('active')
})

menuItems.forEach((item) => {
  item.addEventListener('click', function () {
    menu.classList.remove('active')
  })
})
