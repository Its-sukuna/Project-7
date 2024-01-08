const createList = document.querySelector(".home");
const todoList = document.querySelector(".addTask");
const createbtn = document.querySelector(".create");
const createbox = document.querySelector(".homepage");

createbox.addEventListener('click', () => {
    createList.classList.add('active-popup');
});

createbtn.addEventListener('click', () =>{
    todoList.classList.add('active');
});

createbtn.addEventListener('click', () =>{
    createList.classList.add('active');
});
