class GameMain {
    constructor(setup) {
        this.setup = setup;
        this.animation = setup._animation;
    }
    clearContext() {
        this.setup._context.clearRect(0, 0, ...this.setup.canvasSize);
    }
    stopGameIfCrash(gameEnemies) {
        if (gameEnemies.isCrash === true) {
            this.setup._gameInProgess = false;
            gameEnemies.isCrash = false;
        } 
    }
    displayAnimation() {
        this.setup.gameInProgess === false ? this.animation.style.opacity = 1 : this.animation.style.opacity = 0;
    }
    incrementIndex() {
        this.setup.gameInProgess === false ? this.setup._gameIndex = 0 : this.setup._gameIndex ++;
    }
    render(gameEnemies) {
        this.stopGameIfCrash(gameEnemies)
        this.displayAnimation();
        this.incrementIndex();
    }
}