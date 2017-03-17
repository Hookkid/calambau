import React from 'react'
import {map} from 'lodash'

export class Footer extends React.Component {




  render() {
    return (
          <footer>
            <div className="container text-center">
            <div className="row">
              <div className="col-lg-12">
                <div className="col-md-3">
                  <ul className="nav nav-pills nav-stacked">
                    <li><a href="#">Sobre CALAMBAU</a></li>
                    <li><a href="#">Conheça nosso BLOG</a></li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <ul className="nav nav-pills nav-stacked">
                    <li><a href="#">Clube da Cachaça</a></li>
                    <li><a href="#">Perguntas Frequentes</a></li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <ul className="nav nav-pills nav-stacked">
                    <li><a href="#">Anuncie seu Produto</a></li>
                    <li><a href="#">Entre em Contato</a></li>          
                  </ul>
                </div>
                <div className="col-md-3">
                  <ul className="nav nav-pills nav-stacked">
                    <li><a href="#">Rua Nometal, 123<br/>Bairro Vizinhança,<br/>Belo Horizonte-MG 12345-789 </a></li>
                    <li><a href="#">31 1234-5678</a></li>
                  </ul>
                </div>  
              </div>
            </div>
            <hr/>
              <div className="row">
                  <div className="col-lg-12">
                      <ul className="nav nav-pills nav-justified">
                          <li><a href="/">Calambau.com.br</a></li>
                          <li><a href="#">Termos do Serviço</a></li>
                          <li><a href="#">Política de Privacidade</a></li>
                      </ul>
                  </div>
              </div>
          </div>
          </footer>
    )
  }
}
