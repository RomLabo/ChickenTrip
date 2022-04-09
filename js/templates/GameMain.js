class GameMain {
    constructor(setup) {
        this.setup = setup;
        this.animation = setup._animation;
        this.bestScore = document.getElementById('best-score');
        this.bestScore.textContent = 0;
        this.currentScore = document.getElementById('current-score');
        this.currentScore.textContent = 0;
    }
    clearContext() {
        this.setup._context.clearRect(0, 0, ...this.setup.canvasSize);
    }
    stopGameIfCrash(gameEnemies) {
        if (gameEnemies.isCrash === true) {
            this.bestScore.textContent = gameEnemies.scorePoints > this.bestScore.textContent ? gameEnemies.scorePoints : 0 ;
            this.setup._gameInProgess = false;
            gameEnemies.scorePoints = 0;
            gameEnemies.isCrash = false;
        } 
    }
    displayAnimation() {
        !this.setup.gameInProgess ? this.animation.style.opacity = 1 : this.animation.style.opacity = 0;
    }
    incrementIndex() {
        !this.setup.gameInProgess ? this.setup._gameIndex = 0 : this.setup._gameIndex ++;
    }
    render(gameEnemies) {
        this.stopGameIfCrash(gameEnemies)
        this.displayAnimation();
        this.incrementIndex();
        this.currentScore.textContent = gameEnemies.scorePoints;
    }
}