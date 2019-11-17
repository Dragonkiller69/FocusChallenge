const template = document.createElement('template');
template.innerHTML = /*html*/ `

    <div id="card">
        <div id="header">
            <img src="" id="photo" alt="Photo">
            <label id="name"></label>
        </div>
          <div id="post"></div>
    </div>
     <style>
         @import '../Css/main.css';
    </style>
`;

export default class CardComponent extends HTMLElement {

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.appendChild(template.content.cloneNode(true));
        this.photo = this.root.querySelector('img');
        this.namediv = this.root.querySelector('#name');
        this.postdiv = this.root.querySelector('#post');
    }

    fillTitles() {
        this.post.forEach(title => {
            let span = document.createElement('span');
            span.innerText = title;
            this.postdiv.appendChild(span);
        })
    }

    get name() {
        return this._name;
    }

    set name(datos) {
        this.namediv.innerText = datos;
    }

    get post() {
        return this._post;
    }

    set post(datos) {
        this._post = datos;
        this.fillTitles();
    }

    get photosrc() {
        return this._photosrc;
    }

    set photosrc(datos) {
        this.photo.setAttribute('src', datos);
    }
}

customElements.define("card-component", CardComponent);