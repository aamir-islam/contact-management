import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ContactList } from "./pages/ContactList/ContactList";
import { Chart } from "./pages/Chart/Chart";
import Sidebar from "./pages/Sidebar/Sidebar";

function App() {
  return (
    <Router>
      <div className="h-10 bg-blue-800 text-center text-white">Header</div>
      <div className="flex flex-row h-screen">
        <Sidebar />
        <div className="flex-grow">
          <Routes>
            <Route path="/contact-list" element={<ContactList />} />
            <Route path="/chart" element={<Chart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
