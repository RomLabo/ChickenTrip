class SetupEagle {
    constructor(setup) {
        this._setup = setup;
        this._size = [180, 152];
        this._responsiveSize = [setup.canvasSize[0] * .2 | 0, setup.canvasSize[0] * .15 | 0];
        this._coordinateY = setup.canvasSize[1] * .3 - this._responsiveSize[1] | 0;
        this._speedRun = setup.difficultyLevel * 2;
        this._maxCoordinateX = Math.floor((this._setup.canvasSize[0] + 200) / this._speedRun) * this._speedRun;
        this._minCoordinateX = Math.floor(200 / this._speedRun) * this._speedRun;
        this._pos = 1;
        this._variableCoordinateY = 0;
    }
    get context() {
        return this._setup.context;
    }
    get textureParams() {
        let motion = Math.floor((this._setup._gameIndex % 18) / 9) * this._size[0];
        return [this._setup.texture, motion + 400, 538, ...this._size];
    }
    get coordinateY() {
        return this._coordinateY;
    }
    get canvasParams() {
        let variableCoordinateX = (this._setup._gameIndex * this._speedRun) % (this._maxCoordinateX + this._minCoordinateX);
        if (variableCoordinateX === 0) {
            this._variableCoordinateY = (Math.floor(Math.random() * (10 - 1 +1)) + 1) * 10;
            console.log(this._variableCoordinateY)
        }
        return [-variableCoordinateX + this._maxCoordinateX, this._variableCoordinateY, ...this._responsiveSize];
    }
}