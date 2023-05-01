// import { projectsList } from "./projectsList";
const quoteText = document.getElementsByClassName("quoteContent");
const authorName = document.getElementsByClassName("name");
const quotebtn = document.getElementById("nextQuoteBtn");
const soundBtn = document.getElementById("sound");
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

soundBtn.addEventListener("click", () => {
	let utterence = new SpeechSynthesisUtterance(
		`${quoteText[0].textContent} By ${authorName[0].textContent}`
	);
	// utterence.pitch = 1;
	// utterence.rate = 1.2;
	// utterence.volume = 1;
	speechSynthesis.speak(utterence);
});

copyBtn.addEventListener("click", () => {
	navigator.clipboard.writeText(quoteText[0].textContent);
});

twitterBtn.addEventListener("click", () => {
	let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText[0].textContent}`;
	window.open(tweetUrl, "_blank");
});

quotebtn.addEventListener("click", randomQuote);

//=============================swipper================================================

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	centeredSlides: true,
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
