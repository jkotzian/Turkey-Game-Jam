portalCount = 0;

//Holds the address of the door for 
//teleportations to occur
door1AddressX = 0;
door1AddressY = 0;

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
		.gravity('Ground')
		.gravityConst(.3)
		.stopOnSolids()
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
			//Won't go offscreen
			if (this.x > Crafty.viewport.width - this.w ||
				this.x < 0){
				this.x -= this._movement.x;
			}
			if (this.y > Crafty.viewport.height - this.h ) {
				this.y -= this._movement.y;
			}
	    	if (this.keyDown && this.open == false) {
	    		this.portalize();
	    	}
	    	else if (this.keyDown && this.open == true) {
	    		this.unportalize();
	    	}
	    	//If the door is open, stop it from moving
	    	if (this.open) {
		    	this.stopMovement();
			}
	    })
		.bind('Death1', function(e) {
			this.destroy()
		})
	},

	portalize: function() {
		this.color('yellow')
		this.antigravity()
		this.keyDown = false
		this.open = true;
		portalCount += 1;
		door1AddressX = this.x;
		door1AddressY = this.y;
		console.log(portalCount);
		console.log(door1AddressX);
		console.log(door1AddressY);
	},

	unportalize: function() {
		this.color('red')
		this.gravity("Ground")
		this.keyDown = false
		this.open = false;
		portalCount -= 1;
		console.log(portalCount);
	},
	// Registers a stop-movement function to be called when
	// this entity hits an entity with the "Solid" component
	stopOnSolids: function() {
			console.log('???');
		this.onHit('Solid', this.stopMovement);
		return this;
	},

	player1Dies: function() {
		this.trigger("PlayerDeath");
		this.destroy();
	},

	// Stops the movement
	stopMovement: function() {
		this._speed = 0;
		if (this._movement) {
			console.log(this._speed);
			this.x -= this._movement.x;
			this.y -= this._movement.y;
		}
	},
});
