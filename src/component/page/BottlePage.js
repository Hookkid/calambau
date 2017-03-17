import React from 'react'
import { Header } from './../layout/Header'
import { Search } from './../layout/Search'
import { Bottle } from './../layout/Bottle'
import { RegisterBar } from './../layout/RegisterBar'
import { Footer } from './../layout/Footer'
import DevTools from 'mobx-react-devtools';


const BottlePage = ({ match }) => {
    return (
        <div>
          
          <Header />
          <Search />
          <Bottle bottle={match.params.bottle} />
          <RegisterBar />
          <Footer />
          <DevTools />
        </div>
    );
};

export default BottlePage;
