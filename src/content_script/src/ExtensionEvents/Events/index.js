const files = require.context('.', false, /\.js$/)
const events = {}

files.keys().forEach(key => {
    if (key === './index.js') return
    events[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default events