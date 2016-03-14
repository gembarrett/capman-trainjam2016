function useToilet(toilet) {
	// check if needtopoop is true
	if (needToPoop) {
		// create poop
		createPoop(toilet.body.x,toilet.body.y);
		// increase score by 10
		score +=10;
		// reset number of munchies eaten
		munchiesEaten = 0;
		// reset faceto default
		player.animations.stop();
		currentFace = 3;
		// console.log('just pooped - default face required');
		chooseFace(false,2);
		// reloadLevel();
	}
}

function createPoop(posX, posY) {
	poo = game.add.sprite(posX, posY,'poop');
	game.physics.arcade.enable(poo);
	poo.body.gravity.y = 300;
}