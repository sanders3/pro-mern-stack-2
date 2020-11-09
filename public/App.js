const continents = ['Asia', 'Africa', 'America', 'Australia', 'Europe'];
const helloContinents = Array.from(continents, c => `Hello, ${c}!`);
const message = helloContinents.join(' ');
const element = /*#__PURE__*/React.createElement("div", {
  title: "Outer div",
  className: "banner"
}, /*#__PURE__*/React.createElement("h1", null, message));
ReactDOM.render(element, document.getElementById('content'));