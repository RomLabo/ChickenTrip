class GameEagle {
    constructor(setup) {
        this.setup = setup;
        this.isCrash = false;
        this.scorePoints = 0;
    }
    drawCharacter() {
        this.setup.context.drawImage(...this.setup.textureParams, ...this.setup.canvasParams[0]);
        this.setup.context.drawImage(...this.setup.textureParams, ...this.setup.canvasParams[1]);
    }
    detectCrash(chickenPosition) {
        let crashParamsX = [this.setup.canvasParams[0], this.setup.canvasParams[0] + (this.setup.canvasParams[3] * .5)];
        if (crashParamsX[0] <= chickenPosition[1] 
            && crashParamsX[1] >= chickenPosition[0] 
            && chickenPosition[2] >= this.setup.positionY) {
            this.isCrash = true;
        } 
        if (this.setup.canvasParams[0] === 0) {
            this.scorePoints ++;
        }
    }
    render(chickenPosition) {
        this.drawCharacter();
        //this.detectCrash(chickenPosition);
    }
}