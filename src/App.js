import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from "./Pages/Homepage";
import Waitlist from "./Pages/Waitlist";
import Serving from "./Pages/Serving";
import Log from "./Pages/Directory";
import Profile from "./Pages/Profile";
import ErrorPage from "./Pages/ErrorPage";

//"/profile/:userID"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Waitlist />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/serving" element={<Serving />} />
          <Route path="/directory" element={<Log />} />
          <Route path="/profile" element={<Homepage />}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
