// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {
	//				title: {
	//					text: '自定义雷达图'
	//				},
	//				legend: {
	//					data: ['图一', '图二', '张三', '李四']
	//				},
	radar: [

		{
			indicator: [{
				text: '语文',
				max: 150,
			}, {
				text: '数学',
				max: 150
			}, {
				text: '英语',
				max: 150
			}, {
				text: '物理',
				max: 120
			}, {
				text: '化学',
				max: 108
			}],
			center: ['50%', '50%'],
			radius: 90, //半径

			startAngle: 90,
			splitNumber: 4,
			//						shape: 'circle',
			name: {
				formatter: '{value}',
				textStyle: {
					color: 'RGB(40,176,240)',
					fontSize: 16,
					fontWeight:'bold',
					fontFamily:'微软雅黑'
				},
				//				areaStyle:{color:'green'}

			},
			splitArea: {
				areaStyle: {
					color: ['#73d2ff', '#9fe0ff', '#c6eeff', '#def5ff'],
					//								shadowColor: 'rgba(0, 0, 0, 0.3)',
					//								shadowBlur: 10
				}
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: 'rgba(255, 255, 255, 0.5)'
				}
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: 'rgba(255, 255, 255, 0.3)'

				}
			}
		}
	],
	series: [{
		name: '成绩单',
		type: 'radar',
		data: [{
			value: [100, 28, 30, 100, 99],
			name: '张三',
			symbol: 'none',
			label: {
				normal: {
					show: true,
					formatter: function(params) {
						return params.value;
					}
				}
			},
			lineStyle: {
				normal: {
					type: 'solid',
					color: 'RGB(132,211,248)',
//					color: 'lightgrey',
					width:1

				}
			},
			areaStyle: {
				normal: {
					color: 'rgba(255, 255, 255, 0.5)'
//					color: 'pink',
//					opacity: 0.4
				}
			}
		}]
	}]
}

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);