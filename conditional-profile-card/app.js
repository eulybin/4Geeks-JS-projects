function render(variables = {}) {
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";
  document.querySelector('#widget_content').innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name || 'Name'} ${
    variables.lastName || 'Last Name'
  }</h1>
          <h2>${variables.role || ''}</h2>
          <h3>${variables.city || ''}, ${variables.country || ''}</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="${
              variables.twitter || 'https://x.com/'
            }"><i class="fab fa-twitter"></i></a></li>
            <li><a href="${
              variables.github || 'https://github.com/'
            }"><i class="fab fa-github"></i></a></li>
            <li><a href="${
              variables.linkedin || 'https://www.linkedin.com/'
            }"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="${
              variables.instagram || 'https://www.instagram.com/'
            }"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

window.onload = function () {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background: 'https://images.unsplash.com/photo-1511974035430-5de47d3b95da',
    // this is the url for the profile avatar
    avatarURL: 'https://randomuser.me/api/portraits/women/42.jpg',
    // social media bar position (left or right)
    socialMediaPosition: 'position-left',
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null,
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll('.picker').forEach(function (elm) {
    elm.addEventListener('change', function (e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute('for'); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == '' || this.value == 'null'
          ? null
          : this.value == 'true'
          ? true
          : this.value == 'false'
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
