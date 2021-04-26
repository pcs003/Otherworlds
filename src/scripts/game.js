import Interactable from './interactable'
import GameMenu from './gamemenu'
import Exit from './exit'

import { LevelData } from './leveldata'
import InteractableImage from './interactableImage'
import LevelText from './levelText'
import WeakPlatform from './weakPlatform'

export default class Game {
    constructor(canvas, ctx, worldNum, levelNum, game, renderHome, gameMusic, musicMuted, toggleSoundMuted, getSoundMuted, toggleMusicMuted) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.worldNum = worldNum;
        this.levelNum = levelNum;
        this.game = game;
        this.renderHome = renderHome;
        this.gameMusic = gameMusic;
        this.musicMuted = musicMuted;
        this.toggleSoundMuted = toggleSoundMuted;
        this.getSoundMuted = getSoundMuted;
        this.toggleMusicMuted = toggleMusicMuted;
        this.showControls = false;
        this.frameNum = 0;
        this.levelTime = 6000;
        this.paused = false;
        this.menu = new GameMenu(this.canvas, this.ctx, "failed",this.worldNum, this.levelNum, this.game, this.setData.bind(this), this.togglePause.bind(this), this.render.bind(this), this.renderHome, this.gameMusic, this.musicMuted, this.toggleSoundMuted, this.getSoundMuted, this.toggleSoundMuted);
        
        this.active = false;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // get seed data for current level
        this.levelData = LevelData[this.worldNum - 1][this.levelNum - 1]

        this.VELOCITY_X = 3;
        this.GRAVITY = this.levelData.gravity;
        
        this.Player = {
            velocity: [0,0],
            isJumping: false,
            canJump: false,
            x: this.levelData.playerStartPos[0],
            y: this.levelData.playerStartPos[1],
            width: 34,
            height: 60,
            frameNum: 0,
            faceRight: true,
            moving: false,
            collidingX: false,
            collidingY: false,
            grounded: false,
            collisionsurfaceY: 0
        }

        this.pauseSound = new Audio('dist/audio/pause.mp3')
        this.pauseSound.volume = 0.2;

        // player movement sounds
        this.jumpSound = new Audio('dist/audio/jumpSound.mp3')
        this.jumpSound.volume = 0.6;
        this.footstep = new Audio('dist/audio/footstep.mp3')
        this.footstep.volume = 0.6;

        this.worldBGs = [
            'dist/images/mainpage_bg.png',
            'dist/images/world2BG.png',
        ]

        this.playerSprite = new Image();

        this.portalFrame = 0;
        this.portalSprite = new Image();

        // set exit location
        this.exit = new Exit(this.canvas, this.ctx, this.levelData.finishPos[0],this.levelData.finishPos[1],70,70, this.levelNum, this.worldNum);

        // set interactables for this stage from seed data
        this.interactables = [];
        this.images = [];
        this.levelData.interactables.forEach(interactable => {
            this.interactables.push(new Interactable(this.canvas, this.ctx, interactable.x, interactable.y, interactable.height, interactable.width));
            if (interactable.imgUrl.length > 0) {
                this.images.push(new InteractableImage(this.canvas, this.ctx, interactable.imgUrl,interactable.x,interactable.y - interactable.yOffset,interactable.width,interactable.imgHeight));
            }
        })

        this.levelText = "";
        if (this.levelData.levelText) {
            this.levelText = new LevelText(this.canvas, this.ctx, this.levelData.levelText, 160,200)
        }

