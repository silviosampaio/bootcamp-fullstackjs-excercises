import React from 'react';

import colors from '../../styles/colors';
import {Chart} from '../index';

export default BarChart = () => {
  return (
    <Chart
      styles={{
        flex: 1,
        height: 250,
        width: '100%',
      }}
      options={{
        chart: {
          type: 'column',
          backgroundColor: colors.grey50,
          spacing: [0, 0, 0, 0],
          margin: [0, 0, 0, 0],
        },
        credits: {
          enabled: false,
        },
        title: {
          text: '',
        },
        yAxis: {
          visible: false,
          minPadding: 0,
          maxPadding: 0,
        },
        tooltip: {
          backgroundColor: colors.grey50,
          borderRadius: 10,
          borderWidth: 1,
        },
        series: [
          {
            showInLegend: false,
            color: colors.success,
            borderWidth: 0,
            name: 'Sales',
            data: [49.9, 71.5, 50, 89, 34.2, 23.1, 82],
          },
          {
            showInLegend: false,
            color: colors.danger,
            borderWidth: 0,
            name: 'Refundeds',
            data: [83.6, 78.8, 54.1, 34.5, 24.4, 67.1, 12.5],
          },
        ],
      }}
    />
  );
};
