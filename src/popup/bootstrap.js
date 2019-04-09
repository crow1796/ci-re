window.storagePrefix = 'cib_'
window._ = require('lodash')

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios')

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.interceptors.request.use(function (config) {
    config.headers.common['Authorization'] = `Bearer ${localStorage.getItem("cib_token")}`
    config.headers.common['Secret'] = `${localStorage.getItem("cib_secret")}`
    return config
}, function (error) {
    // Do something with request error
    return Promise.reject(error)
})
let domain = localStorage.getItem("apidomain") === ".io" ? ".io" : ".com"
window.axios.defaults.baseURL = `https://api.ciberprotector${domain}`