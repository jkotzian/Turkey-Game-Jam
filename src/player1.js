Crafty.c('Player1' , {
	keyDown: false,
	open: false,
	init: function() {
		this.numPlayers += 1;
		this.requires('2D, Canvas, Color, Multiway, Gravity, Collision')
		.attr({x: 0, y: 0, w: 50, h: 50})
		.color('red')
		.multiway(7, {
			UP_ARROW: -90,
			LEFT_ARROW: 180,
			RIGHT_ARROW: 0,
		})
		.gravity('Solid')
		.gravityConst(.3)
		// .stopOnSolids()
		.collidePortal()
		.bind('KeyDown', function(e) {
		    if(e.key == Crafty.keys.M) {
		        this.keyDown = true
		    }
	    })
	    .bind('KeyUp', function(e) {
		    if(e.key == Crafty.keys.M) {
		        this.keyDown = false
		    }
	    })
	    .bind('EnterFrame', function(frame) {
	    	console.log(this.keyDown)
	    	if (this.keyDown && this.open == false) {
	    		this.portalize();
	    	}
	    	else if (this.keyDown && this.open == true) {
	    		this.unportalize1();
	    	}
	    	//If the door is open, stop it from moving
	    	if (this.open) {
		    	this._speed = 0;
				if (this._movement) {
					this.x -= this._movement.x;
					this.y -= this._movement.y;
				}
			}
	    })
	},

	collidePortal: function() {
	 	this.onHit('Portal', this.teleport)
	 	return this;
	},

	teleport: function() {
		this.x = 0;
		this.y = 0;
	},
	portalize: function() {
		this.color('yellow')
		this.antigravity()
		this.keyDown = false
		this.open = true;
	},

	unportalize1: function() {
		this.color('red')
		this.gravity("Ground")
		this.keyDown = false
		this.open = false;
	}
	// // Registers a stop-movement function to be called when
	// // this entity hits an entity with the "Solid" component
	// stopOnSolids: function() {
	// 	this.onHit('Solid', this.stopMovement);
	// 	return this;
	// },

	// // Stops the movement
	// stopMovement: function() {
	// 	console.log('HI!');
	// 	this._speed = 0;
	// 	if (this._movement) {
	// 		this.x -= this._movement.x;
	// 		this.y -= this._movement.y;
	// 	}
	// },
});