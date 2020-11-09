"use strict";

var continents = ['Asia', 'Africa', 'America', 'Australia', 'Europe'];
var helloContinents = Array.from(continents, function (c) {
  return "Hello, ".concat(c, "!");
});
var message = helloContinents.join(' ');
var element = /*#__PURE__*/React.createElement("div", {
  title: "Outer div",
  className: "banner"
}, /*#__PURE__*/React.createElement("h1", null, message));
ReactDOM.render(element, document.getElementById('content'));