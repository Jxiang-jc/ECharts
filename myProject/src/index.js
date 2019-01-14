const echarts = require('echarts')

const $ = require('jquery')

let myChart = echarts.init(document.getElementById('main'))

let options = {
    title: { text: 'ECharts实例'},
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

myChart.setOption(options)

// 打包以后json文件不能放在最外面, 不然会报错. 所以我放进文件夹里面去了
$.get('./json/data.json').done(function (data) {
    console.log('data: ', data);
    myChart.setOption({
        xAxis: {
            data: data.cat
        },
        series:[{
            // 根据名字对应到相应的系列
            name: '销量',
            type: 'bar',
            data: data.data
        }]
    })
})