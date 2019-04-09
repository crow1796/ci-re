import NonceGenerator from './nonce-generator'
import AuthEncryptor from './auth-encryptor'
import store from '@app/popup/store'

class Authenticator {
    constructor() {
        this._authEncryptor = new AuthEncryptor()
        this._storagePrefix = window.storagePrefix
        this.LOGIN_URL = '/login'
    }

    _clearLocalStorageWillcard(key){
        let arr = [];
        const length = key.length;

        _.map(_.range(0, localStorage.length), (i) => {
            if (localStorage.key(i).substring(0, length) == key) arr.push(localStorage.key(i))
        })

        _.map(arr, (item) => localStorage.removeItem(item))
    }

    async login(userdata, options) {
        let promise = new Promise((resolve, reject) => {
            let key = {}
            this._authEncryptor.generateRSA(key, async (llave) => {
                if (!key.public || !key.private) reject(`Error creando RSA Keypair: ${JSON.stringify(key)}`)
                
                let unEncryptedNonce = NonceGenerator.getNonce()
                userdata = this._authEncryptor.encrypt({
                    ...userdata,
                    unEncryptedNonce
                })

                let pem = this._authEncryptor.getPki().publicKeyToPem(key.public)
                userdata.upublic = pem
                
                localStorage.setItem(this._storagePrefix + "unonce", unEncryptedNonce)

                let formData = new FormData()
                _.map(userdata, (v, k) => formData.append(k, v))
                
                let response = await axios.post(this.LOGIN_URL, formData, {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                })
                if (response.data.result.nonce && response.data.result.nonce == localStorage.getItem(`${this._storagePrefix}unonce`)){
                    this._clearLocalStorageWillcard('cib')

                    store.commit('auth/LOGIN_SUCCESS', {
                        token: response.data.result.token,
                        secret: response.data.result.secret
                    })
                    var privatePEM = this._authEncryptor.getPki().privateKeyToPem(key.private)
                    localStorage.setItem(this._storagePrefix + "prk", privatePEM)

                    resolve(response)
                    return
                }

                reject(response)
            })
        })
        return promise
    }

    async preLogin(data){
        let platform = 'win'
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0) platform = 'osx'
        data.platform = `plugin_${platform}`

        localStorage.setItem("apidomain", ".com")
        if (data.username.includes('@webempresa.eu') || data.username.includes('@webempresa.com')) localStorage.setItem('apidomain', '.io')

        let response = await axios.post(`/users/hasotp?username=${data.username}`)
        return response
    }
}

export default Authenticator