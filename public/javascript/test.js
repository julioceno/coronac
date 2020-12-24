const txtDelete = document.getElementById('txt-delete')
const buttonDelete = document.getElementById('button-confirm-delete')


function deleteTest(event) {
    event.preventDefault() // Desabilitando envio de formulário 

    document.querySelector('.pop-ups').style.display = "flex"
    document.querySelector('.confirm-delete-test').style.display = "flex"


    buttonDelete.addEventListener('click', () => {
        if (!((txtDelete.value).toLowerCase() == "sim") ) { // Se algo for diferente de "sim" será adicionando uma classe disabled no botão
           buttonDelete.classList.add('disabled')
           
        } else { 
            buttonDelete.classList.add('enabled')
            document.querySelector('.delete-test').submit() // Se for sim será enviado o formulário
        }
    })
}

function hidePopup() {
    document.querySelector('.pop-ups').style.display = "none"
    document.querySelector('.confirm-delete-test').style.display = "none"
}
   

// const buttonView = document.querySelector('.view-symptoms').click()

function viewSymptoms() {
    const symptoms = document.getElementById('symptoms')
    const buttonView = document.querySelector('.view-symptoms')
    const line = document.getElementById('line-symptoms')

    if (symptoms.style.display == "block") {
        symptoms.style.display = "none"
        buttonView.style.marginBottom = "20rem"

        line.style.display = "none"

        buttonView.addEventListener('mouseover', () => {
            buttonView.style.color = "rgba(0, 0, 0, 0.5)"
            buttonView.style.border = "2px solid rgba(0, 0, 0, 0.5)"
        })

        
        buttonView.addEventListener('mouseleave', () => {
            buttonView.style.color = "#000000"
            buttonView.style.border = " 2px solid #000000"
            buttonView.style.transition = "background .2s"
        })


    } else {
        
        symptoms.style.display = "block"
        buttonView.style.marginBottom = "clamp(2rem, 9vw, 7rem)"
        line.style.display = "block"

        
        buttonView.style.color = "#28DF99"
        buttonView.style.border = " 2px solid #28DF99"
    }
}