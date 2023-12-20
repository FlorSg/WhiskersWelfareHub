const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        url: "https://whisker.pythonanywhere.com/productos",
        products: [],
        datosPaginado:[]
      }
    },
    methods: {
        fetchData(url){
            fetch(url)
            .then((res => res.json()
            .then(data => {
              // console.log(data)
                this.products = data;
                // console.log(this.data)
            })))
        },
    },
    created() {
        this.fetchData(this.url)
    }
  }).mount('#app')




