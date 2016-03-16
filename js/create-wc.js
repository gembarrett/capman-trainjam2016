function createWC() {
  toilets = game.add.group();

  // add physics to the munchies as well
  toilets.enableBody = true;

  if (level == 0) {
    createToilet();
  } else if (level == 1) {
    createToilet();
    createToilet();
  } else if (level == 2) {
    createToilet();
    createToilet();
  } else if (level == 3) {
    createToilet();
    createToilet();
  } else if (level == 4) {
    createToilet();
    createToilet();
  } else if (level == 5) {
    randomiseLoos();
  } else if (level == 6) {
    randomiseLoos();
  } else if (level == 7) {
    randomiseLoos();
  } else if (level == 8) {
    randomiseLoos();
  } else if (level == 9) {
    randomiseLoos();
  } else if (level == 10) {
    randomiseLoos();
  } else if (level == 11) {
    randomiseLoos();
  } else if (level == 12) {
    randomiseLoos();
  } else if (level == 13) {
    randomiseLoos();
  } else if (level == 14) {
    randomiseLoos();
  }
}

function randomiseLoos() {
  var noOfLoos = noOfMunchies/(Math.floor(Math.random() * (3 - 1 + 1)) + 1);
  for (var i=0; i<noOfLoos; i++) {
    createToilet();
  }
}

function createToilet() {
  if (looPosX != 0) {
    looPosX = looPosX + Math.round((Math.random(0, (game.world.width-100)/1000))*500);
  } else {
    looPosX = Math.round((Math.random(0, (game.world.width-100)/1000))*500);
  }
	// toilet = game.add.sprite(posX,0,'toilet');
  toilet = toilets.create(looPosX, 0, 'toilet');
  toilet.body.bounce.y = 0.2;
  toilet.body.gravity.y = 300;
  toilet.body.collideWorldBounds = true;
}