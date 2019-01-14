<template>
    <div>
        <div id='indexselection'>
            <input type="checkbox" id="bse" value="BSE" v-model="selectedIndexes">
            <label for="bse">BSE</label>
            <input type="checkbox" id="djia" value="DJIA" v-model="selectedIndexes">
            <label for="djia">DJIA</label>
            <br>
        </div>
        <chartist :data="chartComputed" :options="chartOptions" type="Line"></chartist>
    </div>
</template>

<script>

import Axios from 'axios';
import Moment from 'moment';

export default {
    data () {
        return {
            seriesData: {},
            selectedIndexes: ['BSE', 'DJIA'],
            chartOptions: {
                fullWidth: true,
                chartPadding: {
                    right: 40
                }
            },
            chartData: {},
            chartComputed: null
        }
    },

    mounted() {
        Axios.get('http://localhost:3000/api/fetchData')
        .then(response => {
            let responseData = response.data, periods = [], sampleData, allSeries = [], series;
            this.seriesData = responseData;
            sampleData = responseData && responseData.bseData ? responseData.bseData : responseData.djData;
            if (!sampleData) {
                return;
            }
            sampleData.forEach((element, index) => {
                periods.push(Moment(element.Period).format('MMM').substr(0,1));
            });
            if (this.seriesData.bseData) {
                series = [];
                this.seriesData.bseData.forEach(element => {
                    series.push(element.Close);
                });
                allSeries.push({name: 'BSE', data: series});
            }
            if (this.seriesData.djData) {
                series = [];
                this.seriesData.djData.forEach(element => {
                    series.push(element.Close);
                });
                allSeries.push({name: 'DJIA', data: series});
            }
            console.log({labels: periods, series: allSeries});
            this.chartData = {labels: periods, series: allSeries};
            
        })
        .catch(err => console.log(err));
    },

    computed: {
        djData: function () {
            return this.selectedIndexes.indexOf('DJIA') > -1 ? this.seriesData.djData: [];
        },
        bseData: function () {
            return this.selectedIndexes.indexOf('BSE') > -1 ? this.seriesData.bseData: [];
        }
    },

    watch: {
        chartData: function () {
            let chartComputed = {labels: this.chartData.labels}, series = this.chartData.series,
            filtered;
            filtered = this.chartData.series.filter(element => {
                return this.selectedIndexes.indexOf(element.name) > -1;
            });
            chartComputed.series = filtered;
            this.chartComputed = chartComputed;
        },
        selectedIndexes: function () {
            let chartComputed = {labels: this.chartData.labels}, series = this.chartData.series,
            filtered;
            filtered = this.chartData.series.filter(element => {
                return this.selectedIndexes.indexOf(element.name) > -1;
            });
            chartComputed.series = filtered;
            this.chartComputed = chartComputed;
        }
    },
    methods: {
        updateChartComputed: function () {
            
        }
    }
}
</script>

<style lang="scss">
</style>
