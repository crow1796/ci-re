import { shallowMount } from '@vue/test-utils'
import App from '@app/popup/App.vue'

describe('App.vue', () => {
    it('should load', () => {
        const wrapper = shallowMount(App)
        
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})