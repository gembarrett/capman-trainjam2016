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

	if (allowInput) {
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
			poopyOrNo();
		}

		// if the up key is pressed while the player is on the ground
		if (cursors.up.isDown && player.body.touching.down) {
			// send the character up into the air
			player.body.velocity.y = -200;
		}

	}

	// check for collisions between the munchies and ledges
	// stop munchies falling through the world
	game.physics.arcade.collide(munchies, platforms);
	// check for overlap between fishie and player
	game.physics.arcade.overlap(player, munchies, eatMunchy, null, this);

	game.physics.arcade.collide(toilet, platforms);
	game.physics.arcade.overlap(player, toilet, useToilet, null, this);

	if(isDead && (game.time.now >= deathTime)){
		chooseFace(true,6,6);
		deathText.text = "Exceeded maximum capacity!";
		deathText.visible = true;
		game.paused = true;
		overlayTime = game.time.now + 1000;
	}
	// if character is dead, show overlay after a while
	else if(isDead && (game.time.now >= overlayTime)){
		showHide("death");
		// chooseFace(true,6,6);
		// deathText.text = "Exceeded maximum capacity!";
		// deathText.visible = true;
		// game.paused = true;
	}

}