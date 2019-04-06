<i18n>
{
    "en-US": {
        "length_label": "Length",
        "with_numbers_label": "With Numbers",
        "with_lowercase_label": "With Lowercase",
        "with_uppercase_label": "With Uppercase",
        "with_symbols_label": "With Symbols",
        "exclude_similar_chars_label": "Exclude Similar Characters"
    },
    "es-ES": {
        "length_label": "Longitud",
        "with_numbers_label": "Con numeros",
        "with_lowercase_label": "Con minúsculas",
        "with_uppercase_label": "Con mayúsculas",
        "with_symbols_label": "Con simbolos",
        "exclude_similar_chars_label": "Excluir personajes similares"
    }
}
</i18n>

<template>
    <div id="generate-password">
        <div class="mx-4 py-8">
            <div class="flex">
                <div class="w-full">
                    <ci-input name="length" 
                        type="number" 
                        :label="$t('length_label')" 
                        :placeholder="$t('length_label')"
                        v-model="length"/>
                </div>
            </div>
            
            <div class="flex">
                <div class="w-1/2">
                    <ci-checkbox :label="$t('with_numbers_label')"
                        v-model="withNumbers"
                        name="with-numbers"/>
                </div>
                <div class="w-1/2">
                    <ci-checkbox :label="$t('with_lowecase_label')"
                        v-model="withLowercase"
                        name="with-lowercase"/>
                </div>
            </div>

            <div class="flex">
                <div class="w-1/2">
                    <ci-checkbox :label="$t('with_uppercase_label')"
                        v-model="withUppercase"
                        name="with-uppercase"/>
                </div>
                <div class="w-1/2">
                    <ci-checkbox :label="$t('with_symbols_label')"
                        v-model="withSymbols"
                        name="with-symbols"/>
                </div>
            </div>

            <div class="flex">
                <div class="w-full">
                    <ci-checkbox :label="$t('exclude_similar_chars_label')"
                        v-model="excludeSimilarCharacters"
                        name="exclude-similar-chars"/>
                </div>
            </div>
            <password-generator wrapper-class="flex flex-wrap items-stretch w-full relative"
                input-class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light px-3 relative outline-none text-center appearance-none text-grey-darker focus:border-grey text-md"
                copy-button-class="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm cursor-pointer hover:bg-grey-lightest"
                button-class="flex items-center leading-normal bg-grey-lighter rounded rounded-l-none border border-l-0 border-grey-light px-3 whitespace-no-wrap text-white text-sm cursor-pointer bg-primary"
                :numbers="withNumbers"
                :symbols="withSymbols"
                :lowercase="withLowercase"
                :uppercase="withUppercase"
                :length="length"
                :exclude-similar-characters="excludeSimilarCharacters">
                <template slot="copy-btn">
                    <i class="fas fa-copy"></i>
                </template>
                <template slot="generate-btn">
                    <i class="fas fa-sync-alt"></i>
                </template>
            </password-generator>
        </div>
    </div>
</template>

<script>
import PasswordGenerator from '@app/components/PasswordGenerator'
export default {
    components: {
        PasswordGenerator
    },
    data(){
        return {
            withNumbers: false,
            withUppercase: true,
            withLowercase: true,
            withSymbols: true,
            excludeSimilarCharacters: false,
            length: 10
        }
    }
}
</script>

