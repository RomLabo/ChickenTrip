class SetupBackground {
    constructor(setup) {
        this._setup = setup;
        this._decorationSize = [768, 432];
        this._floorSize = [768, 120];
        this._floorResponsiveSize = [setup.canvasSize[0], Math.round(setup.canvasSize[1] * .25)];
    }
    get context() {
        return this._setup.context;
    }
    get decorationTextureParams() {
        return [this._setup.texture, 0, 0, ...this._decorationSize];
    }
    get decorationCanvasFirstParams() {
        let decorationMotion = (this._setup.gameIndex) % this._setup.canvasSize[0];
        return [-decorationMotion, 0, ...this._setup.canvasSize];
    }
    get decorationCanvasSecondParams() {
        let decorationMotion = (this._setup.gameIndex) % this._setup.canvasSize[0];
        return [-decorationMotion + this._setup.canvasSize[0], 0, ...this._setup.canvasSize];
    }
    get floorTextureParams() {
        return [this._setup.texture, 0, 432, ...this._floorSize]
    }
    get floorCanvasFirstParams() {
        let floorMotion = (this._setup.gameIndex * this._setup.difficultyLevel) % this._setup.canvasSize[0];
        return [-floorMotion, Math.round(this._setup.canvasSize[1] * .75), ...this._floorResponsiveSize];
    }
    get floorCanvasSecondParams() {
        let floorMotion = (this._setup.gameIndex * this._setup.difficultyLevel) % this._setup.canvasSize[0];
        return [-floorMotion + this._setup.canvasSize[0], Math.round(this._setup.canvasSize[1] * .75), ...this._floorResponsiveSize];
    }
}