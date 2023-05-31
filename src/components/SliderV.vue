<template>
 <div class="slider">
  
  <Carousel class="carousel" :class="{ 'small-screen': isSmallScreen, 'large-screen': !isSmallScreen }" :itemsToShow="3.95" :wrapAround="true" :transition="500">
      <Slide v-for="el in category" :key="el.name">
        <div class="carousel__item">
            <img v-bind:src="el.get_image">
            <p>{{ el.name }}</p>
          
        </div>
      </Slide>
  

    </Carousel>
 

 </div>
  </template>
  
  <script>
  import axios from 'axios'
  import { defineComponent } from 'vue'
  import { Carousel, Pagination, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    data() {
    return {
      category: [],
      isSmallScreen: false,
    }
  },
    name: 'Autoplay',
    components: {
      Carousel,
      Slide,
      Pagination,
    },
    created() {
    window.addEventListener('resize', this.checkScreenSize);
    this.checkScreenSize();
  },
  destroyed() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
    mounted() {
    this.getCategory()
    console.log(this.category);
  
  },
methods: {
    async getCategory() {
      this.$store.commit('setIsLoading', true)
      await axios
        .get('/api/v1/category-products/')
        .then(response => {
          this.category = response.data
        })
        .catch(error => {
          console.log(error)
        })
      this.$store.commit('setIsLoading', false)
    },
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth < 950; // Настройте размер экрана по вашему выбору
    },
  }
  })
  
  </script>
  
  <style scoped lang="scss">

  .slider{

    background-color: #fff;
  }
  body{
    color: white;
    font-size: 26px;
  }
  .carousel__slide {
    padding: 32px;
  }
  
  .carousel__viewport {
    perspective: 2000px;
  }
  
  .carousel__track {
    transform-style: preserve-3d;
  }
  
  .carousel__slide--sliding {
    transition: 0.5s;
  }
  
  .carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
  }
  
  .carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
  }
  
  .carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
  }
  
  .carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
  }
  
  .carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
  }
  img{
    width: 300px;
    height: 300px;
  }
  .small-screen {
display: none;
}
  </style>