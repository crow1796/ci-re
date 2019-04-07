export default class AccountsListPopupRenderer{
    constructor(){
        this._iconWidth = 34
        this._popupWidth = 400
        this._popupHeight = 345
    }

    /**
     * Create a popup window
     * @param {*} field 
     */
    createPopupWith(options) {
        let el = $('<div></div>')
        el.addClass('ciber-protector-embed-popup')
        el.css({
            position: 'absolute',
            minWidth: `385px`,
            maxWidth: `${this._popupWidth}px`,
            height: `${this._popupHeight}px`,
            background: 'white',
            zIndex: '9999',
            boxShadow: '0px 0px 20px rgba(0, 0, 0, .3)',
            overflow: 'hidden'
        })
        el.append(this._createPopupHeader())
            .append(this._createIFrame())
        this._repositionPopup({
            ...options,
            el
        })
        return el
    }

    _repositionPopup(options){
        this._recalculateLocation(options)
        
        $(window).on('resize', (e) => this._recalculateLocation(options))
    }

    _recalculateLocation(options){
        let left = $(options.field).offset().left + $(options.field).width() + this._iconWidth
        if ((this._popupWidth + left) > ($(window).width() - 150)) left = `${left - (this._popupWidth)}px`

        let top = $(options.field).offset().top
        if ((this._popupHeight + top) > ($(window).height() - 150)) top = `${top - (this._popupHeight)}px`

        options.el.css({
            left,
            top
        })
    }

    /**
     * Create an Iframe that holds the UI for selecting an account
     */
    _createIFrame() {
        let el = document.createElement('iframe')
        el.style.width = '100%'
        el.style.height = 'calc(100% - 55px)'
        el.style.border = '0'
        el.setAttribute('src', chrome.runtime.getURL('popup/popup.html#/embeds/sites'))
        return el
    }

    /**
     * Create a header for the popup to hold the title and the close icon
     */
    _createPopupHeader() {
        let el = $(`
            <div style="display: flex; justify-content: space-between; height: 55px; background-color: #c92228; color: white; padding: 0px 20px;">
                <span style="font-size: 17px;">
                    <span style="display: inline-block;width: 30px;margin-right: 10px;padding: 12px 0;vertical-align: middle;">
                        <img style="width: 100%;" src="${chrome.runtime.getURL('/images/ci_logo_blanco.png')}"/>
                    </span>
                    Select an Account
                </span>
            </div>
        `)

        let closeEl = $(`
            <span style="cursor: pointer;font-size: 31px; padding: 10px 0;">
                &times;
            </span>
        `)
        closeEl.on('click', (e) => {
            this.closePopups()
        })
        
        el.append(closeEl)

        return el
    }

    /**
     * Close/Remove all shown/injected popups from the body
     */
    closePopups() {
        $('.ciber-protector-embed-popup').remove()
    }
}