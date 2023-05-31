<template>
  <header-component :cartTotalLength="cartTotalLength"/>
  <div class="is-loading-bar has-text-centered" v-bind:class="{'is-loading': $store.state.isLoading }">
      <div class="lds-dual-ring"></div>
    </div>
 <router-view></router-view>
 <FooterComponent/>
</template>

<style lang="scss">
@import '../node_modules/bulma';
@import url('https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap');
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #ccc;
  border-color: #ccc transparent #ccc transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.is-loading-bar {
  height: 0;
  overflow: hidden;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  &.is-loading {
    height: 80px;
  }
}

body{
  font-family: 'Tenor Sans';
 background-color: #0a0a0a;
  margin: auto;
  padding: 0;

}
a{
  text-decoration: none;
}
.beaty{

  background-image: url('https://i.pinimg.com/564x/8a/fc/24/8afc246f9ea3ec5208342d764ebd63c7.jpg');
  background-size: cover;
}


</style>
<script>

import axios from 'axios'
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default{
  
  components:{
    HeaderComponent,
    FooterComponent,

},
data() {
    return {
      showMobileMenu: false,
      cart: {
        items: []
      }
    }

  },
  beforeCreate() {
    this.$store.commit('initializeStore')
    const token = this.$store.state.token
    if (token) {
        axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
        axios.defaults.headers.common['Authorization'] = ""
    }
  },
  mounted() {
    this.cart = this.$store.state.cart
  },

  computed: {
      cartTotalLength() {
          let totalLength = 0
          for (let i = 0; i < this.cart.items.length; i++) {
              totalLength += this.cart.items[i].quantity
          }
          return totalLength
      }
  }
}
</script>