door1AddressX = 0;
door1AddressY = 0;
door2AddressX = 0;
door2AddressY = 0;

enteredBoy = 0;
portalCount = 0;

Crafty.c('Boy', { 
	speed: 3,
	direction: 1,
	init: function() {
		this.requires('2D, Canvas, Color, Gravity, Collision')
		.attr({x: 0, y: 0, w: 50, h: 50})
		.color('yellow')
		.gravity('Solid')
		.gravityConst(.3)
		.switchOnSolids()
		.collidePlayer()
		.collideEnemy()
		.collideHazard()
		.bind("EnterFrame", function() {
			//Move the enemy in the game loop
			//If he hits the left edge of the screen
			if (this.x < 0) {
				//Reverse direction
				this.direction *= -1;
			}
			//If he hits the right edge of the screen
			if (this.x > Crafty.viewport.width - this.w) {
				console.log("OH HAI")
				//Go to the next room
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
				console.log('portal ready');
				enteredBoy = 0;
			}
		})
	},

	reachedEnd: function() {
		//Trigger the callback to go to the next level
		Crafty.trigger('NextLevel', this);
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
	// this entity hits an entity with the "Solid" component
	switchOnSolids: function() {
		this.onHit('Solid', this.switchMovement);
		return this;
	},

	// Stops the movement
	switchMovement: function() {
		this.direction *= -1;
		console.log(this.direction);
	},
})
