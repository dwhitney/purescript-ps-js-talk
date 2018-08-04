import echarts from "echarts";
import { valence } from "./colors";

const range = (min, max) => (Math.random() * (max - min) + min) | 0;
const ranged = (num, min, max) => [...Array(num)].map(() => range(min, max));

const pie = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },

  legend: {
    show: false
  },
  series: [
    {
      name: "series",
      type: "pie",
      radius: "80%",
      label: {
        emphasis: {
          show: true,
          textStyle: {
            fontSize: "30",
            fontWeight: "bold"
          }
        }
      },
      data: [
        { value: range(100, 600), name: "aaa" },
        { value: range(100, 600), name: "bbb" },
        { value: range(100, 600), name: "ccc" },
        { value: range(100, 600), name: "ddd" },
        { value: range(100, 600), name: "eee" }
      ]
    }
  ]
};

const candlestick = {
  xAxis: {
    data: [...Array(30)].map((_, i) => i)
  },
  yAxis: {},
  series: [
    {
      type: "k",
      data: [...Array(30)].map(() => ranged(4, 1, 40))
    }
  ]
};

const layout = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ["product", "2015", "2016", "2017", "2018"],
      ["APPL", 41.1, 30.4, 65.1, 53.3],
      ["MSFT", 86.5, 92.1, 85.7, 83.1],
      ["AMZN", 24.1, 67.2, 79.5, 86.4]
    ]
  },
  xAxis: [
    { type: "category", gridIndex: 0 },
    { type: "category", gridIndex: 1 }
  ],
  yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
  grid: [{ bottom: "55%" }, { top: "55%" }],
  series: [
    // These series are in the first grid.
    { type: "bar", seriesLayoutBy: "row" },
    { type: "bar", seriesLayoutBy: "row" },
    { type: "bar", seriesLayoutBy: "row" },
    // These series are in the second grid.
    { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
    { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
    { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
    { type: "bar", xAxisIndex: 1, yAxisIndex: 1 }
  ]
};

const stacked_line = {
  animation: false,
  legend: {
    data: ["aaa", "bbb", "ccc", "ddd", "eee"]
  },

  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    borderColor: "#f00",
    containLabel: true
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["catx", "cat2", "cat3", "cat4", "cat5", "cat6", "cat7"]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      name: "aaa",
      type: "line",
      stack: "b",
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: "bbb",
      type: "line",
      stack: "b",
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: "ccc",
      type: "line",
      stack: "b",
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: "ddd",
      type: "line",
      stack: "b",
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: "eee",
      type: "line",
      stack: "b",
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};

const bar_range = {
  tooltip: {
    trigger: "axis",
    formatter: function(params) {
      var tar;
      if (params[1].value != "-") {
        tar = params[1];
      } else {
        tar = params[0];
      }
      return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
    }
  },
  legend: {
    data: ["exit", "entry"],
    show: false
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    borderColor: "#f00",
    containLabel: true
  },
  xAxis: {
    type: "category",
    splitLine: { show: false },
    data: (function() {
      const list = [];
      for (let i = 1; i <= 11; i++) {
        list.push("day " + i);
      }
      return list;
    })()
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      name: "days",
      type: "bar",
      stack: "c",
      itemStyle: {
        normal: {
          barBorderColor: "rgba(0,0,0,0)",
          color: "rgba(0,0,0,0)"
        },
        emphasis: {
          barBorderColor: "rgba(0,0,0,0)",
          color: "rgba(0,0,0,0)"
        }
      },
      data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
    },
    {
      name: "entry",
      type: "bar",
      stack: "c",
      label: {
        normal: {
          show: true,
          position: "top"
        }
      },
      data: [900, 345, 393, "-", "-", 135, 178, 286, "-", "-", "-"]
    },
    {
      name: "exit",
      type: "bar",
      stack: "c",
      label: {
        normal: {
          show: true,
          position: "bottom"
        }
      },
      data: ["-", "-", "-", 108, 154, "-", "-", "-", 119, 361, 203]
    }
  ]
};

const stacked_bar = {
  legend: {
    data: ["aaa", "bbb", "ccc", "ddd", "eee"],
    show: false
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
    borderColor: "#f00"
  },
  xAxis: {
    type: "category",
    data: ["M", "T", "W", "T", "F", "S", "S"]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      name: "aaa",
      type: "bar",
      stack: "c",
      data: [320, 302, 301, 334, 390, 330, 320]
    },
    {
      name: "bbb",
      type: "bar",
      stack: "c",
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: "ccc",
      type: "bar",
      stack: "c",
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: "ddd",
      type: "bar",
      stack: "c",
      data: [150, 212, 201, 154, 190, 330, 410]
    },
    {
      name: "eee",
      type: "bar",
      stack: "c",
      label: {
        normal: {
          show: true,
          position: "inside"
        }
      },
      data: [820, 832, 901, 934, 1290, 1330, 1320]
    }
  ]
};

