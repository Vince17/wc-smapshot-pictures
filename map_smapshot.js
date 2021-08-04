//  import {html, css, LitElement} from 'https://unpkg.com/lit-element@2.2.0?module';
//  import 'https://unpkg.com/leaflet@1.7.1/dist/leaflet-src.esm.js';
import {html, css, LitElement} from 'lit';
import 'leaflet';

export class MapSmapshot extends LitElement {
    static get styles() {
        return css`
        :host {
            font: normal 14px/1.4 Helvetica, Arial, sans-serif;
        }
        #mapid { 
            height: 180px; 
        }

        `
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

    connectedCallback() {
        super.connectedCallback();
        this.footprint();
      }

    render() {
        return html`
        <div id="map"></div>
        `
    }

    footprint() {
        var myLines = [{
            "type": "LineString",
            "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
        }, {
            "type": "LineString",
            "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
        }];

        var myStyle = {
            "color": "#ff7800",
            "weight": 5,
            "opacity": 0.65
        };

        L.geoJSON(myLines, {
            style: myStyle
        }).addTo(map);
    }

}
window.customElements.define('map-smapshot', MapSmapshot);
