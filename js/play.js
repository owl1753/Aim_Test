let G_delay = 0;
let D_delay = 0;
let cnt = 0;
let isClicked = false;

storage = window.sessionStorage;
G_delay = Number(storage.getItem('G_delay'));
D_delay = Number(storage.getItem('D_delay'));

let removeButton = () => {
    let button = document.getElementsByClassName("Button")[0];
    button.remove();
};

let getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

let makeButton = () => { 
    let button = document.createElement("button");
    button.innerHTML = "아잇"
    button.setAttribute("class", "Button");
    button.addEventListener("click", addCnt);

    let left = getRandomInt(0, 1871);
    let top = getRandomInt(0, 919);
    button.style.left = String(left) + "px";
    button.style.top = String(top) + "px";

    document.body.appendChild(button);
    isClicked = false;
    setTimeout(removeButton, D_delay);
};

let addCnt = () => {
    if (isClicked) {
        console.log("응애")
        return;
    }
    else {
        isClicked = true;
        cnt++;
    }
};

let endPlay = () => {
    clearInterval(timerId);
    storage = window.sessionStorage;
    storage.setItem('cnt', String(cnt));
    setTimeout(() => { location.href="result.html" }, 2000);
};

let timerId = setInterval(makeButton, G_delay);
setTimeout(endPlay, G_delay * 20);