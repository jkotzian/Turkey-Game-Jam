Game = {
	numPlayers: 0,
	  // This defines our grid's size and the size of each of its tiles
	map_grid: {
		width:  9,
		height: 9,
		tile: {
		  width:  64,
		  height: 64
		}
	},

	// The total width of the game screen. Since our grid takes up the entire screen
	//  this is just the width of a tile times the width of the grid
	width: function() {
		return this.map_grid.width * this.map_grid.tile.width;
	},

	// The total height of the game screen. Since our grid takes up the entire screen
	//  this is just the height of a tile times the height of the grid
	height: function() {
		return this.map_grid.height * this.map_grid.tile.height;
	},

	start: function() {
		Crafty.init(Game.map_grid.width * 
					Game.map_grid.tile.width,
					Game.map_grid.height * 
					Game.map_grid.tile.height);

		Crafty.background('rgb(121,205,205)');
		
		//Place some ground on the map
		for (var x = 0; x < Game.map_grid.width; x++) {
			for (var y = 0; y < Game.map_grid.height; y++) {
				if (y == Game.map_grid.height - 1) {
					Crafty.e('Ground').at(x, y);
				}
			}
		}
		  
		Crafty.e('Player1')
		  	.attr({x: 0, y: 299})

	  	Crafty.e('Player2')
	  		.attr({x: 100, y: 299})

	  	Crafty.e('Enemy')
	  		.attr({x: 200, y: 200})

	  	Crafty.e('Boy')
	  		.attr({x: 100, y: 200})

	  	Crafty.e('Portal')
	  		.attr({x: 100, y: 200})
	}
 }
