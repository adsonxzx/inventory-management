import React, { Component } from 'react';
import Chart from 'react-apexcharts';

export default class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        annotations: {
          yaxis: [
            {
              y: 27000,
              borderColor: '#F33A5A',
              label: {
                borderColor: '#F33A5A',
                style: {
                  color: '#fff',
                  background: '#F33A5A',
                },
                text: 'Meta Anual',
              },
            },
          ],
        },

        chart: {
          toolbar: {
            show: false,
          },
          id: 'basic-bar',
        },
        xaxis: {
          categories: [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro ',
            'Outubro',
            'Novembro',
            'Dezembro',
          ],
        },
        yaxis: {
          labels: {
            formatter: val => val,
          },
        },
        dataLabels: {
          enabled: true,
        },
      },

      series: [
        {
          name: 'Venda Total do Mês',
          data: [
            8000,
            4000,
            3000,
            8000,
            8000,
            12000,
            15000,
            8000,
            9000,
            20000,
            35000,
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className="box-container">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height="310"
        />
      </div>
    );
  }
}
