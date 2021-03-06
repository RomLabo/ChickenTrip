class GameBonus {
    constructor(setup) {
        this.setup = setup;
        this.isBonus = false;
        this.bonusIsTake = false;
    }
    drawCharacter() {
        if (!this.bonusIsTake) {
            this.setup.context.drawImage(...this.setup.textureParams, ...this.setup.canvasParams);
        }
    }
    detectBonus(chickenCoordinates) {
        let coordinates = [this.setup.canvasParams[0], this.setup.canvasParams[1]];
        let coordinateX = [coordinates[0], coordinates[0] + this.setup.canvasParams[2]];
        let coordinateY = [coordinates[1], coordinates[1] + this.setup.canvasParams[3]];
        if ((((chickenCoordinates[0] >= coordinateX[0] && chickenCoordinates[0] <= coordinateX[1])
        || (chickenCoordinates[1] >= coordinateX[0] && chickenCoordinates[1] <= coordinateX[1]))) 
            && (((chickenCoordinates[2] >= coordinateY[0] && chickenCoordinates[2] <= coordinateY[1])
            || (chickenCoordinates[3] >= coordinateY[0] && chickenCoordinates[3] <= coordinateY[1])))) {
                    this.isBonus = true
                    this.bonusIsTake = true;
        }
        if (this.setup.canvasParams[0] <= (0 - this.setup.canvasParams[2])) {
            this.bonusIsTake = false;
        }
    }
    render(chickenCoordinates) {
        this.drawCharacter();
        this.detectBonus(chickenCoordinates);
    }
}