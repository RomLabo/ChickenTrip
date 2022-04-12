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
    updateCurrentScore(gameEnemies) {
        let score = gameEnemies.reduce((a, b) => a.scorePoints + b.scorePoints);
        this.currentScore.textContent = score;
        if (this.setup._gameInProgess === false) {
            gameEnemies.forEach((elem) => elem.scorePoints = 0);
            this.bestScore.textContent = score > this.bestScore.textContent ? score : this.bestScore.textContent;
        }
    }
    stopGameIfCrash(gameEnemies) {
        if (gameEnemies.every(elem => elem.isCrash === false) === false) {
            this.setup._gameInProgess = false;   
            gameEnemies.forEach((elem) => elem.isCrash = false);
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
        this.updateCurrentScore(gameEnemies)
        this.displayAnimation();
        this.incrementIndex();
    }
}