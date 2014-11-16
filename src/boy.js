door1AddressX = 0;
door1AddressY = 0;
door2AddressX = 0;
door2AddressY = 0;

enteredBoy = 0;
portalCount = 0;
numTeddy = 0;

Crafty.c('Boy', { 
	speed: 15,
	direction: 1,
	init: function() {
		this.requires('2D, Canvas, Color, Gravity, Collision')
		.attr({x: 0, y: 0, w: Game.map_grid.tile.width, h: Game.map_grid.tile.height})
		.color('yellow')
		.gravity('Ground')
		.gravityConst(.3)
		.switchOnGrounds()
		.collidePlayer()
		.collideEnemy()
		.collideHazard()
		.bind("EnterFrame", function() {
			//Move the enemy in the game loop
			//If he hits the left edge of the screen
			//If he hits the right edge of the screen
			if (this.x > Crafty.viewport.width - this.w ||
				this.x < 0) {
				this.reachedEnd();
			}
			//Right
			if (this.direction == 1) {
				this.x += this.speed;
			}
			//left
			else {
				this.x -= this.speed;
			}
			if (enteredBoy == 1 && !this.hit('Player1') && !this.hit('Player2')) {
				//console.log('portal ready');
				enteredBoy = 0;
			}
		})
	},

	reachedEnd: function() {
		if (numTeddy == 0) {
			//Go to the next room
			//Trigger the callback to go to the next level
			Crafty.trigger('NextLevel', this);
		}
		else {
			this.switchDirection();
		}
	},
	switchDirection: function() {
		this.direction *= -1;
	},
	collideHazard: function() {
		this.onHit('Hazard', this.boyDie)
		return this;
	},
	collideEnemy: function() {
		this.onHit('Enemy', this.boyDie)
		return this;
	},

	collidePlayer: function() {
	 	this.onHit('Player1', this.teleport1)
	 	this.onHit('Player2', this.teleport2)
	 	return this;
	},

	teleport1: function() {
		if (portalCount == 2 && enteredBoy == 0) {
			this.x = door2AddressX;
			this.y = door2AddressY;
			enteredBoy = 1;
		}
	},

	teleport2: function() {
		if (portalCount == 2 && enteredBoy == 0) {
			this.x = door1AddressX;
			this.y = door1AddressY;
			enteredBoy = 1;
		}
	},

	boyDie: function() {
		this.destroy();
	},

	// Registers a stop-movement function to be called when
	// this entity hits an entity with the "Ground" component
	switchOnGrounds: function() {
		this.onHit('Ground', this.switchMovement);
		return this;
	},

	// Stops the movement
	switchMovement: function() {
		this.direction *= -1;
		//console.log(this.direction);
	},
})
