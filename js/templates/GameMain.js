class GameMain {
    constructor(setup) {
        this.setup = setup;
        this.animation = setup.animation;
    }
    clearContext() {
        this.setup._context.clearRect(0, 0, ...this.setup.canvasSize);
    }
    detectCrash(arrayOfCharacter) {
        let indexOfCrash = arrayOfCharacter.findIndex((element) => element.crash === true);
        if (indexOfCrash !== -1) {
            arrayOfCharacter[indexOfCrash].crash = false;
            this.setup._gameState = 'game stop';
        }
    }
    displayAnimation() {
        this.animation[0].style.zIndex = -5;
        this.animation[0].style.opacity = 0;
        if (this.setup._gameState === 'game stop') {
            this.animation[1].style.display = 'flex';
            this.animation[0].style.zIndex = 2;
            this.animation[0].style.opacity = 1;
        } 
    }
}