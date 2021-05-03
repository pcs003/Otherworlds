import Game from "./game";
import HomePage from "./homepage";

export default class GameMenu {
    constructor(mainCanvas, mainCtx, type, worldNum, levelNum, game, setData, unpause, renderGame, renderHome, gameMusic, musicMuted, toggleSoundMuted, getSoundMuted, toggleMusicMuted){
        this.mainCanvas = mainCanvas;
        this.mainCtx = mainCtx;
        
        this.canvas = document.getElementById("canvas-menu");
        
        this.ctx = this.canvas.getContext('2d')
        this.canvas.width = 800;
        this.canvas.height = 500;

        this.active = false;

        this.type = type;
        this.worldNum = worldNum;
        this.levelNum = levelNum;
        this.game = game;
        this.setGameData = setData;
        this.unpause = unpause;
        this.renderGame = renderGame;
        this.renderHome = renderHome;

        this.newBest = false;
        this.time = 0;

        this.gameMusic = gameMusic;
        this.musicMuted = musicMuted;
        this.toggleSoundMuted = toggleSoundMuted;
        this.getSoundMuted = getSoundMuted;
        this.toggleMusicMuted = toggleMusicMuted;

        this.soundOff = new Image();
        this.soundOff.src = 'dist/images/soundOff.png';
        this.soundOn = new Image();
        this.soundOn.src = 'dist/images/soundOn.png';

        this.menuBlip = new Audio('dist/audio/menuBlip.mp3');
        this.pause = new Audio('dist/audio/pause.mp3')
        this.menuBlip.volume = 0.1;
        this.pause.volume = 0.2;

        this.selected = 1;
        this.submitted = false;


        window.addEventListener("keydown", event => {
            if (this.active) {
                if (event.key == 'w' || event.key == 'ArrowUp') {
                    if (this.selected != 1) {
                        if (!this.getSoundMuted()) this.menuBlip.play();
                        this.selected--;
                        this.render();
                    }
                } else if (event.key == 's' || event.key == 'ArrowDown') {
                    let maxNum = this.type == "pause" ? 3 : 2;
                    if (this.selected != maxNum) {
                        if (!this.getSoundMuted()) this.menuBlip.play();
                        this.selected++;
                        this.render();
                    }
                } else if (event.key == 'Enter') {
                    this.pause.pause();
                    this.pause.currentTime = 0;
                    if (!this.getSoundMuted()) this.pause.play();
                    this.submitted = true;
                } else if (event.key == "Escape" && this.type == "pause") {
                    this.close();
                }
            }
            
        })

        this.canvas.addEventListener('mousedown', (event) => {


            let canvasPos = this.canvas.getBoundingClientRect();
            let mouseX = event.x - canvasPos.left;
            let mouseY = event.y - canvasPos.top;

            if (mouseX > 540 && mouseX < 570 && mouseY > 130 && mouseY < 150) {
                this.toggleSoundMuted();
                this.musicMuted = !this.musicMuted;
                this.render();
            }
        })
        
    }

    setMenuData(type, worldNum, levelNum, newBest, time) {
        this.type = type;
        this.worldNum = worldNum;
        this.levelNum = levelNum;
        this.newBest = newBest;
        this.time = time;
    }

    close() {
        this.active = false;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvas.classList.remove("active")
        this.submitted = false;
    }

    open() {
        this.active = true;
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
                            if (this.worldNum == 2) { //CHANGE THIS WHEN MAKE MORE WORLDS
                                
                                this.renderHome(true);
                                
                            } else {
                                this.setGameData(this.worldNum + 1, 1, this.game);
                                this.renderGame();
                            }
                            
                        } else {
                            this.setGameData(this.worldNum, this.levelNum + 1, this.game);
                            this.renderGame();
                        }
                        
                        
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

        // mute button setup
        this.ctx.fillStyle = "#ffffff";

        if (this.type == "pause") {
            if (this.musicMuted) {
                this.ctx.drawImage(this.soundOff, 540, 130, 30, 20);
            } else {
                this.ctx.drawImage(this.soundOn, 540, 130, 30, 20);
            }
        }
        

        // set menu option font
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
            this.ctx.fillStyle = "rgb(0,0,0)";
            this.ctx.fillRect(200,300,400,100)
            this.ctx.fillStyle = "#ffffff";

            if (this.newBest) {
                // new high score text
                this.ctx.fillStyle = 'rgb(0,255,0)';
                this.ctx.font = "12px 'Press Start 2P'"
                this.ctx.fillText("New Best Time!", 316, 200)

                // reset fillstyle and font
                this.ctx.font = "20px 'Press Start 2P'"
                this.ctx.fillStyle = "#ffffff";
            }
            this.ctx.fillText(`Time: ${(this.time/100).toString()}`, 290, 225)

            this.ctx.fillText("Next Level", 300, 300)
            this.ctx.fillText("Main Menu", 310, 350)

            // draw selected arrows around currently selected option
            if (this.selected == 1) {
                //left arrow
                this.ctx.beginPath();
                this.ctx.moveTo(240, 300);
                this.ctx.lineTo(260, 290);
                this.ctx.lineTo(240, 280);
                this.ctx.closePath();

                this.ctx.lineWidth = 5;
                this.ctx.strokeStyle = '#bf00ff';
                this.ctx.stroke();

                this.ctx.fillStyle = "#ffffff";
                this.ctx.fill();

                // right arrow
                this.ctx.beginPath();
                this.ctx.moveTo(560, 300);
                this.ctx.lineTo(540, 290);
                this.ctx.lineTo(560, 280);
                this.ctx.closePath();

                this.ctx.lineWidth = 5;
                this.ctx.strokeStyle = '#bf00ff';
                this.ctx.stroke();

                this.ctx.fillStyle = "#ffffff";
                this.ctx.fill();
            } else {
                this.ctx.beginPath();
                this.ctx.moveTo(250, 350);
                this.ctx.lineTo(270, 340);
                this.ctx.lineTo(250, 330);
                this.ctx.closePath();

                this.ctx.lineWidth = 5;
                this.ctx.strokeStyle = '#bf00ff';
                this.ctx.stroke();

                this.ctx.fillStyle = "#ffffff";
                this.ctx.fill();

                // right arrow
                this.ctx.beginPath();
                this.ctx.moveTo(550, 350);
                this.ctx.lineTo(530, 340);
                this.ctx.lineTo(550, 330);
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