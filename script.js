/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Array of Quotes-- 6 objects in the array
const quotes = [
	{quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.", 
		source: "Winston S. Churchill"},
	{quote: "It is better to fail in originality than to succeed in imitation.",
		source: "Herman Melville",
		year: 1960},
	{quote: "The road to success and the road to failure are almost exactly the same.", 
		source: "Colin R. Davis",
		year: 2017},
	{quote: "Success usually comes to those who are too busy to be looking for it.",
		source: "Henry David Thoreau"},
	{quote: "Two roads diverged in a wood, and I— I took the one less traveled by, and that has made all the difference.",
		source: "Robert Frost",
		citation: "The Road Not Taken",
		year: 1916},
	{quote: "Age is of no importance unless you're a cheese.",
		source: "Billie Burke"}

];


//Function to get a random quote
function getRandomQuote() {
	for(i = 0; i < quotes.length; i++){
	var randomNum = quotes[Math.floor(Math.random() * quotes.length)]; //Found help with this on OverStack by Ankur Soni
	}
	return randomNum;
}



//Function to write out the quote 
function printQuote() {
	let random = getRandomQuote();
	let html = ' ';

//Concatenating to the html string--Received some help from Slack on where single quotes should be 	
html += '<p class="quote">' + random.quote + '</p>';
html += '<p class="source">' + random.source;

//Using if statements
if(random.citation) {
html +=  '<span class="citation">' + random.citation + '</span>';
} 

if(random.year) {
 html += '<span class="year">' + random.year + '</span>';
} 
//Closing the p tag
html += '</p>';

//Ending by changing the quote-box id to concatenate with the html 
document.getElementById('quote-box').innerHTML = html;
}

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

