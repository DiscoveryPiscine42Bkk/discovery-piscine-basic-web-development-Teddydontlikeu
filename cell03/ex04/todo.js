$(document).ready(function () {

    $('#newBtn').click(function () {
        var newTask = prompt("Enter a new TO DO:");
        
        if (newTask && newTask.trim() !== "") {
            var taskDiv = $('<div class="todo-item"></div>').text(newTask.trim());
       
            taskDiv.click(function () {
                if (confirm("Do you want to remove this task?")) {
                    $(this).remove();
                }
            });

            $('#ft_list').prepend(taskDiv);
        }
    });
});