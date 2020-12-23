setTimeout( () => {

    document.querySelector('.pop-ups').style.display ="flex"
    document.querySelector('.test-explanation').style.display ="flex"
},2000)

function alerta() {
    document.querySelector('.pop-ups').style.display ="flex"
    document.querySelector('.information-data').style.display ="flex"
    
}


function hidePopup() {
    document.querySelector('.pop-ups').style.display ="none"
    document.querySelector('.test-explanation').style.display ="none"
    document.querySelector('.fill-in-about').style.display ="none"


}


function validate(event) {
    const permission = document.getElementById('feed1')
    const about = document.getElementById('about')
    

    if (permission.checked && !about.value) {
        event.preventDefault()
        document.querySelector('.pop-ups').style.display ="flex"
        document.querySelector('.fill-in-about').style.display ="flex"
 
        window.location.href= "#header"

    }
}

const comeBackAbout = document.getElementById('come-back-about')


comeBackAbout.addEventListener('click', (event) => {
    document.getElementById('click-about').click()
})