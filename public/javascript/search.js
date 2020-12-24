const place = document.querySelector('.place-information .place p')
const confirmeds = document.querySelector('.place-information .confirmeds p')
const deaths = document.querySelector('.place-information .deaths p')
const cureds = document.querySelector('.place-information .cureds p')

const placetxt = (document.getElementById('input-place'))

async function getDataCovid() {

    console.log(placetxt.value)
    try {
        const url = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${placetxt.value}`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)

        place.innerHTML = data.state
        confirmeds.innerHTML = data.cases 
        deaths.innerHTML = data.deaths
        cureds.innerHTML = "1418491234"

    } catch(e) {
        console.log(e)
    }



}