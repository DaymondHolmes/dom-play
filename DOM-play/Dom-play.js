//alert("Hi from dom play");

/*

    With a single click, highlight (bold or otherwise) all lines for a specific actor in a play
    
    Un-highlight (normal or otherwise) all lines from all other actors in the play

    Must accommodate any number of actors, and any number of additional lines 

    We can change the HTML as needs

*/

//document.querySelector(".ellie").style.backgroundColor = "yellow";


function highlight(el){

    if(el.style.backgroundColor == 'white'){//change to orange
        el.style.backgroundColor='orange';

    }else{//change to white
        el.style.backgroundColor='white';
    }    
}

function myAlert(){
    alert("I'm clicked!");
}

function highlightActor(actor){
    //alert("the current actor is:" + actor );
    for(const mySpan of spans){
        if(actor == mySpan.dataset.actor){//current actor
            mySpan.style.backgroundColor='orange';     
        }else{//other actor
            mySpan.style.backgroundColor='white';
        }
    }


}

const spans = document.querySelectorAll("#play span");

console.log(spans);

for(const mySpan of spans){
    //mySpan.addEventListener("click",myAlert);
    mySpan.addEventListener("click",function(ev){
        highlightActor(mySpan.dataset.actor);
    });

}