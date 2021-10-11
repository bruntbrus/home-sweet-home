/*
 * HTTP request module
 */

/* global Promise */

import $ from 'jquery'

/**
 * Initiates an HTTP request.
 *
 * @param {string} url
 * @param {Object = null} options
 * @return {Promise} - Resolved with response object
 */
export function request(url, options) {
  // Return a real Promise (not jqXHR)
  return new Promise((resolve, reject) => {
    $.ajax(url, options).done((data, status, jqXHR) => {
      resolve({
        request: jqXHR,
        status,
        data,
      })
    }).fail((jqXHR, status, error) => {
      reject({
        request: jqXHR,
        status,
        error,
      })
    })
  })
}

/**
 * Initiates an HTTP GET request.
 *
 * @param {string} url
 * @param {string = ""} dataType
 * @param {Object = null} data
 * @return {Promise} - Resolved with response object
 */
export function get(url, dataType, data) {
  return request(url, {
    method: 'GET',
    dataType,
    data,
  })
}

/**
 * Initiates an HTTP POST request.
 *
 * @param {string} url
 * @param {string = ""} dataType
 * @param {Object = null} data
 * @return {Promise} - Resolved with response object
 */
export function post(url, dataType, data) {
  return request(url, {
    method: 'POST',
    dataType,
    data,
  })
}

/**
 * Initiates an HTTP GET request of JSON data.
 *
 * @param {string} url
 * @param {Object = null} data
 * @return {Promise} - Resolved with response object
 */
export function json(url, data) {
  return request(url, {
    method: 'GET',
    dataType: 'json',
    data,
  })
}

export default {
  request,
  get,
  post,
  json,
}
