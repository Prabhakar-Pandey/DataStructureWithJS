##################################################
# Problem : Prototypal Inheritance
----

function Person(first, last) {
  this.name = `${first} ${last}`
};

Person.prototype.greeting = function() {
  alert('Hi! I\'m ' + this.name + '.');
};

function Teacher(first, last, subject) {
  Person.call(this, first, last);
  this.__proto__ = new Person(first, last)
  this.subject = subject;
}

const mathsTeacher = new Teacher('Richard', 'Feynman', 'Physics');

mathsTeacher.greeting(); // Output -> 
##################################################


##################################################
# Problem :   
----

const Foo = function(a) {
  this.a = a;
  function bar() {
    return a;
  }
  this.baz = function() {
    return a;
  };
  this.bar = bar;
  
};
 
Foo.prototype = {
  biz: function() {
    return this.a;
  },
};
 
const f = new Foo(7);
 
f.bar(); // error
f.baz(); // 7
f.biz(); // undefined
##################################################


##################################################
# Problem :   

/**
 * API Docs
 * ---------
 * /posts?page=0 => [{id: 1, title: 'Post 1'}, {id: 2, title: 'Post 2'}, {id: 3, title: 'Post 3'}, N...]
 * /posts?page=1 => [{id: 4, title: 'Post 4'}, {id: 5, title: 'Post 5'}, {id: 6, title: 'Post 6'}, N...]
 * /posts?page=N => [N...]
 */
  
// HTML
// ---------
<ul id="posts"></ul>
  
// JS
// ---------
$(window).on('scroll', scrollHandler);

function isEndOfPage(){
  
  var scrollHeight = document.height - window.innerHeight;
  if(document.height - scrollHeight == 0){
    return true;
  }else{
    return false;
  }
  
}

async function getData(pageNumber){
  if(!pageNumber){
    pageNumber = 0;
  }
  //Api Call
  // return Array of Object
  let data = [];
  //Logic for making api call
  let data = await fetch(`/posts?page=${pageNumber}`)
  let jsonData = await data.toJson();
  return jsonData;
  
}

function debouceMethod(cb,pageNumber,timer)

function renderUI(ulDOM,data){
  if(!ulDOM){
    ulDOM = document.getQuerySelector("#posts");
  }
  
  if(data.length){
    let html = '';
    data.forEach((item)=>{
      html += `<li id=${item.id}>${item.tittle}</li>`
    })
    ulDOM.appendChild(html);
  }
}
  
let ulDOM = document.getQuerySelector("#posts");\
let pageNumber = -1;

function scrollHandler() {
  // load & append posts...
  

  let data = [];
  if(isEndOfPage()){
    data = debouceMethod(getData,pagenumber,3000)
  }else{
    return;
  }
  if(data.length){
    renderUI(ulDOM,data);
  }
  
  
}

//CSS/

##################################################
# Problem :   

