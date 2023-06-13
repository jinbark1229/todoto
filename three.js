var plans = [];
var planInput = document.getElementById("planInput");
var planList = document.getElementById("planList");
var addButton = document.querySelector("button");

function handleKeyUp(event) {
  if (event.key === "Enter") {
    addPlan();
  }
}

function addPlan() {
  var plan = planInput.value;
  if (plan.trim() !== "") {
    var li = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
      if (this.checked) {
        li.classList.add("completed");
      } else {
        li.classList.remove("completed");
      }
    });
    li.appendChild(checkbox);

    var text = document.createElement("span");
    text.textContent = plan;
    li.appendChild(text);

    var editButton = document.createElement("span");
    editButton.classList.add("edit-button");
    editButton.textContent = "편집";
    editButton.addEventListener("click", function() {
      editPlan(li);
    });
    li.appendChild(editButton);

    var deleteButton = document.createElement("span");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", function() {
      deletePlan(li);
    });
    li.appendChild(deleteButton);

    plans.push(plan);
    planList.appendChild(li);
    planInput.value = "";
  }
}

function editPlan(li) {
  var textSpan = li.querySelector("span");
  var editText = prompt("새로운 내용을 입력하세요", textSpan.textContent);
  if (editText !== null) {
    textSpan.textContent = editText;
    var index = Array.from(planList.children).indexOf(li);
    plans[index] = editText;
  }
}

function deletePlan(li) {
  var index = Array.from(planList.children).indexOf(li);
  plans.splice(index, 1);
  li.remove();
}

planInput.addEventListener("keyup", handleKeyUp);
addButton.addEventListener("click", addPlan);
