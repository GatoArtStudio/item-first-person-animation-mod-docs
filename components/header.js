class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="header">
            <img
              class="header-logo"
              src="/hexacreators_logo.png"
              alt="Hexa Creators Logo"
            >
            <div class="header-menu">
                <a href="/">Inicio</a>
                <a href="/user.html">Uso del Usuario</a>
                <a href="/#uso-de-dev">Uso de desarrollador</a>
                <a href="/#creditos">Créditos</a>
            </div>
        </nav>        
        `;
    }
}

customElements.define('header-component', Header);