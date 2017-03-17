import React from 'react'
import {map} from 'lodash'

export class Bottle extends React.Component {

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <span id="resultsFoundCount">01</span> resultados encontrados


            <div className="pingaInfoBox clearfix">
              <div className="row">
                <div className="col-md-2">
                  <img src="/src/img/garrafa_1.png" className="pingaBottlePageImage" />
                </div>
                <div className="col-md-6">
                  <div className="pingaInfoBoxTitle img-responsive">
                    {this.props.bottle}
                  </div>
                  <ul className="list-group">
                    <li className="list-group-item"><i className="fa fa-industry" aria-hidden="true"></i> Produzido por Alambique 1</li>
                    <li className="list-group-item"><i className="fa fa-beer" aria-hidden="true"></i> Cachaça Branca Envelhecida</li>
                    <li className="list-group-item"><i className="fa fa-info-circle" aria-hidden="true"></i> Conselho da Casa:<br/>
                      Picadinho de carne com banana da terra, pizzas variadas, tiras de mignon com fritas, lasanha à bolonhesa, coração de boi recheado e mix de queijos de média cura...
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <div className="buyBox">
                    <h3>R$ 39,90</h3>
                    <div className="buyForm">
                      <input type="text" value="1" className="form-control buyBoxQuantity" />
                      <input type="button" className="btn btn-primary" value="Adicionar" />
                    </div>
                    <hr/>
                    <p>Membros Clube da Pinga</p>
                    <p>R$ 30,00</p>
                    <p>e entrega mais rápida</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pagination">
              <div className="row">
                <div className="col-md-1">
                 <i className="fa fa-angle-double-left"></i>
                </div>
                <div className="col-md-1">
                 <i className="fa fa-angle-left" ></i>
                </div>
                <div className="col-md-8 text-center">
                  1 - 2 - 3 - 4 - 5
                </div>
                <div className="col-md-1">
                  <i className="fa fa-angle-right"></i>
                </div>
                <div className="col-md-1">
                  <i className="fa fa-angle-double-right"></i> 
                </div>
              </div>

            </div>
          </div>
        </div>         
      </div>  
    )
  }
}
