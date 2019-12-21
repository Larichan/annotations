import React, {useState, useEffect} from 'react';
import { Typography, AppBar, Toolbar, Menu, MenuItem, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import AddAnnotations from './AddAnnotations';
import SeeAnnotations from './SeeAnnotations';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () =>{


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
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
    <Router>
      <div>
        <AppBar position="static">
            <Toolbar>
              
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >

                    <div>

                        <Link to="/AddAnnotations" style={{textDecoration:'none'}}>
                            <MenuItem onClick={handleClose}>Add an annotation</MenuItem>
                        </Link>

                        <Link to="/SeeAnnotations" style={{textDecoration:'none'}}>
                            <MenuItem onClick={handleClose}>See annotations</MenuItem>
                        </Link>
                    </div>
                

                <MenuItem onClick={handleClose}>Add a category</MenuItem>
            </Menu>

                <Typography  color="inherit" align="center">
                ANNOTATION SYSTEM
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
          <Switch>
          
            <Route path="/AddAnnotations">
              <AddAnnotations/>
            </Route>
            <Route path="/SeeAnnotations">
              <SeeAnnotations/>
            </Route>
          </Switch>
      </Router>
    </>
    
    //<AddAnnotations/>
  );
}



export default App;
