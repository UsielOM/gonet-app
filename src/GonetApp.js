import { LitElement, html, css } from 'lit';
import './task-list/task-list';
import './gift-lit/gift-lit';
export class GonetApp extends LitElement {
    static get properties() {
        return {
            bandera: {
                type: Boolean
            }
        };
    }

    static get styles() {
        return css `
        .center {
            display: flex;
            justify-content:center;
            align-items: center;
            
            
        }
        .btn-flotante {
            font-size: 16px; /* Cambiar el tamaño de la tipografia */
            text-transform: uppercase; /* Texto en mayusculas */
            font-weight: bold; /* Fuente en negrita o bold */
            color: #ffffff; /* Color del texto */
            border-radius: 5px; /* Borde del boton */
            letter-spacing: 2px; /* Espacio entre letras */
            background-color: #e91e63; /* Color de fondo */
            padding: 18px 30px; /* Relleno del boton */
            position: fixed;
            bottom: 40px;
            right: 40px;
            transition: all 300ms ease 0ms;
            box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
            z-index: 99;
          }
          .btn-flotante:hover {
            background-color: #2c2fa5; /* Color de fondo al pasar el cursor */
            box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);
            transform: translateY(-7px);
          }
          @media only screen and (max-width: 600px) {
            .btn-flotante {
              font-size: 14px;
              padding: 12px 20px;
              bottom: 20px;
              right: 20px;
            }
          }
      `;
    }

    constructor() {
        super();
        this.bandera = false;
    }

    render() {
            return html `
    <h1>Esta es mi app renderizada</h1> 
    ${this.bandera ? html `
        <h2>Regalos</h2>
        <div class="center">
            <gift-lit></gift-lit>
        </div>
        <button @click="${this.cambiar}" class="btn-flotante">AppToDo</button>
    `: html`
    <div class="center">
        <task-list></task-list>
    </div>
    <button @click="${this.cambiar}" class="btn-flotante">Regalos</button>
    `}
    
        
    

    `;
    }
    cambiar(){
        this.bandera= !this.bandera;
    }
}