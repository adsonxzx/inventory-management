/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Field } from 'formik';
import axios from 'axios';

const api = 'https://servicodados.ibge.gov.br/api/v1';

export default class FormFornecedor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estados: [],
      cidades: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get(`${api}/localidades/estados`);
    this.setState({ estados: response.data });
  }

  async componentDidUpdate(prevProps) {
    const { estado } = this.props.values;
    const { estados } = this.state;

    const estadoId = estados.find(e => e.sigla === estado);

    if (prevProps.values.estado !== estado && estado) {
      const response = await axios.get(
        `${api}/localidades/estados/${estadoId.id}/municipios`
      );

      this.setState({ cidades: response.data });
    }
  }

  render() {
    const {
      handleSubmit,
      handleForm,
      values,
      isValid,
      errors,
      touched,
    } = this.props;
    const { estados, cidades } = this.state;

    return (
      <form onSubmit={handleSubmit} onChange={() => console.log("test")}>
        <h6 className="mb-3">Dados Gerais</h6>
        <div className="row">
          <div className="form-group col-md-12">
            <label htmlFor="razaoSocial">Nome / Razão Social *</label>
            {errors.razaoSocial && touched.razaoSocial ? (
              <p className="msg-error">{errors.razaoSocial}</p>
            ) : null}
            <Field
              type="text"
              className="form-control"
              id="razaoSocial"
              placeholder="razão social"
              name="razaoSocial"
              value={values.razaoSocial || ''}
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="fantasia">Nome Fantasia</label>
            <Field
              type="text"
              className="form-control"
              id="fantasia"
              placeholder="nome fantasia"
              name="fantasia"
              value={values.fantasia || ''}
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="cnpj">CNPJ *</label>
            {errors.cnpj && touched.cnpj ? (
              <p className="msg-error">{errors.cnpj}</p>
            ) : null}
            <Field
              type="text"
              className="form-control"
              id="cnpj"
              placeholder="xx.xxx.xxx xxxx-xx"
              name="cnpj"
              value={values.cnpj || ''}
            />
          </div>
        </div>

        {/* Endereço */}
        <h6 className="mb-3 mt-3">Endereço</h6>
        <div className="row">
          <div className="form-group col-md-4">
            <label htmlFor="cep">CEP</label>
            <Field
              type="text"
              className="form-control"
              id="cep"
              placeholder="cep"
              name="cep"
              value={values.cep || ''}
            />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="estado">Estado</label>
            <Field
              component="select"
              className="form-control"
              id="estado"
              name="estado"
            >
              <option selected disabled>
                selecione um estado
              </option>
              {estados.map(({ sigla, id }) => (
                <option key={id} value={sigla}>
                  {sigla}
                </option>
              ))}
            </Field>
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="cidade">Cidade</label>
            <Field
              component="select"
              className="form-control"
              id="cidade"
              name="cidade"
            >
              <option selected disabled>
                selecione uma cidade
              </option>
              {cidades.map(({ nome }) => (
                <option key={nome} value={nome}>
                  {nome}
                </option>
              ))}
            </Field>
          </div>

          <div className="form-group col-md-8">
            <label htmlFor="endereco">Endereço</label>
            <Field
              type="text"
              className="form-control"
              id="endereco"
              placeholder="preço do produto"
              name="endereco"
              value={values.endereco || ''}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="numero">Número</label>
            <Field
              type="text"
              className="form-control"
              id="numero"
              placeholder="Nº"
              name="numero"
              value={values.numero || ''}
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="complemento">Complemento</label>
            <Field
              type="text"
              className="form-control"
              id="complemento"
              placeholder="complemento"
              name="complemento"
              value={values.complemento || ''}
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="bairro">Bairro</label>
            <Field
              type="text"
              className="form-control"
              id="bairro"
              placeholder="Bairro"
              name="bairro"
              value={values.bairro || ''}
            />
          </div>
        </div>
        {/* Form Actions */}
        <div className="form-actions">
          <button
            type="submit"
            className="button-action -green"
            disabled={!isValid}
          >
            <i className="fas fa-plus" /> Cadastrar
          </button>
          <button
            type="button"
            className="button-action -out"
            onClick={handleForm}
          >
            Cancelar
          </button>
        </div>
      </form>
    );
  }
}
