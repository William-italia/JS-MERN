const img = document.querySelector('.perfil');
const subtitle = document.querySelector('.subtitle');
const title = document.querySelector('.title');
const newBtn = document.querySelector('.new');
const icons = document.querySelectorAll('li i');

let activeIcon = null;

function fetchNewPerson() {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then((data) => {
        return data.results[0];
    })
    .then((person) => {
        console.log(person);
        
        img.src = person.picture.large;
        subtitle.textContent = `Hi, my name is`;
        title.textContent = `${person.name.first} ${person.name.last}`;

        icons.forEach(icon => {
            icon.addEventListener('mouseover', (e) => {
                const info = e.target.dataset.info;

                if(activeIcon) {
                    activeIcon.style.color = 'white';
                }

                e.target.style.color = '#00f6a8';
                activeIcon = e.target;
                
                getInfo(person, info);
            });
            
        });
    })
    .catch(error => console.log('Erro ao buscar nova pessoa: ', error))
}

function getInfo(person, info) {
    switch (info) {
        case 'name':
            subtitle.textContent = 'Hi, My name is';
            title.textContent = `${person.name.first} ${person.name.last}`;
            break;
        case 'email':
            subtitle.textContent = 'My email is';
            title.textContent = person.email;
            break;
        case 'data':
            subtitle.textContent = 'My age is';
            title.textContent = person.dob.age;
            break;
        case 'location':
            subtitle.textContent = 'My address is';
            title.textContent = `${person.location.street.number} ${person.location.street.name}`;
            break;
        case 'phone':
            subtitle.textContent = 'My phone number is';
            title.textContent = person.phone;
            break;
        case 'pass':
            subtitle.textContent = 'My password is';
            title.textContent = person.login.password;
            break;
    }
}

document.querySelector('.box-perfil').addEventListener('mouseover', () => {
    newBtn.classList.add('active') 
});

document.querySelector('.box-perfil').addEventListener('mouseleave', () => {
    newBtn.classList.remove('active')
});

newBtn.addEventListener('click', fetchNewPerson);

fetchNewPerson();
