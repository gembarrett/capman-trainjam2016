// place items to render in order from back to front
function create() {

	// enable physics
	game.physics.startSystem(Phaser.Physics.ARCADE);

	/** set the scene **/
	// add background
  var sky = game.add.sprite(0,0, 'sky');
	// scale the sky because why not
  sky.scale.setTo(4,4);

	createSurfaces();

	createWC();

	createPlayer();

	createMunchies();

	// show scoree with specific positioning and style
	scoreText = game.add.text(16,16, 'Score: 0', {
		fontSize:'20px', fill: '#000'
	});

	winnerText = game.add.text(game.world.centerX, game.world.centerY, '', {
		fontSize:'30px', fill: '#000'
	});

	// livesText = game.add.text(game.world.width/2,16, 'Lives: '+lives, {
	// 	fontSize:'32px', fill: '#000'
	// });
	//
	deathText = game.add.text(game.world.centerX, game.world.centerY, '', {
		fontSize: '30px', fill: '#000'
	});


	// introText = game.add.text(game.world.centerX, game.world.centerY, '- click to start -', { font: "40px Helvetica", fill: "#ffffff", align: "center" });
	// introText.anchor.setTo(0.5, 0.5);
	deathText.anchor.setTo(0.5, 0.5);
	winnerText.anchor.setTo(0.5, 0.5);
	// game.input.onDown.add(refreshLevel, this);


}