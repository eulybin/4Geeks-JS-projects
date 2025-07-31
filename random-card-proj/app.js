window.onload = function () {
  const suits = ['spade', 'heart', 'club', 'diamond'];
  const cardNumbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomCardNumber = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];

  // Generate and append the card number
  const mainDiv = document.querySelector('.card');
  const printRandomCardNumber = document.createElement('span');
  printRandomCardNumber.textContent = randomCardNumber;
  printRandomCardNumber.style.fontSize = '158px';
  mainDiv.appendChild(printRandomCardNumber);

  // Generate suit and display it
  const heartDiv = document.querySelector('.heart');
  const diamondDiv = document.querySelector('.diamond');
  const spadeDiv = document.querySelector('.spade');
  const clubDiv = document.querySelector('.club');
  switch (randomSuit) {
    case 'heart':
      heartDiv.style.display = 'block';
      break;
    case 'diamond':
      diamondDiv.style.display = 'block';
      break;
    case 'spade':
      spadeDiv.style.display = 'block';
      break;
    case 'club':
      clubDiv.style.display = 'block';
      break;
    default:
      clubDiv.style.display = 'block';
      break;
  }
};
