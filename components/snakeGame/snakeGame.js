// navBarUlLiElements

let cards = [
	{
		id: 1,
		path: "../tictactoe/tictactoe.html",
		text: "Tic Tac Toe",
		image:
			"https://res.cloudinary.com/dujpte5nz/image/upload/v1685225605/pexels-el%C4%ABna-ar%C4%81ja-3400795_hoixdm.jpg",
	},
	{
		id: 2,
		path: "../bmiCalculator/bmiCalculator.html",
		text: "BMI Calculator",
		image:
			"https://res.cloudinary.com/dujpte5nz/image/upload/v1686747607/bmi_zhenxz.jpg",
	},
	{
		id: 3,
		path: "../snakeGame/snakeGame.html",
		text: "Snake Game",
		image:
			"https://res.cloudinary.com/dujpte5nz/image/upload/v1682930707/pexels-pixabay-34426_ffgevv.jpg",
	},
	{
		id: 4,
		path: "../resizeImage/resizeImage.html",
		text: "Resize & Compress Image",
		image:
			"https://res.cloudinary.com/dujpte5nz/image/upload/v1682930711/pexels-tirachard-kumtanom-733853_abeyzg.jpg",
	},
	{
		id: 5,
		path: "../quiz/quiz.html",
		text: "Quiz",
		image:
			"https://res.cloudinary.com/dujpte5nz/image/upload/v1682930707/pexels-magda-ehlers-1329296_ar2pc2.jpg",
	},
	{
		id: 6,
		path: "../typingTest/typingTest.html",
		text: "Typing Test",
		image:
			"https://res.cloudinary.com/dujpte5nz/image/upload/v1682930706/pexels-andrea-piacquadio-3808904_wjtsq5.jpg",
	},
	{
		id: 7,
		path: "../weatherChecker/weatherChecker.html",
		text: "Weather Checker",
		image:
			"https://res.cloudinary.com/dujpte5nz/image/upload/v1682930707/pexels-daniel-maforte-5544043_esrvco.jpg",
	},
	{
		id: 8,
		path: "../currencyConverter/currencyConverter.html",
		text: "Currency Converter",
		image:
			"https://res.cloudinary.com/dujpte5nz/image/upload/v1685226464/omid-armin-8Nppe0yLmn8-unsplash_y8iruo.jpg",
	},
];

// navbar ul_li_Dynamic
const ulElement = document.getElementById("exploreItems");
cards.forEach((card) => {
	ulElement.innerHTML += `
	<li><a class="dropdown-item" href=${card?.path}> ${card.text}</a></li>
	`;
});

// Snake Game

const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");
const gameHeight = gameBoard.height;
const gameWidth = gameBoard.width;
const boardBackground = "#0C1406";
const snakeColor = "#62E112";
const snakeBorder = "black";
const foodColor = "#FF0000";
const unitSize = 25;
let running = false;

// xVelocity means how far we move towards X-axis on every single game tick.
let xVelocity = unitSize;
let yVelocity = 0;

// food co-ordinates(will calculate later in function).
let foodX;
let foodY;

let score = 0;

// our snake body part is array of objects. Each object is a single body part.
let snake = [
	{ x: unitSize * 4, y: 0 },
	{ x: unitSize * 3, y: 0 },
	{ x: unitSize * 2, y: 0 },
	{ x: unitSize, y: 0 },
	{ x: 0, y: 0 },
];

startBtn.addEventListener("click", startingTheGame);
window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

function startingTheGame(event) {
	score = 0;
	xVelocity = unitSize;
	yVelocity = 0;
	snake = [
		{ x: unitSize * 4, y: 0 },
		{ x: unitSize * 3, y: 0 },
		{ x: unitSize * 2, y: 0 },
		{ x: unitSize, y: 0 },
		{ x: 0, y: 0 },
	];
	gameStart();
	createFood();
	drawFood();
}

// gameStart();
// createFood();
// drawFood();

function gameStart() {
	running = true;
	scoreText.textContent = score;
	createFood();
	drawFood();
	nextTick();
}

function nextTick() {
	if (running) {
		setTimeout(() => {
			clearBoard();
			drawFood();
			moveSnake();
			drawSnake();
			checkGameOver();
			nextTick();
		}, 85);
	} else {
		displayGameOver();
	}
}

function clearBoard() {
	ctx.fillStyle = boardBackground;
	ctx.fillRect(0, 0, gameWidth, gameHeight);
}
// To place the food in the gameBoard.
function createFood() {
	function randomFood(min, max) {
		const range = (max - min) / unitSize;
		const randomNumber = Math.round(Math.random() * range) * unitSize + min;
		return randomNumber;
	}
	foodX = randomFood(0, gameWidth - unitSize);
	foodY = randomFood(0, gameWidth - unitSize);
}

function drawFood() {
	ctx.fillStyle = foodColor;
	ctx.fillRect(foodX, foodY, unitSize, unitSize);
}

function drawSnake() {
	ctx.fillStyle = snakeColor;
	ctx.strokeStyle = snakeBorder;
	snake.forEach((snakePart) => {
		ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
		ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
	});
}

function moveSnake() {
	const head = { x: snake[0].x + xVelocity, y: snake[0].y + yVelocity };
	//removing snake head.
	snake.unshift(head);

	// if food is eaten
	if (snake[0].x === foodX && snake[0].y === foodY) {
		score += 5;
		scoreText.textContent = score;
		createFood();
	} else {
		snake.pop();
	}
}

function changeDirection(event) {
	const keyPressed = event.keyCode;
	// console.log(keyPressed);
	const left = 37;
	const up = 38;
	const right = 39;
	const down = 40;

	//return boolearn value
	const goingUp = yVelocity == -unitSize;
	const goingDown = yVelocity == unitSize;
	const goingLeft = xVelocity == -unitSize;
	const goingRight = xVelocity == unitSize;

	switch (true) {
		case keyPressed == left && !goingRight:
			xVelocity = -unitSize;
			yVelocity = 0;
			break;

		case keyPressed == right && !goingLeft:
			xVelocity = unitSize;
			yVelocity = 0;
			break;

		case keyPressed == up && !goingDown:
			xVelocity = 0;
			yVelocity = -unitSize;
			break;

		case keyPressed == down && !goingUp:
			xVelocity = 0;
			yVelocity = unitSize;
			break;
	}
}

function checkGameOver() {
	switch (true) {
		case snake[0].x < 0:
			running = false;
			break;

		case snake[0].x >= gameWidth:
			running = false;
			break;

		case snake[0].y < 0:
			running = false;
			break;

		case snake[0].y >= gameHeight:
			running = false;
			break;
	}

	// if any body parts touches each other.
	for (let i = 1; i < snake.length; i++) {
		if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
			running = false;
		}
	}
}

function displayGameOver() {
	ctx.font = "50px MV Boli";
	ctx.fillStyle = "#4B378E";
	ctx.textAlign = "center";
	ctx.fillText("GAME OVER!", gameWidth / 2, gameHeight / 2);
	running = false;
}

function resetGame() {
	score = 0;
	xVelocity = unitSize;
	yVelocity = 0;
	snake = [
		{ x: unitSize * 4, y: 0 },
		{ x: unitSize * 3, y: 0 },
		{ x: unitSize * 2, y: 0 },
		{ x: unitSize, y: 0 },
		{ x: 0, y: 0 },
	];
	gameStart();
}
