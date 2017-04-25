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
linkList.printNode();