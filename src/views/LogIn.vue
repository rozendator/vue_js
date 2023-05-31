<template>
    <div class="page-log-in">
       
        <h2>Вход</h2>
       <div class="log-box">
        <form @submit.prevent="submitForm">
            <input type="text" v-model="username" placeholder="Email">
            <input type="password" v-model="password" placeholder="Пароль">
            <div class="notification is-danger" v-if="errors.length">
                        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                    </div>
            <button class="button is-dark">Войти</button>
           Или <router-link to="/sign-up">Нажмите сюда</router-link> если нет аккаунта
            </form>
       </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'LogIn',
    data() {
        return {
            username: '',
            password: '',
            errors: []
        }
    },
    mounted() {
        document.title = 'Log In | Aya'
    },
    methods: {
        async submitForm() {
            axios.defaults.headers.common["Authorization"] = ""

            localStorage.removeItem("token")

            const formData = {
                username: this.username,
                password: this.password
            }

            await axios
                .post("/api/v1/token/login/", formData)
                .then(response => {
                    const token = response.data.auth_token

                    this.$store.commit('setToken', token)
                    
                    axios.defaults.headers.common["Authorization"] = "Token " + token

                    localStorage.setItem("token", token)

                    const toPath = this.$route.query.to || '/cart'

                    this.$router.push(toPath)
                })
                .catch(error => {
                    if (error.response) {
                        for (const property in error.response.data) {
                            this.errors.push(`${property}: ${error.response.data[property]}`)
                        }
                    } else {
                        this.errors.push('Что-то пошло не так. Пожалуйста, попробуйте еще раз')
                        
                        console.log(JSON.stringify(error))
                    }
                })
        }
    }
}
</script>
<style lang="scss">
.page-log-in{
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    
    h2{
        color: #fff;
        font-size: 28px;
    }
    form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    margin: 24px;
    width: 400px;
height: 440px;
button{
    background-color: #000;
    border: none;
    border-radius: 25px;
}
    input{
       border-top: none;
       border-left: none;
       border-right: none;
        margin: 12px;
        text-align: center;
      
    }
}
}
</style>