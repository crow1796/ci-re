<script>
export default {
    props: {
        value: {
            required: false
        }
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
