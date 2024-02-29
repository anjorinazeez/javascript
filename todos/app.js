const addForm = document.querySelector('.add');
const search = document.querySelector('.search input');
const list = document.querySelector('.todos');

const generateTemplate = todo => {

    const html = `
        <li class="list-group-item d-flex justify-content-between allign-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHtml += html

};

addForm.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addForm.add.value.trim();
    //console.log(todo);

    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }

});

const filterTodos = (term) => {
    (Array.from(list.children))
    .filter((todo) => !todo.textContent.includes(term))
    .foreach((todo) => todo.classList.add('filtered'));

    (Array.from(list.children))
    .filter((todo) => todo.textContent.includes(term))
    .foreach((todo) => todo.classList.remove('filtered'));
};

// delete todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

// keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim();
    filterTodos(term);
});
