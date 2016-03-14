// create instance of phaser object, assign to game variable
// set canvas size, render context and DOM element it should be put in
// references to Phaser essential functions
var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update });

// showHide('intro');
// dismissButton[0].onclick = showHide('intro');

// function hideOverlay() {
// 	overlay.remove('#intro');
// 	game.paused = false;
// };

function setUpClicks() {
	console.log('setting up clicks');
	var overlay = document.getElementById("intro");
	overlay.style.display = "block";
	overlay = document.getElementById("death");
	overlay.style.display = "none";
	overlay = document.getElementById("win");
	overlay.style.display = "none";

	var buttons = document.getElementsByTagName('button');
	for (var i = 0; i < buttons.length-1; i++) {
		if (buttons[i].id == "reload") {
			buttons[i].addEventListener('click', function() {
				reloadLevel("reload");
			});
		} else {
			buttons[i].addEventListener('click', function() {
				console.log("button click to dismiss");
				game.paused = false;
				showHide(this.parentElement.parentElement.id);
			});
		}
	}
};

function showHide(id) {
	var el = document.getElementById(id);
	if (el.style.display == "block") {
		document.getElementById(id).style.display = 'none';
	} else {
		document.getElementById(id).style.display = 'block';
	}
}

// load assets: define the asset key,
function preload() {
	game.paused = true;

	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.image('munchy', 'assets/munchies/munchy.png');
	game.load.image('munchy2', 'assets/munchies/munchy2.png');
	game.load.image('munchy3', 'assets/munchies/munchy3.png');
	game.load.image('munchy4', 'assets/munchies/munchy4.png');
	// game.load.image('munchy5', 'assets/munchies/munchy5.png');
	game.load.image('toilet', 'assets/toilet.png');
	game.load.image('poop', 'assets/poo.png');
	game.load.spritesheet('face', 'assets/faces-sprites.png', 36, 46);
	setUpClicks();

}

var platforms;
var player;
var score = 0;
var scoreText;
var noOfMunchies = Math.round(window.innerWidth / 100);
var winnerText;
// var livesText;
var deathText;
var level = 0;
var toilet;
var poo;
var needToPoop = false;
var munchiesEaten = 0;
var munchiesCreated = 0;
var totMunchiesEaten = 0;
var isDead = false;
var deathTime = 0;
var overlayTime = 0;
var winTime = 0;
var introText;
var dimension;
var noOfPlatforms;
var randomX;
var randomY;
var poops;

function refreshLevel(status) {
	// destroy all the things
	console.log("refreshLevel" + status);
	platforms.destroy();
	munchies.destroy();
	toilet.destroy();
	player.destroy();
	// reset all the things
	scoreText.text = "Score: " + 0;
	needToPoop = false;
	munchiesEaten = 0;
	munchiesCreated = 0;
	totMunchiesEaten = 0;
	isDead = false;
	deathTime = 0;
	overlayTime = 0;
	winTime = 0;
	createSurfaces();
	createWC();
	createPlayer();
	createMunchies();
	game.paused = true;
	game.input.enabled = true;
}