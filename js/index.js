import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import SampleChart from "./SampleChart";

const app = <App charts={["punch_card", "scatter"]} />;

// $FlowFixMe
ReactDOM.render(app, document.getElementById("app"));

/*
<SampleChart type="scatter" />
<SampleChart type="pie" />
<SampleChart type="candlestick" />
<SampleChart type="stacked_bar" />
<SampleChart type="bar_range" />
<SampleChart type="layout" />
<SampleChart type="line" />
<SampleChart type="stacked_line_area" />
<SampleChart type="step_line" />
<SampleChart type="theme_river" />
<SampleChart type="funnel" />
<SampleChart type="radar" />
<SampleChart type="sunburst" />
<SampleChart type="graph" />
<SampleChart type="punch_card" />
<SampleChart type="stock_fan" />
*/
