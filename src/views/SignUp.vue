<template>
    <div class="page-sign-up">
       <h2>Регистрация</h2>
       <div class="sign-box">
        <form @submit.prevent="submitForm">
            <input type="text" v-model="username" placeholder="Email">
            <input type="number" v-model="phone" placeholder="Номер телефона">
            <input type="password" v-model="password" placeholder="Пароль">
            <input type="password" v-model="password2" placeholder="Повторите пароль">
            <button class="button is-dark">Зарегестрироваться</button>
           Или <router-link to="/log-in">Нажмите сюда</router-link> если уже есть аккаунт
            </form>
       </div>
    </div>
</template>

<script>
import axios from 'axios'
import { toast } from 'bulma-toast'

export default {
    name: 'SignUp',
    data() {
        return {
            username: '',
            password: '',
            password2: '',
            phone:'',
            errors: []
        }
    },
    methods: {
        submitForm() {
            this.errors = []

            if (this.username === '') {
                this.errors.push('Пустое поле')
            }

            if (this.password === '') {
                this.errors.push('Слишком короткий пароль')
            }

            if (this.password !== this.password2) {
                this.errors.push('Пароли не совпадают')
            }

            if (!this.errors.length) {
                const formData = {
                    username: this.username,
                    password: this.password
                }

                axios
                    .post("/api/v1/users/", formData)
                    .then(response => {
                        toast({
                            message: 'Аккаунт создан, авторизуйтесь!',
                            type: 'is-success',
                            dismissible: true,
                            pauseOnHover: true,
                            duration: 2000,
                            position: 'bottom-right',
                        })

                        this.$router.push('/log-in')
                    })
                    .catch(error => {
                        if (error.response) {
                            for (const property in error.response.data) {
                                this.errors.push(`${property}: ${error.response.data[property]}`)
                            }

                            console.log(JSON.stringify(error.response.data))
                        } else if (error.message) {
                            this.errors.push('Что-то пошло не так. Пожалуйста, попробуйте еще раз')
                            
                            console.log(JSON.stringify(error))
                        }
                    })
            }
        }
    }
}
</script>
<style lang="scss">
.page-sign-up{
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