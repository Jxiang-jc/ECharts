// common JS
const echarts = require('echarts')

// ES Module
import $ from 'jquery'
// 上面两个区别可看 https://www.cnblogs.com/liaojie970/p/7376682.html

const saleChart = {

    init() {
        this.initialSaleChart()
    },

    // 初始化图表
    initialSaleChart() {
        // 获取图表容器
        let main = document.getElementById('main')

        // 图表实例
        let myChart = echarts.init(main)

        // 获取数据
        this.getSaleData(myChart)
    },

    // 异步获取数据
    getSaleData(myChart) {
        // 打包以后json文件不能放在最外面, 不然会报错. 所以我放进文件夹里面去了
        $.get('./json/data.json')
            .done(res => {
                console.log(res)
                this.creatOption(myChart, res)
            })
    },

    // 接到图标实例, 数据
    creatOption(chart, res) {

        // 默认配置
        let options = {
            title: {
                text: 'ECharts实例'
            },
            tooltip: {},
            xAxis: {
                data: []
            },
            yAxis: [{
                type: 'value'
            }],
            series: [{
                name: '销量',
                type: 'bar',
                data: []
            }]
        }

        // 通过数据更新配置
        let newOption = Object.assign({}, options, {
            xAxis: {
                data: res.cat
            },
            series: [{
                // 根据名字对应到相应的系列
                name: '销量',
                type: 'bar',
                data: res.data
            }]
        })

        // 为echarts对象加载数据
        if (newOption && typeof newOption === "object") {
            chart.setOption(newOption)
        } else {

        }
    }
}

export default saleChart
