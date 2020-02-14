<template>
    <div id="dash">
        <div ref="myChart" id="chart1"></div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'dash',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        };
    },
    methods: {
        drawLine(data){
            let myChart = this.$echarts.init(this.$refs.myChart);

            myChart.setOption({
                title: { text: '数据总览：' },
                tooltip: {},
                xAxis: {
                    data: ["商家", "店铺", "商品", "客户"]
                },
                yAxis: {},
                series: [{
                    name: '数量',
                    type: 'bar',
                    data: data
                }]
            });
        }
    },
    mounted() {
        axios({
            method: 'post',
            url: '/api/admin/List-ValuableData-All',
        }).then(res => {
            if(res.status === 200) {
                this.drawLine(res.data);
            }
        })
    }
};
</script>


<style scoped>
#chart1 {
    width: 400px;
    height: 400px;
  }
</style>
