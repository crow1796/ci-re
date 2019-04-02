import Input from './Input.vue'
import Button from './Button.vue'

export default {
    install(Vue){
        Vue.component('ci-input', Input)
        Vue.component('ci-button', Button)
    }
}