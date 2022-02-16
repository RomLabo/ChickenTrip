class GameChicken {
    constructor(setting) {
        this.setting = setting;
        this.context = this.setting.context;
        this.canvasSize = this.setting.canvasSize;
        
        this.chickenSize = [65, 65];
        this.chickenResponsiveSize = [this.canvasSize[0] * .07, this.canvasSize[0] * .07];
        this.chickenPosition = [this.canvasSize[0] * .04, this.canvasSize[1] * .75];
        
        this.chickenVariablePositionY = this.chickenPosition[1];
        this.chickenJumpParams = [-this.canvasSize[1] * .04, this.canvasSize[1] * .002];
        this.jump;
    }
    createChicken() {
        let chickenMotion = Math.floor((this.setting.gameIndex % 18) / 6) * this.chickenSize[1];
        let chickenCanvasParams = [this.chickenPosition[0], this.chickenVariablePositionY, ...this.chickenResponsiveSize]
        let chickenTextureParams = [this.setting.texture, chickenMotion, 552, ...this.chickenSize];
        this.context.drawImage(...chickenTextureParams, ...chickenCanvasParams);                  
    }
    chickenJump() {
        let chickenJumpPosition = this.chickenVariablePositionY + this.jump;
        this.chickenVariablePositionY = chickenJumpPosition > this.chickenPosition[1] ? this.chickenPosition[1] : chickenJumpPosition;
    }
    renderChicken() {
        this.createChicken();
        this.chickenJump();
    }
}