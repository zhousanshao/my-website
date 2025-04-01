$(window).load(function () {
  $(".loading").fadeOut()
})

/****/
$(document).ready(function () {
  var whei = $(window).width()
  $("html").css({ fontSize: whei / 20 })
  $(window).resize(function () {
    var whei = $(window).width()
    $("html").css({ fontSize: whei / 20 })
  });
});


$(window).load(function () { $(".loading").fadeOut() })
$(function () {
  echarts_1()
  echarts_2()
  echarts_3()
  echarts_4()
  echarts_5()
  echarts_6()
  pe01()
  pe02()
  pe03()


  //region 柱状图和折线图
  function echarts_1() {
    var myChart = echarts.init(document.getElementById('echarts1'));

    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
      }, "grid": {
        "top": "20%",
        "right": "50",
        "bottom": "20",
        "left": "30",
      },
      legend: {
        data: ['字段1', '字段2', '字段3', '字段4', '字段5', '字段6'],
        right: 'center', width: '100%',
        textStyle: {
          color: "#fff"
        },
        itemWidth: 12,
        itemHeight: 10,
      },



      "xAxis": [
        {
          "type": "category",
          data: ['一季度', '二季度', '三季度', '四季度'],
          axisLine: { lineStyle: { color: "rgba(255,255,255,.1)" } },
          axisLabel: {
            textStyle: { color: "rgba(255,255,255,.7)", fontSize: '14', },
          },

        },
      ],
      "yAxis": [
        {
          "type": "value",
          "name": "单位万",
          axisTick: { show: false },
          splitLine: {
            show: false,

          },
          "axisLabel": {
            "show": true,
            fontSize: 14,
            color: "rgba(255,255,255,.6)"

          },
          axisLine: {
            min: 0,
            max: 10,
            lineStyle: { color: 'rgba(255,255,255,.1)' }
          },//左线色

        },
        {
          "type": "value",
          "name": "增速",
          "show": true,
          "axisLabel": {
            "show": true,
            fontSize: 14,
            formatter: "{value} %",
            color: "rgba(255,255,255,.6)"
          },
          axisTick: { show: false },
          axisLine: { lineStyle: { color: 'rgba(255,255,255,.1)' } },//右线色
          splitLine: { show: true, lineStyle: { color: 'rgba(255,255,255,.1)' } },//x轴线
        },
      ],
      "series": [

        {
          "name": "字段1",
          "type": "bar",
          "data": [36.6, 38.80, 40.84, 41.60],
          "barWidth": "15%",
          "itemStyle": {
            "normal": {
              barBorderRadius: 15,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#8bd46e'
              }, {
                offset: 1,
                color: '#09bcb7'
              }]),
            }
          },
          "barGap": "0.2"
        },
        {
          "name": "字段2",
          "type": "bar",
          "data": [14.8, 14.1, 15, 16.30],
          "barWidth": "15%",
          "itemStyle": {
            "normal": {
              barBorderRadius: 15,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#248ff7'
              }, {
                offset: 1,
                color: '#6851f1'
              }]),
            }
          },
          "barGap": "0.2"
        },
        {
          "name": "字段3",
          "type": "bar",
          "data": [9.2, 9.1, 9.85, 8.9],
          "barWidth": "15%",
          "itemStyle": {
            "normal": {
              barBorderRadius: 15,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#fccb05'
              }, {
                offset: 1,
                color: '#f5804d'
              }]),
            }
          },
          "barGap": "0.2"
        },
        {
          "name": "字段4",
          "type": "line",
          smooth: true,
          "yAxisIndex": 1,
          "data": [0, 6.01, 5.26, 1.48],
          lineStyle: {
            normal: {
              width: 2
            },
          },
          "itemStyle": {
            "normal": {
              "color": "#86d370",

            }
          },

        }
        ,
        {
          "name": "字段5",
          "type": "line",
          "yAxisIndex": 1,

          "data": [0, -4.73, 6.38, 8.67],
          lineStyle: {
            normal: {
              width: 2
            },
          },
          "itemStyle": {
            "normal": {
              "color": "#3496f8",

            }
          },
          "smooth": true
        },
        {
          "name": "字段6",
          "type": "line",
          "yAxisIndex": 1,

          "data": [0, -1.09, 8.24, -9.64],
          lineStyle: {
            normal: {
              width: 2
            },
          },
          "itemStyle": {
            "normal": {
              "color": "#fbc30d",

            }
          },
          "smooth": true
        }
      ]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });


  } // #endregion
  function echarts_2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echarts2'));

    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        // formatter:'{c}' ,
      },
      grid: {
        left: '0',
        top: '30',
        right: '10',
        bottom: '-20',
        containLabel: true
      },
      legend: {
        data: ['国内', '国外'],
        right: 'center',
        top: 0,
        textStyle: {
          color: "#fff"
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
      },

      xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          rotate: -90,
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 14,

          },
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }

        },

        data: ['1月', '2月', '3月']

      }, {

        axisPointer: { show: false },
        axisLine: { show: false },
        position: 'bottom',
        offset: 20,



      }],

      yAxis: [{
        type: 'value',
        axisTick: { show: false },
        // splitNumber: 6,
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        },
        axisLabel: {
          formatter: "{value} %",
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 14,
          },
        },

        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        }
      }],
      series: [
        {
          name: '国内',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              color: 'rgba(228, 228, 126, 1)',
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(228, 228, 126, .2)'
              }, {
                offset: 1,
                color: 'rgba(228, 228, 126, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
          },
          itemStyle: {
            normal: {
              color: 'rgba(228, 228, 126, 1)',
              borderColor: 'rgba(228, 228, 126, .1)',
              borderWidth: 12
            }
          },
          data: [12.50, 14.4, 16.1]

        }, {
          name: '国外',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {

            normal: {
              color: 'rgba(255, 128, 128, 1)',
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(255, 128, 128,.2)'
              }, {
                offset: 1,
                color: 'rgba(255, 128, 128, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
          },
          itemStyle: {
            normal: {
              color: 'rgba(255, 128, 128, 1)',
              borderColor: 'rgba(255, 128, 128, .1)',
              borderWidth: 12
            }
          },
          data: [-41.9, 39.9, 27.7]
        },
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  //柱形图
  function echarts_3() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echarts3'));

    option = {

      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['目标', '实际', '相差'],
        right: 'center',
        top: 0,
        textStyle: {
          color: "#fff"
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
      },
      grid: {
        left: '0',
        right: '20',
        bottom: '0',
        top: '15%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['1月份', '2月份', '3月份', '4月份', '5月份', '6月份', '7月份', '8月份', '9月份', '10月份'],
        axisLine: {
          lineStyle: {
            color: 'white'

          }
        },
        axisLabel: {
          //rotate:-90,
          formatter: function (value) { return value.split("").join("\n"); },
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 14,
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.3)'
          }
        },
      },

      yAxis: {
        type: 'value',
        splitNumber: 4,
        axisTick: { show: false },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,0.1)'
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 14,
          }
        },
        axisLine: { show: false },
      },

      series: [{
        name: '目标',
        type: 'bar',
        stack: 'a',
        barWidth: '30', barGap: 0,
        itemStyle: {
          normal: {
            color: '#8bd46e',
          }
        },
        data: [331, 497, 440, 81, 163, 366, 57, 188, 172, 2295]
      },
      {
        name: '实际',
        type: 'bar',
        stack: 'a',
        barWidth: '30', barGap: 0,
        itemStyle: {
          normal: {
            color: '#f5804d',
            barBorderRadius: 0,
          }
        },
        data: [48, -97, 56, -59, 90, 98, 64, 61, -8, 253]
      },
      {
        name: '相差',
        type: 'bar',
        stack: 'a',
        barWidth: '30', barGap: 0,
        itemStyle: {
          normal: {
            color: '#248ff7',
            barBorderRadius: 0,
          }
        },
        data: [-13, -21, -112, 5, 0, -5, 72, -3, 8, -69]
      }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  //右上角
  function echarts_5() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echarts5'));

    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
      }, "grid": {
        "top": "15%",
        "right": "10%",
        "bottom": "20",
        "left": "10%",
      },
      legend: {
        data: ['国内新客户', '国外新客户', '增长率'],
        right: 'center',
        top: 0,
        textStyle: {
          color: "#fff"
        },
        itemWidth: 12,
        itemHeight: 10,
      },
      "xAxis": [
        {
          "type": "category",

          data: ['1月份', '2月份', '3月份'],
          axisLine: { lineStyle: { color: "rgba(255,255,255,.1)" } },
          axisLabel: {
            textStyle: { color: "rgba(255,255,255,.7)", fontSize: '14', },
          },

        },
      ],
      "yAxis": [
        {
          "type": "value",
          "name": "单位1",
          splitLine: { show: false },
          axisTick: { show: false },
          "axisLabel": {
            "show": true,
            color: "rgba(255,255,255,.6)"

          },
          axisLine: { lineStyle: { color: 'rgba(255,255,255,.1)' } },//左线色

        },
        {
          "type": "value",
          "name": "单位2",
          "show": true,
          axisTick: { show: false },
          "axisLabel": {
            "show": true,
            formatter: "{value} %",
            color: "rgba(255,255,255,.6)"
          },
          axisLine: { lineStyle: { color: 'rgba(255,255,255,.1)' } },//右线色
          splitLine: { show: true, lineStyle: { color: 'rgba(255,255,255,.1)' } },//x轴线
        },
      ],
      "series": [
        {
          "name": "国内新客户",
          "type": "bar",
          "data": [
            30, 45, 21
          ],
          "barWidth": "20%",
          "itemStyle": {
            "normal": {
              barBorderRadius: 15,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#fccb05'
              }, {
                offset: 1,
                color: '#f5804d'
              }]),
            }
          },
          "barGap": "0"
        },
        {
          "name": "国外新客户",
          "type": "bar",
          "data": [
            44, 24, 77
          ],
          "barWidth": "20%",
          "itemStyle": {
            "normal": {
              barBorderRadius: 15,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#03c893'
              }, {
                offset: 1,
                color: '#0091ff'
              }]),
            }
          },
          "barGap": "0"
        },
        {
          "name": "增长率",
          "type": "line",
          "yAxisIndex": 1,
          "data": [11.48, 18.00, 25.6],
          lineStyle: {
            normal: {
              width: 2
            },
          },
          "itemStyle": {
            "normal": {
              "color": "#ff3300",
            }
          },
          "smooth": true
        }
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  //左上 
  function echarts_4() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echarts4'));
    var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3'];
    option = {

      grid: {
        left: '2%',
        top: '1%',
        right: '5%',
        bottom: '0%',
        containLabel: true
      },
      xAxis: [{
        show: false,
      }],
      yAxis: [{
        axisTick: 'none',
        axisLine: 'none',
        offset: '7',
        axisLabel: {
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: '14',
          }
        },
        data: ['LT玻璃陶瓷', '3D锆块', 'HT锆块', 'HT玻璃陶瓷', '4D锆块']

      }, {
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: '14',
          }
        },
        data: [3985, 5047, 5711, 7167, 18908]

      }, {
        name: '单位：件',
        nameGap: '50',
        nameTextStyle: {
          color: 'rgba(255,255,255,.6)',
          fontSize: '16',
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(0,0,0,0)'
          }
        },
        data: [],
      }],
      series: [{
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data: [10, 12, 14, 18, 45],
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter: function (param) {
              return param.value + '%';
            },
            textStyle: {
              color: 'rgba(255,255,255,.8)',
              fontSize: '12',
            }
          }
        },
        barWidth: 15,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
              offset: 0,
              color: '#03c893'
            },
            {
              offset: 1,
              color: '#0091ff'
            }
            ]),
            barBorderRadius: 15,
          }
        },
        z: 2
      }, {
        name: '白框',
        type: 'bar',
        yAxisIndex: 1,
        barGap: '-100%',
        data: [99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
        barWidth: 15,
        itemStyle: {
          normal: {
            color: 'rgba(0,0,0,.2)',
            barBorderRadius: 15,
          }
        },
        z: 1
      }]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  //环形图
  function echarts_6() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echarts6'));

    option = {
      title: {
        text: '',
        subtext: 'TOP6',
        x: 'center',
        y: '40%',
        textStyle: {
          color: '#fff',
          fontSize: 22,
          lineHeight: 10,
        },
        subtextStyle: {
          color: '#90979c',
          fontSize: 16,
          lineHeight: 10,
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
      },

      visualMap: {
        show: false,
        min: 500,
        max: 600,
        inRange: {
          //colorLightness: [0, 1]
        }
      },
      series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '60%'],
        center: ['50%', '50%'],
        color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5', '#FFA500', '#FFD700'], // 添加第六个颜色
        data: [{
          "value": 7546217,
          "name": "东南亚"
        }, {
          "value": 4321286,
          "name": "欧洲"
        }, {
          "value": 2401803,
          "name": "美国"
        }, {
          "value": 1290268,
          "name": "中东"
        }, {
          "value": 2154830,
          "name": "俄语"
        }, {
          "value": 1500000,
          "name": "西语"
        }].sort(function (a, b) {
          return a.value - b.value
        }),
        roseType: 'radius',

        label: {
          normal: {
            formatter: ['{c|{c}}', '{b|{b}}'].join('\n'),
            rich: {
              c: {
                color: 'rgb(241,246,104)',
                fontSize: 20,
                fontWeight: 'bold',
                lineHeight: 5
              },
              b: {
                color: 'rgb(98,137,169)',
                fontSize: 14,
                height: 44
              },
            },
            position: 'outside', // 将标签位置设置为外部
            alignTo: 'labelLine', // 对齐到标签线
            margin: [0, -40], // 调整标签的边距
            bleedMargin: 5 // 调整标签的溢出边距
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: 'rgb(98,137,169)',
            },
            smooth: 0.2,
            length: 10,
            length2: 20,
          }
        }
      }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }

  function pe01() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('pe01'));
    var txt = 40
    option = {
      title: {
        text: txt + '%',
        x: 'center',
        y: 'center',
        textStyle: {
          fontWeight: 'normal',
          color: '#fff',
          fontSize: '18'
        }
      },
      color: 'rgba(255,255,255,.3)',

      series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['65%', '80%'],
        itemStyle: {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        },
        hoverAnimation: false,
        data: [{
          value: txt,
          name: '已使用',
          itemStyle: {
            normal: {
              color: '#eaff00',
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          }
        }, {
          name: '未使用',
          value: 100 - txt
        }]
      }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }

  function pe02() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('pe02'));
    var txt = 60
    option = {
      title: {
        text: txt + '%',
        x: 'center',
        y: 'center',
        textStyle: {
          fontWeight: 'normal',
          color: '#fff',
          fontSize: '18'
        }
      },
      color: 'rgba(255,255,255,.3)',

      series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['65%', '80%'],
        itemStyle: {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        },
        hoverAnimation: false,
        data: [{
          value: txt,
          name: '已使用',
          itemStyle: {
            normal: {
              color: '#ea4d4d',
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          }
        }, {
          name: '未使用',
          value: 100 - txt
        }]
      }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function pe03() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('pe03'));
    var txt = 75
    option = {
      title: {
        text: txt + '%',
        x: 'center',
        y: 'center',
        textStyle: {
          fontWeight: 'normal',
          color: '#fff',
          fontSize: '18'
        }
      },
      color: 'rgba(255,255,255,.3)',

      series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['65%', '80%'],
        itemStyle: {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        },
        hoverAnimation: false,
        data: [{
          value: txt,
          name: '已使用',
          itemStyle: {
            normal: {
              color: '#395ee6',
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          }
        }, {
          name: '未使用',
          value: 100 - txt
        }
        ]
      }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }


})




























