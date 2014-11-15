Crafty.c('Boy', { 
	speed: .6,
	direction: 1,
	init: function() {
		this.requires('2D, Canvas, Color, Gravity, Collision, Boy')
		.attr({x: 0, y: 0, w: 50, h: 50})
		.color('yellow')
		.gravity('Solid')
		.gravityConst(.3)
		.switchOnSolids()
		.collidePortal()
		.collideEnemy()
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
		})
	},

	collideHazard: function() {
		this.onHit('Hazard', this.boyDie)
		return this;
	},
	collideEnemy: function() {
		this.onHit('Enemy', this.boyDie)
		return this;
	},

	boyDie: function() {
		this.destroy();
	},

	collidePortal: function() {
	 	this.onHit('Portal', this.teleport)
	 	return this;
	},

	teleport: function() {
		this.x = 0;
		this.y = 0;
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