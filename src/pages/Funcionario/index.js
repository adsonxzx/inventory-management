import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormFuncionario from './FormFuncionario';

export default class Funcionario extends Component {
  handleSubmit = values => {
    console.log('opa');
  };

  render() {
    return <h1>opa</h1>;
  }
}
