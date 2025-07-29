window.onload = function () {
  const suits = ['spade', 'heart', 'club', 'diamond'];
  const cardNumbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  const randomSuitNumber = suits[Math.floor(Math.random() * suits.length)];
  const randomCardNumber = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];

  // Create the <span> tag where the card number will go inside the .card <div>
  const mainDiv = document.querySelector('.card');
  const printRandomCardNumber = document.createElement('span');
  printRandomCardNumber.textContent = randomCardNumber;
  printRandomCardNumber.style.fontSize = '128px';
  mainDiv.appendChild(printRandomCardNumber);
};
