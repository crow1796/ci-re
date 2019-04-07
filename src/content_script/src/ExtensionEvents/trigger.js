import map from './map'
import events from './Events'
import listeners from './Listeners'

/**
 * Used to trigger an event
 * @param {ExtensionEvents/Events} event 
 * @param {*} data 
 */
export default function(eventName, data){
    if (!map[eventName]) return {status: false, message: 'Event not found'}
    _.map(map[eventName], (listener) => new listeners[listener](new events[eventName](data)))
}