const hr = createElement('hr');

function createElement(tag, content = '', classNames = '', id = '', imageSrc = '', href = '') {
  let elem = document.createElement(tag);

  id.length && (elem.id = id);
  classNames.length && (elem.className = classNames);
  elem.innerHTML = typeof content === 'string'
     ? content
     : getContent(content);
  imageSrc.length && elem.setAttribute('src', imageSrc);
  href.length && elem.setAttribute('href', href);
  return elem;
}

function getContent(content) {
  let changedContent = '';
  if (Array.isArray(content)) {
    content.map(c => {
      if (Array.isArray(c)) {
        changedContent += getContent(c);
      } else {
        changedContent += typeof c === 'string' ? c : c.outerHTML;
      }
    });
  } else {
    changedContent = content;
  }

  return changedContent;
}

function createInfoItem(name, icon) {
  const iconEl = createElement('i', '', `fa fa-${icon}`);
  const spanEl = createElement('span', name);

  return createElement('div', [iconEl, spanEl], 'info-item');
}

function createTitleswithIcon(title, iconName) {
  const icon = createElement('i', '', `fa fa-${iconName}`);

  return createElement('h2', [icon, title]);
}

function createProgressBar(percent, title, large = false) {
  const h4Title = createElement('h4', title);
  const progressPercent = createElement('span', `${percent}%`, 'progress');

  return createElement('div', [h4Title, progressPercent], `progress-bar progress-${percent} ${large ? 'large' : ''}`);
}

function createExpItem(title, desc, dates, current = false) {
  const h5 = createElement('h5', title);
  const icon = createElement('i', '', 'fa fa-calendar');
  const h6 = createElement('h6', [icon, dates]);
  const descParagraph = createElement('p', desc);

  if (current) {
    const current = createElement('span', 'Current', 'current');

    h6.append(current);
  }
  return createElement('div', [h5, h6, descParagraph], 'experience-item');
}

const img = createElement('img', '', '', '', './images/avatar_hat.jpg');
const fullName = createElement('h2', 'Jane Doe');
const avatarWrapper = createElement('div', [img, fullName], 'avatar-wrapper');
const infoItems = [
  createInfoItem('Designer', 'briefcase'),
  createInfoItem('London, UK', 'home'),
  createInfoItem('ex@mail.com', 'envelope'),
  createInfoItem('1224435534', 'phone'),
];
const h2Skills = createTitleswithIcon('Skills', 'asterisk');
const progressBars = [
  createProgressBar(90, 'Adobe Photoshop'),
  createProgressBar(80, 'Photography'),
  createProgressBar(75, 'Illustrator'),
  createProgressBar(50, 'Media'),
];
const h2Languages = createTitleswithIcon('Languages', 'globe');
const progressBarsLarge = [
  createProgressBar(100, 'English', true),
  createProgressBar(54, 'Spanish', true),
  createProgressBar(34, 'German', true),
];
const nav = createElement(
  'nav',
  [avatarWrapper, infoItems, hr, h2Skills, progressBars, h2Languages, progressBarsLarge],
  'left-column',
);

const h2WorkExp = createTitleswithIcon('Work Experience', 'suitcase');
const expItemsWE = [
  createExpItem(
    'Front End Developer / w3schools.com',
    'Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.',
    'Jan 2015 -',
    true,
  ),
  createExpItem(
    'Web Developer / something.com',
    'Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.',
    'Mar 2012 - Dec 2014',
  ),
  createExpItem(
    'Graphic Designer / designsomething.com',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    'Jun 2010 - Mar 2012',
  ),
];
const sectionExperience = createElement(
  'section',
  [h2WorkExp, expItemsWE, hr],
  'work-experience',
);

const h2Edu = createTitleswithIcon('Education', 'certificate');
const expItemsEdu = [
  createExpItem(
    'W3Schools.com',
    'Web Development! All I need to know in one place',
    'Forever',
  ),
  createExpItem(
    'London Business School',
    'Master Degree',
    '2013 - 2015',
  ),
  createExpItem(
    'School of Coding',
    'Bachelor Degree',
    '2010 - 2013',
  ),
];
const sectionEducation = createElement(
  'section',
  [h2Edu, expItemsEdu, hr],
  'education',
);

const footerP = createElement('p', 'Find me on social media.');
const socialIcons = createElement(
  'div',
  [
    createElement('i', '', 'fa fa-facebook-official w3-hover-opacity'),
    createElement('i', '', 'fa fa-instagram'),
    createElement('i', '', 'fa fa-snapchat'),
    createElement('i', '', 'fa fa-pinterest'),
    createElement('i', '', 'fa fa-twitter'),
    createElement('i', '', 'fa fa-linkedin'),
  ],
  'social-icons',
)
const link = createElement('a', 'w3.css', '', '', '', '#');
const poweredBy = createElement('p', ['Powered by ', link]);
const footer = createElement(
  'footer',
  [footerP, socialIcons, poweredBy],
  'footer',
);

const mainContainer = createElement('div', [nav, sectionExperience, sectionEducation, footer], 'main-container');

document.body.prepend(mainContainer);
