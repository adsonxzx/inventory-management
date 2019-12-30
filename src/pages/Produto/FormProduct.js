/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Field } from 'formik';

export default ({
  handleSubmit,
  errors,
  touched,
  values,
  isValid,
  handleForm,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-md-4">
          <label htmlFor="codigo">Código</label>
          {errors.codigo && touched.codigo ? (
            <p className="msg-error">{errors.codigo}</p>
          ) : null}
          <Field
            type="text"
            className="form-control"
            id="codigo"
            placeholder="código do produto"
            name="codigo"
            value={values.codigo || ''}
          />
        </div>

        <div className="form-group col-md-8">
          <label htmlFor="inputEmail5">Nome *</label>
          {errors.nome && touched.nome ? (
            <p className="msg-error">{errors.nome}</p>
          ) : null}
          <Field
            type="text"
            className="form-control"
            id="inputEmail5"
            placeholder="nome do produto"
            name="nome"
            value={values.nome || ''}
          />
        </div>

        <div className="form-group col-md-4">
          <label htmlFor="preco">Preço Custo</label>
          <Field
            type="text"
            className="form-control"
            id="preco"
            placeholder="preço do produto"
            name="preco"
            value={values.preco || ''}
          />
        </div>

        <div className="form-group col-md-4">
          <label htmlFor="lucro">Lucro %</label>
          <Field
            type="text"
            className="form-control"
            id="lucro"
            placeholder="lucro do produto"
            name="lucro"
            value={values.lucro || ''}
          />
        </div>

        <div className="form-group col-md-4">
          <label htmlFor="venda">Preço de Venda * </label>
          {errors.venda && touched.venda ? (
            <p className="msg-error">{errors.venda}</p>
          ) : null}
          <Field
            type="text"
            className="form-control"
            id="venda"
            placeholder="preço de venda"
            name="venda"
            value={values.venda || ''}
          />
        </div>

        <div className="form-group col-md-2">
          <label htmlFor="icms">ICMS % </label>
          <Field
            type="text"
            className="form-control"
            id="icms"
            placeholder="ICMS %"
            name="icms"
            value={values.icms || ''}
          />
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="tributario">Subst. Tributária</label>
          <Field
            type="text"
            className="form-control"
            id="tributario"
            placeholder="Subst. Tributária"
            name="tributario"
            value={values.tributario || ''}
          />
        </div>

        <div className="form-group col-md-2">
          <label htmlFor="nfe">CST - NFE </label>
          <Field
            type="text"
            className="form-control"
            id="nfe"
            placeholder="CST - NFE"
            name="nfe"
            value={values.nfe || ''}
          />
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="ncm">NCM - NFE * </label>
          {errors.ncm && touched.ncm ? (
            <p className="msg-error">{errors.ncm}</p>
          ) : null}
          <Field
            type="text"
            className="form-control"
            id="ncm"
            placeholder="NCM - NFE"
            name="ncm"
            value={values.ncm || ''}
          />
        </div>

        <div className="form-group col-md-2">
          <label htmlFor="medida">Unidade Medida </label>
          <Field
            component="select"
            className="form-control"
            id="medida"
            name="medida"
          >
            <option selected disabled>
              medida
            </option>
            <option value="kg">kg</option>
            <option value="g">g</option>
            <option value="m">m</option>
          </Field>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="marca">Marca</label>
          <Field
            component="select"
            className="form-control"
            id="marca"
            name="marca"
          >
            <option selected disabled>
              marca
            </option>
            <option value="apple">Apple</option>
            <option value="asus">Asus</option>
            <option value="dell">Dell</option>
          </Field>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="categoria">Categoria</label>
          <Field
            component="select"
            className="form-control"
            id="categoria"
            name="categoria"
          >
            <option selected disabled>
              categoria
            </option>
            <option value="categoria 1">categoria 1</option>
            <option value="categoria 2">categoria 2</option>
            <option value="categoria 3">categoria 3</option>
          </Field>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="origem">Origem</label>
          <Field
            component="select"
            className="form-control"
            id="origem"
            name="origem"
          >
            <option selected disabled>
              origem
            </option>
            <option value="nacional">Nacional</option>
          </Field>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="codigoBarras">Código de Barra</label>
          <Field
            type="text"
            className="form-control"
            id="codigoBarras"
            placeholder="Código de Barra"
            name="codigoBarras"
            value={values.codigoBarras || ''}
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
};
