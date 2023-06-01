<template>
    <footer>
<div class="social">
   <p> Оставайтесь на связи</p>
    <a href="https://www.instagram.com/aya_collection.kz/"><img src="https://i.pinimg.com/564x/12/ec/3c/12ec3cd5eb27905a9970e10b683070b8.jpg" alt=""></a>
    <a href="https://api.whatsapp.com/send/?phone=77774750917"><img src="https://i.pinimg.com/564x/bd/dd/bf/bdddbf884386a29aaf19d7fb33990891.jpg" alt=""></a>
</div>
<div class="logo">
 
    <img src="https://i.pinimg.com/564x/bb/c8/45/bbc8456f785e8cfefdd962fbe74ab14f.jpg" alt="">
</div>
<div class="info">
<p> +7 777 475 0917</p>
<p>г. Астана, ул. Кенесары 52</p>
</div>
    </footer>
    <svg-icon :fa-icon="faCoffee" :size="96" flip="horizontal"></svg-icon>
</template>
<style  lang="scss" scoped>
footer{
    display: flex;
    justify-content: space-around;
    align-items: center;
    p{
        color: #B7B7B7;
    }
}
.logo{
    img{
width: 100px;
height: 100px;
    }
}
.social{
    text-align: center;

    img{
width: 50px;
height: 50px;
margin: 8px;
    }
}
</style>
<script>
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default {
  	setup() {
		return {
			faCoffee,
	  	}
  	}
}
</script>