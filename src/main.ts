import "./style.scss";
import quotes from "./ts/quotes";

/*
Hämtar quotes slumpmässigt från arrayen som innehåller alla citat.
Väljer ut ett citat.
Hämtar knappen och p taggen.
När man klickar på knappen ska citatet visa sig i p taggen.
*/

// Genererar ett slumpmässigt tal och multiplicerar med antalet som finns i arrayen och avrundar ner till heltal för att matcha arrayen. Returnerar sen ett quote baserat på indexet som slumpmässigt togs fram.
function getRandomQuote(): string {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Hämtar knappen och p taggen där citaten ska ligga.
const quoteButton = document.getElementById('quoteButton') as HTMLButtonElement;
const quoteDisplay = document.getElementById('quoteDisplay') as HTMLParagraphElement;

// När man klickar på knappen så visas ett quote som valdes i getRandomQuote.
quoteButton.addEventListener('click', () => {
  const randomQuote = getRandomQuote();
  quoteDisplay.textContent = randomQuote;

  // Lägg till fade-in animationen
  quoteDisplay.classList.remove("fade-in");
  void quoteDisplay.offsetWidth; // Force a reflow to retrigger animation
  quoteDisplay.classList.add("fade-in");
})

let currentQuote: string = "";

quoteButton.addEventListener("click", () => {
  currentQuote = getRandomQuote();
  quoteDisplay.textContent = currentQuote;
});

const favoriteButton = document.getElementById('favoriteButton') as HTMLButtonElement;
const favoriteQuotes = document.getElementById('favoriteQuotes') as HTMLElement;

favoriteButton.addEventListener('click', () => {
  // Klickanimation på favoritknappen
  favoriteButton.classList.add("clicked");
  setTimeout(() => {
    favoriteButton.classList.remove("clicked");
  }, 300);

  addToFavorites();
});

function addToFavorites(): void {
  if (currentQuote) {
    favoriteQuotes.innerHTML += `<li>${currentQuote}</li>`;
  } else {
    const tempMessage = document.createElement("li");
    tempMessage.textContent = "Generate a quote first before adding it to favorites!";
    tempMessage.style.color = "red"; 
  
    favoriteQuotes.appendChild(tempMessage);
  
    setTimeout(() => {
      tempMessage.remove();
    }, 2000); 
  }
}
