//to wait untill HTML document has been fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // get references to the form, task input and task list
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  //creat pre-defined to-do list
  const weeklyTasks = [
    "Sunday - Go to Church",
    "Monday - Go to School",
    "Tuesday - Go to Work",
    "Wednesday - Attend a Seminar",
  ];

  // function to create and add a task to the DOM
  function addTask(taskText) {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

  // create a delete button for removing a task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌"; //sign to represent button
    deleteBtn.style.marginLeft = "10px"; // spacing between button and delete tasks
  
    //add click to a delete button to remove the task when the button is clicked
    deleteBtn.addEventListener("click", () => {
      taskItem.remove();
    });

  // append the delete button
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
  }
  // add weekly tasks to the list by calling addTask
  weeklyTasks.forEach(addTask);

  // add an event listener to handle the form submission
    form.addEventListener("submit", function (e) {
    e.preventDefault();

// get and trim the imput value
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

// add the new task
    addTask(taskText);

 // clear the input field 
    taskInput.value = "";
  });
});
