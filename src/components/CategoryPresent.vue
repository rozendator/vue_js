<template>
    <div class="category">
      
        <p>Категории</p>
      <router-link to="/bracelets" >Браслеты</router-link>
      <router-link to="/rings" >Кольца</router-link>
      <router-link to="/necklace" >Ожерелье</router-link>
          <router-link to="/earrings" >Серьги</router-link>
          <router-link to="/chokers" >Чокеры</router-link>
    </div>
</template>
<style lang="scss">
.category{
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 24px;
  p{
    font-size: 28px;
    color: #fff;
  }
  a{
    color: #fff;
  }
  a:hover{
    background-color: #808080;
  }
}</style>