import { Controller } from "@hotwired/stimulus"
import { basicSetup } from "codemirror"
import { EditorView } from "@codemirror/view"

// Connects to data-controller="controller"
export default class extends Controller {
  static values = { content: String }

  connect() {
    this.editor = new EditorView({
      doc: this.contentValue,
      parent: this.element,
      extensions: [basicSetup]
    })
  }

  disconnect() {
    this.editor.destroy()
  }
}
