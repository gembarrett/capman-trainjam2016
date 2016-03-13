function createSurfaces() {
  // platforms group contains ground and ledges
  platforms = game.add.group();

  // enable physics for objects in platforms group
  platforms.enableBody = true;

  // create ground
  var ground = platforms.create(0, game.world.height - 64, 'ground');

  // scale ground to fit width
  ground.scale.setTo(8,4);

  // keep ground in place otherwise it's a moving object that's affected by the player colliding with it
  ground.body.immovable = true;

  // create ledges
  var ledge;

  getNumberOfPlatforms();

  if (level == 0) {
    // x then y from bottom to top
    // createPlatforms(0, 450);
    for (var i=0; i<noOfPlatforms; i++) {
        if (randomX != 0) {
          randomX = 100+Math.round((Math.random(0, (game.world.width)/10000))*500);
        // } else {
        //   randomX = 1000+Math.round((Math.random(0, (game.world.width)/1000))*500);
        }
        if (randomY != 0) {
          randomY = 100+Math.round((Math.random(0, (game.world.height)/10000))*500);
        // } else {
        //   randomY = 300+Math.round((Math.random(0, (game.world.width-300)/1000))*500);
        }
        createPlatforms(randomX, randomY);
    }
  }
}

function getNumberOfPlatforms() {
  // get width of world
  // get height of world
  // which is the larger number?
  if (game.world.width > game.world.height) {
    dimension = game.world.width;
  } else {
    dimension = game.world.height;
  }
  noOfPlatforms = dimension/100;

}

function createPlatforms(dim1, dim2) {
	ledge = platforms.create(dim1,dim2,'ground');

	// keep ledge in place
	ledge.body.immovable = true;
}

function reloadLevel() {
  score -= 10;
  platforms.destroy();
  createSurfaces();
}
