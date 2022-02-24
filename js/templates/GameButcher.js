class GameButcher {
    constructor(setup) {
        this.setup = setup;
        this.crash = false;
    }
    createButcher() {
        this.setup.context.drawImage(...this.setup.textureParams, ...this.setup.firstCanvasParams);
    }
    crashButcher(chickenPostion) {
        if (this.setup.firstCanvasParams[0] <= chickenPostion[0] 
            && this.setup.firstCanvasParams[0] >= this.setup.crashMinPositionX 
            && chickenPostion[1] >= this.setup.positionY) {
            this.crash = true;
        }
    }
    renderButcher(chickenPosition) {
        this.createButcher();
        this.crashButcher(chickenPosition);
    }
}