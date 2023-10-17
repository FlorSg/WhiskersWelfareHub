fetch('https://api.thecatapi.com/v1/breeds')
    .then(response => response.json())
    .then(async data => {
        const catBreeds = data.slice(0, 6);
        const cardContainers = document.getElementsByClassName("card-container")
        const cardContainer = cardContainers[0]


        // Itero sobre cada elemento de los breeds para crear las cards
        for (let i = 0; i < 6; i++) {
            const myCat = catBreeds[i]
            // Creo los HTML 
            const card = document.createElement("div")
            card.className = "card"
            const cardImage = document.createElement("div")
            cardImage.className = "card-image"
            const cardImageImage = document.createElement("img")

            const cardInfo = document.createElement("div")
            cardInfo.className = "card-info"
            const cardTitle = document.createElement("h3")
            cardTitle.className = "card-title"
            const cardDescription = document.createElement("p")
            const cardHref = document.createElement("a")
            cardHref.className = "card-href"

            // Me traigo las imagenes de los breeds de otra pegada a la api 
            const catImage = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${myCat.id}`)
                .then(res => res.json())
                .then(res2 => res2[0].url)

            // Relleno los datos con la respuesta de la API

            cardTitle.innerHTML = myCat.name
            cardImageImage.src = catImage
            cardDescription.innerHTML = myCat.description
            cardHref.innerHTML = "Leer mas"




            // Armo la card en HTML 
            cardImage.appendChild(cardImageImage)
            card.appendChild(cardImage)

            cardInfo.appendChild(cardTitle)
            cardInfo.appendChild(cardDescription)

            card.appendChild(cardInfo)
            card.appendChild(cardHref)
            cardContainer.appendChild(card)


        }




        console.log(catBreeds)



    })
    .catch(error => console.error(error));