import React from 'react';

import colors from '../../styles/colors';
import {Chart} from '../index';

export default DonutChart = () => {
  return (
    <Chart
      styles={{
        flex: 1,
        height: 250,
        width: '100%',
      }}
      options={{
        chart: {
          type: 'pie',
          backgroundColor: colors.grey50,
          spacing: [0, 0, 0, 0],
          margin: [0, 0, 0, 0],
        },
        credits: {
          enabled: false,
        },
        legend: {
          enabled: false,
        },
        title: {
          text: '',
        },
        tooltip: {
          backgroundColor: colors.grey50,
          borderRadius: 10,
          borderWidth: 1,
          formatter: function () {
            return `${this.point.name}: ${this.percentage.toFixed(2)}%`;
          },
        },
        series: [
          {
            name: 'Sales_Refundeds',
            data: [
              {
                name: 'PENDING',
                y: 1,
                color: colors.primary,
                borderWidth: 7,
                borderColor: colors.grey50,
              },
              {
                name: 'SALES',
                y: 5,
                color: colors.success,
                borderWidth: 7,
                borderColor: colors.grey50,
              },
              {
                name: 'REFUNDEDS',
                y: 5,
                color: colors.danger,
                borderWidth: 7,
                borderColor: colors.grey50,
              },
            ],
            innerSize: 50,
            dataLabels: {
              enabled: true,
              style: {
                color: colors.dark,
                textOutline: false,
              },
            },
          },
        ],
      }}
    />
  );
};
