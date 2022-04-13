class GameEnemies {
    constructor(setup) {
        this.setup = setup;
        this.isCrash = false;
        this.scorePoints = 0;
    }
    drawCharacter() {
        this.setup.context.drawImage(...this.setup.textureParams, ...this.setup.canvasParams);
    }
    detectCrash(chickenCoordinates) {
        let coordinates = [this.setup.canvasParams[0], this.setup.canvasParams[1]];
        let coordinateX = [coordinates[0] + (this.setup.canvasParams[2] * .25), coordinates[0] + (this.setup.canvasParams[2] * .75)];
        let coordinateY = [coordinates[1] + (this.setup.canvasParams[3] * .25), coordinates[1] + (this.setup.canvasParams[3] * .75)];
        if ((((chickenCoordinates[0] >= coordinateX[0] && chickenCoordinates[0] <= coordinateX[1])
        || (chickenCoordinates[1] >= coordinateX[0] && chickenCoordinates[1] <= coordinateX[1]))) 
            && (((chickenCoordinates[2] >= coordinateY[0] && chickenCoordinates[2] <= coordinateY[1])
            || (chickenCoordinates[3] >= coordinateY[0] && chickenCoordinates[3] <= coordinateY[1])))) {
                    this.isCrash = true
        }
        if (this.setup.canvasParams[0] === 0) {
            this.scorePoints ++;
        }
    }
    render(chickenCoordinates) {
        this.drawCharacter();
        this.detectCrash(chickenCoordinates);
    }
}