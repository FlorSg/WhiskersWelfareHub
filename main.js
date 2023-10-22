const API_KEY = "live_7OCMn01T4H1nxC3GmzgK1T64x3dwLGT5XOySTr1eFfYc1A3Dde3NNy5zhxfXshKZ";

const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        url: "https://api.thecatapi.com/v1/images/search?limit=10",
        data: [],
        datosPaginado:[]
      }
    },
    methods: {
        fetchData(url){
            fetch(url)
            .then((res => res.json()
            .then(data => {
              console.log(data)
                this.data = data;
                // console.log(this.data)
            })))
        }
    },
    created() {
        this.fetchData(this.url)
    }
  }).mount('#app')










// JavaScript para obtener imágenes de gatos desde la API
// const getCatButton = document.getElementById('getCatButton');
// const catImageContainer = document.getElementById('catImageContainer');

// getCatButton.addEventListener('click', () => {
//     fetch('https://api.thecatapi.com/v1/images/search')
//         .then(response => response.json())
//         .then(data => {
//             const catImageUrl = data[0].url;
//             const catImage = document.createElement('img');
//             catImage.src = catImageUrl;
//             catImage.alt = 'Imagen de un gato';
//             catImage.classList.add('cat-image');
//             catImageContainer.innerHTML = '';
//             catImageContainer.appendChild(catImage);
//         })
//         .catch(error => console.error(error));
// });
