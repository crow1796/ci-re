import forge from 'node-forge'

export default class AuthEncryptor {
    constructor(){
        this._pki = forge.pki

        this._publicPEM =
            "-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAtawodp5ToEn+n4rJr++r\ngmKHvjzHuNhopmF4bASi5mXS0gzOuWnsTGmPmTS9+4bAuGDMA6u3AlSaP8+5CbC4\nwyjkJR1HnShOT/vMnXUgg3MO2NiY0Tb3LnKcXIRH7577OjR812CPnZdG21AQzpSe\n9JM6pqWM/KKGQV0bKVwpK53EfoH1nWabKlL98Tz2VOX1aAR6vqCpiP060eRIbxBB\n0eUjsVU6U/zg+T060fR1ur1rO/ekHhBfcloPiRvqYKNNFzsCJnMwg8x1zlmV+HK/\nt7kSbohA8xwGtIC+LXFnwtsypr6xUdR75HoOE4SpiJtTh/PVL7felPRF9d/v0UQY\nzYU9F/m9EhhqP52Vp/DL0VJSfmSK9n4U7eQH8i7fYxyWnTr1xFJkzrznUdYAyogQ\ne81SBUxUqdw9ptPPYBQ2O1SKlavnttoo7hB3jMjt3bArezCraJNTS80485HBi15E\nwH/iD+eTQTO8vtc/h/l6aOUgXgs4jlP3pGZ04wCjT1E2aXrpEuJSkMAbfkJ2iovF\nJArZaTIXaAfJnygbCD2x9yQ4B2YZfo9PV/9+yzHtzDW04lK/2+FIkIAn2i/dPsok\nU2gxePf0AzWu0AY5qckhehn4evhy+xT7NSrq84JfvBYP8J2ZQ6X+HLixKj7bt5v8\nU81TDxtlSp8VAjZnTFe2IUECAwEAAQ==\n-----END PUBLIC KEY-----"

        this._publicKey = this._pki.publicKeyFromPem(this._publicPEM)
    }

    getPki(){
        return this._pki
    }

    getPublicKey(){
        return this._publicKey
    }

    getPublicPEM(){
        return this._publicPem
    }

    encryptRSA_OAEP_SHA256(message) {
        let encrypted = this._publicKey.encrypt(message, "RSA-OAEP", {
            md: forge.md.sha256.create()
        })
        return forge.util.encode64(encrypted)
    }

    generateRSA(res, callback) {
        let rsa = this._pki.rsa
        rsa.generateKeyPair({
            bits: 2048,
            workers: 2
        }, (err, keypair) => {
            res.private = keypair.privateKey
            res.public = keypair.publicKey
            callback(res)
        })
    }

    encrypt(data){
        return {
            ...data,
            nonce: this.encryptRSA_OAEP_SHA256(data.unEncryptedNonce),
            username: this.encryptRSA_OAEP_SHA256(data.username),
            password: this.encryptRSA_OAEP_SHA256(data.password)
        }
    }
}