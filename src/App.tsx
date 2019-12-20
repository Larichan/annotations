import React, {useState, useEffect} from 'react';
import AddAnnotations from './AddAnnotations';
import SeeAnnotations from './SeeAnnotations';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () =>{

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
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/AddAnnotations">AddAnnotations</Link>
            </li>
            <li>
              <Link to="/SeeAnnotations">SeeAnnotations</Link>
            </li>
          </ul>
        </nav>

        
        <Switch>
          <Route path="/AddAnnotations">
            <AddAnnotations/>
          </Route>
          <Route path="/SeeAnnotations">
            <SeeAnnotations/>
          </Route>
        </Switch>
      </div>
    </Router>
    
    //<AddAnnotations/>
  );
}



export default App;
