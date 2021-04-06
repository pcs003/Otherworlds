

export default class InteractableImage {
    constructor(canvas, ctx, url, x, y, width, height) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.url = url;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.img = new Image();
        
    }

    render() {
        this.img.src = this.url;
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}