var x = {
    screen: "a",
    params: {
      screen: "b",
      params: {
        screen: "c",
        tabs: "show",
        params: {
          screen: "d",
          params: {
              a:1
          }
        },
      },
    },
  };
  
  function getNestedScreen(obj) {
      if(obj.params && obj.params.screen){
        return getNestedScreen(obj.params)
      }
        return obj.screen;
      
      
  }
  
  //console.log(getNestedScreen(x))

  var str = 'abcbda'
obj = {
    a:2,
    b:2,
    c:1,
    d:1
}

function returnuniqueFirstOcuurance(str){
    //let strArr = str.split('');
    var obj = {};
    for(var i=0; i<str.length;i++){
        if(obj[str[i]]){
            obj[str[i]]++;
        }else{
            obj[str[i]]=1;
        }
    }

    for(var i=0; i<str.length;i++){
        if(obj[str[i]]===1){
            return str[i]
        }
    }

}


  // return first unique char

 var board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]


let nums = [1,2,3,4];
let res = Array(nums.length).fill(0);
console.log(res);
res = res.map((item,mapIndex)=>{
    let reducedArr = nums.filter((item,index)=>index!=mapIndex);
    return reducedArr.reduce((sum,item)=>item*sum,1);
})
console.log(res)