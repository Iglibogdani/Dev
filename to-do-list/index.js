const input = document.querySelector("input");
const addButton = document.querySelector(".add-on-list");
const deleteAll = document.querySelector(".delete");
const listPlace = document.querySelector(".my-lists");

addOnList = (e) => {
  const addList = document.createElement("li");
  const deleteButton = document.createElement("button");

  deleteButton.innerHTML = '<i class="trash alternate outline icon"></i>';

  if (input.value !== "") {
    addList.textContent = input.value;
    listPlace.appendChild(addList);
    addList.appendChild(deleteButton);
    input.value = "";
  }
  deleteButton.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
  });
};

addButton.addEventListener("click", addOnList);

onEnter = () => {
  addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addOnList();
    }
  });
};
onEnter();

deleteAll.addEventListener("click", function () {
  var answer = window.confirm(
    "Are you sure you want to delete all your to-do list?"
  );
  if (answer) {
    listPlace.innerHTML = "";
  }
});
