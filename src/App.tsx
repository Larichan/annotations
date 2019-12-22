import React, { useState, useEffect } from 'react';
import { Typography, AppBar, Toolbar, Menu, MenuItem, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AddAnnotations from './AddAnnotations';
import SeeAnnotations from './SeeAnnotations';
import AddCategory from './AddCategory';
import Header from './Components/Header';
import GlobalStyle from './GlobalStyle';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {



  /*const annotations = useQuery(GET_ANNOTATIONS)
  const [addAnnotation] = useMutation(ADD_ANNOTATIONS)


  useEffect(() =>{
    addAnnotation({
      variables: {
        title: '',
        content: '',
        category_id: ''
      }
    }).then(resposta => {
      console.log('deu certo')
    }).catch(erro =>
      {
        console.log(erro)
      })
  }, [])

  if(annotations.loading){
    return 'Carregando...'
  }*/

  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>

          <Route path="/AddAnnotations" component={AddAnnotations} />
          <Route path="/SeeAnnotations" component={SeeAnnotations} />
          <Route path="/AddCategory" component={AddCategory} />
        </Switch>
      </Router>
    </>

  );
}



export default App;
