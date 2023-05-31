<template>

<div class="shop">
  
    <p>Магазин</p>
   <div class="shop_section">
   <CategoryPresent/>
    <div class="products">
        <ProductBox 
        v-for="product in latestProducts"
        v-bind:key="product.id"
        v-bind:product="product" />
    </div>
   </div>
</div>

</template>
<style lang="scss" scoped>
.shop_section{
  display: flex;
  align-items: center;
 
  
}

.shop{
    text-align: center;
    p{
color: #fff;
font-size: 36px;
    }
    .products{
        display: flex;
        flex-wrap: wrap;
    }
}
</style>
<script>
import axios from 'axios'
import ProductBox from '@/components/ProductBox'
import CategoryPresent from '@/components/CategoryPresent.vue'
export default {
  name: 'Home',
  data() {
    return {
      latestProducts: []
    }
  },
  components: {
    ProductBox,
    CategoryPresent
},
  mounted() {
    this.getLatestProducts()
    document.title = 'Shop | AYA'
  },
  methods: {
    async getLatestProducts() {
      this.$store.commit('setIsLoading', true)
      await axios
        .get('/api/v1/latest-products/')
        .then(response => {
          this.latestProducts = response.data
        })
        .catch(error => {
          console.log(error)
        })
      this.$store.commit('setIsLoading', false)
    }
  }
}
</script>
