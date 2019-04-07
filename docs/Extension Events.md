# Extension Event Handling
Implemented a much simpler way of handling chrome messages/events to isolate the functionalities to make it more readable.

Sample Code:

For sending a message you would do:
```js
chrome.tabs.sendMessage(tabs[0].id, {event: 'UseAccountEvent', data: {
    account: this.account
}}, (response) => {
    console.log(response)
})
```

Now we need to map the event that we just used which is `UseAccountEvent`.
To do it just go to 'src/content_script/src/ExtensionEvents/map.js'.
We need to make sure first the the event is properly mapped with its corresponding listeners. 
```Note: One Event can handle multiple listeners.```

```js
export default {
    ...
    'UseAccountEvent': ['UseAccountListener']
}
```

Now, we need to define the events and the listeners.
First let's create the event, just go to `'src/content_script/src/ExtensionEvents/Events/` and create a new file named `UseAccountEvent.js`.
`UseAccountEvent.js`

```js
import Event from './Event'

export default class UseAccountEvent extends Event{
    constructor(data){
        super()
        this.data = data
    }
}
```

```Note: Everything is optional here, you can make an event that does not have anything at all, but since we passed a `data` when we sent the message, we would also need to receive that thata in our event's constructor.```

Now, let's create the listener.
Just go to `src/content_script/src/ExtensionEvents/Listeners/` and create a new file named `UseAccountListener.js`.

And this is what it would look like:
```js
import Listener from './Listener'

export default class UseAccountListener extends Listener{
    listen(event){
        console.log('Listening', event)
        console.log('Event Data', event.data)
    }
}
```

And that's it! We can now put all of the logic that we want in the `listen` function.
Everything's isolated, that if you ever see a `sendMessage` event you would only need to go to `src/content_script/src/ExtensionEvents/` directory to find out what it does. :)