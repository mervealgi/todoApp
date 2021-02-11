//ELEMENTS
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//CLASSES
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//TODAY S DATE
const options = {weekday: "long", month: "short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US",options);

//TO DO FUNCTION
function addToDo(toDo, id, done,thrash){

    if(thrash){return;}
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "" ;

    const item = `<li class="item">
                        <i class="fa fa-circle-thin co" job="complete" id="0"></i>
                        <p class="text">${toDo}</p>
                        <i class="fa fa-trash-o de" job="delete" id="0"></i> 
                        </li>
                 `;

    const position = "beforeend";
    list.insertAdjacentHTML(position, item);
}

//WHEN USER ENTER THE KEY TO ADD
document.addEventListener("keyup",function(even){
    if(event.code == "Enter"){
        const toDo = input.value;

        if(toDo){
            addToDo(toDo);
        }
        input.value = "";

    }
}); 