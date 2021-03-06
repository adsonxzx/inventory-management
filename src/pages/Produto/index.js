/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormProduct from './FormProduct';
import FormMarca from './FormMarca';
import FormCategoria from './FormCategoria';

const validate = Yup.object().shape({
  nome: Yup.string().required('Nome não pode ser vazio'),
  venda: Yup.string().required('não pode ser vazio'),
  ncm: Yup.string().required('não pode ser vazio'),
});

export default class Produto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      useFormProduct: false,
      products: [],
      tabActive: 'produto',
      search: '',
    };
  }

  componentDidMount() {
    const products = JSON.parse(localStorage.getItem('products'));
    if (products) {
      this.setState({ products });
    }
  }

  componentDidUpdate(_, prevState) {
    const { products } = this.state;
    if (prevState.products !== products) {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }

  handleRemove = index => {
    const { products } = this.state;
    products.splice(index, 1);
    this.setState({ products });
    localStorage.setItem('products', JSON.stringify(products));
  };

  handleForm = () => {
    const { useFormProduct } = this.state;
    this.setState({ useFormProduct: !useFormProduct });
  };

  handleAddProduct = () => {
    this.setState({ useFormProduct: false });
  };

  handleSubmit = (values, { resetForm }) => {
    const { products } = this.state;
    resetForm({});
    this.setState({ products: [...products, values], useFormProduct: false });
  };

  handleTab = tabActive => {
    this.setState({ tabActive });
  };

  handleSearch = e => {
    const { value } = e.target;
    this.setState({ search: value });
  };

  render() {
    const { useFormProduct, products, tabActive, search } = this.state;
    return (
      <>
        {/* Title */}
        <div className="title-page">
          <h2>Produto</h2>
          <span>Cadastro e Edição de Produto</span>
        </div>

        {/* Tabe de Produtos */}
        <ul className="tab-select">
          <li
            className={tabActive === 'produto' ? 'active' : null}
            onClick={() => this.handleTab('produto')}
          >
            Produto
          </li>
          <li
            className={tabActive === 'marca' ? 'active' : null}
            onClick={() => this.handleTab('marca')}
          >
            Marca
          </li>
          <li
            className={tabActive === 'categoria' ? 'active' : null}
            onClick={() => this.handleTab('categoria')}
          >
            Categoria
          </li>
        </ul>

        {/* Form Produto */}
        {tabActive === 'produto' && useFormProduct ? (
          <Formik
            onSubmit={this.handleSubmit}
            validationSchema={validate}
            render={formikProps => (
              <FormProduct {...formikProps} handleForm={this.handleForm} />
            )}
          />
        ) : null}

        {/* Form Marca */}
        {tabActive === 'marca' && useFormProduct ? (
          <Formik
            render={formikProps => (
              <FormMarca {...formikProps} handleForm={this.handleForm} />
            )}
          />
        ) : null}

        {/* Form Produto */}
        {tabActive === 'categoria' && useFormProduct ? (
          <Formik
            render={formikProps => (
              <FormCategoria {...formikProps} handleForm={this.handleForm} />
            )}
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

        {/* Tabela Produto */}
        {tabActive === 'produto' && !useFormProduct ? (
          <div className="box-container">
            <div className="list-expenses">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Preço</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {products.length > 0
                    ? products.map((product, index) => (
                        <tr key={product.codigo}>
                          <td>{product.codigo}</td>
                          <td>{product.nome}</td>
                          <td>{product.venda}</td>
                          <td>{product.marca}</td>
                          <td>{product.categoria}</td>
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

        {/* Tabela Marca */}
        {tabActive === 'marca' && !useFormProduct ? (
          <div className="box-container">
            <div className="list-expenses">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Marca 1</td>
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
                    <td>Marca 2</td>
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
        ) : null}

        {/* Tabela Produto */}
        {tabActive === 'categoria' && !useFormProduct ? (
          <div className="box-container">
            <div className="list-expenses">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Eletrônico</td>
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
                    <td>Alimento</td>
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
        ) : null}
      </>
    );
  }
}