const stacked_line_area = {
  animation: false,

  legend: {
    data: ["aaa", "bbb", "ccc", "ddd", "eee"],
    orient: "horizontal",
    y: "bottom",
    show: false
  },
  grid: {
    left: "0%",
    right: "4%",
    bottom: "13%",
    containLabel: true
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["one", "two", "three", "four", "five", "six", "seven"]
    }
  ],
  yAxis: [
    {
      type: "value",
      show: true
    }
  ],
  series: [
    {
      name: "aaa",
      type: "line",
      stack: "a",
      areaStyle: { normal: {} },
      data: ranged(7, 90, 400)
    },
    {
      name: "bbb",
      type: "line",
      stack: "a",
      areaStyle: { normal: {} },
      data: ranged(7, 90, 600)
    },
    {
      name: "ccc",
      type: "line",
      stack: "a",
      areaStyle: { normal: {} },
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: "ddd",
      type: "line",
      stack: "a",
      areaStyle: { normal: {} },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: "eee",
      type: "line",
      stack: "a",
      label: {
        normal: {
          show: true,
          position: "top"
        }
      },
      areaStyle: { normal: {} },
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};

const markLineOpt = {
  animation: false,
  lineStyle: {
    normal: {
      type: "dashed"
    }
  },
  data: [
    [
      {
        coord: [0, 3],
        symbol: "none"
      },
      {
        coord: [60, 65],
        symbol: "none"
      }
    ]
  ]
};

const scatter = {
  grid: {
    top: 20,
    bottom: 50,
    left: 50,
    right: 20
  },
  xAxis: {
    axisLabel: {
      formatter: "{value}%"
    },
    name: "Risk",
    nameLocation: "middle",
    nameGap: 30
  },
  yAxis: {
    axisLabel: {
      formatter: "{value}%"
    },
    name: "Return",
    nameLocation: "middle",
    nameGap: 35
  },

  series: [
    {
      type: "scatter",
      symbolSize: v => v[2],
      data: [
        [25, 65, 60],
        [10, -10, 75],
        [50, 45, 50],
        [19, -3, 100],
        [52, -22, 40],
        [35, 45, 80]
      ],
      markLine: markLineOpt,
      opacity: 1
    },
    {
      type: "scatter",
      symbolSize: 20,
      data: [[3, 12]]
    },
    {
      type: "scatter",
      symbolSize: 20,
      data: [[12, 22]]
    }
  ]
};

const step_line = {
  title: {
    text: "Step Line",
    show: false
  },
  tooltip: {
    trigger: "axis"
  },
  legend: {
    data: ["Step Start", "Step Middle", "Step End"],
    show: false
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      name: "Step Start",
      type: "line",
      step: "start",
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: "Step Middle",
      type: "line",
      step: "middle",
      data: [220, 282, 201, 234, 290, 430, 410]
    },
    {
      name: "Step End",
      type: "line",
      step: "end",
      data: [450, 432, 401, 454, 590, 530, 510]
    }
  ]
};

