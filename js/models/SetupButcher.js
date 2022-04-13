class SetupButcher {
    constructor(setup) {
        this._setup = setup;
        this._size = [122, 180];
        this._responsiveSize = [setup.canvasSize[0] * .12 | 0, setup.canvasSize[0] * .15 | 0];
        this._speedRun = Math.round(setup.canvasSize[0] * .003) * 2;
        this._maxCoordinateX = Math.floor(setup.canvasSize[0] / this._speedRun) * this._speedRun;
        this._minCoordinateX = Math.floor(200 / this._speedRun) * this._speedRun;
        this._coordinateY = setup.canvasSize[1] * .9 - this._responsiveSize[1] | 0;
    }
    get context() {
        return this._setup.context;
    }
    get textureParams() {
        let motion = Math.floor((this._setup._gameIndex % 15) / 5) * this._size[0];
        return [this._setup.texture, motion, 538, ...this._size];
    }
    get canvasParams() {
        let variableCoordinateX = (this._setup._gameIndex * this._speedRun) % (this._maxCoordinateX + this._minCoordinateX);
        return [-variableCoordinateX + this._maxCoordinateX, this._coordinateY, ...this._responsiveSize];
    }
}