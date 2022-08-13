import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AvailableFoods from './pages/AvailableFood/AvailableFood';
import Header from './components/header/header';
import Homepage from './pages/homepage/Homepage';
import SingleFood from './pages/SingleFood/SingleFood';
import About from './pages/About/About'
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer'
import { useQuery } from '@apollo/client';
import { QUERY_FOODS } from './utils/queries';


function App() {
  const { loading, error, data, refetch } = useQuery(QUERY_FOODS);

  function refetchFoods(){
    // trigger refetch data on graphql query
    refetch();
  }

  return (
      <Router>
        <div>
            <Header/>
            <div>
              <Routes>
                <Route
                  path="/"
                  element={<Homepage/>}>
                </Route>
                <Route
                  path="/signup"
                  element={<Signup/>}>
                </Route>
                <Route
                  path="/login"
                  element={<Login/>}>
                </Route>
                <Route
                path="/about"
                element={<About />}>
                  </Route>
                <Route
                  path="/foods"
                  element={<AvailableFoods data={data} loading={loading}/>}>
                </Route>
                <Route
                  path="/food/:foodId"
                  element={<SingleFood onClickGrabFood={refetchFoods}/>}>
                </Route>
              </Routes>
            </div>
        </div> 
      </Router>
  ) 
}

export default App;
