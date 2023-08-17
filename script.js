document.addEventListener("DOMContentLoaded", function () {
    const newTodoInput = document.getElementById("newTodo");
    const addButton = document.getElementById("addButton");
    const todoList = document.getElementById("todoList");
    const dingSound = new Audio("ding-idea-40142.mp3"); // Replace "ding.mp3" with your sound file path
  
    addButton.addEventListener("click", function () {
      const newTodoText = newTodoInput.value;
      if (newTodoText !== "") {
        addTodoItem(newTodoText);
        newTodoInput.value = "";
      }
    });
  
    function addTodoItem(text) {
      const li = document.createElement("li");
      li.innerHTML = `
        <input type="checkbox">
        <span>${text}</span>
        <button class="deleteButton">Delete</button>
      `;
  
      const deleteButton = li.querySelector(".deleteButton");
      const checkbox = li.querySelector("input[type='checkbox']");
  
      deleteButton.addEventListener("click", function () {
        dingSound.play(); // Play the ding sound
        li.remove();
      });
  
      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          dingSound.play(); // Play the ding sound
          li.style.textDecoration = "line-through";
          todoList.appendChild(li);
        } else {
          li.style.textDecoration = "none";
          todoList.prepend(li);
        }
      });
  
      todoList.appendChild(li);
    }
  });
  