        window.addEventListener('keydown', event => {
            if (event.key == 'd' || event.key == 'ArrowRight') {
                
                this.Player.velocity[0] = this.VELOCITY_X;
                this.Player.moving = true;
                this.Player.faceRight = true;
            } else if (event.key == 'a' || event.key == 'ArrowLeft') {
                this.Player.velocity[0] = -this.VELOCITY_X;
                this.Player.moving = true;
                this.Player.faceRight = false;
            } else if (event.key == ' ') {
                if (event.target == document.body) {
                    event.preventDefault();
                }
                if (this.Player.grounded && !this.Player.isJumping) {
                    if (!this.getSoundMuted()) this.jumpSound.play();
                    this.Player.velocity[1] -= 5;
                    this.Player.isJumping = true;
                    this.Player.grounded = false;
                    setTimeout(() => {
                        this.Player.isJumping = false
                    }, 60)
                }
                
            } else if (event.key == "Escape" && this.active) {
                this.pauseSound.pause();
                this.pauseSound.currentTime = 0;
                if (!this.getSoundMuted()) this.pauseSound.play();
                this.togglePause();
            }
        })
        window.addEventListener('keyup', event => {
            if (event.key == 'd' || event.key == 'ArrowRight') {
                this.Player.velocity[0] = 0;
                this.Player.moving = false;
            } else if (event.key == 'a' || event.key == 'ArrowLeft') {
                this.Player.velocity[0] = 0;
                this.Player.moving = false;
            } else if (event.key == ' ') {
                if (event.target == document.body) {
                    event.preventDefault();
                }
                this.Player.isJumping = false
            }
        })
        this.moveListener = event => {
            let canvasPos = this.canvas.getBoundingClientRect();
            let mouseX = event.x - canvasPos.left;
            let mouseY = event.y - canvasPos.top;

            if (mouseX > 0 && mouseX < 125 && mouseY > 0 && mouseY < 45) {
                this.showControls = true;
            } else {
                this.showControls = false;
            }
        }
        this.canvas.addEventListener('mousemove', this.moveListener);
    }

    setGame(newGame) {
        this.game = newGame;
    }

    setInactive(){
        this.active = false;
    }

    setData(worldNum, levelNum, game) {
        this.worldNum = worldNum;
        this.levelNum = levelNum;
        this.game = game;

        this.active = true;

        this.frameNum = 0;
        this.levelTime = 6000;
        this.paused = false;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // get seed data for current level
        this.levelData = LevelData[this.worldNum - 1][this.levelNum - 1]

        this.VELOCITY_X = 3;
        this.GRAVITY = this.levelData.gravity;
        
        this.Player = {
            velocity: [0,0],
            isJumping: false,
            canJump: false,
            x: this.levelData.playerStartPos[0],
            y: this.levelData.playerStartPos[1],
            width: 34,
            height: 60,
            frameNum: 0,
            faceRight: true,
            moving: false,
            collidingX: false,
            collidingY: false,
            grounded: false,
            collisionsurfaceY: 0
        }

        this.portalFrame = 0;

        // set exit location
        this.exit = new Exit(this.canvas, this.ctx, this.levelData.finishPos[0],this.levelData.finishPos[1],50,50, this.levelNum, this.worldNum);

        // set interactables for this stage from seed data
        this.interactables = [];
        this.images = [];
        this.levelData.interactables.forEach(interactable => {
            if (interactable.weak) {
                this.interactables.push(new WeakPlatform(this.canvas, this.ctx, interactable.x, interactable.y, interactable.height, interactable.width, interactable.duration, interactable.imgUrl, this.GRAVITY));
            } else {
                this.interactables.push(new Interactable(this.canvas, this.ctx, interactable.x, interactable.y, interactable.height, interactable.width));
                if (interactable.imgUrl.length > 0) {
                    this.images.push(new InteractableImage(this.canvas, this.ctx, interactable.imgUrl,interactable.x,interactable.y - interactable.yOffset,interactable.width,interactable.imgHeight));
                }
            }
            
            
        })

        this.levelText = "";
        if (this.levelData.levelText) {
            this.levelText = new LevelText(this.canvas, this.ctx, this.levelData.levelText, 160,200)
        }
    }

    
    togglePause(){
        this.paused = !this.paused;
        
        if (this.paused == false) {
            this.render(true);
        }
    }

    drawPlayer(img, x, y, width, height) {
        this.ctx.drawImage(img, x, y, width, height)
    }

    incrementDeathCount() {
        let deathCount = window.localStorage.getItem(`${this.worldNum}-${this.levelNum} death count`);
        if (deathCount == null) {
            window.localStorage.setItem(`${this.worldNum}-${this.levelNum} death count`, 1)
        } else {
            window.localStorage.setItem(`${this.worldNum}-${this.levelNum} death count`, parseInt(deathCount) + 1)
        }
    }

    checkBestTime() {
        let current = window.localStorage.getItem(`${this.worldNum}-${this.levelNum} best time`);

        if (current == null) {
            window.localStorage.setItem(`${this.worldNum}-${this.levelNum} best time`, this.levelTime);
            return true;
        } else {
            if (this.levelTime > current) {
                window.localStorage.setItem(`${this.worldNum}-${this.levelNum} best time`, this.levelTime);
                return true;
            }
        }
        return false;
    }

    clearLevelText() {
        if (this.levelText != "") {
            this.levelText.stopText();
        }
    }

    gameOver(gameLoop) {
        this.clearLevelText();

        this.interactables = [];
        clearInterval(gameLoop);

        this.incrementDeathCount();

        this.active = false;
        this.menu.setMenuData("failed",this.worldNum, this.levelNum);
        this.menu.open();
    }

    levelComplete(gameLoop) {
        this.clearLevelText();
        // set new levelsCompleted localStorage variable
        this.active = false;
        let current = window.localStorage.getItem("levelsCompleted");
        if (current) {
            window.localStorage.setItem("levelsCompleted", parseInt(current) + 1);
        } else {
            window.localStorage.setItem("levelsCompleted", 1);
        }

        // animation at end of level 5
        if (this.levelNum == 5) {
            this.level5Animation(gameLoop);
            
        } else {
            this.interactables = [];
            clearInterval(gameLoop)
            let newBest = this.checkBestTime();
            this.menu.setMenuData("complete",this.worldNum, this.levelNum, newBest, this.levelTime);
            this.menu.open();
        }
        
        
    }

    pauseGame(gameLoop) {
        clearInterval(gameLoop)
        this.menu.setMenuData("pause",this.worldNum, this.levelNum);
        this.menu.open();
    }
    
    render(skip = false){
        if (this.levelText != "" && !skip) {    
            this.levelText.open()
        }
        this.canvas.style.backgroundImage = `url(${this.worldBGs[this.worldNum - 1]})`
        const gameLoop = setInterval(() => {
            if (this.paused) {
                this.pauseGame(gameLoop);
            }
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = "rgb(0,0,0)"

            if (this.Player.y > 500 || this.levelTime <= 99) {
                this.gameOver(gameLoop)
            }
    
            // draw exit
            this.exit.render(this.frameNum);

            // draw images
            this.images.forEach(image => {
                image.render();
            })

            // draw player
            this.drawPlayer(this.playerSprite, this.Player.x, this.Player.y, this.Player.width, this.Player.height)


            // handle player frame image
            if (this.Player.moving) {
                if (this.Player.grounded) {
                    if (!this.getSoundMuted()) this.footstep.play();
                    var currFrame = Math.floor(this.Player.frameNum / 10)
                    if (this.Player.faceRight) { 
                        if (currFrame == 0 || currFrame == 2) {
                            this.playerSprite.src = "dist/images/runRightFrame1.png"
                        } else if (currFrame == 1) {
                            this.playerSprite.src = "dist/images/runRightFrame2.png"
                        } else if (currFrame == 3) {
                            this.playerSprite.src = "dist/images/runRightFrame3.png"
                        }
                    } else {
                        if (currFrame == 0 || currFrame == 2) {
                            this.playerSprite.src = "dist/images/runLeftFrame1.png"
                        } else if (currFrame == 1) {
                            this.playerSprite.src = "dist/images/runLeftFrame2.png"
                        } else if (currFrame == 3) {
                            this.playerSprite.src = "dist/images/runLeftFrame3.png"
                        }
                    }  
                } else {
                    if (this.Player.faceRight) {
                        this.playerSprite.src = "dist/images/runRightFrame2.png"
                    } else {
                        this.playerSprite.src = "dist/images/runLeftFrame2.png"
                    }
                }
            } else {
                if (this.frameNum % 40 > 20) {
                    this.playerSprite.src = "dist/images/idleFrame.png"
                } else {
                    this.playerSprite.src = "dist/images/idleFrame2.png"
                }
                
            }
    

    
            // handle player obstacle collision
            this.Player.collidingX = false;
            this.Player.collidingY = false;
            this.Player.grounded = false;
            this.interactables.forEach(interactable => {
                interactable.render();
                if (interactable.isCollidingX(this.Player.x + this.Player.width/2 + this.Player.velocity[0], this.Player.y + this.Player.height/2 + this.Player.velocity[1])) {
                    this.Player.collidingX = true;
                }
    
                if (interactable.isCollidingY(this.Player.x + this.Player.width/2 + this.Player.velocity[0], this.Player.y + this.Player.height/2 + this.Player.velocity[1])) {
                    if (interactable.fall && !interactable.isFalling) {
                        interactable.fall();
                    }
                    this.Player.collidingY = true;
                    this.Player.grounded = true;
                    this.Player.collisionsurfaceY = interactable.y;
                    
                }
            })

            // handle player level finish 
            if (this.exit.isCollidingX(this.Player.x + this.Player.width/2 + this.Player.velocity[0], this.Player.y + this.Player.height/2 + this.Player.velocity[1]) ||
                this.exit.isCollidingY(this.Player.x + this.Player.width/2 + this.Player.velocity[0], this.Player.y + this.Player.height/2 + this.Player.velocity[1])) {

                    this.levelComplete(gameLoop);
            }
    
            // handle player movement base on player collision
            if (!this.Player.collidingX) {
                this.Player.x += this.Player.velocity[0];
            } else {
                this.Player.velocity[1] = 0;
            }
            if (!this.Player.collidingY) {
                this.Player.velocity[1] -= this.GRAVITY;
                this.Player.y += this.Player.velocity[1];    
            } else {
                this.Player.y = this.Player.collisionsurfaceY - 59;
                this.Player.velocity[1] = 0;
            }
    
            if (this.Player.isJumping) {
                this.Player.velocity[1] -= this.GRAVITY;
                this.Player.y += this.Player.velocity[1];
            }

            
    
            this.ctx.fillStyle = '#ffffff';
            this.ctx.font = "24px 'Press Start 2P'"

            //level info 
            this.ctx.fillText(`${this.worldNum}-${this.levelNum}`, 364, 50);

            // timer
            this.levelTime--;
            this.ctx.fillText(Math.floor(this.levelTime/100).toString(), 700, 50);
    
            // controls hover
            this.ctx.fillStyle = "#ffffff";
            this.ctx.font = "12px 'Press Start 2P'"
            this.ctx.fillText('controls', 20, 30)
            if (this.showControls) {
                this.ctx.fillStyle = 'rgba(0,0,0,0.7)'
                this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height)

                this.ctx.fillStyle = '#ffffff'
                this.ctx.font = "20px 'Press Start 2P'"
                this.ctx.fillText('WASD - Move', 290, 170)
                this.ctx.fillText('Space - Jump', 270, 210)
                this.ctx.fillText('Esc - Pause', 310, 250)
                this.ctx.font = "12px 'Press Start 2P'"
                this.ctx.fillText('Useful Tip: Holding the arrow key in the direction of', 90, 310)
                this.ctx.fillText('a wall while colliding with it will slow your fall', 110, 330)
            }
    
            this.Player.frameNum = (this.Player.frameNum + 1) % 40
            this.portalFrame = (this.portalFrame + 1) % 80;

            this.frameNum++;
        }, 10)
        
    
        
    }

    // animations

    level5Animation(gameLoop) {
        clearInterval(gameLoop);
        setTimeout( () => {
            this.interactables = [];
            clearInterval(finishWorld)
            let newBest = this.checkBestTime();
            this.menu.setMenuData("complete",this.worldNum, this.levelNum, newBest, this.levelTime);
            this.menu.open();
        }, 4000)
        this.Player.x = 469;
        this.Player.y = 221;
        let count = 0;
        let exitX = 500;
        let exitY = 180;
        let exitW = 60;
        let exitH = 80;
        let finishWorld = setInterval(() => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            count++;

            // draw exit
            
            if (count < 100) {
                exitX += 0.6;
                exitY -= 0.4;
                this.exit.render(count, exitX, exitY, exitW, exitH);
            } else if (count < 200) {
                exitX -= 0.3;
                exitY -= 0.4;
                exitW += 0.6;
                exitH += 0.8;
                this.exit.render(count, exitX, exitY, exitW, exitH);
            } else {
                this.exit.render(count, 530, 100, 120, 160);
            }
            

            // draw images
            this.images.forEach(image => {
                image.render();
            })

            // draw interactables 
            this.interactables.forEach(interactable => {
                interactable.render();
            })

            if (count < 100) {
                if (count % 40 > 20) {
                    this.playerSprite.src = "dist/images/idleFrame.png"
                } else {
                    this.playerSprite.src = "dist/images/idleFrame2.png"
                }
            } else if (count < 200) {
                this.playerSprite.src = "dist/images/runRightFrame1.png"
            } else {
                this.playerSprite.src = "dist/images/runRightFrame2.png"
            }

            if (count >= 200 && count < 225) {
                this.Player.x += 1;
                this.Player.y -= 2;
                
            } else if (count >= 200 && count < 250) {
                this.Player.x += 1;
                this.Player.y -= 1;
            } else if (count >= 200 && count < 275) {
                this.Player.x += 1;
                this.Player.y -= 0.5;
            } else if (count >= 200 && count < 300) {
                this.Player.x += 1;
            } else if (count >= 200 && count < 325) {
                this.Player.x += 1;
                this.Player.y += 0.5;
            }
            if (count >= 300) {
                this.Player.width -= 0.3;
                this.Player.height -= 0.5;
                this.Player.x += 0.15;
                this.Player.y += 0.25;
            }
            this.drawPlayer(this.playerSprite, this.Player.x, this.Player.y, this.Player.width, this.Player.height)
        }, 10)
    }
    
}