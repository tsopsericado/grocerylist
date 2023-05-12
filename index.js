const inputitem = document.querySelector("#input-item");
const form = document.querySelector(".form");
const addButton = document.querySelector("#addbutton");
const shoplist = document.querySelector(".forshopping");
const clear = document.querySelector(".clear");
// Event listener for the input button
form.addEventListener("submit", function(event){
  event.preventDefault();
  if(inputitem.value == "") {
    alert("please add some text");
  }else {
    const newitem = createNewItem(inputitem.value);
    shoplist.appendChild(newitem);
    inputitem.value ="";
    inputitem.focus();
    clear.classList.remove("d-none");
  }
// Event listener for the clear button 
  clear.addEventListener("click", function(){
    shoplist.innerHTML = "";
  })
});
// This is the function that allows us to creat and append new items to our list.
function createNewItem(inputValue) {
  const item = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  span.textContent = inputValue;
  delBtn.textContent = "Delete"
  editBtn.textContent = "Edit";
  item.appendChild(span);
  item.appendChild(delBtn);
  item.appendChild(editBtn);

  //Event listener for the delete button
  delBtn.addEventListener("click", function(){
    item.parentNode.removeChild(item);
  });
  //Event listener for the edit button 
  editBtn.addEventListener("click", function(){
    span.contentEditable = true;
    span.focus();
  });
  return item
}
