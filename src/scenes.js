Crafty.scene('Level_1', function() {
	//Place some ground on the map
	for (var x = 0; x < Game.map_grid.width; x++) {
		for (var y = 0; y < Game.map_grid.height; y++) {
			if (y == Game.map_grid.height - 1 || (y == Game.map_grid.height - 2 && x == 4)) {
				Crafty.e('Ground').at(x, y);
			}
			// if (y == Game.map_grid.height - 1 && x > 4) {
			// 	Crafty.e('Hazard').at(x, y);
			// }
		}
	}
	  
	Crafty.e('Player1')
	  	.attr({x: 0, y: 299})

  	Crafty.e('Player2')
  		.attr({x: 100, y: 299})

  	// Crafty.e('Enemy')
  	// 	.attr({x: 200, y: 200})

  	// Crafty.e('Boy')
  	// 	.attr({x: 100, y: 200})

  	Crafty.e('Portal')
  		.attr({x: 100, y: 200})

  	this.nextLevel = this.bind('NextLevel', function() {
		Crafty.scene('Level_2');
	});
});

Crafty.scene('Level_2', function() {
	//Place some ground on the map
	for (var x = 0; x < Game.map_grid.width; x++) {
		for (var y = 0; y < Game.map_grid.height; y++) {
			if (y == Game.map_grid.height - 1 && x <= 4) {
				Crafty.e('Ground').at(x, y);
			}
			if (y == Game.map_grid.height - 1 && x > 4) {
				Crafty.e('Hazard').at(x, y);
			}
		}
	}
});