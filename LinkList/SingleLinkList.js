var Node=function(data){
	this.value = data;
	this.next = null
}

var SingleLinkList = function(){
	this.length=0;
	this.head=null;
	this.current=null;
}

//[10]->[20]->null

SingleLinkList.prototype.addNode=function(data){
	var node = new Node(data);
	this.length=this.length+1;
	if(this.head===null){
		this.head=node;
		this.current=node;
	}else{
		this.current.next=node;
		this.current=node;
	}
	
}

SingleLinkList.prototype.addAtIndex=function(index,data){
	var current = this.head;
	var newNode = new Node(data);
	var counter = 1;
	var noIndexFound=true;
	if(index===1){
		newNode.next=this.head;
		this.head=newNode;
	}else{
		while(current!=null){
			counter++;
			if(counter===index){
				newNode.next=current.next;
				current.next=newNode;
				noIndexFound=false;
				break;
			}else{
				noIndexFound=true;
			}

			current=current.next;
		}
		if(noIndexFound){
			console.error('No index found error!');
		}
	}
}

SingleLinkList.prototype.removeAtIndex=function(index){
	var current = this.head;
	var counter = 1;
	var noIndexFound=true;
	if(index===1){
		this.head=current.next;
	}else{
		while(current!=null){
			counter++;
			if(counter===index){
				var nextNode = current.next
				if(nextNode){
					current.next=nextNode.next;
				}else{
					current.next=null;
				}
				noIndexFound=false;
				break;
			}else{
				noIndexFound=true;
			}
			current=current.next;
		}
		if(noIndexFound){
			console.error("no index found!")
		}
	}
}

SingleLinkList.prototype.printNode=function(){
	var current = this.head;
	while(current!=null){
		console.log(current.value)
		current=current.next;
	}
}
var linkList = new SingleLinkList();
linkList.addNode(10)
linkList.addNode(20)
linkList.addNode(30)
linkList.addAtIndex(1,50)
linkList.printNode();