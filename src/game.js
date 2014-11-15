Game = {
	start: function() {

		Crafty.init(800,800);
		Crafty.background('rgb(121,205,205)');
			
		Crafty.e('Ground')
			.attr({x: 0, y: 250, w: 250, h: 10})
			.color('green');
		  
		Crafty.e('2D, Canvas, Color, Fourway, Gravity')
		  .attr({x: 0, y: 0, w: 50, h: 50})
		  .color('red')
		  .fourway(4)
		  .gravity('Ground');
	}
 }