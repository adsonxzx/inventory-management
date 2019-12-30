/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Field } from 'formik';

export default ({ values, handleForm }) => {
  return (
    <form>
      <div className="row">
        <div className="form-group col-md-12">
          <label htmlFor="categoria">Categoria</label>
          <Field
            type="text"
            className="form-control"
            id="categoria"
            placeholder="categoria do produto"
            name="categoria"
            value={values.categoria || ''}
          />
        </div>
      </div>

      {/* Form Actions */}
      <div className="form-actions">
        <button type="submit" className="button-action -green">
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
