"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _buttonModule = _interopRequireDefault(require("./button.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Button(_ref) {
  let {
    className,
    name,
    label,
    type,
    onClick,
    value,
    loading,
    focus,
    disabled
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("span", {
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "".concat(className ? className : _buttonModule.default.default, " ").concat(focus ? _buttonModule.default.focus : ""),
    name: name,
    type: type,
    value: value,
    loading: loading,
    disabled: disabled === true
  }, loading ? /*#__PURE__*/_react.default.createElement("div", {
    className: _buttonModule.default.loader
  }) : label || "Button"));
}
var _default = Button;
exports.default = _default;