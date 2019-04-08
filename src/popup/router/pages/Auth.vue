<i18n>
{
  "en-US": {
    "email_address": "Email Address",
    "password": "Password",
	"sign_in": "Sign In",
	"forgot_password": "Forgot your Password?",
	"password_required_validation": "Please enter a password.",
    "2_steps_verification_label": "Verification in 2 steps",
    "2_steps_verification_hint": "6-digit code"
  },
  "es-ES": {
    "email_address": "Email",
    "password": "Contraseña",
	"sign_in": "Acceder",
	"forgot_password": "¿Olvidaste la contraseña?",
	"password_required_validation": "Porfavor ingrese una contraseña.",
    "2_steps_verification_label": "Verificación en 2 pasos",
    "2_steps_verification_hint": "Código de 6 dígitos"
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
            <div v-if="!askOTP">
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
            </div>
            <div v-else>
                <ci-input name="otpnumber" 
                :label="$t('2_steps_verification_label')" 
                :placeholder="$t('2_steps_verification_hint')"
                validation-rules="required"
                v-model="userdata.otpnumber"/>

                <div class="text-right mt-6">
                    <ci-button appearance="primary" 
                    :text="$t('sign_in')"
                    type="submit"
                    :is-loading="isLoading"/>
                </div>
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
                password: null,
                otpnumber: null
            },
            isLoading: false,
            askOTP: false
        }
    },
    methods: {
        async login(){
            this.isLoading = true
            let result = await this.$validator.validateAll()
            if(!result) return this.isLoading = false

            const { data } = await this.$store.dispatch('auth/preLogin', this.userdata)
            if(data.result && !this.userdata.otpnumber){
                this.isLoading = false
                this.askOTP = true
                return
            }
            await this.$store.dispatch('auth/login', this.userdata)
            this.isLoading = false
            this.$router.replace('/sites')
        }
    }
}
</script>

