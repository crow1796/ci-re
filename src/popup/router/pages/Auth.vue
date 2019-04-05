<i18n>
{
  "en-US": {
    "email_address": "Email Address",
    "password": "Password",
	"sign_in": "Sign In",
	"forgot_password": "Forgot your Password?",
	"password_required_validation": "Please enter a password."
  },
  "es-ES": {
    "email_address": "Email",
    "password": "Contraseña",
	"sign_in": "Acceder",
	"forgot_password": "¿Olvidaste la contraseña?",
	"password_required_validation": "Porfavor ingrese una contraseña."
  }
}
</i18n>

<template>
    <div id="auth">
        <div class="logo text-center bg-primary py-8">
            <div class="px-12">
                <img src="/images/ciberprotector-logo-blanco.png" alt="CiberProtector">
            </div>
        </div>
        <form class="px-6 py-6"
            @submit.prevent="login">
            <ci-input name="email" 
            :label="$t('email_address')" 
            :placeholder="$t('email_address')"
            validation-rules="required"
            v-model="userdata.username"/>
            <ci-input name="password" 
            type="password" 
            :label="$t('password')" 
            placeholder="******************"
            validation-rules="required"
            v-model="userdata.password"/>
            <div class="flex items-center justify-between mt-6">
                <a class="inline-block align-baseline text-sm text-blue hover:text-blue-darker no-underline" 
                href="https://ciberprotector.com/olvide-la-contrasena-maestra/" target="_blank">
                    {{ $t('forgot_password') }}
                </a>
                <ci-button appearance="primary" 
                :text="$t('sign_in')"
                type="submit"
                :is-loading="isLoading"/>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userdata: {
                username: null,
                password: null
            },
            isLoading: false
        }
    },
    methods: {
        async login(){
            this.isLoading = true
            let result = await this.$validator.validateAll()
            this.isLoading = false
            if(result) return this.$store.dispatch('auth/login', this.userdata)
        }
    }
}
</script>

