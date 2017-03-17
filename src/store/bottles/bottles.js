import {observable, computed, autorun} from 'mobx'
import {observer} from 'mobx-react'
import React from 'react'
import {Fb} from '../../firebase/firebase-store'
import {map, toJS} from 'mobx'
import {browserHistory} from 'react-router'
import $ from 'jquery'



class Bottles {

  @observable bottles = map({})


  constructor() {    
    Fb.bottles.orderByKey().on('value', (snapshot) => {
      //console.log(snapshot.val())
     this.bottles = snapshot.val()
    });

  }

  @observable filter = ""

  @computed get json() {    
    return toJS(this.bottles)
  }

  add = (name) => {
    const id = Fb.bottles.push().key
    this.update(id, name)

  }

  @computed get getAllBottles(){
    Fb.bottles.orderByKey().on('value', (snapshot) => {      
     return toJS(snapshot.val())
   });
  }

  updateBottles(){
    console.log("filter",this.filter)
    var endFilter = this.filter + "\uf8ff"

    Fb.bottles.orderByKey().startAt(this.filter).endAt(endFilter).on('value', (snapshot) => {
      console.log(snapshot.val())
     this.bottles = snapshot.val()
    });
  }

  update = (id, name) => {

    var ref = Fb.bottles.push();
    var refKey = ref.key;
    var payload = {};
    var data = {
      name: name,
      available: true,
      stock: 15
    }

    payload['bottles'] = data;

    ref.update(data);

  }

  del = (id) => {
    Fb.bottles.child(id).remove()
  }
}

const bottles = new Bottles()
export {bottles}
