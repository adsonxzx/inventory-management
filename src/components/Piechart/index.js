import React, { Component } from 'react';
import Chart from 'react-apexcharts';

export default class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        labels: [
          'Eletrônico',
          'Alimentício',
          'Material de Contrução',
          'Farmaceutico',
        ],
        legend: {
          show: false,
        },
      },
      series: [550, 400, 70, 50],
    };
  }

  render() {
    return (
      <div className="box-container d-flex align-items-center justify-content-center">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          height="380"
        />
      </div>
    );
  }
}
