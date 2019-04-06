<template>
    <div class="password-generator"
        :class="wrapperClass"
        :id="`${generatedId}-password-generator`">
        <span :class="copyButtonClass" 
            title="Copy to Clipboard"
            class="copy-btn"
            @click="copyToClipboard">
            <slot name="copy-btn">
            </slot>
        </span>
        <input type="text" 
            :class="inputClass" 
            v-model="password"
            class="generated-pass"
            :id="`${generatedId}-generated-pass`"
            @input.prevent 
            @keyup.prevent 
            @keydown.prevent 
            @keypress.prevent>
        <span :class="buttonClass" 
            title="Generate"
            class="generate-btn"
            @click="generate">
            <slot name="generate-btn">
            </slot>
        </span>
    </div>
</template>

<script>
import generator from 'generate-password'
export default {
    props: {
        length: {
            default: 10
        },
        numbers: {
            type: Boolean,
            default: false
        },
        symbols: {
            type: Boolean,
            default: false
        },
        uppercase: {
            type: Boolean,
            default: true
        },
        excludeSimilarCharacters: {
            type: Boolean,
            default: false
        },
        exclude: {
            type: String,
            default: '"'
        },
        wrapperClass: {},
        inputClass: {},
        buttonClass: {},
        copyButtonClass: {}
    },
    created(){
        this.generatedId = this.__generateId()
    },  
    data(){
        return {
            password: null,
            generatedId: null
        }
    },
    methods: {
        __generateId(){
            return 'xxxxxxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
                var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                return v.toString(16);
            })
        },
        copyToClipboard(){
            const txt = document.getElementById(`${this.generatedId}-generated-pass`)
            txt.select()
            document.execCommand('copy')
        },
        generate(){
            this.password = generator.generate({
                length: this.length,
                numbers: this.numbers,
                symbols: this.symbols,
                uppercase: this.uppercase,
                excludeSimilarCharacters: this.excludeSimilarCharacters,
                exclude: this.exclude,
                strict: this.strict
            })
        }
    }
}
</script>