class GameMain {
    constructor(setup) {
        this.setup = setup;
        this.animation = setup.animation;
    }
    incrementIndex() {
        this.setup.gameState === 'stop' ? this.setup._gameIndex = 0 : this.setup._gameIndex ++;
    }
    clearContext() {
        if (this.setup.gameState === 'in progress') {
            this.setup._context.clearRect(0, 0, ...this.setup.canvasSize);
        }
    }
    changeState() {
        if (this.setup.gameState === 'stop') {
            this.setup._gameState = 'in progress';
        } else {
            return true;
        }
    }
    displayAnimation() {
        this.animation[0].style.zIndex = -5;
        this.animation[0].style.opacity = 0;
        if (this.setup.gameState === 'stop') {
            this.animation[1].style.display = 'flex';
            this.animation[0].style.zIndex = 2;
            this.animation[0].style.opacity = 1;
        } 
    }
    detectCrash(arrayOfCharacter) {
        let indexOfCrash = arrayOfCharacter.findIndex((element) => element.crash === true);
        if (indexOfCrash !== -1) {
            arrayOfCharacter[indexOfCrash].crash = false;
            this.setup._gameState = 'stop';
        }
    }
    render() {
        this.incrementIndex();
        this.clearContext();
        this.displayAnimation();
    }
}