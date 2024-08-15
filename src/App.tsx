import { BrowserRouter as Router } from "react-router-dom";

import Sidebar from "./pages/Sidebar/Sidebar";
import Header from "./components/Header";
import MainContent from "./pages/MainContent/MainContent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <div className="flex flex-row h-screen">
          <Sidebar />
          <MainContent />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
