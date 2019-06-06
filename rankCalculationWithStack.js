


var STACK = function Stack(){
    this.arr = [];
    this.temp = [];
    this.push = function(data){
        this.arr.push(data)
    }
    this.top = function(){
        return this.arr[this.arr.length-1];
    }
    this.pop = function(){
        let popedVal = this.arr.pop();
        return popedVal;
    }
    this.printVal = function(rank){
        if(rank){
            return this.arr[rank-1].player;
        }
        console.log(this.arr)
    }
}

var score = function(){
    let rankWiseData = new STACK();
    let tempStack = new STACK();
    this.add = function(player,score){
        let topData = rankWiseData.top();
        if(topData===undefined){
            rankWiseData.push({
                player,
                score
            })
        }else if(topData.score>score){
            rankWiseData.push({
                player,
                score
            })
        }else {
            while(topData.score && topData.score<score){
                tempStack.push(rankWiseData.pop())
                topData = rankWiseData.top();
                if(topData===undefined){
                    rankWiseData.push({
                        player,
                        score
                    });
                    break
                }
                if(topData.score>score){
                    rankWiseData.push({
                        player,
                        score
                    });
                    break
                }
            }
            while(tempStack.top()!=undefined){
                rankWiseData.push(tempStack.pop())
            }
                
        }
    }
    this.print = function(rank){
        console.log(rankWiseData.printVal(rank));
    }
}
var Score = new score()
Score.add("p1",30)
Score.add("p2",20)
Score.add("p3",40)
Score.add("p4",25)
Score.add("p5",35)
Score.print();
