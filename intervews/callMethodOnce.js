function greetings(name){
    return `hello ${name}!`;
}


function callMeOnce(fn){
    var done = false;
    return function(name){
        if(!done){
            done = true;
            return fn.call(null,name);       
        }else{
            return undefined;
        }
        
    }
}
let callMeOnceWrapper = callMeOnce(greetings);

console.log(callMeOnceWrapper("Prabhakar"));
console.log(callMeOnceWrapper("Prabhakar"));