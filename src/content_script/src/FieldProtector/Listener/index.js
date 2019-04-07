import AccountsListPopupRenderer from "../Renderers/accounts_list_popup_renderer";

export default class FieldProtectorListener {
    constructor(protector){
        this._protector = protector
        this._containerEl = document.body
        this._accountsListPopupRenderer = new AccountsListPopupRenderer()
    }
    
    /**
     * Listen for injected logo/shortcut events
     */
    listen(){
        _.map(this._protector.getProtectedFields(), (field) => this._registerEventFor(field))
    }

    /**
     * Register events for the injected logo/shortcut
     * @param {*} field 
     */
    _registerEventFor(field){
        $(field).on('click', (e) => {
            let mousePosX = (field.clientWidth - e.offsetX)
            let mousePosY = (field.clientHeight - e.offsetY)
            if (mousePosX <= 34 && mousePosY <= 34) {
                this._accountsListPopupRenderer.closePopups()
                $('body').append(this._accountsListPopupRenderer.createPopupWith({
                    field,
                    mouseEvent: e
                }))
            }
        })
    }
}