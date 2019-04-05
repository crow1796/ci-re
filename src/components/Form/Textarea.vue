<template>
    <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" :for="name">
            {{ label }}
        </label>
        <textarea :class="`appearance-none border w-full py-4 px-3 text-grey-darker leading-tight outline-none focus:border-grey text-${size}`" 
        :id="name" 
        :name="name" 
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        v-model="model"
        v-validate="validationRules"></textarea>
    </div>
</template>

<script>
import FieldMixin from './Mixins/FieldMixin.vue'

export default {
    mixins: [FieldMixin]
}
</script>

