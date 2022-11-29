import { html, css, LitElement } from 'lit';

export class InputLit extends LitElement {
    static get styles() {
        return css `
        input {
          width: 300px;
          height: 30px;
        }
    `;
    }

    static get properties() {
        return {
            inputValue: {
                type: String,
            },
            inputLabel: {
                type: String,
            }
        };
    }

    constructor() {
        super();
        this.inputValue = '';
        this.inputLabel = '';
    }



    render() {
        return html `
        <label>
          ${this.inputLabel}
        <input type="text" placeholder="Agrega un registro" value="${this.inputValue}" @input=${this.updateRegistro}> 
        </label>
      
    `;
    }
    updateRegistro(e) {
        this.inputValue = e.target.value;
    }
}