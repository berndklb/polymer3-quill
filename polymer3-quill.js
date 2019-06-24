import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { Quill } from 'quill/quill.js';

class IconToggle extends PolymerElement {
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

customElements.define('icon-toggle', IconToggle);
