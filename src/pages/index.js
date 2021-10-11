/*
 * Pages module
 */

import home from './home/index.js'
import edit from './edit/index.js'

const pages = [
  home,
  edit,
]

export function getPages() {
  return pages
}

export function getPage(name) {
  return pages.find((page) => page.name === name)
}
