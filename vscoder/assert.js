//assert.js
let toggleTodocompletedStatus=(todoItem)=>{
    todoItem.completed=!todoItem.completed;
    return todoItem;

};
let testToggleCompletion=()=>{
    let item ={
        title:'buy milk',
        completed: false,
    }
    item= ToggleTodoCompletedstatus(item);
    console.assert(item.completed ==true,'Todo item should bo completed');
}
testTogglleCompletion()