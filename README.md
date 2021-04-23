# Otherworlds
[Live Site](https://pcs003.github.io/Otherworlds/)

![Otherworlds Banner](/src/assets/otherworlds_title.png)

## Table of Contents
* [Background](#Background)
* [Technologies](#Technologies)
* [Features](#Features)

## Background

Otherworlds is a retro-inspired, space themed platforming game with sets of levels taking place in a world with certain properties. The goal for each level is to get the the door at the end of the level. The last level in a world (5 levels per world) has a portal to the next world.

Users can inidividually mute/unmute music and sound effects in the main menu. Users can select a level by navigating between worlds and clicking on the level of their choice. Users can view controls by hovering over the controls icon in the top left of the screen. Users can pause the game by pressing escape and in the pause menu, users can resume, restart, or exit to the main menu. Users can move left, right, and jump to complete a level.

## Technologies

* Javascript
* HTML
* CSS


## Features

### Player Movement
![Alt Text]()

Users can move the character using wasd/arrow keys and the space bar. Game physics are velocity based, so clicking the space bar applies force in the upwards direction and gravity is a constant force applying force in the downward direction. All player animations and sprites are original.

### Platform Collision
![Alt Text]()

Player-Platform collisions are calculated using separate X and Y collision detection functions. All types of platforms are subclasses of the Interactable class in which the generic collision function is defined. X and Y collision are calculated separately in order to allow for different collision interactions such as the player being able to slide down a wall slowly by holding the arrow key in the direction of the wall.

## Worlds

Worlds each have their own theme and unique gimmick or mechanic. World 1 is the "tutorial" world in that it has no gimmick and exists to get the user used to player control and platforming in this game. World 1 is cloud/space themed. World 2 is an ancient mountain world with some old, weak platforms that fall after the player lands on them. More worlds to come!
