const ids =(document.getElementById('ids').value).split(',')


ids.forEach( (e) => {
    if (!(e.trim() === 'no'))
    document.getElementById(`${e.trim()}`).click()
})

// Desabilitar todos os inputs radios após ser efeturado o click automático
const allIds = document.querySelectorAll(".checkbox-container input") 
allIds.forEach( e => {
    document.getElementById(`${e.id}`).disabled = true;
})