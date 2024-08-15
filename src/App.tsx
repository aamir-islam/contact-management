import { BrowserRouter as Router } from "react-router-dom";

import Sidebar from "./pages/Sidebar/Sidebar";
import { MainContent } from "./pages/MainContent/MainContent";
import { Header } from "./components/Header";

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
