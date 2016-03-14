// eat munchie and update score
function eatMunchy(player, munchy) {
	// remove munchy from screen
	munchy.kill();
	munchiesEaten++;
	totMunchiesEaten++;
	// update score
	score += 10;
	scoreText.text = 'Score: ' + score;
	console.log("stateCheck because munchy eaten");
	stateCheck();
}


function poopyOrNo() {
	if (munchiesEaten < maxCapacity+1) {
	  chooseFace(false,3,2);
	// reached maximum capacity
} else if (munchiesEaten >= maxCapacity+1) {
		chooseFace(true,0,1);
	}
}

function stateCheck() {
	// if winner
	if (totMunchiesEaten == munchiesCreated) {
		console.log('is winner');
		isDead = true;
		game.input.enabled = false;
		if (winTime == 0) {
			winTime = game.time.now + 10;
			chooseFace(true,4,4);
			console.log(winTime);
		}
	}
	// if at maximum capacity (with a little lee-way)
	else if (munchiesEaten > maxCapacity+1) {
		console.log('is dead');
		isDead = true;
		game.input.enabled = false;
		if (deathTime == 0) {
			deathTime = game.time.now + 10;
			chooseFace(true,5,5);
		}
	}
}