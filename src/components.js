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

Crafty.c('Player' , {
	init: function() {
		this.requires('2D, Canvas, Color, Fourway, Gravity') 
		  .attr({x: 0, y: 0, w: 50, h: 50})
		  .color('#F00')
		  .fourway(4)
		  .gravity('Floor');
	}
});
		  