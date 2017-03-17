import React from 'react'
import {map} from 'lodash'

export class RegisterBar extends React.Component {




  render() {
    return (
          <div className='registerBar'>
            <div className='container text-center'>
              <span className='registerHeader'>Cadastre-se para receber nossas novidades e ofertas por e-mail:</span> <input type="text" placeholder="Nome" className="textBox"/> <input type="text" placeholder="Endereço de E-mail" className="textBox"/> <input type="button" value="Cadastrar" className='btn' />
            </div>
          </div>
    )
  }
}
