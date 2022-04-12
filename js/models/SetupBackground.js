class SetupBackground {
    constructor(setup) {
        this._setup = setup;
        this._decorationSize = [768, 352];
        this._floorSize = [768, 120];
        this._floorResponsiveSize = [setup.canvasSize[0], setup.canvasSize[1] * .25 | 0];
        this._floorCoordinateY = this._setup.canvasSize[1] - this._floorResponsiveSize[1] | 0;
        this._floorSpeed = Math.round(this._setup.canvasSize[0] * .003);
    }
    get context() {
        return this._setup.context;
    }
    get decorationTextureParams() {
        return [this._setup.texture, 0, 0, ...this._decorationSize];
    }
    get decorationCanvasParams() {
        let variableDecorationCoordinateX = (this._setup.gameIndex) % this._setup.canvasSize[0];
        return [[-variableDecorationCoordinateX, 0, ...this._setup.canvasSize],
            [-variableDecorationCoordinateX + this._setup.canvasSize[0], 0, ...this._setup.canvasSize]];
    }
    get floorTextureParams() {
        return [this._setup.texture, 0, 352, ...this._floorSize]
    }
    get floorCanvasParams() {
        let variableFloorCoordinateX = (this._setup.gameIndex * this._floorSpeed) % this._setup.canvasSize[0];
        return [[-variableFloorCoordinateX, this._floorCoordinateY, ...this._floorResponsiveSize],
            [-variableFloorCoordinateX + this._setup.canvasSize[0], this._floorCoordinateY, ...this._floorResponsiveSize]];
    }
}