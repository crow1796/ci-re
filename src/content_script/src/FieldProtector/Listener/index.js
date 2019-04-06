export default class FieldProtectorListener {
    constructor(protector){
        this._protector = protector
        this._iconWidth = 34
        this._containerEl = document.body
    }
    
    listen(){
        _.map(this._protector.getProtectedFields(), (field) => this._registerEventFor(field))
    }

    _registerEventFor(field){
        field.addEventListener('click', (e) => {
            let mousePosX = (field.clientWidth - e.offsetX)
            let mousePosY = (field.clientHeight - e.offsetY)
            if (mousePosX <= 34 && mousePosY <= 34){
                this._closePopups()
                this._iframeWrapper = this._createFloatingWrapperWith(e)
                this._iframe = this._createIFrame()
                this._iframeWrapper.appendChild(this._iframe)
                this._containerEl.appendChild(this._iframeWrapper)
            }
        })
    }

    _createFloatingWrapperWith(field){
        let el = document.createElement('div')
        el.className = 'ciber-protector-embed-popup'
        el.style.position = 'absolute'
        el.style.width = '400px'
        el.style.height = '350px'
        el.style.background = 'white'
        el.style.left = `${field.clientX}px`
        el.style.top = `${field.clientY}px`
        el.style.zIndex = '9999'
        el.style.boxShadow = '0px 0px 20px rgba(0, 0, 0, .3)'
        el.style.overflow = 'hidden'
        el.appendChild(this._createFloatingWrapperHeader())
        return el
    }

    _createIFrame(){
        let el = document.createElement('iframe')
        el.style.width = '100%'
        el.style.height = '100%'
        el.style.border = '0'
        el.setAttribute('src', chrome.runtime.getURL('popup/popup.html#/embeds/sites'))
        return el
    }

    _createFloatingWrapperHeader(){
        let el = document.createElement('div')
        el.style.height = '55px'
        el.style.backgroundColor = '#c92228'

        let textEl = document.createElement('div')
        textEl.appendChild(document.createTextNode('Select an Account'))
        textEl.style.color = 'white'
        textEl.style.fontSize = '17px'
        textEl.style.height = '55px'
        textEl.style.lineHeight = '55px'
        textEl.style.padding = '0 20px'
        el.appendChild(textEl)

        let closeEl = document.createElement('span')
        closeEl.style.float = 'right'
        closeEl.innerHTML = '&times;'
        closeEl.style.cursor = 'pointer'
        closeEl.style.marginTop = '11px'
        closeEl.style.fontSize = '31px'
        closeEl.addEventListener('click', (e) => {
            this._closePopups()
        })
        textEl.appendChild(closeEl)

        return el
    }

    _closePopups(){
        _.map(document.querySelectorAll('.ciber-protector-embed-popup'), (el) => el.remove())
    }
}