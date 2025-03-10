const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// stampa membri nel dom
const container = document.querySelector('.my-container');
const form = document.querySelector('form');

addMembers(teamMembers, container);

// aggiunta membri
form.addEventListener('submit', function (event) {
  event.preventDefault();

  newCard(container);
})


// funzione per creazione struttura
function addMembers(array, boxTest) {

  for (let i = 0; i < array.length; i++) {

    const { name, role, img, email } = array[i];

    boxTest.innerHTML += ` <div class="my-card">
            <div>
                <img class="image-profile" src="${img}" alt="">
            </div>
            <div class="description">
                <h3 class="name">${name}</h3>
                <div class="role">${role}</div>
                <div class="email">${email}</div>
            </div>
        </div>`;
  }
}

// funzione aggiunta card
function newCard(boxTest) {
  const newName = document.getElementById('new-name-surname').value;
  const newRole = document.getElementById('new-role').value;
  const newEmail = document.getElementById('new-email').value;
  const newImge = document.getElementById('new-image').value;

  boxTest.innerHTML += ` <div class="my-card">
            <div>
                <img class="image-profile" src="${newImge}" alt="">
            </div>
            <div class="description">
                <h3 class="name">${newName}</h3>
                <div class="role">${newRole}</div>
                <div class="email">${newEmail}</div>
            </div>
        </div>`;
}