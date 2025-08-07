export class ConfigComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h2>Configuración de Usuario</h2>
            <p>Aquí puedes cambiar la configuración de tu usuario.</p>
        `;
    }
}
