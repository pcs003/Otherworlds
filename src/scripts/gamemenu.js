import Game from "./game";
import HomePage from "./homepage";


export default class GameMenu {
    constructor(canvas, ctx, type, worldNum, levelNum, game){
        this.canvas = canvas
        this.ctx = ctx;
        this.type = type;
        this.worldNum = worldNum;
        this.levelNum = levelNum;
        this.game = game;

        this.selected = 1;
        this.submitted = false;

        window.addEventListener("keydown", event => {
            console.log(this.selected)
            if (event.key == 'w') {
                if (this.selected != 1) {
                    this.selected--;
                }
            } else if (event.key == 's') {
                if (this.selected != 2) {
                    this.selected++;
                }
            } else if (event.key == 'Enter') {
                this.submitted = true;
            }
        })
    }

    open() {
        const menu = setInterval(() => {
            if (this.submitted) {
                if (this.type == "failed") {
                    if (this.selected == 1) {
                        this.game = new Game(this.canvas, this.ctx, this.worldNum, this.levelNum, this.game)
                        this.game.render();
                    } else if (this.selected == 2) {
                        console.log("here")
                        new HomePage(this.canvas, this.ctx, this.game).render();
                        
                    }
                } else if (this.type == "complete") {
                    if (this.selected == 1) {
                        this.game = new Game(this.canvas, this.ctx, this.worldNum, this.levelNum + 1, this.game)
                        this.game.render();
                    } else if (this.selected == 2) {
                        console.log("here")
                        new HomePage(this.canvas, this.ctx, this.game).render();
                        
                    }
                }
                clearInterval(menu)
                
            }
            this.render();
        }, 10)
    }

    render() {
        // draw menu box
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "rgb(0,0,0)"
        this.ctx.fillRect(200,100,400,200);

        // set menu header font
        this.ctx.fillStyle = "rgb(255,0,0)";
        this.ctx.font = "24px 'Press Start 2P'"

        // draw menu header
        if (this.type == "failed") {
            this.ctx.fillText("Level Failed", 260, 150)
        } else if (this.type == "complete") {
            this.ctx.fillText("Level Complete!", 225, 150)
        }

        // set menu option font
        this.ctx.fillStyle = "#ffffff";
        this.ctx.font = "20px 'Press Start 2P'"
        
        // draw menu options and arrows
        if (this.type == "failed") {
            this.ctx.fillText("Retry", 360, 200)
            this.ctx.fillText("Main Menu", 320, 250)

            // draw selected arrows around currently selected option
            if (this.selected == 1) {
                //left arrow
                this.ctx.beginPath();
                this.ctx.moveTo(300, 200);
                this.ctx.lineTo(320, 190);
                this.ctx.lineTo(300, 180);
                this.ctx.closePath();

                this.ctx.lineWidth = 5;
                this.ctx.strokeStyle = '#bf00ff';
                this.ctx.stroke();

                this.ctx.fillStyle = "#ffffff";
                this.ctx.fill();

                // right arrow
                this.ctx.beginPath();
                this.ctx.moveTo(520, 200);
                this.ctx.lineTo(500, 190);
                this.ctx.lineTo(520, 180);
                this.ctx.closePath();

                this.ctx.lineWidth = 5;
                this.ctx.strokeStyle = '#bf00ff';
                this.ctx.stroke();

                this.ctx.fillStyle = "#ffffff";
                this.ctx.fill();
            } else {
                this.ctx.beginPath();
                this.ctx.moveTo(260, 250);
                this.ctx.lineTo(280, 240);
                this.ctx.lineTo(260, 230);
                this.ctx.closePath();

                this.ctx.lineWidth = 5;
                this.ctx.strokeStyle = '#bf00ff';
                this.ctx.stroke();

                this.ctx.fillStyle = "#ffffff";
                this.ctx.fill();

                // right arrow
                this.ctx.beginPath();
                this.ctx.moveTo(560, 250);
                this.ctx.lineTo(540, 240);
                this.ctx.lineTo(560, 230);
                this.ctx.closePath();

                this.ctx.lineWidth = 5;
                this.ctx.strokeStyle = '#bf00ff';
                this.ctx.stroke();

                this.ctx.fillStyle = "#ffffff";
                this.ctx.fill();
            }
        } else if (this.type == "complete") {
            this.ctx.fillText("Next Level", 300, 200)
            this.ctx.fillText("Main Menu", 310, 250)

            // draw selected arrows around currently selected option
            if (this.selected == 1) {
                //left arrow
                this.ctx.beginPath();
                this.ctx.moveTo(240, 200);
                this.ctx.lineTo(260, 190);
                this.ctx.lineTo(240, 180);
                this.ctx.closePath();

                this.ctx.lineWidth = 5;
                this.ctx.strokeStyle = '#bf00ff';
                this.ctx.stroke();

                this.ctx.fillStyle = "#ffffff";
                this.ctx.fill();

                // right arrow
                this.ctx.beginPath();
                this.ctx.moveTo(560, 200);
                this.ctx.lineTo(540, 190);
                this.ctx.lineTo(560, 180);
                this.ctx.closePath();

                this.ctx.lineWidth = 5;
                this.ctx.strokeStyle = '#bf00ff';
                this.ctx.stroke();

                this.ctx.fillStyle = "#ffffff";
                this.ctx.fill();
            } else {
                this.ctx.beginPath();
                this.ctx.moveTo(250, 250);
                this.ctx.lineTo(270, 240);
                this.ctx.lineTo(250, 230);
                this.ctx.closePath();

                this.ctx.lineWidth = 5;
                this.ctx.strokeStyle = '#bf00ff';
                this.ctx.stroke();

                this.ctx.fillStyle = "#ffffff";
                this.ctx.fill();

                // right arrow
                this.ctx.beginPath();
                this.ctx.moveTo(550, 250);
                this.ctx.lineTo(530, 240);
                this.ctx.lineTo(550, 230);
                this.ctx.closePath();

                this.ctx.lineWidth = 5;
                this.ctx.strokeStyle = '#bf00ff';
                this.ctx.stroke();

                this.ctx.fillStyle = "#ffffff";
                this.ctx.fill();
            }
        }
        
    }
}