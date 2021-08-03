import {LitElement, html, css} from 'lit';

import Splide from '/node_modules/@splidejs/splide/src/js/splide.js';

export class ElSmapshot extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
    `;
  }

  static get properties() {
    return {
      lat: {type: Number},
      long: {type: Number},
      data: {type: Array},
    };
  }
  
   constructor() {
     super();
     this.lat = '';
     this.long = '';
     this.data = [];
   }

  render() {
    return html`
      <link rel="stylesheet" href="../node_modules/@splidejs/splide/dist/css/splide.min.css">
      <h1>Smapshot</h1>
      <label>Latitude : <input type="text" id="lat" value="46.6" name="lat"></label>
      <label>Longitude : <input type="text" id="long" value="6.5" name="long"></label>
      <button @click=${this.getLatLong}>Submit</button>
      <div id="splide" class="splide">
        <div class="splide__track">
          <ul class="splide__list">
            ${
              this.data.map((item) => this.getImageTemplate(item))
            }
          </ul>
        </div>
      </div>
      <slot></slot>
    `;
  }

  async getLatLong() {
    this.data = []; //  temp
    this.lat = this.shadowRoot.getElementById('lat').value;
    this.long = this.shadowRoot.getElementById('long').value;
    console.log("lat: ", this.lat); //  temp
    console.log("long: ", this.long); //  temp
    
    const response = await fetch(`http://localhost:1337/images?latitude=${this.lat}&longitude=${this.long}&sortKey=distance&limit=10`)
    const data = await response.json();
    for (let picture of data.rows) {
      this.data.push({
        id: picture.id,
        title: picture.title,
        url: picture.media.image_url})
    };
    console.log(this.data); //  temp
    this.requestUpdate();
    new Splide(this.shadowRoot.getElementById('splide')).mount();
    console.log(this.shadowRoot.getElementById('splide'));
  }
  getImageTemplate(image) {
    return  html`
      <li class="splide__slide">
          <img src="${image.url}" alt="${image.title}">
      </li>`;
  }
  
}
window.customElements.define('element-smapshot', ElSmapshot);
