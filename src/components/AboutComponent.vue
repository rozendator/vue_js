<template>
     <div class="title">
            <p>О нас</p>
        </div>
    <div  class="about"  :class="{ 'small-screen': isSmallScreen, 'large-screen': !isSmallScreen }">
       
        <div class="about_txt">
<p>AYA COLLECTION - это индивидуальность и твоя собственная история.
В украшениях мы не увековечиваем стремление к безликому, а работаем с характером и ощущениями.</p>
<p>AYA COLLECTION работает с 2021 года. За это время сделано тысячи успешных заказов, разработанно множество индвидуальных заказов и полученно огромное количество отзывов.</p>
<p>AYA COLLECTION - это про доверие и комфорт. Во всех изделиях используются натуральные камни. </p>
<img src="https://i.pinimg.com/564x/01/74/b8/0174b8ae186b27a4efbe6fde520b5ae1.jpg" alt="">
        </div>
        <div class="about_img">
            <img src="https://i.pinimg.com/564x/75/b7/e3/75b7e382aa05e187cbf84ae0298a8506.jpg" alt="">
        </div>
    </div>
</template>
<style lang="scss">
.title{
  

    margin: 36px;
    p{
        color: #fff;
        font-size: 24px;
    }
}
.about{
    display: flex;
    justify-content: space-around;
    align-items: center;

}
.about_txt{
    width: 456px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      transform: rotate(20deg);
      border-radius: 50%;
    }
 p{
    color: #fff;
    font-size: 18px;
    &:nth-of-type(2) {
 margin-left: 40px;
  }
 }


}
.about_img{
    img{
     
     height: 640px;
     width: 600px;
  
    }
 }
 .small-screen{
    .about{
flex-direction: column-reverse;
    }
    .about_txt{
        width: 280px;
        img{
            display: none;
        }
    }
    .about_img{
        img{
            height: 300px;
            width: 280px;
        }
    }
 }
</style>

<script>
export default {
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
      this.isSmallScreen = window.innerWidth < 1020; 
    },
  },
};
</script>