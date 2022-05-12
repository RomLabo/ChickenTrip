class SetupEagle {
    constructor(setup) {
        this._setup = setup;
        this._size = [120, 100]; 
        this._responsiveSize = [setup.canvasSize[0] * .2 | 0, setup.canvasSize[1] * .3 | 0];
        this._speedRun = Math.round(setup.canvasSize[0] * .003) * 2;
        this._maxCoordinateX = Math.floor((setup.canvasSize[0] + 200) / this._speedRun) * this._speedRun;
        this._minCoordinateX = Math.floor(200 / this._speedRun) * this._speedRun;
        this._coordinateY = setup.canvasSize[1] * .1 | 0;
        this.variableCoordinateY = 0;
    }
    get context() {
        return this._setup.context;
    }
    get textureParams() {
        let motion = Math.floor((this._setup._gameIndex % 30) / 10) * this._size[0];
        return [this._setup.texture, motion + 400, 472, ...this._size]; 
    }
    get canvasParams() {
        let variableCoordinateX = (this._setup._gameIndex * this._speedRun) % (this._maxCoordinateX + this._minCoordinateX);
        if (variableCoordinateX === 0) {
            this._variableCoordinateY = this._coordinateY * ((this._setup._gameIndex % 8)/2 + 1);
        }
        return [-variableCoordinateX + this._maxCoordinateX, this._variableCoordinateY, ...this._responsiveSize];
    }
}