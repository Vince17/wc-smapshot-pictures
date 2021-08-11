import {html, css, LitElement} from 'lit';  
//  https://cdn.skypack.dev/lit-element
import {map as createMap, tileLayer, geoJSON, circle} from './node_modules/leaflet/dist/leaflet-src.esm.js'; 
//  import 'https://cdn.skypack.dev/leaflet/dist/leaflet.js';

export class Map extends LitElement{
    static get styles() {
        return [css`
            :host {
                display:block;
            }
        `];
    }

    static get properties() {
        return {
            original_id: {type: String},
            urlMap: {type: String},
            colorStyle: {type: String},
        };
    }

    constructor() {
        super();
        this.urlMap = 'https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png';
        this.id_picture = '';
        this.original_id = '';
        this.colorStyle = '#0349b2',
        this.lngLat = [];
        this.dataGeoJSON = [];
    }

    connectedCallback() {
        super.connectedCallback();
        this.showMapWithGeoJSON();
    }

    async showMapWithGeoJSON() {
        const resID = await fetch(`https://smapshot.heig-vd.ch/api/v1/images?original_id=${this.original_id}`);
        const dataID = await resID.json();
        for (let dataPicture of dataID.rows) {
            this.id_picture = dataPicture.id;
        };
        try {
            const [res1, res2] = await Promise.all ([
                fetch(`https://smapshot.heig-vd.ch/api/v1/images/${this.id_picture}/footprint`),
                fetch(`https://smapshot.heig-vd.ch/api/v1/images?id=${this.id_picture}`),
            ]);
            const data1 = await res1.json();
            for (let coords of data1.footprint.coordinates) {
                this.dataGeoJSON.push({
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": coords}
                });
            };
            const data2 = await res2.json();
            for (let dataPicture of data2.rows) {
                this.lngLat.push({
                    "urlPicture": dataPicture.media.image_url,
                    "longitude": dataPicture.longitude,
                    "latitude": dataPicture.latitude,
                    "title": dataPicture.title
                    });
            };
        } catch (err) {
            console.log(err);
        }
        this.requestUpdate();
        //map

        const mapEl = this.shadowRoot.querySelector('#mapid');
        let map = createMap(mapEl).setView([46.78, 6.64], 13);
        let polygon = geoJSON(this.dataGeoJSON,
            { 
                color: this.colorStyle,
                weight: 2,
                opacity: 0.65
            }).addTo(map);
        let circle1 = circle([this.lngLat[0].latitude, this.lngLat[0].longitude], 
            {
                color: this.colorStyle,
                fillOpacity: 0.7,
                radius: 140
            }).addTo(map);
        circle1.bindPopup(`<a style="text-decoration: none; font-weight: 600;" target="_blank" href="https://smapshot.heig-vd.ch/visit/${this.id_picture}">
                            <img style="width:100%" src=${this.lngLat[0].urlPicture}></img>
                            <br><p style="margin:0; padding:0">${this.lngLat[0].title}</p></a>`).closePopup();
        map.fitBounds(polygon.getBounds());
        map.addLayer(tileLayer(this.urlMap, {minZoom: 4}));
    }

    render() {
        return html`
            <link rel="stylesheet" href="./node_modules/leaflet/dist/leaflet.css">
            <div id="mapid" style="height: 100%"></div>
        `;
    }
}

customElements.define("map-smapshot", Map);
