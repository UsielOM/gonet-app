import { html, css, LitElement } from 'lit';
import '../../formularioRegalo-lit/formularioRegalo-lit';
export class GiftLit extends LitElement {
    static get styles() {
        return css `
        .parent {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr;
            grid-column-gap: 10px;
            grid-row-gap: 0px;
            }
            
            .div1 { grid-area: 1 / 1 / 2 / 2; }
            .div2 { grid-area: 1 / 2 / 2 / 3; }
            a.my-button{
                background: linear-gradient(to right,#024865 ,#0064a3);
                background-color: #024865;
                color: #fff;
                font-family: Trebuchet MS;
                font-size: 18px;
                font-weight: 800;
                font-style: normal;
                text-decoration: none;
                padding: 14px 15px;
                border: 1px solid #000;
                border-radius: 10px;
                display: inline-block;
                box-shadow: 0px 0px 10px 0px #2D2D2D;
               }
               a.my-button:hover{
                box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
               }
               a.my-button:active{
                transform: scale(0.95);
               } 
        `;
    }

    static get properties() {
        return {
            personasArray: {
                type: Array
            },
            sorteoObj: {
                type: Object
            }
        };
    }

    constructor() {
        super();
        this.personasArray = [];
        this.sorteoObj = [];

    }



    render() {
            return html `
      <formularioregalo-lit @regalo="${this.guardar}"></formularioregalo-lit>
      <div class="parent">
<div class="div1"> 
    <h3>Participantes</h3>
    ${this.personasArray.map((item) => html `
        <p>${item}</p>
    `)}
</div>
<div class="div2"> 
    <h3>Parejas</h3>
    ${this.sorteoObj.map((item) => html`
    <p>${item}</p>
    `)}
    <a class="my-button" @click="${this.generar}" ><span></span> Generar</a>

</div>
</div>
      <br>
    

      
    `;
    }
    guardar(event) {
        this.personasArray.push(event.detail.persona1);
        this.personasArray.push(event.detail.persona2);
        this.requestUpdate();
        console.log(this.personasArray);
    }

    generar(a) {
        this.personasArray = this.personasArray.sort(() => Math.random() - 0.5);
    for (let i = 0; i < this.personasArray.length / 5; i++) {
        for (let j = this.personasArray.length / 2; j >= 0; j--) {
           let ban1 = this.personasArray[i];
            let ban2 = this.personasArray[j];
            this.sorteoObj[j] = `${ban2} - ${ban1}`;
            this.personasArray = this.personasArray.filter((item) => item !== ban1);
            this.personasArray = this.personasArray.filter((item) => item !== ban2);
        }
        this.sorteoObj.shift();
       return this.requestUpdate();
    }
   
    }
}