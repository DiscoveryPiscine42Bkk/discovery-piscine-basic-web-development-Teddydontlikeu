$(document).ready(function() {
    const $ftList = $('#ft_list');


    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    function saveTodos() {
        const todos = [];
        $ftList.find('.todo').each(function() {
            todos.push($(this).text());
        });
        document.cookie = "todo_list=" + JSON.stringify(todos.reverse()) + ";path=/";
    }

    function createTodo(text) {
        const $div = $('<div></div>')
            .addClass('todo') 
            .text(text);

        $div.on('click', function() {
            const confirmDelete = confirm("Do you want to delete this TO DO?");
            if (confirmDelete) {
                $(this).remove(); 
                saveTodos(); 
            }
        });

        $ftList.prepend($div);
    }

    const saved = getCookie("todo_list");
    if (saved) {
        const items = JSON.parse(saved);
        items.reverse().forEach(text => createTodo(text));
    }

    $('#new-btn').on('click', function() {
        const text = prompt("Enter your new TO DO:");
        if (text && text.trim() !== "") {
            createTodo(text.trim()); 
            saveTodos(); 
        }
    });
});