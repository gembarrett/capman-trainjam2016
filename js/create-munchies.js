function createMunchies() {

  /** creation of munchies **/
  // create group for munchies
  munchies = game.add.group();

  // add physics to the munchies as well
  munchies.enableBody = true;

  // create munchies
  if (level == 0) {
    noOfMunchies = Math.round(window.innerWidth / 100)/2;
    addMunchies('munchy');
    addMunchies('munchy2');
  } else if (level == 1) {
    munchyTypes = 3;
    noOfMunchies = Math.round(window.innerWidth / 100)/2;
    addMunchies('munchy3');
    addMunchies('munchy4');
    addMunchies('munchy5');
  } else if (level == 2) {
    addMunchies('munchy6');
    addMunchies('munchy7');
    addMunchies('munchy8');
  } else if (level == 3) {
    addMunchies('munchy9');
    addMunchies('munchy10');
    addMunchies('munchy11');
  } else if (level == 4) {
    addMunchies('munchy2');
    addMunchies('munchy4');
    addMunchies('munchy7');
  } else if (level == 5) {
    randomiseMunchies(2);
  } else if (level == 6) {
    randomiseMunchies(3);
  } else if (level == 7) {
    randomiseMunchies(4);
  } else if (level == 8) {
    randomiseMunchies(5);
  } else if (level == 9) {
    randomiseMunchies(6);
  } else if (level == 10) {
    randomiseMunchies(7);
  } else if (level == 11) {
    randomiseMunchies(8);
  } else if (level == 12) {
    randomiseMunchies(9);
  } else if (level == 13) {
    randomiseMunchies(10);
  } else if (level == 14) {
    randomiseMunchies(11);
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

function randomiseMunchies(typesNeeded) {
  noOfMunchies = Math.round(window.innerWidth / 100)/(munchyTypes*2);
  munchyArray[0] = 'munchy';
  for (var i=2; i<12; i++) {
    munchyArray[i] = 'munchy'+i;
    // console.log(munchyArray[i]);
  }
  // console.log(munchyArray);
  for (var j=0; j<=typesNeeded;j++) {
    var thisMunchy = munchyArray[Math.floor(Math.random() * (11 - -1 + 1)) + -1];
    console.log(thisMunchy);
    if (thisMunchy != undefined) {
      addMunchies(thisMunchy);
    }
  }
}