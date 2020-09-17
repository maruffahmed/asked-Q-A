import React from 'react'
import {Route, Switch, useLocation} from 'react-router-dom'
import {AnimatePresence} from "framer-motion"
import {Container} from 'react-bootstrap'
import Navmenu from './components/layout/Navmenu'
import AddQuestions from './components/AddQuestions/AddQuestions'
import Main from './components/main/Main'
import NotFound from './components/NotFound'
import SingleQuestionPage from './components/SingleQuestionPage/SingleQuestionPage'
import Footer from './components/layout/Footer'


function App() {
  const location = useLocation();
  return (
      <div className="App">
        <Container fluid className="px-0">
          <Navmenu/>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>

              <Route exact path="/">
                <AddQuestions/>
                <Main/>
              </Route>

              <Route path="/single" component={SingleQuestionPage}/>

              <Route >
                <NotFound/>
              </Route>

            </Switch>

          </AnimatePresence>
          <Footer/>
        </Container>
      </div>
  );
}


export default App;
