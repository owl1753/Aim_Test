class Difficulty{
    constructor(G_delay, D_delay){
        this.G_delay = G_delay;
        this.D_delay = D_delay;
    }
}

let difficulty = new Difficulty(0, 0);

let clickStartButton = (index) => {
    if (index == 0) {
        difficulty.G_delay = 1000;
        difficulty.D_delay = 1100;
        storage = window.sessionStorage;
        storage.setItem('G_delay', '1000');
        storage.setItem('D_delay', '1100');
    }
    else if (index == 1){
        difficulty.G_delay = 700;
        difficulty.D_delay = 800;
    }
    else if (index == 2){
        difficulty.G_delay = 500;
        difficulty.D_delay = 600;
    }
}
