import Input from './Input.vue'
import Button from './Button.vue'
import Textarea from './Textarea.vue'

export default {
    install(Vue){
        Vue.component('ci-input', Input)
        Vue.component('ci-textarea', Textarea)
        Vue.component('ci-button', Button)
    }
}