const theme_river = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "line",
      lineStyle: {
        color: "rgba(0,0,0,0.2)",
        width: 1,
        type: "solid"
      }
    }
  },

  legend: {
    data: ["DQ", "TY", "SS", "QG", "SY", "DD"],
    show: false
  },

  singleAxis: {
    top: 50,
    bottom: 50,
    axisTick: {},
    axisLabel: {},
    type: "time",
    axisPointer: {
      animation: true,
      label: {
        show: true
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: "solid",
        opacity: 0.2
      }
    }
  },

  series: [
    {
      type: "themeRiver",
      itemStyle: {
        emphasis: {
          shadowBlur: 2,
          shadowColor: "rgba(0, 0, 0, 0.8)"
        }
      },
      // prettier-ignore
      data: [["2018/06/08",10,"DQ"],["2018/06/09",15,"DQ"],["2018/06/10",35,"DQ"],
        // ["2018/06/11",38,"DQ"],["2018/06/12",22,"DQ"],["2018/06/13",16,"DQ"],
        ["2018/06/14",7,"DQ"],["2018/06/15",2,"DQ"],["2018/06/16",17,"DQ"],
        ["2018/06/17",33,"DQ"],["2018/06/18",40,"DQ"],["2018/06/19",32,"DQ"],
        ["2018/06/20",26,"DQ"],["2018/06/21",35,"DQ"],["2018/06/22",40,"DQ"],
        ["2018/06/23",32,"DQ"],["2018/06/24",26,"DQ"],["2018/06/25",22,"DQ"],
        // ["2018/06/26",16,"DQ"],["2018/06/27",22,"DQ"],["2018/06/28",10,"DQ"],
        ["2018/06/08",35,"TY"],["2018/06/09",36,"TY"],["2018/06/10",37,"TY"],
        ["2018/06/11",22,"TY"],["2018/06/12",24,"TY"],["2018/06/13",26,"TY"],
        ["2018/06/14",34,"TY"],["2018/06/15",21,"TY"],["2018/06/16",18,"TY"],
        ["2018/06/17",45,"TY"],["2018/06/18",32,"TY"],["2018/06/19",35,"TY"],
        ["2018/06/20",30,"TY"],["2018/06/21",28,"TY"],["2018/06/22",27,"TY"],
        ["2018/06/23",26,"TY"],["2018/06/24",15,"TY"],["2018/06/25",30,"TY"],
        ["2018/06/26",35,"TY"],["2018/06/27",42,"TY"],["2018/06/28",42,"TY"],
        ["2018/06/08",21,"SS"],["2018/06/09",25,"SS"],["2018/06/10",27,"SS"],
        ["2018/06/11",23,"SS"],["2018/06/12",24,"SS"],["2018/06/13",21,"SS"],
        ["2018/06/14",35,"SS"],["2018/06/15",39,"SS"],["2018/06/16",40,"SS"],
        ["2018/06/17",36,"SS"],["2018/06/18",33,"SS"],["2018/06/19",43,"SS"],
        ["2018/06/20",40,"SS"],["2018/06/21",34,"SS"],["2018/06/22",28,"SS"],
        // ["2018/06/23",26,"SS"],["2018/06/24",37,"SS"],["2018/06/25",41,"SS"],
        // ["2018/06/26",46,"SS"],["2018/06/27",47,"SS"],["2018/06/28",41,"SS"],
        // ["2018/06/08",10,"QG"],["2018/06/09",15,"QG"],["2018/06/10",35,"QG"],
        // ["2018/06/11",38,"QG"],["2018/06/12",22,"QG"],["2018/06/13",16,"QG"],
        ["2018/06/14",7,"QG"],["2018/06/15",2,"QG"],["2018/06/16",17,"QG"],
        ["2018/06/17",33,"QG"],["2018/06/18",40,"QG"],["2018/06/19",32,"QG"],
        ["2018/06/20",26,"QG"],["2018/06/21",35,"QG"],["2018/06/22",40,"QG"],
        ["2018/06/23",32,"QG"],["2018/06/24",26,"QG"],["2018/06/25",22,"QG"],
        ["2018/06/26",16,"QG"],["2018/06/27",22,"QG"],["2018/06/28",10,"QG"],
        ["2018/06/08",10,"SY"],["2018/06/09",15,"SY"],["2018/06/10",35,"SY"],
        ["2018/06/11",38,"SY"],["2018/06/12",22,"SY"],["2018/06/13",16,"SY"],
        ["2018/06/14",7,"SY"],["2018/06/15",2,"SY"],["2018/06/16",17,"SY"],
        ["2018/06/17",33,"SY"],["2018/06/18",40,"SY"],["2018/06/19",32,"SY"],
        ["2018/06/20",26,"SY"],["2018/06/21",35,"SY"],["2018/06/22",4,"SY"],
        ["2018/06/23",32,"SY"],["2018/06/24",26,"SY"],["2018/06/25",22,"SY"],
        ["2018/06/26",16,"SY"],["2018/06/27",22,"SY"],["2018/06/28",10,"SY"],
        ["2018/06/08",10,"DD"],["2018/06/09",15,"DD"],["2018/06/10",35,"DD"],
        ["2018/06/11",38,"DD"],["2018/06/12",22,"DD"],["2018/06/13",16,"DD"],
        ["2018/06/14",7,"DD"],["2018/06/15",2,"DD"],["2018/06/16",17,"DD"],
        ["2018/06/17",33,"DD"],["2018/06/18",4,"DD"],["2018/06/19",32,"DD"],
        ["2018/06/20",26,"DD"],["2018/06/21",35,"DD"],["2018/06/22",40,"DD"],
        ["2018/06/23",32,"DD"],["2018/06/24",26,"DD"],["2018/06/25",22,"DD"],
        ["2018/06/26",16,"DD"],["2018/06/27",22,"DD"],["2018/06/28",10,"DD"]]
    }
  ]
};

