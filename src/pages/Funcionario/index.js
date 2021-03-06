/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { Formik } from 'formik';

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
          <h2>Funcionário</h2>
          <span>Cadastro e Edição de Funcionários</span>
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
                  <th scope="col">CPF</th>
                  <th scope="col">Cidade</th>
                  <th scope="col">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>Funcionario 0</td>
                  <td>54054564654</td>
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
                  <td>Funcionario 1</td>
                  <td>54054564654</td>
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
                  <td>Funcionario 2</td>
                  <td>540545646540</td>
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
