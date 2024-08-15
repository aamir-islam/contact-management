import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./pages/Sidebar/Sidebar";
import Header from "./components/Header";
import MainContent from "./pages/MainContent/MainContent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState); // Toggle the state
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex flex-row h-screen">
          {isSidebarOpen && <Sidebar />} {/* Render Sidebar based on state */}
          <MainContent />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
