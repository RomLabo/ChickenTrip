class SetupChicken {
    constructor(setup) {
        this._setup = setup;
        this._size = [65, 65];
        this._responsiveSize = [setup.canvasSize[0] * .07 | 0, setup.canvasSize[0] * .07 | 0];
        this._position = [setup.canvasSize[0] * .04 | 0, setup.canvasSize[1] * .77 | 0];
    }
    get context() {
        return this._setup.context;
    }
    get textureParams() {
        let motion = Math.floor((this._setup._gameIndex % 12) / 4) * this._size[1];
        return [this._setup.texture, motion, 553, ...this._size];
    }
    get responsiveSize() {
        return this._responsiveSize;
    }
    get position() {
        return this._position;
    }
    get jumpParams() {
        return [-this._setup.canvasSize[1] * .03, this._setup.canvasSize[1] * .001];
    }
    get crashParams() {
        return [this._position[0] + this._responsiveSize[0], this._responsiveSize[1]];
    }
}