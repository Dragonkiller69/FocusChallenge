const template = document.createElement('template');
template.innerHTML = /*html*/ `

    <div id="card">
    <div id="header">
        <img src="" id="photo">
        <div id="name"></div>
    </div>
        <div id="post">
            <span>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</span>
            <span>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</span>
            <span>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</span>
            <span>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</span>
            <span>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</span>

        </div>
    </div>
     <style>
         @import './main.css';
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

    connectedCallback() {
        console.log('se conecto');
    }

    get name() {
        return this._name;
    }

    set name(datos) {
        this._name = datos;
        this.namediv.innerText = datos;
    }

    get post() {
        return this._post;
    }

    set post(datos) {
        this._post = datos;
        this.postdiv.innerText = datos;
    }

    get photosrc() {
        return this._photosrc;
    }

    set photosrc(datos) {
        this._photosrc = datos;
        this.photo.setAttribute('src', datos);
    }
}

customElements.define("card-component", CardComponent);