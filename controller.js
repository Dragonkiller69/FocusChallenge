import CardComponent from './CardComponent.js'

let content = document.querySelector('#content');
async function get(uri) {
    let response = await fetch(uri);
    return await response.json();

}

/*let card = document.querySelector('card-component');
card.name = 'juan';
card.photosrc = `https://joeschmoe.io/api/v1/male/jon`;
get(`https://jsonplaceholder.typicode.com/posts?userId=1`)
    .then(posts => {
        posts.sort((a, b) => b.title.length - a.title.length);
        console.log(posts.map(post => post.title));
        card.post = posts.map(post => post.title)
    });*/

get('https://jsonplaceholder.typicode.com/users')
    .then(data => {
        if (data !== null && data !== undefined) {
            data.sort((a, b) => a.name.localeCompare(b.name));
            let regex = /[^\s.]+/;
            console.log(data)

            data.forEach(user => {
                let card = document.createElement('card-component');
                //`https://api.genderize.io/?name=${user.name.match(regex)}`
                get('https://jsonplaceholder.typicode.com/posts')
                    .then(gender => {
                        gender = 'female';
                        if (gender !== null && gender !== undefined) {
                            card.name = user.name;
                            card.photosrc = `https://joeschmoe.io/api/v1/${gender}/${user.name}`;
                        }
                    })
                get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                    .then(posts => {
                        posts.sort((a, b) => b.title.length - a.title.length);
                        card.post = posts.map(post => post.title)
                    });
                content.appendChild(card);
            });

        }
    })