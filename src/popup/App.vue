<template>
	<div id="app">
        <language-chooser v-if="$route.name == 'auth'"/>
		<router-view></router-view>
	</div>
</template>

<script>
import '@app/scss/main.scss'
import LanguageChooser from '@app/popup/components/App/LanguageChooser.vue'

export default {
    components: {
        LanguageChooser
    },
	data () {
		return {}
	}
}
</script>