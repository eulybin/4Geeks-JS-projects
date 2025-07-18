window.onload = function () {
  const dataObj = {
    prefix: ['https://'],
    pronoun: ['the', 'our'],
    adj: ['great', 'big'],
    noun: ['jogger', 'racoon'],
    extension: ['.com', '.net'],
  };

  const outputElem = document.getElementById('domain-name-output');

  const generateDomainName = ({ prefix, pronoun, adj, noun, extension }) => {
    let result = '';
    for (let h = 0; h < prefix.length; h++) {
      for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adj.length; j++) {
          for (let k = 0; k < noun.length; k++) {
            for (let l = 0; l < extension.length; l++) {
              result += `<p>${prefix[h]}${pronoun[i]}${adj[j]}${noun[k]}${extension[l]}</p>`;
            }
          }
        }
      }
    }
    return (outputElem.innerHTML = result);
  };

  generateDomainName(dataObj);
};
