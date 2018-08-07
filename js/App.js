import React, { Component, Fragment } from "react";
import SampleChart from "./SampleChart";

import { nav } from "../output/Nav";

const chartTypes = [
  "scatter",
  "pie",
  "candlestick",
  "stacked_bar",
  "bar_range",
  "layout",
  "line",
  "stacked_line_area",
  "step_line",
  "funnel",
  "radar",
  "graph",
  "punch_card",
  "stock_fan"
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charts: props.charts
    };
    this.addChart = this.addChart.bind(this);
  }

  addChart() {
    const randomChart =
      chartTypes[Math.floor(Math.random() * chartTypes.length)];
    this.setState({ charts: this.state.charts.concat([randomChart]) });
  }

  render() {
    return (
      <Fragment>
        {nav({ addChart: this.addChart })}
        <main>
          {this.state.charts.map((chart, i) => (
            <SampleChart type={chart} key={i} />
          ))}
        </main>
      </Fragment>
    );
  }
}

export default App;
