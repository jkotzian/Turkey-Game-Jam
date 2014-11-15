Crafty.scene('Level_1', function() {
	//Place some ground on the map
	for (var x = 0; x < Game.map_grid.width; x++) {
		for (var y = 0; y < Game.map_grid.height; y++) {
			if (y == Game.map_grid.height - 1) {
				Crafty.e('Ground').at(x, y);
			}
			// if (y == Game.map_grid.height - 1 && x > 4) {
			// 	Crafty.e('Hazard').at(x, y);
			// }
		}
	}
	  
	var player1 = Crafty.e('Player1')
	  	.attr({x: 0, y: 299})

  	var player2 = Crafty.e('Player2')
  		.attr({x: 100, y: 299})

  	//player1Door = false;
	player2Door = false;

	// player1.bind('KeyDown', function(e) {
	// 	console.log(player1Door)
	//     if(e.key == Crafty.keys.ENTER && player1Door == false) {
	//         console.log("yo")
	//         this.portalize();
	//     }
	//     else if(e.key == Crafty.keys.ENTER && player1Door == true) {
	//         console.log("yo")
	//         this.unportalize1();
	//     }
 //    });

    player2.bind('KeyDown', function(e) {
        if(e.key == Crafty.keys.Q && player2Door == false) {
            console.log("yo")
            this.portalize();
        }
        else if(e.key == Crafty.keys.Q && player2Door == true) {
            console.log("yo")
            this.unportalize2();
        }
    });
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