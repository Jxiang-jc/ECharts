# ECharts


1.start是echarts 2.x版本的

myProject则是官网目前流行的一种方法, 使用webpack去打包, 因此我也做了一个小的demo

总结下来, echarts挺简单的, 只要看文档就ok了.

echarts使用方法：

    1. 引入echarts文件

    2. 创建图表容器

    3. 实例化实例 echarts.init(container)

    4. 定义一个配置项 var options = {  }

    5. 使用配置项  myChart.setOption(options)

    6. 数据可能要更新，数据更新之后，重新定义options，再去setOption