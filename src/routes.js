import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Produto from './pages/Produto';
import Funcionarios from './pages/Funcionario';
import Fornecedores from './pages/Fornecedor';

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/produtos" component={Produto} />
      <Route path="/funcionarios" component={Funcionarios} />
      <Route path="/fornecedores" component={Fornecedores} />
    </Switch>
  );
}
