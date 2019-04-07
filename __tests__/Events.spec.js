import EventTrigger from '@app/content_script/src/ExtensionEvents/trigger'

describe('Events', () => {
    it('should trigger an event', () => {
        console.log(EventTrigger('UseAction'))
    })
})