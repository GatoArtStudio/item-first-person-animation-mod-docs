export class GuideComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h2>Guía de Usuario</h2>
            <p>Aquí puedes cambiar la guía de tu usuario.</p>
        `;
    }
}
