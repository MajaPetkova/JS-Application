const element= document.createElement('div');
element.id= "overlay";

element.innerHTML= `<div id="modal">
<p>Are you sure?</p>
<div>
  <button class="modal-ok">Ok</button>  
  <button class="modal-cancel">Cancel</button>
</div>
</div>`;

element.querySelector(".modal-ok").addEventListener("click", ()=>onChoice(true));
element.querySelector(".modal-cancel").addEventListener("click", ()=>onChoice(false));

const msg = element.querySelector("p");
let callback= null;


export function showModal(message, cb){
    callback= cb;
    msg.textContent= message;
document.body.appendChild(element)
}

function onChoice(choice){
clear();
callback(choice)
}

export function clear(){
    element.remove()
}