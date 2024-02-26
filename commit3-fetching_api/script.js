const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const previous = document.querySelector("#previous");
const random = document.querySelector("#random");
const next = document.querySelector("#next");
const dropdown = document.getElementById("search-select");

const baseApi = "https://api.quotable.io";

// Define a global array to store fetched quotes
let fetchedQuotes = [];
let currentQuoteIndex = -1; // Keep track of the index of the current quote

const getQuote = async () => {
  try {
    const response = await fetch(`${baseApi}/random`);
    const data = await response.json();

    fetchedQuotes.push(data); 
    currentQuoteIndex = fetchedQuotes.length - 1;
    displayQuote(data); 
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
};

getQuote();

// Function to get a quote based on tags
const getQuoteByCategory = async (category) => {
  try {
    const response = await fetch(`${baseApi}/quotes?tags=${category}`);
    const data = await response.json();

    fetchedQuotes.push(data);

    currentQuoteIndex = fetchedQuotes.length - 1;
    displayQuote(data);
  } catch (error) {
    window.alert("Ops, something went wrong");
  }
};

// Function to display quote and author
const displayQuote = (data) => {
  if (!data.content) {
    getQuote();
    return;
  }
  quote.innerHTML = `"${data.content}"`;
  author.innerHTML = data.author;

  // Add the displayed quote to the sequence and update the current index
  displayedQuotes.push(data);
  currentQuoteIndex++;
};







