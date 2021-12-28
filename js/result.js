window.onload = function(){
    let score = document.getElementById("Score");
    storage = window.sessionStorage;
    score.innerHTML = storage.getItem("cnt");
}

