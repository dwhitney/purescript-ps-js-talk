import echarts from "echarts";
import theme from "./valence.echart";
import opts from "./options";

echarts.registerTheme("valence", theme);

const createChart = (el, name) => {
  if (el !== null && typeof el !== "undefined") {
    const chart = echarts.init(el, "valence");
    chart.setOption(opts[name], true);
    return chart;
  }
  return null;
};

export default createChart;
