export default class FieldProtectorListener {
    constructor(protector){
        this._protector = protector
    }
    
    listen(){
        console.log(this._protector.getProtectedFields())
    }
}