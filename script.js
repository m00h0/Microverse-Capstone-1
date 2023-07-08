const hamburgar = document.querySelector('.hamburgar');
const Navbar = document.querySelector('.nav-bar');
const navmenu = document.querySelector('.nav-menu');
hamburgar.addEventListener('click', () => {
  hamburgar.classList.toggle('active');
  navmenu.classList.toggle('active');
  Navbar.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburgar.classList.remove('active');
  navmenu.classList.remove('active');
  Navbar.classList.remove('active');
}));

const speakers = [
  {
    id: 1,
    speakerName: 'Lila tretikov',
    speakerPosition: 'Database and Software Developer',
    imgSource: './Images/speaker_01 1 (2).png',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 2,
    speakerName: 'SohYeong Noh',
    speakerPosition: 'Database General Manager',
    imgSource: './Images/speaker_01 1 (1).png',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 3,
    speakerName: 'Jawad',
    speakerPosition: 'Full Stack Developer',
    imgSource: './Images/speaker_01 1 (3).png',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 4,
    speakerName: 'Ahmad',
    speakerPosition: 'Database and Software Developer',
    imgSource: './Images/speaker_01 1 (3).png',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 5,
    speakerName: 'Jawad',
    speakerPosition: 'Database General Manager',
    imgSource: './Images/speaker_01 1.png',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 6,
    speakerName: 'Lila tretikov',
    speakerPosition: 'Full Stack Developer',
    imgSource: './Images/speaker_01 1 (2).png',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },

];

speakers.forEach((speaker) => {
  const speakerSection = document.getElementById('mainSection');
  const partDiv = document.createElement('div');
  partDiv.className = 'col-md-5';
  partDiv.className = 'speaker-card';
  partDiv.innerHTML = `
        <div class="speaker">
                <img src="${speaker.imgSource}" alt="speaker image" class="img-fluid speaker-photo">
            </div> 
            <div class="speaker-info">
                <h2 class="name">${speaker.speakerName}</h2>
                <p class="speaker-job">${speaker.speakerPosition}</p>
                <div class="left-line"></div>
                <p class="speaker-exp">${speaker.description}</p>
            </div>`;

  speakerSection.append(partDiv);
});
