import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { Quill } from 'quill/quill.js';

class Polymer3Quill extends PolymerElement {
  static get template() {
    return html`
      <style>
      </style>
  
      <!-- shadow DOM goes here -->
      <div>
        <div id="editor"></div>
      </div>
    `;
  }
  constructor() {
    super();
  }
  ready() {
    super.ready();
    this.editor = new Quill(this.$.editor, {
      theme: 'snow'
    });
  }
}

customElements.define('polymer3-quill', Polymer3Quill);
