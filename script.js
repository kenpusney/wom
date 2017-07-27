(function () {

	var WIDTH = 88;
	var HEIGHT = 151;
	var FPS = 10;
	var actors = [];
	var context = null;
	var stage = {};
	var images = [];
	var sprites = [];

	// STAGE Object
	function Stage() {
		this.l = 0; // left
		this.r = WIDTH; // right
		this.t = 0; // top
		this.b = HEIGHT; // bottom
		this.i = 0;
	}

	Stage.prototype = {

		render: function () {
			this.i++;
			if (this.i === sprites.length) this.i = 0;
			var s = sprites[this.i];

			this.clear();

			actors[0].draw(s);
		},

		clear: function () {
			context.clearRect(0, 0, WIDTH, HEIGHT);
		}

	};

	// SPRITE Object
	function Sprite(n, x, y, h, w) {
		this.n = n; // sprite name
		this.x = x;
		this.y = y;
		this.h = h;
		this.w = w;
	}

	// ACTOR Object
	function Actor() {
		this.y = 0;
	}

	Actor.prototype = {
		draw: function (s) {
			context.drawImage(images[s.n], s.x, s.y, s.h, s.w, this.y, 0, 85, 150);
		}
	};

	var init = function () {

		var canvas = document.getElementById('kannwas');
		stage = new Stage();

		canvas.width = WIDTH;
		canvas.height = HEIGHT;
		context = canvas.getContext("2d");

		images.character = new Image();
		images.character.src = 'img/running.png'
		function tick() {
			stage.render();
		}

		setInterval(tick, 1000 / FPS);

		sprites.push(new Sprite('character', 0, 0, 87, 150));
		sprites.push(new Sprite('character', 0, 151, 87, 150));
		sprites.push(new Sprite('character', 0, 302, 87, 150));
		sprites.push(new Sprite('character', 88, 0, 87, 150));
		sprites.push(new Sprite('character', 176, 0, 87, 150));
		sprites.push(new Sprite('character', 264, 0, 87, 150));
		sprites.push(new Sprite('character', 352, 0, 87, 150));
		sprites.push(new Sprite('character', 88, 151, 87, 150));
		sprites.push(new Sprite('character', 88, 302, 87, 150));
		sprites.push(new Sprite('character', 176, 151, 87, 150));
		sprites.push(new Sprite('character', 176, 302, 87, 150));
		sprites.push(new Sprite('character', 264, 151, 87, 150));

		var actor = new Actor();
		actors.push(actor);
	}
	
	init();

}());