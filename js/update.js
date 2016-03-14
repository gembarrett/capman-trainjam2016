// called every time the frame is looped
function update() {
	// test player sprite and platforms group, test for collision
	// basically make all platforms firm
	game.physics.arcade.collide(player, platforms);

	// populate cursor object wih four properties
	cursors = game.input.keyboard.createCursorKeys();

	// poll cursor properties
	// reset horizontal velocity on sprite
	// player.body.velocity.x = 0;

		// if left cursor is down
		if (cursors.left.isDown) {
			// it's a jump to the left
			player.body.velocity.x = -150;
			player.animations.play('left');
		} else if(cursors.right.isDown) {
			// then a step to the riiiiiiiight
			player.body.velocity.x = 150;
			player.animations.play('right');
		} else {
			player.frame = currentFace;
		}

		// if the up key is pressed while the player is on the ground
		if (cursors.up.isDown && player.body.touching.down) {
			// send the character up into the air
			player.body.velocity.y = -200;
		}


	// check for collisions between the munchies and ledges
	// stop munchies falling through the world
	game.physics.arcade.collide(munchies, platforms);
	// check for overlap between fishie and player
	game.physics.arcade.overlap(player, munchies, eatMunchy, null, this);

	game.physics.arcade.collide(toilets, platforms);
	game.physics.arcade.overlap(player, toilets, useToilet, null, this);

	// if dead and time for face to change
	if(isDead && ((game.time.now >= deathTime) && (game.time.now <= deathTime+100))){
		player.animations.stop();
		currentFace = 6;
		// console.log('dead and post-delay - dead face required');
		chooseFace(true,6);
		// console.log(currentFace);
		// deathText.text = "Exceeded maximum capacity!";
		// deathText.visible = true;
		// game.paused = true;
		// if character is dead, show overlay after a while
		// if overlay delay time isn't set yet
		if (overlayTime == 0) {
			// set it
			overlayTime = game.time.now + 10000;
		}
		// if time for death overlay to show
		else {
			// console.log('time to show overlay');
			showHide("death");
			refreshLevel('death');
		}
	}
	// else
		// deathText.text = "Exceeded maximum capacity!";
		// deathText.visible = true;
		// game.paused = true;
	else if(isDead && ((game.time.now >= winTime) && (game.time.now <= winTime+100))) {
		// console.log('win - delay is over');
		// show the winning overlay
		showHide('win');
		if (level <15) {
			level++;
		}
		// console.log('win - increase level');
		// refresh the level
		refreshLevel('win');
	}

}