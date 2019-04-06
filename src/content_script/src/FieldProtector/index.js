/**
 * This class will render the CiberProtector Logo/Shortcut on every field that it finds
 */
export default class FieldProtector {
    constructor(){
        this._protectedFields = []
    }
    
    /**
     * Renders the shield on the right part of a field
     */
    renderShieldForAll(inputFields) {
        _.map(inputFields, (field) => {
            if (this._isProtectable(field)) {
                this._protectedFields.push(field)
                return this._setAsProtectedField(field)
            }
        })
    }

    /**
     * Checks if the field is a username/email/password field
     * @param {*} field 
     */
    _isProtectable(field){
        return _.includes([...this.getAcceptableUsernameFieds(), ...this.getAcceptablePasswordFields()], field.id) || _.includes([...this.getAcceptableUsernameFieds(), ...this.getAcceptablePasswordFields()], field.name) && _.includes(this.getAcceptableFieldTypes(), field.type) && !field.disabled
    }

    /**
     * Sets the field as protectable
     * Adds a CiberProtector Logo on the right side
     * @param {*} field 
     */
    _setAsProtectedField(field) {
        field.style.backgroundImage = `url(${chrome.runtime.getURL('images/fieldlogo.png')})`
        field.style.backgroundRepeat = 'no-repeat'
        field.style.backgroundAttachment = 'scroll'
        field.style.backgroundSize = '19px 19px'
        field.style.backgroundPosition = '98% 50%'
        field.style.cursor = 'pointer'
        field.style.paddingRight = '26px'
        field.className += ' _x_CIBERPROTECTOR_DEST_INPUT_x_'
    }

    /**
     * List of Acceptable username fields
     * Used to check a field's ID or name attributes
     */
    getAcceptableUsernameFieds(){
        return [
            "log",
            "login",
            "login_email",
            "_username",
            "user",
            "user_login",
            "xxxuserxxx",
            "auth_userId",
            "user[email]",
            "mailusuario",
            "usernameOrEmail",
            "email",
            "username"
        ]
    }

    /**
     * List of acceptable password fields
     * Used to check a field's ID or name attributes
     */
    getAcceptablePasswordFields() {
        return [
            'password',
            'pass'
        ]
    }

    /**
     * Acceptable Field Types
     * Used to check type attribute of a field
     */
    getAcceptableFieldTypes(){
        return [
            'text',
            'email',
            'password'
        ]
    }

    /**
     * 
     */
    getProtectedFields(){
        return this._protectedFields
    }
}