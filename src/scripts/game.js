import runRightImage1 from '../assets/runRightFrame1.png'
import runRightImage2 from '../assets/runRightFrame2.png'
import runRightImage3 from '../assets/runRightFrame3.png'
import runLeftImage1 from '../assets/runLeftFrame1.png'
import runLeftImage2 from '../assets/runLeftFrame2.png'
import runLeftImage3 from '../assets/runLeftFrame3.png'

import PortalFrame1 from '../assets/PortalFrame1.png'
import PortalFrame2 from '../assets/PortalFrame2.png'
import PortalFrame3 from '../assets/PortalFrame3.png'
import PortalFrame4 from '../assets/PortalFrame4.png'
import PortalFrame5 from '../assets/PortalFrame5.png'
import PortalFrame6 from '../assets/PortalFrame6.png'
import PortalFrame7 from '../assets/PortalFrame7.png'
import PortalFrame8 from '../assets/PortalFrame8.png'

import World1Door from '../assets/World1Door.png'
import World2Door from '../assets/World2Door.png'
import World1Music from '../assets/world1Music.mp3'
import jumpSound from '../assets/jumpSound.mp3'
import footstep from '../assets/footstep.mp3'

import largePlatform from '../assets/largePlatform.png'
import mediumPlatform from '../assets/mediumPlatform.png'
import smallPlatform from '../assets/smallPlatform.png'
import tinyPlatform from '../assets/tinyPlatform.png'

import idleFrame from '../assets/idleFrame.png'
import idleFrame2 from '../assets/idleFrame2.png'
import Interactable from './interactable'
import GameMenu from './gamemenu'
import Exit from './exit'

import { LevelData } from './leveldata'
import InteractableImage from './interactableImage'
import LevelText from './levelText'

export default class Game {
    constructor(canvas, ctx, worldNum, levelNum, game, renderHome, gameMusic, muted, toggleMute) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.worldNum = worldNum;
        this.levelNum = levelNum;
        this.game = game;
        this.renderHome = renderHome;
        this.gameMusic = gameMusic;
        this.muted = muted;
        this.toggleMute = toggleMute;

        this.frameNum = 0;
        this.levelTime = 6000;
        this.paused = false;
        this.menu = new GameMenu(this.canvas, this.ctx, "failed",this.worldNum, this.levelNum, this.game, this.setData.bind(this), this.togglePause.bind(this), this.render.bind(this), this.renderHome, this.gameMusic, this.muted, this.toggleMute);
        

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
            if (event.key == 'd') {
                this.Player.velocity[0] = this.VELOCITY_X;
                this.Player.moving = true;
                this.Player.faceRight = true;
            } else if (event.key == 'a') {
                this.Player.velocity[0] = -this.VELOCITY_X;
                this.Player.moving = true;
                this.Player.faceRight = false;
            } else if (event.key == ' ' && this.Player.grounded && !this.Player.isJumping ) {
                this.jumpSound.play();
                this.Player.velocity[1] -= 5;
                this.Player.isJumping = true;
                this.Player.grounded = false;
                setTimeout(() => {
                    this.Player.isJumping = false
                }, 60)
            } else if (event.key == "Escape") {
                this.pauseSound.pause();
                this.pauseSound.currentTime = 0;
                this.pauseSound.play();
                this.togglePause();
            }
        })
        window.addEventListener('keyup', event => {
            if (event.key == 'd') {
                this.Player.velocity[0] = 0;
                this.Player.moving = false;
            } else if (event.key == 'a') {
                this.Player.velocity[0] = 0;
                this.Player.moving = false;
            } else if (event.key == ' ') {
                this.Player.isJumping = false
            }
        })

    }

    setGame(newGame) {
        this.game = newGame;
    }

    setData(worldNum, levelNum, game) {
        this.worldNum = worldNum;
        this.levelNum = levelNum;
        this.game = game;

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
            this.interactables.push(new Interactable(this.canvas, this.ctx, interactable.x, interactable.y, interactable.height, interactable.width));
            if (interactable.imgUrl.length > 0) {
                this.images.push(new InteractableImage(this.canvas, this.ctx, interactable.imgUrl,interactable.x,interactable.y - interactable.yOffset,interactable.width,interactable.imgHeight));
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

    gameOver(gameLoop) {
        this.interactables = [];
        clearInterval(gameLoop);
        this.menu.setMenuData("failed",this.worldNum, this.levelNum);
        this.menu.open();
    }

    levelComplete(gameLoop) {
        if (this.levelNum == 5) {
            clearInterval(gameLoop);
            setTimeout( () => {
                this.interactables = [];
                clearInterval(finishWorld)
                this.menu.setMenuData("complete",this.worldNum, this.levelNum);
                this.menu.open();
            }, 4000)
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
            
        } else {
            this.interactables = [];
            clearInterval(gameLoop)
            this.menu.setMenuData("complete",this.worldNum, this.levelNum);
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

            if (this.Player.y > 500 || this.levelTime <= 110) {
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
                    this.footstep.play();
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
    
            
    
            this.Player.frameNum = (this.Player.frameNum + 1) % 40
            this.portalFrame = (this.portalFrame + 1) % 80;

            this.frameNum++;
            
        }, 10)
        
    
        
    }
    
}