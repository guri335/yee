var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function crossout() {
        li.classList.toggle("done");
    }
    li.addEventListener("click", crossout);
    function deleteListItem() {
        li.classList.add("delete") 
    }
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);
}
function inputlength() {
    return input.value.length;
}
function addListafterClick() {
    if (inputlength() > 0) {
        createListElement();
    }
}
function addListAfterkeypress(event) {
    if (inputlength() > 0 && event.which === 13) {
        createListElement();
    }
}
enterButton.addEventListener("click", addListafterClick);

input.addEventListener("keypress",addListAfterkeypress);

