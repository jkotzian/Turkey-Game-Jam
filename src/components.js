// The Grid component allows an element to be located
//  on a grid of tiles
// An "Actor" is an entity that is drawn in 2D on canvas
//  via our logical coordinate grid

Crafty.c('Actor', {
    init: function() {
        this.requires('2D, Canvas, Grid');
    },
});

Crafty.c('Ground', {
	init: function() {
		this.requires('Actor, Color, Solid')
			.color('rgb(20,125,40)');
	}
});

Crafty.c('Player1' , {
	init: function() {
		this.requires('2D, Canvas, Color, Multiway, Gravity, Collision, Solid')
		.attr({x: 0, y: 0, w: 50, h: 50})
		.color('red')
		.multiway(7, {
			UP_ARROW: -90,
			LEFT_ARROW: 180,
			RIGHT_ARROW: 0,
		})
		.gravity('Solid')
		.gravityConst(.3)
		.stopOnSolids();
	},

	 // Registers a stop-movement function to be called when
	// this entity hits an entity with the "Solid" component
	stopOnSolids: function() {
		console.log('Hey!');
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

Crafty.c('Player2' , {
	init: function() {
		this.requires('2D, Canvas, Color, Multiway, Gravity, Collision, Solid')
		.attr({x: 0, y: 0, w: 50, h: 50})
		.color('red')
		.multiway(7, {
			W: -90,
			A: 180,
			D: 0,
		})
		.gravity('Solid')
		.gravityConst(.3)
		.stopOnSolids();
	},

	 // Registers a stop-movement function to be called when
	// this entity hits an entity with the "Solid" component
	stopOnSolids: function() {
		console.log('Hey!');
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


