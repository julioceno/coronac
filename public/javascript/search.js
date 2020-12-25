const placeData = [
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
const cases = document.getElementById('cases')
const deaths = document.getElementById('deaths')


async function getDataCovid() {
    try {
        let img;
        let uf;
        
        placeData.forEach(e => {
            if((e.name).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g , '')  == (placeSearch.value).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g , '') ) {
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