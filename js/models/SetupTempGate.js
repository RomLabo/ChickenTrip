class SetupTempGate {
    constructor(setup) {
        this._setup = setup;
        this._size = [60, 100]; 
        this._responsiveSize = [setup.canvasSize[1] * .21 | 0, setup.canvasSize[1] * .42 | 0];
        this._speedRun = Math.round(setup.canvasSize[0] * .003) * 2;
        this._maxCoordinateX = Math.floor((setup.canvasSize[0]*10) / this._speedRun) * this._speedRun;
        this._minCoordinateX = Math.floor(200 / this._speedRun) * this._speedRun;
        this._coordinateY = setup.canvasSize[1] - this._responsiveSize[1] | 0;
    }
    get context() {
        return this._setup.context;
    }
    get textureParams() {
        let motion = Math.floor((this._setup._gameIndex % 27) / 9) * this._size[0];
        return [this._setup.texture, motion + 588, 580, ...this._size]; 
    }
    get canvasParams() {
        let variableCoordinateX = (this._setup._gameIndex * this._speedRun) % (this._maxCoordinateX + this._minCoordinateX);
        return [-variableCoordinateX + this._maxCoordinateX, this._coordinateY, ...this._responsiveSize];
    }
}