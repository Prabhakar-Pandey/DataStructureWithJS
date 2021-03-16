/**
 * Problem is we have givien set of cards deck, we have to disctribute all cards among the palyers
 * We have to ensure the cards are distributed after gettting shuffled.
 * 
 * **/


var Cards = function(){
    var cards=["a-h","j-h","k-h","q-h","10-h","9-h","8-h",
                "a-s","j-s","k-s","q-s","10-s","9-s","8-s",
                "a-d","j-d","k-d","q-d","10-d","9-d","8-d",
                "a-c","j-c","k-c","q-c","10-c","9-c","8-c"];
    var suffledCards=[];
    var config = {
        disctributionStretagy:1,
        players:4,
        cardsToBeDistributed:4
    }
    return {
        shuffleCard:function(){
            shuffleCard = [...cards];
                for (let i = shuffleCard.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffleCard[i], shuffleCard[j]] = [shuffleCard[j], shuffleCard[i]];
                }
                return shuffleCard;
        },
        distributeCards:function({disctributionStretagy, players, cardsToBeDistributed}){
            var returnObj = {};
            for(var i=0;i<players;i++){
                returnObj[`Player${i+1}`]=[];
            }
            let shuffledCards = this.shuffleCard();

            for(var i=0; i<players*cardsToBeDistributed;i=i+players){
                for(var j=1;j<=players;j++){
                    returnObj[`Player${j}`].push(shuffledCards.shift())
                }
            }
            return returnObj;
        }
    }
}

var CardObj = new Cards();
var config = {
    disctributionStretagy:1,
    players:4,
    cardsToBeDistributed:4
}
console.log(CardObj.distributeCards(config));

// use case , input, output