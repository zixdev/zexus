webpackJsonp([4],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(138),
  /* template */
  __webpack_require__(139),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/badi/Desktop/Zix_Development/NE>/laravel/plugins/Core/Assets/admin/js/core/+pages/components/all.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] all.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7e17bf56", Component.options)
  } else {
    hotAPI.reload("data-v-7e17bf56", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(140),
  /* template */
  __webpack_require__(141),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/badi/Desktop/Zix_Development/NE>/laravel/plugins/Core/Assets/admin/js/core/+pages/components/create.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] create.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-49bf3378", Component.options)
  } else {
    hotAPI.reload("data-v-49bf3378", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(142),
  /* template */
  __webpack_require__(143),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/badi/Desktop/Zix_Development/NE>/laravel/plugins/Core/Assets/admin/js/core/+pages/components/view.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] view.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c47f9a1", Component.options)
  } else {
    hotAPI.reload("data-v-3c47f9a1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    var obj;

    while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];

        if (Array.isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }

    return obj;
};

exports.arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

exports.merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = exports.arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = exports.merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = exports.merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

exports.assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

exports.decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

exports.encode = function encode(str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

exports.compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    return compactQueue(queue);
};

exports.isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

exports.isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};


/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _qs = __webpack_require__(121);

var _qs2 = _interopRequireDefault(_qs);

var _tableSettings = __webpack_require__(124);

var _tableSettings2 = _interopRequireDefault(_tableSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_vue2.default.component('data-table-settings', _tableSettings2.default);

var DataTables = function (_Vue) {
    _inherits(DataTables, _Vue);

    function DataTables() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DataTables);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DataTables.__proto__ || Object.getPrototypeOf(DataTables)).call.apply(_ref, [this].concat(args))), _this), _this.api_url = '', _this.search = '', _this.totalItems = 0, _this.items = [], _this.loading = true, _this.headers = [], _this.pagination = { rowsPerPage: 10 }, _this.eloquent = ['active', 'trashed'], _this.eloquent_status = 'active', _temp), _possibleConstructorReturn(_this, _ret);
    }
    //eloquent = [
    //    {text: 'All', value: 'active'},
    //    {text: 'Deleted', value: 'trashed'}
    //];


    _createClass(DataTables, [{
        key: 'initTablage',
        value: function initTablage(name) {
            this.api_url = name;
            this.getUserTableConfig(name);
            this.setWatchers();

            this.getDataFromApi();
        }
    }, {
        key: 'setWatchers',
        value: function setWatchers() {
            var _this2 = this;

            this.$watch('pagination', function () {
                _this2.getDataFromApi();
            }, { deep: true });

            this.$watch('search', function () {
                return _this2.getDataFromApi();
            });
            this.$watch('eloquent_status', function () {
                return _this2.getDataFromApi();
            }, { deep: true });

            /*
             * On user updated columns
             * updated the current table columns
             */
            this.$events.$on('update-table-headers', function (columns) {
                return _this2.headers = columns;
            });
        }
    }, {
        key: 'getDataFromApi',
        value: function getDataFromApi() {
            var _this3 = this;

            this.loading = true;
            this.$http.get(this.api_url + this.serialize(this.query)).then(function (res) {
                _this3.items = res.data.data;
                _this3.totalItems = res.data.recordsTotal;
                _this3.loading = false;
            });
        }
    }, {
        key: 'serialize',
        value: function serialize(obj) {
            return '?' + _qs2.default.stringify(obj);
        }

        /*
         * Soft Delete Helpers
         */

    }, {
        key: 'deleteData',
        value: function deleteData(id) {
            var _this4 = this;

            this.$http.delete(this.api_url + '/' + id + '?action=delete').then(function (res) {
                return _this4.getDataFromApi();
            });
        }
    }, {
        key: 'restoreData',
        value: function restoreData(id) {
            var _this5 = this;

            this.$http.delete(this.api_url + '/' + id + '?action=restore').then(function (res) {
                return _this5.getDataFromApi();
            });
        }
    }, {
        key: 'forceDeleteData',
        value: function forceDeleteData(id) {
            var _this6 = this;

            this.$http.delete(this.api_url + '/' + id + '?action=force-delete').then(function (res) {
                return _this6.getDataFromApi();
            });
        }
    }, {
        key: 'getUserTableConfig',
        value: function getUserTableConfig(key) {
            var _this7 = this;

            this.$http.get('user/config/tables.' + key).then(function (res) {
                var data = res.data;
                if (!_this7.isObject(data)) data = JSON.parse(data);
                _this7.headers = data.map(function (column) {
                    return {
                        text: _this7.$t('table.' + column.value),
                        left: column.left,
                        value: column.value,
                        sortable: column.sortable,
                        searchable: column.searchable
                    };
                });
            });
        }
    }, {
        key: 'isObject',
        value: function isObject(val) {
            return val instanceof Object;
        }
    }, {
        key: 'query',
        get: function get() {
            var _this8 = this;

            var columns = [];
            var index_sort = 0;
            var i = 0;
            this.headers.map(function (header) {
                columns.push({
                    searchable: header.searchable,
                    orderable: header.sortable,
                    data: header.value,
                    name: header.text
                });
                if (header.value == _this8.pagination.sortBy) index_sort = i;
                i++;
            });

            var order = [{
                column: index_sort,
                dir: this.pagination.descending ? 'desc' : 'asc'
            }];
            return {
                draw: this.pagination.page,
                eloquent: this.eloquent_status, // 'trashed'
                start: this.pagination.rowsPerPage * this.pagination.page - this.pagination.rowsPerPage,
                length: this.pagination.rowsPerPage,
                search: {
                    value: this.search,
                    regex: false
                },
                columns: columns,
                order: order
            };
        }
    }]);

    return DataTables;
}(_vue2.default);

