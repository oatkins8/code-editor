import { Controller } from "@hotwired/stimulus"
import { basicSetup } from "codemirror"
import { EditorView } from "@codemirror/view"

// Connects to data-controller="controller"
export default class extends Controller {
  connect() {
    this.editor = new EditorView({
      doc: "Hello, from Rails Designer",
      parent: this.element,
      extensions: [basicSetup]
    })
  }

  disconnect() {
    this.editor.destroy()
  }
}
