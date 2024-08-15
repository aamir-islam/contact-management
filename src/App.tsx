import { BrowserRouter as Router } from "react-router-dom";

import Sidebar from "./pages/Sidebar/Sidebar";
import Header from "./components/Header";
import MainContent from "./pages/MainContent/MainContent";

function App() {
  return (
    <Router>
      <Header />
      <div className="flex flex-row h-screen">
        <Sidebar />
        <MainContent />
      </div>
    </Router>
  );
}

export default App;
