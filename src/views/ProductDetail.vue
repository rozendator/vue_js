<template>
    <div class="page_product">
   <div class="product_img">
    <img v-bind:src="product.get_image">
   </div>
   <div class="product_info">
    <h2 >{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <p>{{ product.price }}</p>
    <div class="control">
                        <input type="number" class="input" min="1" v-model="quantity">
                    </div><a class="button is-dark"     @click="addToCart()" >Добавить в корзину</a>

   </div>
        </div>

</template>
<style lang="scss">
.page_product{
    display: flex;
    align-items: center;
    justify-content: space-around;
    img{
        width: 440px;
        height: 560px;
        margin: 16px;
    }

.product_info{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2{
    color: #fff;
 }
p{
color: #fff;
 }
 a{
    color: #fff;
 }
}
}
</style>
<script>
import { toast } from 'bulma-toast'
import axios from 'axios'

export default {
    name: 'Product',
    data() {
        return {
            product: {},
            quantity: 1
        }
    },
    mounted() {
        this.getProduct() 
    },
    methods: {
        async getProduct() {
            this.$store.commit('setIsLoading', true)
            const category_slug = this.$route.params.category_slug
            const product_slug = this.$route.params.product_slug
            await axios
                .get(`/api/v1/products/${category_slug}/${product_slug}`)
                .then(response => {
                    this.product = response.data
                    document.title = this.product.name + ' | Djackets'
                })
                .catch(error => {
                    console.log(error)
                })
            
            this.$store.commit('setIsLoading', false)
        },
        addToCart() {
            if (isNaN(this.quantity) || this.quantity < 1) {
                this.quantity = 1
            }
            const item = {
                product: this.product,
                quantity: this.quantity
            }
            this.$store.commit('addToCart', item)
            toast({
                message: 'Товар был добавлен в корзину',
                type: 'is-success',
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position: 'bottom-right',
            })
    }
}
}
</script>
