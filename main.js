const API_KEY = "live_7OCMn01T4H1nxC3GmzgK1T64x3dwLGT5XOySTr1eFfYc1A3Dde3NNy5zhxfXshKZ";

const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        url: "https://api.thecatapi.com/v1/images/search?limit=10",
        data: [],
        datosPaginado:[],
        urlBreed: "https://api.thecatapi.com/v1/breeds"
      }
    },
    methods: {
        fetchData(url){
            fetch(url)
            .then((res => res.json()
            .then(data => {
              // console.log(data)
                this.data = data;
                // console.log(this.data)
            })))
        },
        fetchBreeds(urlBreed){
          fetch(urlBreed)
          .then((res => res.json()
          .then(data => {
            this.datosPaginado = data;
            console.table(this.datosPaginado)
          })))
        }
    },
    created() {
        this.fetchData(this.url)
        this.fetchBreeds(this.urlBreed)
    }
  }).mount('#app')

