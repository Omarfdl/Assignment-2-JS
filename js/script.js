//Use an array to hold the value of the quotes
const quotes = [
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Robert Frost",
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
  },
  {
    author: "Dr. Seuss",
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  },
  {
    author: "Mark Twain",
    quote: "If you tell the truth, you don't have to remember anything.",
  },
  {
    author: "Oscar Wilde",
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
  },
  
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    return `"${randomQuote.quote}" --${randomQuote.author}`;
}

document.getElementById('quoteButton').addEventListener('click', function() {
  const randomQuote = getRandomQuote();
  document.getElementById('quoteDisplay').innerText = randomQuote;
});