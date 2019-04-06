<script>
import ModelMixin from './ModelMixin.vue'
import TextMixin from './TextMixin.vue'
import NamedMixin from './NamedMixin.vue'
import ValidationMixin from './ValidationMixin.vue'

export default {
    mixins: [ModelMixin, TextMixin, NamedMixin, ValidationMixin],
    props: {
        size: {
            default: 'md'
        },
        autocomplete: {
            default: 'off'
        }
    }
}
</script>
