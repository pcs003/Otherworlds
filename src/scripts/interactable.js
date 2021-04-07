const BUFFER_X = 17;
const BUFFER_Y = 30;

export default class Interactable {
    constructor(canvas, ctx, x, y, height, width) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    isCollidingX(xPos, yPos) {
        if (xPos + BUFFER_X > this.x && xPos - BUFFER_X < this.x + this.width && yPos + BUFFER_Y - 6 > this.y && yPos - BUFFER_Y + 6 < this.y + this.height) {
            return true;
        }
        return false;
    }

    isCollidingY(xPos, yPos) {
        if (yPos + BUFFER_Y > this.y && yPos < this.y + this.height && xPos + BUFFER_X - 6 > this.x && xPos - BUFFER_X + 6 < this.x + this.width) {
            return true;
        }
        return false
    }

    render() {
        this.ctx.fillStyle = "rgba(0,0,0,0)"
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}