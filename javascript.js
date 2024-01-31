let input = document.getElementById("txt");
let listItem = document.getElementById("listItem");

function fun(){
    if(input.value === ''){
        alert("Write Something To Add Task")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listItem.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        saveData()
    }
    input.value=" ";
    input.focus();
}

listItem.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }

},false);

function saveData(){
    localStorage.setItem("data",listItem.innerHTML);
}
function showTask(){
    listItem.innerHTML = localStorage.getItem("data");
}
showTask();