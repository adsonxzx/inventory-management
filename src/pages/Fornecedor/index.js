/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormFornecedor from './FormFornecedor';

const validate = Yup.object().shape({
  razaoSocial: Yup.string().required('Razao Social não pode ser vazio'),
  cnpj: Yup.string().required('cnpj não pode ser vazio'),
});

export default class Fornecedor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      useFormProduct: false,
      fornecedores: [],
      search: '',
    };
  }

  componentDidMount() {
    const fornecedores = JSON.parse(localStorage.getItem('fornecedores'));
    if (fornecedores) {
      this.setState({ fornecedores });
    }
  }

  componentDidUpdate(_, prevState) {
    const { fornecedores } = this.state;
    if (prevState.fornecedores !== fornecedores) {
      localStorage.setItem('fornecedores', JSON.stringify(fornecedores));
    }
  }

  handleForm = () => {
    const { useFormProduct } = this.state;
    this.setState({ useFormProduct: !useFormProduct });
  };

  handleSubmit = (values, { resetForm }) => {
    const { fornecedores } = this.state;
    resetForm({});
    this.setState({
      fornecedores: [...fornecedores, values],
      useFormProduct: false,
    });
  };

  handleRemove = index => {
    const { fornecedores } = this.state;
    fornecedores.splice(index, 1);
    this.setState({ fornecedores });
    localStorage.setItem('fornecedores', JSON.stringify(fornecedores));
  };

  handleSearch = e => {
    const { value } = e.target;
    this.setState({ search: value });
  };

  render() {
    const { fornecedores, useFormProduct, search } = this.state;

    return (
      <>
        {/* Title */}
        <div className="title-page">
          <h2>Fornecedor</h2>
          <span>Cadastro e Edição de Fornecedores</span>
        </div>

        {/* Form */}
        {useFormProduct ? (
          <Formik
            onSubmit={this.handleSubmit}
            render={formikProps => (
              <FormFornecedor {...formikProps} handleForm={this.handleForm} />
            )}
            validationSchema={validate}
          />
        ) : null}

        {/* Button Produto */}
        {!useFormProduct ? (
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
        ) : null}

        {/* Table */}
        {!useFormProduct ? (
          <div className="box-container">
            <div className="list-expenses">
              <table className="table" id="myTable">
                <thead>
                  <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Cidade</th>
                    <th scope="col">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {fornecedores.length > 0
                    ? fornecedores.map((fornecedor, index) => (
                        <tr key={fornecedor.cnpj}>
                          <td>{index}</td>
                          <td>{fornecedor.razaoSocial}</td>
                          <td>{fornecedor.cidade}</td>
                          <th scope="row">
                            {/* actions */}
                            <div className="actions">
                              <i className="icon fas fa-pen" />
                              <i
                                className="icon fas fa-trash"
                                onClick={() => this.handleRemove(index)}
                              />
                            </div>
                          </th>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}
