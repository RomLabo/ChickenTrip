class SetupEnemies {
    constructor(setup) {
        this._setup = setup;
        this._size = [122, 180];
        this._responsiveSize = [setup.canvasSize[0] * .12 | 0, setup.canvasSize[0] * .15 | 0];
        this._positionY = setup.canvasSize[1] * .9 - this._responsiveSize[1] | 0;
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
    get canvasParams() {
        let interval = Math.floor(this._setup.canvasSize[0] / 100) * 100;
        let variableX = (this._setup._gameIndex * this._speedRun) % (interval * this._variableGap);
        console.log(variableX)
        return [-variableX + (interval * 1.5), this._positionY, ...this._responsiveSize];
    }
}