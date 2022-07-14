class GameMain {
    constructor(setup) {
        this.setup = setup;
        this.animation = setup._animation;
        this.bestScore = document.getElementById('best-score');
        this.bestScore.textContent = 0;
        this.currentScore = document.getElementById('current-score');
        this.currentScore.textContent = 0;
        this.bonusPoint = 0;
    }
    clearContext() {
        this.setup._context.clearRect(0, 0, ...this.setup.canvasSize);
    }
    updateScore(gameEnemies) {
        if (navigator.cookieEnabled && typeof localStorage != undefined && localStorage.getItem('chickenTripScore') != null) {
            this.bestScore.textContent = JSON.parse(localStorage.getItem('chickenTripScore'));
        }
        let score = gameEnemies.reduce((a, b) => a.scorePoints + b.scorePoints);
        this.currentScore.textContent = score + this.bonusPoint;
        if (!this.setup._gameInProgess) {
            gameEnemies.forEach((elem) => elem.scorePoints = 0);
            this.bestScore.textContent = (score + this.bonusPoint) > this.bestScore.textContent ? (score + this.bonusPoint) : this.bestScore.textContent;
            this.bonusPoint = 0;
            if (navigator.cookieEnabled && typeof localStorage != undefined) {
                localStorage.setItem('chickenTripScore', `${this.bestScore.textContent}`);
            }
        }
    }
    stopGameIfCrash(gameEnemies) {
        if (!gameEnemies.every(elem => elem.isCrash === false)) {
            this.setup._gameInProgess = false;   
            gameEnemies.forEach((elem) => elem.isCrash = false);
        }
    }
    displayAnimation() {
        this.animation.style.transform = !this.setup.gameInProgess ? 'scale(1,1)' : 'scale(0,0)';
    }
    incrementIndex() {
        !this.setup.gameInProgess ? this.setup._gameIndex = 0 : this.setup._gameIndex ++;
    }
    addBonus(gameBonus) {
        if (gameBonus.isBonus) {
            this.bonusPoint += 1;
            gameBonus.isBonus = false;
        }
    }
    render(gameEnemies, gameBonus) {
        this.stopGameIfCrash(gameEnemies)
        this.updateScore([gameEnemies[0], gameEnemies[1]])
        this.addBonus(gameBonus);
        this.displayAnimation();
        this.incrementIndex();
    }
}