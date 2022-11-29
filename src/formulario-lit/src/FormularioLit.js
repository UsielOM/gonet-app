import { html, css, LitElement } from "lit";
import '../../input-lit/input-lit';

export class FormularioLit extends LitElement {
    static get styles() {
        return css `
      .card {
        width: 400px;
        height: 190px;
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
        width: 100px;
        height: 50px;
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
            task: {
                type: String,
            },
            todoLabel: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.task = '';
        this.todoLabel = '';
    }

    render() {
        return html `
      <div class="card">
        <div class="content">
         <div class="title">
          <h2>Mis Tareas</h2>
         </div>
          <input-lit .inputLabel="${this.todoLabel}" .inputValue="${this.task}" @input=${(result) =>{
            this.task= result.target.inputValue
          }}></input-lit>
          <br />
          <button @click="${this.enviarTarea}" class="myButton">Agregar</button>
        </div>
      </div>
     
    `;
    }

    enviarTarea() {
        console.log('TASK:', this.task);
        const idRandom = 1 + Math.floor(Math.random() * 100);
        console.log('id', idRandom);
        this.dispatchEvent(new CustomEvent('recibir', {
            bubbles: true,
            composed: true,
            detail: {
                task: this.task,
                numero: idRandom,
                estatus: false
            }
        }))
    }
}