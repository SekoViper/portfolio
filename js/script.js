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

let projects = [
  {
    id: 0, 
    name: "Tonic", 
    subTitle: {title: 'Canopy', role: 'Back End Dev', year: '2015'},
    shortDesc: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.", 
    longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ", 
    imgURL: "img/tonic_desktop.png", 
    techs: [
      'Html', 'Css', 'Javascript'
  ], 
    linkToLive: "https://sekoviper.github.io/portfolio/", 
    linkToSrc: "https://github.com/SekoViper/portfolio", 
  },
  
  {
    id: 1, 
    name: "Multi-Post Stories", 
    subTitle: {title: 'Canopy', role: 'Back End Dev', year: '2015'}, 
    shortDesc: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.", 
    longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ", 
    imgURL: "img/gym%20fit.png", 
    techs: [
      'Html', 'Css', 'Javascript'
  ], 
    linkToLive: "https://sekoviper.github.io/portfolio/", 
    linkToSrc: "https://github.com/SekoViper/portfolio", 
  },

  {
    id: 2, 
    name: "SPiiKA French", 
    subTitle: {title: 'Canopy', role: 'Back End Dev', year: '2015'}, 
    shortDesc: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.", 
    longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ", 
    imgURL: "img/Avialability.png", 
    techs: [
      'Html', 'Css', 'Javascript'
  ], 
    linkToLive: "https://sekoviper.github.io/portfolio/", 
    linkToSrc: "https://github.com/SekoViper/portfolio", 
  },

  {
    id: 3, 
    name: "Professional Art", 
    subTitle: {title: 'Canopy', role: 'Back End Dev', year: '2015'}, 
    shortDesc: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.", 
    longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ", 
    imgURL: "img/art_desktop.png", 
    techs: ['Html', 'Css', 'Javascript','Ruby'], 
    linkToLive: "https://sekoviper.github.io/portfolio/", 
    linkToSrc: "https://github.com/SekoViper/portfolio", 
  },
]

const container = document.getElementById("portfolio")

projects.forEach((project, index) => {
  let ulElement = document.createElement('ul');
  ulElement.classList.add('techs');
  project.techs.forEach((item) =>{
    let liElement = document.createElement('li');
    liElement.classList.add('btn', 'btn-secondary');
    liElement.innerHTML = `${item}`;
    ulElement.appendChild(liElement);
  })
  const content = `
  <div data-id="${index}" class="work-container">
          <div class="work-image">
            <img
              src="${project.imgURL}"
              width="278px"
              height="220px"
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
            <button class="btn btn-primary">See Project</button>
          </div>
        </div>
  `;
  container.innerHTML += content;
  let ulOrigin = document.getElementById(`ul-${index}`);
  ulOrigin.replaceWith(ulElement);
})



