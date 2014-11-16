Crafty.scene('Level_1', function() {
	//Place some ground on the map
	for (var x = 0; x < Game.map_grid.width; x++) {
		for (var y = 0; y < Game.map_grid.height; y++) {
			if (y == Game.map_grid.height - 1 || (y == Game.map_grid.height - 3 && x == 7) ||
				(y == Game.map_grid.height - 2 && x == 4)) {
				Crafty.e('Ground').at(x, y);
			}
			// if (y == Game.map_grid.height - 1 && x > 4) {
			// 	Crafty.e('Hazard').at(x, y);
			// }
		}
	}
	  
	var player1 = Crafty.e('Player1')
	  	.attr({x: 300, y: 99})
	// player1.antigravity();
	// player1.gravity();

  	var player2 = Crafty.e('Player2')
  		.attr({x: 100, y: 199})
  	// player2.antigravity();
  	// player2.gravity();

  	var enemy1 = Crafty.e('Enemy')
  	 	.attr({x: 200, y: 200})

  	// Crafty.e('Boy')
  	// 	.attr({x: 100, y: 200})

  	//Crafty.e('Portal')
  	//	.attr({x: 100, y: 200})

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
