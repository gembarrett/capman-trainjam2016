// eat munchie and update score
function eatMunchy(player, munchy) {
	// remove munchy from screen
	munchy.kill();
	munchiesEaten++;
	totMunchiesEaten++;
	// update score
	score += 10;
	scoreText.text = 'Score: ' + score;
	stateCheck();
}


function explodyFace() {
	chooseFace(true, 5,5);
}

function deadFace() {
	chooseFace(true, 6,6);
	allowInput = false;
}

function poopyOrNo() {
	if (munchiesEaten < maxCapacity+1) {
	  chooseFace(false,3,2);
	// reached maximum capacity
} else if (munchiesEaten >= maxCapacity+1) {
		stateCheck();
	}
}

function stateCheck() {
	// if winner
	if (totMunchiesEaten == munchiesCreated) {
	  chooseFace(false,4,4);
		showHide('win');
		refreshLevel('win');
		// winnerText.text = "Next level";
		// if (nextLevelTime == 0) {
		// 	startRestartTimer();
		// } else {
		// 	restartTime = 0;
		// 	startRestartTimer();
		// }
	}
	// if at maximum capacity (with a little lee-way)
	else if (munchiesEaten == maxCapacity+1) {
		chooseFace(true,0,1);
	}
	// if dead
	else if (munchiesEaten > maxCapacity+1) {
		isDead = true;
		if (deathTime == 0) {
			startDeathTimer();
		}
	}
}

function startDeathTimer() {
	deathTime = game.time.now + 1000;
	chooseFace(true, 5,5);
	refreshLevel("dead");
}
