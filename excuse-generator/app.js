window.onload = function () {
  const p = document.getElementById('excuse');

  // modified data structure to use object destructuring in function
  const excuseObj = {
    who: ['The dog', 'My grandma', 'The mailman', 'My bird'],
    action: ['ate', 'peed', 'crushed', 'broke'],
    what: ['my homework', 'my phone', 'the car'],
    when: [
      'before the class',
      'when I was sleeping',
      'while I was exercising',
      'during my lunch',
      'while I was praying',
    ],
  };

  // generate a random number based on array length
  const generateRandomNumber = (arrLength) => {
    return Math.floor(Math.random() * arrLength);
  };

  // generate excuse function
  const generateExcuse = ({ who, action, what, when }) => {
    let result = `${who[generateRandomNumber(who.length)]} ${
      action[generateRandomNumber(action.length)]
    } ${what[generateRandomNumber(what.length)]} ${
      when[generateRandomNumber(when.length)]
    }`;
    return (p.textContent = result);
  };

  generateExcuse(excuseObj);
};
