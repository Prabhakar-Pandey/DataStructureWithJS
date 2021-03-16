const [state,setState] = useState("test");
console.log(state)
setState("hello world!");

setTimeout(()=>{
    console.log(state);
},1000)


function useState(initialState){
    let returnData = [];
    let anonymusFunction = function(value){
        if(value){
            
            returnData[0] = value;
            console.log(returnData,value)
        }
    }
    if(initialState){
        returnData[0]=initialState;
    }
    returnData[1] = anonymusFunction
    return (function(){

        return returnData;
    })()
}