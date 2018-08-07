const React = require("react");

function nav(props) {
  return React.createElement("nav", null, [
    React.createElement("h1", null, "Chart-o=Matic"),
    React.createElement(
      "button",
      {
        onClick: function() {
          props.addChart();
        }
      },
      null
    )
  ]);
}

exports.nav = nav;
