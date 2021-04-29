const todos=[
    {
        id:1,
        text:'Salman',
        isCompleted:true,
    },
     {
        id:2,
        text:'Faheem',
        isCompleted:true,
    },
     {
        id:3,
        text:'Arshad',
        isCompleted:false,
    }
];

/// filter
const todoText=todos.filter(function(todo){
    return todo.isCompleted===false;
});

// we can also use mapping and filter
const mapAndFilter=todos.filter(function(todo){
    return todo.isCompleted===false;
}).map(function(todo){
     return todo.id;
});

//map
const mapText=todos.map(function(todo){
    return todo.isCompleted;
});

//foreach
const eachText=todos.forEach(function(todo){
    console.log(todo.text);
});

const x=10;
const color=x>10? 'greter':'less';

console.log(color);