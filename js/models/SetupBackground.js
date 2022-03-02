class SetupBackground {
    constructor(setup) {
        this._setup = setup;
        this._decorationSize = [768, 432];
        this._floorSize = [768, 120];
        this._floorResponsiveSize = [setup.canvasSize[0], setup.canvasSize[1] * .25 | 0];
        this._floorPositionY = this._setup.canvasSize[1] - this._floorResponsiveSize[1] | 0;
        this._floorSpeed = Math.round(this._setup.canvasSize[0] * .003);
    }
    get context() {
        return this._setup.context;
    }
    get decorationTextureParams() {
        return [this._setup.texture, 0, 0, ...this._decorationSize];
    }
    get decorationCanvasParams() {
        let decorationMotion = (this._setup.gameIndex) % this._setup.canvasSize[0];
        return [[-decorationMotion, 0, ...this._setup.canvasSize],
            [-decorationMotion + this._setup.canvasSize[0], 0, ...this._setup.canvasSize]];
    }
    get floorTextureParams() {
        return [this._setup.texture, 0, 432, ...this._floorSize]
    }
    get floorCanvasParams() {
        let floorMotion = (this._setup.gameIndex * this._floorSpeed) % this._setup.canvasSize[0];
        return [[-floorMotion, this._floorPositionY, ...this._floorResponsiveSize],
            [-floorMotion + this._setup.canvasSize[0], this._floorPositionY, ...this._floorResponsiveSize]];
    }
}