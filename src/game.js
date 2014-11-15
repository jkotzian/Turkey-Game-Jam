Game = {
	start: function() {

		Crafty.init(900,400);
		Crafty.background('rgb(121,205,205)');
			
		Crafty.e('Ground')
			.attr({x: 200, y: 300, w: 100, h: 10})
			.color('green');

		Crafty.e('Ground')
			.attr({x: 600, y: 300, w: 100, h: 50})
			.color('green');

		Crafty.e('Ground')
			.attr({x: 0, y:350, w: 1000, h: 50})
			.color('green');

		Crafty.e('Ground')
			.attr({x: 0, y:350, w: 1000, h: 50})
			.color('green');
		  
		Crafty.e('Player1')
		  	.attr({x: 0, y: 299})

	  	Crafty.e('Player2')
	  		.attr({x: 100, y: 299})

	  	Crafty.e('Enemy')
	  		.attr({x: 200, y: 200})

	  	Crafty.e('Portal')
	  		.attr({x: 100, y: 200})
	}
 }
