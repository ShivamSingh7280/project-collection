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

// Tic Tac Toe
