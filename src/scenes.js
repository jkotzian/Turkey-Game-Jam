Crafty.scene('Level_1', function() {


    //            0
    //w                  0
    //            h
    var w = Game.map_grid.width;
    var h = Game.map_grid.height;
    //Place some ground on the map
    for (var x = 0; x < w; x++) {
        for (var y = 0; y < h; y++) {
            if (y == h - 1 && x != 20) {
                Crafty.e('Ground').at(x, y);
            }
            if (x > w-20 && x < w-5 && y == h -1) {
                Crafty.e('Hazard').at(x,y);
            }
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

        Crafty.e('Player1')
          .attr({x: 300, y: 400})

      Crafty.e('Player2')
          .attr({x: 160,  y:300})

       Crafty.e('Enemy')
           .attr({x: 500, y: 300, w: 50, h:50})

       Crafty.e('Boy')
           .attr({x: 0, y: 600})

      //Crafty.e('Portal')
      //    .attr({x: 100, y: 200})

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
