import {html, css, LitElement} from 'lit';

export class ElSmapshot extends LitElement {

  darkModeCSS = html`
    <style>
      .container { background: #333333; }
      svg { fill: #FFFFFF; }
      article { color: white; }
      #loader { border: 8px solid #818181; border-top: 8px solid #f3f3f3;}
      .btn-next, .btn-prev { color: white; }
      #contents:after { background: linear-gradient(to right, #333333 0%,transparent 3%,transparent 97%,#333333 100%); }
    </style>
  `;

  lightModeCSS = html`
    <style>
      .container { background: #FFFFFF; }
      svg { fill: #1F1F1F; }
      article { color: black; }
      #loader { border: 8px solid #f3f3f3; border-top: 8px solid #000000;}
      #contents:after { background: linear-gradient(to right, #fff 0%,transparent 3%,transparent 97%,#fff 100%); }
    </style>
  `;

  static get styles() {
    return css`
      :host {
        font: normal 14px/1.4 Helvetica, Arial, sans-serif;
        text-align: center;
        --item-margin: 10px;
        --item-offset: 0px;
        --item-width: 200px;
      }
      .container
      {
        min-width: 300px;
      }
      svg {
        margin: 10px;
      }
      svg:hover {
        fill: #818181;
      }
      #loader {
        display: block;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 2s linear infinite;
        margin: 60px auto;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      #carousel {
        display: none;
        flex-direction: row;
      }
      .btn-next,
      .btn-prev {
        background: none;
        border: 0;
        cursor: pointer;
        font-size: 3em;
        outline: none;
        margin: 0 0 80px 0;
      }
      .hidden {
        visibility: hidden;
      }
      #contents {
        display: flex;
        flex: 1;
        overflow: hidden;
        position: relative;
        align-items: baseline;
      }
      #contents::after {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        pointer-events: none;
      }
      article {
        flex-shrink: 0;
        padding: 10px;
        transform: translateX(calc(-1 * var(--item-offset)));
        transition: transform 300ms;
        width: var(--item-width);
        text-align: center;
      }
      a {
        text-decoration: none;
        color: #000000;
      }
      article .picture{
        height: 150px;
        width: 200px;
      }
      article .title{
        font-size: 1.1em;
        margin: 0;
      }
      article .date{
        font-size: 0.8em;
        margin: 0;
      }
      :host([looping]) article {
        transition: none;
      }
      @media only screen and (max-width: 700px) {
        svg {
        width: 40%;
        margin: 5px;
        }
      }
    `;
  }

  static get properties() {
    return {
      lat: {type: Number},
      long: {type: Number},
      limit: {type: Number},
      data: {type: Array},
      looping: { type: Boolean },
      darkMode: {type: Boolean},
      lightMode: {type: Boolean},
      _offset: { type: Number },
    };
  }
  
  constructor() {
    super();
    this.lat = '';
    this.long = '';
    this.limit = 10;
    this.data = [];
    this.looping = false;
    this.darkMode = false;
    this.lightMode = false;
    this._firstIndex = 0;
    this._offset = 0;
    this.theme = null;
  }
  
  connectedCallback() {
    super.connectedCallback();
    this.retrieveImages();
    this.themeCss();
  }

