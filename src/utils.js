/*
 * Utilities module
 */

/**
 * Returns true if value is a number.
 *
 * @param {*} value
 * @return {boolean}
 */
export function isNumber(value) {
  return (typeof value === 'number')
}

/**
 * Returns true if value is a boolean.
 *
 * @param {*} value
 * @return {boolean}
 */
export function isBoolean(value) {
  return (typeof value === 'boolean')
}

/**
 * Returns true if value is a string.
 *
 * @param {*} value
 * @return {boolean}
 */
export function isString(value) {
  return (typeof value === 'string')
}

/**
 * Returns true if value is an object.
 *
 * @param {*} value
 * @return {boolean}
 */
export function isObject(value) {
  return (value !== null && typeof value === 'object')
}

/**
 * Returns true if value is an array.
 *
 * @param {*} value
 * @return {boolean}
 */
export function isArray(value) {
  return Array.isArray(value)
}

/**
 * Returns true if value is a function.
 *
 * @param {*} value
 * @return {boolean}
 */
export function isFunction(value) {
  return (typeof value === 'function')
}

/**
 * Returns true if value is a RegExp.
 *
 * @param {*} value
 * @return {boolean}
 */
export function isRegExp(value) {
  return (Object.prototype.toString.call(value) === '[object RegExp]')
}

/**
 * Returns the type of value.
 * Similar to the typeof-operator, but more precise.
 *
 * @param {*} value
 * @return {string}
 */
export function getType(value) {
  if (value === undefined || value === null) {
    return String(value)
  }

  let type = typeof value

  if (type === 'object') {
    if (isArray(value)) {
      type = 'array'
    } else if (isRegExp(value)) {
      type = 'regexp'
    }
  }

  return type
}

/**
 * Creates a new array from an array-like object.
 *
 * @param {Object} object
 * @return {Array}
 */
export function toArray(object) {
  return Array.from(object)
}

/**
 * Calls a function for each property in object.
 *
 * @param {Object} object
 * @param {Function} callback - function (key, value), this = object
 */
export function eachIn(object, callback) {
  Object.keys(object).forEach((key) => callback.call(object, key, object[key]))
}
