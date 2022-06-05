class GameChicken {
    constructor(setup) {
        this.setup = setup;
        this.variableCoordinateY = setup.coordinate[1];
        this.coordinatesX = [setup.coordinate[0], setup.coordinate[0] + setup.responsiveSize[0]];
        this.allCoordinates;
        this.jump = 0;
    }
    drawCharacter() {
        let canvasParams = [this.setup.coordinate[0], this.variableCoordinateY | 0, ...this.setup.responsiveSize];
        this.setup.context.drawImage(...this.setup.textureParams, ...canvasParams);                  
    }
    updatePosition() { 
        let coordinateYWithJump = this.variableCoordinateY + this.jump;
        this.allCoordinates = [...this.coordinatesX, this.variableCoordinateY, this.variableCoordinateY + this.setup.responsiveSize[1]];
        this.variableCoordinateY = Math.min(coordinateYWithJump, this.setup.coordinate[1]);
        this.variableCoordinateY <= 0 ? this.jump += (this.setup.jumpParams[1] * 2) : this.jump += this.setup.jumpParams[1];
        // this.jump += this.setup.jumpParams[1];
    }
    bringUp() {
        this.jump = Math.sign(this.variableCoordinateY) * this.setup.jumpParams[0];
    }
    render() {
        this.drawCharacter();
        this.updatePosition();
    }
}