  render() {
    return html`
    ${this.theme}
    <div class="container">
      <a target="_blank" href="https://smapshot.heig-vd.ch" ><svg width="236" height="22" viewBox="0 0 236 22" xmlns="http://www.w3.org/2000/svg"><path d="M7.65 21.3C6.11 21.3 4.64 21.04 3.24 20.52C1.86 19.98 0.78 19.29 0 18.45L0.69 17.31C1.43 18.09 2.42 18.73 3.66 19.23C4.92 19.71 6.24 19.95 7.62 19.95C9.62 19.95 11.13 19.57 12.15 18.81C13.17 18.05 13.68 17.06 13.68 15.84C13.68 14.9 13.41 14.15 12.87 13.59C12.33 13.03 11.66 12.6 10.86 12.3C10.06 12 8.98 11.69 7.62 11.37C6.08 10.99 4.84 10.62 3.9 10.26C2.98 9.9 2.19 9.35 1.53 8.61C0.89 7.85 0.57 6.84 0.57 5.58C0.57 4.56 0.84 3.63 1.38 2.79C1.92 1.93 2.74 1.25 3.84 0.75C4.96 0.25 6.35 0 8.01 0C9.17 0 10.31 0.17 11.43 0.51C12.55 0.85 13.52 1.31 14.34 1.89L13.77 3.12C12.93 2.54 12 2.1 10.98 1.8C9.98 1.5 8.99 1.35 8.01 1.35C6.07 1.35 4.6 1.74 3.6 2.52C2.6 3.3 2.1 4.31 2.1 5.55C2.1 6.49 2.37 7.24 2.91 7.8C3.45 8.36 4.12 8.79 4.92 9.09C5.72 9.39 6.81 9.71 8.19 10.05C9.73 10.43 10.96 10.8 11.88 11.16C12.8 11.52 13.58 12.07 14.22 12.81C14.88 13.53 15.21 14.51 15.21 15.75C15.21 16.77 14.93 17.7 14.37 18.54C13.83 19.38 12.99 20.05 11.85 20.55C10.71 21.05 9.31 21.3 7.65 21.3ZM49.2713 21.15L49.2413 3.18L40.4513 18.36H39.7013L30.9113 3.24V21.15H29.4113V0.15H30.7013L40.0913 16.38L49.4813 0.15H50.7413L50.7713 21.15H49.2713ZM80.0829 15.24H67.9029L65.2329 21.15H63.5829L73.2429 0.15H74.7729L84.4329 21.15H82.7829L80.0829 15.24ZM79.5129 13.95L73.9929 1.83L68.5029 13.95H79.5129ZM104.775 0.15C107.415 0.15 109.485 0.78 110.985 2.04C112.485 3.28 113.235 5.01 113.235 7.23C113.235 9.43 112.485 11.16 110.985 12.42C109.485 13.66 107.415 14.28 104.775 14.28H98.775V21.15H97.2452V0.15H104.775ZM104.775 12.9C107.015 12.9 108.725 12.41 109.905 11.43C111.085 10.45 111.675 9.05 111.675 7.23C111.675 5.41 111.085 4.01 109.905 3.03C108.725 2.03 107.015 1.53 104.775 1.53H98.775V12.9H104.775ZM133.211 21.3C131.671 21.3 130.201 21.04 128.801 20.52C127.421 19.98 126.341 19.29 125.561 18.45L126.251 17.31C126.991 18.09 127.981 18.73 129.221 19.23C130.481 19.71 131.801 19.95 133.181 19.95C135.181 19.95 136.691 19.57 137.711 18.81C138.731 18.05 139.241 17.06 139.241 15.84C139.241 14.9 138.971 14.15 138.431 13.59C137.891 13.03 137.221 12.6 136.421 12.3C135.621 12 134.541 11.69 133.181 11.37C131.641 10.99 130.401 10.62 129.461 10.26C128.541 9.9 127.751 9.35 127.091 8.61C126.451 7.85 126.131 6.84 126.131 5.58C126.131 4.56 126.401 3.63 126.941 2.79C127.481 1.93 128.301 1.25 129.401 0.75C130.521 0.25 131.911 0 133.571 0C134.731 0 135.871 0.17 136.991 0.51C138.111 0.85 139.081 1.31 139.901 1.89L139.331 3.12C138.491 2.54 137.561 2.1 136.541 1.8C135.541 1.5 134.551 1.35 133.571 1.35C131.631 1.35 130.161 1.74 129.161 2.52C128.161 3.3 127.661 4.31 127.661 5.55C127.661 6.49 127.931 7.24 128.471 7.8C129.011 8.36 129.681 8.79 130.481 9.09C131.281 9.39 132.371 9.71 133.751 10.05C135.291 10.43 136.521 10.8 137.441 11.16C138.361 11.52 139.141 12.07 139.781 12.81C140.441 13.53 140.771 14.51 140.771 15.75C140.771 16.77 140.491 17.7 139.931 18.54C139.391 19.38 138.551 20.05 137.411 20.55C136.271 21.05 134.871 21.3 133.211 21.3ZM172.072 0.15V21.15H170.542V11.16H156.502V21.15H154.972V0.15H156.502V9.81H170.542V0.15H172.072ZM197.315 21.3C195.255 21.3 193.395 20.84 191.735 19.92C190.075 18.98 188.765 17.7 187.805 16.08C186.865 14.46 186.395 12.65 186.395 10.65C186.395 8.65 186.865 6.84 187.805 5.22C188.765 3.6 190.075 2.33 191.735 1.41C193.395 0.47 195.255 0 197.315 0C199.375 0 201.235 0.46 202.895 1.38C204.555 2.3 205.855 3.57 206.795 5.19C207.755 6.81 208.235 8.63 208.235 10.65C208.235 12.67 207.755 14.49 206.795 16.11C205.855 17.73 204.555 19 202.895 19.92C201.235 20.84 199.375 21.3 197.315 21.3ZM197.315 19.89C199.075 19.89 200.665 19.49 202.085 18.69C203.505 17.89 204.625 16.79 205.445 15.39C206.265 13.97 206.675 12.39 206.675 10.65C206.675 8.91 206.265 7.34 205.445 5.94C204.625 4.52 203.505 3.41 202.085 2.61C200.665 1.81 199.075 1.41 197.315 1.41C195.555 1.41 193.955 1.81 192.515 2.61C191.095 3.41 189.975 4.52 189.155 5.94C188.335 7.34 187.925 8.91 187.925 10.65C187.925 12.39 188.335 13.97 189.155 15.39C189.975 16.79 191.095 17.89 192.515 18.69C193.955 19.49 195.555 19.89 197.315 19.89ZM226.269 1.53H218.709V0.15H235.359V1.53H227.799V21.15H226.269V1.53Z"/></svg></a>
      <div id="loader"></div>
      <div id="carousel">
        <button class="btn-prev" @click=${() => this._move('left')}>
          <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <g><path fill-rule="evenodd" clip-rule="evenodd" d="M13 29.9707L36.3345 6.63618C37.5061 5.4646 39.4056 5.4646 40.5772 6.63618C41.7487 7.80775 41.7487 9.70725 40.5772 10.8788L21.4853 29.9707L40.5772 49.0626C41.7487 50.2342 41.7487 52.1337 40.5772 53.3052C39.4056 54.4768 37.5061 54.4768 36.3345 53.3052L13 29.9707Z"/></g>
          </svg>
        </button>
        <div id="contents">
          ${this.data.map(({ id, url, title, date_shot_min }) => html`
          <a target="_blank" href="https://smapshot.heig-vd.ch/visit/${id}" >
            <article>
              <img class="picture" src="${url}">
              <p class="title">${title}</p>
              <p class="date">${date_shot_min}</p>
            </article>
            </a>
          `)}
        </div>
        <button class="btn-next" @click=${() => this._move('right')}>
          <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <g><path fill-rule="evenodd" clip-rule="evenodd" d="M46.9117 29.9707L23.5772 53.3052C22.4056 54.4768 20.5061 54.4768 19.3345 53.3052C18.163 52.1337 18.163 50.2342 19.3345 49.0626L38.4264 29.9707L19.3345 10.8788C18.163 9.70725 18.163 7.80775 19.3345 6.63618C20.5061 5.4646 22.4056 5.4646 23.5772 6.63618L46.9117 29.9707Z"/></g>
          </svg>
        </button>
      </div>
    </div>
    <slot></slot>
    `;
  }

