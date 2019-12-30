import React, { Component } from 'react';

export default class Fornecedor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  handleSearch = e => {
    const { value } = e.target;
    this.setState({ search: value });
  };

  render() {
    const { search } = this.state;

    return (
      <>
        {/* Title */}
        <div className="title-page">
          <h2>Empresa</h2>
          <span>Cadastro e Edição de Empresas</span>
        </div>

        {/* Button Produto */}
        <div className="section-options">
          <button
            type="button"
            className="button-action -green"
            onClick={this.handleForm}
          >
            <i className="fas fa-plus" /> Novo
          </button>

          <div className="table-search">
            <label htmlFor="tableSearch">Buscar</label>
            <input
              onChange={e => this.handleSearch(e)}
              className="form-control"
              id="tableSearch"
              type="text"
              value={search}
              placeholder="buscar algo"
            />
          </div>
        </div>

        {/* Table */}
        <div className="box-container">
          <div className="list-expenses">
            <table className="table" id="myTable">
              <thead>
                <tr>
                  <th scope="col">Código</th>
                  <th scope="col">Nome</th>
                  <th scope="col">CNPJ</th>
                  <th scope="col">Cidade</th>
                  <th scope="col">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>Empresa 0</td>
                  <td>54054564654/5444-00</td>
                  <td>Recife</td>
                  <th scope="row">
                    {/* actions */}
                    <div className="actions">
                      <i className="icon fas fa-pen" />
                      <i className="icon fas fa-trash" />
                    </div>
                  </th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Empresa 1</td>
                  <td>54054564654/5444-00</td>
                  <td>Recife</td>
                  <th scope="row">
                    {/* actions */}
                    <div className="actions">
                      <i className="icon fas fa-pen" />
                      <i className="icon fas fa-trash" />
                    </div>
                  </th>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Empresa 2</td>
                  <td>54054564654/5444-00</td>
                  <td>Recife</td>
                  <th scope="row">
                    {/* actions */}
                    <div className="actions">
                      <i className="icon fas fa-pen" />
                      <i className="icon fas fa-trash" />
                    </div>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
