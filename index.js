import { projectsList } from "./projectsList";
let quoteText = document.getElementsByClassName("quote");
let quotebtn = document.getElementById("nextQuoteBtn");

function randomQuote() {
	console.log("randomQuote Generated");
}

quotebtn.addEventListener("click", randomQuote);
