import "./style.scss";
import quotes from "./ts/quotes";

// Genererar ett slumpmässigt tal och multiplicerar med antalet som finns i arrayen och avrundar ner till heltal för att matcha arrayen. Returnerar sen ett quote baserat på indexet som slumpmässigt togs fram.
function getRandomQuote(): string {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

const quoteButton = document.getElementById('quoteButton') as HTMLButtonElement;
const quoteDisplay = document.getElementById('quoteDisplay') as HTMLParagraphElement;

quoteButton.addEventListener('click', () => {
  const randomQuote = getRandomQuote();
  quoteDisplay.textContent = randomQuote;
})