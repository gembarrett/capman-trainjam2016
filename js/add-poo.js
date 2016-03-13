function useToilet(toilet) {
	stateCheck();
	if (needToPoop) {
		createPoop(toilet.body.x,toilet.body.y);
		score +=10;
		munchiesEaten = 0;
		chooseFace(false, 3,2);
		reloadLevel();
	}
}

function createPoop(posX, posY) {
	poo = game.add.sprite(posX, posY,'poop');
	game.physics.arcade.enable(poo);
	poo.body.gravity.y = 300;
}