// prettier-ignore
const funnel = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c}%"
  },
  calculable: true,
  series: [
    {
      name: "aa",
      type: "funnel",
      left: "10%",
      top: 60,
      //x2: 80,
      bottom: 60,
      width: "80%",
      // height: {totalHeight} - y - y2,
      min: 0,
      max: 100,
      minSize: "0%",
      maxSize: "100%",
      sort: "descending",
      gap: 2,
      label: {
        normal: {
          show: true,
          position: "inside",
          color: "#222"
        },
        emphasis: {
          textStyle: {
            fontSize: 20
          }
        }
      },
      labelLine: {
        normal: {
          length: 10,
          lineStyle: {
            width: 1,
            type: "solid"
          }
        }
      },
      itemStyle: {
        normal: {
          borderColor: "#fff",
          borderWidth: 0,
          show: false
        }
      },
      data: [
        { value: 60, name: "a" },
        { value: 40, name: "b" },
        { value: 20, name: "c" },
        { value: 80, name: "d" },
        { value: 100, name: "e" }
      ]
    }
  ]
};

const radar = {
  tooltip: {},
  legend: {
    show: false
  },
  radar: {
    // shape: 'circle',
    name: {
      textStyle: {
        color: "#fff",
        borderRadius: 3,
        padding: [3, 5]
      }
    },
    indicator: [
      { name: "Sale", max: 6500 },
      { name: "Admin", max: 16000 },
      { name: "IT", max: 30000 },
      { name: "Support", max: 38000 },
      { name: "Dev", max: 52000 },
      { name: "Marketing", max: 25000 }
    ]
  },
  series: [
    {
      name: "Budget vs spendin",
      type: "radar",
      // areaStyle: {normal: {}},
      data: [
        {
          value: [4300, 10000, 28000, 35000, 50000, 19000],
          name: "Allocated Budget"
        },
        {
          value: [5000, 14000, 28000, 31000, 42000, 21000],
          name: "Actual Spending"
        }
      ]
    }
  ]
};

