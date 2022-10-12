const toggler = document.querySelector('.toggler');
const navMenu = document.querySelector('.menu-items');
const linkItems = document.querySelectorAll('.menu-links');

toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  navMenu.classList.toggle('show-menu');
});

for (let i = 0; i < linkItems.length; i += 1) {
  linkItems[i].addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    toggler.classList.toggle('active');
  });
}

// product data for portfolio
const projects = [
  {
    id: 0,
    name: 'Tonic',
    subTitle: { title: 'Canopy', role: 'Back End Dev', year: '2015' },
    shortDesc: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
    imgURL: 'img/tonic_desktop.png',
    modalURL: 'img/modal_Portfolio.png',
    techs: [
      'Html', 'Css', 'Javascript',
    ],
    linkToLive: 'https://sekoviper.github.io/portfolio/',
    linkToSrc: 'https://github.com/SekoViper/portfolio',
  },

  {
    id: 1,
    name: 'Multi-Post Stories',
    subTitle: { title: 'Canopy', role: 'Back End Dev', year: '2015' },
    shortDesc: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
    imgURL: 'img/gym%20fit.png',
    modalURL: 'img/modal_Portfolio.png',
    techs: [
      'Html', 'Css', 'Javascript',
    ],
    linkToLive: 'https://sekoviper.github.io/portfolio/',
    linkToSrc: 'https://github.com/SekoViper/portfolio',
  },

  {
    id: 2,
    name: 'SPiiKA French',
    subTitle: { title: 'Canopy', role: 'Back End Dev', year: '2015' },
    shortDesc: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
    imgURL: 'img/Avialability.png',
    modalURL: 'img/modal_Portfolio.png',
    techs: [
      'Html', 'Css', 'Javascript',
    ],
    linkToLive: 'https://sekoviper.github.io/portfolio/',
    linkToSrc: 'https://github.com/SekoViper/portfolio',
  },

  {
    id: 3,
    name: 'Professional Art',
    subTitle: { title: 'Canopy', role: 'Back End Dev', year: '2015' },
    shortDesc: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
    imgURL: 'img/art_desktop.png',
    modalURL: 'img/modal_Portfolio.png',
    techs: ['Html', 'Css', 'Javascript', 'Ruby'],
    linkToLive: 'https://sekoviper.github.io/portfolio/',
    linkToSrc: 'https://github.com/SekoViper/portfolio',
  },
];

// portfolio images dynamically generated
const container = document.getElementById('portfolio');
projects.forEach((project, index) => {
  const ulElement = document.createElement('ul');
  ulElement.classList.add('techs');
  project.techs.forEach((item) => {
    const liElement = document.createElement('li');
    liElement.classList.add('tech-btn', 'btn-secondary');
    liElement.innerHTML = `${item}`;
    ulElement.appendChild(liElement);
  });
  const content = `
  <div data-id="${index}" class="work-container">
          <div class="work-image">
            <img
              src="${project.imgURL}"
              alt="Tonic image"
              class="img-hover-effect"
            />
          </div>
          <div class="work-content">
            <h2>${project.name}</h2>
            <ul class="work">
              <li class="work-item works-title">${project.subTitle.title}</li>
              <li class="work-item works-role">
                <img src="img/Counter.png" alt="Circle shape" /> ${project.subTitle.role}
              </li>
              <li class="work-item works-year">
                <img src="img/Counter.png" alt="Circle shape" /> ${project.subTitle.year}
              </li>
            </ul>
            <p>
            ${project.shortDesc}
            </p>
            <ul id="ul-${index}">
            </ul>
            <button data-id=${index} class="btn btn-primary work-button">See Project</button>
          </div>
        </div>
  `;
  container.innerHTML += content;
  const ulOrigin = document.getElementById(`ul-${index}`);
  ulOrigin.replaceWith(ulElement);
});

// making work buttons open modal
const workButtonList = document.querySelectorAll('.work-button');

const modalParent = document.getElementById('modal-parent');
function openModal(projectIndex) {
  const project = projects[projectIndex];

  const ulElement = document.createElement('ul');
  ulElement.classList.add('techs');
  project.techs.forEach((item) => {
    const liElement = document.createElement('li');
    liElement.classList.add('tech-btn', 'btn-secondary');
    liElement.innerHTML = `${item}`;
    ulElement.appendChild(liElement);
  });
  const content = `<div class="modal-container">
  <div class="modal-header">
    <div class="modal-title">
      <h2>${project.name}</h2>
      <ul class="modal-subtitle">
        <li class="modal-item project-title">${project.subTitle.title}</li>
        <li class="modal-item project-role">
          <img src="img/Counter.png" alt="Circle shape" />${project.subTitle.role}
        </li>
        <li class="modal-item project-year">
          <img src="img/Counter.png" alt="Circle shape" /> ${project.subTitle.year}
        </li>
      </ul>
    </div>
    <button class="modal-close" id="modal-close" >
      &times;
    </button>
  </div>
  <div class="modal-image">
    <img
      src="${project.modalURL}"
      alt="Tonic image"
      class="img-hover-effect"
    />
  </div>
  <div class="modal-content">
    <p>
    ${project.shortDesc}
      </p>
    <div>
    <ul id="tech-ul">
    </ul>
    <div class"modal-btn-container">
    <a class="modal-btn" target="_blank" href="${project.linkToLive}"><span>See Live</span> <img src="img/see_live_Icon.png" alt="see live" ></a>
    <a class="modal-btn" target="_blank" href="${project.linkToSrc}"><span>See Source </span><img src="img/github_btn_icon.svg" alt="github"></a>
    </div>
  </div>
</div>`;

  modalParent.innerHTML = content;
  const ulOrigin = document.getElementById('tech-ul');
  ulOrigin.replaceWith(ulElement);

  // modal close code
  const closeModalButton = document.getElementById('modal-close');
  closeModalButton.addEventListener('click', () => {
    modalParent.innerHTML = '';
  });
}

workButtonList.forEach((button) => {
  button.addEventListener('click', () => {
    const projectIndex = button.dataset.id;
    openModal(projectIndex);
  });
});

// form validation
const form = document.getElementById('fs-frm');
const email = form.elements['email-address'];
const errorMessage = document.getElementById('error-message');

function isLowerCase(email) {
  return email === email.toLowerCase();
}


