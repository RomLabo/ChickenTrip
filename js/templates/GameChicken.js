class GameChicken {
    constructor(setup) {
        this.setup = setup;
        this.variablePositionY = setup.position[1];
        this.position;
        this.jump = 0;
    }
    drawCharacter() {
        let canvasParams = [this.setup.position[0], this.variablePositionY, ...this.setup.responsiveSize];
        this.setup.context.drawImage(...this.setup.textureParams, ...canvasParams);                  
    }
    updatePosition() { 
        let jumpPosition = this.variablePositionY + this.jump;
        this.position = [this.setup.crashParams[0], this.setup.crashParams[1] + this.variablePositionY];
        this.variablePositionY = Math.min(jumpPosition, this.setup.position[1]);
        this.jump += this.setup.jumpParams[1];
    }
    bringUp() {
        this.jump = Math.sign(this.variablePositionY) * this.setup.jumpParams[0];
    }
    render() {
        this.drawCharacter();
        this.updatePosition();
    }
}