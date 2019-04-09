<template>
	<div id="app">
		<full-loader v-if="isFullLoading"/>
        <language-chooser v-if="$route.name == 'auth'"/>
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
import '@app/scss/main.scss'
import { mapGetters } from 'vuex'
import LanguageChooser from '@app/popup/components/App/LanguageChooser.vue'
import FullLoader from '@app/popup/components/App/FullLoader.vue'

export default {
    components: {
		FullLoader,
        LanguageChooser
    },
	computed: {
		...mapGetters({
			isFullLoading: 'app/isFullLoading'
		})
	}
}
</script>