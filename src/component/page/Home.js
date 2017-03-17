import React from 'react'
import { Header } from './../layout/Header'
import { Search } from './../layout/Search'
import { Banner } from './../layout/Banner'
import { Cellar } from './../layout/Cellar'
import { RegisterBar } from './../layout/RegisterBar'
import { Footer } from './../layout/Footer'
import DevTools from 'mobx-react-devtools';


const Home = ({ match }) => {
    return (
        <div>
          <Header />
          <Search />
          <Banner />
          <Cellar />
          <RegisterBar />
          <Footer />
          <DevTools />
        </div>
    );
};

export default Home;
