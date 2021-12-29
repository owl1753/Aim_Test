class Difficulty{
    constructor(G_delay, D_delay){
        this.G_delay = G_delay;
        this.D_delay = D_delay;
    }
}

let difficulty = new Difficulty(0, 0);

let clickStartButton = (index) => {
    if (index == 0) {
        storage = window.sessionStorage;
        storage.setItem('G_delay', '1200');
        storage.setItem('D_delay', '1000');
    }
    else if (index == 1){
        storage = window.sessionStorage;
        storage.setItem('G_delay', '1000');
        storage.setItem('D_delay', '800');
    }
    else if (index == 2){
        storage = window.sessionStorage;
        storage.setItem('G_delay', '800');
        storage.setItem('D_delay', '600');
    }
}
