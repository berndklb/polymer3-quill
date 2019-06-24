import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import '../polymer3-quill.js';

class DemoElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          font-family: sans-serif;
        }
        .test {
          width: 100%;          
        }
      </style>
      <iron-icon icon="star"></iron-icon>
    `;
  }
}
customElements.define('demo-element', DemoElement);
