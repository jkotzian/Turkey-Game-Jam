Game = {
	start: function() {


		player1Door = false;
		player2Door = false;

		Crafty.init(900,400);
		Crafty.background('rgb(121,205,205)');
			
		Crafty.e('Ground')
			.attr({x: 200, y: 300, w: 100, h: 10})
			.color('green');

		Crafty.e('Ground')
			.attr({x: 0, y:350, w: 500, h: 50})
			.color('green');
		  
		var player1 = Crafty.e('Player1')
		  	.attr({x: 0, y: 299})

	  	var player2 = Crafty.e('Player2')
	  		.attr({x: 100, y: 299})


		player1.bind('KeyDown', function(e) {
			if(e.key == Crafty.keys.ENTER && player1Door == false) {
				console.log("yo")
				this.portalize();
			}
			else if(e.key == Crafty.keys.ENTER && player1Door == true) {
				console.log("yo")
				this.unportalize1();
			}
		});

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
	}
 }
