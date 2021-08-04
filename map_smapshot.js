import {html, css, LitElement} from 'https://unpkg.com/lit-element@2.2.0?module';

export class MapSmapshot extends LitElement {
    static get styles() {
        return css`
        :host{
            font: normal 14px/1.4 Helvetica, Arial, sans-serif;
        }`
    }

    static get properties() {
        return {
          lat: {type: Number},
          long: {type: Number},
        };
    }

    constructor() {
        super();
        this.lat = '';
        this.long = '';
    }

    render() {
        return html`
        `
    }

}
window.customElements.define('map-smapshot', MapSmapshot);
