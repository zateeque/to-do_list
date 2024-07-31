const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// function to add task
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        // creating html element with tag name li
        let li = document.createElement("li");
        // stores task inputted by user into variable li
        li.innerHTML = inputBox.value;
        // shows the location where the task should be displayed 
        // it is under element "listContainer"
        listContainer.appendChild(li);
        // span tag to delete task
        let span = document.createElement("span");
        // the code "\u00d7" for the cross icon
        span.innerHTML = "\u00d7";
        // displays cross tag
        li.appendChild(span);
    }
    // clears the input box after task added by hitting "Add" button
    inputBox.value = "";
    saveData();
}

// function to check off task
listContainer.addEventListener("click", function(e){
    // if you click circle aka "LI" then checks of task
    if(e.target.tagName === "LI"){
        // .toggle means you can check and uncheck by clicking 
        e.target.classList.toggle("checked");
        saveData();
    }
    // o.w. if you click the cross icon aka "SPAN" it will delete task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// saves tasks in browser; even if browser is reloaded tasks are saved
// saved all the content in the element listContainer
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// displays the data each time the browser is reloaded
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
