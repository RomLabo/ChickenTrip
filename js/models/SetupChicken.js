class SetupChicken {
    constructor(setup) {
        this._setup = setup;
        this._size = [45, 45]; // 65, 65
        this._responsiveSize = [setup.canvasSize[0] * .07 | 0, setup.canvasSize[0] * .07 | 0];
    }
    get context() {
        return this._setup.context;
    }
    get textureParams() {
        let motion = Math.floor((this._setup._gameIndex % 12) / 4) * this._size[1];
        return [this._setup.texture, motion, 315, ...this._size]; // 473
    }
    get responsiveSize() {
        return this._responsiveSize;
    }
    get coordinate() {
        return [this._setup.canvasSize[0] * .04 | 0, this._setup.canvasSize[1] * .9 - this._responsiveSize[1] | 0];
    }
    get jumpParams() {
        return [-this._setup.canvasSize[1] * .03, this._setup.canvasSize[1] * .0012]; // * .03, * (.001 || .0015)
    }
}