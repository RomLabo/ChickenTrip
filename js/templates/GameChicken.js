class GameChicken {
    constructor(setup) {
        this.setup = setup;
        this.variablePositionY = setup.position[1];
        this.crashPosition;
        this.jump = 0;
    }
    createChicken() {
        let canvasParams = [this.setup.position[0], this.variablePositionY, ...this.setup.responsiveSize];
        this.setup.context.drawImage(...this.setup.textureParams, ...canvasParams);                  
    }
    updateChickenPosition() { 
        let jumpPosition = this.variablePositionY + this.jump;
        this.crashPosition = [this.setup.crashParams[0], this.setup.crashParams[1] + this.variablePositionY];
        this.variablePositionY = Math.min(jumpPosition, this.setup.position[1]);
        this.jump += this.setup.jumpParams[1];
    }
    bringUpChicken() {
        this.jump = Math.sign(this.variablePositionY) * this.setup.jumpParams[0];
    }
    renderChicken() {
        this.createChicken();
        this.updateChickenPosition();
    }
}