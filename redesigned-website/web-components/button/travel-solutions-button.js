class TravelSolutionsButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const styles = document.createElement("link");
    styles.setAttribute("rel", "stylesheet");
    styles.setAttribute(
      "href",
      "web-components/button/travel-solutions-button.css"
    );
    shadow.appendChild(styles);
  }
  connectedCallback() {
    const btnTextContent = document.createTextNode(this.innerHTML || "Button");
    this.shadowRoot.appendChild(btnTextContent);
    const hasStyles = this.getAttribute("type");
    const styles = this.getAttribute("class") || "";
    this.setAttribute(
      "class",
      hasStyles ? `${hasStyles} ${styles}` : `primary ${styles}`
    );
    this.setAttribute("href", this.getAttribute("href") || "#");
    // Testing purposes.
    this.addEventListener("click", (_) => {
      window.location.replace(this.getAttribute("href"));
    });
  }
}
