/*
 * Page module
 */

export default class Page {
  constructor(config) {
    this.name = config.name || ''
    this.title = config.title || ''
    this.icon = config.icon || ''
  }

  init() {}

  dispose() {}

  render() {
    return ''
  }

  setup(/* container */) {}
}
