import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Produto from './pages/Produto';
import Fornecedores from './pages/Fornecedor';
import Empresa from './pages/Empresa';
import Funcionario from './pages/Funcionario';

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/produtos" component={Produto} />
      <Route path="/fornecedores" component={Fornecedores} />
      <Route path="/empresas" component={Empresa} />
      <Route path="/funcionarios" component={Funcionario} />
    </Switch>
  );
}
