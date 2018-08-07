import React, { Component } from "react";
import createChart from "./charting/createChart";

class SampleChart extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.chartRef = React.createRef();
    this.chart = createChart(this.chartRef.current);
  }

  componentDidMount() {
    const { chartRef, props } = this;
    if (chartRef !== null) {
      this.chart = createChart(chartRef.current, this.props.type);
    }
  }

  render() {
    return <figure ref={this.chartRef} className="chart" />;
  }
}

export default SampleChart;
