import { ConfigComponent } from "/components/user/config-component.js"
import { GuideComponent } from "/components/user/guide-component.js"

class User {
    static listButtons = [
        {
            id: 'config',
            text: 'Configuración',
            action: 'changeComponentToConfig'
        },
        {
            id: 'guide',
            text: 'Guía de uso',
            action: 'changeComponentToGuide'
        }
    ];

    static init() {
        this.renderButtons();
    }

    static renderButtons() {
        const userTab = document.querySelector('.user-tab');
        if (!userTab) return;
        
        userTab.innerHTML = '';
        
        this.listButtons.forEach(button => {
            const buttonElement = document.createElement('button');
            buttonElement.id = button.id;
            buttonElement.textContent = button.text;
            buttonElement.onclick = () => this[button.action]();
            userTab.appendChild(buttonElement);
        });
    }

    static changeComponentToConfig() {
        this.insertUserComponents(ConfigComponent)
    }

    static changeComponentToGuide() {
        this.insertUserComponents(GuideComponent)
    }

    static insertUserComponents(component) {
        const userDiv = document.getElementById('user');
        let componentName = component.name.toLowerCase().replace("component", '-component');
        userDiv.innerHTML = `<${componentName}></${componentName}>`;
        let custom = customElements.get(componentName);
        if (!custom) {
            customElements.define(componentName, component);
        }
    }
}

window.User = User;

document.addEventListener('DOMContentLoaded', () => {
    User.init();
});
