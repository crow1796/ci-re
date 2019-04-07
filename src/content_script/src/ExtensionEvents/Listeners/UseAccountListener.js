import Listener from './Listener'

export default class UseAccountListener extends Listener{
    listen(event){
        console.log('Listening', event)
    }
}