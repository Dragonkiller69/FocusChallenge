const template = document.createElement('template');
template.innerHTML = /*html*/ `

     <style>
     
    </style>
     
`;

class CardComponent extends HTMLElement {

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log('se conecto');
    }
}

customElements.define("card-component", CardComponent);
export default CardComponent