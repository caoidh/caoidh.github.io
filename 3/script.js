const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskContent = taskInput.value.trim();
  if (taskContent === "") return;

  const taskElement = document.createElement("li");
  taskElement.textContent = taskContent;
  taskElement.addEventListener("click", toggleComplete);
  taskList.appendChild(taskElement);

  taskInput.value = "";
}

function toggleComplete(event) {
  const taskElement = event.target;
  taskElement.classList.toggle("complete");
}

taskInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});
