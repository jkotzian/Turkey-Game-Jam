portalCount = 0;

//Holds the address of the door for 
//teleportations to occur
door1AddressX = 0;
door1AddressY = 0;

Crafty.c('Player1' , {
	keyDown: false,
	jumpKeyDown: false,
	open: false,
	init: function() {
		this.numPlayers += 1;
		this.requires('Actor, door1, doorsopened, Twoway, Gravity, Collision, Player, SpriteAnimation')
		.attr({x: 0, y: 0, w: Game.map_grid.tile.width, h: Game.map_grid.tile.height * 2})
		.twoway(10)
		.reel('door1_standing_left',500,0,0,4)
		.reel('door1_standing_right',500,0,1,4)
		.reel('door1_walking_left',500,0,2,4)
		.reel('door1_walking_right',500,0,3,4)
		.animate('door1_standing_left', -1)
		.gravity('Solid')
		.gravityConst(.7)
		.stopOnSolids()
		.stopOnBox()
		.bind('KeyDown', function(e) {
		    if(e.key == Crafty.keys.DOWN_ARROW) {
		        this.keyDown = true;
		    }
		    if (e.key == Crafty.keys.UP_ARROW) {
		    	this.jumpKeyDown = true
		    }
		    if (e.key == Crafty.keys.R) {
				console.log("R")
		    	boy.boyDie()
		    }
	    })
	    .bind('KeyUp', function(e) {
		    if(e.key == Crafty.keys.DOWN_ARROW) {
		        this.keyDown = false
		    }
		    if (e.key == Crafty.keys.UP_ARROW) {
		    	this.jumpKeyDown = false
		    }
	    })
	    .bind('KeyDown', function(e)
	    {
	    	if(e.key == Crafty.keys.RIGHT_ARROW)
	    	{
	    		this.animate('door1_walking_right', -1);
	    	}
	    	if(e.key == Crafty.keys.LEFT_ARROW)
	    	{
	    		this.animate('door1_walking_left', -1);
	    	}
	    })
	    .bind('KeyUp', function(e) {
	    	if(e.key == Crafty.keys.RIGHT_ARROW)
	    	{
	    		this.animate('door1_standing_right', -1);
	    	}
	    	if(e.key == Crafty.keys.LEFT_ARROW)
	    	{
	    		this.animate('door1_standing_left', -1);
	    	}
	    })

	    .bind('EnterFrame', function(frame) {
			//Won't go offscreen
			if (this.x > Crafty.viewport.width - this.w ||
				this.x < 0){
				this.x -= this._movement.x;
			}
			if (this.y > Crafty.viewport.height - this.h || this.y < 0) {
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
		this.antigravity()
		this.keyDown = false
		this.open = true;
		portalCount += 1;
		door1AddressX = this.x;
		door1AddressY = this.y;
	},

	unportalize: function() {
		this.gravity('Solid')
		this.keyDown = false
		this.open = false;
		portalCount -= 1;
	},
	// Registers a stop-movement function to be called when
	// this entity hits an entity with the "Solid" component
	stopOnSolids: function() {
		this.onHit('Solid', this.stopMovement);
		return this;
	},
	stopOnBox: function() {
		this.onHit('Ground', this.stopDamnMovement);
		return this;
	},
	player1Dies: function() {
		this.trigger("PlayerDeath");
		this.destroy();
	},
	// Stops the movement
	stopMovement: function() {
		//console.log(this._speed);
		this._speed = 0;
		if (this._movement) {
			//console.log(this._movement.y);
			this.x -= this._movement.x;
			//if (this.jumpKeyDown)
			this.y -= this._movement.y;
		}
		//this.y += 10;
	},
	stopDamnMovement: function() {
		console.log("FUCK YEA");
		this._speed = 0;
		if (this._movement) {
			//console.log(this._movement.y);
			//this.x -= this._movement.x;
			//if (this.jumpKeyDown)
			this.y += this._jumpSpeed;
		}
	}
});
