require('./bootstrap')
import FieldProtector from './src/FieldProtector'
import FieldProtectorListener from './src/FieldProtector/Listener'

// Instantiate Field Protector
const protector = new FieldProtector()
protector.renderShieldForAll(document.querySelectorAll('input'))

// Listens for events
// e.g. when the logo/shortcut is clicked
const listener = new FieldProtectorListener(protector)
listener.listen()