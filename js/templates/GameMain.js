class GameMain {
    constructor(setup) {
        this.setup = setup;
        this.animation = setup.animation;
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
        if (this.setup._gameState === 'game stop') {
            this.animation[1].style.display = 'flex';
            this.animation[0].style.zIndex = 2;
        } 
    }
}