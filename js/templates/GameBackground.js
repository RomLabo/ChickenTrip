class GameBackgound {
    constructor(setting) {
        this.setting = setting;
        this.context = this.setting.context;
        this.canvasSize = this.setting.canvasSize;
        
        this.decorationSize = [768, 432];
        this.floorSize = [768, 120];
        this.floorResponsiveSize = [this.canvasSize[0], this.canvasSize[1] * .25];
    }
    createBackgroundDecoration() {
        let decorationMotion = (this.setting.gameIndex) % this.canvasSize[0];
        let decorationTextureParams = [this.setting.texture, 0, 0, ...this.decorationSize];
        let decorationCanvasFirstParams = [- decorationMotion, 0, ...this.canvasSize];
        let decorationCanvasSecondParams = [- decorationMotion + this.canvasSize[0], 0, ...this.canvasSize];

        this.context.drawImage(...decorationTextureParams, ...decorationCanvasFirstParams);
        this.context.drawImage(...decorationTextureParams, ...decorationCanvasSecondParams);
    }
    createBackgroundFloor() {
        let floorMotion = (this.setting.gameIndex * this.setting.difficultyLevel) % this.canvasSize[0];
        let floorTextureParams = [this.setting.texture, 0, 432, ...this.floorSize];
        let floorCanvasFirstParams = [- floorMotion, this.canvasSize[1] * .75, ...this.floorResponsiveSize];
        let floorCanvasSecondParams = [- floorMotion + this.canvasSize[0], this.canvasSize[1] * .75, ...this.floorResponsiveSize];
        
        this.context.drawImage(...floorTextureParams, ...floorCanvasFirstParams);
        this.context.drawImage(...floorTextureParams, ...floorCanvasSecondParams);
    }
    renderBackground() {
        this.createBackgroundDecoration();
        this.createBackgroundFloor();
    }
}