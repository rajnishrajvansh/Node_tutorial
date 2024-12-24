import {EventEmitter} from 'events';
const myemitter=new EventEmitter();

function greeetHandler(name){
    console.log("Hello "+name);
}
function goodbyHandler(name){
    console.log("Goodbye "+name);
}
myemitter.on('greet',greeetHandler);
myemitter.on('goodbye',goodbyHandler);

myemitter.emit('greet','Rajnish');
myemitter.emit('goodbye','Rajnish');