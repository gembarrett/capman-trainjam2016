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
		console.log('is winner')
		// change face to winner
	  chooseFace(false,4,4);
	}
	// if at maximum capacity (with a little lee-way)
	else if (munchiesEaten > maxCapacity+1) {
		console.log('is dead');
		isDead = true;
		if (deathTime == 0) {
			startDeathTimer();
		}
	}
}

function startDeathTimer() {
	deathTime = game.time.now + 1000;
	chooseFace(true,5,5);
	refreshLevel("dead");
}

function startWinnerTimer() {
	winTime = game.time.now + 1000;
	chooseFace(true,4,4);
	// show the winning overlay
	showHide('win');
	// refresh the level
	refreshLevel('win');
}
