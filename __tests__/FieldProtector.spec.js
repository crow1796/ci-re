import FieldProtector from '@app/content_script/src/FieldProtector'
import FieldProtectorListener from '@app/content_script/src/FieldProtector/Listener'
import { JestEnvironment } from '@jest/environment';

describe('FieldProtector', () => {

    beforeAll(() => {
        global.chrome = {
            runtime: {
                getURL(path){ return `/${path}` }
            }
        }
    })
    
    it('should accept given username or email names', () => {
        const protector = new FieldProtector()

        expect(protector.getAcceptableUsernameFieds()).toContain('username')
        expect(protector.getAcceptableUsernameFieds()).toContain('email')
    })

    it('should accept given password names', () => {
        const protector = new FieldProtector()

        expect(protector.getAcceptablePasswordFields()).toContain('password')
        expect(protector.getAcceptablePasswordFields()).toContain('pass')
    })

    it('should render logo', () => {
        const protector = new FieldProtector()
        let dummyFields = [{
            id: 'username',
            type: 'text',
            style: {}
        }]
        protector.renderShieldForAll(dummyFields)
    })
})

describe('FieldProtectorListener', () => {
    it('should listen', () => {
        const protector = new FieldProtector()
        const listener = new FieldProtectorListener(protector)
        listener.listen()
    })
})