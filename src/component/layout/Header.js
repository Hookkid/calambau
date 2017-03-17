import React from 'react'
import {map} from 'lodash'
import $ from 'jquery'
import {
  Link, NavLink
} from 'react-router-dom'


export class Header extends React.Component {

  


  render() {
  
    return (
        <header>
          <div className='container'>
            <div className='row'>          
              <div className='col-md-12'>

                <ul className="nav navbar-nav topBar">
             
                  <li><NavLink activeClassName="active" exact to={"/"}>Calambau</NavLink></li>
                  <li>Clube da Pinga</li>
                  <li>Sobre Calambau</li>
                  <li>Como Funciona</li>                  
                </ul>
                <ul className="nav navbar-nav navbar-right topBar">
                  <li className="loginHeader">
                    <i className="fa fa-user-o" aria-hidden="true"></i> Acesse sua Conta <i className="fa fa-caret-down" aria-hidden="true"></i>
                  </li>
                  <div className="loginBox">
                    <input type="text" value='' className="form-control" placeholder="Seu Email ou CPF" />
                    <input type="password" value='' className="form-control" placeholder="Sua Senha"  />
                    <input type="button" className="btn btn-default" value='ENTRAR' /><br/>
                    <a href="#" onClick="">Esqueceu sua senha?</a>
                    <hr/>
                    <div className="registerUserArea">
                      <input type="button" className="btn btn-default" value='Cadastre-se Agora' />
                    </div>

                  </div>
                </ul>
              </div>
            </div>
          </div>

        </header>
    )
  }
}
