function calculateTrippedUnit(arr){
    let boundary =  arr;//[1,0,2]// 
    let minBoundary = Math.min(arr[0],arr[arr.length-1]);
    let trippedUnit = 0;
    for(var i=1; i<boundary.length-1;i++){
        trippedUnit += minBoundary - boundary[i]
    }
    return trippedUnit;
}

var trap = function(height) {
    var res=0;
    for (var i = 1; i < height.length-1; i++) {
         
        // Find the maximum element on its left
        var left = height[i];
        for (var j=0; j<i; j++)
           left = Math.max(left, height[j]);
         
        // Find the maximum element on its right   
        var right = height[i];
        for (var j=i+1; j<height.length; j++)
           right = Math.max(right, height[j]); 
        
       // Update the maximum water    
       res = res + (Math.min(left, right) - height[i]);   
    }
    return res;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));