class GameChicken {
    constructor(setting) {
        this.setting = setting;
        this.variablePositionY = this.setting.position[1];
        this.jump = 0;
    }
    get crashPosition() {
        return [this.setting.position[0] + this.setting.responsiveSize[0], this.variablePositionY + this.setting.responsiveSize[1]]
    }
    createChicken() {
        let canvasParams = [this.setting.position[0], this.variablePositionY, ...this.setting.responsiveSize];
        this.setting.context.drawImage(...this.setting.textureParams, ...canvasParams);                  
    }
    landingChicken() { 
        let jumpPosition = this.variablePositionY + this.jump;
        this.variablePositionY = jumpPosition > this.setting.position[1] ? this.setting.position[1] : jumpPosition;
        this.jump += this.setting.jumpParams[1];
    }
    bringUpChicken() {
        this.jump = this.variablePositionY < -10 ? -this.setting.jumpParams[0] : this.setting.jumpParams[0];
    }
    renderChicken() {
        this.createChicken();
        this.landingChicken();
    }
}