exports.default = DataTables;

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(122);
var parse = __webpack_require__(123);
var formats = __webpack_require__(119);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(118);
var formats = __webpack_require__(119);

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats['default'];
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(118);

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder);
            val = options.decoder(part.slice(pos + 1), defaults.decoder);
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]') {
            obj = [];
            obj = obj.concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(125),
  /* template */
  __webpack_require__(126),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/badi/Desktop/Zix_Development/NE>/laravel/plugins/Core/Assets/admin/js/libraries/tablage/table-settings.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] table-settings.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61a13fc6", Component.options)
  } else {
    hotAPI.reload("data-v-61a13fc6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _vueClassComponent = __webpack_require__(16);

var _vueClassComponent2 = _interopRequireDefault(_vueClassComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableSettings = (_dec = (0, _vueClassComponent2.default)({
    props: {
        name: {
            required: true,
            type: String
        },
        columns: {
            required: true,
            type: Array
        }
    }
}), _dec(_class = function (_Vue) {
    _inherits(TableSettings, _Vue);

    function TableSettings() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TableSettings);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableSettings.__proto__ || Object.getPrototypeOf(TableSettings)).call.apply(_ref, [this].concat(args))), _this), _this.dialog = false, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TableSettings, [{
        key: 'mounted',
        value: function mounted() {
            $('.dd').nestable();
        }
    }, {
        key: 'save',
        value: function save() {
            this.dialog = false;
            var columns = $('.dd').nestable('serialize');
            this.$events.$emit('update-table-headers', columns);
            columns = JSON.stringify(columns);
            this.$http.put('user/config', {
                key: 'tables.' + this.name,
                data: columns
            });
        }
    }]);

    return TableSettings;
}(_vue2.default)) || _class);
exports.default = TableSettings;

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-dialog', {
    attrs: {
      "fullscreen": "",
      "transition": "v-dialog-bottom-transition",
      "overlay": false
    },
    model: {
      value: (_vm.dialog),
      callback: function($$v) {
        _vm.dialog = $$v
      },
      expression: "dialog"
    }
  }, [_c('v-btn', {
    attrs: {
      "flat": "",
      "primary": "",
      "light": ""
    },
    slot: "activator"
  }, [_c('v-icon', {
    attrs: {
      "dark": ""
    }
  }, [_vm._v("settings")])], 1), _vm._v(" "), _c('v-card', [_c('v-card-row', [_c('v-toolbar', [_c('v-btn', {
    attrs: {
      "icon": "icon",
      "block": "",
      "light": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.dialog = false
      }
    }
  }, [_c('v-icon', [_vm._v("close")])], 1), _vm._v(" "), _c('v-toolbar-title', [_c('span', {
    staticClass: "capitalize-text"
  }, [_vm._v(_vm._s(_vm.name))]), _vm._v(" Table Settings")]), _vm._v(" "), _c('v-btn', {
    attrs: {
      "light": "",
      "flat": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.save()
      }
    }
  }, [_vm._v("Save")])], 1)], 1), _vm._v(" "), _c('v-card-text', [_c('v-list', {
    attrs: {
      "three-line": "",
      "subheader": ""
    }
  }, [_c('v-subheader', [_vm._v("Columns")]), _vm._v(" "), _c('div', {
    staticClass: "dd"
  }, [_c('ol', {
    staticClass: "dd-list"
  }, _vm._l((_vm.columns), function(column, key) {
    return _c('li', {
      key: key,
      staticClass: "dd-item",
      attrs: {
        "data-searchable": column.searchable,
        "data-sortable": column.sortable,
        "data-left": column.left,
        "data-value": column.value,
        "data-text": column.text
      }
    }, [_c('div', {
      staticClass: "dd-handle"
    }, [_c('v-layout', [_c('v-flex', {
      attrs: {
        "sm6": ""
      }
    }, [_vm._v("\n                                        " + _vm._s(column.text) + "\n                                    ")]), _vm._v(" "), _c('v-flex', {
      attrs: {
        "sm6": ""
      }
    }, [_c('div', {
      staticClass: "dd-nodrag"
    }, [_c('v-switch', {
      attrs: {
        "label": "Sortable"
      },
      model: {
        value: (column.sortable),
        callback: function($$v) {
          column.sortable = $$v
        },
        expression: "column.sortable"
      }
    }), _vm._v(" "), _c('v-switch', {
      attrs: {
        "label": "Searchable"
      },
      model: {
        value: (column.searchable),
        callback: function($$v) {
          column.searchable = $$v
        },
        expression: "column.searchable"
      }
    }), _vm._v(" "), _c('v-switch', {
      attrs: {
        "label": "Left"
      },
      model: {
        value: (column.left),
        callback: function($$v) {
          column.left = $$v
        },
        expression: "column.left"
      }
    })], 1)])], 1)], 1)])
  }))])], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-61a13fc6", module.exports)
  }
}

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _vueClassComponent = __webpack_require__(16);

var _vueClassComponent2 = _interopRequireDefault(_vueClassComponent);

var _tablage = __webpack_require__(120);

var _tablage2 = _interopRequireDefault(_tablage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AllPages = (0, _vueClassComponent2.default)(_class = function (_DataTables) {
    _inherits(AllPages, _DataTables);

    function AllPages() {
        _classCallCheck(this, AllPages);

        return _possibleConstructorReturn(this, (AllPages.__proto__ || Object.getPrototypeOf(AllPages)).apply(this, arguments));
    }

    _createClass(AllPages, [{
        key: 'mounted',
        value: function mounted() {
            this.initTablage('pages');
        }
    }]);

    return AllPages;
}(_tablage2.default)) || _class;

exports.default = AllPages;

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-card', [_c('v-card-title', [_vm._v("\n        " + _vm._s(_vm.$t('pages.index_title')) + "\n    ")]), _vm._v(" "), _c('v-app-bar', [_c('data-table-settings', {
    staticClass: "hidden-sm-and-down",
    attrs: {
      "name": "pages",
      "columns": _vm.headers
    },
    on: {
      "update:columns": function($event) {
        _vm.headers = $event
      }
    }
  }), _vm._v(" "), _c('v-select', {
    staticClass: "hidden-sm-and-down",
    attrs: {
      "items": _vm.eloquent,
      "label": _vm.$t('table.filter-data')
    },
    model: {
      value: (_vm.eloquent_status),
      callback: function($$v) {
        _vm.eloquent_status = $$v
      },
      expression: "eloquent_status"
    }
  }), _vm._v(" "), _c('v-spacer', {
    staticClass: "hidden-sm-and-down"
  }), _vm._v(" "), _c('v-text-field', {
    attrs: {
      "append-icon": "search",
      "label": _vm.$t('table.search'),
      "single-line": "",
      "hide-details": ""
    },
    model: {
      value: (_vm.search),
      callback: function($$v) {
        _vm.search = $$v
      },
      expression: "search"
    }
  })], 1), _vm._v(" "), _c('v-data-table', {
    staticClass: "elevation-1",
    attrs: {
      "headers": _vm.headers,
      "items": _vm.items,
      "search": _vm.search,
      "pagination": _vm.pagination,
      "total-items": _vm.totalItems,
      "loading": _vm.loading
    },
    on: {
      "update:pagination": function($event) {
        _vm.pagination = $event
      }
    },
    scopedSlots: _vm._u([{
      key: "items",
      fn: function(props) {
        return [_vm._l((_vm.headers), function(header) {
          return _c('td', {
            class: {
              'text-xs-right': !header.left
            }
          }, [_vm._v(_vm._s(props.item[header.value]))])
        }), _vm._v(" "), (_vm.eloquent_status == 'active') ? _c('td', [_c('v-btn', {
          attrs: {
            "small": "",
            "dark": "",
            "default": "",
            "outline": "",
            "router": "",
            "to": {
              name: 'pages.edit',
              params: {
                id: props.item.id
              }
            }
          }
        }, [_vm._v("\n                    " + _vm._s(_vm.$t('table.edit')) + "\n                ")]), _vm._v(" "), _c('v-btn', {
          attrs: {
            "small": "",
            "dark": "",
            "default": "",
            "outline": ""
          },
          nativeOn: {
            "click": function($event) {
              _vm.deleteData(props.item.id)
            }
          }
        }, [_vm._v("\n                    " + _vm._s(_vm.$t('table.delete')) + "\n                ")])], 1) : _c('td', [_c('v-btn', {
          attrs: {
            "small": "",
            "dark": "",
            "error": "",
            "outline": ""
          },
          nativeOn: {
            "click": function($event) {
              _vm.forceDeleteData(props.item.id)
            }
          }
        }, [_vm._v("\n                    " + _vm._s(_vm.$t('table.force-delete')) + "\n                ")]), _vm._v(" "), _c('v-btn', {
          attrs: {
            "small": "",
            "dark": "",
            "default": "",
            "outline": ""
          },
          nativeOn: {
            "click": function($event) {
              _vm.restoreData(props.item.id)
            }
          }
        }, [_vm._v("\n                    " + _vm._s(_vm.$t('table.restore')) + "\n                ")])], 1)]
      }
    }])
  }), _vm._v(" "), _c('v-btn', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip:left",
      value: ({
        html: _vm.$t('pages.add')
      }),
      expression: "{html: $t('pages.add')}",
      arg: "left"
    }],
    staticClass: "btn--add",
    attrs: {
      "dark": "",
      "primary": "",
      "floating": "",
      "router": "",
      "to": {
        name: 'pages.add'
      }
    }
  }, [_c('v-icon', {
    attrs: {
      "light": ""
    }
  }, [_vm._v("add")])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7e17bf56", module.exports)
  }
}

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _vueClassComponent = __webpack_require__(16);

