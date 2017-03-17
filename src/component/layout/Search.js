import React from 'react'
import {map} from 'lodash'
import $ from "jQuery"
import Autosuggest from 'react-autosuggest'
import { AutocompleteComponent } from './../smart/autocomplete'


export class Search extends React.Component {
  render() {
    return (
          <div className='container searchArea'>
            <div className='row display-table'>          
              <div className='col-md-2 display-cell'>
               <a href="/" alt="Calambau - Tradição em Cachaças desde 1892"><img src='/src/img/calambau.png'/></a>            
              </div>
              <div className='col-md-7 display-cell'>
                <div className="form-group has-feedback">
                    <AutocompleteComponent/>
                    <i className="glyphicon glyphicon-search form-control-feedback"></i>
                </div>
              </div>
              <div className='col-md-3 display-cell'>
                <div className='pingaBox'>
                  Sua caixa de cachaça está vazia
                </div>
              </div>
            </div>
          </div>
    )
  }
}
