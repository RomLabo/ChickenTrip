class SetupEnemies {
    constructor(setup) {
        this._setup = setup;
        this._size = [122, 180];
        this._secondeSize = [180, 152];
        this._responsiveSize = [setup.canvasSize[0] * .12 | 0, setup.canvasSize[0] * .15 | 0];
        this._positionY = setup.canvasSize[1] * .9 - this._responsiveSize[1] | 0;
        this._secondePositionY = setup.canvasSize[1] * .3 - this._responsiveSize[1] | 0;
        this._speedRun = setup.difficultyLevel * 2;
        this._variableGap = 2;
    }
    get context() {
        return this._setup.context;
    }
    get textureParams() {
        let motion = Math.floor((this._setup._gameIndex % 15) / 5) * this._size[0];
        let secondeMotion = Math.floor((this._setup._gameIndex % 18) / 9) * this._secondeSize[0];
        return [[this._setup.texture, motion, 617, ...this._size],
        [this._setup.texture, secondeMotion + 400, 617, ...this._secondeSize]];
    }
    get positionY() {
        return this._positionY;
    }
    get canvasParams() {
        let interval = Math.floor(this._setup.canvasSize[0] / this._speedRun) * this._speedRun;
        let variableX = (this._setup._gameIndex * this._speedRun) % (this._variableGap * interval);
        return [[-variableX + interval, this._positionY, ...this._responsiveSize],
        [-variableX + interval + 200, this._secondePositionY, ...this._responsiveSize]];
    }
}