var _vueClassComponent2 = _interopRequireDefault(_vueClassComponent);

var _vuex = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreatePage = (_dec = (0, _vueClassComponent2.default)({
    computed: (0, _vuex.mapState)(['messages']),
    methods: (0, _vuex.mapActions)(['resetMessages', 'setMessage'])
}), _dec(_class = function (_Vue) {
    _inherits(CreatePage, _Vue);

    function CreatePage() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, CreatePage);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CreatePage.__proto__ || Object.getPrototypeOf(CreatePage)).call.apply(_ref, [this].concat(args))), _this), _this.editorConfig = {
            height: 200,
            width: '100%'
        }, _this.page = {
            title: '',
            slug: '',
            content: '',
            sites: [],
            seo: {
                title: '',
                description: '',
                keywords: ''
            },
            status: true
        }, _this.expand = true, _this.sites = [], _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(CreatePage, [{
        key: 'mounted',
        value: function mounted() {
            var _this2 = this;

            /**
             * When form title changes.
             * Slug will be updated.
             */
            this.$watch('page.title', function (title, val) {
                _this2.page.slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '-');
            });

            /*
             * Load The Sites Data
             */
            this.$http.get('sites').then(function (res) {
                return _this2.sites = res.data.data;
            });

            /*
             * Load Page Data If Edit Mode
             */
            this.edit ? this.updateEditPage() : false;
        }
    }, {
        key: 'save',
        value: function save() {
            this.resetMessages();

            // if form for create
            return this.edit ? this.update() : this.create();
        }
    }, {
        key: 'create',
        value: function create() {
            var _this3 = this;

            return this.$http.post('pages', this.page).then(function (response) {
                _this3.setMessage({ type: 'success', message: response.data.message });
                _this3.$router.push({ name: 'pages.index' });
            });
        }
    }, {
        key: 'update',
        value: function update() {
            var _this4 = this;

            return this.$http.put('pages/' + this.$route.params.id, this.page).then(function (response) {
                _this4.setMessage({ type: 'success', message: response.data.message });
                _this4.$router.push({ name: 'pages.index' });
            });
        }
    }, {
        key: 'updateEditPage',
        value: function updateEditPage() {
            var _this5 = this;

            this.$http.get('pages/' + this.$route.params.id).then(function (response) {
                _this5.page = response.data;
                _this5.page.sites = _this5.page.sites.map(function (site) {
                    return site.id.toString();
                });
                _this5.page.status = _this5.page.status ? true : false;
            });
        }
    }, {
        key: 'edit',
        get: function get() {
            return this.$route.params.id ? true : false;
        }
    }]);

    return CreatePage;
}(_vue2.default)) || _class);
exports.default = CreatePage;

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-card', [_c('v-card-title', [_vm._v("\n        " + _vm._s(_vm.$t('pages.add')) + "\n    ")]), _vm._v(" "), _c('v-card-text', [_c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.save()
      }
    }
  }, [_c('v-card-row', [_c('v-text-field', {
    attrs: {
      "name": "input-1",
      "label": _vm.$t('table.title'),
      "rules": _vm.messages.validation.title
    },
    model: {
      value: (_vm.page.title),
      callback: function($$v) {
        _vm.page.title = $$v
      },
      expression: "page.title"
    }
  })], 1), _vm._v(" "), _c('v-card-row', [_c('v-text-field', {
    attrs: {
      "name": "input-1",
      "label": _vm.$t('table.slug'),
      "rules": _vm.messages.validation.slug,
      "disabled": ""
    },
    model: {
      value: (_vm.page.slug),
      callback: function($$v) {
        _vm.page.slug = $$v
      },
      expression: "page.slug"
    }
  })], 1), _vm._v(" "), _c('v-card-row', [_c('v-select', {
    attrs: {
      "label": _vm.$t('table.sites'),
      "items": _vm.sites,
      "item-text": "name",
      "item-value": "id",
      "item-title": "ui",
      "multiple": "",
      "chips": "",
      "rules": _vm.messages.validation.sites
    },
    model: {
      value: (_vm.page.sites),
      callback: function($$v) {
        _vm.page.sites = $$v
      },
      expression: "page.sites"
    }
  })], 1), _vm._v(" "), _c('v-card-row', [_c('froala', {
    attrs: {
      "tag": 'textarea',
      "config": _vm.editorConfig,
      "rules": _vm.messages.validation.content
    },
    model: {
      value: (_vm.page.content),
      callback: function($$v) {
        _vm.page.content = $$v
      },
      expression: "page.content"
    }
  })], 1), _vm._v(" "), _c('v-card-row', [_c('v-expansion-panel', [_c('v-expansion-panel-content', [_c('div', {
    slot: "header"
  }, [_vm._v("SEO Tags")]), _vm._v(" "), _c('v-card', [_c('v-card-text', [_c('v-card-row', [_c('v-text-field', {
    attrs: {
      "name": "seo_title",
      "label": _vm.$t('seo.title')
    },
    model: {
      value: (_vm.page.seo.title),
      callback: function($$v) {
        _vm.page.seo.title = $$v
      },
      expression: "page.seo.title"
    }
  })], 1), _vm._v(" "), _c('v-card-row', [_c('v-text-field', {
    attrs: {
      "name": "seo_keywords",
      "label": _vm.$t('seo.keywords')
    },
    model: {
      value: (_vm.page.seo.keywords),
      callback: function($$v) {
        _vm.page.seo.keywords = $$v
      },
      expression: "page.seo.keywords"
    }
  })], 1), _vm._v(" "), _c('v-card-row', [_c('v-text-field', {
    attrs: {
      "name": "seo_description",
      "label": _vm.$t('seo.description'),
      "required": ""
    },
    model: {
      value: (_vm.page.seo.description),
      callback: function($$v) {
        _vm.page.seo.description = $$v
      },
      expression: "page.seo.description"
    }
  })], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('v-card-row', [_c('v-switch', {
    attrs: {
      "label": "Status (Disabled/Enabled)",
      "primary": ""
    },
    model: {
      value: (_vm.page.status),
      callback: function($$v) {
        _vm.page.status = $$v
      },
      expression: "page.status"
    }
  })], 1), _vm._v(" "), _c('v-card-row', [_c('v-btn', {
    attrs: {
      "light": "",
      "primary": "",
      "loading": _vm.$store.state.fetching,
      "type": "submit"
    }
  }, [(_vm.$store.state.fetching) ? _c('i', {
    staticClass: "fa fa-spinner fa-pulse"
  }) : _vm._e(), _vm._v("\n                    " + _vm._s(_vm.edit ? _vm.$t('form.edit') : _vm.$t('form.create')) + "\n                ")]), _vm._v(" "), _c('v-btn', {
    attrs: {
      "default": "",
      "type": "reset",
      "router": "",
      "to": {
        name: 'pages.index'
      }
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('form.cancel')) + "\n                ")])], 1)], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-49bf3378", module.exports)
  }
}

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; //
//
//
//
//
//

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _vueClassComponent = __webpack_require__(16);

var _vueClassComponent2 = _interopRequireDefault(_vueClassComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ViewPage = (0, _vueClassComponent2.default)(_class = function (_Vue) {
    _inherits(ViewPage, _Vue);

    function ViewPage() {
        _classCallCheck(this, ViewPage);

        return _possibleConstructorReturn(this, (ViewPage.__proto__ || Object.getPrototypeOf(ViewPage)).apply(this, arguments));
    }

    _createClass(ViewPage, [{
        key: 'mounted',
        value: function mounted() {}
    }]);

    return ViewPage;
}(_vue2.default)) || _class;

exports.default = ViewPage;

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("\n    Hello world\n")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3c47f9a1", module.exports)
  }
}

/***/ })

});