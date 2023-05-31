<template>
    <div class="page-cart">
        <div class="columns is-multiline">
            <div class="column is-12">
                <div class="title">
                    <h2>Корзина</h2>
                </div>
            </div>

            <div class="column is-12 box">
                <table class="table is-fullwidth" v-if="cartTotalLength">
                    <thead>
                        <tr>
                            <th>Наименование</th>
                            <th>Цена</th>
                            <th>Количество</th>
                            <th>Сумма</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <CartItem
                            v-for="item in cart.items"
                            v-bind:key="item.product.id"
                            v-bind:initialItem="item"
                            v-on:removeFromCart="removeFromCart" />
                    </tbody>
                </table>

                <p v-else>Корзина пуста</p>
            </div>

            <div class="column is-12 box center">
                <h2 class="subtitle">Итоговая сумма</h2>

                <strong>{{ cartTotalPrice.toFixed(2) }}тг</strong>, {{ cartTotalLength }} товаров

                <hr>

                <router-link to="/cart/checkout" class="button is-dark">Оформить заказ</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import CartItem from '@/components/CartItem.vue'

export default {
    name: 'Cart',
    components: {
        CartItem
    },
    data() {
        return {
            cart: {
                items: []
            }
        }
    },
    mounted() {
        this.cart = this.$store.state.cart
    },
    methods: {
        removeFromCart(item) {
            this.cart.items = this.cart.items.filter(i => i.product.id !== item.product.id)
        }
    },
    computed: {
        cartTotalLength() {
            return this.cart.items.reduce((acc, curVal) => {
                return acc += curVal.quantity
            }, 0)
        },
        cartTotalPrice() {
            return this.cart.items.reduce((acc, curVal) => {
                return acc += curVal.product.price * curVal.quantity
            }, 0)
        },
    }
}
</script>
<style lang="scss">
.title{
    text-align: center;
    h2{
        color: #fff;
        font-size: 24px;
    }
}
.center{
    text-align: center;
}
</style>