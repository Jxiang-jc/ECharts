<template>
   <!-- echart折线图 -->
   <div class="acti_grab_echart">
     <div ref="dom" id="main"></div>
   </div>
</template>

<script>
// 一般而言，我们再模块化开发中， 我们都使用按需引入。 
// 引入基本模板
const echarts = require('echarts/lib/echarts')

// 引入折线图组件
require('echarts/lib/chart/line')

// 有些功能，比如  `title/markPoint` 需要先引入
require('echarts/lib/component/markPoint')

// markPoint的symbol使用自定义图片。 需要require进来
const imgUrl = require('@/assets/img/guangyuan.png')

export default {
  data () {},
  mounted () {
    this.initLine()
  },
  methods: {
        initLine () {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('main'))

      var option = {
        // title: {
        //   text: '单位: 千万'
        // }, // 需要按需引入
        tooltip: {},
        color: ['#0080ff', '#4cd5ce'],
        textStyle: {
          color: '#F2D1D4',
          fontSize: 18
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
          height: 191 // 数据表整体高度
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true, // 是否从0开始
            axisTick: { // 刻度
              show: false
            },
            axisLabel: { // data的文字样式
              fontSize: 11
            },
            axisLine: { // x轴样式
              lineStyle: {
                color: '#E1E1E1',
                width: 1
              }
            },
            data: ['0408', '0409', '0410', '0411', '0412']
          }
        ],
        yAxis: [
          {
            name: '    单位:  千万',
            nameTextStyle: {
              color: '#F2D1D4',
              fontSize: '11'
            },
            nameGap: 20, // 坐标轴名称与轴线之间的距离。
            type: 'value',
            axisLine: { // y轴
              show: false
            },
            'axisTick': { // y轴刻度线
              'show': false
            },
            'splitLine': { // 网格线
              show: true,
              lineStyle: {
                type: 'dashed',
                color: '#e1e1e1',
                opacity: 0.5,
                width: 0.5
              }
            },
            axisLabel: { // y轴文字的样式
              fontSize: 11
            },
            minInterval: 25 // 每个数值间隔多少
            // data: ['25', '50', '75', '100'] // 如果想用data来确定值, 就需要使用type: 'category'
          }
        ],
        series: [
          {
            name: '销量',
            type: 'line',
            // itemStyle: {
            //   color: '#BD1A29',
            //   borderColor: {
            //     type: 'radial',
            //     x: 0.5,
            //     y: 0.5,
            //     r: 0.5,
            //     colorStops: [{
            //       offset: 0, color: '#FFBC6E ' // 0% 处的颜色
            //     }, {
            //       offset: 1, color: '#FFF1C0' // 100% 处的颜色
            //     }]
            //   },
            //   borderWidth: 6
            // }, // 控制拐点样色, 如果不设置lineStyle, 会默认影响线条样式, 如果symbol为nono, 可以不需要这个样式
            lineStyle: {
              color: {
                type: 'linear',
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [{
                  offset: 0, color: '#FFBC6E' // 0% 处的颜色
                }, {
                  offset: 1, color: '#FFF1C0' // 100% 处的颜色
                }]
              },
              width: 6,
              type: 'solid'
            }, // 线条样式
            // symbol: 'circle', // 拐点样式
            // symbolSize: 15, // 折线点的大小
            symbol: 'none', // 去掉折线图中的节点
            smooth: true, // true 为平滑曲线，false为直线. 为true是不支持虚线的，实线就用true
            areaStyle: { // 颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0, color: '#FF961C' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(255,229,139,0.15)' // 100% 处的颜色
                }
              ]) // 背景渐变色
            },
            data: [25, 50, 35, 78, 95],
            markPoint: {
              symbol: `image://${imgUrl}`, // 使用自定义图片，需要先require进来
              symbolSize: 50,
              // symbolOffset:[0,-20], // 位置偏移
              data: [
                { type: 'max', name: '最大值' }
              ],
              label: {
                show: false
              }
            }
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)

      window.onresize = myChart.resize()
    }
  }
}

</script>
