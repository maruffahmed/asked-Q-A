import React from 'react'
import {Container} from 'react-bootstrap'
import Navmenu from './components/layout/Navmenu'
import AddQuestions from './components/AddQuestions/AddQuestions'
import Main from './components/main/Main'

function App() {
  return (
    <div className="App">
      <Container fluid className="px-0">
        <Navmenu/>
        <AddQuestions/>
        <Main/>
      </Container>
    </div>
  );
}


export default App;
