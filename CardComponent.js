const template = document.createElement('template');
template.innerHTML = /*html*/ `

    <div id="card">
        <img src="" id="photo">
        <div id="name"></div>
        <div id="post"></div>
    </div>
     <style>
         img {
            width: 20%;
            height: 20%;
            }
    </style>
     
`;

class CardComponent extends HTMLElement {

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
export default CardComponent