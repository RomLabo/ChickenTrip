class GameButcher {
    constructor(setting) {
        this.setting = setting;
        this.context = this.setting.context;
        this.canvasSize = this.setting.canvasSize;

        this.butcherVariablePositionX = this.canvasSize[0];
        this.butcherSize = [154, 180];
        this.butcherResponsiveSize = [this.canvasSize[0] * .15, this.canvasSize[0] * .18];
        this.butcherPosition = [0, this.canvasSize[1] * .55];
        this.variablePosY = this.butcherPosition[1];

        this.difficulty = this.setting.difficultyLevel;
        
    }
    createButcher() {
        let butcherMotion = Math.floor((this.setting.gameIndex % 18) / 6) * this.butcherSize[0];
        let butcherMotionX = (this.setting.gameIndex * this.difficulty) % this.canvasSize[0];
        let butcherTextureParams = [this.setting.texture, butcherMotion, 617, ...this.butcherSize];
        
        let butcherCanvasFirstParams = [- butcherMotionX, this.butcherPosition[1], ...this.butcherResponsiveSize];
        let butcherCanvasSecondParams = [- butcherMotionX + this.canvasSize[0], this.butcherPosition[1], ...this.butcherResponsiveSize];
        let variablePos = Math.floor(this.setting.gameIndex % (this.canvasSize[0] * 2));
        
        //console.log(variablePos)
        switch (true) {
            case variablePos === 870:
                this.difficulty += 2;
                break;
            case variablePos === 1125:
                this.difficulty -= 2;
                break;
            default:
                console.log(this.difficulty)
        }
        this.context.drawImage(...butcherTextureParams, ...butcherCanvasFirstParams);
        this.context.drawImage(...butcherTextureParams, ...butcherCanvasSecondParams);
    }
    renderButcher() {
        this.createButcher();
    }
}