const sunburst = (() => {
  var item1 = {
    color: valence[8] // "#F54F4A"
  };
  var item2 = {
    color: valence[7] //"#FF8C75"
  };
  var item3 = {
    color: valence[6] //"#FFB499"
  };

  var data = [
    {
      children: [
        {
          value: 5,
          children: [
            {
              value: 1,
              itemStyle: item1
            },
            {
              value: 2,
              children: [
                {
                  value: 1,
                  itemStyle: item2
                }
              ]
            },
            {
              children: [
                {
                  value: 1
                }
              ]
            }
          ],
          itemStyle: item1
        },
        {
          value: 10,
          children: [
            {
              value: 6,
              children: [
                {
                  value: 1,
                  itemStyle: item1
                },
                {
                  value: 1
                },
                {
                  value: 1,
                  itemStyle: item2
                },
                {
                  value: 1
                }
              ],
              itemStyle: item3
            },
            {
              value: 2,
              children: [
                {
                  value: 1
                }
              ],
              itemStyle: item3
            },
            {
              children: [
                {
                  value: 1,
                  itemStyle: item2
                }
              ]
            }
          ],
          itemStyle: item1
        }
      ],
      itemStyle: item1
    },
    {
      value: 9,
      children: [
        {
          value: 4,
          children: [
            {
              value: 2,
              itemStyle: item2
            },
            {
              children: [
                {
                  value: 1,
                  itemStyle: item1
                }
              ]
            }
          ],
          itemStyle: item1
        },
        {
          children: [
            {
              value: 3,
              children: [
                {
                  value: 1
                },
                {
                  value: 1,
                  itemStyle: item2
                }
              ]
            }
          ],
          itemStyle: item3
        }
      ],
      itemStyle: item2
    },
    {
      value: 7,
      children: [
        {
          children: [
            {
              value: 1,
              itemStyle: item3
            },
            {
              value: 3,
              children: [
                {
                  value: 1,
                  itemStyle: item2
                },
                {
                  value: 1
                }
              ],
              itemStyle: item2
            },
            {
              value: 2,
              children: [
                {
                  value: 1
                },
                {
                  value: 1,
                  itemStyle: item1
                }
              ],
              itemStyle: item1
            }
          ],
          itemStyle: item3
        }
      ],
      itemStyle: item1
    },
    {
      children: [
        {
          value: 6,
          children: [
            {
              value: 1,
              itemStyle: item2
            },
            {
              value: 2,
              children: [
                {
                  value: 2,
                  itemStyle: item2
                }
              ],
              itemStyle: item1
            },
            {
              value: 1,
              itemStyle: item3
            }
          ],
          itemStyle: item3
        },
        {
          value: 3,
          children: [
            {
              value: 1
            },
            {
              children: [
                {
                  value: 1,
                  itemStyle: item2
                }
              ]
            },
            {
              value: 1
            }
          ],
          itemStyle: item3
        }
      ],
      itemStyle: item1
    }
  ];

  return {
    series: {
      radius: ["15%", "80%"],
      type: "sunburst",
      sort: null,
      highlightPolicy: "ancestor",
      data: data,
      label: {
        rotate: "radial"
      },
      levels: [],
      itemStyle: {
        color: valence[3],
        borderWidth: 0
      }
    }
  };
})();

const graph = {
  tooltip: {},
  animationDurationUpdate: 1500,
  animationEasingUpdate: "quinticInOut",
  series: [
    {
      type: "graph",
      layout: "none",
      symbolSize: 50,
      roam: true,
      label: {
        normal: {
          show: true
        }
      },
      edgeSymbol: ["circle", "arrow"],
      edgeSymbolSize: [4, 10],
      edgeLabel: {
        normal: {
          textStyle: {
            fontSize: 20
          }
        }
      },
      data: [
        {
          name: "a",
          x: 300,
          y: 300
        },
        {
          name: "b",
          x: 800,
          y: 300
        },
        {
          name: "c",
          x: 550,
          y: 100
        },
        {
          name: "d",
          x: 550,
          y: 500
        }
      ],
      // links: [],
      links: [
        {
          source: 0,
          target: 1,
          symbolSize: [5, 20],
          label: {
            normal: {
              show: true
            }
          },
          lineStyle: {
            normal: {
              width: 5,
              curveness: 0.2
            }
          }
        },
        {
          source: "b",
          target: "a",
          label: {
            normal: {
              show: true
            }
          },
          lineStyle: {
            normal: { curveness: 0.2 }
          }
        },
        {
          source: "a",
          target: "c"
        },
        {
          source: "b",
          target: "c"
        },
        {
          source: "b",
          target: "d"
        },
        {
          source: "a",
          target: "d"
        }
      ],
      lineStyle: {
        normal: {
          opacity: 0.9,
          width: 2,
          curveness: 0
        }
      }
    }
  ]
};

