import forge from 'node-forge'

export default class AuthenticatesUser {
    constructor(){
        this._pki = forge.pki;

        this._publicPEM =
            "-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAtawodp5ToEn+n4rJr++r\ngmKHvjzHuNhopmF4bASi5mXS0gzOuWnsTGmPmTS9+4bAuGDMA6u3AlSaP8+5CbC4\nwyjkJR1HnShOT/vMnXUgg3MO2NiY0Tb3LnKcXIRH7577OjR812CPnZdG21AQzpSe\n9JM6pqWM/KKGQV0bKVwpK53EfoH1nWabKlL98Tz2VOX1aAR6vqCpiP060eRIbxBB\n0eUjsVU6U/zg+T060fR1ur1rO/ekHhBfcloPiRvqYKNNFzsCJnMwg8x1zlmV+HK/\nt7kSbohA8xwGtIC+LXFnwtsypr6xUdR75HoOE4SpiJtTh/PVL7felPRF9d/v0UQY\nzYU9F/m9EhhqP52Vp/DL0VJSfmSK9n4U7eQH8i7fYxyWnTr1xFJkzrznUdYAyogQ\ne81SBUxUqdw9ptPPYBQ2O1SKlavnttoo7hB3jMjt3bArezCraJNTS80485HBi15E\nwH/iD+eTQTO8vtc/h/l6aOUgXgs4jlP3pGZ04wCjT1E2aXrpEuJSkMAbfkJ2iovF\nJArZaTIXaAfJnygbCD2x9yQ4B2YZfo9PV/9+yzHtzDW04lK/2+FIkIAn2i/dPsok\nU2gxePf0AzWu0AY5qckhehn4evhy+xT7NSrq84JfvBYP8J2ZQ6X+HLixKj7bt5v8\nU81TDxtlSp8VAjZnTFe2IUECAwEAAQ==\n-----END PUBLIC KEY-----";

        this._publicKey = this._pki.publicKeyFromPem(this._publicPEM);

        this._storagePrefix = "cib_";
        this.LOGIN_URL
    }
    
    _generateRSA(res, callback) {
        let rsa = this._pki.rsa
        rsa.generateKeyPair({
            bits: 2048,
            workers: 2
        }, function (err, keypair) {
            res.private = keypair.privateKey
            res.public = keypair.publicKey
            callback(res)
        })
    }

    _s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    _getNonce() {
        return `${_s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`
    }

    _encryptRSA_OAEP_SHA256(message){
        let encrypted = this._publicKey.encrypt(message, "RSA-OAEP", {
            md: forge.md.sha256.create()
        });
        return forge.util.encode64(encrypted);
    }

    login(userdata, options) {
        let promise = new Promise(function (resolve, reject) {
            let key = {};
            this.generateRSA(key, function (llave) {
                if (
                    typeof key.public === "undefined" ||
                    typeof key.private === "undefined"
                ) {
                    reject("Error creando RSA Keypair: " + JSON.stringify(key));
                }
                let unEncryptedNonce = this._getNonce();
                userdata.nonce = this._encryptRSA_OAEP_SHA256(unEncryptedNonce);
                userdata.username = this._encryptRSA_OAEP_SHA256(userdata.username);
                userdata.password = this._encryptRSA_OAEP_SHA256(userdata.password);
                let pem = this._pki.publicKeyToPem(key.public);
                userdata.upublic = pem;
                localStorage.setItem(this._storagePrefix + "unonce", unEncryptedNonce);
                let data = {
                    username: userdata.username,
                    password: userdata.password,
                    nonce: userdata.nonce,
                    upublic: userdata.upublic,
                    otpnumber: userdata.otpnumber,
                    platform: userdata.platform
                };
                this._sendRequest("POST", this.LOGIN_URL, data, null)
                    .then(function (response) {
                        if (typeof response.result !== "undefined") {
                            if (typeof response.result.nonce !== "undefined") {
                                if (
                                    response.result.nonce ==
                                    localStorage.getItem(this._storagePrefix + "unonce")
                                ) {
                                    //Lucas 20180328 vacío todo el local storage de cib* para que al hacer login no usemos nada de la cache
                                    cilib.clearLocalStorageWillcard("cib");

                                    // Comprobamos que el Token que me devuelve es igual que el token que tengo almacenado
                                    localStorage.setItem(
                                        this._storagePrefix + "token",
                                        response.result.token
                                    );
                                    localStorage.setItem(
                                        this._storagePrefix + "secret",
                                        response.result.secret
                                    );
                                    let privatePEM = pki.privateKeyToPem(key.private);
                                    localStorage.setItem(this._storagePrefix + "prk", privatePEM);
                                    resolve(response);
                                } else {
                                    // TODO Manejar esto con un error
                                    reject(response);
                                }
                            } else {
                                // TODO:  Manejar esto con un error

                                reject(response);
                            }
                        } else {
                            userdata.username = "";
                            userdata.password = "";
                            reject(response);
                        }
                    })
                    .catch(function (error) {
                        reject(error);
                    });
            });
        });
        return promise
    }

