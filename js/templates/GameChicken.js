class GameChicken {
    constructor(setting) {
        this.setting = setting;
        this.variablePositionY = this.setting.position[1];
        this.crashPosition;
        this.jump = 0;
    }
    createChicken() {
        let canvasParams = [this.setting.position[0], this.variablePositionY, ...this.setting.responsiveSize];
        this.setting.context.drawImage(...this.setting.textureParams, ...canvasParams);                  
    }
    updateChickenPosition() { 
        let jumpPosition = this.variablePositionY + this.jump;
        this.crashPosition = [this.setting.crashParams[0], this.setting.crashParams[1] + this.variablePositionY];
        this.variablePositionY = Math.min(jumpPosition, this.setting.position[1]);
        this.jump += this.setting.jumpParams[1];
    }
    bringUpChicken() {
        this.jump = Math.sign(this.variablePositionY) * this.setting.jumpParams[0];
    }
    renderChicken() {
        this.createChicken();
        this.updateChickenPosition();
    }
}