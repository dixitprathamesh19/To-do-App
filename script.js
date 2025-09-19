const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Load saved tasks from localStorage on page load
document.addEventListener('DOMContentLoaded', showTasks);

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        // Add a delete button (span)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // '×' character for the delete button
        li.appendChild(span);

        // Add the task to the list
        listContainer.appendChild(li);

        // Clear the input box
        inputBox.value = "";

        // Save the list data to localStorage
        saveData();
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Mark task as done/undone
        saveData(); // Save data after checking/unchecking
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove the task
        saveData(); // Update localStorage after removal
    }
}, false);

// Save tasks to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Show tasks from localStorage
function showTasks() {
    let savedData = localStorage.getItem("data");
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}
