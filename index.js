
/**
 * Module dependencies.
 */

var promisify = require('promisify');
var along = require('along');

/**
 * Export `vomit`.
 */

module.exports = vomit;

/**
 * Vomit `obj` as promises on `fn`.
 *
 * @param {Object} obj
 * @param {Function} fn
 * @param {Function} [cb]
 * @return {Mixed}
 * @api public
 */

function vomit (obj, fn, cb) {
  var p = promisify(obj);
  if (cb) p.next = cb;
  var res = along(p, fn);
  if (cb && res && res.isPromise) {
    res.when(cb);
  }
  return res;
}
