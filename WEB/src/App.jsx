import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventDetails from "./component/events/EventDetails";
import Events from "./component/events/Events";
import SideMenu from "./component/SideMenu/SideMenu";
import Form from "./component/Form/Form";

function App() {
  return (
    <div>
      <Router>
        <SideMenu />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/events' element={<Events />} />
          <Route path='/CreateEvent' element={<Form />} />
          <Route path='/event-details/:id' element={<EventDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
