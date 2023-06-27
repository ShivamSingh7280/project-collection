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
	// console.log(card);
	ulElement.innerHTML += `
	<li><a class="dropdown-item" href=${card?.path}> ${card.text}</a></li>
	`;
});

// BMI CALCULATOR

// Hide the result box initially
document.querySelector(".resultBox").style.display = "none";

// Get the form element
const form = document.getElementById("user_Data");
// Add submit event listener to the form
form.addEventListener("submit", (event) => {
	event.preventDefault(); // Prevent form submission

	// Get the user's age
	const age = parseInt(document.getElementById("age").value);

	// Get the user's gender
	const gender = document.querySelector('input[name="gender"]:checked').value;
	// console.log("gender", gender);
	// Get the user's height (in cm)
	const height = parseInt(document.getElementById("height").value);

	// Get the user's weight (in kg)
	const weight = parseInt(document.getElementById("weight").value);

	// Function to calculate BMI
	const calculateBMI = (height, weight) => {
		// Convert height to meters.
		const heightInMeters = height / 100;
		// Calculate BMI using the formula: weight (kg) / (height (m))^2
		const bmi = weight / (heightInMeters * heightInMeters);
		return bmi;
	};

	// Calculate BMI
	const bmi = calculateBMI(height, weight);

	// Display the calculated BMI
	document.getElementById("result").textContent = bmi.toFixed(2);

	// Function to get the comment based on BMI and gender
	const getComment = (bmi, gender) => {
		if (bmi !== null && gender !== null) {
			if (gender === "male") {
				if (bmi < 18.5) {
					return "You are underweight. Please take care of yourself.";
				} else if (bmi >= 18.5 && bmi < 25) {
					return "Your weight is normal. You're awesome.";
				} else if (bmi >= 25 && bmi < 30) {
					return "You are overweight. Please take care of yourself.";
				} else {
					return "You are obese. Please take care of yourself.";
				}
			} else {
				if (bmi < 18.5) {
					return "You are underweight. Please take care of yourself.";
				} else if (bmi >= 18.5 && bmi < 24) {
					return "Your weight is normal. You're awesome.";
				} else if (bmi >= 24 && bmi < 29) {
					return "You are overweight. Please take care of yourself.";
				} else {
					return "You are obese. Please take care of yourself.";
				}
			}
		}
	};
	// Provide a comment based on the BMI value
	const comment = getComment(bmi, gender);
	document.querySelector(".comment").textContent = comment;

	// Show the result box
	document.querySelector(".resultBox").style.display = "block";
});

// Add click event listener to the refresh button
const refreshBtn = document.querySelector(".refreshBtn button");
refreshBtn.addEventListener("click", () => {
	// Reset the form
	form.reset();

	// Hide the result box
	document.querySelector(".resultBox").style.display = "none";
});
