import React from 'react'
import {map} from 'lodash'
import { BottleInfoBox } from './../smart/bottleinfobox'
export class Cellar extends React.Component {

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            Pingas por Preço
            <div className="searchParamBox">
              <ul className="list-unstyled">
                <li>Até R$30 (x)</li>
                <li>de R$30 a R$60 (x)</li>
                <li>de R$60 a R$100 (x)</li>
                <li>Acima de R$100 (x)</li>
              </ul>
            </div>

            Pingas por Alambique
            <div className="searchParamBox">
              <ul className="list-unstyled">
                <li>Alambique 1 (x)</li>
                <li>Alambique 2 (x)</li>
                <li>Alambique 3 (x)</li>
                <li>Alambique 4 (x)</li>
              </ul>
            </div>
          </div>
          <div className="col-md-10">
            <span id="resultsFoundCount">01</span> resultados encontrados

            <BottleInfoBox priceStart={"0"} />


           

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
