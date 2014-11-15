// The Grid component allows an element to be located
//  on a grid of tiles
// An "Actor" is an entity that is drawn in 2D on canvas
//  via our logical coordinate grid

portalCount = 0

player1Door = false;
player2Door = false;
door1AddressX = 0;
door1AddressY = 0;
door2AddressX = 0;
door2AddressY = 0;

Crafty.c('Grid', {
	init: function () {
		this.attr({
			w: Game.map_grid.tile.width,
			h: Game.map_grid.tile.height
		})
	},

	  // Locate this entity at the given position on the grid
  	at: function(x, y) {
    	if (x === undefined && y === undefined) {
      		return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height }
    	} 
    	else {
      		this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
      		return this;
    	}
  	}
})
Crafty.c('Actor', {
    init: function() {
        this.requires('2D, Canvas, Grid');
    },
});

Crafty.c('Ground', {
	init: function() {
		this.requires('Actor, Color, Solid')
			.color('green');
	}
});

Crafty.c('Player1' , {
	init: function() {
		this.requires('2D, Canvas, Color, Multiway, Gravity, Collision')
		.attr({x: 0, y: 0, w: 30, h: 50})
		.color('red')
		.multiway(7, {
			UP_ARROW: -90,
			LEFT_ARROW: 180,
			RIGHT_ARROW: 0,
		})
		.gravity('Ground')
		.gravityConst(.3)
		.collidePortal();
	},

	collidePortal: function() {
	 	console.log('teleport!')
	 	this.onHit('Player2', this.teleport)
	 	return this;
	},  

	teleport: function() {
		if (player2Door == true) {
			console.log('Hell yeah!');
			this.x = 0;
			this.y = 0;
		}
	},
	// Registers a stop-movement function to be called when
	// this entity hits an entity with the "Solid" component

	portalize: function() {
		this.requires('')
			.color('yellow')
			.multiway(0, {A:0})
			.antigravity();
		player1Door = true;
	},

	unportalize1: function() {
		console.log('1');
		this.requires('2D, Canvas, Color, Multiway, Gravity, Collision')
		.color('red')
		.multiway(7, {
			W: -90,
			A: 180,
			D: 0,
		})
		.gravity("Ground"); 
		player1Door = false;
	}
});

Crafty.c('Player2' , {

	init: function() {
		this.requires('2D, Canvas, Color, Multiway, Gravity, Collision')
		.attr({x: 0, y: 0, w: 30, h: 50})
		.color('blue')
		.multiway(7, {
			W: -90,
			A: 180,
			D: 0,
		})
		.gravity('Ground')
		.gravityConst(.3)
		.collidePortal();
	},

	collidePortal: function() {
	 	console.log('teleport!')
	 	this.onHit('Player1', this.teleport)
	 	return this;
	},  

	teleport: function() {
		if (player1Door == true) {
			console.log('Hell yeah!');
			this.x = 0;
			this.y = 0;
		}
	},

	 // Registers a stop-movement function to be called when
	// this entity hits an entity with the "Solid" component

	portalize: function() {
		this.requires('')
			.color('yellow')
			.multiway(0, {A:0})
			.antigravity();
		player2Door = true;
	},

	unportalize2: function() {
		console.log('2');
		this.requires('2D, Canvas, Color, Multiway, Gravity, Collision')
		.color('blue')
		.multiway(7, {
			W: -90,
			A: 180,
			D: 0,
		})
		.gravity("Ground");
		player2Door = false;
	}
});



Crafty.c('Portal', {
	init: function() {
		this.requires('Actor, Color, Portal')
			.color('blue')
			.attr({x: 100, y: 100, w: 50, h: 50});
	}
})

