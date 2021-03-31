/**
 * print all the nodes which are kth distance from given node
 * 
 * constraints:
 * No duplicate node value.
 * k >= 0.
 * target value always exist.
 */



/**
 * 
 * function costly() {
 * }
 * var betterExperience = throttle(costly, 3, 5000);
 * function throttle(fn, unitsAllowed, timeFrame) {
 * }
 * 1, 4, 5, 7,8d,9d, 13,19,21
 */

function costly() {
    console.log("Costly function called");
}
var betterExperience = throttle(costly, 3, 5000);

//4000-5000
//1, 4, 5, 7,8d,9d, 13,19,21

//let callArr = [1000, 4000, 5000, 7000, 13000];

function throttle(fn, unitsAllowed, timeFrame) {
    let now = new Date();
    let callArr = [];

    return function(val){
        if(callArr.length<timeFrame){
            callArr(val)
            fn.call();
        }else{
            if((val - callArr[length-unitsAllowed])<=timeFrame/1000){
                callArr.shift();
                callArr.push(val);
                fn.call();
            }
        }
    }
}


Array.prototype.myReduce = function (cb,initialValue) {
    console.log(this);
    for(var i=0;i<this.length;i++){
        initialValue = cb.apply(this,[initialValue,this[i]])
    }
    return initialValue;
}

let arr = [1,2,3,4];
console.log(arr.myReduce);
let val1 = arr.myReduce((acc, val)=>{
    console.log(this);
}, 0);


// create a promise.any() that take array of promise and resolve or reject if any of the promise either resolve or reject if there is no promise resolved
//
let generator = () =>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            //generates a random number
            //if randomn number is even resolves
            //if odd it rejects
            let num = Math.floor(Math.random() * 100);
            console.log(num);
            if(num%2 ===0 ){
                res(num);
            }else{
                rej(num);
            }
        })
    });
}

let arr = [];
for(let i=0;i<5;i++){
    arr.push(generator());
}

//Signature
Promise.customAny = function(arr) {
    
    return new Promise((res,rej)=>{
        let result = [];
        for(var i=0;i<arr.length;i++){
            result[i]=undefined;
        }
        let resCount = 0;
        let rejCount = 0;
        arr.forEach((item,index)=>{

            item.then(value=>{
                console.log(value,index,"<<<")
                result[index]=value;
                resCount+=1;
                if(resCount+rejCount==arr.length){
                    res(result)
                }
            }).catch(e=>{
                rejCount+=1;
                console.log(index,"<<<Reject")
                if(resCount+rejCount==arr.length){
                    console.log(resCount,"resCount")
                    if(resCount==0){
                        rej(result)
                    }else{
                        res(result);
                    }
                    
                }
            });
        })
    })
};

Promise.customAny(arr).then((res)=>{
    //if any single one passes
    //4 promises [undefine, undefined, value, undefined]
    console.log(res);
}).catch(()=>{
    console.log('failed');
    //If all fail
    //[undefine, undefined, undefined, undefined]
});
