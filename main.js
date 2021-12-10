var todoInput = document.getElementById('todoInput');
var btn = document.querySelector('.btn');
var list = document.querySelector('#list');



const addTodo = (e) => {
    e.preventDefault();
    var text = todoInput.value;
    if(!text){
    var err = document.querySelector('.error')
    err.innerText = "please enter value";
    return console.log("please enter value")
    } 
    else {
    var li = document.createElement("li");
    var todo = document.createTextNode(text) 
    li.appendChild(todo);
    console.log(todo);
    var item = list.appendChild(li);
    
}

todoInput.value =  "";
}



btn.addEventListener('click', addTodo)


