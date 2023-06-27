// import { cards } from "./config.mjs";

// Quotes Section

const quoteText = document.getElementsByClassName("quoteContent");
const authorName = document.getElementsByClassName("name");
const quotebtn = document.getElementById("nextQuoteBtn");
const soundBtn = document.getElementsByClassName("sound");
// soundBtn = [<speaker icon>, <speak p tag>] => HTMLCollection []
const copyBtn = document.getElementById("copy");
const twitterBtn = document.getElementById("twitter");
let randomQuote = async () => {
	try {
		quotebtn.classList.add("loading");
		quotebtn.textContent = "Loading Quote...";
		const response = await fetch("https://api.quotable.io/random");
		const jsonData = await response.json();
		const newQuote = jsonData.content;
		const newAuthor = jsonData.author;
		quoteText[0].textContent = newQuote;
		authorName[0].textContent = newAuthor;
		quotebtn.textContent = "New Quote";
		quotebtn.classList.remove("loading");
	} catch (error) {
		console.log("Error found in randomQuote function", error);
	}
};

Array.from(soundBtn).forEach((btn) => {
	btn.addEventListener("click", () => {
		let utterence = new SpeechSynthesisUtterance(
			`${quoteText[0].textContent} By ${authorName[0].textContent}`
		);
		speechSynthesis.speak(utterence);
	});
});

copyBtn.addEventListener("click", () => {
	navigator.clipboard.writeText(quoteText[0].textContent);
});

twitterBtn.addEventListener("click", () => {
	let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText[0].textContent}`;
	window.open(tweetUrl, "_blank");
});

quotebtn.addEventListener("click", randomQuote);

//Card Section

let cards = [
	{
		id: 1,
		path: "./components/tictactoe/tictactoe.html",
		text: "Tic Tac Toe",
		image:
			"https://res.cloudinary.com/dujpte5nz/image/upload/v1685225605/pexels-el%C4%ABna-ar%C4%81ja-3400795_hoixdm.jpg",
	},
	{
		id: 2,
		path: "./components/bmiCalculator/bmiCalculator.html",
		text: "BMI Calculator",
		image:
			"https://res.cloudinary.com/dujpte5nz/image/upload/v1686747607/bmi_zhenxz.jpg",
	},
	{
		id: 3,
		path: "./components/snakeGame/snakeGame.html",
		text: "Snake Game",
		image:
			"https://res.cloudinary.com/dujpte5nz/image/upload/v1682930707/pexels-pixabay-34426_ffgevv.jpg",
	},
	{
		id: 4,
		path: "./components/resizeImage/resizeImage.html",
		text: "Resize & Compress Image",
		image:
			"https://res.cloudinary.com/dujpte5nz/image/upload/v1682930711/pexels-tirachard-kumtanom-733853_abeyzg.jpg",
	},
	{
		id: 5,
		path: "./components/quiz/quiz.html",
		text: "Quiz",
		image:
			"https://res.cloudinary.com/dujpte5nz/image/upload/v1682930707/pexels-magda-ehlers-1329296_ar2pc2.jpg",
	},
	{
		id: 6,
		path: "./components/typingTest/typingTest.html",
		text: "Typing Test",
		image:
			"https://res.cloudinary.com/dujpte5nz/image/upload/v1682930706/pexels-andrea-piacquadio-3808904_wjtsq5.jpg",
	},
	{
		id: 7,
		path: "./components/weatherChecker/weatherChecker.html",
		text: "Weather Checker",
		image:
			"https://res.cloudinary.com/dujpte5nz/image/upload/v1682930707/pexels-daniel-maforte-5544043_esrvco.jpg",
	},
	{
		id: 8,
		path: "./components/currencyConverter/currencyConverter.html",
		text: "Currency Converter",
		image:
			"https://res.cloudinary.com/dujpte5nz/image/upload/v1685226464/omid-armin-8Nppe0yLmn8-unsplash_y8iruo.jpg",
	},
];

function addItemToDom(item) {
	let rowDiv = document.getElementById("data");
	let dataDiv = document.createElement("div");
	dataDiv.className = "col-6 col-lg-3 mb-4";
	dataDiv.innerHTML = `
    <a href=${item.path}>  
      <div class="tile">
        <img src=${item.image} alt=${item.text} />
        <div class="tile-text text-center" id="card_text">
          <h5>${item.text}</h5>
        </div>
      </div>
    </a>`;
	rowDiv.append(dataDiv);
}

let addDataToDiv = (data) => {
	let rowDiv = document.getElementById("data");
	rowDiv.innerHTML = ""; // Clear the existing content before adding new cards!!Important step!!

	data.forEach((item) => {
		addItemToDom(item);
	});
};

(async function () {
	addDataToDiv(cards);
})();

// Search Section

const searchElement = document.getElementById("inputBox");
searchElement.addEventListener("keyup", (e) => {
	const searchedString = e.target.value.toLowerCase();
	const filteredCards = cards.filter((card) => {
		return card.text.toLowerCase().includes(searchedString);
	});
	addDataToDiv(filteredCards); // Use addDataToDiv to display filtered cards!!!
});

// navbar ul_li_Dynamic
const ulElement = document.getElementById("exploreItems");
cards.forEach((card) => {
	// console.log(card);
	ulElement.innerHTML += `
	<li><a class="dropdown-item" href=${card?.path}> ${card.text}</a></li>
	`;
});
