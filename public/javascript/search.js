
const placeData = [

    {
        name: `Brasil`,
        uf: "BR",
        flag: `data:image/png;base64,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`
    },

    {
        name: `Acre`,
        uf: "AC",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bandeira_do_Acre.svg/120px-Bandeira_do_Acre.svg.png`
    },

   
    {
        name: `Alagoas`,
        uf: "AL",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bandeira_de_Alagoas.svg/120px-Bandeira_de_Alagoas.svg.png`
    },

    {
        name: `Amapá`,
        uf: "AP",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Bandeira_do_Amap%C3%A1.svg/120px-Bandeira_do_Amap%C3%A1.svg.png`
    },

    {
        name: `Amazonas`,
        uf: "AM",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Bandeira_do_Amazonas.svg/120px-Bandeira_do_Amazonas.svg.png`
    },

    {
        name: `Bahia`,
        uf: "BA",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Bandeira_da_Bahia.svg/120px-Bandeira_da_Bahia.svg.png`
    },

    {
        name: `Ceará`,
        uf: "CE",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bandeira_do_Cear%C3%A1.svg/120px-Bandeira_do_Cear%C3%A1.svg.png`
    },

    {
        name: `Distrito Federal`,
        uf: "DF",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Bandeira_do_Distrito_Federal_%28Brasil%29.svg/120px-Bandeira_do_Distrito_Federal_%28Brasil%29.svg.png`
    },

    {
        name: `Espírito Santo`,
        uf: "ES",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bandeira_do_Esp%C3%ADrito_Santo.svg/120px-Bandeira_do_Esp%C3%ADrito_Santo.svg.png`
    },

    {
        name: `Goiás`,
        uf: "GO",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_Goi%C3%A1s.svg/120px-Flag_of_Goi%C3%A1s.svg.png`
    },

    {
        name: `Maranhão`,
        uf: "MA",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Bandeira_do_Maranh%C3%A3o.svg/120px-Bandeira_do_Maranh%C3%A3o.svg.png`
    },

    {
        name: `Mato Grosso`,
        uf: "MT",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Bandeira_de_Mato_Grosso.svg/120px-Bandeira_de_Mato_Grosso.svg.png`
    },

    {
        name: `Mato Grosso do Sul`,
        uf: "MS",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Bandeira_de_Mato_Grosso_do_Sul.svg/120px-Bandeira_de_Mato_Grosso_do_Sul.svg.png`
    },

    {
        name: `Minas Gerais`,
        uf: "MG",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bandeira_de_Minas_Gerais.svg/120px-Bandeira_de_Minas_Gerais.svg.png`
    },

    {
        name: `Pará`,
        uf: "PA",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bandeira_do_Par%C3%A1.svg/120px-Bandeira_do_Par%C3%A1.svg.png`
    },

    {
        name: `Paraíba `,
        uf: "PB",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Bandeira_da_Para%C3%ADba.svg/120px-Bandeira_da_Para%C3%ADba.svg.png`
    },

    {
        name: `Paraná`,
        uf: "PR",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Bandeira_do_Paran%C3%A1.svg/120px-Bandeira_do_Paran%C3%A1.svg.png`
    },

    {
        name: `Pernambuco`,
        uf: "PE",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Bandeira_de_Pernambuco.svg/120px-Bandeira_de_Pernambuco.svg.png`
    },

    {
        name: `Piauí`,
        uf: "PI",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Bandeira_do_Piau%C3%AD.svg/120px-Bandeira_do_Piau%C3%AD.svg.png`
    },

    
    {
        name: `Rio de Janeiro`,
        uf: "RJ",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bandeira_do_estado_do_Rio_de_Janeiro.svg/120px-Bandeira_do_estado_do_Rio_de_Janeiro.svg.png`
    },

    {
        name: `Rio Grande do Norte`,
        uf: "RN",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Bandeira_do_Rio_Grande_do_Norte.svg/120px-Bandeira_do_Rio_Grande_do_Norte.svg.png`
    },

    {
        name: `Rio Grande do Sul`,
        uf: "RS",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Bandeira_do_Rio_Grande_do_Sul.svg/120px-Bandeira_do_Rio_Grande_do_Sul.svg.png`
    },

    {
        name: `Rondônia`,
        uf: "RO",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Bandeira_de_Rond%C3%B4nia.svg/120px-Bandeira_de_Rond%C3%B4nia.svg.png`
    },

    {
        name: `Roraima`,
        uf: "RR",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Bandeira_de_Roraima.svg/120px-Bandeira_de_Roraima.svg.png`
    },

    {
        name: `Santa Catarina`,
        uf: "SC",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Bandeira_de_Santa_Catarina.svg/120px-Bandeira_de_Santa_Catarina.svg.png`
    },

    {
        name: `São Paulo`,
        uf: "SP",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Bandeira_do_estado_de_S%C3%A3o_Paulo.svg/120px-Bandeira_do_estado_de_S%C3%A3o_Paulo.svg.png`
    },

    {
        name: `Sergipe`,
        uf: "SE",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Bandeira_de_Sergipe.svg/120px-Bandeira_de_Sergipe.svg.png`
    },
    
    {
        name: `Tocantins`,
        uf: "TO",
        flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bandeira_do_Tocantins.svg/120px-Bandeira_do_Tocantins.svg.png`
    },
]

const placeSearch = (document.getElementById('input-search'))

const flag = document.getElementById('flag')
const place = document.getElementById('place')
const suspects = document.getElementById('suspects')
const boardSupects = document.getElementById("board-supects")
const cases = document.getElementById('cases')
const deaths = document.getElementById('deaths')


let format = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
})

async function getDataCovid() {
    const placeSearchValue = (placeSearch.value).trim().replace(/( )+/g, ' ')

    try {

        flag.src = "../images/search.svg"
        place.innerHTML = "Carregando..."
        suspects.innerHTML = "Carregando..."
        cases.innerHTML = "Carregando..."
        deaths.innerHTML = "Carregando..."
      

        if (placeSearchValue.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g , '') === 'brasil') {
            getDataBrazil()
            
        } else {
            boardSupects.innerHTML = "Suspeitos"
            
            let img;
            let uf;

            placeData.forEach(e => {
                if((e.name).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g , '')  === placeSearchValue.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g , '') || (e.uf).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g , '')  == (placeSearch.value).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g , '')) {
                    img = e.flag
                    uf = e.uf
                }
            })
    
            const url = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`
            const response = await fetch(url)
            const data = await response.json()
          
    
            flag.src = img
            place.innerHTML = data.state 
            suspects.innerHTML = format.format(data.suspects)  
            cases.innerHTML = format.format(data.cases) 
            deaths.innerHTML = format.format(data.deaths) 
    
            if (!data.state) {
                document.querySelector('.pop-ups').style.display = "flex"
                document.querySelector('.place-not-found ').style.display = "flex"
    
                getDataBrazil()
            }
    
        }
        
    } catch(e) {
        console.log(e)
    
        document.querySelector('.pop-ups').style.display = "flex"
        document.querySelector('.place-not-found ').style.display = "flex"

        getDataBrazil()
    }
}

async function getDataBrazil() {
    boardSupects.innerHTML = "Confirmados"

    const url = `https://covid19-brazil-api.now.sh/api/report/v1/brazil`
    const response = await fetch(url)
    const data = (await response.json()).data

  
    flag.src = "data:image/png;base64,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"
    place.innerHTML = "Brasil"
    suspects.innerHTML = format.format(data.confirmed)
    cases.innerHTML = format.format(data.cases )
    deaths.innerHTML = format.format(data.deaths )

}

getDataBrazil()