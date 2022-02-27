class GameBackgound {
    constructor(setup) {
        this.setup = setup;
    }
    drawBackgroundDecoration() {
        this.setup.context.drawImage(...this.setup.decorationTextureParams, ...this.setup.decorationCanvasFirstParams);
        this.setup.context.drawImage(...this.setup.decorationTextureParams, ...this.setup.decorationCanvasSecondParams);
    }
    drawBackgroundFloor() {
        this.setup.context.drawImage(...this.setup.floorTextureParams, ...this.setup.floorCanvasFirstParams);
        this.setup.context.drawImage(...this.setup.floorTextureParams, ...this.setup.floorCanvasSecondParams);
    }
    render() {
        this.drawBackgroundDecoration();
        this.drawBackgroundFloor();
    }
}