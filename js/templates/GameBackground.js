class GameBackgound {
    constructor(setting) {
        this.setting = setting;
    }
    createBackgroundDecoration() {
        this.setting.context.drawImage(...this.setting.decorationTextureParams, ...this.setting.decorationCanvasFirstParams);
        this.setting.context.drawImage(...this.setting.decorationTextureParams, ...this.setting.decorationCanvasSecondParams);
    }
    createBackgroundFloor() {
        this.setting.context.drawImage(...this.setting.floorTextureParams, ...this.setting.floorCanvasFirstParams);
        this.setting.context.drawImage(...this.setting.floorTextureParams, ...this.setting.floorCanvasSecondParams);
    }
    renderBackground() {
        this.createBackgroundDecoration();
        this.createBackgroundFloor();
    }
}