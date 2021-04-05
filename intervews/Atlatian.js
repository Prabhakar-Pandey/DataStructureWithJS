/*    ***********************
**********
*******
***********
***************
********************************************** 
   Problem : Vote counter : Write a program/logic that will count the number
    of votes and determine the winner.    
    Input: A array/list of candidate names each representing a vote.   
     Eg: char[] votes = ['a', 'b', 'c', 'c', 'a', 'a'];   
      Output : Display the name of the winner who has received the 
      highest number of votes. For the above example : a    
      *************************
      ************
      *******************************
      *********************************************  
        Implement a basic solution in the quickest time possible and 
        we will work on additional use cases as the interview progresses. */ 


        var obj = {
            "a":3,
            "b":1,
            "c":2
        }
        
        var arr = ['a', 'c', 'c', 'c', 'a', 'a','b'];
        
        var voteModule = (function VoteModule(){
        
            function chekForTieSituation(obj){
                if(Object.keys(obj).length>1){
                    return true;
                }
                return false;
            }
        
            function calculateFinalResult(obj){
                let winner = [];
                let resultCount = 0;
                if(Object.keys(obj).length){
                    
                    Object.keys(obj).forEach((item)=>{
                        if(obj[item]&&obj[item].voteCount>=resultCount){
                            resultCount = obj[item].voteCount;
                            winner.push(obj[item]);
                        }
                    })
        
                    if(chekForTieSituation(winner)){
                        let lastIndex;
                        let winUser;
                        winner.map(item=>{
        
                            if(lastIndex==undefined){
                                lastIndex = item.lastVoteIndex;
                            }
                            
                            if(item.lastVoteIndex<lastIndex){
                                lastIndex=item.lastVoteIndex;
                                winUser = item;
                            }
                        })
                        return winUser;
                    }else{
                        return winner[0];
                    }
                }
                
            }
            function getVoteDataObj(arr){
                var obj = {};
                if(!Array.isArray(arr)){
                    return "Error: invalid input "
                }
                if(arr.length){
                    arr.forEach((item,index)=>{
                        if(item){
                            if(isNaN(obj[item])){
                                obj[item] = {
                                    voteCount: obj[item].voteCount + 1,
                                     lastVoteIndex: index,
                                     userName:item
                                }
                            }else{
                                obj[item] = {
                                    voteCount: 1,
                                     lastVoteIndex: index,
                                     userName:item
                                }
                            }
                        }
                        
                    })
                }
                let winner = {};
                if(Object.keys(obj).length){
                    winner = calculateFinalResult(obj)
                }
                
                return winner;
            }
        
            return {
                getVoteDataObj,
            }
        
        
        })();
        
        
        
        //var finalObj = voteModule.getVoteDataObj(arr);
        
        console.log(voteModule.getVoteDataObj([null]))
        console.log(voteModule.getVoteDataObj(undefined))
        console.log(voteModule.getVoteDataObj(['a', 'c', 'c', 'c', 'a', 'a',0,0,0,0,0,1,1,1,1,1,2,3]))
        
        console.log(voteModule.getVoteDataObj(['a', 'c', 'c',null, 'c', 'a', 'a','b',null,null,null,null,null]))