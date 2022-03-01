class GameButcher {
    constructor(setup) {
        this.setup = setup;
        this.isCrash = false;
        this.count = 0;
    }
    drawCharacter() {
        this.setup.context.drawImage(...this.setup.textureParams, ...this.setup.canvasParams);
    }
    detectCrash(chickenPostion) {
        if (this.setup.canvasParams[0] <= chickenPostion[0] 
            && this.setup.canvasParams[0] >= this.setup.crashMinPositionX 
            && chickenPostion[1] >= this.setup.positionY) {
            this.isCrash = true;
            this.count = 0;
        } else if (this.setup.canvasParams[0] < 6 && this.setup.canvasParams[0] > 0) {
            this.count ++;
        }
    }
    render(chickenPosition) {
        this.drawCharacter();
        this.detectCrash(chickenPosition);
    }
}