var makeButton = () => 
{ 
    let button = document.createElement("button");
    button.innerHTML = "아잇"
    $( button ).offset( { left: 100, top: 50 } );
    document.body.appendChild(button);
};

$(document).ready(function(){
    setInterval(makeButton, 500);
 });


