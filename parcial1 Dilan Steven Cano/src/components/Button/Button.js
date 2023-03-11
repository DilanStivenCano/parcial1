class MyButton extends HTMLElement{
    static get observedAttributes(){
        return['changeStatus'];
    }

    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.onButtonClicked = this.onButtonClicked.bind(this);
    }

    connectedCallback(){
        this.mount();
    }

    disconnectedCallback(){
        this.removeEventListeners();
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName]=newValue;
        this.mount();
    }

    mount(){
        this.render();
        this.addEventListeners();
    }

    addEventListeners(){
        this.shadowRoot
        .querySelector("button").addEventListener("click", this.onButtonClicked)
    }

    removeEventListeners(){
        this.shadowRoot
        .querySelector("button").removeEventListener("click", this.onButtonClicked)
    }

    render(){
        this.shadowRoot.innerHTML=`
        <button>${this.changeStatus || 'Si'}</button>`;
    }

    onButtonClicked(){
        console.log("funciona");
        let CurrentValue = String(this.getAttribute("changeStatus") || "Si");
        this.setAttribute ("changeStatus", "no");
        console.log("funcionaaa");
    }
}


customElements.define("my-button", MyButton);
export default MyButton;