import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
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
      <polymer3-quill></polymer3-quill>
    `;
  }
}
customElements.define('demo-element', DemoElement);
