import { shallowMount } from '@vue/test-utils'
import CreateSiteForm from '@app/popup/router/pages/Index/Sites/CreateSiteForm.vue'

describe('CreateSiteForm.vue', () => {
    let mocks
    let stubs

    beforeAll(() => {
        mocks = {
            $t: (name) => name,
            $route: {
                query: {
                    mode: 'current_site'
                }
            }
        }

        stubs = [
            'ci-input',
            'ci-button'
        ]
    })
    
    it('should load', () => {
        const wrapper = shallowMount(CreateSiteForm, {
            mocks,
            stubs
        })

        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})