class SetupChicken {
    constructor(setup) {
        this._setup = setup;
        this._size = [65, 65]; 
        this._responsiveSize = [setup.canvasSize[1] * .15 | 0, setup.canvasSize[1] * .15 | 0];
        this._speedRun = Math.round(setup.canvasSize[0] * .003) * 2;
    }
    get context() {
        return this._setup.context;
    }
    get textureParams() {
        let motion = Math.floor((this._setup._gameIndex % 12) / 4) * this._size[1];
        return [this._setup.texture, motion, 473, ...this._size]; 
    }
    get responsiveSize() {
        return this._responsiveSize;
    }
    get coordinate() {
        return [this._speedRun * 6, this._setup.canvasSize[1] * .9 - this._responsiveSize[1] | 0]; // this._setup.canvasSize[0] * .04 | 0
    }
    get jumpParams() {
        return [-this._setup.canvasSize[1] * .03, this._setup.canvasSize[1] * .0012]; // * .03, * (.001 || .0015)
    }
}