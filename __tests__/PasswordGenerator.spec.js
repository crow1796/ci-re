import {shallowMount} from '@vue/test-utils'
import PasswordGenerator from '@app/components/PasswordGenerator'
import { exportAllDeclaration } from '@babel/types';

describe('PasswordGenerator.vue', () => {
    it('should generate a password', () => {
        const length = 20
        const wrapper = shallowMount(PasswordGenerator, {
            propsData: {
                length
            }
        })

        wrapper.find('.generate-btn').trigger('click')

        expect(wrapper.find('.generated-pass').element.value).toHaveLength(length)
    })

    it('should contain numbers', () => {
        const wrapper = shallowMount(PasswordGenerator, {
            propsData: {
                numbers: true
            }
        })

        wrapper.find('.generate-btn').trigger('click')
        const generatedPassword = wrapper.find('.generated-pass').element.value
        expect(generatedPassword).toMatch(/\d/)
    })

    it('should contain symbols', () => {
        const splChars = "*|,\":<>[]{}`\';()@&$#%";
        const wrapper = shallowMount(PasswordGenerator, {
            propsData: {
                symbols: true
            }
        })

        _.map()

        wrapper.find('.generate-btn').trigger('click')
        const generatedPassword = wrapper.find('.generated-pass').element.value
        expect(_.filter(splChars.split(''), (c) => generatedPassword.includes(c)).length > 0).toBeTruthy()
    })
})