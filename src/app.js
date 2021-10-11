/*
 * App module
 */

import $ from 'jquery'
import { getPage, getPages } from './pages/index.js'
import pageTemplate from './templates/page.js'
import pageListTemplate from './templates/page-list.js'

class App {
  constructor() {
    this.header = null
    this.footer = null
    this.nav = null
    this.view = null
    this.pageList = null
    this.page = null
  }

  init() {
    this.header = $('#header')
    this.footer = $('#footer')
    this.nav = $('#nav').append(pageListTemplate({ pages: getPages() }))
    this.view = $('#view')

    this.pageList = this.nav.find('.page-list').on('click', 'li', (event) => {
      this.loadPage(event.currentTarget.dataset.name)
    })

    this.loadPage('home')
  }

  dispose() {
    this.header = null
    this.footer = null
    this.nav = null
    this.view = null
    this.pageList = null
    this.page = null
  }

  loadPage(name) {
    let page = this.page

    if (page && name === page.name) {
      return
    }

    const view = this.view
    const pageList = this.pageList

    pageList.find('li.selected').removeClass('selected')
    pageList.find(`li[data-name="${name}"]`).addClass('selected')

    let container

    if (page) {
      container = view.find('.page').remove()
      page.dispose(container)
    }

    page = getPage(name)
    page.init()

    container = $(pageTemplate({

      name,
      content: page.render(),
    }))

    page.setup(container)
    view.append(container)

    this.page = page
  }
}

export default new App()
