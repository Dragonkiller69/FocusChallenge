import CardComponent from './CardComponent.js'

let usuarios;
let content = document.querySelector('#content');
async function get(uri) {
    let response = await fetch(uri);
    let data = await response.json();
    return data;
}

get('https://jsonplaceholder.typicode.com/users')
    .then(data => {
        if (data !== null && data !== undefined) {
            data.sort((a, b) => a.name.localeCompare(b.name));
            let regex = /[^\s.]+/;
            console.log(data)

            data.forEach(user => {
                let card = document.createElement('card-component');
                get(`https://api.genderize.io/?name=${user.name.match(regex)}`)
                    .then(gender => {
                        card.name = user.name;
                        card.photosrc = `https://joeschmoe.io/api/v1/${gender.gender}/${user.name}`;
                    })
                content.appendChild(card);
            });

        }
    })