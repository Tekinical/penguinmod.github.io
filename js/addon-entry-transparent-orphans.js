(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-transparent-orphans"],{

/***/ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.46.0/node_modules/css-loader/index.js!./src/addons/addons/transparent-orphans/userstyle.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@1.0.1_webpack@4.46.0/node_modules/css-loader!./src/addons/addons/transparent-orphans/userstyle.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@1.0.1_webpack@4.46.0/node_modules/css-loader/lib/css-base.js */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.46.0/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blocklySvg > .blocklyWorkspace > .blocklyBlockCanvas > .blocklyDraggable[data-shapes*=\"hat\"],\n.blocklyFlyout > .blocklyWorkspace > .blocklyBlockCanvas > .blocklyDraggable {\n  opacity: calc(1 - var(--transparentOrphans-block) / 100);\n}\n.blocklyWsDragSurface > .blocklyBlockCanvas > .blocklyDraggable[data-shapes*=\"hat\"] {\n  opacity: calc(1 - var(--transparentOrphans-block) / 100);\n}\n\n.blocklySvg > .blocklyWorkspace > .blocklyBlockCanvas > .blocklyDraggable:not([data-shapes*=\"hat\"]) {\n  opacity: calc(1 - var(--transparentOrphans-orphan) / 100);\n}\n.blocklyWsDragSurface > .blocklyBlockCanvas > .blocklyDraggable:not([data-shapes*=\"hat\"]) {\n  opacity: calc(1 - var(--transparentOrphans-orphan) / 100);\n}\n\n.blocklyBlockDragSurface {\n  opacity: calc(1 - var(--transparentOrphans-dragged) / 100);\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/addons/addons/transparent-orphans/_runtime_entry.js":
/*!*****************************************************************!*\
  !*** ./src/addons/addons/transparent-orphans/_runtime_entry.js ***!
  \*****************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.46.0/node_modules/css-loader/index.js!./src/addons/addons/transparent-orphans/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_0__);
/* generated by pull.js */

const resources = {
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_0___default.a
};

/***/ })

}]);
//# sourceMappingURL=addon-entry-transparent-orphans.js.map