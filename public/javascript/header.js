const checkbox = document.getElementById('menu-hamburguer')
const appearMenu = document.getElementById('menu-bar')

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

function resizeWindow() {
    let windowWidth = window.innerWidth

    if (windowWidth > 720) {

        document.getElementById('menu').click()
        document.getElementById('section').style.display = "block"
    
        appearMenu.style.display="none"
    }
}

window.addEventListener('resize', () => {
    resizeWindow()
})