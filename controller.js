import CardComponent from './CardComponent.js'

let content = document.querySelector('#content');
async function get(uri) {
    let response = await fetch(uri);
    return await response.json();

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
                        if (gender !== null && gender !== undefined) {
                            card.name = user.name;
                            card.photosrc = `https://joeschmoe.io/api/v1/${gender.gender}/${user.name}`;
                        }
                    })
                get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                    .then(posts => {
                        posts.sort((a, b) => b.title.length - a.title.length);
                        console.log(posts.map(post => post.title));
                        card.post = posts.map(post => post.title)
                    });
                content.appendChild(card);
            });

        }
    })