import { Controller } from "@hotwired/stimulus"
import { basicSetup } from "codemirror"
import { EditorView } from "@codemirror/view"
import { debounce } from "./helpers/debounce"

// Connects to data-controller="controller"
export default class extends Controller {
  static values = {
    content: String,
    updateUrl: String
  }

  initialize() {
    this.debouncedUpdate = debounce(() => this.#update())
  }

  connect() {
    this.editor = new EditorView({
      doc: this.contentValue,
      parent: this.element,
      extensions: [
        basicSetup,
        EditorView.updateListener.of((update) => {
          if (update.docChanged) { this.debouncedUpdate() }
        })
      ]
    })
  }

  disconnect() {
    this.editor.destroy()
  }

  // private (use #)

  async #update() {
    const response = await fetch(
      // automatic getter from static values
      this.updateUrlValue, 
      {
        method: "PUT",
        headers: {
          "X-CSRF-Token": document.querySelector('[name="csrf-token"]').content,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          page: {
            content: this.editor.state.doc.toString()
          }
        })
      }
    )
  }
}
