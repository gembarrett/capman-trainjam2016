// create instance of phaser object, assign to game variable
// set canvas size, render context and DOM element it should be put in
// references to Phaser essential functions
var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var overlay = document.getElementById("intro");
var dismissButton = overlay.getElementsByTagName('button');
dismissButton[0].onclick = hideOverlay;

function hideOverlay() {
	overlay.remove('#intro');
	game.paused = false;
};

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
}

var platforms;
var player;
var score = 0;
var scoreText;
var noOfMunchies = Math.round(window.innerWidth / 100);
var winnerText;
// var livesText;
var deathText;
var lives = Math.round(Math.random())+1;
var level = 0;
var toilet;
var poo;
var needToPoop = false;
var munchiesEaten = 0;
var munchiesCreated = 0;
var totMunchiesEaten = 0;
var allowInput = true;
var isDead = false;
var deathTime = 0;
var introText;
var dimension;
var noOfPlatforms;
var randomX;
var randomY;
var restartTime = 0;

// function startRestartTimer() {
// 	restartTime = game.time.now + 5000000;
// }
//
// function refreshLevel() {
// 	platforms.destroy();
// 	munchies.destroy();
// 	toilet.destroy();
// 	player.destroy();
// 	deathText.visible = false;
// 	createSurfaces();
// 	createWC();
// 	createPlayer();
// 	createMunchies();
// 	isDead = false;
// }
