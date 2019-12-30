/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';

const { pathname } = window.location;

function tabs(e) {
  const element = document.getElementsByTagName('li');
  // // Remove all class
  for (let i = 0; i < element.length; i++) {
    element[i].classList.remove('active');
  }

  // // Add class
  e.currentTarget.classList.add('active');
}

export default function Siderbar() {
  return (
    <div className="main-siderbar">
      <ul className="menu">
        <li
          onClick={e => tabs(e)}
          className={pathname === '/' ? 'active' : null}
        >
          <Link to="/">
            <i className="fas fa-tachometer-alt" /> Home
          </Link>
        </li>
        <li
          onClick={e => tabs(e)}
          className={pathname === '/produtos' ? 'active' : null}
        >
          <Link to="/produtos">
            <i className="fab fa-product-hunt" />
            Produtos
          </Link>
        </li>
        <li
          onClick={e => tabs(e)}
          className={pathname === '/fornecedores' ? 'active' : null}
        >
          <Link to="/fornecedores">
            <i className="fas fa-luggage-cart" />
            Fornecedores
          </Link>
        </li>
        <li
          onClick={e => tabs(e)}
          className={pathname === '/fornecedores' ? 'active' : null}
        >
          <Link to="/funcionarios">
            <i class="fas fa-people-carry" />
            Funcionário
          </Link>
        </li>
        <li
          onClick={e => tabs(e)}
          className={pathname === '/' ? 'active' : null}
        >
          <Link to="/empresas">
          <i class="fas fa-city" />
            Empresa
          </Link>
        </li>
      </ul>
    </div>
  );
}
