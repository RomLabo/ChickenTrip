class SetupBonus {
    constructor(setup) {
        this._setup = setup;
        this._size = [80, 80]; 
        this._responsiveSize = [setup.canvasSize[1] * .1 | 0, setup.canvasSize[1] * .1 | 0];
        this._speedRun = Math.round(setup.canvasSize[0] * .003) * 2;
        this._maxCoordinateX = Math.floor((setup.canvasSize[0]*7) / this._speedRun) * this._speedRun;
        this._minCoordinateX = Math.floor(200 / this._speedRun) * this._speedRun;
        this._coordinateY = setup.canvasSize[1] * .15 | 0;
    }
    get context() {
        return this._setup.context;
    }
    get textureParams() {
        let motion = Math.floor((this._setup._gameIndex % 39) / 13) * this._size[0];
        return [this._setup.texture, motion + 320, 600, ...this._size]; 
    }
    get canvasParams() {
        let variableCoordinateX = (this._setup._gameIndex * this._speedRun) % (this._maxCoordinateX + this._minCoordinateX);
        return [-variableCoordinateX + this._maxCoordinateX, this._coordinateY, ...this._responsiveSize];
    }
}