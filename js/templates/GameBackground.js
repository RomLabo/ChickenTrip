class GameBackgound {
    constructor(setup) {
        this.setup = setup;
    }
    drawBackgroundDecoration() {
        this.setup.context.drawImage(...this.setup.decorationTextureParams, ...this.setup.decorationCanvasParams[0]);
        this.setup.context.drawImage(...this.setup.decorationTextureParams, ...this.setup.decorationCanvasParams[1]);
    }
    drawBackgroundFloor() {
        this.setup.context.drawImage(...this.setup.floorTextureParams, ...this.setup.floorCanvasParams[0]);
        this.setup.context.drawImage(...this.setup.floorTextureParams, ...this.setup.floorCanvasParams[1]);
    }
    render() {
        this.drawBackgroundDecoration();
        this.drawBackgroundFloor();
    }
}