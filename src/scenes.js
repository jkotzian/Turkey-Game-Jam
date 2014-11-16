
numTeddy = 0;

Crafty.scene('Level_1', function() {
	numTeddy = 3;
	 // A 2D array to keep track of all occupied tiles

    var w = Game.map_grid.width;
    var h = Game.map_grid.height;
    //Place some ground on the map
    for (var x = 0; x < w; x++) {
        for (var y = 0; y < h; y++) {
            if (y == h -1) {
                Crafty.e('Ground').at(x,y);
            }
           //if (x > w-20 && x < w-5 && y == h -1) {
               // Crafty.e('Hazard').at(x,y);
         //  }
            if (y > 3 && y < h  && x >  -1  && x < 4) {
                Crafty.e('Ground').at(x, y);
            }
            if (y > 5 && y < h  && x >  5 && x < w-20) {
                Crafty.e('Ground').at(x, y);
            }
            if (y > 6 && y < h  && x >  3 && x < 6) {
                Crafty.e('Ground').at(x, y);
            }
            if (y > 7 && y < h  && x >  1 && x < 4) {
                Crafty.e('Ground').at(x, y);
            }
            // if (y == Game.map_grid.height - 1 && x > 4) {
            //     Crafty.e('Hazard').at(x, y);
            // }
        }
    }
	
    var player1 = Crafty.e('Player1')
		.attr({x: 300, y: 400})
	//Insures Climbing platforms do not cause clipping
	player1.antigravity();
	player1.gravity();
		
	var player2 = Crafty.e('Player2')
		.attr({x: 160,  y:300})
	//Insures Climbing platforms do not cause clipping
	player2.antigravity();
	player2.gravity();

	Crafty.e('Enemy')
	.attr({x: 500, y: 300})
	.setDirection(1)

	Crafty.e('Boy')
	.attr({x: 0, y: 200})

	Crafty.e('teddyBears')
	.attr({x:200,y:100})

	Crafty.e('teddyBears')
	.attr({x:200,y:100})

	Crafty.e('teddyBears')
	.attr({x:200,y:100})
});

Crafty.scene('Level_2', function() {
	numTeddy = 3;
	var player1 = Crafty.e('Player1')
		.attr({x: 300, y: 1000})
	//Insures Climbing platforms do not cause clipping
	player1.antigravity();
	player1.gravity();
		
	var player2 = Crafty.e('Player2')
		.attr({x: 160,  y:1000})
	//Insures Climbing platforms do not cause clipping
	player2.antigravity();
	player2.gravity();

	Crafty.e('Boy')
	.attr({x: 0, y: 1000})

	var w = Game.map_grid.width;
    var h = Game.map_grid.height;
	//Place some ground on the map
	for (var x = 0; x < w; x++) {
		for (var y = 0; y < h; y++) {
			//First layer of ground
			if (y == h - 1) {
				Crafty.e('Ground').at(x, y);
			}
			//Second layer of ground
			if (y == h - 2) {
				Crafty.e('Ground').at(x, y);
			}
			//Third layer of ground
			if (y == h - 3 && x > w - 14) {
				Crafty.e('Ground').at(x, y);
			}
			if (y == h - 4 && x > w - 14) {
				Crafty.e('Ground').at(x, y);
			}
			//Teddy 1
			if (y == h - 5 && x == w - 2) {
				Crafty.e('teddyBears').at(x,y);
			}
			if (y == h - 7 && x < w - 15) {
				Crafty.e('Ground').at(x, y);
			}
			if (y == h - 8 && x < w - 15) {
				Crafty.e('Ground').at(x, y);
			}
		}
	}
});
