var elementGet = document.getElementsByTagName("li");
console.log(elementGet);

 //Add
function addNew() {
var newli = document.createElement("li");
var textInLi = document.createTextNode("Element 4");
newli.appendChild(textInLi);
document.getElementsByTagName("elementsList").appendChild(newli);
};
//Delete

function remove() {
    var listOfElements = document.getElementById("elementsList");
    listOfElements.removeChild(listOfElements.childNodes[0]);
};

//Change
function changeText(){
document.getElementById("change").value = "Text is changed";
};

function changeWidth(){
    var chooseElement = document.getElementById("change");
chooseElement.style.width = "750px";
};

function parent(){
var firstListItem = document.querySelector('li');
var list = firstListItem.parentElement;

console.log(list);
}

function siblingPrevious(){
   var x = document.getElementById("el2").previousElementSibling.innerHTML;
   
   console.log(x);
}

function siblingNext(){
    var x = document.getElementById("el2").nextElementSibling.innerHTML;
    
    console.log(x);
 }


 function children(){
     var all = document.getElementById("elementsList").childNodes;
     console.log(all);

 }