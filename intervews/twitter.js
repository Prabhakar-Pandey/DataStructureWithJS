/**
 * Initialize your data structure here.
 */
var Twitter = function() {
    this.tweets = {};
    this.follower = {};
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if(this.tweets[userId]){
        this.tweets[userId].push(tweetId)
    }else{
        this.tweets[userId] = [tweetId]
    }
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    let feeds = [];
    let followers = this.follower[userId]||[];
    if(followers.length){
        
        followers.forEach((item)=>{
            if(this.tweets[item]){
                feeds.push(this.tweets[item])
            }
            
        })
        if(this.tweets[userId]){
            feeds.push(this.tweets[userId])
        }
        
    }else{
        if(this.tweets[userId]){
            feeds.push(this.tweets[userId])
        }
    }
    return feeds.slice(0,9);
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if(this.follower[followerId]){
        this.follower[followerId].push(followeeId)
    }else{
        this.follower[followerId] = [followeeId]
    }
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    let followers = this.follower[followerId];
    if(followers.length){
        this.follower[followerId] = followers.filter(item=>item!=followeeId)
    }
};
Twitter.prototype.showData = function() {
    console.log(this);
};

/** 
 * Your Twitter object will be instantiated and called as such:
 **/
 var obj = new Twitter()
 obj.postTweet("1","5");
 obj.postTweet("1","3");
 //console.log(obj.getNewsFeed("1"));
 //obj.follow("1","2");
 //obj.postTweet("2","6");
 console.log(obj.getNewsFeed("1"));
 //obj.unfollow("1","2");
 //console.log(obj.getNewsFeed("1"));
 obj.showData()
 /** obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

