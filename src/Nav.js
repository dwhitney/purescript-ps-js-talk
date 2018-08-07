const React = require("react");

function _null() {
  return null;
}

function unsafeCoerce(a) {
  return a;
}

function createElement(name) {
  return function(props) {
    return function(children) {
      return React.createElement(name, props, children);
    };
  };
}

exports.createElement = createElement;
exports._null = _null;
exports.unsafeCoerce = unsafeCoerce;
