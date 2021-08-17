import {html, css, LitElement} from 'lit';
import {map as createMap, tileLayer, geoJSON, circle} from './node_modules/leaflet/dist/leaflet-src.esm.js'; 
import './node_modules/leaflet/dist/leaflet.css';

export class Map extends LitElement{
	static get styles() {
		return [css`
			:host {
					display:block;
			}
			#mapid {
					min-width: 300px;
					min-height: 200px;
			}
		`];
	}

	static get properties() {
		return {
			original_id: {type: String},
			urlMapLight: {type: String},
			urlMapDark: {type: String},
			darkMode: {type: Boolean},
			lightMode: {type: Boolean},
			attributionCust: {type: String},
			colorStyle: {type: String},
		};
	}

	constructor() {
		super();
		this.urlMapLight = 'https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png';
		this.urlMapDark = 'https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png';
		this.darkMode = false;
		this.lightMode = false;
		this.attributionCust = 'Map data &copy; <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
		this.id_picture = '';
		this.original_id = '';
		this.colorStyle = '#0349b2';
		this.dataGeoJSON = [];
	}

	connectedCallback() {
		super.connectedCallback();
		this.showMapWithGeoJSON();
	}

	async showMapWithGeoJSON() {
		if(this.original_id == ''){ 
			this.shadowRoot.host.style.display = 'none';
			console.error("map-smapshot : Please enter an original ID picture valid");
		}
		else {
			try {
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
							const image = data2.rows[0];
							this.urlPicture = image.media.image_url;
							this.longitude = image.longitude;
							this.latitude =  image.latitude;
							this.title = image.title;
							
							const mapEl = this.shadowRoot.querySelector('#mapid');
							let map = createMap(mapEl).setView([46.78, 6.64], 13);
							let polygon = geoJSON(this.dataGeoJSON,
									{ 
										color: this.colorStyle,
										weight: 2,
										opacity: 0.65
									}).addTo(map);
							let circle1 = circle([this.latitude, this.longitude], 
									{
										color: this.colorStyle,
										fillOpacity: 0.7,
										radius: 140
									}).addTo(map);
							circle1.bindPopup(`<a style="text-decoration: none; font-weight: 600;" target="_blank" href="https://smapshot.heig-vd.ch/visit/${this.id_picture}">
																<img style="width:100%" src=${this.urlPicture}></img>
																<br><p style="margin:0; padding:0">${this.title}</p></a>`).closePopup();
							map.fitBounds(polygon.getBounds());
							map.addLayer(tileLayer(this.mapLayer(), { minZoom: 4, attribution: `<a target="_blank" href="https://smpashot.heig-vd.ch/">Smapshot</a> | ${this.attributionCust}`}));
					} catch (err) { 
						console.error("Error map-smapshot :", err);
					}
			}
			catch (err) {
				console.error("map-smapshot : Cannot retrieve metadata and image footprint");
				console.error("Error map-smapshot :", err);
			}
		}
		this.requestUpdate();
	}

	mapLayer(){
		if (this.darkMode) { // force dark mode
			return this.urlMapDark;
		}
		else if (this.lightMode) { // force light mode
			return this.urlMapLight;
		}
		else if (window.matchMedia('(prefers-color-scheme: light)').matches) { // auto detect light mode
			return this.urlMapLight;
		}
		else if (window.matchMedia('(prefers-color-scheme: dark)').matches) { // auto detect dark mode
			return this.urlMapDark;
		}
		else { // if auto detect is not support
			return this.urlMapLight;
		}
	}

	render() {
		return html`
			<div id="mapid"></div>
		`;
	}
}

customElements.define("map-smapshot", Map);
