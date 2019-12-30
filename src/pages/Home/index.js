import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h3 className="title-section">Status do Estoque</h3>
        <section className="resume-money">
          <div className="card-resume">
            <div className="value">
              <span>Produtos em Estoque</span>
              <span>2000</span>
            </div>

            <div className="icon -purple">
              <i className="fas fa-money-bill-wave" />
            </div>

            <div className="info-resume">
              <div className="percent -up">
                <i className="fas fa-arrow-up" /> 2.0 %
              </div>
              <span className="info">Último mês</span>
            </div>
          </div>

          <div className="card-resume">
            <div className="value">
              <span>Vendas</span>
              <span>R$ 500,00</span>
            </div>

            <div className="icon -blue">
              <i className="fas fa-funnel-dollar" />
            </div>

            <div className="info-resume">
              <div className="percent -up">
                <i className="fas fa-arrow-up" /> 2.0 %
              </div>
              <span className="info">Último mês</span>
            </div>
          </div>

          <div className="card-resume">
            <div className="value">
              <span>Compras</span>
              <span>R$ 7.500,00</span>
            </div>

            <div className="icon -red">
              <i className="fas fa-wallet" />
            </div>

            <div className="info-resume">
              <div className="percent -down">
                <i className="fas fa-arrow-down" /> 1.0 %
              </div>
              <span className="info">Último mês</span>
            </div>
          </div>

          <div className="card-resume">
            <div className="value">
              <span>Valor do Estoque</span>
              <span>R$ 12.200,00</span>
            </div>

            <div className="icon -lucky">
              <i className="fas fa-hand-holding-usd" />
            </div>

            <div className="info-resume">
              <div className="percent -up">
                <i className="fas fa-arrow-up" /> 1.5 %
              </div>
              <span className="info">Último mês</span>
            </div>
          </div>
        </section>
        <h3 className="title-section">Visão Geral</h3>
      </>
    );
  }
}
