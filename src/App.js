import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NoteState from './Contexts/notes/NoteState';
import Background from './Components/Background';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Alert from './Components/Alert';
import AlertState from './Contexts/alerts/AlertState';

function App() {
  return (
    <>
    <Background />
      <div id="mainContainer">
        <AlertState>
      <NoteState>
        <Router>
          <Navbar />
          <Alert />
            <div className="container my-3">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/signIn" element={<SignIn />} />
              <Route exact path="/signUp" element={<SignUp />} />
            </Routes>
        </div>
        </Router>
      </NoteState>
        </AlertState>
      </div>
    </>
  );
}

export default App;