  async retrieveImages() {
    const response = await fetch(`https://smapshot.heig-vd.ch/api/v1/images?latitude=${this.lat}&longitude=${this.long}&sortKey=distance&limit=${this.limit}`);
    const data = await response.json();
    for (let picture of data.rows) {
      this.data.push({
        id: picture.id,
        date_shot_min: picture.date_shot_min,
        title: picture.title,
        url: picture.media.image_url})
    }
    this.requestUpdate();
    this.shadowRoot.getElementById('loader').style.display = 'none';
    this.shadowRoot.getElementById('carousel').style.display = 'flex';
  }

  themeCss() {
    if (this.darkMode) { // force dark mode
      return this.theme = this.darkModeCSS;
    }
    else if (this.lightMode) { // force light mode
      return this.theme = this.lightModeCSS;
    }
    else if (window.matchMedia('(prefers-color-scheme: light)').matches) { // auto detect light mode
      return this.theme = this.lightModeCSS;
    }
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) { // auto detect dark mode
      return this.theme = this.darkModeCSS;
    }
    else { // if auto detect is not support
      return this.theme = this.lightModeCSS;
    }
  }

  _move(direction) {
    const container = this.shadowRoot.getElementById('contents');
    const styles = getComputedStyle(this);
    const itemMargin = parseFloat(styles.getPropertyValue('--item-margin'));
    const itemWidth = parseFloat(styles.getPropertyValue('--item-width'));
    const itemTotalWidth = itemWidth + 2 * itemMargin;

    if (this.looping) {
      const data = container.querySelectorAll('article');
      const lastIndex = data.length - 1;
      if (direction === 'left') {
        this._firstIndex = this._firstIndex === 0 ? lastIndex : this._firstIndex - 1;
      } else {
        this._firstIndex = this._firstIndex === lastIndex ? 0 : this._firstIndex + 1;
      }
      // Move items from this._firstIndex to the lastIndex left.
      for (let i = this._firstIndex; i < data.length; i++) {
        data[i].style.transform = `translateX(-${itemTotalWidth * this._firstIndex}px)`;
      }
      // Move the rest of the items right.
      for (let i = 0; i < this._firstIndex; i++) {
        data[i].style.transform = `translateX(${itemTotalWidth * (data.length - this._firstIndex)}px)`;
      }
    } else {
      const itemsTotalWidth = itemTotalWidth * this.data.length;
      const buffer = itemsTotalWidth - container.clientWidth;
      if (direction === 'left') {
        this._offset = this._offset - itemTotalWidth >= 0
          ? this._offset - itemTotalWidth
          : 0;
      } else {
        this._offset = this._offset + itemTotalWidth > buffer
          ? buffer
          : this._offset + itemTotalWidth;
      }
    }
    this.style.setProperty('--item-offset', `${this._offset}px`);
  }
  
}
window.customElements.define('element-smapshot', ElSmapshot);
