let TC = document.querySelector(".ticket-container");
let allFilters = document.querySelectorAll(".filter");
let modalVisible = false;
for (let i = 0; i < allFilters.length; i++) {
  allFilters[i].addEventListener("click", filterHandler);
  console.log("here");
}
function filterHandler(e) {
  let filter = e.currentTarget.children[0].classList[0];
  TC.style.backgroundColor = filter.split("-")[0];
}

let addButton = document.querySelector(".add");
addButton.addEventListener("click", showModal);

function showModal(e) {
  if (!modalVisible) {
    let modal = `<div class="modal">
    <div class="task-to-be-added" data-type="false" contenteditable="true">
        <span class="placeholder">Enter your text</span>
    </div>
    <div class="priority-list">
        <div class="pink-modal-filter modal-filter active"></div>
        <div class="blue-modal-filter modal-filter"></div>
        <div class="green-modal-filter modal-filter"></div>
        <div class="yellow-modal-filter modal-filter"></div>

    </div>
   `;
    TC.innerHTML = TC.innerHTML + modal;
    let taskTyper=document.querySelector(".task-to-be-added");
    taskTyper.addEventListener("click", function(e){
      if(e.currentTarget.getAttribute("data-type")=="false"){
        e.currentTarget.innerHTML="";
        e.currentTarget.setAttribute("data-type","true");
      }
    
    })
    
    
    modalVisible = true;
  }
}
