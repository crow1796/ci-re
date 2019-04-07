import Event from './Event'

export default class UseAccountEvent extends Event{
    constructor(data){
        super()
        this.data = data
    }
}