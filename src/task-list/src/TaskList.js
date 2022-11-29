import { html, css, LitElement } from "lit";
import "../../chek-lit/chek-lit";
import "../../formulario-lit/formulario-lit";

export class TaskList extends LitElement {
    static get styles() {
        return css `
      .content {
        width: 100%;
        height: 50px;
        display: grid;
        justify-content: space-around;
        padding: 5px;
      }
      .parent {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
      }

      .div1 {
        grid-area: 1 / 1 / 2 / 2;
      }
      .div2 {
        grid-area: 1 / 2 / 2 / 3;
      }

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
    `;
    }

    static get properties() {
        return {
            tareas: {
                type: Array,
            },
            tareasCompleate: [{}],
            bandera: {
                type: Boolean,
            },
        };
    }

    constructor() {
        super();
        this.bandera = false;
        this.tareasCompleate = [];
        this.tareas = [{
                numero: 1,
                task: "Terminar la AppToDo",
                estatus: false,
            },
            {
                numero: 2,
                task: "Terminar la AppToDo dos",
                estatus: false,
            },
        ];
        this.requestUpdate();
    }

    render() {
            return html `
      <div class="content">
        <formulario-lit @recibir="${this.guardar}"></formulario-lit>
        <br>
        <div>
          <div class="card">
            <div class="div1">
              <label>HOLA TAREAS INCOMPLETAS</label>
              ${this.tareas.map((item) => html`
                  <div class="cardFalso">
                    <p>${item.numero}</p>
                    <p>${item.task}</p>
               <chek-lit ?isChecked=${this.bandera} @click=${(e) => {
                        e = item;
                        e.estatus = true;
                        this.completado(e);
                      }}>
                </chek-lit>
                    <hr />
                  </div>
                `
              )}
            </div>
            <div class="div2">
              <label>TAREAS COMPLETADAS</label>
              ${this.tareasCompleate.map((item) => html`
                  <div class="cardVerdadero">
                    <p>${item.numero}</p>
                    <p>${item.task}</p>
                    <hr />
                  </div>
                `
              )}
            </div>
          </div>
        </div>
      </div>
    `;
  }
  completado(e) {
    this.tareas = this.tareas.filter((item) => item.numero !== e.numero);
    this.tareasCompleate.push(e);
    this.requestUpdate();
  }
  guardar(event) {
    this.tareas.push(event.detail);
    this.requestUpdate();
    console.log(this.tareas);
  }
}