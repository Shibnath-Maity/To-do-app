let todoList=[{item:'buy milk',
     date: '4/10/2025'},
    {item:'go collage',
         date: '4/10/2025'}];
displayitems();


function addTodo(){
    let inputElement= document.querySelector('#todo-input');
    let dateElement= document.querySelector('#todo-date');
    let todoItem= inputElement.value;
    let todoDate= dateElement.value;
    console.log(todoItem);
    todoList.push({item: todoItem, date: todoDate});
    inputElement.value='';
    dateElement.value='';
    displayitems()
}

function displayitems(){
    let containerElement =document.querySelector('.todo-container');
  
      let newHtml='';



    // displayElement.innerText = '';
    for(let i=0;i<todoList.length;i++){
        // let item= todoList[i].item;
        // let date = todoList[i].date;
        let {item,date} =todoList[i];
        newHtml += `
        
        <span>${item}</span>
        <span>${date}</span>
        <button  class ="btn-delete" onclick="todoList.splice(${i}, 1); displayitems();">Delete</button>
        `;

      
    }
    containerElement.innerHTML=newHtml;
 
}