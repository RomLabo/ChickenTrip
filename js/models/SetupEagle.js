class SetupEagle {
    constructor(setup) {
        this._setup = setup;
        this._size = [180, 152];
        this._responsiveSize = [setup.canvasSize[0] * .2 | 0, setup.canvasSize[0] * .15 | 0];
        this._positionY = setup.canvasSize[1] * .3 - this._responsiveSize[1] | 0;
        this._speedRun = setup.difficultyLevel * 2;
        this._variableGap = 2;
    }
    get context() {
        return this._setup.context;
    }
    get textureParams() {
        let motion = Math.floor((this._setup._gameIndex % 18) / 9) * this._size[0];
        return [this._setup.texture, motion + 400, 617, ...this._size];
    }
    get positionY() {
        return this._positionY;
    }
    get canvasParams() {
        let interval = Math.floor(this._setup.canvasSize[0] / this._speedRun) * this._speedRun;
        let variableX = (this._setup._gameIndex * this._speedRun) % (this._variableGap * interval);
        return [[-variableX + interval + 200, this._positionY, ...this._responsiveSize],
            [-variableX + interval + 400, this._positionY + 50, ...this._responsiveSize]];
    }
}