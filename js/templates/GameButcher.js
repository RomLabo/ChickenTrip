class GameButcher {
    constructor(setup) {
        this.setup = setup;
        this.crash = false;
    }
    createButcher() {
        this.setup.context.drawImage(...this.setup.textureParams, ...this.setup.firstCanvasParams);
        this.setup.context.drawImage(...this.setup.textureParams, ...this.setup.secondCanvasParams);
    }
    crashButcher(chickenPostion) {
        if (this.setup.secondCanvasParams[0] <= chickenPostion[0] && chickenPostion[1] >= this.setup.positionY) {
            this.crash = true;
        }
    }
    renderButcher(chickenPosition) {
        this.createButcher();
        this.crashButcher(chickenPosition);
    }
}