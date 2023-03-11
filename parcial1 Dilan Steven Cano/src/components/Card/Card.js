class MyCard extends HTMLElement{
    static get observedAttributes(){
        return['destino', 'duracion', 'costo', 'descripcion', 'actividades'];
    }

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName]=newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML=`
        <link rel="stylesheet" href="index.css">
        <section class=card>
        <h1>Destino: ${this.destino}</h1>
        <h3>Duracion:${this.duracion}</h3>
        <h3>Costo: ${this.costo}</h3>
        <h3>Descripcion:(${this.descripcion}</h3>
        <h3>Actividades:(${this.actividades}</h3>
        </section>`;
    }
}

customElements.define("my-card", MyCard);
export default MyCard;