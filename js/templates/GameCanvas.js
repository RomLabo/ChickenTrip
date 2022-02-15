class GameCanvas {
    constructor(image, coordinateX) {
        this.coordinateX = coordinateX;
        this.image = image;

        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.canvasSize = [this.canvas.width, this.canvas.height];
        
        this.backgroundSize = [768, 432];
        this.chickenSize = [65, 65];
        this.chickenResponsiveSize = [this.canvasSize[0] * .07, this.canvasSize[0] * .07];
        this.chickenPositionX = this.canvasSize[0] * .04;
        this.chickenPositionY = this.canvasSize[1] * .8;
        this.chickenVariablePositionY = this.chickenPositionY;
        this.chickenJumpParams = [-this.canvasSize[1] * .04, this.canvasSize[1] * .002]

        this.difficultyLevel = 2;
    }
    jumpAction(jump) {
        this.chickenVariablePositionY = Math.min(this.chickenVariablePositionY + jump, this.chickenPositionY);
        console.log(jump);
        console.log(this.chickenVariablePositionY + jump);
    }
    createBackground() {
        let backgroundMotion = (this.coordinateX * this.difficultyLevel) % this.canvasSize[0];
        this.context.drawImage(this.image, 0, 0, ...this.backgroundSize, - backgroundMotion, 0, ...this.canvasSize);
        this.context.drawImage(this.image, 0, 0, ...this.backgroundSize, - backgroundMotion + this.canvasSize[0], 0, ...this.canvasSize);
    }
    createChicken() {
        let chickenMotion = Math.floor((this.coordinateX % 18) / 6) * this.chickenSize[1];
        this.context.drawImage(this.image, 0, 432 + chickenMotion, ...this.chickenSize, this.chickenPositionX, this.chickenVariablePositionY, ...this.chickenResponsiveSize);                  
    }
}