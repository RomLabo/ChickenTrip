class GameMain {
    constructor(setup) {
        this.setup = setup;
        this.animation = setup.animation;
    }
    clearContext() {
        this.setup._context.clearRect(0, 0, ...this.setup.canvasSize);
    }
    detectCrash(arrayOfCharacter) {
        let indexOfCrash = arrayOfCharacter.findIndex((element) => element.isCrash === true);
        if (indexOfCrash !== -1) {
            arrayOfCharacter[indexOfCrash].isCrash = false;
            this.setup._gameInProgess = false;
        }
    }
    displayAnimation() {
        this.setup.gameInProgess === false ? this.animation.style.opacity = 1 : this.animation.style.opacity = 0;
    }
    incrementIndex() {
        this.setup.gameInProgess === false ? this.setup._gameIndex = 0 : this.setup._gameIndex ++;
    }
    render(arrayOfCharacter) {
        this.detectCrash(arrayOfCharacter)
        this.displayAnimation();
        this.incrementIndex();
    }
}