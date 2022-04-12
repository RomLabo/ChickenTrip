class GameEagle {
    constructor(setup) {
        this.setup = setup;
        this.isCrash = false;
        this.scorePoints = 0;
    }
    drawCharacter() {
        this.setup.context.drawImage(...this.setup.textureParams, ...this.setup.canvasParams);
    }
    detectCrash(chickenCoordinates) {
        let crashParamsX = [this.setup.canvasParams[0], this.setup.canvasParams[0] + (this.setup.canvasParams[3] * .5)];
        if (crashParamsX[0] <= chickenCoordinates[1] 
            && crashParamsX[1] >= chickenCoordinates[0] 
            && chickenCoordinates[2] >= this.setup.coordinateY) {
            this.isCrash = true;
        } 
        if (this.setup.canvasParams[0] === 0) {
            this.scorePoints ++;
        }
    }
    render(chickenCoordinates) {
        this.drawCharacter();
        //this.detectCrash(chickenCoordinates);
    }
}