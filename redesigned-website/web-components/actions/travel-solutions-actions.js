const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host {
      display: flex;
      flex-flow: column;
    }
    travel-solutions-button[class="secondary"] {
      margin-bottom: 1rem;
    }
    travel-solutions-button {
      font-size: 1rem;
    }
  </style>
  <travel-solutions-button type="secondary">
    iniciar sesión
  </travel-solutions-button>
  <travel-solutions-button>
    registrate
  </travel-solutions-button>
`;

class TravelSolutionsActions extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
