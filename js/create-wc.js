function createWC() {
  if (level == 0) {
    randomLooX = Math.round((Math.random(0, (game.world.width-100)/1000))*500);

    createToilet(randomLooX);
    // if (game.world.width > 500) {
    //   createPlatforms(70, 250);
    // }
  }
}

function createToilet(posX) {
	toilet = game.add.sprite(posX,0,'toilet');
  game.physics.arcade.enable(toilet);
  toilet.body.bounce.y = 0.2;
  toilet.body.gravity.y = 300;
  toilet.body.collideWorldBounds = true;
}