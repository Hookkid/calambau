import React from 'react'
import {bottles} from '../../store/bottles/bottles'
import {Fb} from '../../firebase/firebase-store'
import {map} from 'lodash'
import { Link } from 'react-router-dom'

export class BottleInfoBox extends React.Component {
  constructor() {
    super()

    this.state = {
      bottleObject: map({})
    }
  }

  componentDidMount () {
    Fb.bottles.orderByKey().on('value', (snapshot) => {    
      this.setState({
        bottleObject: snapshot.val()
      }) 
    })  
  }

  render() {
    const { bottleObject  } = this.state

    var bottleArray = $.map(bottleObject, function(value, index) {
      return [value];
    });

    const renderBottleBoxes =  bottleArray.map(bottle => (
      <div className="pingaInfoBox clearfix" key={bottle.id}>
        <div className="row">
          <div className="col-md-2">
            <img src={"src/img/garrafa_" + bottle.id + ".png"} className="pingaInfoBoxImage" />
          </div>
          <div className="col-md-6">
            <div className="pingaInfoBoxTitle img-responsive">
              <Link to={'/cachaca/' + bottle.name}><span><strong className="tt-highlight">{bottle.name}</strong></span></Link>  
            </div>
            <ul className="list-group">
              <li className="list-group-item"><i className="fa fa-industry" aria-hidden="true"></i> Produzido por {bottle.madeBy}</li>
              <li className="list-group-item"><i className="fa fa-beer" aria-hidden="true"></i> {bottle.type}</li>
              <li className="list-group-item"><i className="fa fa-info-circle" aria-hidden="true"></i> Conselho da Casa:<br/>
                {bottle.sommelier}
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <div className="buyBox">
              <h3>R$ {bottle.price}</h3>
              <div className="buyForm">
                <input type="text" value="1" className="form-control buyBoxQuantity" />
                <input type="button" className="btn btn-primary" value="Adicionar" />
              </div>
              <hr/>
              <p>Membros Clube da Pinga</p>
              <p>R$ {bottle.discountedPrice}</p>
              <p>e entrega mais rápida</p>
            </div>
          </div>
        </div>
      </div>
    ))
    
    return (
      <div>
        {renderBottleBoxes}
      </div>    
    );
  }

}