const menu = document.querySelector('.navbar__links');
const menuButton = document.querySelector('.navbar__icons')
const overlay = document.querySelector('#overlay')
menuButton.addEventListener('click',function(){
    menu.classList.toggle('navbar__open')
    menuButton.classList.toggle('open')
    overlay.classList.toggle('show')
})

overlay.addEventListener('click',function(){
    menu.classList.toggle('navbar__open')
    menuButton.classList.toggle('open')
    overlay.classList.toggle('show')

})
