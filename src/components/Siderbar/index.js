import React from 'react';
import { Link } from 'react-router-dom';

const pathname = window.location.pathname;

export default function Siderbar() {
  return (
    <div className="main-siderbar">
      <ul className="menu">
        <li className={pathname === '/' ? 'active' : null}>
          <Link to="/">
            <i className="fas fa-tachometer-alt" /> Home
          </Link>
        </li>
        <li className={pathname === '/produtos' ? 'active' : null}>
          <Link to="/produtos">
            <i className="fab fa-product-hunt" />
            Produtos
          </Link>
        </li>
        <li className={pathname === '/fornecedores' ? 'active' : null}>
          <Link to="/fornecedores">
            <i className="fas fa-luggage-cart" />
            Fornecedores
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fas fa-luggage-cart" />
            Empresa
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fas fa-luggage-cart" />
            Locais de Estoque
          </Link>
        </li>
      </ul>
    </div>
  );
}
