class GameBackgound {
    constructor(setup) {
        this.setup = setup;
    }
    createBackgroundDecoration() {
        this.setup.context.drawImage(...this.setup.decorationTextureParams, ...this.setup.decorationCanvasFirstParams);
        this.setup.context.drawImage(...this.setup.decorationTextureParams, ...this.setup.decorationCanvasSecondParams);
    }
    createBackgroundFloor() {
        this.setup.context.drawImage(...this.setup.floorTextureParams, ...this.setup.floorCanvasFirstParams);
        this.setup.context.drawImage(...this.setup.floorTextureParams, ...this.setup.floorCanvasSecondParams);
    }
    renderBackground() {
        this.createBackgroundDecoration();
        this.createBackgroundFloor();
    }
}