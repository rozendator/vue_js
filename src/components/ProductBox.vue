<template>
    <div class="product_box">
        <div class="box_element">
            <figure>
                <img v-bind:src="product.get_thumbnail">
            </figure>

            <h3 >{{ product.name }}</h3>
            <p>Цена:{{ product.price }}тг</p>

            <router-link v-bind:to="product.get_absolute_url" >Детали</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductBox',
    props: {
        product: Object
    }
}
</script>

<style scoped lang="scss">
.product_box{
    display: flex;
    flex-wrap: wrap;
}
img{
    width: 260px;
    height: 240px;
    border-radius: 25px;
}
  .image {
    margin-top: -1.25rem;
    margin-left: -1.25rem;
    margin-right: -1.25rem;
  }
  .box_element{
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 12px;
    a{
        color: #fff;
    }
  }
</style>