function useToilet(toilet) {
	if (needToPoop) {
		poo = game.add.sprite(toilet.body.x,toilet.body.y,'poop');
		score +=10;
		munchiesEaten = 0;
		chooseFace(false, 3,2);
	}
}