var Node = function(data) {
    this.left = null;
    this.data = data;
    this.right = null;
}

var BinaryTree = function() {
    this.rootNode = null;
    this.current = this.rootNode;
    this.addNode = function(data) {
    	//debugger;
        if (this.current === null) {
            this.rootNode = new Node(data);
            this.current = this.rootNode;
        } else {
        	this.current = this.rootNode;
            while (this.current != null) {
                if (data < this.current.data) {
                	if(this.current.left === null){
                		this.current.left = new Node(data);
                    	this.current = this.current.left;
                    	break;	
                	}else{
                		this.current = this.current.left;
                	}
                } else if (data > this.current.data) {
                	if(this.current.right === null){
                		this.current.right = new Node(data);
	                    this.current = this.current.right;
	                    break
                	}else{
                		this.current = this.current.right;
                	}
                }else{
                	console.log("data already present in treee");
                	break;
                }
            }
        }

    }
    this.findMin=function(){
    	if(this.rootNode===null){
    		console.log('tree is empty')
    		return;
    	}
    	this.current=this.rootNode;
    	while (this.current != null) {
    		if(this.current.left===null){
    			return this.current.data;
    			break;
    		}else{
    			this.current=this.current.left;
    		}
    	}
    }
    this.find2ndMin=function(){
    	if(this.rootNode===null){
    		console.log('tree is empty')
    		return;
    	}
    	this.current=this.rootNode;
    	var flag=false;
    	while (this.current != null) {
    		if(this.current.left===null){
    			if(this.current.right===null){
    				if(!flag){
    					return this.prev.data;	
    					break;	
    				}else{
    					return this.current.data;	
    					break;
    				}
    				
    			}else{
    				this.current=this.current.right;
    				flag = true
    			}
    			
    			
    		}else{
    			this.prev=this.current;
    			this.current=this.current.left;
    		}
    	}
    }
    this.findMax=function(){
    	if(this.rootNode===null){
    		console.log('tree is empty')
    		return;
    	}
    	this.current=this.rootNode;
    	while (this.current != null) {
    		if(this.current.right===null){
    			return this.current.data;
    			break;
    		}else{
    			this.current=this.current.right;
    		}
    	}
    }
    this.find2ndMax=function(){
    	if(this.rootNode===null){
    		console.log('tree is empty')
    		return;
    	}
    	this.current=this.rootNode;
    	while (this.current != null) {
    		if(this.current.right===null){
    			if(this.current.left==null){
    				if(!flag){
    					return this.prev.data;
    					break;	
    				}else{
    					return this.current.data
    					break;
    				}
    					
    			}else{
    				this.current=this.current.left;
    				flag=true;
    			}
    		}else{
    			this.prev=this.current;
    			this.current=this.current.right;
    		}
    	}
    }
    this.tree = function() {
        return this.rootNode;
    }

}

var bTree = new BinaryTree();
bTree.addNode(16);
bTree.addNode(7);
// bTree.addNode(20);
// bTree.addNode(18);
// bTree.addNode(19);
//bTree.addNode(4);
bTree.addNode(8);
bTree.addNode(1);
bTree.addNode(5);
//bTree.addNode(3);
//bTree.addNode(50);
//bTree.addNode(2);
console.log("output=>",bTree.tree());
console.log("Min val=>",bTree.findMin());
console.log("Max val=>",bTree.findMax());
console.log("2nd Min val=>",bTree.find2ndMin());
console.log("2nd Max val=>",bTree.find2ndMax());
