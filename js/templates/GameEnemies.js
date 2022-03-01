class GameEnemies {
    constructor(setup) {
        this.setup = setup;
        this.isCrash = false;
        this.scorePoints = 0;
    }
    drawCharacter() {
        this.setup.context.drawImage(...this.setup.textureParams, ...this.setup.canvasParams);
    }
    detectCrash(chickenCrashPostion) {
        if (this.setup.canvasParams[0] <= chickenCrashPostion[1] 
            && this.setup.canvasParams[0] >= chickenCrashPostion[0] 
            && chickenCrashPostion[2] >= this.setup.positionY) {
            this.isCrash = true;
            this.scorePoints = 0;
        }
        // A revoir 
        /*if (this.setup.canvasParams[0] < 6 && this.setup.canvasParams[0] > 0) {
            this.scorePoints ++;
        }*/ 
    }
    render(chickenPosition) {
        this.drawCharacter();
        this.detectCrash(chickenPosition);
    }
}