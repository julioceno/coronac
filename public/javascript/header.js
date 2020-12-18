const checkbox = document.getElementById('menu-hamburguer')
const appearMenu = document.getElementById('appear-menu')

function menuHamburguer() {
    if (checkbox.checked) {
        document.getElementById('menu').classList.toggle('marked')
        document.getElementById('nav').classList.toggle('marked')

        document.getElementById('section').style.display = "none"
    
        appearMenu.style.display="flex"
    }

    if (!checkbox.checked) {
        document.getElementById('menu').classList.toggle('marked')
        document.getElementById('nav').classList.toggle('marked')

        document.getElementById('section').style.display = "block"
    
        appearMenu.style.display="none"
    }
}