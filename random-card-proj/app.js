const generateRandomCard = () => {
  const suits = ['♠️', '♥️', '♣️', '♦️'];
  const cardNumbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomCardNumber = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];

  // Target card number span and append to main div
  const mainDiv = document.querySelector('.card');
  const cardNumberSpan = document.querySelector('.card-number');
  cardNumberSpan.textContent = randomCardNumber;
  cardNumberSpan.style.fontSize = '158px';
  mainDiv.appendChild(cardNumberSpan);

  //Target suits spans and add randomsuit to each
  const suitsSpans = document.querySelectorAll('.suit');
  suitsSpans.forEach((card) => (card.textContent = randomSuit));
};

// Target HTML Button and Generate Random Card
const generateCardBtn = document.getElementById('generate-card-btn');
generateCardBtn.addEventListener('click', (e) => {
  e.preventDefault();
  generateRandomCard();
});

//Generate a card automatically every 10 seconds
setInterval(generateRandomCard, 10000);

// Generate a card automatically when the window loads
window.onload = function () {
  generateRandomCard();
};
