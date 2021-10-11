/*
 * Storage module
 */

/* global localStorage */

const storage = localStorage

/**
 * Stores a value in the storage.
 *
 * @param {string} key
 * @param {*} value
 * @return {boolean} - True on success
 */
export function store(key, value) {
  try {
    value = JSON.stringify(value)
  } catch (error) {
    return false
  }

  storage.setItem(key, value)

  return true
}

/**
 * Fetches a value from the storage.
 *
 * @param {string} key
 * @return {*}
 */
export function fetch(key) {
  let value = storage.getItem(key)

  try {
    value = JSON.parse(value)
  } catch (error) {
    return null
  }

  return value
}

export default {

  store,
  fetch,
}
