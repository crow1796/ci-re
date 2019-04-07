require('./bootstrap')
import FieldProtector from './src/FieldProtector'
import FieldProtectorListener from './src/FieldProtector/Listener'
import EventTrigger from './src/ExtensionEvents/trigger'

// Instantiate Field Protector
const protector = new FieldProtector()
protector.renderShieldForAll($('input'))

// Listens for events
// e.g. when the logo/shortcut is clicked
const fieldListener = new FieldProtectorListener(protector)
fieldListener.listen()

// Listen to extension events
chrome.runtime.onMessage.addListener((req, _, res) => {
    res(EventTrigger(req.event, req.data))
})