// eat munchie and update score
function eatMunchy(player, munchy) {
	// remove munchy from screen
	munchy.kill();
	munchiesEaten++;
	totMunchiesEaten++;
	// update score
	score += 10;
	scoreText.text = 'Score: ' + score;
	// console.log('ate a munchy, check the state');
	stateCheck();
}


function poopyOrNo() {
	if (munchiesEaten < maxCapacity+1) {
		player.animations.stop();
		currentFace = 3;
		// console.log('not poopy - default face required');
	  chooseFace(false,2);
	// reached maximum capacity
} else if (munchiesEaten == maxCapacity || munchiesEaten == maxCapacity+1) {
		player.animations.stop();
		currentFace = 0;
		// console.log('too many munchies - shocked face required');
		chooseFace(true,1);
	} else {
		// console.log("not poopy or default");
		return false;
	}
}

function stateCheck() {
	if (!(poopyOrNo())) {
		// if winner
		if (totMunchiesEaten == munchiesCreated) {
			// console.log('win - eaten all munchies');
			isDead = true;
			// game.input.enabled = false;
			if (winTime == 0) {
				// console.log('win - delay being set');
				winTime = game.time.now + 2500;
				player.animations.stop();
				currentFace = 4;
				// console.log('win - cool face required');
				chooseFace(true,4);
				game.input.enabled = false;
				player.body.velocity = 0;
			}
		}
		// if at maximum capacity (with a little lee-way)
		else if (munchiesEaten > maxCapacity+1) {
			isDead = true;
			// game.input.enabled = false;
			if (deathTime == 0) {
				// console.log('death - death time being set');
				deathTime = game.time.now + 3000;
				player.animations.stop();
				currentFace = 5;
				// console.log('started death sequence - explosion icon required');
				chooseFace(true,5);
				game.input.enabled = false;
				player.body.velocity = 0;
			}
		}
	}
}