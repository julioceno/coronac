function clean() {
    document.getElementById('input-search').value = ""
    document.getElementById('input-search').focus()
} 

function hidePopup() {
    document.querySelector('.pop-ups').style.display = "none"
    document.querySelector('.place-not-found ').style.display = "none"
}