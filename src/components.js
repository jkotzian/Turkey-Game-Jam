// The Grid component allows an element to be located
//  on a grid of tiles
// An "Actor" is an entity that is drawn in 2D on canvas
//  via our logical coordinate grid

Crafty.c('Actor', {
    init: function() {
        this.requires('2D, Canvas, Grid');
    },
});

Crafty.c('Ground', {
	init: function() {
		this.requires('Actor, Color')
			.color('rgb(20,125,40)');
	},
});

Crafty.c('Door1', {
	init: function() {
		this.requires('Actor, Color')
			.color('black')
			.attr({w: 50, h:100});
	},
});

Crafty.c('Player' , {
	init: function() {
		this.requires('2D, Canvas, Color, Gravity') 
		  .attr({w: 50, h: 50})
		  //.twoway(4)
		  .gravity('Ground')
		  .gravityConst(.5);
	}
});

Crafty.c('Player1' , {
	init: function() {
		this.requires('Player, Multiway')
		  .attr({x: 0, y: 0})
		  .color('red')
		  .multiway(10, {
			UP_ARROW: -90,
			LEFT_ARROW: 180,
			RIGHT_ARROW: 0,
		  })
		  .gravity('Ground')
		  .gravityConst(.5);
	}
});
