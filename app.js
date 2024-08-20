let box1c = document.getElementsByClassName("box1c");
let box1b = document.querySelector("#box1B");
let box2b = document.querySelector("#box2b");

for(x of box1c){
    x.addEventListener("dragstart", function(e){
        let choice =e.target;
        box1b.addEventListener("dragover" , function(e){
            e.preventDefault();
        });
        box2b.addEventListener("drop" , function(e){
           box2b.appendChild(choice);
           choice=null;
        });
        box2b.addEventListener("dragover" , function(e){
            e.preventDefault();
        });
        box1b.addEventListener("drop" , function(e){
           box1b.appendChild(choice);
           choice=null;
        });
    })
}