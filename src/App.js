
import {
  BrowserRouter as Router,
  Routes, // Instead of Switch
  Route,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contact, { MessageSubmitted } from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path ="/contact" element={<Contact/>}/>
          <Route path="thankyou" element ={<MessageSubmitted/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
