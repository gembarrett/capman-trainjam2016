function createPlayer() {
  /** creation of player **/
  // player @ 32px x 150px from bottom, use dude asset
  player = game.add.sprite(42, game.world.height - 150, 'face');

  // enable physics on player
  game.physics.arcade.enable(player);

  // player physics properties
  // higher number = bigger bounce
  player.body.bounce.y = 0.2;
  // higher number = heavier object = faster it falls
  player.body.gravity.y = 100;
  // stop player from falling off the world
  player.body.collideWorldBounds = true;
  player.animations.stop();
  currentFace = 3;
  // console.log('creating player - default face required');
  chooseFace(false,2);

}

function chooseFace(poopNeed, side) {
  needToPoop = poopNeed;
  player.animations.add('left', [side], 10, true);
  player.animations.add('right', [side], 10, true);
}


