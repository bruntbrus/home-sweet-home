/*
 * Edit page module
 */

import Page from '../../page.js'
import template from './template.js'
import { store, fetch } from '../../storage.js'

const storageKey = 'edit-page-text'

class EditPage extends Page {
  dispose(container) {
    const text = container.find('textarea').val()

    store(storageKey, text)
  }

  render() {
    return template({ text: fetch(storageKey) })
  }
}

export default new EditPage({

  name: 'edit',
  title: 'Edit',
  icon: 'edit',
})
