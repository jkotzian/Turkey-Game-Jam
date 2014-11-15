Game = {
	start: function() {

		Crafty.init(800,800);
		Crafty.background('rgb(121,205,205)');
			
		Crafty.e('Ground')
			.attr({x: 0, y: 700, w: 500, h: 300})
			.color('green');

			
		Crafty.e('Door1')
			.attr({x:200, y:100});
		  
		Crafty.e('Player1')
		  .attr({x: 0, y: 699})
	}
 }
