import { html, css, LitElement } from 'lit';

export class ButtonLit extends LitElement {
    static get styles() {
        return css `
        .myButton {
          width: 250px;
          margin-left: 35px;
          background-color: #44c767;
          border-radius: 28px;
          border: 1px solid #18ab29;
          display: inline-block;
          cursor: pointer;
          color: #ffffff;
          font-family: Arial;
          font-size: 17px;
          padding: 16px 31px;
          text-decoration: none;
          text-shadow: 0px 1px 0px #2f6627;
        }
        .myButton:hover {
          background-color: #5cbf2a;
        }
        .myButton:active {
          position: relative;
          top: 1px;
        }
      
    `;
    }

    static get properties() {
        return {

        };
    }

    constructor() {
        super();

    }


    render() {
        return html `
      <button class="myButton">Agregar</button>
    `;
    }
}