fetch('https://api.thecatapi.com/v1/breeds')
    .then(response => response.json())
    .then(async data => {
        const catBreeds = getRandomElementsFromArray(data,9);
        const cardContainers = document.getElementsByClassName("card-container")
        const cardContainer = cardContainers[0]


        // Itero sobre cada elemento de los breeds para crear las cards
        for (let i = 0; i < 9; i++) {
            const myCat = catBreeds[i]
            // Creo los HTML 
            const card = document.createElement("div")
            card.className = "card"
            card.id=i
            const cardImage = document.createElement("div")
            cardImage.className = "card-image"
            const cardImageImage = document.createElement("img")

            const cardInfo = document.createElement("div")
            cardInfo.className = "card-info"
            const cardTitle = document.createElement("h3")
            cardTitle.className = "card-title"
            const cardDescription = document.createElement("p")


            // Me traigo las imagenes de los breeds de otra pegada a la api 
            const catImage = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${myCat.id}`)
                .then(res => res.json())
                .then(res2 => res2[0].url)

            // Relleno los datos con la respuesta de la API

            cardTitle.innerHTML = myCat.name
            cardImageImage.src = catImage
            cardDescription.innerHTML = myCat.description




            // Armo la card en HTML 
            cardImage.appendChild(cardImageImage)
            card.appendChild(cardImage)

            cardInfo.appendChild(cardTitle)
            cardInfo.appendChild(cardDescription)

            card.appendChild(cardInfo)
            cardContainer.appendChild(card)


        }




        console.log(catBreeds)



    })
    .catch(error => console.error(error));


    function getRandomElementsFromArray(arr, numElements) {
        if (numElements > arr.length) {
          throw new Error("El nÃºmero de elementos solicitados es mayor que la longitud del array.");
        }
      
        const randomElements = [];
        const copyArray = [...arr]; // Creamos una copia del array original para no alterarlo
      
        for (let i = 0; i < numElements; i++) {
          const randomIndex = Math.floor(Math.random() * copyArray.length);
          const randomElement = copyArray.splice(randomIndex, 1)[0];
          randomElements.push(randomElement);
        }
      
        return randomElements;
      }