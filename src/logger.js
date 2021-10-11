/*
 * Logger module
 */

/* global console */

function write(method, args) {
  // Simply call a console method
  console[method].apply(console, args)
}

/**
 * Generic log.
 */
export function log(...args) {
  write('log', args)
}

/**
 * Warning log.
 */
export function warn(...args) {
  write('warn', args)
}

/**
 * Error log.
 */
export function error(...args) {
  write('error', args)
}

export default {

  log,
  warn,
  error,
}
