<script>
export default {
    props: {
        name: {
            required: true
        },
        label: {
            default: ''
        },
        placeholder: {
            default: ''
        },
        value: {
            required: false
        },
        size: {
            default: 'md'
        },
        autocomplete: {
            default: 'off'
        },
        validationRules: {
            required: false
        }
    },
    inject: {
        $validator: '$validator'
    },
    data(){
        return {
            model: this.value
        }
    },
    watch: {
        value(to){
            this.model = to
        },
        model(to){
            this.$emit('input', to)
        }
    }
}
</script>
