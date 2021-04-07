import Game from "./game";
import HomePage from "./homepage";


export default class GameMenu {
    constructor(mainCanvas, mainCtx, type, worldNum, levelNum, game, setData, unpause, renderGame, renderHome){
        this.mainCanvas = mainCanvas;
        this.mainCtx = mainCtx;
        
        this.canvas = document.getElementById("canvas-menu");
        
        this.ctx = this.canvas.getContext('2d')
        this.canvas.width = 800;
        this.canvas.height = 500;

        this.type = type;
        this.worldNum = worldNum;
        this.levelNum = levelNum;
        this.game = game;
        this.setGameData = setData;
        this.unpause = unpause;
        this.renderGame = renderGame;
        this.renderHome = renderHome;

        this.selected = 1;
        this.submitted = false;


        window.addEventListener("keydown", event => {
            if (event.key == 'w') {
                if (this.selected != 1) {
                    this.selected--;
                    this.render();
                }
            } else if (event.key == 's') {
                let maxNum = this.type == "pause" ? 3 : 2;
                if (this.selected != maxNum) {
                    this.selected++;
                    this.render();
                }
            } else if (event.key == 'Enter') {
                this.submitted = true;
            } else if (event.key == "Escape" && this.type == "pause") {
                this.close();
            }
        })
        
    }

    setMenuData(type, worldNum, levelNum) {
        this.type = type;
        this.worldNum = worldNum;
        this.levelNum = levelNum;
    }

    close() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvas.classList.remove("active")
        this.submitted = false;
    }

    open() {
        this.canvas.classList.add("active")
        this.render();
        const menu = setInterval(() => {
            if (this.submitted) {
                if (this.type == "failed") {
                    if (this.selected == 1) {
                        
                        // this.game = new Game(this.mainCanvas, this.mainCtx, this.worldNum, this.levelNum, this.game)
                        // this.game.render();
                        this.setGameData(this.worldNum, this.levelNum, this.game);
                        this.renderGame();
                    } else if (this.selected == 2) {
                        this.renderHome();
                        
                    }
                } else if (this.type == "complete") {
                    if (this.selected == 1) {
                        if (this.levelNum == 5) {
                            this.setGameData(this.worldNum + 1, 1, this.game);
                        } else {
                            this.setGameData(this.worldNum, this.levelNum + 1, this.game);
                        }
                        
                        this.renderGame();
                    } else if (this.selected == 2) {
                        this.renderHome();
                        
                    }
                } else if (this.type == "pause") {
                    if (this.selected == 1) {
                        this.close();
                        this.unpause();
                    } else if (this.selected == 2) {
                        this.setGameData(this.worldNum, this.levelNum, this.game);
                        this.renderGame();
                    } else if (this.selected == 3) {
                        this.renderHome();
                        
                    }
                }
                this.close();
                clearInterval(menu)
                
            }
            
        }, 10)
    }

    render() {
        // draw menu box
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "rgb(0,0,0)"
        this.ctx.fillRect(200,100,400,200);

        // set menu header font
        this.ctx.font = "24px 'Press Start 2P'"

        // draw menu header
        if (this.type == "failed") {
            this.ctx.fillStyle = "rgb(255,0,0)";
            this.ctx.fillText("Level Failed", 260, 150)
        } else if (this.type == "complete") {
            this.ctx.fillStyle = "rgb(0,255,0)";
            this.ctx.fillText("Level Complete!", 224, 150)
        } else if (this.type == "pause") {
            this.ctx.fillStyle = "rgb(200,87,255)";
            this.ctx.fillText("Pause", 344, 150)
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
        } else if (this.type == "pause") {
            this.ctx.fillStyle = "rgb(0,0,0)";
            this.ctx.fillRect(200,300,400,40)
            this.ctx.fillStyle = "#ffffff";

            this.ctx.fillText("Resume", 344, 200)
            this.ctx.fillText("Restart", 334, 250)
            this.ctx.fillText("Main Menu", 314, 300)

            if (this.selected == 1) {
                this.ctx.beginPath();
                this.ctx.moveTo(274, 200);
                this.ctx.lineTo(294, 190);
                this.ctx.lineTo(274, 180);
                this.ctx.closePath();

                this.ctx.lineWidth = 5;
                this.ctx.strokeStyle = '#bf00ff';
                this.ctx.stroke();

                this.ctx.fillStyle = "#ffffff";
                this.ctx.fill();

                // right arrow
                this.ctx.beginPath();
                this.ctx.moveTo(534, 200);
                this.ctx.lineTo(514, 190);
                this.ctx.lineTo(534, 180);
                this.ctx.closePath();

                this.ctx.lineWidth = 5;
                this.ctx.strokeStyle = '#bf00ff';
                this.ctx.stroke();

                this.ctx.fillStyle = "#ffffff";
                this.ctx.fill();
                
            } else if (this.selected == 2) {
                //left arrow
                this.ctx.beginPath();
                this.ctx.moveTo(264, 250);
                this.ctx.lineTo(284, 240);
                this.ctx.lineTo(264, 230);
                this.ctx.closePath();

                this.ctx.lineWidth = 5;
                this.ctx.strokeStyle = '#bf00ff';
                this.ctx.stroke();

                this.ctx.fillStyle = "#ffffff";
                this.ctx.fill();

                // right arrow
                this.ctx.beginPath();
                this.ctx.moveTo(544, 250);
                this.ctx.lineTo(524, 240);
                this.ctx.lineTo(544, 230);
                this.ctx.closePath();

                this.ctx.lineWidth = 5;
                this.ctx.strokeStyle = '#bf00ff';
                this.ctx.stroke();

                this.ctx.fillStyle = "#ffffff";
                this.ctx.fill();
            } else {
                console.log(this.selected)
                this.ctx.beginPath();
                this.ctx.moveTo(234, 300);
                this.ctx.lineTo(254, 290);
                this.ctx.lineTo(234, 280);
                this.ctx.closePath();

                this.ctx.lineWidth = 5;
                this.ctx.strokeStyle = '#bf00ff';
                this.ctx.stroke();

                this.ctx.fillStyle = "#ffffff";
                this.ctx.fill();

                // right arrow
                this.ctx.beginPath();
                this.ctx.moveTo(574, 300);
                this.ctx.lineTo(554, 290);
                this.ctx.lineTo(574, 280);
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