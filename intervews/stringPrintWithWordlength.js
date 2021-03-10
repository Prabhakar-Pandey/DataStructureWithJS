
/** Print the string in ascending order of their word count, if two words are of same length 
/then sort it by char and also first latter of string will be upparcase and . will be on last
/ return for the given string is "Is my name pandey prabhakar".
**/ 
var str = "My name is Prabhakar Pandey.";
function printTheString(str){
    var stringArray = str.split(' ');
    var objMap = {};
    stringArray.forEach((str)=>{
        if(objMap[str.length]){
            objMap[str.length].push(str.toLowerCase());
        }else{
            objMap[str.length]=[str.toLowerCase()];
        }
    })
    
    var rerultStr = ''
    Object.keys(objMap).forEach((key)=>{
        let rStr = objMap[key];
        if(objMap[key].length>1){
            rStr = objMap[key].sort().join(' ');
        }
        rerultStr+=` ${rStr}`
    })
    rerultStr = rerultStr.replace('.','');
    rerultStr = rerultStr.split('');
    rerultStr[1] = rerultStr[1].toUpperCase();

    return rerultStr.join('')+".";
}

console.log(printTheString(str))