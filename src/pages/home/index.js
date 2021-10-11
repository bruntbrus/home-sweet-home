/*
 * Home page module
 */

import Page from '../../page.js'
import template from './template.js'

class HomePage extends Page {
  render() {
    return template()
  }
}

export default new HomePage({
  name: 'home',
  title: 'Home',
  icon: 'home',
})