const punch_card = (() => {
  // prettier-ignore
  var hours = ["12a", "1a", "2a", "3a", "4a", "5a", "6a",
    "7a", "8a", "9a","10a","11a",
    "12p", "1p", "2p", "3p", "4p", "5p",
    "6p", "7p", "8p", "9p", "10p", "11p"];
  var days = ["S", "M", "T", "W", "T", "F", "S"];

  // prettier-ignore
  var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];

  const option = {
    tooltip: {
      position: "top"
    },
    title: [],
    singleAxis: [],
    series: []
  };

  echarts.util.each(days, function(day, idx) {
    option.title.push({
      textBaseline: "middle",
      top: ((idx + 0.5) * 100) / 7 + "%",
      text: day
    });
    option.singleAxis.push({
      left: 50,
      type: "category",
      boundaryGap: false,
      data: hours,
      top: (idx * 100) / 7 + 5 + "%",
      height: 100 / 7 - 10 + "%",
      axisLabel: {
        interval: 2
      }
    });
    option.series.push({
      singleAxisIndex: idx,
      coordinateSystem: "singleAxis",
      type: "scatter",
      data: [],
      symbolSize: function(dataItem) {
        return dataItem[1] * 4;
      }
    });
  });

  echarts.util.each(data, function(dataItem) {
    option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
  });

  return option;
})();

const stock_fan = (() => {
  const data = [];
  const oneDay = 24 * 3600 * 1000;
  let now = +new Date(2015, 9, 3);
  let value = Math.random() * 1000;
  let max = 0;
  let min = 1000;

  function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    max = Math.max(max, value);
    min = Math.min(min, value);
    return {
      name: now.toString(),
      value: [
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
        Math.round(value)
      ]
    };
  }

  for (let i = 0; i < 1000; i++) {
    data.push(randomData());
  }

  // .filter((x, i) => i % 50 === 0)
  const data2 = [
    [data[0].value[0], min],
    [data[data.length - 1].value[0], max]
  ];

  const markLineOpt = {
    animation: false,
    lineStyle: {
      normal: {
        type: "solid"
      }
    },
    data: [
      [
        {
          coord: [data[data.length - 1].value[0], 0],
          symbol: "none"
        },
        {
          coord: [data[data.length - 1].value[0], max],
          symbol: "none"
        }
      ]
    ]
  };

  const option = {
    xAxis: [
      {
        type: "time",
        gridIndex: 0,
        splitLine: false
      },
      {
        type: "time",
        gridIndex: 1,
        splitLine: false,
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        boundaryGap: [0, "100%"],
        gridIndex: 0
      },
      {
        type: "value",
        gridIndex: 1,
        position: "right",
        boundaryGap: [0, "100%"],
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        }
      }
    ],
    grid: [
      { x: "7%", y: "7%", width: "43%" },
      { x2: "7%", y: "7%", width: "43%" }
    ],
    series: [
      {
        name: "aaa",
        type: "line",
        showSymbol: false,
        hoverAnimation: false,
        data: data,
        markLine: markLineOpt
      },
      {
        name: "bbb",
        type: "line",
        gridIndex: 1,
        showSymbol: false,
        hoverAnimation: false,
        data: data2,
        xAxisIndex: 1,
        yAxisIndex: 1
      }
    ]
  };

  return option;
})();

export default {
  stock_fan,
  scatter,
  pie,
  candlestick,
  stacked_bar,
  bar_range,
  layout,
  line: stacked_line,
  stacked_line_area,
  step_line,
  theme_river,
  funnel,
  radar,
  sunburst,
  graph,
  punch_card
};
