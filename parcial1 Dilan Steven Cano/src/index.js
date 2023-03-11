import *as components from "./components/index.js";
import data from "./components/data.js";
console.log(data);

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        data.forEach(planesTuristicos => {
            this.shadowRoot.innerHTML+=`
            <my-card destino="${planesTuristicos.destino}" duracion="${planesTuristicos.duracionEnDias}" costo="${planesTuristicos.costo}" descripcion="${planesTuristicos.descripcion}" actividades="${planesTuristicos.actividades}"></my-card>
            <my-button></my-button>`;
        });
    }
}

customElements.define("app-container", AppContainer);