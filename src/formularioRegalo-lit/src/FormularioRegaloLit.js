import { html, css, LitElement } from "lit";
import '../../input-lit/input-lit';

export class FormularioRegaloLit extends LitElement {
    static get styles() {
        return css `
      .card {
        width: 400px;
        height: 100%;
        display: flex;
        justify-content: center;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.25);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.18);
      }

      .content {
        width: 100%;
        height: 100%;
        display: grid;
        justify-content: space-around;
        padding: 5px;
      }

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
            persona1: {
                type: String
            },
            persona2: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.persona1 = '';
        this.persona2 = '';
    }

    render() {
        return html `
      <div class="card">
        <div class="content">
          <div class="title">
            <h2>Sorteo</h2>
          </div>
      <input-lit .inputValue="${this.persona1}" @input=${(result) =>{
        this.persona1= result.target.inputValue
      }}></input-lit>
      <br>
      <input-lit .inputValue="${this.persona2}" @input=${(result) =>{
        this.persona2= result.target.inputValue
      }}></input-lit>
         <br>
          <button class="myButton" @click="${this.enviarAmigoSecreto}">Agregar</button>
        </div>
      </div>
    `;
    }

    enviarAmigoSecreto() {
        console.log('Persona 1: ', this.persona1);
        console.log('Persona 2: ', this.persona2);
        this.dispatchEvent(new CustomEvent('regalo', {
            bubbles: true,
            composed: true,
            detail: {
                persona1: this.persona1,
                persona2: this.persona2
            }
        }))
    }
}