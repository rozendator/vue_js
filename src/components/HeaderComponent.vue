<template>
 <header class="header">
 
        <router-link to="/"><img src="https://i.pinimg.com/564x/65/a7/3c/65a73c407eeca7daba4542412c16a7a5.jpg" alt="Logo"/></router-link>
  
  <nav class="navbar is-black">
    <div class="navbar-brand">
      
      <button class="navbar-burger burger" @click="toggleDropdown">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <form method="get" action="/search">
            <div class="field has-addons">
              <div class="control">
                <input class="input" type="text" placeholder="Поиск" name="query">
              </div>
              <div class="control">
                <button class="button is-primary btn-search">
                  <img src="https://i.pinimg.com/564x/81/45/b8/8145b887941ae6844e80550d9f845bf1.jpg" alt="">
                </button>
              </div>
            </div>
          </form>
        </div>
        <router-link to="/cart" class="navbar-item">
          <img src="https://i.pinimg.com/564x/15/e0/67/15e067e33fbd9ed2f9a41b15d4941bf3.jpg" alt="">
          {{ cartTotalLength }}
        </router-link>
        <router-link to="/profile" class="navbar-item">
          <img src="https://i.pinimg.com/564x/2e/cc/eb/2ecceb1718ff9e01708c8f3d3fa25356.jpg" alt="">
        </router-link>
        <router-link to="/help" class="navbar-item">Помощь</router-link>
        
        <router-link to="/shop" class="navbar-item">Магазин</router-link>
      </div>
    </div>
  </nav>
</header>
</template>
<style lang="scss" scoped>

.header{
    display: flex;
    justify-content: center;
    align-items: center;
height: 100px;
.menu-btn{
  display: none;
}
a{
 
    color: #fff;
    margin-left: 52px;
}
.menu{
  display: flex;
  align-items: center;
}
.menu-item{
  display: flex;
}
.nav_search{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
}
button{
  background: none;
  border: none;
}


}
@media screen and (max-width: 900px) {
  .menu{
  display: none;
  position: absolute;

  
}
.menu-btn{
  display: block;
}

}


</style>
<script>
export default{
  data() {
    return {
      isOpen: false
    }
  },
  props: ['cartTotalLength'],
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen
    }
  }
  
}
</script>
