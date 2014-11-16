numTeddy = 0;

Crafty.c("teddyBears", {
	init: function() {
		this.numBears += 1;
		numTeddy += 0;
		this.requires('Actor, Color, Collision')
			.attr({w:50,h:50})
			.color('#663300')
			.getTeddy();
	},

	getTeddy: function() {
		this.onHit('Player', this.destroyTeddy);
		return this;

	},

	destroyTeddy: function() {
		this.numBears -= 1;
		numTeddy -= 1;
		console.log(numTeddy)
		this.destroy();
	}
});
