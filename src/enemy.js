door1AddressX = 0;
door1AddressY = 0;
door2AddressX = 0;
door2AddressY = 0;

entered = 0;
portalCount = 0;

Crafty.c('Enemy', { 
	speed: 2,
	direction: 1,
	init: function() {
		this.requires('2D, Canvas, Color, Gravity, Collision')
		.attr({x: 0, y: 0, w: 50, h: 50})
		.color('black')
		.gravity('Solid')
		.gravityConst(.3)
		.switchOnSolids()
		.collidePlayer()
		.collideHazard()
		.bind("EnterFrame", function() {
			//Move the enemy in the game loop
			//If it hits the edge of the screen
			if (this.x > Crafty.viewport.width - this.w ||
				this.x < 0){
				//Switch directions
				this.direction *= -1;
			}
			//Right
			if (this.direction == 1) {
				this.x += this.speed;
			}
			//left
			else {
				this.x -= this.speed;
			}
			if (entered == 1 && !this.hit('Player1') && !this.hit('Player2')) {
				console.log('portal ready');
				entered = 0;
			}
		})
	},

	collideHazard: function() {
		this.onHit('Hazard', this.enemyDie)
		return this;
	},

	collidePlayer: function() {
	 	this.onHit('Player1', this.teleport1)
	 	this.onHit('Player2', this.teleport2)
	 	return this;
	},

	teleport1: function() {
		if (portalCount == 2 && entered == 0) {
			this.x = door2AddressX;
			this.y = door2AddressY;
			entered = 1;
		}
	},

	teleport2: function() {
		if (portalCount == 2 && entered == 0) {
			this.x = door1AddressX;
			this.y = door1AddressY;
			entered = 1;
		}
	},

	enemyDie: function() {
		this.destroy()
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
