let G_delay = 0;
let D_delay = 0;

storage = window.sessionStorage;
G_delay = Number(storage.getItem('G_delay'));
D_delay = Number(storage.getItem('D_delay'));

let removeButton = () => {
    let button = document.getElementsByClassName("Button")[0];
    button.remove();
}

let getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let makeButton = () => { 
    let button = document.createElement("button");
    button.innerHTML = "아잇"
    button.setAttribute("class", "Button");

    let left = getRandomInt(0, 1871);
    let top = getRandomInt(0, 919);
    button.style.left = String(left) + "px";
    button.style.top = String(top) + "px";

    document.body.appendChild(button);
    setTimeout(removeButton, D_delay);
    console.log(difficulty);
};

let timerId = setInterval(makeButton, G_delay);
setTimeout(() => { clearInterval(timerId); }, 20000);