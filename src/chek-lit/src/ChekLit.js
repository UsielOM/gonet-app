import { html, css, LitElement } from "lit";

export class ChekLit extends LitElement {
    static get styles() {
        return css ``;
    }

    static get properties() {
        return {
            isChecked: {
                type: Boolean
            }
        };
    }

    constructor() {
        super();
        this.isChecked = false;
    }

    render() {
        return html `
      <label id="labele"> 
        <input 
          type="checkbox" ?checked="${this.isChecked}" @change=${(event) =>{
            this.isChecked = !this.isChecked;
          }}
        />
      </label>
    `;
    }
}