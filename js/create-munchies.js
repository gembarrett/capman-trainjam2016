function createMunchies() {
  /** creation of munchies **/
  // create group for munchies
  munchies = game.add.group();

  // add physics to the munchies as well
  munchies.enableBody = true;

  // create munchies
  if (level == 0) {
    addMunchies('munchy');
    addMunchies('munchy2');
    munchyTypes = 2;
  } else if (level == 1) {
    addMunchies('munchy3');
    addMunchies('munchy4');
    addMunchies('munchy5');
    munchyTypes = 3;
  }
}

function addMunchies(munchyName) {
	for (var i = 0; i < noOfMunchies; i++) {
		var munchyDistance = game.world.width+1;

		while (munchyDistance > game.world.width) {
			var munchyDistance = (game.world.height/noOfMunchies)*Math.random()*10;
		}

		// munchy in each group a random distance apart from each other
		var munchy = munchies.create(munchyDistance, 0, munchyName);

		// gravity has one job
		munchy.body.gravity.y = 300;

		// randomise the bounce of each munchy
		munchy.body.bounce.y = 0.7 + Math.random() * 0.2;

    munchiesCreated++;
	}
  maxCapacity = Math.round(munchiesCreated/3);

}
