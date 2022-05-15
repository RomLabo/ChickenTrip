class GameTempGate {
    constructor(setup) {
        this.setup = setup;
        this.isTeleportation = 0;
    }
    drawCharacter() {
        this.setup.context.drawImage(...this.setup.textureParams, ...this.setup.canvasParams);
    }
    detectTeleportation(chickenCoordinates) {
        let coordinates = [this.setup.canvasParams[0], this.setup.canvasParams[1]];
        if ((chickenCoordinates[0] === coordinates[0]) 
            && (chickenCoordinates[2] >= coordinates[1])) {
                    this.isTeleportation = this.isTeleportation === 1 ? 0 : 1;
        }
    }
    render(chickenCoordinates) {
        this.drawCharacter();
        this.detectTeleportation(chickenCoordinates);
    }
}