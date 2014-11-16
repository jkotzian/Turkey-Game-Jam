
numTeddy = 0;

Crafty.scene('Level_1', function() {
	numTeddy = 0;
	 // A 2D array to keep track of all occupied tiles
    var w = Game.map_grid.width;
    var h = Game.map_grid.height;
    //Place some ground on the map
    for (var x = 0; x < w; x++) {
        for (var y = 0; y < h; y++) {
            if (y == h - 1 || y == h - 2) {
                Crafty.e('Ground').at(x,y);
            }
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
	.attr({x: 0, y:750})

	Crafty.e('teddyBears')
	.attr({x:200,y:100})

	Crafty.e('teddyBears')
	.attr({x:200,y:100})

	Crafty.e('teddyBears')
	.attr({x:200,y:100})

	this.nextLevel = this.bind('NextLevel', function() {
        Crafty.scene('Level_2');
    });
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
			if (y == h - 7 && x < w - 15) {
				Crafty.e('Ground').at(x, y);
			}
			if (y == 6 && x > 14) {
				Crafty.e('Ground').at(x, y);
			}
			//Teddy 1
			if (y == h - 5 && x == w - 2) {
				Crafty.e('teddyBears').at(x,y);
			}
			//Teddy 2
			if (y == h - 8 && x == 2) {
				Crafty.e('teddyBears').at(x,y);
			}
			//Teddy 3
			if (y == 5 && x == w - 2) {
				Crafty.e('teddyBears').at(x,y);
			}
		}
	}

    this.nextLevel = this.bind('NextLevel', function() {
        Crafty.scene('Level_3');
    });
});

Crafty.scene('Level_3', function() {
	numTeddy = 2;
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
			if (y == h - 2 && (x < 12 || x > 15)) {
				Crafty.e('Ground').at(x, y);
			}
			if (y == h - 3 && (x > 6 && x < 12)) {
				Crafty.e('Ground').at(x, y);
			}
			if (y == h - 4 && (x > 6 && x < 12)) {
				Crafty.e('Ground').at(x, y);
			}
			//Ground
			if (y > 6 && (x > w - 4)) {
				Crafty.e('Ground').at(x, y);
			}

			if (y == h - 5 && (x > w - 10 && x < w - 6)) {
				Crafty.e('Ground').at(x, y);
			}
			if (y == h - 6 && (x == w - 10)) {
				Crafty.e('Ground').at(x, y);
			}
			if (y == h - 3 && (x == 16)) {
				Crafty.e('Ground').at(x, y);
			}
			//Hazard
			if (y == h - 2 && (x > 11 && x < 16)) {
				Crafty.e('Hazard').at(x, y);
			}
			//Teddy
			if (y == h - 5 && x == 9) {
				Crafty.e('teddyBears').at(x,y);
			}
			//Teddy
			if (y == h - 6 && x == w - 8) {
				Crafty.e('teddyBears').at(x,y);
			}
		}
	}

    this.nextLevel = this.bind('NextLevel', function() {
        Crafty.scene('Level_4');
    });
});

Crafty.scene('Level_4', function() {
	numTeddy = 3;
	 // A 2D array to keep track of all occupied tiles

    var w = Game.map_grid.width;
    var h = Game.map_grid.height;
    //Place some ground on the map
    for (var x = 0; x < w; x++) {
        for (var y = 0; y < h; y++) {
            if ((y == h - 1 || y == h - 2)) {
				if ( x < 9 || (21 > x && x > 12) || x > 23) {
               		Crafty.e('Ground').at(x,y);
				}
				else if (y == h -1 &&  ((x > 6 && x < 13) || (x > 20 && x < 24))){
               		Crafty.e('Hazard').at(x,y);					
				}
            }
            if (x == 0 && y > h-7) {
                ground = Crafty.e('Ground').at(x,y);
            }
			if (y < h -5 && y > h-8 && x > -1 && x < 4) {
                Crafty.e('Ground').at(x,y);
			}

			if (x > 12 && x < 15 && y == h-5) {
                Crafty.e('Ground').at(x,y);
			}

            if ((x == 18 || x == 17) && y > h-10) {
                ground = Crafty.e('Ground').at(x,y);
            }
			if (y < h - 7 && y > h-9 && x > 17 && x < 23) {
                Crafty.e('Ground').at(x,y);
			}
			if ( y == h-5 && x > 20)
			  ground = Crafty.e('Ground').at(x,y);
			if (x == 26 && y < h -4)
			  ground = Crafty.e('Ground').at(x,y);
        }
    }
	
    var player1 = Crafty.e('Player1')
		.attr({x: 300, y: 650})
	//Insures Climbing platforms do not cause clipping
	player1.antigravity();
	player1.gravity();
		
	var player2 = Crafty.e('Player2')
		.attr({x: 160,  y:650})
	//Insures Climbing platforms do not cause clipping
	player2.antigravity();
	player2.gravity();

	Crafty.e('Boy')
	.attr({x: 0, y:650})

	Crafty.e('teddyBears')
	.attr({x:200,y:1050})
	Crafty.e('teddyBears')
	.attr({x:1800,y:1050})
	Crafty.e('teddyBears')
	.attr({x:1200,y:850})

      this.nextLevel = this.bind('NextLevel', function() {
        Crafty.scene('Level_4');
    });
});
