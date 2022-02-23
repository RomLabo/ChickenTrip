class SetupButcher {
    constructor(setup) {
        this._setup = setup;
        this._size = [122, 180];
        this._responsiveSize = [setup.canvasSize[0] * .12, setup.canvasSize[0] * .15];
        this._positionY = setup.canvasSize[1] * .6;
        this._speedRun = setup.difficultyLevel * 2;
        this._variableGap = 2;
    }
    get context() {
        return this._setup.context;
    }
    get textureParams() {
        let motion = Math.floor((this._setup._gameIndex % 15) / 5) * this._size[0];
        return [this._setup.texture, motion, 617, ...this._size];
    }
    get positionY() {
        return this._positionY;
    }
    get firstCanvasParams() {
        let variableX = (this._setup._gameIndex * this._speedRun) % (this._variableGap * this._setup.canvasSize[0]);
        return [-variableX, this._positionY, ...this._responsiveSize];
    }
    get secondCanvasParams() {
        let variableX = (this._setup._gameIndex * this._speedRun) % (this._variableGap * this._setup.canvasSize[0]);
        return [-variableX + (this._variableGap * this._setup.canvasSize[0]), this._positionY, ...this._responsiveSize];
    }
}