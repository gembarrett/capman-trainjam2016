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
	var overlay = document.getElementById("intro");
	overlay.style.display = "block";
	overlay = document.getElementById("death");
	overlay.style.display = "none";
	overlay = document.getElementById("win");
	overlay.style.display = "none";

	var buttons = document.getElementsByTagName('button');
	for (var i = 0; i < buttons.length; i++) {
		if (buttons[i].id == "reload") {
			buttons[i].addEventListener('click', function() {
				reloadLevel("reload");
			});
		} else {
			buttons[i].addEventListener('click', function() {
				game.paused = false;
				showHide(this.parentElement.parentElement.id);
			});
		}
	}
};

function showHide(id) {
	var el = document.getElementById(id);
	// console.log('win - grab the win overlay');
	if (el.style.display == "block") {
		document.getElementById(id).style.display = 'none';
	} else {
		document.getElementById(id).style.display = 'block';
		// console.log('win - show the win overlay');
	}
}

// load assets: define the asset key,
function preload() {
	game.paused = true;

	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	// TODO: turn these into a spritesheet
	game.load.image('munchy', 'assets/munchies/munchy.png');
	game.load.image('munchy2', 'assets/munchies/munchy2.png');
	game.load.image('munchy3', 'assets/munchies/munchy3.png');
	game.load.image('munchy4', 'assets/munchies/munchy4.png');
	game.load.image('munchy5', 'assets/munchies/munchy5.png');
	game.load.image('munchy6', 'assets/munchies/munchy6.png');
	game.load.image('munchy7', 'assets/munchies/munchy7.png');
	game.load.image('munchy8', 'assets/munchies/munchy8.png');
	game.load.image('munchy9', 'assets/munchies/munchy9.png');
	game.load.image('munchy10', 'assets/munchies/munchy10.png');
	game.load.image('munchy11', 'assets/munchies/munchy11.png');
	game.load.image('toilet', 'assets/toilet.png');
	game.load.image('poop', 'assets/poo.png');
	game.load.spritesheet('face', 'assets/faces-sprites.png', 36, 46);
	setUpClicks();
	winning = document.getElementById('win');
	winning = winning.getElementsByTagName('h2');
	losing = document.getElementById('death');
	losing = document.getElementsByTagName('h3');
}

var platforms;
var player;
var score = 0;
var scoreText;
var noOfMunchies = Math.round(window.innerWidth / 100)/2;
var level = 0;
var levelText;
var winning;
var losing;
var toilet;
var toilets;
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
var munchyTypes;
var currentFace = 3;
var munchyArray = [];
var looPosX = 0;

function refreshLevel(status) {
	console.log(score);
	// destroy all the things
	platforms.destroy();
	munchies.destroy();
	toilets.destroy();
	player.destroy();
	// reset all the things
	game.input.enabled = true;
	scoreText.text = "Score: " + score;
	levelText.text = "Level: " + (level+1);
	needToPoop = false;
	munchiesEaten = 0;
	munchiesCreated = 0;
	totMunchiesEaten = 0;
	isDead = false;
	deathTime = 0;
	overlayTime = 0;
	winTime = 0;
	looPosX = 0;
	updateText();
	createSurfaces();
	createWC();
	createPlayer();
	createMunchies();
	game.paused = true;
}

function updateText(status) {
	if (status == 'win') {
		winning[0].textContent = "Level " + (level+1);
	} else {
		losing[0].textContent = "You reached level " + (level+1) + " and scored a total of " + score + " points";
	}
}

