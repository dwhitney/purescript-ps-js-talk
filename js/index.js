import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import SampleChart from "./SampleChart";

const app = <App charts={["punch_card", "scatter"]} />;

ReactDOM.render(app, document.getElementById("app"));
