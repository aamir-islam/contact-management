import React from "react";
import { useLocation } from "react-router-dom";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { pathname } = useLocation();

  const getTitle = () => {
    switch (pathname) {
      case "/":
        return "Contact List";
      case "/chart":
        return "Chart and Map";
      default:
        return "MyApp";
    }
  };

  return (
    <div className="h-12 bg-blue-800 text-white text-xl flex items-center p-2">
      <button onClick={toggleSidebar} className="text-white mr-4">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div className="flex-grow text-center">{getTitle()}</div>
    </div>
  );
};

export default Header;