    _sendRequest(methods, url, data, headersP) {
        if (
            typeof headersP == "undefined" ||
            typeof headersP == null ||
            headersP == null
        ) {
            headersP = [];
        }

        if (url.indexOf("/acount/sessions/close") == -1) {
            // Vamos seteando ultimo timestamp y checckeando
            // localStorage.setItem("cib_maxInactivity", objOptions.maxInactivity)
            var maxInactivity = parseInt(localStorage.getItem("cib_maxInactivity"));
            console.log("Tiempo maximo de inactividad: " + maxInactivity)
            if (
                localStorage.getItem("cib_maxInactivity") == null ||
                localStorage.getItem("cib_maxInactivity") == ""
            ) {
                //Tiempo inactividad para cerrar sesión si no está seteado en cuenta
                console.log("Seteando Max Inactivity a 600")
                maxInactivity = 600;
            }
            //Convierto a minutos
            maxInactivity = maxInactivity * 60;

            console.log("Max Inactivity en segundos: " + maxInactivity)


            var curTS = Date.now();
            if (
                localStorage.getItem("cib_lastActivityTS") == null ||
                localStorage.getItem("cib_lastActivityTS") == ""
            ) {
                localStorage.setItem("cib_lastActivityTS", curTS);
            }

            var lastActivityTS = parseInt(localStorage.getItem("cib_lastActivityTS"));
            localStorage.setItem("cib_lastActivityTS", curTS);

            if (maxInactivity < 0) {
                maxInactivity = maxInactivity * -1;
            }

            if (maxInactivity < 300) {
                maxInactivity = 300;
            }

            var diffSeconds = (curTS - lastActivityTS) / 1000;
            // MAX INACTIVITY: " + maxInactivity)
            // ULTIMA ACTIVIDAD LOG: " + diffSeconds)

            console.log("Inactividad actual: " + diffSeconds)

            if (diffSeconds > maxInactivity && url.indexOf("/login") == -1) {
                // TODO: hacer un close de la sesion y al finalizar borrar tokens

                cilib
                    .closeSession()
                    .then(data => {
                        chrome.runtime.sendMessage({
                            action: "logout"
                        }, response => {
                            // console.log("Logout")
                        });
                        // Redireccionamos a /login
                        // window.location.href = "https://dashboard.ciberprotector.com/login"
                    })
                    .catch(() => {
                        chrome.runtime.sendMessage({
                            action: "logout"
                        }, response => {
                            // console.log("Logout")
                        });

                        // Redireccionamos a /login
                        // window.location.href = "https://dashboard.ciberprotector.com/login"
                    });
            }
        }

        var promise = new Promise(function (resolve, reject) {
            var client = new XMLHttpRequest();
            var urldestino = "https://api.ciberprotector" + ObtenerDominioURL() + url;
            console.log("UrlDestino =>" + urldestino);
            client.open(method, urldestino);
            //client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            //client.setRequestHeader("Content-type", "multipart/form-data");

            //if (typeof headers === 'undefined' || !Array.isArray(headers)){
            var headers = [];
            //}

            if (
                localStorage.getItem(this._storagePrefix + "token") &&
                localStorage.getItem(this._storagePrefix + "secret")
            ) {
                cilib.headerpush(
                    "Authorization",
                    "Bearer " + localStorage.getItem(this._storagePrefix + "token"),
                    headers
                );
                cilib.headerpush(
                    "Secret",
                    localStorage.getItem(this._storagePrefix + "secret"),
                    headers
                );
            }

            headersP.forEach(function (header) {
                if (header.length == 2) {
                    cilib.headerpush(header[0], header[1], headers);
                }
            });
            //console.log('HEADERSSSS')
            //console.log(headers)
            if ("undefined" !== typeof headers && Array.isArray(headers)) {
                headers.forEach(function (header) {
                    if (header.length == 2) client.setRequestHeader(header[0], header[1]);
                });
            }

            // client.send(serialize(data));
            // method
            switch (true) {
                case /post|put/i.test(method):
                    var formdata = cilib.crearformdata(data);
                    client.setRequestHeader(
                        "content-type",
                        "multipart/form-data; charset=utf-8; boundary=" + formdata.boundary
                    );
                    client.send(formdata.multipart);
                    break;
                case /get|delete/i.test(method):
                    client.send();
                    break;
                default:
                    reject(method + "no permitido");
                    break;
            } // switch
            client.onload = function () {
                if (this.status == 200) {
                    try {
                        var data = JSON.parse(this.response);

                        if (
                            typeof data !== "undefined" &&
                            typeof data.error !== "undefined" &&
                            typeof data.error.message !== "undefined" &&
                            data.error.message.indexOf("No hay sesion o sesion") != -1
                        ) {
                            localStorage.removeItem(this._storagePrefix + "token");
                            localStorage.removeItem(this._storagePrefix + "secret");

                            localStorage.setItem(
                                this._storagePrefix + "lastErrorMessage",
                                "Sesión finalizada"
                            );

                            console.log(" ============  SESION FINALIZADA")
                        }

                        resolve(data);
                    } catch (e) {
                        reject("no se ha podido parsear");
                    }
                } else if (this.status == 401) {

                    console.log(" ============  NO HAY SESION")

                    localStorage.removeItem(this._storagePrefix + "token");
                    localStorage.removeItem(this._storagePrefix + "secret");

                    reject("error " + this.statusText);
                } else {
                    reject("error " + this.statusText);
                }
            };
            client.onerror = function () {
                reject("client error " + this.statusText);
            };
        });
        return promise;
    }
}