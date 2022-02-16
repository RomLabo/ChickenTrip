class GameButcher {
    constructor(setting) {
        this.setting = setting;
        this.context = this.setting.context;
        this.canvasSize = this.setting.canvasSize;

        this.butcherSize = [154, 180];
        this.butcherResponsiveSize = [this.canvasSize[0] * .15, this.canvasSize[0] * .18];
        this.butcherPosition = [this.butcherVariablePositionX, this.canvasSize[1] * .55];

        this.butcherVariablePositionX;
    }
    createButcher() {
        let butcherMotion = Math.floor((this.setting.gameIndex % 18) / 6) * this.butcherSize[0];
        let butcherMotionX = (this.setting.gameIndex * this.setting.difficultyLevel) % this.canvasSize[0];
        let butcherTextureParams = [this.setting.texture, butcherMotion, 617, ...this.butcherSize];
        let butcherCanvasFirstParams = [- butcherMotionX, this.butcherPosition[1], ...this.butcherResponsiveSize];
        let butcherCanvasSecondParams = [- butcherMotionX + this.canvasSize[0], this.butcherPosition[1], ...this.butcherResponsiveSize];
        let mathX = (Math.floor(Math.random() * (100 - 1 + 1)) + 1) % 10;
        //console.log(butcherMotionX)
        console.log(Math.floor(- butcherMotionX + this.canvasSize[0]));

        this.context.drawImage(...butcherTextureParams, ...butcherCanvasFirstParams);
        this.context.drawImage(...butcherTextureParams, ...butcherCanvasSecondParams); 
    }
    renderButcher() {
        this.createButcher();
    }
}