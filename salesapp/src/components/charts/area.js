import React from 'react';

import colors from '../../styles/colors';
import {Chart} from '../index';

export default AreaChart = () => {
  return (
    <Chart
      styles={{
        flex: 1,
        height: 250,
        width: '100%',
      }}
      options={{
        chart: {
          type: 'areaspline',
          backgroundColor: colors.light,
          spacing: [0, 0, 0, 0],
          margin: [0, 0, 0, 0],
        },
        credits: {
          enabled: false,
        },
        title: {
          text: '',
        },
        legend: {
          enabled: false,
        },
        plotOptions: {
          areaspline: {
            lineWidth: 5,
            lineColors: colors.success,
            fillColor: {
              linearGradient: {
                x1: 0,
                x2: 0,

                y1: 0,
                y2: 1,
              },
              stops: [
                [0, `${colors.success}80`],
                [1, `${colors.success}00`],
              ],
            },
          },
        },
        yAxis: {
          visible: false,
          minPadding: 0,
          maxPadding: 0,
        },
        xAxis: {
          visible: false,
          minPadding: 0,
          maxPadding: 0,
        },
        tooltip: {
          backgroundColor: colors.grey50,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: colors.success,
          formatter: function () {
            return `$ ${this.y}`;
          },
        },
        series: [
          {
            name: 'SALES',
            data: [55, 66, 90, 70, 110, 235, 198],
            color: colors.success,
          },
        ],
      }}
    />
  );
};
