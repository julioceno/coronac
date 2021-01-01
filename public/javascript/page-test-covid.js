const popupContainer = document.querySelector('.pop-ups')
const testExplanation = document.querySelector('.test-explanation')
const informationData = document.querySelector('.information-data')
const fillInAbout = document.querySelector('.fill-in-about')

setTimeout( () => {

    popupContainer.style.display ="flex"
    testExplanation.style.display ="flex"
},700)

function informationDataFunction() {
    popupContainer.style.display ="flex"
    informationData.style.display ="flex"
}


function hidePopup() {
    popupContainer.style.display ="none"
    testExplanation.style.display ="none"
    fillInAbout.style.display ="none"
}


function validate(event) {
    const permission = document.getElementById('feed1')
    const about = document.getElementById('about')
    

    if (permission.checked && !about.value) {
        event.preventDefault()
        popupContainer.style.display ="flex"
        fillInAbout.style.display ="flex"
        informationData.style.display ="none"
        window.location.href= "#header"
    }
}


const comeBackAbout = document.getElementById('come-back-about')

comeBackAbout.addEventListener('click', (event) => {
    document.getElementById('click-about').click()
})
