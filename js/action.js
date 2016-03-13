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

	// refreshLevel();
}


function explodyFace() {
	chooseFace(true, 5,5);
}

function deadFace() {
	chooseFace(true, 6,6);
	allowInput = false;
}

function poopyOrNo() {
	if (munchiesEaten < munchiesLimit) {
	  chooseFace(false,3,2);
	// reached maximum capacity
	} else if (munchiesEaten >= munchiesLimit) {
		stateCheck();
	}
}

function stateCheck() {
	if (totMunchiesEaten == munchiesCreated) {
	  chooseFace(false,4,4);
		// winnerText.text = "Next level";
		// if (nextLevelTime == 0) {
		// 	startRestartTimer();
		// } else {
		// 	restartTime = 0;
		// 	startRestartTimer();
		// }
	}
	// if at maximum capacity
	else if (munchiesEaten == munchiesLimit) {
		chooseFace(true,0,1);
	}
	else if (munchiesEaten >= munchiesLimit) {
		isDead = true;
		if (deathTime == 0) {
			startDeathTimer();
		}
	}
}

function startDeathTimer() {
	deathTime = game.time.now + 1000;
	chooseFace(true, 5,5);
}
