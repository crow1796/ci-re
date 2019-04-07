const files = require.context('.', false, /\.js$/)
const listeners = {}

files.keys().forEach(key => {
    if (key === './index.js') return
    listeners[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default listeners