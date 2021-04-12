

export default class LevelText {
    constructor(canvas, ctx, message, x, y) {
        this.mainCanvas = canvas
        this.mainCtx = ctx;

        this.canvas = document.getElementById("canvas-text");
        this.ctx = this.canvas.getContext('2d')
        this.canvas.width = 800;
        this.canvas.height = 500;

        this.message = message;
        this.x = x;
        this.y = y;
        this.textColor = 'rgba(255,255,255,1)';
        this.bgColor = 'rgba(0,0,0,0.6)'

        let words = this.message.split(" ")
        let len = words.length;
        this.segments = [];
        let count = 0;
        let segment = [];
        for (let i = 0; i < len; i++) {
            count += words[i].length;
            if (count <= 30) {
                segment.push(words[i]);
            } else {
                this.segments.push(segment);
                segment = [];
                count = 0;
                i--;
            }
            count++;
        }
        this.segments.push(segment)
        this.y = this.canvas.height/2 - this.segments.length * 8;
    }

    fadeIn() {
        setTimeout( () => {
            clearInterval(fadeInLoop)
            this.render();
            setTimeout(() => {
                this.fadeOut();
            }, 3000)
        }, 1000)
        let count = 0;
        let fadeInLoop = setInterval(() => {
            count++;
            let textOpacity = count / 100;
            let bgOpacity = count * 0.6 / 100;
            this.textColor = `rgba(255,255,255,${textOpacity})`;
            this.bgColor = `rgba(0,0,0,${bgOpacity})`
            this.render();
        }, 10)
    }

    fadeOut() {
        setTimeout( () => {
            clearInterval(fadeOutLoop)
            this.close();
        }, 1000)
        let count = 0;
        let fadeOutLoop = setInterval(() => {
            count++;
            let textOpacity = 1 - (count / 100);
            let bgOpacity = 0.6 - (count * 0.6 / 100);
            this.textColor = `rgba(255,255,255,${textOpacity})`;
            this.bgColor = `rgba(0,0,0,${bgOpacity})`
            this.render();
        }, 10)
        
    }

    open() {
        this.canvas.classList.add("active")
        this.fadeIn();
    }

    close() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvas.classList.remove("active")
    }

    render() {
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // darken background
        this.ctx.fillStyle = "rgb(0,0,0,0.6)"
        this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height)

        this.ctx.fillStyle = this.textColor;
        this.ctx.font = "16px 'Press Start 2P'"

        
        for (let i = 0; i < this.segments.length; i++ ) {
            let line = this.segments[i].join(" ")
            let offset = (480 - line.length * 16)/2;
            this.ctx.fillText(line, this.x + offset, this.y + (i * 30), 480);
        }
            
    }
}