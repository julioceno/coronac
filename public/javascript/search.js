const placeData = [
    {
        name: `Acre`,
        uf: "ac",
        flag: `../images/flags/acre.png`
    },

   
    {
        name: `Alagoas `,
        uf: "al",
        flag: `../images/flags/.png`
    },

    {
        name: `Amapá `,
        uf: "AP",
        flag: `../images/flags/.png`
    },

    {
        name: `Amazonas `,
        uf: "AM",
        flag: `../images/flags/.png`
    },

    {
        name: `Bahia `,
        uf: "BA",
        flag: `../images/flags/.png`
    },

    {
        name: `Ceará `,
        uf: "CE",
        flag: `../images/flags/.png`
    },

    {
        name: `Distrito Federal`,
        uf: "DF",
        flag: `../images/flags/.png`
    },

    {
        name: `Espírito Santo`,
        uf: "ES",
        flag: `../images/flags/.png`
    },

    {
        name: `Goiás`,
        uf: "GO",
        flag: `../images/flags/.png`
    },

    {
        name: `Maranhão`,
        uf: "MA",
        flag: `../images/flags/.png`
    },

    {
        name: `Mato Grosso`,
        uf: "MT",
        flag: `../images/flags/.png`
    },

    {
        name: `Mato Grosso do Sul`,
        uf: "MS",
        flag: `../images/flags/.png`
    },

    {
        name: `Minas Gerais`,
        uf: "MG",
        flag: `../images/flags/.png`
    },

    {
        name: `Pará`,
        uf: "PA",
        flag: `../images/flags/.png`
    },

    {
        name: `Paraíba `,
        uf: "PB",
        flag: `../images/flags/.png`
    },
    {
        name: `Rio de janeiro`,
        uf: "rj",
        flag: `../images/flags/rio-de-janeiro.png`
    },

    {
        name: `Paraná`,
        uf: "PR",
        flag: `../images/flags/.png`
    },

    {
        name: `Piauí`,
        uf: "PI",
        flag: `../images/flags/.png`
    },

    
    {
        name: `Rio de Janeiro`,
        uf: "RJ",
        flag: `../images/flags/.png`
    },

    {
        name: `Rio Grande do Norte`,
        uf: "RN",
        flag: `../images/flags/.png`
    },

    {
        name: `Rio Grande do Sul`,
        uf: "RS",
        flag: `../images/flags/.png`
    },

    {
        name: `Rondônia`,
        uf: "RO",
        flag: `../images/flags/.png`
    },

    {
        name: `Roraima`,
        uf: "RR",
        flag: `../images/flags/.png`
    },

    {
        name: `Santa Catarina`,
        uf: "SC",
        flag: `../images/flags/.png`
    },

    {
        name: `São Paulo`,
        uf: "SP",
        flag: `../images/flags/.png`
    },

    {
        name: `Sergipe`,
        uf: "SE",
        flag: `../images/flags/.png`
    },

    {
        name: `Tocantins`,
        uf: "TO",
        flag: `../images/flags/.png`
    },
]

const placeSearch = (document.getElementById('input-search'))

const flag = document.getElementById('flag')
const place = document.getElementById('place')
const suspects = document.getElementById('suspects')
const cases = document.getElementById('cases')
const deaths = document.getElementById('deaths')


async function getDataCovid() {
    try {
        let img;
        let uf;
        
        placeData.forEach(e => {
            if((e.name).toLowerCase() == (placeSearch.value).toLowerCase()) {
                img = e.flag
                uf = e.uf
            }
        })

        const url = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)


        flag.src = img
        place.innerHTML = data.state
        suspects.innerHTML = data.suspects
        cases.innerHTML = data.cases
        deaths.innerHTML = data.deaths
        


    } catch(e) {
        console.log(e)
    }



}