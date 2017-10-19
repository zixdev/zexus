webpackJsonp([5],{

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(135);

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _visualBuilder = __webpack_require__(136);

var _visualBuilder2 = _interopRequireDefault(_visualBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator
// Thus a new array is created, containing all objects that match the routes.


var routes = [].concat(_toConsumableArray(_visualBuilder2.default));

routes.map(function (route) {
    Zexus.routes.push(route);
});
console.info('me first');

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _visualBuilder = __webpack_require__(137);

exports.default = [{
    name: 'visual_builder.index',
    path: '/visual-builder',
    component: _visualBuilder.VisualBuilder,
    meta: { requiresAuth: true, permission: 'view_pages', icon: 'pages', menu: true },
    children: [{
        name: 'visual_builder.index',
        path: '/visual-builder',
        component: _visualBuilder.VisualBuilder,
        meta: { requiresAuth: true, permission: 'view_pages', menu: true }
    }]
}];

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Components are lazy-loaded - See "Grouping Components in the Same Chunk"
 * http://router.vuejs.org/en/advanced/lazy-loading.html
 */
/* eslint-disable global-require */
var VisualBuilder = exports.VisualBuilder = function VisualBuilder(r) {
  return __webpack_require__.e/* require.ensure */(6).then((function () {
    return r(__webpack_require__(138));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

/***/ })

});