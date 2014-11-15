Crafty.c('Player2' , {
	init: function() {
		this.numPlayers += 1;
		this.requires('2D, Canvas, Color, Multiway, Gravity, Collision')
		.attr({x: 0, y: 0, w: 50, h: 50})
		.color('red')
		.multiway(7, {
			W: -90,
			A: 180,
			D: 0,
		})
		.gravity('Solid')
		.gravityConst(.3)
		.stopOnSolids()
		.collidePortal();
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
	stopOnSolids: function() {
		this.onHit('Solid', this.stopMovement);
		return this;
	},

	// Stops the movement
	stopMovement: function() {
		console.log('HI!');
		this._speed = 0;
		if (this._movement) {
			this.x -= this._movement.x;
			this.y -= this._movement.y;
		}
	},
});