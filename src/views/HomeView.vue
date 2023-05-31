<template>
  <div class="main" :class="{ 'small-screen': isSmallScreen, 'large-screen': !isSmallScreen }">
      <div class="main_txt">
          <div class="upper_txt">
             <p>AYA COLLECTION </p>
              
          </div>
          <div class="under_txt">
              <p>ТВОЯ  УНИКАЛЬНОСТЬ</p>
              <router-link to="/shop">Перейти в магазин</router-link>
          </div>
      </div>
      <div class="main_img">
          <img src="https://i.pinimg.com/564x/8d/57/72/8d57727beeed86222091f40102eac09b.jpg" alt="">
      </div>
  </div>
  <div class="txt_category">
    <h3>Категории</h3>
      <p>Украшения AYA COLLECTION — ваши особенные истории, воплощенные в ювелирных изделиях.</p>
    </div> 
  <div class="app">
        <SliderV />
        
    </div>  
    <div class="category_btn">
      <button class="btn"><router-link to="/shop"> ПОДРОБНЕЕ</router-link></button>
    </div> 
   
<BeatyComponent/>
<AboutComponent/>
</template>
<style lang="scss">
  .txt_category{
    margin: 74px;
    h3{
      color: #BC5E5E;
      margin: 20px;
    }
    p{
      color: #fff;
      margin: 20px;
      width: 400px;
    }
  }
.main{
  display: flex;
  justify-content: space-around;
  align-items: center;
  .main_img{
    img{
      height: 610px;
      border-top-left-radius:80px;
border-top-right-radius:80px;
    }
  }
  p{
    color: white;
  }
  .upper_txt{
    font-size: 52px;
  }
  .under_txt{
  p{
    font-size: 36px;
    margin-left: 36px;
  }
  a{
    font-size: 18px;
    color: #fff;
  }

  }

}
.category_btn{
  display: flex;
  justify-content: center;
  a{
    color: #fff;
  }
  button{
    width: 312px;
height: 93px;
border: 1px solid #FFFFFF;

border-radius: 51px;
background-color: #000;
margin: 12px;
  }

}
.small-screen {
flex-direction: column;
.btn{
  display: none;
}
}
</style>
<script>
import BeatyComponent from '@/components/BeatyComponent.vue';
import AboutComponent from '@/components/AboutComponent.vue'

import SliderV from '@/components/SliderV.vue';
export default{

  components:{
    BeatyComponent,
    AboutComponent,
    SliderV
},
data() {
    return {
      isSmallScreen: false,
    };
  },
  created() {
    window.addEventListener('resize', this.checkScreenSize);
    this.checkScreenSize();
  },
  destroyed() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth < 1000; //
    },
  },


}
</script>